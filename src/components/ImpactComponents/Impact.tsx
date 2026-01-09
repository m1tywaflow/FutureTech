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

export default function Impact() {
  return (
    <section className="relative bg-black text-white overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute right-[10%] top-[-250px] h-[600px] w-[600px] rounded-full bg-yellow-500/15 blur-3xl" />
        <div className="absolute left-[5%] bottom-[-300px] h-[500px] w-[500px] rounded-full bg-yellow-400/10 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 py-28">
        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          animate="visible"
          className="mb-32 max-w-3xl"
        >
          <h1 className="mb-6 text-4xl font-extrabold md:text-6xl">
            Global <span className="text-yellow-400">Readership</span>
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed">
            FutureTech is more than a publication — it’s a global movement of
            thinkers, builders, and innovators exploring the future of
            artificial intelligence.
          </p>
        </motion.div>

        <div className="mb-32 grid gap-10 md:grid-cols-3">
          {[
            { value: "2M+", label: "Monthly Readers" },
            { value: "120+", label: "Countries Reached" },
            { value: "24/7", label: "Global Knowledge Access" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-2xl border border-yellow-400/20 bg-yellow-400/5 p-8 text-center backdrop-blur"
            >
              <div className="mb-2 text-4xl font-bold text-yellow-400">
                {item.value}
              </div>
              <p className="text-gray-300">{item.label}</p>
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
          <h2 className="mb-6 text-3xl font-bold">Our Global Impact</h2>
          <p className="text-gray-300 leading-relaxed mb-6">
            From Silicon Valley engineers to university students in emerging
            markets, FutureTech reaches millions of readers every month. Our
            content crosses borders, industries, and disciplines.
          </p>
          <p className="text-gray-300 leading-relaxed">
            We believe access to AI knowledge should not be limited by geography
            or background. That belief drives everything we publish.
          </p>
        </motion.div>

        <div className="mb-32 grid gap-10 md:grid-cols-3">
          {[
            {
              title: "Developers & Engineers",
              text: "Practical insights into tools, models, and AI systems shaping modern software.",
            },
            {
              title: "Founders & Leaders",
              text: "Strategic perspectives on how AI transforms business and decision-making.",
            },
            {
              title: "Students & Researchers",
              text: "Clear explanations of complex concepts and cutting-edge research.",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              variants={fadeUp(i * 0.15)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-gradient-to-br from-yellow-400/10 to-transparent p-8"
            >
              <h3 className="mb-4 text-xl font-semibold text-yellow-400">
                {item.title}
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
          className="mb-32"
        >
          <h2 className="mb-12 text-center text-3xl font-bold">
            Worldwide Reach
          </h2>

          <div className="grid gap-6 md:grid-cols-4 text-center">
            {["North America", "Europe", "Asia", "Global South"].map(
              (region, i) => (
                <motion.div
                  key={region}
                  variants={fadeUp(i * 0.1)}
                  className="rounded-xl border border-yellow-400/20 bg-yellow-400/5 p-6"
                >
                  <p className="text-lg font-semibold text-yellow-400">
                    {region}
                  </p>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        <motion.blockquote
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-32 rounded-3xl border border-yellow-400/30 bg-black p-12 text-center italic text-gray-300"
        >
          “The future of AI belongs to everyone — and knowledge is the key that
          unlocks it.”
        </motion.blockquote>

        <motion.div
          variants={fadeUp(0)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="mb-6 text-3xl font-bold">
            Join a Global AI Community
          </h2>
          <p className="mb-10 text-gray-300">
            Millions are already exploring the future with FutureTech.
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
