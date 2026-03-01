export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen bg-[#0b0b0b] text-gray-300 py-24 px-6 flex justify-center overflow-hidden">
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-yellow-400/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-200px] left-[-200px] w-[600px] h-[600px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      <div className="relative max-w-4xl w-full space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Privacy <span className="text-yellow-400">Policy</span>
          </h1>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Your privacy is important to us. Please read this policy to
            understand how we collect, use, and protect your information.
          </p>
        </div>

        <section className="group backdrop-blur-xl bg-white/[0.04] p-7 rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition hover:border-yellow-400/40">
          <h2 className="text-2xl font-semibold text-white mb-3">
            1. Information Collection
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We collect personal information that you provide directly to us when
            using our services, such as name, email, and payment details.
          </p>
        </section>

        <section className="group backdrop-blur-xl bg-white/[0.04] p-7 rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition hover:border-yellow-400/40">
          <h2 className="text-2xl font-semibold text-white mb-3">
            2. How We Use Information
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Your information is used to provide and improve our services,
            communicate with you, and for legal compliance.
          </p>
        </section>

        <section className="group backdrop-blur-xl bg-white/[0.04] p-7 rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition hover:border-yellow-400/40">
          <h2 className="text-2xl font-semibold text-white mb-3">
            3. Cookies & Tracking
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We use cookies and similar technologies to enhance your experience,
            analyze usage, and personalize content.
          </p>
        </section>

        <section className="group backdrop-blur-xl bg-white/[0.04] p-7 rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition hover:border-yellow-400/40">
          <h2 className="text-2xl font-semibold text-white mb-3">
            4. Data Sharing
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We do not sell your personal information. We may share data with
            trusted partners for operational purposes.
          </p>
        </section>

        <section className="group backdrop-blur-xl bg-white/[0.04] p-7 rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition hover:border-yellow-400/40">
          <h2 className="text-2xl font-semibold text-white mb-3">
            5. Security Measures
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We implement reasonable technical and organizational measures to
            protect your information from unauthorized access, alteration, or
            disclosure.
          </p>
        </section>

        <section className="group backdrop-blur-xl bg-white/[0.04] p-7 rounded-3xl border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.6)] transition hover:border-yellow-400/40">
          <h2 className="text-2xl font-semibold text-white mb-3">
            6. Changes to This Policy
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We may update our Privacy Policy periodically. Updates will be
            effective immediately upon posting.
          </p>
        </section>

        <div className="flex justify-center  text-sm text-gray-400 pt-10">
          <a
            href="/terms-conditions"
            className="hover:text-yellow-400 transition-colors"
          >
            Terms & Conditions
          </a>
        </div>

        <p className="text-center text-gray-500 text-sm pt-6">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}
