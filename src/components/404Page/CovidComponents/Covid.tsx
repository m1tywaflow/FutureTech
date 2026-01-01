import { motion } from "framer-motion";
import {
  ArrowLeft,
  Activity,
  AlertTriangle,
  ShieldPlus,
  Microscope,
} from "lucide-react";

export default function CovidInfo() {
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
          <span className="text-sm text-yellow-300">Health</span>
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
              Health · Epidemiology
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              COVID-19
              <span className="block text-yellow-300">Variants</span>
            </h1>

            <p className="text-lg text-yellow-200 max-w-3xl">
              As SARS-CoV-2 continues to evolve, new variants raise questions
              about transmissibility, immunity, and long-term public health
              strategy.
            </p>
          </motion.section>

          <section className="grid gap-12 text-yellow-200 leading-relaxed">
            <p>
              Health authorities worldwide are closely monitoring emerging
              COVID-19 variants that demonstrate increased transmissibility or
              partial immune escape. While most variants do not significantly
              alter disease severity, their rapid spread can still place strain
              on healthcare systems.
            </p>

            <p>
              Advances in genomic surveillance have enabled faster detection of
              mutations, allowing researchers to assess risks and update
              response strategies in near real time. Vaccination and booster
              programs remain the most effective tools against severe outcomes.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-yellow-400/20 bg-zinc-900 p-6 grid gap-4">
                <Activity className="h-8 w-8" />
                <h3 className="font-bold text-yellow-400">Transmission Rate</h3>
                <p className="text-sm">
                  Some variants spread more efficiently, increasing case numbers
                  even with existing immunity.
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-400/20 bg-zinc-900 p-6 grid gap-4">
                <Microscope className="h-8 w-8" />
                <h3 className="font-bold text-yellow-400">Mutation Tracking</h3>
                <p className="text-sm">
                  Continuous genomic sequencing helps identify and classify new
                  variants.
                </p>
              </div>

              <div className="rounded-2xl border border-yellow-400/20 bg-zinc-900 p-6 grid gap-4">
                <ShieldPlus className="h-8 w-8" />
                <h3 className="font-bold text-yellow-400">
                  Vaccine Protection
                </h3>
                <p className="text-sm">
                  Updated vaccines and boosters maintain strong protection
                  against severe disease.
                </p>
              </div>
            </div>

            <p>
              Public health experts emphasize the importance of clear
              communication and evidence-based policy. While pandemic fatigue
              remains a challenge, early detection and rapid response continue
              to reduce the overall impact of new variants.
            </p>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-yellow-400 to-yellow-300 p-12 text-black grid gap-6"
          >
            <AlertTriangle className="h-10 w-10" />
            <h2 className="text-3xl font-extrabold">Public Health Outlook</h2>
            <p className="max-w-3xl">
              Ongoing surveillance, adaptive vaccination strategies, and global
              cooperation remain essential as COVID-19 transitions from a
              pandemic to an endemic disease.
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
        © 2026 AI FutureTech · Health Desk
      </footer>
    </div>
  );
}
