"use client";
import HoverBtn from "../../UI/HoverBtn/HoverBtn";

import { Scale, Eye, Users, BookOpen } from "lucide-react";

export default function AIEthics() {
  const principles = [
    {
      title: "Transparency",
      description:
        "Explain how AI systems make decisions and document data sources, limitations, and evaluation methods.",
      icon: <Eye className="w-8 h-8" />,
    },
    {
      title: "Fairness",
      description:
        "Detect and reduce bias through diverse datasets, audits, and equitable performance evaluations.",
      icon: <Scale className="w-8 h-8" />,
    },
    {
      title: "Accountability",
      description:
        "Ensure clear responsibility for system outcomes, error handling, and user concerns.",
      icon: <Users className="w-8 h-8" />,
    },
    {
      title: "Privacy",
      description:
        "Protect user data, minimize collection, and follow secure data-handling standards.",
      icon: <BookOpen className="w-8 h-8" />,
    },
  ];

  return (
    <main className="min-h-screen bg-black  px-6 py-12">
      <section className="max-w-7xl mx-auto space-y-16">
        <header className="space-y-4 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            AI
            <span className="text-yellow-400">Ethics</span>
          </h1>
        </header>
        <section className="space-y-6 ">
          <h2 className="text-2xl font-semibold">Core Ethical Principles</h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 ">
            {principles.map((p) => (
              <div
                key={p.title}
                className="bg-black border border-yellow-300 rounded-xl p-5 shadow-sm hover:shadow  transition"
              >
                <div className="flex flex-wrap">
                  <div className="rounded-lg  text-yellow-400">{p.icon}</div>
                  <div>
                    <h3 className="font-medium mt-4">{p.title}</h3>
                    <p className="text-sm  mt-4">{p.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Real Ethical Challenges</h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <article className="bg-black border border-yellow-300 rounded-xl p-6 shadow-sm">
              <h3 className="font-medium">Automated Hiring Systems</h3>
              <p className=" text-sm mt-2">
                Prevent discriminatory outcomes by performing regular audits,
                monitoring demographic impact, and providing a human appeal
                path.
              </p>
            </article>

            <article className="bg-black border-yellow-300 border rounded-xl p-6 shadow-sm">
              <h3 className="font-medium">Large-Scale Content Moderation</h3>
              <p className=" text-sm mt-2">
                Ensure fair moderation through transparent rules, measurable
                review processes, and user feedback mechanisms.
              </p>
            </article>
          </div>
        </section>
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Practical Checklist</h2>

          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Document system design choices and limitations",
              "Perform bias and robustness testing regularly",
              "Create a clear incident response workflow",
              "Provide user-facing explanations and controls",
            ].map((item) => (
              <li
                key={item}
                className="bg-black border border-yellow-300 rounded-lg p-4 text-x shadow-sm"
              >
                • {item}
              </li>
            ))}
          </ul>
        </section>
        <section className="  bg-[#1A1A1A] rounded-2xl p-8 text-center space-y-3">
          <h3 className="text-2xl font-semibold">
            Build AI that users can trust.
          </h3>
          <p className=" text-sm">
            Integrate ethical principles into every stage of your product
            lifecycle.
          </p>

          <div className="flex justify-center py-4">
            <HoverBtn />
          </div>
        </section>
      </section>
    </main>
  );
}
