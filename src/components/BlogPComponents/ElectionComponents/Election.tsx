import { motion } from "framer-motion";
import { Vote, BarChart3, Users, Landmark, ArrowLeft } from "lucide-react";

export default function Election() {
  return (
    <div className="min-h-screen bg-black text-rose-400">
      <header className="sticky top-0 z-50 border-b border-rose-400/20 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/blog"
            className="flex items-center gap-2 text-rose-300 hover:text-rose-400"
          >
            <ArrowLeft size={18} /> Back
          </a>
          <span className="font-extrabold tracking-wider">AI FUTURETECH</span>
          <span className="text-sm text-rose-300">Politics · Elections</span>
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
            <span className="inline-block w-fit rounded-full border border-rose-400/30 bg-rose-400/10 px-4 py-1 text-xs text-rose-300">
              Politics · Elections
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Election Results Signal
              <span className="block text-rose-300">Major Political Shift</span>
            </h1>

            <p className="text-lg text-rose-200 max-w-3xl">
              Recent election results are reshaping the political landscape,
              signaling a significant shift in voter priorities, power dynamics,
              and future policy direction.
            </p>
          </motion.section>

          <section className="grid gap-12 text-rose-200 leading-relaxed">
            <p>
              Voters across multiple regions delivered unexpected outcomes,
              challenging long-standing political structures and redefining
              party influence. Analysts suggest that economic concerns, social
              issues, and shifting demographics played a decisive role in the
              results.
            </p>

            <p>
              Several incumbent leaders faced strong opposition, while emerging
              candidates gained momentum by focusing on reform, transparency,
              and modernization. The results reflect a growing demand for change
              and accountability in governance.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-rose-400/20 bg-zinc-900 p-6 grid gap-4">
                <Vote className="h-8 w-8" />
                <h3 className="font-bold text-rose-400">Voter Turnout</h3>
                <p className="text-sm">
                  Increased participation indicates heightened public engagement
                  and interest in political outcomes.
                </p>
              </div>

              <div className="rounded-2xl border border-rose-400/20 bg-zinc-900 p-6 grid gap-4">
                <BarChart3 className="h-8 w-8" />
                <h3 className="font-bold text-rose-400">Power Shift</h3>
                <p className="text-sm">
                  Changing vote distribution is altering the balance of power
                  across political institutions.
                </p>
              </div>

              <div className="rounded-2xl border border-rose-400/20 bg-zinc-900 p-6 grid gap-4">
                <Users className="h-8 w-8" />
                <h3 className="font-bold text-rose-400">Public Sentiment</h3>
                <p className="text-sm">
                  Voters are increasingly prioritizing reform, economic
                  stability, and future-oriented policies.
                </p>
              </div>
            </div>

            <p>
              Political experts warn that such shifts can lead to both
              opportunity and uncertainty. While new leadership may drive
              innovation in policy, transitions of power can also introduce
              instability if not managed effectively.
            </p>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-rose-400 to-red-400 p-12 text-black grid gap-6"
          >
            <Landmark className="h-10 w-10" />
            <h2 className="text-3xl font-extrabold">What It Means</h2>
            <p className="max-w-3xl">
              The election results mark a turning point — shaping policy,
              governance, and political discourse for years to come.
            </p>
            <a
              href="/"
              className="w-fit rounded-xl bg-black px-6 py-3 font-semibold text-rose-400 hover:bg-zinc-800"
            >
              Back to Home
            </a>
          </motion.section>
        </div>
      </main>

      <footer className="border-t border-rose-400/20 py-8 text-center text-sm text-rose-300">
        © 2026 AI FutureTech · Politics Desk
      </footer>
    </div>
  );
}
