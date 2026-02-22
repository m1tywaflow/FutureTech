"use client";

const trendingStories = [
  {
    title: "AI Breakthroughs in 2025",
    description:
      "Exploring the latest advancements in artificial intelligence and their impact on various industries.",
    category: "Technology",
    date: "Nov 20, 2025",
  },
  {
    title: "Global Economic Trends",
    description:
      "A deep dive into the current global economy and what it means for businesses worldwide.",
    category: "Economy",
    date: "Nov 18, 2025",
  },
  {
    title: "The Future of Remote Work",
    description:
      "How remote work is shaping the modern workforce and organizational culture.",
    category: "Business",
    date: "Nov 15, 2025",
  },
  {
    title: "Health Tech Innovations",
    description:
      "Innovative technologies transforming healthcare and patient experiences.",
    category: "Health",
    date: "Nov 12, 2025",
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

                <span className="opacity-0 group-hover:opacity-100 transition text-yellow-400">
                  Read →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
