import { useEffect, useState, useRef } from "react";
import abstractDesign from "../../../assets/HomeImg/Explore/abstractDesign.png";
import peoples from "../../../assets/HomeImg/Explore/peoples4.png";
import { Link } from "react-router-dom";

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
      { threshold: 0.3 }
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

export default function ExploreSection() {
  return (
    <section className="relative w-full bg-[#0A0A0A] text-white overflow-hidden py-28 md:py-32">
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[#BFA34A]/20 blur-[180px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 items-center gap-16">
        <div>
          <h3 className="text-[#8A8A8A] text-lg mb-4">
            Your Journey to Tomorrow Begins Here
          </h3>

          <h1 className="text-5xl md:text-6xl font-semibold leading-tight mb-6">
            Explore the Frontiers of
            <span className="block bg-gradient-to-r from-[#E7D27A] via-[#D4B75A] to-[#BFA34A] bg-clip-text text-transparent">
              Artificial Intelligence
            </span>
          </h1>

          <p className="text-[#9A9A9A] text-lg leading-relaxed max-w-xl">
            Welcome to the epicenter of AI innovation. FutureTech AI News is
            your gateway into a world where machines learn, evolve and reshape
            the future.
          </p>

          <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { end: 300, label: "Resources" },
              { end: 12000, label: "Downloads" },
              { end: 10000, label: "Users" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-[#423207] border border-[#1F1F1F] rounded-xl p-6
                hover:border-[#BFA34A]/40 transition"
              >
                <h2 className="text-3xl font-semibold">
                  <Counter end={item.end} />
                  <span className="text-[#D4B75A]">+</span>
                </h2>
                <p className="text-[#8A8A8A] text-sm mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <img
            src={abstractDesign}
            alt="AI Design"
            className="w-full max-w-lg object-contain"
          />

          <div
            className="absolute bottom-10 lg:bottom-16 right-1/2 translate-x-1/2 lg:translate-x-0 lg:right-6
            bg-[#0F0F0F]/90 backdrop-blur-xl
            border border-[#1F1F1F]
            rounded-2xl p-6
            w-[90%] max-w-sm
            shadow-[0_0_40px_rgba(191,163,74,0.15)]"
          >
            <img src={peoples} alt="Users" className="h-12 mb-3" />

            <h3 className="font-semibold mb-1">Explore 1000+ resources</h3>

            <p className="text-[#8A8A8A] text-sm mb-4">
              Articles, research and insights about AI trends and technology.
            </p>

            <Link
              to="/resources"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg
              border border-[#262626]
              hover:border-[#BFA34A]
              hover:bg-[#151515]
              transition text-sm"
            >
              Explore Resources →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
