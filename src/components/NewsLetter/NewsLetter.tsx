import { useState } from "react";
import { z } from "zod";
import emailjs from "@emailjs/browser";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailSchema = z.string().email({ message: "Invalid email address" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      emailSchema.parse(email);
      setError("");
      setLoading(true);

      await emailjs.send(
        "service_865cb2m",
        "template_17e7rom",
        {
          subscriber_email: email,
        },
        "vnd2W1SFLNPKC6mIt"
      );

      setSubmitted(true);
      setEmail("");
    } catch (err: any) {
      if (err?.errors) {
        setError(err.errors[0].message);
      } else {
        setError("Failed to send email. Try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-gray-300 py-20 px-6 flex justify-center items-center">
      <div className="max-w-2xl w-full space-y-10 text-center">
        <h1 className="text-4xl font-bold text-white">
          Subscribe to Our Newsletter
        </h1>
        <p className="text-gray-400">
          Stay up-to-date with the latest news, updates, and exclusive content.
          Enter your email below to subscribe.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            className={`w-full sm:w-72 px-4 py-3 rounded-lg bg-[#111111] border ${
              error ? "border-red-500" : "border-[#1E1E1E]"
            } text-white`}
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg disabled:opacity-50"
          >
            {loading ? "Sending..." : "Subscribe"}
          </button>
        </form>

        {error && <p className="text-red-500 mt-2">{error}</p>}
        {submitted && !error && (
          <p className="text-green-400 mt-4">Email sent to admin ✔</p>
        )}
      </div>
    </div>
  );
}
