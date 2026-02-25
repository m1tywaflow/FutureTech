import { motion } from "framer-motion";
import {
  HeartPulse,
  Brain,
  Activity,
  Stethoscope,
  ArrowLeft,
} from "lucide-react";

export default function Desiases() {
  return (
    <div className="min-h-screen bg-black text-emerald-400">
      <header className="sticky top-0 z-50 border-b border-emerald-400/20 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/blog"
            className="flex items-center gap-2 text-emerald-300 hover:text-emerald-400"
          >
            <ArrowLeft size={18} /> Back
          </a>
          <span className="font-extrabold tracking-wider">AI FUTURETECH</span>
          <span className="text-sm text-emerald-300">Health · AI</span>
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
            <span className="inline-block w-fit rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-1 text-xs text-emerald-300">
              Healthcare · Artificial Intelligence
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              AI Helps Detect Diseases
              <span className="block text-emerald-300">
                Earlier Than Ever Before
              </span>
            </h1>

            <p className="text-lg text-emerald-200 max-w-3xl">
              Artificial intelligence is transforming healthcare by identifying
              diseases at earlier stages — often before symptoms even appear —
              dramatically improving patient outcomes and survival rates.
            </p>
          </motion.section>

          <section className="grid gap-12 text-emerald-200 leading-relaxed">
            <p>
              Advanced AI models are now capable of analyzing medical data such
              as imaging scans, blood tests, and patient history with remarkable
              precision. By detecting subtle patterns invisible to the human
              eye, these systems can flag early signs of conditions like cancer,
              cardiovascular disease, and neurological disorders.
            </p>

            <p>
              Early detection is critical. The sooner a disease is identified,
              the higher the chances of successful treatment. AI is enabling
              doctors to move from reactive care to proactive and preventive
              medicine.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-emerald-400/20 bg-zinc-900 p-6 grid gap-4">
                <HeartPulse className="h-8 w-8" />
                <h3 className="font-bold text-emerald-400">Early Diagnosis</h3>
                <p className="text-sm">
                  AI identifies diseases at their earliest stages, increasing
                  treatment success rates.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-zinc-900 p-6 grid gap-4">
                <Brain className="h-8 w-8" />
                <h3 className="font-bold text-emerald-400">
                  Pattern Recognition
                </h3>
                <p className="text-sm">
                  Machine learning detects complex medical patterns beyond human
                  capability.
                </p>
              </div>

              <div className="rounded-2xl border border-emerald-400/20 bg-zinc-900 p-6 grid gap-4">
                <Activity className="h-8 w-8" />
                <h3 className="font-bold text-emerald-400">
                  Continuous Monitoring
                </h3>
                <p className="text-sm">
                  Wearables and AI systems track health data in real-time for
                  early alerts.
                </p>
              </div>
            </div>

            <p>
              Despite its potential, AI in healthcare raises important questions
              about data privacy, ethics, and reliability. Ensuring transparency
              and trust will be essential as these systems become more widely
              adopted.
            </p>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-emerald-400 to-green-300 p-12 text-black grid gap-6"
          >
            <Stethoscope className="h-10 w-10" />
            <h2 className="text-3xl font-extrabold">A New Era of Medicine</h2>
            <p className="max-w-3xl">
              AI-driven diagnostics are reshaping healthcare — shifting the
              focus toward prevention, personalization, and precision medicine
              at scale.
            </p>
            <a
              href="/"
              className="w-fit rounded-xl bg-black px-6 py-3 font-semibold text-emerald-400 hover:bg-zinc-800"
            >
              Back to Home
            </a>
          </motion.section>
        </div>
      </main>

      <footer className="border-t border-emerald-400/20 py-8 text-center text-sm text-emerald-300">
        © 2026 AI FutureTech · Health Desk
      </footer>
    </div>
  );
}
