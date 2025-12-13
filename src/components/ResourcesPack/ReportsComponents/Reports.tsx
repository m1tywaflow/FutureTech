import { motion } from "framer-motion";
import { FileText, BarChart3, Download, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
const reports = [
  {
    title: "AI Market Report 2025",
    desc: "Trends, growth, and forecasts for the global AI market",
    type: "Market",
  },
  {
    title: "Generative AI Insights",
    desc: "Deep analysis of GenAI adoption across industries",
    type: "Research",
  },
  {
    title: "AI Ethics & Regulation",
    desc: "Global policies, risks, and ethical challenges",
    type: "Policy",
  },
];

export default function Reports() {
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
          AI <span className="text-yellow-400">Reports</span>
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Data-driven reports and insights on Artificial Intelligence
        </p>
      </motion.div>
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {reports.map((report, index) => (
          <motion.div
            key={report.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            whileHover={{ scale: 1.05 }}
            className="bg-neutral-900 border border-yellow-400/20 rounded-2xl p-6 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <FileText className="text-yellow-400" />
              <span className="text-xs px-3 py-1 rounded-full bg-yellow-400 text-black font-semibold">
                {report.type}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2">{report.title}</h3>

            <p className="text-gray-400 mb-6">{report.desc}</p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full flex items-center justify-center gap-2 bg-yellow-400 text-black font-semibold py-3 rounded-xl hover:bg-yellow-300 transition"
            >
              <Download size={18} />
              Download Report
            </motion.button>
          </motion.div>
        ))}
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        <div className="bg-neutral-900 rounded-2xl p-8 text-center border border-yellow-400/20">
          <BarChart3 className="mx-auto text-yellow-400 mb-4" />
          <h4 className="text-3xl font-bold">50+</h4>
          <p className="text-gray-400 mt-2">Published Reports</p>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8 text-center border border-yellow-400/20">
          <BarChart3 className="mx-auto text-yellow-400 mb-4" />
          <h4 className="text-3xl font-bold">20K+</h4>
          <p className="text-gray-400 mt-2">Downloads</p>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8 text-center border border-yellow-400/20">
          <BarChart3 className="mx-auto text-yellow-400 mb-4" />
          <h4 className="text-3xl font-bold">100+</h4>
          <p className="text-gray-400 mt-2">Data Sources</p>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-24 text-center"
      >
        <h2 className="text-3xl font-bold">
          Get exclusive <span className="text-yellow-400">AI reports</span>
        </h2>

        <p className="mt-4 text-gray-400">
          Subscribe to receive premium research and analytics
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
