import { motion } from "framer-motion";
import { MessageSquare, Cpu, Zap, Satellite, Radio } from "lucide-react";

export default function TechTalkAI() {
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
          transition={{ duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold tracking-tight text-yellow-400"
        >
          TechTalk AI
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-6 text-lg md:text-xl text-yellow-200/80 max-w-2xl mx-auto"
        >
          Dive into the world of advanced AI discussions, insights, and deep
          tech innovation.
        </motion.p>
      </motion.section>
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: <MessageSquare className="w-12 h-12 mx-auto" />,
              title: "AI Conversations",
              desc: "Engaging talks with industry experts, researchers, and innovators.",
            },
            {
              icon: <Cpu className="w-12 h-12 mx-auto" />,
              title: "Deep Tech",
              desc: "Explore the architecture behind the latest AI models and frameworks.",
            },
            {
              icon: <Zap className="w-12 h-12 mx-auto" />,
              title: "Innovation Sparks",
              desc: "Get inspired by breakthrough ideas and future-forward concepts.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              viewport={{ once: true }}
              className="bg-yellow-50/5 border border-yellow-700/30 rounded-2xl p-8 text-center shadow-xl hover:bg-yellow-100/5 transition"
            >
              {item.icon}
              <h3 className="mt-4 text-xl font-semibold text-yellow-400">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-yellow-200/80">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="px-6 py-24 max-w-5xl mx-auto text-center"
      >
        <div className="flex justify-center mb-6">
          <Radio className="w-14 h-14" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Live TechTalk Sessions
        </h2>
        <p className="mt-4 text-yellow-200/80 text-lg">
          Join our live broadcasts where experts discuss the future of
          artificial intelligence.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-10 bg-yellow-50/5 border border-yellow-700/30 rounded-xl p-6 flex flex-col md:flex-row items-center gap-6"
        >
          <Satellite className="w-16 h-16 mx-auto" />
          <div className="text-left max-w-lg">
            <h3 className="text-2xl font-semibold text-yellow-400">
              Next Episode: "AI in 2030"
            </h3>
            <p className="text-yellow-200/70 mt-2">
              Discover predictions, upcoming breakthroughs, and how AI will
              reshape the world in the next decade.
            </p>
          </div>
        </motion.div>
      </motion.section>
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="px-6 py-24 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-yellow-400">
          Be Part of the Conversation
        </h2>
        <p className="mt-4 text-yellow-200/80 text-lg">
          Stay updated on new episodes, discussions, and AI deep dives.
        </p>

        <motion.button
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 bg-yellow-500 text-black font-semibold px-8 py-3 rounded-xl hover:bg-yellow-400 transition shadow-lg"
        >
          Subscribe
        </motion.button>
      </motion.section>
    </div>
  );
}
