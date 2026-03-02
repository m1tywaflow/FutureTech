"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AiBg from "../../../assets/AIBg/aiBg.png";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen w-full overflow-hidden bg-[#2F2A27] text-[#F5F3EE] flex items-center bg-cover bg-center"
      style={{ backgroundImage: `url(${AiBg})` }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(120,119,198,0.25),transparent_50%)]" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#BFA34A] blur-[160px] rounded-full opacity-40" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-semibold tracking-tight leading-tight"
          >
            Unified{" "}
            <span className="bg-gradient-to-r from-[#BFA34A] via-[#D4B75A] to-[#E8D48A] bg-clip-text text-transparent">
              AI Intelligence
            </span>
            <br />
            In One Platform
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-6 text-lg text-gray-400"
          >
            Connect GPT, Gemini, Claude, DeepSeek and more. One interface.
            Infinite intelligence.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-10 flex items-center gap-4"
          >
            <Link
              to="/ai-conversations"
              className="px-8 py-4 rounded-2xl bg-[#BFA34A] text-[#2F2A27] font-medium hover:bg-[#D4B75A] transition"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
