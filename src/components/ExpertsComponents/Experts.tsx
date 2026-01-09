"use client";

import { motion, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0): Variants => ({
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  },
});

export default function Experts() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-250px] h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute right-[5%] bottom-[-300px] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-28">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="mb-32 max-w-3xl"
        >
          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            Expert <span className="text-yellow-400">Contributors</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            Behind every article stands a professional who builds, researches,
            or governs artificial intelligence in the real world.
          </p>
        </motion.div>

        <div className="mb-32 grid gap-10 md:grid-cols-3">
          {[
            {
              name: "AI Researchers",
              text: "PhDs, scientists, and academics working on cutting-edge machine learning and AI theory.",
            },
            {
              name: "Industry Engineers",
              text: "Practitioners building production AI systems at startups and global tech companies.",
            },
            {
              name: "Ethics & Policy Experts",
              text: "Specialists ensuring responsible, fair, and transparent use of artificial intelligence.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.name}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-8 backdrop-blur"
            >
              <h3 className="mb-4 text-xl font-semibold text-yellow-400">
                {item.name}
              </h3>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32 rounded-3xl border border-yellow-400/30 bg-yellow-400/5 p-12"
        >
          <h2 className="mb-6 text-3xl font-bold">Why Experts Matter</h2>
          <p className="mb-6 text-gray-300 leading-relaxed">
            Artificial intelligence evolves faster than almost any other field.
            Misinformation spreads easily — expertise does not.
          </p>
          <p className="text-gray-300 leading-relaxed">
            That’s why every piece of content on FutureTech is written or
            reviewed by professionals actively working with AI technologies. No
            hype. No speculation. Only grounded, experience-backed insight.
          </p>
        </motion.div>

        <div className="mb-32 grid gap-10 md:grid-cols-4">
          {[
            ["01", "Real-World Experience"],
            ["02", "Proven Expertise"],
            ["03", "Ethical Standards"],
            ["04", "Clear Communication"],
          ].map(([step, title], i) => (
            <motion.div
              key={step}
              variants={fadeUp(i * 0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-xl border border-white/10 bg-black p-6 text-center"
            >
              <div className="mb-4 text-3xl font-bold text-yellow-400">
                {step}
              </div>
              <p className="font-semibold text-gray-300">{title}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-32 grid gap-10 md:grid-cols-3">
          {[
            { value: "50+", label: "Active Contributors" },
            { value: "100%", label: "Expert-Reviewed Content" },
            { value: "0%", label: "Paid Opinions" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-8 text-center"
            >
              <div className="mb-2 text-4xl font-bold text-yellow-400">
                {item.value}
              </div>
              <p className="text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.blockquote
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32 rounded-3xl border border-yellow-400/30 bg-black p-12 text-center italic text-gray-300"
        >
          “True expertise isn’t about predicting the future — it’s about
          understanding the systems shaping it today.”
        </motion.blockquote>

        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-6 text-3xl font-bold">
            Built by Experts. Trusted Worldwide.
          </h2>
          <p className="mb-10 text-gray-300">
            Join thousands of professionals who rely on FutureTech.
          </p>

          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl bg-yellow-400 px-12 py-4 font-semibold text-black shadow-lg shadow-yellow-400/30"
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
