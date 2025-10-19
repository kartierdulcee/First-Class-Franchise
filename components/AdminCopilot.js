import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const initialMessages = [
  {
    role: "assistant",
    content:
      "I'm Copilot — your ruthless strategic operator. Give me the real challenge and I'll cut straight to the leverage points that move revenue, ops, or client delivery.",
  },
];

const stripFormatting = (text) => {
  if (!text) return "";
  let cleaned = text
    .replace(/\r/g, "")
    .replace(/[*_~`]/g, "")
    .replace(/["“”]/g, "")
    .replace(/^\s*[-•]\s*/gm, "• ")
    .replace(/^\s*\d+\.\s*/gm, (match) => `${match.trim()} `);

  return cleaned
    .split(/\n+/)
    .map((line) => line.replace(/\s{2,}/g, " ").trim())
    .filter(Boolean);
};

export default function AdminCopilot() {
  const [messages, setMessages] = useState(initialMessages);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const trimmed = input.trim();
    if (!trimmed) return;

    const updatedMessages = [...messages, { role: "user", content: trimmed }];
    setMessages(updatedMessages);
    setInput("");
    setIsLoading(true);
    setError("");

    try {
      const response = await fetch("/api/mistral-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!response.ok) {
        const text = await response.text();
        throw new Error(text || "Failed to reach Copilot");
      }

      const data = await response.json();
      setMessages([
        ...updatedMessages,
        { role: "assistant", content: data.reply || "I'm here, but didn't receive any data." },
      ]);
    } catch (err) {
      setError("Unable to contact the Mistral Copilot. Try again shortly or contact engineering.");
      setMessages(updatedMessages);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full min-h-[80vh] flex-col overflow-hidden rounded-4xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(255,49,49,0.1),_transparent_55%)] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.55)] backdrop-blur-3xl">
      <header className="flex flex-col gap-2 border-b border-white/5 pb-6">
        <span className="heading-font text-xs uppercase tracking-[0.3em] text-[#ff3131]">
          AI Flight Deck
        </span>
        <h2 className="heading-font text-3xl font-semibold text-white">Copilot</h2>
        <p className="text-sm text-white/60">
          Ask for automation briefs, SOP summaries, messaging ideas, or ops insights. Copilot runs
          on our internal knowledge base via Mistral.
        </p>
      </header>

      <div className="mt-6 flex-1 overflow-hidden rounded-3xl border border-white/10 bg-black/40">
        <div className="flex h-full flex-col justify-between">
          <div className="custom-scrollbar flex-1 space-y-6 overflow-y-auto px-6 py-6">
            {messages.map((message, index) => {
              const lines = stripFormatting(message.content);
              return (
                <motion.div
                  key={`${message.role}-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className={`flex ${
                    message.role === "user" ? "justify-end text-right" : "justify-start text-left"
                  }`}
                >
                  <div
                    className={`max-w-2xl rounded-3xl border px-4 py-3 text-sm leading-relaxed shadow-lg ${
                      message.role === "user"
                        ? "heading-font border-[#ff3131]/60 bg-[#ff3131]/20 text-white"
                        : "border-white/10 bg-white/[0.04] text-white/80"
                    }`}
                  >
                    {lines.length > 0 ? (
                      <div className="space-y-2">
                        {lines.map((line, lineIndex) => (
                          <p key={lineIndex}>{line}</p>
                        ))}
                      </div>
                    ) : (
                      message.content
                    )}
                  </div>
                </motion.div>
              );
            })}
            {isLoading ? (
              <motion.div
                className="flex justify-start text-left"
                initial={{ opacity: 0.4 }}
                animate={{ opacity: 1 }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 0.9 }}
              >
                <div className="max-w-sm rounded-3xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white/60 shadow-lg">
                  Copilot is thinking...
                </div>
              </motion.div>
            ) : null}
            <div ref={scrollRef} />
          </div>
          <div className="border-t border-white/10 bg-black/60 px-6 py-4">
            {error ? (
              <div className="mb-3 rounded-2xl border border-[#ff3131]/60 bg-[#ff3131]/10 px-4 py-3 text-sm text-[#ff8b8b]">
                {error}
              </div>
            ) : null}
            <form onSubmit={handleSubmit} className="flex items-end gap-3">
              <textarea
                rows={2}
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask Copilot for help with a client workflow, SOP, or automation idea..."
                className="flex-1 resize-none rounded-2xl border border-white/15 bg-white/[0.04] px-4 py-3 text-sm text-white placeholder:text-white/35 focus:border-[#ff3131] focus:outline-none focus:ring-0"
              />
              <button
                type="submit"
                disabled={isLoading}
                className="heading-font inline-flex min-w-[120px] items-center justify-center rounded-2xl border border-[#ff3131]/60 bg-[#ff3131] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#ff4545] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isLoading ? "Sending…" : "Send"}
              </button>
            </form>
            <p className="mt-3 text-right text-[11px] uppercase tracking-[0.25em] text-white/30">
              Powered By First Class
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
