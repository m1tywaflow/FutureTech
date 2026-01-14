import { motion } from "framer-motion";
import type { RoadmapItem } from "../../data/RoadMap/roadmap";

const statusStyles = {
  done: "border-green-500 text-green-400",
  progress: "border-yellow-500 text-yellow-400",
  planned: "border-gray-500 text-gray-400",
  future: "border-purple-500 text-purple-400",
};

export const RoadmapCard = ({
  phase,
  title,
  status,
  description,
  items,
}: RoadmapItem) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`relative bg-zinc-900 border-l-4 p-6 rounded-xl shadow-lg ${statusStyles[status]}`}
    >
      <span className="text-sm uppercase tracking-widest opacity-70">
        {phase}
      </span>

      <h3 className="text-2xl font-semibold mt-1">{title}</h3>
      <p className="text-sm opacity-70 mt-2">{description}</p>

      <ul className="mt-4 space-y-2 text-sm">
        {items.map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-current" />
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};
