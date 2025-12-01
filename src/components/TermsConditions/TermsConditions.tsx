export default function TermsConditions() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-gray-300 py-20 px-6 flex justify-center">
      <div className="max-w-4xl w-full space-y-10">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          Terms & Conditions
        </h1>
        <p className="text-gray-400 text-center max-w-2xl mx-auto">
          Please read these Terms and Conditions carefully before using our
          website.
        </p>

        <section className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-[#1E1E1E] space-y-4">
          <h2 className="text-2xl font-semibold text-white">1. Introduction</h2>
          <p>
            By accessing our website, you agree to comply with and be bound by
            these Terms & Conditions. If you disagree with any part of the
            terms, you may not access the website.
          </p>
        </section>

        <section className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-[#1E1E1E] space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            2. Intellectual Property Rights
          </h2>
          <p>
            All content published on this website, including text, graphics,
            logos, and images, is owned by us or our licensors. You may not
            reproduce, distribute, or modify any content without prior written
            consent.
          </p>
        </section>

        <section className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-[#1E1E1E] space-y-4">
          <h2 className="text-2xl font-semibold text-white">3. Restrictions</h2>
          <ul className="list-disc ml-6 space-y-2 text-gray-400">
            <li>Unauthorized commercial use of any website material</li>
            <li>Using the website in any way that may cause harm</li>
            <li>Engaging in data mining or similar activities</li>
          </ul>
        </section>

        <section className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-[#1E1E1E] space-y-4">
          <h2 className="text-2xl font-semibold text-white">4. Your Privacy</h2>
          <p>
            Please read our Privacy Policy to understand how we handle your
            personal data.
          </p>
        </section>

        <section className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-[#1E1E1E] space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            5. Limitation of Liability
          </h2>
          <p>
            We are not responsible for any damages that may arise from the use
            of this website. All content is provided "as is" without warranties
            of any kind.
          </p>
        </section>

        <section className="bg-[#111111] p-6 rounded-2xl shadow-lg border border-[#1E1E1E] space-y-4">
          <h2 className="text-2xl font-semibold text-white">
            6. Changes to Terms
          </h2>
          <p>
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
