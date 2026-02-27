import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
  id: string;
  from: "user" | "ai";
  text: string;
};

export default function AIConversations() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      from: "ai",
      text: "Hello! I'm your AI assistant. What would you like to talk about?",
    },
  ]);

  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const send = useCallback(async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: String(Date.now()),
      from: "user",
      text: input.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    const thinkingId = String(Date.now() + 1);

    setMessages((prev) => [
      ...prev,
      {
        id: thinkingId,
        from: "ai",
        text: "AI is thinking...",
      },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage.text }),
      });

      const data = await response.json();

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === thinkingId ? { ...msg, text: data.reply } : msg
        )
      );
    } catch (error) {
      console.error(error);

      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === thinkingId
            ? { ...msg, text: "Error getting response." }
            : msg
        )
      );
    } finally {
      setIsLoading(false);
    }
  }, [input, isLoading]);

  return (
    <div className="min-h-screen bg-[#1F1B18] text-[#F5F3EE] flex items-center justify-center  p-3 sm:p-6 sm:pt-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(191,163,74,0.12),transparent_60%)]" />

      <div
        className="relative w-full max-w-5xl rounded-3xl overflow-hidden 
        bg-gradient-to-br from-[#2B2623]/90 to-[#24201D]/90
        border border-[#BFA34A]/30
        shadow-[0_20px_70px_rgba(0,0,0,0.6)] backdrop-blur-xl"
      >
        <div className="relative p-4 sm:p-6 flex items-center justify-between border-b border-[#BFA34A]/20">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#BFA34A]/10 border border-[#BFA34A]/30 flex items-center justify-center">
              <div className="absolute inset-0 rounded-2xl bg-[#BFA34A]/20 blur-xl opacity-40" />
              <svg
                className="relative w-7 h-7 text-[#E8D48A]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-[#BFA34A] via-[#D4B75A] to-[#E8D48A] bg-clip-text text-transparent">
                AI Conversations
              </h1>
              <div className="flex items-center gap-2 text-xs text-[#9F8F6A]">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Online • AI Assistant
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <div className="px-3 py-1 rounded-lg bg-[#1F1B18] border border-[#3A332E] text-xs text-[#BFA34A]">
              DeepSeek Model
            </div>
          </div>
        </div>
        <div
          ref={listRef}
          onWheelCapture={(e) => e.stopPropagation()}
          className="h-[55vh] sm:h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3 sm:space-y-4 custom-scroll"
        >
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[85%] sm:max-w-[75%] p-3 sm:p-4 rounded-2xl text-sm sm:text-[15px] border leading-relaxed whitespace-pre-wrap
                  ${
                    msg.from === "user"
                      ? "bg-[#BFA34A]/20 border-[#BFA34A]/40 text-[#F5F3EE]"
                      : "bg-[#2B2623] border-[#3A332E] text-[#E6E1D9]"
                  }`}
                >
                  {msg.text === "AI is thinking..." ? (
                    <div className="flex items-center gap-1">
                      <span>AI is thinking</span>
                      <span className="animate-pulse">...</span>
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
        <div className="p-4 sm:p-6 border-t border-[#BFA34A]/20 flex items-center gap-3 sm:gap-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a message..."
            className="flex-1 p-3 sm:p-4 rounded-2xl
              bg-[#1F1B18]
              border border-[#3A332E]
              text-[#F5F3EE] text-sm sm:text-base
              focus:outline-none
              focus:ring-2 focus:ring-[#BFA34A]/60"
          />
          <motion.button
            onClick={send}
            disabled={isLoading}
            whileTap={{ scale: 0.92 }}
            className="px-4 sm:px-6 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-[#BFA34A] to-[#E8D48A] text-[#2B2623] font-medium shadow-lg shadow-black/40 hover:shadow-[0_10px_35px_rgba(191,163,74,0.35)] transition disabled:opacity-50"
          >
            Send
          </motion.button>
        </div>
      </div>
    </div>
  );
}
