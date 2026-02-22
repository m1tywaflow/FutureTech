"use client";
import HoverBtn from "../../UI/HoverBtn/HoverBtn";
import { Scale, Eye, Users, BookOpen } from "lucide-react";

export default function AIEthics() {
  const principles = [
    {
      title: "Transparency",
      description:
        "Explain how AI systems make decisions and document data sources, limitations, and evaluation methods.",
      icon: <Eye className="w-6 h-6" />,
    },
    {
      title: "Fairness",
      description:
        "Detect and reduce bias through diverse datasets, audits, and equitable performance evaluations.",
      icon: <Scale className="w-6 h-6" />,
    },
    {
      title: "Accountability",
      description:
        "Ensure clear responsibility for system outcomes, error handling, and user concerns.",
      icon: <Users className="w-6 h-6" />,
    },
    {
      title: "Privacy",
      description:
        "Protect user data, minimize collection, and follow secure data-handling standards.",
      icon: <BookOpen className="w-6 h-6" />,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black px-6 py-32 text-white">
      <section className="max-w-7xl mx-auto space-y-20">
        <header className="text-center space-y-6">
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">
            AI{" "}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Ethics
            </span>
          </h1>
          <p className="text-zinc-400 max-w-xl mx-auto">
            Designing responsible, fair, and transparent AI systems.
          </p>
        </header>
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-center">
            Core Ethical Principles
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {principles.map((p) => (
              <div
                key={p.title}
                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition hover:border-yellow-400/40 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)]"
              >
                <div className="mb-4 w-12 h-12 flex items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400 group-hover:scale-110 transition">
                  {p.icon}
                </div>

                <h3 className="font-semibold text-lg mb-2">{p.title}</h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {p.description}
                </p>
              </div>
            ))}
          </div>
        </section>
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-center">
            Real Ethical Challenges
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Automated Hiring Systems",
                text: "Prevent discriminatory outcomes by performing regular audits, monitoring demographic impact, and providing a human appeal path.",
              },
              {
                title: "Large-Scale Content Moderation",
                text: "Ensure fair moderation through transparent rules, measurable review processes, and user feedback mechanisms.",
              },
            ].map((item) => (
              <article
                key={item.title}
                className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-yellow-400/40 transition"
              >
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section className="space-y-8">
          <h2 className="text-2xl font-semibold text-center">
            Practical Checklist
          </h2>

          <ul className="grid gap-4 sm:grid-cols-2">
            {[
              "Document system design choices and limitations",
              "Perform bias and robustness testing regularly",
              "Create a clear incident response workflow",
              "Provide user-facing explanations and controls",
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-xl p-4"
              >
                <div className="w-2 h-2 bg-yellow-400 rounded-full" />
                <span className="text-sm text-zinc-300">{item}</span>
              </li>
            ))}
          </ul>
        </section>
        <section className="relative bg-gradient-to-br from-yellow-400/10 to-orange-500/10 border border-yellow-400/20 rounded-3xl p-10 text-center space-y-4 overflow-hidden">
          <h3 className="text-2xl font-semibold">
            Build AI that users can trust
          </h3>

          <p className="text-zinc-400 text-sm max-w-md mx-auto">
            Integrate ethical principles into every stage of your product
            lifecycle.
          </p>

          <div className="flex justify-center pt-4">
            <HoverBtn />
          </div>
        </section>
      </section>
    </main>
  );
}
