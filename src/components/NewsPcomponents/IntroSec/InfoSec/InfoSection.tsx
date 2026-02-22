import { Link } from "react-router-dom";
export default function InfoSection() {
  return (
    <section className="w-full bg-[#0D0D0D] text-white px-6 ">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <p className="text-yellow-400 text-sm mb-3">Environment</p>

          <h1 className="text-3xl md:text-5xl font-semibold leading-tight">
            Global Climate Summit Addresses Urgent Climate Action
          </h1>

          <p className="text-white/60 mt-6 text-base">
            World leaders gathered at the Global Climate Summit to discuss
            urgent climate action, emissions reductions, and renewable energy
            targets.
          </p>
        </div>

        <div
          className="mt-12 p-6 rounded-2xl 
          bg-white/5 border border-white/10 
          flex flex-col md:flex-row md:items-center md:justify-between gap-6"
        >
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-white/40 text-xs">Publication Date</p>
              <p className="font-medium">October 10, 2023</p>
            </div>

            <div>
              <p className="text-white/40 text-xs">Author</p>
              <p className="font-medium">Jane Smith</p>
            </div>
          </div>

          <Link
            to="/404"
            className="px-5 py-2 rounded-xl 
            border border-yellow-400/30 
            text-yellow-400 
            hover:bg-yellow-400 hover:text-black 
            transition"
          >
            Read Article
          </Link>
        </div>
      </div>
    </section>
  );
}
