import { Headphones } from "lucide-react";
import { Link } from "react-router-dom";
export default function Banner() {
  return (
    <section className="relative w-full bg-[#0D0D0D] text-white px-4 sm:px-6 lg:px-8 py-14 sm:py-16 lg:py-20 overflow-hidden">
      <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#BFA34A]/10 blur-[140px] rounded-full" />
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#1E1E1E] bg-[#111111] text-sm text-[#CFCFCF]">
          <Headphones className="w-4 h-4" />
          AI Podcast Platform
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
          Discover the World of
          <span className="block text-[#E7D27A]">
            Artificial Intelligence Podcasts
          </span>
        </h1>
        <p className="text-[#98989A] text-sm sm:text-base mt-4 max-w-2xl mx-auto leading-relaxed">
          Explore expert discussions, breakthroughs and real stories from the AI
          industry. Perfect for developers, founders and technology enthusiasts.
        </p>
        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <Link
            to="/coming-soon"
            className="px-6 py-3 rounded-xl bg-[#BFA34A] text-black text-sm font-medium hover:opacity-90 transition"
          >
            Explore Podcasts
          </Link>
          <Link
            to="/coming-soon"
            className="px-6 py-3 rounded-xl border border-[#1E1E1E] bg-[#111111] text-sm hover:bg-[#151515] transition"
          >
            Latest Episodes
          </Link>
        </div>
      </div>
    </section>
  );
}
