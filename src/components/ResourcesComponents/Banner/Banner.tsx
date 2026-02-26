import { useEffect, useState, useRef } from "react";

interface CounterProps {
  end: number;
  duration?: number;
}

function Counter({ end, duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.4 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;
    const incrementTime = 16;
    const totalSteps = duration / incrementTime;
    const step = end / totalSteps;

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, incrementTime);

    return () => clearInterval(counter);
  }, [visible, end, duration]);

  return <span ref={ref}>{count.toLocaleString()}</span>;
}

export default function Banner() {
  const stats = [
    { end: 300, label: "Resources available" },
    { end: 12000, label: "Total Downloads" },
    { end: 10000, label: "Active Users" },
    { end: 100, label: "Countries using platform" },
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] text-white overflow-hidden">
      <div className="absolute top-[-220px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#BFA34A]/20 blur-[160px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-semibold leading-tight">
              Unlock a World of
              <span className="block bg-gradient-to-r from-[#E7D27A] via-[#D4B75A] to-[#BFA34A] bg-clip-text text-transparent">
                Knowledge
              </span>
            </h1>

            <p className="text-[#9A9A9A] max-w-xl text-lg leading-relaxed">
              Dive deep into the AI universe with our collection of insightful
              podcasts. Explore trends, breakthroughs and real-world discussions
              about artificial intelligence.
            </p>
          </div>

          <div className="bg-[#1d1a03] backdrop-blur-xl border border-[#1F1F1F] rounded-3xl p-8 shadow-[0_0_40px_rgba(191,163,74,0.12)]">
            <p className="text-[#9A9A9A] text-sm">
              Our AI knowledge hub continues to grow every day — new research,
              discussions, and insights added regularly.
            </p>
          </div>
        </div>

        <div className="mt-20 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl
              bg-[#463b1a]
              border border-[#1F1F1F]
              transition duration-300
              hover:border-[#BFA34A]/40
              hover:shadow-[0_0_30px_rgba(191,163,74,0.18)]
              hover:-translate-y-1"
            >
              <h2 className="text-4xl font-semibold">
                <Counter end={item.end} />
                <span className="text-[#D4B75A]">+</span>
              </h2>

              <p className="text-[#8A8A8A] mt-2 text-sm">{item.label}</p>

              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#BFA34A]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
