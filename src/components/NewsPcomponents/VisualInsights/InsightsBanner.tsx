import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function InsightsBanner() {
  return (
    <section className="px-4 sm:px-8 lg:px-20 py-10 sm:py-12 md:py-16 bg-[#1A1A1A] text-white border-t border-[#1E1E1E]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-8">
        <div>
          <h3 className="bg-[#333333] w-fit rounded-2xl px-4 sm:px-5 py-2 mb-4 text-xs sm:text-sm font-medium text-[#E5E5E5]">
            Featured Videos
          </h3>

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-4xl lg:max-w-6xl">
            Visual Insights for the Modern Viewer
          </h1>
        </div>

        <Link
          to="/features"
          className="w-full sm:w-fit flex items-center justify-center gap-2 bg-black border border-[#1E1E1E] rounded-2xl px-6 py-3 sm:py-4 hover:bg-[#111111] transition duration-200 text-sm font-light"
        >
          View All
          <MoveUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
        </Link>
      </div>
    </section>
  );
}