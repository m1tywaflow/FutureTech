import { Link } from "react-router-dom";

export default function InfoSection() {
  return (
    <section className="relative w-full bg-[#0D0D0D] text-white px-6 py-16 overflow-hidden">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#BFA34A]/10 blur-[160px] rounded-full" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <span className="inline-block text-xs px-3 py-1 rounded-full border border-[#1E1E1E] bg-[#111111] text-[#E7D27A] mb-4">
            Environment
          </span>
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Global Climate Summit
            <span className="block text-[#E7D27A]">
              Addresses Urgent Climate Action
            </span>
          </h1>
          <p className="text-[#98989A] mt-6 text-sm md:text-base leading-relaxed max-w-2xl">
            World leaders gathered at the Global Climate Summit to discuss
            urgent climate action, emissions reductions, and renewable energy
            targets shaping the future of the planet.
          </p>
        </div>
        <div
          className="mt-10 p-6 md:p-8 rounded-3xl 
          bg-[#0F0F0F]/80 backdrop-blur-xl
          border border-[#1A1A1A]
          flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-[#6F6F6F] text-xs">Publication Date</p>
              <p className="font-medium">October 10, 2023</p>
            </div>

            <div>
              <p className="text-[#6F6F6F] text-xs">Author</p>
              <p className="font-medium">Jane Smith</p>
            </div>
          </div>
          <Link
            to="/coming-soon"
            className="
            group
            px-6 py-3 rounded-xl
            bg-[#111111]
            border border-[#1F1F1F]
            flex items-center gap-2
            hover:border-[#BFA34A]/40
            hover:shadow-[0_0_25px_rgba(191,163,74,0.15)]
            transition
          "
          >
            Read Article
            <span className="text-[#E7D27A] group-hover:translate-x-1 transition">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
