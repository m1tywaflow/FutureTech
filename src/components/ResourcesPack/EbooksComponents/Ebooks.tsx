import { BookOpen, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import DownloadButton from "@/components/UI/DownloadButton/DownloadButton";

const ebooks = [
  {
    title: "AI for Beginners",
    desc: "A simple and practical introduction to Artificial Intelligence",
    tag: "Beginner",
  },
  {
    title: "Prompt Engineering Mastery",
    desc: "Learn how to get the best results from ChatGPT and LLMs",
    tag: "Advanced",
  },
  {
    title: "AI in Business",
    desc: "Real-world strategies for integrating AI into products",
    tag: "Pro",
  },
];

export default function Ebooks() {
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
          AI <span className="text-yellow-400">Ebooks</span>
        </h1>

        <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
          High-quality resources to level up your AI knowledge
        </p>
      </div>

      <div className="relative mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {ebooks.map((ebook) => (
          <div
            key={ebook.title}
            className="group relative backdrop-blur-xl bg-white/[0.04] border border-white/10 rounded-3xl p-7 shadow-[0_20px_80px_rgba(0,0,0,0.6)] flex flex-col transition-all duration-300 hover:border-yellow-400/40 hover:scale-[1.02]"
          >
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition bg-gradient-to-br from-yellow-400/10 to-transparent"></div>

            <div className="relative flex items-center justify-between mb-5">
              <div className="p-2 rounded-xl bg-yellow-400/10">
                <BookOpen className="text-yellow-400 w-5 h-5" />
              </div>

              <span className="text-xs px-3 py-1 rounded-full bg-yellow-400 text-black font-semibold">
                {ebook.tag}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2">{ebook.title}</h3>

            <p className="text-gray-400 mb-6">{ebook.desc}</p>

            <Link to="/404" className="mt-auto flex justify-center">
              <DownloadButton />
            </Link>
          </div>
        ))}
      </div>

      <div className="relative mt-28 text-center">
        <h2 className="text-3xl font-bold">
          Want more <span className="text-yellow-400">AI content?</span>
        </h2>

        <p className="mt-4 text-gray-400">
          Subscribe and get new ebooks, tools, and insights
        </p>

        <Link to="/news-letter">
          <button className="mt-8 cursor-pointer bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-semibold px-10 py-4 rounded-xl hover:scale-[1.05] hover:shadow-[0_10px_40px_rgba(255,200,0,0.25)] transition">
            Subscribe
          </button>
        </Link>
      </div>
    </div>
  );
}
