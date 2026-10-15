import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import {
  Briefcase01Icon,
  CodeIcon,
  Mortarboard01Icon,
  Rocket01Icon,
} from "@hugeicons/core-free-icons";
import PromptBar from "./ui/PromptBar";

const TOPICS = [
  { key: "experience", name: "Experience", description: "Oracle, internships, roles", icon: Briefcase01Icon },
  { key: "projects", name: "Projects", description: "GestureOS, BugInsight & more", icon: Rocket01Icon },
  { key: "skills", name: "Skills", description: "Languages, AI, frameworks", icon: CodeIcon },
  { key: "education", name: "Education", description: "VIT Vellore, BTech CSE", icon: Mortarboard01Icon },
];

const COMMANDS = [
  { key: "intro", name: "/intro", description: "A quick introduction" },
  { key: "gestureos", name: "/gestureos", description: "How GestureOS works" },
  { key: "agents", name: "/agents", description: "The multi-agent MCP system" },
  { key: "contact", name: "/contact", description: "How to reach me" },
];

// Slash commands expand into full questions before they are sent to the model.
const COMMAND_PROMPTS = {
  "/intro": "Give me a quick introduction about yourself.",
  "/gestureos": "Tell me about GestureOS and how it works.",
  "/agents": "Tell me about the orchestrator-led multi-agent system you built with MCP servers.",
  "/contact": "How can I contact you?",
};

const HISTORY_MESSAGES = 6;

const expandCommand = (text) => {
  const match = /^(\/[\w-]+)\s*(.*)$/s.exec(text);
  if (!match || !COMMAND_PROMPTS[match[1]]) return text;
  return [COMMAND_PROMPTS[match[1]], match[2]].filter(Boolean).join(" ");
};

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hi! I'm Priyansh Mehta. I'm here to answer any questions you have about my background, skills, experience, or career. What would you like to know?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef(null);
  const controllerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (text) => {
    const question = expandCommand(text.trim());
    if (!question || isLoading) return;

    const userMessage = {
      id: Date.now(),
      text: question,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);
    controllerRef.current = new AbortController();

    try {
      const response = await chat(question, messages, controllerRef.current.signal);

      const botMessage = {
        id: Date.now() + 1,
        text: response,
        sender: "bot",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      if (controllerRef.current?.signal.aborted) return;
      console.error("Error getting response:", error);
      const errorMessage = {
        id: Date.now() + 1,
        text:
          error.friendly ??
          "I'm sorry, I'm having trouble responding right now. Please try again later.",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      controllerRef.current = null;
      setIsLoading(false);
    }
  };

  // The server does retrieval and the model call; the OpenAI key never reaches the browser.
  const chat = async (message, history, signal) => {
    const recent = history
      .filter((msg) => msg.id !== 1)
      .slice(-HISTORY_MESSAGES)
      .map((msg) => ({
        role: msg.sender === "user" ? "user" : "assistant",
        content: msg.text,
      }));

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message, history: recent }),
      signal,
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) {
      const error = new Error(`HTTP ${res.status}`);
      error.friendly = data.error;
      throw error;
    }
    // A host without the chat server (e.g. a static deploy) answers 200 with HTML.
    if (typeof data.reply !== "string" || !data.reply.trim()) {
      throw new Error("Chat API returned no reply; is the server running?");
    }
    return data.reply;
  };

  return (
    <>
      {/* Animated Chat Invitation */}
      {!isOpen && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 3,
          }}
          className="fixed bottom-6 right-20 z-40 bg-secondary text-white px-4 py-2 rounded-full shadow-lg"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex items-center space-x-2"
          >
            <span className="text-sm font-medium">Hey! Come Chat with me</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              👋
            </motion.div>
          </motion.div>
        </motion.div>
      )}

      {/* Chatbot Toggle Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-tertiary p-4 rounded-full shadow-lg hover:bg-secondary transition-all duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <div className="w-6 h-6">
          {isOpen ? (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </motion.button>

      {/* Chatbot Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.8 }}
          className="fixed bottom-24 right-6 z-40 w-[calc(100vw-3rem)] sm:w-96 h-[500px] bg-primary rounded-2xl shadow-2xl border border-tertiary flex flex-col"
        >
          {/* Header */}
          <div className="bg-tertiary p-4 rounded-t-2xl flex items-center space-x-3">
            <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <div>
              <h3 className="text-white font-semibold">Priyansh Mehta</h3>
              <p className="text-gray-300 text-sm">AI Assistant</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-secondary text-white"
                      : "bg-tertiary text-white"
                  }`}
                >
                  <div className="text-sm chatbot-markdown">
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => (
                          <p className="text-sm mb-2">{children}</p>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc list-inside space-y-1 mb-2">
                            {children}
                          </ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal list-inside space-y-1 mb-2">
                            {children}
                          </ol>
                        ),
                        li: ({ children }) => (
                          <li className="text-sm">{children}</li>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-semibold">{children}</strong>
                        ),
                        em: ({ children }) => (
                          <em className="italic">{children}</em>
                        ),
                      }}
                    >
                      {message.text}
                    </ReactMarkdown>
                  </div>
                  <p className="text-xs opacity-70 mt-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </motion.div>
            ))}

            {isLoading && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-tertiary p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-white rounded-full animate-bounce"></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "0.1s" }}
                    ></div>
                    <div
                      className="w-2 h-2 bg-white rounded-full animate-bounce"
                      style={{ animationDelay: "0.2s" }}
                    ></div>
                  </div>
                </div>
              </motion.div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-tertiary">
            <PromptBar
              placeholder="Ask me anything — try @ or /"
              sources={TOPICS}
              commands={COMMANDS}
              models={[]}
              efforts={[]}
              showSourcesButton={false}
              busy={isLoading}
              onSend={(text) => handleSendMessage(text)}
              onStop={() => controllerRef.current?.abort()}
              background="#151030"
              color="#f3f3f3"
              menuBackground="#1d1836"
              sparkColor="#915EFF"
              sparkBoost={1}
              width={360}
              radius={16}
              maxRows={5}
              morphDuration={240}
              squash={0.12}
              tilt={8}
              pressScale={0.96}
            />
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Chatbot;
