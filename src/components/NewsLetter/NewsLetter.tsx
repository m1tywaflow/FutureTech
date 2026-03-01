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
    <div className="relative min-h-screen flex items-center justify-center bg-[#0b0b0b] px-6 overflow-hidden">
      <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-yellow-400/10 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-[-200px] right-[-100px] w-[500px] h-[500px] bg-yellow-500/10 blur-[140px] rounded-full"></div>

      <div className="relative w-full max-w-xl">
        <div className="absolute -inset-[1px] rounded-3xl bg-gradient-to-r from-yellow-400/20 via-yellow-500/10 to-yellow-400/20 blur-xl opacity-70"></div>

        <div className="relative backdrop-blur-2xl bg-white/[0.04] border border-white/10 rounded-3xl p-10 shadow-[0_30px_120px_rgba(0,0,0,0.8)] text-center space-y-7 transition-all duration-300 hover:border-yellow-400/40 hover:scale-[1.01]">
          <div className="flex justify-center">
            <div className="px-3 py-1 text-xs bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-300">
              Early access
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-14 h-14 rounded-2xl bg-yellow-400/10 flex items-center justify-center text-2xl">
              🚀
            </div>
          </div>

          <h1 className="text-4xl font-bold text-white tracking-tight">
            Stay in the loop
          </h1>

          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto">
            Get product updates, new features and exclusive content straight to
            your inbox.
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 pt-2"
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
                    : "border-white/10 focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/30 focus:bg-black/60"
                }
                text-white placeholder-gray-500`}
            />

            <button
              type="submit"
              disabled={loading}
              className="px-6 py-3 rounded-xl font-semibold bg-gradient-to-r from-yellow-400 to-yellow-500 text-black 
              hover:scale-[1.05] active:scale-[0.97] transition-all duration-200 
              disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              {loading ? "Sending..." : "Subscribe"}
            </button>
          </form>

          {error && (
            <p className="text-red-400 text-sm animate-pulse">{error}</p>
          )}

          {submitted && !error && (
            <p className="text-green-400 text-sm">✔ Successfully sent!</p>
          )}

          <p className="text-xs text-gray-500 pt-2">
            Join 1,200+ subscribers already inside
          </p>

          <div className="flex justify-center gap-6 text-xs text-gray-500 pt-2">
            <span>⚡ Early features</span>
            <span>🎁 Exclusive content</span>
            <span>🚀 Product updates</span>
          </div>
        </div>
      </div>
    </div>
  );
}
