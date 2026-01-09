"use client";

import { motion, useScroll, useSpring, type Variants } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = (delay = 0): Variants => ({
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.8,
      ease: "easeOut",
    },
  },
});

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
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32 max-w-4xl"
        >
          <motion.h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            Explore the Frontiers of{" "}
            <span className="text-yellow-400">Artificial Intelligence</span>
          </motion.h1>

          <motion.p className="text-lg text-gray-300">
            FutureTech AI News is your gateway into a world where machines
            think, learn, and reshape reality.
          </motion.p>
        </motion.div>
        <div className="mb-32 grid gap-16 md:grid-cols-2">
          <motion.div
            variants={fadeUp(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <span className="mb-4 inline-block rounded-full border border-yellow-400/30 px-4 py-1 text-sm text-yellow-400">
              Our Story
            </span>

            <h2 className="mb-6 text-3xl font-bold leading-tight">
              How <span className="text-yellow-400">FutureTech</span> Was Born
            </h2>

            <p className="mb-6 text-gray-300 leading-relaxed">
              FutureTech AI News started as a simple question:
              <span className="text-white">
                {" "}
                what happens when artificial intelligence stops being a tool and
                becomes a force?
              </span>
            </p>

            <p className="text-gray-300 leading-relaxed">
              As AI systems began generating text, images, code, and decisions,
              we realized that the world needed more than headlines. It needed
              context, depth, and critical thinking. That’s when FutureTech was
              created — not as another news site, but as a navigation system for
              the AI era.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp(0.25)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-8 backdrop-blur"
          >
            <h3 className="mb-4 text-xl font-semibold text-yellow-400">
              Why We Exist
            </h3>

            <ul className="space-y-4 text-gray-300">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                <span>To explain AI beyond buzzwords and marketing noise.</span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                <span>To track real breakthroughs, not hype cycles.</span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                <span>
                  To explore how AI reshapes society, work, creativity, and
                  power.
                </span>
              </li>

              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-yellow-400" />
                <span>
                  To help humans stay ahead in a world driven by intelligent
                  machines.
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
        <div className="mb-32 grid gap-10 md:grid-cols-3">
          {[
            { value: "10K+", label: "Monthly Readers" },
            { value: "300+", label: "AI Articles" },
            { value: "2020 → ∞", label: "Tracking AI Evolution" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
              variants={fadeUp(i * 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
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
                variants={fadeUp(i * 0.15)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
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
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
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
          variants={fadeUp(0)}
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
