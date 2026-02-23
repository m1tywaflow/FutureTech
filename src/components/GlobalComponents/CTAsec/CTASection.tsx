"use client";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section
      className="relative w-full py-32 
                        bg-gradient-to-b from-[#000000] to-[#5316fc] 
                        overflow-hidden flex justify-center items-center px-6"
    >
      <div
        className="absolute inset-0 
                      bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_60%)]"
      />

      <div
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 
                      w-[800px] h-[800px] 
                      bg-cyan-500/20 blur-[140px] rounded-full"
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative z-10 max-w-4xl w-full rounded-3xl 
                   border border-cyan-400/30
                   bg-gradient-to-br from-cyan-900/40 to-blue-800/20
                   p-16 text-center
                   shadow-[0_20px_80px_rgba(56,189,248,0.25)]"
      >
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight text-white">
          Ready to Experience
          <span
            className="block bg-gradient-to-r 
                           from-cyan-400 to-blue-500 
                           bg-clip-text text-transparent"
          >
            Next-Gen AI?
          </span>
        </h2>

        <p className="mt-6 text-gray-400 text-lg max-w-2xl mx-auto">
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
                       text-white 
                       bg-gradient-to-r from-cyan-500 to-blue-600
                       shadow-lg shadow-cyan-500/30
                       hover:shadow-cyan-500/50
                       transition duration-300"
          >
            Launch AI Chat →
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
