import { motion } from "framer-motion";
import { ExternalLink, Sparkles, BookMarked } from "lucide-react";
import { Link } from "react-router-dom";
const papers = [
  {
    title: "Scaling Laws for Neural Language Models",
    desc: "An in-depth study on how model performance scales with data and parameters",
    field: "LLMs",
    year: "2024",
  },
  {
    title: "Responsible AI: Fairness and Transparency",
    desc: "Methods and frameworks for building ethical AI systems",
    field: "AI Ethics",
    year: "2025",
  },
  {
    title: "Multimodal Foundation Models",
    desc: "Combining vision, language, and audio for next-generation AI",
    field: "Multimodal",
    year: "2024",
  },
];

export default function ResearchPapers() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="flex justify-center mb-4">
          <Sparkles className="text-yellow-400 w-10 h-10" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold">
          AI <span className="text-yellow-400">Research Papers</span>
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Curated academic papers and cutting-edge AI research
        </p>
      </motion.div>
      <div className="mt-16 max-w-5xl mx-auto space-y-6">
        {papers.map((paper, index) => (
          <motion.div
            key={paper.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.02 }}
            className="bg-neutral-900 border border-yellow-400/20 rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold mb-2">{paper.title}</h3>

                <p className="text-gray-400 mb-4">{paper.desc}</p>

                <div className="flex gap-3 text-sm">
                  <span className="px-3 py-1 rounded-full bg-yellow-400 text-black font-semibold">
                    {paper.field}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-neutral-800 text-gray-300">
                    {paper.year}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="flex items-center gap-2 bg-yellow-400 text-black font-semibold px-4 py-2 rounded-xl hover:bg-yellow-300 transition"
                >
                  <ExternalLink size={16} />
                  Read
                </motion.a>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-neutral-800 text-white px-4 py-2 rounded-xl hover:bg-neutral-700 transition"
                >
                  <BookMarked size={16} />
                  Save
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl font-bold">
          Stay updated with <span className="text-yellow-400">AI research</span>
        </h2>

        <p className="mt-4 text-gray-400">
          Get the latest papers, summaries, and breakthroughs
        </p>
        <Link to="/news-letter">
          <motion.button
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 bg-yellow-400 text-black font-semibold px-10 py-4 rounded-xl hover:bg-yellow-300 transition shadow-lg"
          >
            Subscribe
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}
