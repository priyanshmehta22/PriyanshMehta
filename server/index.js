// Serves the built site and the chatbot API from one origin, keeping the OpenAI key server-side.
import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";
import OpenAI from "openai";
import { retrieve, toContext } from "./rag.js";

try {
  process.loadEnvFile();
} catch {
  // No .env file: rely on the host's environment variables.
}

const apiKey = process.env.OPENAI_API_KEY || process.env.VITE_APP_OPENAI_KEY;
if (!apiKey) {
  console.error("Set OPENAI_API_KEY to enable the chatbot.");
  process.exit(1);
}

const PORT = Number(process.env.PORT) || 3001;
const CHAT_MODEL = "gpt-5-nano";
const MAX_MESSAGE_CHARS = 500;
const MAX_MESSAGE_LINES = 6;
const HISTORY_MESSAGES = 6;
const HISTORY_CHARS = 500;
const RATE_LIMIT = 20;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const LINKEDIN = "https://www.linkedin.com/in/priyansh-mehta-8b44921bb/";

const OFF_TOPIC_REPLY =
  "I can only answer questions about me and my work. Ask me about my experience, projects or skills!";

// Pasted code, documents or long multi-line text are never questions about me:
// refuse them before spending any tokens.
const looksLikePastedContent = (message) =>
  message.includes("```") || message.split(/\r?\n/).length > MAX_MESSAGE_LINES;

const SYSTEM_PROMPT = `You are Priyansh Mehta answering visitors on your portfolio site, in first person.
Scope: answer only greetings and questions about Priyansh: background, work, projects, skills, education, location or how to contact him.
For anything else (writing, fixing or explaining code or scripts; reading, summarising or converting documents or PDFs; general knowledge; homework; translations; unrelated advice), reply exactly: "${OFF_TOPIC_REPLY}"
Rules:
- Use only facts from CONTEXT. Never invent numbers, employers, dates or projects.
- If CONTEXT lacks the answer, say you don't have that detail here and suggest emailing priyansh9571mehta@gmail.com.
- Hiring or job questions: do not state whether I am available; invite them to reach out by email or LinkedIn ${LINKEDIN}.
- Politely decline sensitive personal questions.
- Keep replies short: 1-4 sentences or a brief list. Light Markdown only.`;

const openai = new OpenAI({ apiKey });
const app = express();
app.set("trust proxy", 1);
app.use(express.json({ limit: "16kb" }));

// Small per-IP limit so a public endpoint can't run up the OpenAI bill.
const hits = new Map();
const rateLimited = (ip) => {
  const now = Date.now();
  const entry = hits.get(ip);
  if (!entry || now > entry.reset) {
    hits.set(ip, { count: 1, reset: now + RATE_WINDOW_MS });
    return false;
  }
  entry.count += 1;
  return entry.count > RATE_LIMIT;
};
setInterval(() => {
  const now = Date.now();
  for (const [ip, entry] of hits) if (now > entry.reset) hits.delete(ip);
}, RATE_WINDOW_MS).unref();

const cleanHistory = (history) =>
  (Array.isArray(history) ? history : [])
    .filter((msg) => (msg?.role === "user" || msg?.role === "assistant") && typeof msg.content === "string")
    .slice(-HISTORY_MESSAGES)
    .map((msg) => ({ role: msg.role, content: msg.content.slice(0, HISTORY_CHARS) }));

app.post("/api/chat", async (req, res) => {
  const message = typeof req.body?.message === "string" ? req.body.message.trim() : "";
  if (!message || message.length > MAX_MESSAGE_CHARS) {
    return res.status(400).json({ error: "Please keep questions under 500 characters." });
  }
  if (looksLikePastedContent(message)) {
    return res.json({ reply: OFF_TOPIC_REPLY });
  }
  if (rateLimited(req.ip)) {
    return res.status(429).json({ error: "Too many messages. Please try again in a few minutes." });
  }

  // Stop paying for a reply nobody is waiting for.
  const controller = new AbortController();
  res.on("close", () => {
    if (!res.writableEnded) controller.abort();
  });

  try {
    const history = cleanHistory(req.body.history);
    // Follow-ups like "tell me more" need the previous question to retrieve well.
    const lastQuestion = [...history].reverse().find((msg) => msg.role === "user");
    const query = lastQuestion ? `${lastQuestion.content}\n${message}` : message;
    const context = await retrieve(openai, query, controller.signal);

    const response = await openai.chat.completions.create(
      {
        model: CHAT_MODEL,
        reasoning_effort: "low",
        verbosity: "low",
        max_completion_tokens: 1200,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "system", content: toContext(context) },
          ...history,
          { role: "user", content: message },
        ],
      },
      { signal: controller.signal }
    );

    const reply = response.choices[0]?.message?.content?.trim();
    if (!reply) throw new Error(`Empty reply (finish_reason: ${response.choices[0]?.finish_reason})`);
    res.json({ reply });
  } catch (error) {
    if (controller.signal.aborted) return;
    console.error("chat error:", error.status ?? "", error.message);
    res.status(502).json({ error: "The assistant is unavailable right now." });
  }
});

app.get("/api/health", (req, res) => res.json({ ok: true }));

// Built site; any non-API path falls back to index.html for client-side routing.
const dist = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "dist");
app.use(express.static(dist, { index: false, maxAge: "1h" }));
app.get(/^(?!\/api\/).*/, (req, res) => res.sendFile(path.join(dist, "index.html")));

app.listen(PORT, () => console.log(`Server listening on http://localhost:${PORT}`));
