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

export default function Banner() {
  return (
    <section className="w-full bg-[#0D0D0D] text-white  text-center">
      <div className="w-full border-[#2A2A2A] pb-8 px-40 py-30">
        <h1 className="text-5xl font-semibold leading-tight text-start">
          Unlock a World of
        </h1>

        <div className="flex items-start gap-30 mt-4">
          <h1 className="text-5xl font-semibold leading-tight">Knowledge</h1>

          <p className="text-[#98989A] text-sm max-w-4xl pt-2">
            Dive deep into the AI universe with our collection of insightful
            podcasts. Explore the latest trends, breakthroughs, and discussions
            on artificial intelligence. Whether you're an enthusiast or a
            professional, our AI podcasts offer a gateway to knowledge and
            innovation.
          </p>
        </div>
      </div>

      <div className="border border-[#262626] border-collapse mt-10">
        <div className="grid grid-cols-1 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[#262626]">
          <div className="text-center md:text-left p-10">
            <h2 className="text-3xl font-bold transition-all duration-300 ease-out">
              <Counter end={300} />
              <span className="text-yellow-400">+</span>
            </h2>
            <p className="text-gray-400 mt-2">Resources available</p>
          </div>

          <div className="text-center md:text-left p-10">
            <h2 className="text-3xl font-bold">
              <Counter end={12000} />
              <span className="text-yellow-400">+</span>
            </h2>
            <p className="text-gray-400 mt-2">Total Downloads</p>
          </div>

          <div className="text-center md:text-left p-10">
            <h2 className="text-3xl font-bold">
              <Counter end={10000} />
              <span className="text-yellow-400">+</span>
            </h2>
            <p className="text-gray-400 mt-2">Active Users</p>
          </div>
          <div className="text-center md:text-left p-10">
            <h2 className="text-3xl font-bold">
              <Counter end={100} />
              <span className="text-yellow-400">+</span>
            </h2>
            <p className="text-gray-400 mt-2">Countries Accesses Our Content</p>
          </div>
        </div>
      </div>
    </section>
  );
}
