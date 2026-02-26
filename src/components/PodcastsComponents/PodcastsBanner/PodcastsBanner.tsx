export default function PodcastsBanner() {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-20 py-6 sm:py-8 bg-[#1A1A1A] text-white border-t border-[#1E1E1E]">
      <div className="flex items-center justify-between flex-wrap gap-6 sm:gap-8">
        <div>
          <h3 className="bg-[#333333] w-fit rounded-2xl px-4 sm:px-5 py-2 mb-3 sm:mb-4 text-xs sm:text-sm font-medium text-[#E5E5E5]">
            Stay Informed with Fresh Content
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-6xl">
            Latest Podcast Episodes
          </h1>
        </div>
      </div>
    </section>
  );
}