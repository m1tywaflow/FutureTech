export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-gray-300 py-20 px-6 flex justify-center">
      <div className="max-w-4xl w-full space-y-10">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          Privacy Policy
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          Your privacy is important to us. Please read this policy to understand
          how we collect, use, and protect your information.
        </p>

        <section className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-[#1E1E1E] space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            1. Information Collection
          </h2>
          <p>
            We collect personal information that you provide directly to us when
            using our services, such as name, email, and payment details.
          </p>
        </section>

        <section className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-[#1E1E1E] space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            2. How We Use Information
          </h2>
          <p>
            Your information is used to provide and improve our services,
            communicate with you, and for legal compliance.
          </p>
        </section>

        <section className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-[#1E1E1E] space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            3. Cookies & Tracking
          </h2>
          <p>
            We use cookies and similar technologies to enhance your experience,
            analyze usage, and personalize content.
          </p>
        </section>

        <section className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-[#1E1E1E] space-y-4">
          <h2 className="text-2xl font-semibold text-white">4. Data Sharing</h2>
          <p>
            We do not sell your personal information. We may share data with
            trusted partners for operational purposes.
          </p>
        </section>

        <section className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-[#1E1E1E] space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            5. Security Measures
          </h2>
          <p>
            We implement reasonable technical and organizational measures to
            protect your information from unauthorized access, alteration, or
            disclosure.
          </p>
        </section>

        <section className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-[#1E1E1E] space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            6. Changes to This Policy
          </h2>
          <p>
            We may update our Privacy Policy periodically. Updates will be
            effective immediately upon posting.
          </p>
        </section>

        <div className="flex justify-center space-x-4 text-sm text-gray-400 pt-10">
          <a
            href="/terms-conditions"
            className="hover:text-white transition-colors underline"
          >
            Terms & Conditions
          </a>
          <a
            href="/privacy-policy"
            className="hover:text-white transition-colors underline"
          >
            Privacy Policy
          </a>
        </div>

        <p className="text-center text-gray-500 text-sm pt-6">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>
      </div>
    </div>
  );
}
