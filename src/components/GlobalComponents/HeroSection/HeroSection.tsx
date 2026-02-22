"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0a0f] text-white flex items-center justify-center px-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(120,119,198,0.25),transparent_50%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-purple-700/20 blur-[160px] rounded-full" />

      <div className="relative z-10 text-center max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight"
        >
          Unified{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            AI Intelligence
          </span>
          <br />
          In One Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto"
        >
          Connect GPT, Gemini, Claude, DeepSeek and more. One interface.
          Infinite intelligence.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <Link
            to="/ai-conversations"
            className="px-8 py-4 rounded-2xl bg-white text-black font-medium hover:scale-105 transition"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
