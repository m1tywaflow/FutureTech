import { motion } from "framer-motion";
import { ArrowRight, Cpu, ShieldCheck, Sparkles } from "lucide-react";

export default function Decisive() {
  return (
    <div className="min-h-screen bg-black text-yellow-400">
      <main className="px-6 py-20">
        <div className="max-w-6xl mx-auto grid gap-24">
          {/* Hero */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center grid gap-8"
          >
            <span className="mx-auto inline-block rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-1 text-xs text-yellow-300">
              FutureTech · AI Policy
            </span>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
              A Decisive Victory for
              <span className="block text-yellow-300">
                Progressive Policies
              </span>
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-yellow-200">
              Artificial intelligence has become societal infrastructure. The
              future depends on how intentionally we design it.
            </p>
            <div className="flex justify-center gap-4">
              <button className="flex items-center gap-2 rounded-2xl bg-yellow-400 px-6 py-3 font-semibold text-black hover:bg-yellow-300">
                Explore <ArrowRight className="h-4 w-4" />
              </button>
              <button className="rounded-2xl border border-yellow-400/40 px-6 py-3 text-yellow-300 hover:bg-yellow-400/10">
                Manifesto
              </button>
            </div>
          </motion.section>

          {/* Policy Pillars */}
          <section id="policy" className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-yellow-400/20 bg-zinc-900 p-6 grid gap-4">
              <Cpu className="h-10 w-10" />
              <h3 className="text-xl font-bold">AI as Infrastructure</h3>
              <p className="text-sm text-yellow-200">
                AI must operate as public infrastructure — transparent,
                auditable, and aligned with collective benefit.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-400/20 bg-zinc-900 p-6 grid gap-4">
              <ShieldCheck className="h-10 w-10" />
              <h3 className="text-xl font-bold">Ethics by Default</h3>
              <p className="text-sm text-yellow-200">
                Safety, accountability, and human rights embedded at every layer
                of AI systems.
              </p>
            </div>
            <div className="rounded-2xl border border-yellow-400/20 bg-zinc-900 p-6 grid gap-4">
              <Sparkles className="h-10 w-10" />
              <h3 className="text-xl font-bold">Fearless Innovation</h3>
              <p className="text-sm text-yellow-200">
                Clear governance enables rapid innovation without societal risk.
              </p>
            </div>
          </section>

          {/* Impact */}
          <section id="impact" className="grid gap-8">
            <h2 className="text-3xl font-extrabold">Societal Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="border border-yellow-400/20 rounded-2xl p-6">
                <h4 className="font-bold mb-2">Economy</h4>
                <p className="text-sm text-yellow-200">
                  Productivity growth, automation with reskilling, and reduced
                  inequality.
                </p>
              </div>
              <div className="border border-yellow-400/20 rounded-2xl p-6">
                <h4 className="font-bold mb-2">Science</h4>
                <p className="text-sm text-yellow-200">
                  Accelerated breakthroughs in medicine, climate, and materials.
                </p>
              </div>
              <div className="border border-yellow-400/20 rounded-2xl p-6">
                <h4 className="font-bold mb-2">Governance</h4>
                <p className="text-sm text-yellow-200">
                  Evidence-based decision-making and transparent public systems.
                </p>
              </div>
            </div>
          </section>

          {/* Vision */}
          <motion.section
            id="vision"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-300 p-12 text-black grid gap-6"
          >
            <h2 className="text-3xl md:text-4xl font-extrabold">
              The Future Is Designed
            </h2>
            <p className="max-w-3xl">
              Progressive AI policy is not limitation — it is acceleration with
              direction. The systems we design today define tomorrow’s society.
            </p>
            <button className="w-fit rounded-xl bg-black px-6 py-3 font-semibold text-yellow-400 hover:bg-zinc-800">
              Read the Vision
            </button>
          </motion.section>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-yellow-400/20 py-8 text-center text-sm text-yellow-300">
        © 2026 AI FutureTech · All futures are designed
      </footer>
    </div>
  );
}
