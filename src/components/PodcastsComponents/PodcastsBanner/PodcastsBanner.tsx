export default function PodcastsBanner() {
  return (
    <section className="px-20 py-16 bg-[#1A1A1A] text-white border-t border-[#1E1E1E]">
      <div className="flex items-center justify-between flex-wrap gap-8">
        <div>
          <h3 className="bg-[#333333] w-fit rounded-2xl px-5 py-2 mb-4 text-sm font-medium text-[#E5E5E5]">
            Stay Informed with Fresh Content
          </h3>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-6xl">
            Latest Podcast Episodes
          </h1>
        </div>
      </div>
    </section>
  );
}
