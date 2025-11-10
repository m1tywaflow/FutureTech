import { MoveUpRight } from "lucide-react";

export default function FutureResources() {
  return (
    <section className="px-20 py-16 bg-[#1A1A1A] text-white border-t border-[#1E1E1E]">
      <div className="flex items-center justify-between flex-wrap gap-8">
        <div>
          <h3 className="bg-[#333333] w-fit rounded-2xl px-5 py-2 mb-4 text-sm font-medium text-[#E5E5E5]">
            A Knowledge Treasure Trove
          </h3>
          <h1 className="text-5xl md:text-6xl font-semibold leading-tight max-w-6xl">
            Explore FutureTech's In-Depth Blog Posts
          </h1>
        </div>
        <button className="flex items-center justify-center gap-2 bg-black border border-[#1E1E1E] rounded-2xl px-6 py-4 hover:bg-[#111111] transition duration-200 cursor-pointer text-sm font-light">
          View All Blogs <MoveUpRight className="w-5 h-5 text-yellow-500" />
        </button>
      </div>
    </section>
  );
}
