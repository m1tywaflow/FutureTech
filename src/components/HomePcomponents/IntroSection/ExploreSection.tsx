import { useEffect, useState, useRef } from "react";
import abstractDesign from "../../../assets/HomeImg/Explore/abstractDesign.png";
import peoples from "../../../assets/HomeImg/Explore/peoples4.png";

function Counter({ end, duration = 2000 }) {
  const [count, setCount] = useState(0);
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

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
    <section className="w-full min-h-screen bg-[#0D0D0D] text-white flex items-center">
      <div className="container mx-auto lg:px-24 py-20 grid grid-cols-1 lg:grid-cols-2 items-center">
        <div className="px-6 md:px-12 lg:px-0">
          <h3 className="text-[#666666] text-lg mb-4">
            Your Journey to Tomorrow Begins Here
          </h3>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Explore the Frontiers of <br /> Artificial Intelligence
          </h1>
          <p className="text-[#666666] text-lg leading-relaxed max-w-2xl">
            Welcome to the epicenter of AI innovation. FutureTech AI News is
            your passport to a world where machines think, learn, and reshape
            the future. Join us on this visionary expedition into the heart of
            AI.
          </p>
          <div className="mt-20 border border-[#262626] border-collapse">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#262626]">
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
            </div>
          </div>
        </div>
        <div className="relative flex justify-end items-center">
          <img
            src={abstractDesign}
            alt="Abstract Design"
            className="w-full max-w-lg object-contain -ml-20"
          />
          <div className="absolute bottom-16 right-10 bg-[#1F1F1F] border border-[#262626] rounded-xl p-6 w-[90%] max-w-sm">
            <div className="mb-4">
              <img src={peoples} alt="People" className="h-14" />
              <div>
                <h3 className="font-semibold">Explore 1000+ resources</h3>
                <p className="text-gray-400 text-sm">
                  Over 1,000 articles on emerging tech trends and breakthroughs.
                </p>
              </div>
            </div>
            <button className="mt-4 px-5 py-2 border border-[#262626] rounded-lg text-sm flex items-center gap-2 hover:bg-gray-800 transition cursor-pointer duration-200">
              Explore Resources <span>↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
