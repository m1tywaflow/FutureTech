import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AIConversations() {
  const [messages, setMessages] = useState<
    Array<{ id: string; from: "user" | "ai"; text: string }>
  >([
    {
      id: "1",
      from: "ai",
      text: "Hello! I'm your AI assistant. What would you like to talk about?",
    },
    { id: "2", from: "user", text: "Tell me your best UX practices." },
  ]);

  const [input, setInput] = useState("");
  const listRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;

    const userMessage = {
      id: String(Date.now()),
      from: "user",
      text: input.trim(),
    } as const;

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    setTimeout(() => {
      const aiMessage = {
        id: String(Date.now() + 1),
        from: "ai",
        text: generateAIReply(userMessage.text),
      } as const;

      setMessages((prev) => [...prev, aiMessage]);
    }, 700 + Math.random() * 600);
  };

  const generateAIReply = (prompt: string) => {
    const replies = [
      "Interesting topic — here are a few ideas:",
      "Focus on clarity, simplicity, and fast feedback loops.",
      "Tip: test your interface with real users early.",
      "I can draft a design mockup or flow if you want.",
    ];
    return `${
      replies[Math.floor(Math.random() * replies.length)]
    } (reply to: "${prompt}")`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-950 via-amber-900/80 to-black text-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden ring-1 ring-amber-700/40 backdrop-blur-xl bg-black/30">
        {/* Header */}
        <div className="relative  from-amber-900/30 via-amber-700/20 to-transparent p-6 flex items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div className="w-14 h-14 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-8 h-8 text-amber-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-amber-300 drop-shadow-md">
              AI Conversations
            </h1>
          </motion.div>
        </div>

        {/* Chat area */}
        <div
          ref={listRef}
          className="h-[60vh] overflow-y-auto p-6 space-y-4 scroll-smooth"
        >
          <AnimatePresence>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className={`flex ${
                  msg.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[75%] p-4 rounded-2xl text-sm shadow-lg backdrop-blur-md border
                    ${
                      msg.from === "user"
                        ? "bg-amber-500/20 border-amber-400/40 text-amber-200"
                        : "bg-amber-900/40 border-amber-700/40 text-amber-100"
                    }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Input */}
        <div className="p-6 bg-black/20 border-t border-amber-800/30 flex items-center gap-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a message..."
            className="flex-1 p-4 rounded-2xl bg-black/40 border border-amber-700/40 text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500/60 backdrop-blur"
          />
          <motion.button
            onClick={send}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 rounded-2xl bg-amber-600/40 border border-amber-500/40 text-amber-100 font-medium hover:bg-amber-600/50 backdrop-blur shadow-lg"
          >
            Send
          </motion.button>
        </div>
      </div>
    </div>
  );
}
