export default function TermsConditions() {
  return (
    <div className="relative min-h-screen bg-[#0b0b0b] text-gray-300 py-24 px-6 flex justify-center overflow-hidden">
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-yellow-400/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Terms & <span className="text-yellow-400">Conditions</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Please read these Terms and Conditions carefully before using our
            website.
          </p>
        </div>

        <section className="group backdrop-blur-xl bg-white/[0.04] p-7 rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition hover:border-yellow-400/40">
          <h2 className="text-2xl font-semibold text-white mb-3">
            1. Introduction
          </h2>
          <p className="text-gray-400 leading-relaxed">
            By accessing our website, you agree to comply with and be bound by
            these Terms & Conditions. If you disagree with any part of the
            terms, you may not access the website.
          </p>
        </section>

        <section className="group backdrop-blur-xl bg-white/[0.04] p-7 rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition hover:border-yellow-400/40">
          <h2 className="text-2xl font-semibold text-white mb-3">
            2. Intellectual Property Rights
          </h2>
          <p className="text-gray-400 leading-relaxed">
            All content published on this website, including text, graphics,
            logos, and images, is owned by us or our licensors. You may not
            reproduce, distribute, or modify any content without prior written
            consent.
          </p>
        </section>

        <section className="group backdrop-blur-xl bg-white/[0.04] p-7 rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition hover:border-yellow-400/40">
          <h2 className="text-2xl font-semibold text-white mb-3">
            3. Restrictions
          </h2>

          <ul className="list-disc ml-6 space-y-2 text-gray-400">
            <li>Unauthorized commercial use of any website material</li>
            <li>Using the website in any way that may cause harm</li>
            <li>Engaging in data mining or similar activities</li>
          </ul>
        </section>

        <section className="group backdrop-blur-xl bg-white/[0.04] p-7 rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition hover:border-yellow-400/40">
          <h2 className="text-2xl font-semibold text-white mb-3">
            4. Your Privacy
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Please read our Privacy Policy to understand how we handle your
            personal data.
          </p>
        </section>

        <section className="group backdrop-blur-xl bg-white/[0.04] p-7 rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition hover:border-yellow-400/40">
          <h2 className="text-2xl font-semibold text-white mb-3">
            5. Limitation of Liability
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We are not responsible for any damages that may arise from the use
            of this website. All content is provided "as is" without warranties
            of any kind.
          </p>
        </section>

        <section className="group backdrop-blur-xl bg-white/[0.04] p-7 rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition hover:border-yellow-400/40">
          <h2 className="text-2xl font-semibold text-white mb-3">
            6. Changes to Terms
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We reserve the right to update these Terms & Conditions at any time.
            Changes will be effective immediately upon posting.
          </p>
        </section>

        <p className="text-center text-gray-500 text-sm pt-10">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}
