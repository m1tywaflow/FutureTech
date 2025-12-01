import { motion } from "framer-motion";
import peoplesImg from "../../../assets/something/peoples.png";
export default function Politics() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20 bg-black text-white">
      <motion.div
        className="text-center mb-14"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight text-yellow-400">
          Your Journey to Tomorrow Begins Here
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
          Explore the Frontiers of{" "}
          <span className="text-yellow-400 font-semibold">
            Artificial Intelligence
          </span>
        </p>
      </motion.div>
      <motion.div
        className="text-center max-w-3xl mx-auto mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-gray-300 text-md sm:text-lg leading-relaxed">
          Welcome to the epicenter of AI innovation. FutureTech AI News is your
          passport to a world where machines think, learn, and reshape the
          future. Join us on this visionary expedition into the heart of AI.
        </p>
      </motion.div>
      <motion.div
        className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden shadow-xl mb-20 border border-yellow-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={peoplesImg}
          alt="AI Future"
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0  from-black/40 to-black/80 flex items-end p-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 max-w-xl leading-snug drop-shadow">
            Step Into a Future Crafted by Intelligent Machines
          </h2>
        </div>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {[
          {
            title: "Cutting‑Edge Research",
            text: "Dive deep into breakthroughs in neural networks, autonomous systems, and next‑gen machine intelligence.",
          },
          {
            title: "Global AI Impact",
            text: "Explore how AI is transforming economies, politics, healthcare, and humanity’s collective future.",
          },
          {
            title: "Visionary Perspectives",
            text: "Hear from leading technologists, researchers, and innovators shaping the AI‑powered world.",
          },
        ].map((card, i) => (
          <motion.article
            key={i}
            className="p-8 rounded-3xl bg-black border border-yellow-500 shadow-lg hover:shadow-yellow-500/30 hover:scale-[1.03] transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 * i }}
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-3">
              {card.title}
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">{card.text}</p>
          </motion.article>
        ))}
      </div>
      <motion.div
        className="mt-24 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-yellow-400 mb-4">
          Ready to Explore the AI Revolution?
        </h3>
        <p className="text-gray-300 max-w-xl mx-auto mb-8">
          Stay informed with the latest insights, trends, and discoveries
          shaping the digital future.
        </p>

        <button className="px-6 py-3 rounded-2xl border border-yellow-500 text-yellow-400 font-semibold shadow-lg hover:bg-yellow-500 hover:text-black transition">
          Start Your Journey
        </button>
      </motion.div>
    </section>
  );
}
