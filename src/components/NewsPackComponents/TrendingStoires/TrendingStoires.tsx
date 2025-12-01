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
    <div className="min-h-screen bg-[#0D0D0D] text-gray-300 py-20 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        <h1 className="text-4xl font-bold text-white text-center">
          Trending Stories
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          Stay informed with the most popular and impactful stories of the
          moment.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {trendingStories.map((story, index) => (
            <div
              key={index}
              className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-[#1E1E1E] hover:scale-[1.02] transition-transform"
            >
              <span className="text-yellow-400 text-sm font-semibold">
                {story.category}
              </span>
              <h2 className="text-2xl font-semibold text-white mt-2 mb-2">
                {story.title}
              </h2>
              <p className="text-gray-400 mb-4">{story.description}</p>
              <span className="text-gray-500 text-sm">{story.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
