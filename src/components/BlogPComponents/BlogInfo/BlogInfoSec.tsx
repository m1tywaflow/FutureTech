export default function BlogInfoSec() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 text-white bg-gradient-to-b from-black via-zinc-900 to-black">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        <div className="lg:col-span-2 space-y-16">
          <div className="relative pl-6 border-l border-yellow-400/30">
            <h2 className="text-xl font-semibold mb-3 text-yellow-400">
              Introduction
            </h2>
            <p className="text-zinc-400 leading-relaxed text-[15px]">
              Artificial Intelligence (AI) has emerged as a transformative force
              in the healthcare industry, reshaping patient care, diagnostics,
              and research. In this blog post, we explore the profound impact of
              AI in healthcare, from revolutionizing diagnostic accuracy to
              enhancing patient outcomes.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="text-3xl font-semibold tracking-tight">
              Artificial Intelligence (AI)
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              Artificial Intelligence (AI) has permeated virtually every aspect
              of our lives, and healthcare is no exception. The integration of
              AI in healthcare is ushering in a new era of medical practice,
              where machines complement the capabilities of healthcare
              professionals.
            </p>

            <p className="text-zinc-400 leading-relaxed">
              In this blog post, we will explore diverse applications of AI —
              from diagnostic imaging to personalized treatment — and examine
              the ethical implications shaping this transformation.
            </p>
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold">
              Predictive Analytics & Disease Prevention
            </h2>

            <p className="text-zinc-400 leading-relaxed">
              One of the most impactful applications of AI lies in predictive
              analytics. Machine learning models can analyze massive datasets
              and identify early warning signs of diseases long before symptoms
              appear.
            </p>
            <div className="bg-yellow-400/10 border border-yellow-400/20 rounded-xl p-5 text-sm text-zinc-300">
              AI systems can detect subtle anomalies in medical imaging that are
              often invisible to the human eye, significantly improving early
              diagnosis rates.
            </div>
          </div>
        </div>
        <aside className="space-y-8 lg:sticky lg:top-24 h-fit">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4 text-sm">
            {[
              ["Publication Date", "October 15, 2023"],
              ["Category", "Healthcare"],
              ["Reading Time", "10 Min"],
              ["Author", "Dr. Emily Walker"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="flex justify-between items-center border-b border-white/5 pb-2 last:border-none"
              >
                <span className="text-zinc-500">{label}</span>
                <span className="font-medium text-white">{value}</span>
              </div>
            ))}
          </div>
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
            <h3 className="text-lg font-semibold mb-5">Table of Contents</h3>

            <ul className="space-y-3 text-sm">
              {[
                "Introduction",
                "AI in Diagnostic Imaging",
                "Predictive Analytics",
                "Personalized Treatment",
                "Drug Discovery",
                "Telemedicine",
                "Ethics",
                "Future of AI",
                "Conclusion",
              ].map((item) => (
                <li
                  key={item}
                  className="group flex items-center gap-3 text-zinc-400 hover:text-yellow-400 cursor-pointer transition"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600 group-hover:bg-yellow-400 transition" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
