import { motion } from "framer-motion";
import { Atom, Cpu, Zap, Orbit, ArrowLeft } from "lucide-react";

export default function Breakthrough() {
  return (
    <div className="min-h-screen bg-black text-cyan-400">
      <header className="sticky top-0 z-50 border-b border-cyan-400/20 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/blog"
            className="flex items-center gap-2 text-cyan-300 hover:text-cyan-400"
          >
            <ArrowLeft size={18} /> Back
          </a>
          <span className="font-extrabold tracking-wider">AI FUTURETECH</span>
          <span className="text-sm text-cyan-300">Technology</span>
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
            <span className="inline-block w-fit rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-xs text-cyan-300">
              Technology · Quantum Computing
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Quantum Computing
              <span className="block text-cyan-300">
                Breakthrough Announced
              </span>
            </h1>

            <p className="text-lg text-cyan-200 max-w-3xl">
              Scientists and engineers have achieved a major milestone in
              quantum computing — unlocking new levels of stability, scalability,
              and real-world applicability that could redefine computation as we know it.
            </p>
          </motion.section>

          <section className="grid gap-12 text-cyan-200 leading-relaxed">
            <p>
              A new generation of quantum processors has demonstrated the ability
              to maintain coherence significantly longer than previous systems,
              marking a critical step toward practical quantum advantage. This
              breakthrough could enable faster problem-solving in fields ranging
              from cryptography to drug discovery.
            </p>

            <p>
              Unlike classical computers, quantum systems leverage qubits that can
              exist in multiple states simultaneously. This allows them to process
              complex calculations exponentially faster — but also introduces
              instability, which researchers are now beginning to overcome.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-cyan-400/20 bg-zinc-900 p-6 grid gap-4">
                <Atom className="h-8 w-8" />
                <h3 className="font-bold text-cyan-400">Stable Qubits</h3>
                <p className="text-sm">
                  Improved error correction and longer coherence times bring
                  quantum systems closer to reliability.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-zinc-900 p-6 grid gap-4">
                <Cpu className="h-8 w-8" />
                <h3 className="font-bold text-cyan-400">Quantum Hardware</h3>
                <p className="text-sm">
                  Advanced chip architectures designed specifically for quantum
                  operations and scalability.
                </p>
              </div>

              <div className="rounded-2xl border border-cyan-400/20 bg-zinc-900 p-6 grid gap-4">
                <Orbit className="h-8 w-8" />
                <h3 className="font-bold text-cyan-400">
                  Real-World Applications
                </h3>
                <p className="text-sm">
                  From molecular simulations to logistics optimization and secure
                  communications.
                </p>
              </div>
            </div>

            <p>
              While still in early stages, the implications are massive. Quantum
              computing could disrupt entire industries, particularly those reliant
              on heavy computation. However, challenges remain — including cost,
              infrastructure, and the need for specialized expertise.
            </p>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-400 p-12 text-black grid gap-6"
          >
            <Zap className="h-10 w-10" />
            <h2 className="text-3xl font-extrabold">The Quantum Future</h2>
            <p className="max-w-3xl">
              As quantum research accelerates, the next decade may bring a shift
              as significant as the birth of classical computing — unlocking new
              scientific discoveries and transforming industries worldwide.
            </p>
            <a
              href="/"
              className="w-fit rounded-xl bg-black px-6 py-3 font-semibold text-cyan-400 hover:bg-zinc-800"
            >
              Back to Home
            </a>
          </motion.section>
        </div>
      </main>

      <footer className="border-t border-cyan-400/20 py-8 text-center text-sm text-cyan-300">
        © 2026 AI FutureTech · Quantum Desk
      </footer>
    </div>
  );
}