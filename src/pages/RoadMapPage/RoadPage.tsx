import { roadmap } from "../../data/RoadMap/roadmap";
import { RoadmapCard } from "../../components/RoadMapComponents/RoadMapCard";
import { motion } from "framer-motion";

const Roadmap = () => {
  return (
    <section className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl font-bold">Project Roadmap</h1>
          <p className="mt-4 text-zinc-400 max-w-xl mx-auto">
            Step-by-step evolution of FutureTech — from foundation to future
            innovations.
          </p>
        </motion.div>

        <div className="relative space-y-12">
          <div className="absolute left-0 top-0 h-full w-px bg-zinc-800" />

          {roadmap.map((step, index) => (
            <div key={index} className="pl-8 relative">
              <span className="absolute left-[-5px] top-8 h-3 w-3 rounded-full bg-white" />
              <RoadmapCard {...step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
