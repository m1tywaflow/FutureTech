export default function IntroSection() {
  return (
    <section className="relative w-full bg-[#0D0D0D] text-white px-6 py-16 sm:py-20 overflow-hidden">
      <div className="absolute left-1/2 top-[-150px] -translate-x-1/2 w-[600px] h-[600px] bg-[#BFA34A]/10 blur-[140px] rounded-full" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-[#1E1E1E] bg-[#111111] text-xs text-[#CFCFCF] mb-6">
          Daily Tech & World News
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          Today's Headlines:
          <span className="block text-[#E7D27A]">Stay Informed</span>
        </h1>
        <p className="text-[#98989A] text-sm sm:text-base mt-5 max-w-2xl mx-auto leading-relaxed">
          Explore the latest news from around the world. We bring you
          up-to-the-minute updates on the most significant events, trends, and
          stories shaping the future.
        </p>
        <div className="mt-10 w-32 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#BFA34A] to-transparent" />
      </div>
    </section>
  );
}
