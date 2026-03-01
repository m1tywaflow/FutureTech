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
    <div className="relative min-h-screen bg-[#0b0b0b] text-white px-6 py-28 overflow-hidden">
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-yellow-400/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-yellow-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute top-[40%] right-[-200px] w-[500px] h-[500px] bg-yellow-400/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 rounded-2xl bg-yellow-400/10 border border-yellow-400/20">
            <Sparkles className="text-yellow-400 w-8 h-8" />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          AI <span className="text-yellow-400">Research Papers</span>
        </h1>

        <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
          Curated academic papers and cutting-edge AI research
        </p>
      </div>

      <div className="relative mt-16 max-w-5xl mx-auto space-y-6">
        {papers.map((paper) => (
          <div
            key={paper.title}
            className="group relative backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl p-7 shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition-all duration-300 hover:border-yellow-400/40"
          >
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-yellow-400/10 to-transparent"></div>

            <div className="relative flex items-start justify-between gap-6">
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

              <div className="flex flex-col gap-3 shrink-0">
                <Link
                  to="/404"
                  className="flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-4 py-2 rounded-xl hover:scale-[1.05] transition"
                >
                  <ExternalLink size={16} />
                  Read
                </Link>

                <Link
                  to="/404"
                  className="flex items-center gap-2 bg-neutral-800 text-white px-4 py-2 rounded-xl hover:bg-neutral-700 transition"
                >
                  <BookMarked size={16} />
                  Save
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-28 text-center">
        <h2 className="text-3xl font-bold">
          Stay updated with <span className="text-yellow-400">AI research</span>
        </h2>

        <p className="mt-4 text-gray-400">
          Get the latest papers, summaries, and breakthroughs
        </p>

        <Link to="/news-letter">
          <button className="mt-8 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-10 py-4 rounded-xl hover:scale-[1.05] hover:shadow-[0_10px_40px_rgba(255,200,0,0.25)] transition">
            Subscribe
          </button>
        </Link>
      </div>
    </div>
  );
}
