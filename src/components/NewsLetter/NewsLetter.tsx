import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";

const emailSchema = z.string().email({ message: "Invalid email address" });

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      emailSchema.parse(email);
      setError("");
      setLoading(true);

      await emailjs.send(
        "service_865cb2m",
        "template_17e7rom",
        { subscriber_email: email },
        "vnd2W1SFLNPKC6mIt"
      );

      setSubmitted(true);
      setEmail("");
    } catch (err: any) {
      setError(err?.errors?.[0]?.message || "Failed to send email. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0D0D0D] via-[#111] to-[#0D0D0D] px-6">
      <div className="w-full max-w-xl backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 shadow-2xl text-center space-y-6">
        <h1 className="text-4xl font-bold text-white tracking-tight">
          Stay in the loop ✨
        </h1>

        <p className="text-gray-400 text-sm sm:text-base">
          Get updates, new features, and exclusive content прямо на почту.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3"
        >
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            className={`flex-1 px-4 py-3 rounded-xl bg-black/40 border transition-all duration-200 outline-none
              ${
                error
                  ? "border-red-500 focus:ring-2 focus:ring-red-500/40"
                  : "border-white/10 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30"
              }
              text-white placeholder-gray-500`}
          />

          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 text-black 
              hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 
              disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Subscribe"}
          </button>
        </form>

        {error && <p className="text-red-400 text-sm animate-pulse">{error}</p>}

        {submitted && !error && (
          <p className="text-green-400 text-sm animate-fade-in">
            ✔ Successfully sent!
          </p>
        )}
      </div>
    </div>
  );
}
