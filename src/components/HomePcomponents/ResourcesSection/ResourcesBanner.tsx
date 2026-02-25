import { MoveUpRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function ResourcesBanner() {
  return (
    <section className="px-4 sm:px-8 lg:px-20 py-12 md:py-16 bg-[#1A1A1A] text-white border-t border-[#1E1E1E]">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div>
          <h3 className="bg-[#333333] w-fit rounded-2xl px-4 sm:px-5 py-2 mb-4 text-xs sm:text-sm font-medium text-[#E5E5E5]">
            Your Gateway to In-Depth Information
          </h3>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-6xl">
            Unlock Valuable Knowledge with FutureTech's Resources
          </h1>
        </div>

        <Link
          to="/coming-soon"
          className="w-full sm:w-fit flex items-center justify-center gap-2 bg-black border border-[#1E1E1E] rounded-2xl px-6 py-3 sm:py-4 hover:bg-[#111111] 
transition duration-200 text-sm font-light"
        >
          View All Resources
          <MoveUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500" />
        </Link>
      </div>
    </section>
  );
}
