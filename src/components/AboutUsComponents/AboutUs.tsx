"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.8, ease: "easeOut" },
  }),
};

export default function AboutPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <section className="relative bg-black text-white">
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-yellow-400"
      />

      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:100%_4px]" />

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-300px] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-yellow-400/20 blur-3xl" />
        <div className="absolute bottom-[-300px] right-[10%] h-[500px] w-[500px] rounded-full bg-yellow-500/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32 max-w-4xl"
        >
          <motion.h1
            variants={fadeUp}
            className="mb-6 text-4xl font-extrabold md:text-6xl"
          >
            Explore the Frontiers of{" "}
            <span className="text-yellow-400">Artificial Intelligence</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-lg text-gray-300"
          >
            FutureTech AI News is your gateway into a world where machines
            think, learn, and reshape reality.
          </motion.p>
        </motion.div>

        <div className="mb-32 grid gap-10 md:grid-cols-3">
          {[
            { value: "10K+", label: "Monthly Readers" },
            { value: "300+", label: "AI Articles" },
            { value: "2020 → ∞", label: "Tracking AI Evolution" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-8 text-center backdrop-blur"
            >
              <div className="mb-2 text-4xl font-bold text-yellow-400">
                {item.value}
              </div>
              <p className="text-gray-300">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-32 grid gap-16 md:grid-cols-2">
          {[
            {
              title: "Our Mission",
              text: "We break down complex AI systems into clear, actionable insights — without hype or noise.",
            },
            {
              title: "Our Vision",
              text: "A future where humans and artificial intelligence evolve together responsibly.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i + 1}
              className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-8"
            >
              <h2 className="mb-4 text-2xl font-semibold text-yellow-400">
                {item.title}
              </h2>
              <p className="text-gray-300">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mb-32">
          <h2 className="mb-16 text-center text-3xl font-bold">
            AI Evolution Timeline
          </h2>

          <div className="space-y-10 border-l border-yellow-400/30 pl-8">
            {[
              ["2020", "Deep Learning goes mainstream"],
              ["2023", "Generative AI reshapes creativity"],
              ["2025", "AI agents enter daily workflows"],
              ["2030", "Human–AI collaboration era"],
            ].map(([year, text], i) => (
              <motion.div
                key={year}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                className="relative"
              >
                <span className="absolute -left-[42px] top-1 h-4 w-4 rounded-full bg-yellow-400" />
                <h3 className="text-xl font-semibold text-yellow-400">
                  {year}
                </h3>
                <p className="text-gray-300">{text}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mb-32 grid gap-10 md:grid-cols-3">
          {[
            ["Curiosity", "We explore beyond the obvious."],
            ["Clarity", "Complex tech explained simply."],
            ["Responsibility", "Ethics always matter."],
          ].map(([title, text], i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              custom={i + 1}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-400/10 to-transparent p-8"
            >
              <h3 className="mb-3 text-xl font-semibold text-yellow-400">
                {title}
              </h3>
              <p className="text-gray-300">{text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-3xl border border-yellow-400/30 bg-yellow-400/5 p-12 text-center"
        >
          <h2 className="mb-6 text-3xl font-bold">
            Ready to explore the future?
          </h2>
          <p className="mb-8 text-gray-300">
            The future is written in code — and it starts now.
          </p>

          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-xl bg-yellow-400 px-10 py-4 font-semibold text-black shadow-lg shadow-yellow-400/30"
            >
              Back to Home
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
