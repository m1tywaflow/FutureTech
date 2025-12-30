export default function BlogInfoSec() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-16 text-[#e5e5e5]">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-12">
          <div className="border-b border-white/10 pb-6">
            <h2 className="text-lg font-semibold mb-2">Introduction</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Artificial Intelligence (AI) has emerged as a transformative force
              in the healthcare industry, reshaping patient care, diagnostics,
              and research. In this blog post, we explore the profound impact of
              AI in healthcare, from revolutionizing diagnostic accuracy to
              enhancing patient outcomes.
            </p>
          </div>
          <div className="space-y-4 border-b border-white/10 pb-10">
            <h2 className="text-2xl font-semibold">
              Artificial Intelligence (AI)
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed">
              Artificial Intelligence (AI) has permeated virtually every aspect
              of our lives, and healthcare is no exception. The integration of
              AI in healthcare is ushering in a new era of medical practice,
              where machines complement the capabilities of healthcare
              professionals, ultimately improving patient outcomes and the
              efficiency of the healthcare system.
            </p>

            <p className="text-sm text-gray-400 leading-relaxed">
              In this blog post, we will delve into the diverse applications of
              AI in healthcare, from diagnostic imaging to personalized
              treatment plans, and address the ethical considerations
              surrounding this revolutionary technology.
            </p>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">
              Predictive Analytics and Disease Prevention
            </h2>

            <p className="text-sm text-gray-400 leading-relaxed">
              One of the most prominent applications of AI in healthcare is in
              diagnostic imaging. AI algorithms have demonstrated remarkable
              proficiency in interpreting medical images such as X-rays, MRIs,
              and CT scans. They can identify anomalies and deviations that
              might be overlooked by the human eye.
            </p>
          </div>
        </div>
        <aside className="space-y-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-400">Publication Date</span>
              <span className="font-medium">October 15, 2023</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Category</span>
              <span className="font-medium">Healthcare</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Reading Time</span>
              <span className="font-medium">10 Min</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-400">Author Name</span>
              <span className="font-medium">Dr. Emily Walker</span>
            </div>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>

            <ul className="space-y-3 text-sm text-gray-300">
              <li>• Introduction</li>
              <li>• AI in Diagnostic Imaging</li>
              <li>• Predictive Analytics and Disease Prevention</li>
              <li>• Personalized Treatment Plans</li>
              <li>• Drug Discovery and Research</li>
              <li>• AI in Telemedicine</li>
              <li>• Ethical Considerations</li>
              <li>• The Future of AI in Healthcare</li>
              <li>• Conclusion</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
