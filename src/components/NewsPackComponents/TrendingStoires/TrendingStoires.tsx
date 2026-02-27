"use client";

import { Link } from "react-router-dom";

const trendingStories = [
  {
    title: "Quantum Computing Breakthrough Announced",
    description:
      "A major breakthrough in quantum computing has been announced, marking a significant step forward in processing power and computational capabilities.",
    category: "Technology",
    date: "Nov 20, 2025",
    link: "/quantum-breakthrough",
  },
  {
    title: "Tech Giants Unveil Cutting-Edge AI Innovations",
    description:
      "Leading technology companies have unveiled a new wave of cutting-edge AI innovations designed to transform industries and everyday life.",
    category: "Technology",
    date: "Nov 18, 2025",
    link: "/tech-giants-ai",
  },
  {
    title: "AI Helps Detect Diseases Earlier",
    description:
      "Artificial intelligence is playing a growing role in healthcare by helping doctors detect diseases earlier and more accurately.",
    category: "Health",
    date: "Nov 15, 2025",
    link: "/ai-healthcare",
  },
  {
    title: "Election Results Signal Major Shift",
    description:
      "Recent election results indicate a significant shift in the political landscape, reflecting changing public priorities and voter sentiment.",
    category: "Politics",
    date: "Nov 12, 2025",
    link: "/election-shift",
  },
];

export default function TrendingStories() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black text-white py-36 px-6">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-5">
          <h1 className="text-5xl font-bold">
            Trending{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Stories
            </span>
          </h1>

          <p className="text-zinc-400 max-w-xl mx-auto">
            Stay informed with the most popular and impactful stories shaping
            the world right now.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {trendingStories.map((story, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.12)]"
            >
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-yellow-400 to-orange-500 opacity-60 group-hover:opacity-100 transition" />
              <span className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 mb-4">
                {story.category}
              </span>
              <h2 className="text-xl font-semibold mb-3 group-hover:text-yellow-300 transition">
                {story.title}
              </h2>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                {story.description}
              </p>

              <div className="flex justify-between items-center text-xs text-zinc-500">
                <span>{story.date}</span>

                <Link
                  to={story.link}
                  className="opacity-0 group-hover:opacity-100 transition text-yellow-400"
                >
                  Read →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
