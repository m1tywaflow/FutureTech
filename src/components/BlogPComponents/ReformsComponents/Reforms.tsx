import { motion } from "framer-motion";
import { Globe, Leaf, Factory, Scale, ArrowLeft } from "lucide-react";

export default function Reforms() {
  return (
    <div className="min-h-screen bg-black text-lime-400">
      <header className="sticky top-0 z-50 border-b border-lime-400/20 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/blog"
            className="flex items-center gap-2 text-lime-300 hover:text-lime-400"
          >
            <ArrowLeft size={18} /> Back
          </a>
          <span className="font-extrabold tracking-wider">AI FUTURETECH</span>
          <span className="text-sm text-lime-300">Global · Climate</span>
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
            <span className="inline-block w-fit rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1 text-xs text-lime-300">
              Global Affairs · Climate Policy
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Global Leaders Debate
              <span className="block text-lime-300">
                Climate Reforms
              </span>
            </h1>

            <p className="text-lg text-lime-200 max-w-3xl">
              World leaders gather to negotiate urgent climate reforms — balancing
              economic growth, environmental protection, and the accelerating
              realities of global climate change.
            </p>
          </motion.section>

          <section className="grid gap-12 text-lime-200 leading-relaxed">
            <p>
              Representatives from major economies and developing nations have
              convened to address rising global temperatures, carbon emissions,
              and the increasing frequency of extreme weather events. The debate
              highlights the growing tension between sustainability goals and
              economic priorities.
            </p>

            <p>
              While some countries push for aggressive emissions reductions and
              renewable transitions, others emphasize the need for gradual change
              to avoid economic disruption. The discussions reflect a complex
              landscape of competing interests, responsibilities, and capabilities.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-lime-400/20 bg-zinc-900 p-6 grid gap-4">
                <Globe className="h-8 w-8" />
                <h3 className="font-bold text-lime-400">Global Cooperation</h3>
                <p className="text-sm">
                  Nations collaborate to establish unified climate goals and shared accountability.
                </p>
              </div>

              <div className="rounded-2xl border border-lime-400/20 bg-zinc-900 p-6 grid gap-4">
                <Leaf className="h-8 w-8" />
                <h3 className="font-bold text-lime-400">Sustainability Goals</h3>
                <p className="text-sm">
                  Focus on renewable energy, carbon neutrality, and environmental protection.
                </p>
              </div>

              <div className="rounded-2xl border border-lime-400/20 bg-zinc-900 p-6 grid gap-4">
                <Factory className="h-8 w-8" />
                <h3 className="font-bold text-lime-400">
                  Economic Impact
                </h3>
                <p className="text-sm">
                  Balancing industrial growth with climate responsibility remains a key challenge.
                </p>
              </div>
            </div>

            <p>
              Experts warn that delays in decisive action could lead to irreversible
              environmental consequences. However, meaningful progress requires
              compromise, innovation, and long-term commitment from both governments
              and industries worldwide.
            </p>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-lime-400 to-green-300 p-12 text-black grid gap-6"
          >
            <Scale className="h-10 w-10" />
            <h2 className="text-3xl font-extrabold">The Road Ahead</h2>
            <p className="max-w-3xl">
              The outcome of these debates will shape global climate policy for decades.
              The question remains — can nations act fast enough to secure a sustainable future?
            </p>
            <a
              href="/"
              className="w-fit rounded-xl bg-black px-6 py-3 font-semibold text-lime-400 hover:bg-zinc-800"
            >
              Back to Home
            </a>
          </motion.section>
        </div>
      </main>

      <footer className="border-t border-lime-400/20 py-8 text-center text-sm text-lime-300">
        © 2026 AI FutureTech · Global Desk
      </footer>
    </div>
  );
}