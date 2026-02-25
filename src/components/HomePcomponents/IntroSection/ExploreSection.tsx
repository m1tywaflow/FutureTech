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
    <section className="w-full bg-[#0D0D0D] text-white flex items-center py-24 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
        
        {/* LEFT SIDE */}
        <div className="px-2 sm:px-6 md:px-12 lg:px-0">
          <h3 className="text-[#666666] text-base sm:text-lg mb-4">
            Your Journey to Tomorrow Begins Here
          </h3>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Explore the Frontiers of <br className="hidden sm:block" /> Artificial Intelligence
          </h1>

          <p className="text-[#666666] text-base sm:text-lg leading-relaxed max-w-2xl">
            Welcome to the epicenter of AI innovation. FutureTech AI News is
            your passport to a world where machines think, learn, and reshape
            the future. Join us on this visionary expedition into the heart of
            AI.
          </p>

          {/* STATS */}
          <div className="mt-12 md:mt-16 lg:mt-20 border border-[#262626]">
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#262626]">
              
              <div className="text-center md:text-left p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold">
                  <Counter end={300} />
                  <span className="text-yellow-400">+</span>
                </h2>
                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                  Resources available
                </p>
              </div>

              <div className="text-center md:text-left p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold">
                  <Counter end={12000} />
                  <span className="text-yellow-400">+</span>
                </h2>
                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                  Total Downloads
                </p>
              </div>

              <div className="text-center md:text-left p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl sm:text-3xl font-bold">
                  <Counter end={10000} />
                  <span className="text-yellow-400">+</span>
                </h2>
                <p className="text-gray-400 mt-2 text-sm sm:text-base">
                  Active Users
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end items-center">
          <img
            src={abstractDesign}
            alt="Abstract Design"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain lg:-ml-20"
          />

          <div className="absolute 
                          bottom-6 
                          right-1/2 translate-x-1/2 
                          lg:bottom-16 lg:right-10 lg:translate-x-0
                          bg-[#1F1F1F] 
                          border border-[#262626] 
                          rounded-xl 
                          p-4 sm:p-6 
                          w-[95%] sm:w-[90%] 
                          max-w-sm">

            <div className="mb-4">
              <img src={peoples} alt="People" className="h-12 sm:h-14" />
              <div>
                <h3 className="font-semibold text-sm sm:text-base">
                  Explore 1000+ resources
                </h3>
                <p className="text-gray-400 text-xs sm:text-sm">
                  Over 1,000 articles on emerging tech trends and breakthroughs.
                </p>
              </div>
            </div>

            <Link
              to="/resources"
              className="mt-4 inline-flex px-4 sm:px-5 py-2 border border-[#262626] rounded-lg text-xs sm:text-sm items-center gap-2 hover:bg-gray-800 transition duration-200"
            >
              Explore Resources <span>↗</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
