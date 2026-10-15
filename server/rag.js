import fs from "node:fs";
import { EMBED_DIMENSIONS, EMBED_MODEL } from "./ragConfig.js";

// At most TOP_K chunks, each scoring at least MIN_SCORE and within RELATIVE_CUTOFF of the
// best match: a focused question sends one or two chunks, an off-topic one sends none.
const TOP_K = 3;
const MIN_SCORE = 0.25;
const RELATIVE_CUTOFF = 0.8;

const index = JSON.parse(fs.readFileSync(new URL("./chatbot-index.json", import.meta.url), "utf8"));

if (index.model !== EMBED_MODEL || index.dimensions !== EMBED_DIMENSIONS) {
  throw new Error("chatbot-index.json is stale; run `npm run chat:index`.");
}

const cosine = (a, b) => {
  let dot = 0;
  let na = 0;
  let nb = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    na += a[i] * a[i];
    nb += b[i] * b[i];
  }
  return dot / (Math.sqrt(na * nb) || 1);
};

// Returns the pinned profile chunk plus the chunks most similar to `query`.
export const retrieve = async (openai, query, signal) => {
  const { data } = await openai.embeddings.create(
    { model: EMBED_MODEL, input: query, dimensions: EMBED_DIMENSIONS },
    { signal }
  );
  const embedding = data[0].embedding;

  const pinned = index.chunks.filter((chunk) => chunk.pinned);
  const ranked = index.chunks
    .filter((chunk) => !chunk.pinned)
    .map((chunk) => ({ chunk, score: cosine(embedding, chunk.embedding) }))
    .filter(({ score }) => score >= MIN_SCORE)
    .sort((a, b) => b.score - a.score);
  const best = ranked[0]?.score ?? 0;
  const relevant = ranked
    .filter(({ score }) => score >= best * RELATIVE_CUTOFF)
    .slice(0, TOP_K)
    .map(({ chunk }) => chunk);

  return [...pinned, ...relevant];
};

// One "Section: text" line per chunk. Measured cheaper than TOON or JSON for prose chunks.
export const toContext = (chunks) =>
  ["CONTEXT:", ...chunks.map((chunk) => `${chunk.section}: ${chunk.text}`)].join("\n");
