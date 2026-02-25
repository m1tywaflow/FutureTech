import { motion } from "framer-motion";
import { Bot, Cpu, Zap, Cog, ArrowLeft } from "lucide-react";

export default function Startups() {
  return (
    <div className="min-h-screen bg-black text-violet-400">
      <header className="sticky top-0 z-50 border-b border-violet-400/20 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/blog"
            className="flex items-center gap-2 text-violet-300 hover:text-violet-400"
          >
            <ArrowLeft size={18} /> Back
          </a>
          <span className="font-extrabold tracking-wider">AI FUTURETECH</span>
          <span className="text-sm text-violet-300">Startups · Robotics</span>
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
            <span className="inline-block w-fit rounded-full border border-violet-400/30 bg-violet-400/10 px-4 py-1 text-xs text-violet-300">
              Startups · Robotics Innovation
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Startups Race to Build
              <span className="block text-violet-300">
                Smarter Robots
              </span>
            </h1>

            <p className="text-lg text-violet-200 max-w-3xl">
              A new wave of startups is redefining robotics — building machines
              that can learn, adapt, and operate autonomously in complex
              real-world environments.
            </p>
          </motion.section>

          <section className="grid gap-12 text-violet-200 leading-relaxed">
            <p>
              From warehouse automation to humanoid assistants, startups across
              the globe are competing to develop smarter, more capable robots.
              Advances in artificial intelligence, sensors, and edge computing
              are enabling machines to move beyond rigid programming into
              adaptive decision-making.
            </p>

            <p>
              Unlike traditional industrial robots, these next-generation systems
              are designed to collaborate with humans, understand their
              surroundings, and continuously improve through data and experience.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-violet-400/20 bg-zinc-900 p-6 grid gap-4">
                <Bot className="h-8 w-8" />
                <h3 className="font-bold text-violet-400">Autonomous Robots</h3>
                <p className="text-sm">
                  Machines capable of navigating and making decisions without
                  constant human control.
                </p>
              </div>

              <div className="rounded-2xl border border-violet-400/20 bg-zinc-900 p-6 grid gap-4">
                <Cpu className="h-8 w-8" />
                <h3 className="font-bold text-violet-400">AI Integration</h3>
                <p className="text-sm">
                  Deep learning models enable robots to perceive, learn, and adapt
                  in dynamic environments.
                </p>
              </div>

              <div className="rounded-2xl border border-violet-400/20 bg-zinc-900 p-6 grid gap-4">
                <Cog className="h-8 w-8" />
                <h3 className="font-bold text-violet-400">
                  Human Collaboration
                </h3>
                <p className="text-sm">
                  Collaborative robots (cobots) designed to safely work alongside people.
                </p>
              </div>
            </div>

            <p>
              Investors are pouring billions into robotics startups, betting on a
              future where intelligent machines transform industries such as
              logistics, healthcare, manufacturing, and even home services.
              However, challenges remain in safety, regulation, and scalability.
            </p>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-violet-400 to-indigo-400 p-12 text-black grid gap-6"
          >
            <Zap className="h-10 w-10" />
            <h2 className="text-3xl font-extrabold">The Robotics Revolution</h2>
            <p className="max-w-3xl">
              As innovation accelerates, smarter robots are set to become an
              integral part of everyday life — reshaping how we work, live, and interact with technology.
            </p>
            <a
              href="/"
              className="w-fit rounded-xl bg-black px-6 py-3 font-semibold text-violet-400 hover:bg-zinc-800"
            >
              Back to Home
            </a>
          </motion.section>
        </div>
      </main>

      <footer className="border-t border-violet-400/20 py-8 text-center text-sm text-violet-300">
        © 2026 AI FutureTech · Startups Desk
      </footer>
    </div>
  );
}