// Embeds src/data/knowledge.json into server/chatbot-index.json for the chatbot's retrieval.
// Run with `npm run chat:index` whenever knowledge.json changes, and commit the output.
import fs from "node:fs";
import OpenAI from "openai";
import { EMBED_MODEL, EMBED_DIMENSIONS } from "../server/ragConfig.js";

const readKey = () => {
  if (process.env.OPENAI_API_KEY) return process.env.OPENAI_API_KEY;
  if (process.env.VITE_APP_OPENAI_KEY) return process.env.VITE_APP_OPENAI_KEY;
  const env = fs.existsSync(".env") ? fs.readFileSync(".env", "utf8") : "";
  return env.match(/^VITE_APP_OPENAI_KEY=(.*)$/m)?.[1].trim();
};

const apiKey = readKey();
if (!apiKey) {
  console.error("No OpenAI key found (OPENAI_API_KEY, VITE_APP_OPENAI_KEY or .env).");
  process.exit(1);
}

const chunks = JSON.parse(fs.readFileSync("src/data/knowledge.json", "utf8"));
// Section and keywords are embedded alongside the text so vague questions
// ("where did you study?") still land on the right chunk. Only `text` is sent to the model.
const inputs = chunks.map((chunk) =>
  [`${chunk.section}: ${chunk.text}`, chunk.keywords && `Topics: ${chunk.keywords}`].filter(Boolean).join("\n")
);

const openai = new OpenAI({ apiKey });
const { data, usage } = await openai.embeddings.create({
  model: EMBED_MODEL,
  input: inputs,
  dimensions: EMBED_DIMENSIONS,
});

const index = {
  model: EMBED_MODEL,
  dimensions: EMBED_DIMENSIONS,
  chunks: chunks.map(({ keywords, ...chunk }, i) => ({
    ...chunk,
    embedding: data[i].embedding.map((v) => Math.round(v * 1e4) / 1e4),
  })),
};

fs.writeFileSync("server/chatbot-index.json", JSON.stringify(index));
console.log(`Embedded ${chunks.length} chunks (${usage.total_tokens} tokens) -> server/chatbot-index.json`);
