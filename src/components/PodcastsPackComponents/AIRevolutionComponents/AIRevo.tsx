import { BrainCircuit, Sparkles, Rocket, Cpu } from "lucide-react";
import { motion } from "framer-motion";

export default function AIRevo() {
  return (
    <div className="min-h-screen bg-black text-yellow-300">
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="px-6 py-24 max-w-7xl mx-auto text-center"
      >
        <motion.h1
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-yellow-400"
        >
          AI Revolution
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl text-yellow-200/80 max-w-2xl mx-auto"
        >
          Welcome to a new era where artificial intelligence empowers people to
          achieve more, faster, and smarter.
        </motion.p>
      </motion.section>
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <BrainCircuit className="w-12 h-12 mx-auto" />,
              title: "Intelligence",
              text: "Advanced AI models optimized for real-world performance and reliability.",
            },
            {
              icon: <Sparkles className="w-12 h-12 mx-auto" />,
              title: "Creativity",
              text: "Tools for generating text, ideas, images, and innovative solutions.",
            },
            {
              icon: <Rocket className="w-12 h-12 mx-auto" />,
              title: "Speed",
              text: "Instant processing, high performance, and scalable AI capabilities.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-yellow-50/5 border border-yellow-700/30 rounded-2xl p-8 text-center shadow-xl"
            >
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold text-yellow-400">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-yellow-200/80">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="px-6 py-24 max-w-4xl mx-auto text-center"
      >
        <Cpu className="w-14 h-14 mx-auto" />
        <h2 className="mt-6 text-3xl md:text-4xl font-bold text-yellow-400">
          Join the Revolution
        </h2>
        <p className="mt-4 text-yellow-200/80 text-lg">
          Build, automate, and accelerate your ideas with powerful AI tools.
        </p>
        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl hover:bg-yellow-400 transition shadow-lg"
        >
          Get Started
        </motion.button>
      </motion.section>
    </div>
  );
}
