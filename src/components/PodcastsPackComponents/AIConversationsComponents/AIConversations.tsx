// import { useState, useRef, useEffect, useCallback } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// type Message = {
//   id: string;
//   from: "user" | "ai";
//   text: string;
// };

// export default function AIConversations() {
//   const [messages, setMessages] = useState<Message[]>([
//     {
//       id: "1",
//       from: "ai",
//       text: "Hello! I'm your AI assistant. What would you like to talk about?",
//     },
//   ]);

//   const [input, setInput] = useState("");
//   const listRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (listRef.current) {
//       listRef.current.scrollTop = listRef.current.scrollHeight;
//     }
//   }, [messages]);
//   const send = useCallback(async () => {
//     if (!input.trim()) return;

//     const userMessage: Message = {
//       id: String(Date.now()),
//       from: "user",
//       text: input.trim(),
//     };

//     setMessages((prev) => [...prev, userMessage]);
//     setInput("");

//     try {
//       const response = await fetch("/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userMessage.text }),
//       });

//       const data = await response.json();

//       const aiMessage: Message = {
//         id: String(Date.now() + 1),
//         from: "ai",
//         text: data.reply,
//       };

//       setMessages((prev) => [...prev, aiMessage]);
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }, [input]);

//   return (
//     <div className="min-h-screen bg-[#0a0a0f] text-gray-100 flex items-center justify-center p-6">
//       <div
//         className="w-full max-w-4xl rounded-3xl overflow-hidden 
//         bg-gradient-to-br from-purple-900/30 to-purple-800/10
//         border border-purple-500/30
//         shadow-[0_20px_80px_rgba(139,92,246,0.25)]"
//       >
//         <div className="p-6 flex items-center gap-4 border-b border-purple-500/20">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="flex items-center gap-4"
//           >
//             <div
//               className="w-14 h-14 rounded-2xl 
//               bg-purple-500/10 
//               border border-purple-500/30 
//               flex items-center justify-center"
//             >
//               <svg
//                 className="w-8 h-8 text-purple-400"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="1.4"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
//               </svg>
//             </div>

//             <h1
//               className="text-2xl font-bold 
//               bg-gradient-to-r from-purple-400 to-purple-600 
//               bg-clip-text text-transparent"
//             >
//               AI Conversations
//             </h1>
//           </motion.div>
//         </div>

//         <div
//           ref={listRef}
//           className="h-[60vh] overflow-y-auto p-6 space-y-4 custom-scroll "
//         >
//           <AnimatePresence>
//             {messages.map((msg) => (
//               <motion.div
//                 key={msg.id}
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -10 }}
//                 transition={{ duration: 0.25 }}
//                 className={`flex ${
//                   msg.from === "user" ? "justify-end" : "justify-start"
//                 }`}
//               >
//                 <div
//                   className={`max-w-[75%] p-4 rounded-2xl text-sm border
//                   ${
//                     msg.from === "user"
//                       ? "bg-purple-500/20 border-purple-400/40 text-purple-200"
//                       : "bg-purple-900/40 border-purple-700/40 text-purple-100"
//                   }`}
//                 >
//                   {msg.text}
//                 </div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </div>

//         <div className="p-6 border-t border-purple-500/20 flex items-center gap-4">
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             onKeyDown={(e) => e.key === "Enter" && send()}
//             placeholder="Type a message..."
//             className="flex-1 p-4 rounded-2xl 
//               bg-black/40 
//               border border-purple-500/30 
//               text-purple-200
//               focus:outline-none 
//               focus:ring-2 focus:ring-purple-500/60"
//           />

//           <motion.button
//             onClick={send}
//             whileTap={{ scale: 0.9 }}
//             className="px-6 py-3 rounded-2xl 
//               bg-gradient-to-r from-purple-500 to-purple-700
//               text-white font-medium
//               shadow-lg shadow-purple-500/30
//               hover:shadow-purple-500/50
//               transition"
//           >
//             Send
//           </motion.button>
//         </div>
//       </div>
//     </div>
//   );
// }
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

    // сообщение "думает"
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

      // заменяем thinking на ответ
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === thinkingId
            ? { ...msg, text: data.reply }
            : msg
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
    <div className="min-h-screen bg-[#0a0a0f] text-gray-100 flex items-center justify-center p-6">
      <div
        className="w-full max-w-4xl rounded-3xl overflow-hidden 
        bg-gradient-to-br from-purple-900/30 to-purple-800/10
        border border-purple-500/30
        shadow-[0_20px_80px_rgba(139,92,246,0.25)]"
      >
        <div className="p-6 flex items-center gap-4 border-b border-purple-500/20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4"
          >
            <div
              className="w-14 h-14 rounded-2xl 
              bg-purple-500/10 
              border border-purple-500/30 
              flex items-center justify-center"
            >
              <svg
                className="w-8 h-8 text-purple-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
              </svg>
            </div>

            <h1
              className="text-2xl font-bold 
              bg-gradient-to-r from-purple-400 to-purple-600 
              bg-clip-text text-transparent"
            >
              AI Conversations
            </h1>
          </motion.div>
        </div>

        <div
          ref={listRef}
          className="h-[60vh] overflow-y-auto p-6 space-y-4 custom-scroll"
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
                  className={`max-w-[75%] p-4 rounded-2xl text-sm border
                  ${
                    msg.from === "user"
                      ? "bg-purple-500/20 border-purple-400/40 text-purple-200"
                      : "bg-purple-900/40 border-purple-700/40 text-purple-100"
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

        <div className="p-6 border-t border-purple-500/20 flex items-center gap-4">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && send()}
            placeholder="Type a message..."
            className="flex-1 p-4 rounded-2xl 
              bg-black/40 
              border border-purple-500/30 
              text-purple-200
              focus:outline-none 
              focus:ring-2 focus:ring-purple-500/60"
          />

          <motion.button
            onClick={send}
            disabled={isLoading}
            whileTap={{ scale: 0.9 }}
            className="px-6 py-3 rounded-2xl 
              bg-gradient-to-r from-purple-500 to-purple-700
              text-white font-medium
              shadow-lg shadow-purple-500/30
              hover:shadow-purple-500/50
              transition
              disabled:opacity-50"
          >
            Send
          </motion.button>
        </div>
      </div>
    </div>
  );
}