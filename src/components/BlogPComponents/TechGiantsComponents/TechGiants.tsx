import { motion } from "framer-motion";
import { Cpu, Brain, Rocket, Network, ArrowLeft } from "lucide-react";

export default function TechGiants() {
  return (
    <div className="min-h-screen bg-black text-yellow-400">
      <header className="sticky top-0 z-50 border-b border-yellow-400/20 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/"
            className="flex items-center gap-2 text-yellow-300 hover:text-yellow-400"
          >
            <ArrowLeft size={18} /> Back
          </a>
          <span className="font-extrabold tracking-wider">AI FUTURETECH</span>
          <span className="text-sm text-yellow-300">Technology</span>
        </div>
      </header>

      <main className="px-6 py-20">
        <div className="max-w-4xl mx-auto grid gap-24">
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid gap-8"
          >
            <span className="inline-block w-fit rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs text-yellow-300">
              Technology · AI Innovation
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Tech Giants Unveil
              <span className="block text-yellow-300">
                Cutting-Edge AI Innovations
              </span>
            </h1>

            <p className="text-lg text-yellow-200 max-w-3xl">
              Global technology leaders are accelerating the AI arms race —
              unveiling new foundation models, autonomous systems, and hardware
              architectures that redefine performance, scale, and real-world
              deployment.
            </p>
          </motion.section>

          <section className="grid gap-12 text-yellow-200 leading-relaxed">
            <p>
              Major technology corporations have announced a wave of
              breakthroughs across artificial intelligence research and
              deployment. From multi-modal foundation models to energy-efficient
              AI chips, the industry is entering a phase where innovation cycles
              are measured in months, not years.
            </p>

            <p>
              These advancements are not limited to software. Custom silicon,
              distributed inference networks, and on-device intelligence are
              rapidly expanding AI’s reach beyond centralized data centers into
              consumer devices, vehicles, and industrial systems.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-yellow-400/20 bg-zinc-900 p-6 grid gap-4">
                <Cpu className="h-8 w-8" />
                <h3 className="font-bold text-yellow-400">Next-Gen AI Chips</h3>
                <p className="text-sm">
                  Purpose-built processors optimized for training and inference
                  at massive scale.
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-400/20 bg-zinc-900 p-6 grid gap-4">
                <Brain className="h-8 w-8" />
                <h3 className="font-bold text-yellow-400">Foundation Models</h3>
                <p className="text-sm">
                  Unified models capable of reasoning across text, vision,
                  audio, and code.
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-400/20 bg-zinc-900 p-6 grid gap-4">
                <Network className="h-8 w-8" />
                <h3 className="font-bold text-yellow-400">
                  Edge & Cloud Fusion
                </h3>
                <p className="text-sm">
                  Hybrid AI systems balancing latency, privacy, and global
                  scalability.
                </p>
              </div>
            </div>

            <p>
              Industry analysts note that competition among major players is
              driving faster commercialization, but also raising concerns around
              energy consumption, workforce displacement, and market
              concentration. The coming years will test whether innovation can
              be balanced with responsibility.
            </p>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-300 p-12 text-black grid gap-6"
          >
            <Rocket className="h-10 w-10" />
            <h2 className="text-3xl font-extrabold">What Comes Next</h2>
            <p className="max-w-3xl">
              As tech giants continue to push AI boundaries, the defining
              challenge will be alignment — ensuring these systems serve
              society, not just scale metrics or competitive advantage.
            </p>
            <a
              href="/"
              className="w-fit rounded-xl bg-black px-6 py-3 font-semibold text-yellow-400 hover:bg-zinc-800"
            >
              Back to News
            </a>
          </motion.section>
        </div>
      </main>

      <footer className="border-t border-yellow-400/20 py-8 text-center text-sm text-yellow-300">
        © 2026 AI FutureTech · Technology Desk
      </footer>
    </div>
  );
}
