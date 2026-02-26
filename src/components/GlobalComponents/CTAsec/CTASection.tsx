"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section
      className="relative w-full py-32
      bg-gradient-to-b from-[#2B2623] via-[#26221F] to-[#1F1B18]
      overflow-hidden flex justify-center items-center px-6"
    >
      {/* мягкий свет сверху (переход между секциями) */}
      <div
        className="absolute inset-0
        bg-[radial-gradient(circle_at_50%_0%,rgba(191,163,74,0.18),transparent_60%)]"
      />

      {/* основной ambient glow */}
      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2
        w-[700px] h-[700px]
        bg-[#BFA34A]/20 blur-[120px] rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl w-full rounded-3xl
        border border-[#BFA34A]/30
        bg-gradient-to-br from-[#3A332E]/70 to-[#2B2623]/60
        backdrop-blur-xl
        p-16 text-center
        shadow-[0_20px_70px_rgba(0,0,0,0.55)]"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-[#F5F3EE]">
          Ready to Experience
          <span
            className="block bg-gradient-to-r
            from-[#BFA34A] via-[#D4B75A] to-[#E8D48A]
            bg-clip-text text-transparent"
          >
            Next-Gen AI?
          </span>
        </h2>

        <p className="mt-6 text-[#B9B2A8] text-lg max-w-2xl mx-auto">
          Start conversations with the most powerful AI models in one seamless
          interface. No limits. No switching. Just intelligence.
        </p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-10"
        >
          <Link
            to="/ai-conversations"
            className="relative inline-flex items-center justify-center
            px-10 py-5 rounded-2xl font-medium
            text-[#2B2623]
            bg-gradient-to-r from-[#BFA34A] to-[#E8D48A]
            shadow-lg shadow-black/40
            hover:shadow-[0_10px_40px_rgba(191,163,74,0.35)]
            transition duration-300"
          >
            Launch AI Chat →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}