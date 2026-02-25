import { motion } from "framer-motion";
import { Brain, Heart, Smile, Shield, ArrowLeft } from "lucide-react";

export default function Awareness() {
  return (
    <div className="min-h-screen bg-black text-fuchsia-400">
      <header className="sticky top-0 z-50 border-b border-fuchsia-400/20 bg-black/80 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="/blog"
            className="flex items-center gap-2 text-fuchsia-300 hover:text-fuchsia-400"
          >
            <ArrowLeft size={18} /> Back
          </a>
          <span className="font-extrabold tracking-wider">AI FUTURETECH</span>
          <span className="text-sm text-fuchsia-300">Health · Society</span>
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
            <span className="inline-block w-fit rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-1 text-xs text-fuchsia-300">
              Health · Mental Wellness
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Mental Health Awareness
              <span className="block text-fuchsia-300">
                Gains Momentum Worldwide
              </span>
            </h1>

            <p className="text-lg text-fuchsia-200 max-w-3xl">
              Conversations around mental health are growing louder — breaking
              stigma, expanding access to care, and reshaping how society views
              emotional and psychological well-being.
            </p>
          </motion.section>

          <section className="grid gap-12 text-fuchsia-200 leading-relaxed">
            <p>
              Governments, organizations, and communities are increasingly
              prioritizing mental health initiatives. From workplace programs to
              digital therapy platforms, support systems are becoming more
              accessible and widely accepted.
            </p>

            <p>
              Social media and public figures have also played a key role in
              normalizing conversations around anxiety, depression, and burnout.
              As awareness grows, more people are seeking help without fear of
              judgment or stigma.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="rounded-2xl border border-fuchsia-400/20 bg-zinc-900 p-6 grid gap-4">
                <Brain className="h-8 w-8" />
                <h3 className="font-bold text-fuchsia-400">Open Dialogue</h3>
                <p className="text-sm">
                  Breaking stigma through conversations in media, workplaces,
                  and communities.
                </p>
              </div>

              <div className="rounded-2xl border border-fuchsia-400/20 bg-zinc-900 p-6 grid gap-4">
                <Heart className="h-8 w-8" />
                <h3 className="font-bold text-fuchsia-400">Accessible Care</h3>
                <p className="text-sm">
                  Expansion of therapy services, hotlines, and digital mental
                  health tools.
                </p>
              </div>

              <div className="rounded-2xl border border-fuchsia-400/20 bg-zinc-900 p-6 grid gap-4">
                <Smile className="h-8 w-8" />
                <h3 className="font-bold text-fuchsia-400">Preventive Focus</h3>
                <p className="text-sm">
                  Increased emphasis on early intervention, mindfulness, and
                  emotional resilience.
                </p>
              </div>
            </div>

            <p>
              Despite progress, challenges remain — including limited access in
              some regions, high treatment costs, and ongoing stigma. Experts
              stress the importance of continued education, policy support, and
              investment in mental health infrastructure.
            </p>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-gradient-to-br from-fuchsia-400 to-pink-400 p-12 text-black grid gap-6"
          >
            <Shield className="h-10 w-10" />
            <h2 className="text-3xl font-extrabold">Looking Ahead</h2>
            <p className="max-w-3xl">
              As awareness continues to grow, the future of mental health care
              will focus on inclusivity, accessibility, and proactive support —
              making well-being a global priority.
            </p>
            <a
              href="/"
              className="w-fit rounded-xl bg-black px-6 py-3 font-semibold text-fuchsia-400 hover:bg-zinc-800"
            >
              Back to Home
            </a>
          </motion.section>
        </div>
      </main>

      <footer className="border-t border-fuchsia-400/20 py-8 text-center text-sm text-fuchsia-300">
        © 2026 AI FutureTech · Health Desk
      </footer>
    </div>
  );
}
