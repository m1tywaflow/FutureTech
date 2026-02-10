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
    <div className="min-h-screen bg-black text-white px-6 py-28">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Sparkles className="text-yellow-400 w-10 h-10" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold">
          AI <span className="text-yellow-400">Ebooks</span>
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          High-quality resources to level up your AI knowledge
        </p>
      </div>

      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {ebooks.map((ebook) => (
          <div
            key={ebook.title}
            className="bg-neutral-900 border border-yellow-400/20 rounded-2xl p-6 shadow-lg flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <BookOpen className="text-yellow-400" />
              <span className="text-xs px-3 py-1 rounded-full bg-yellow-400 text-black font-semibold">
                {ebook.tag}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2">{ebook.title}</h3>

            <p className="text-gray-400 mb-6">{ebook.desc}</p>

            <Link to="/404" className="mt-auto flex justify-center py-3">
              <DownloadButton />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold">
          Want more <span className="text-yellow-400">AI content?</span>
        </h2>

        <p className="mt-4 text-gray-400">
          Subscribe and get new ebooks, tools, and insights
        </p>

        <Link to="/news-letter">
          <button className="mt-8 cursor-pointer bg-yellow-400 text-black font-semibold px-10 py-4 rounded-xl hover:bg-yellow-300 transition shadow-lg">
            Subscribe
          </button>
        </Link>
      </div>
    </div>
  );
}
