import { useEffect, useState } from "react";
import { FileText, BarChart3, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import DownloadButton from "@/components/UI/DownloadButton/DownloadButton";

const reports = [
  {
    title: "AI Market Report 2025",
    desc: "Trends, growth, and forecasts for the global AI market",
    type: "Market",
  },
  {
    title: "Generative AI Insights",
    desc: "Deep analysis of GenAI adoption across industries",
    type: "Research",
  },
  {
    title: "AI Ethics & Regulation",
    desc: "Global policies, risks, and ethical challenges",
    type: "Policy",
  },
];

function useCounter(target, duration = 1500) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = Math.ceil(target / (duration / 16));

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return count;
}

export default function Reports() {
  const reportsCount = useCounter(50);
  const downloadsCount = useCounter(20000);
  const sourcesCount = useCounter(100);

  return (
    <div className="min-h-screen bg-black text-white px-6 py-28">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-4">
          <Sparkles className="text-yellow-400 w-10 h-10" />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold">
          AI <span className="text-yellow-400">Reports</span>
        </h1>

        <p className="mt-4 text-gray-400 text-lg">
          Data-driven reports and insights on Artificial Intelligence
        </p>
      </div>

      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {reports.map((report) => (
          <div
            key={report.title}
            className="bg-neutral-900 border border-yellow-400/20 rounded-2xl p-6 shadow-lg flex flex-col"
          >
            <div className="flex items-center justify-between mb-4">
              <FileText className="text-yellow-400" />
              <span className="text-xs px-3 py-1 rounded-full bg-yellow-400 text-black font-semibold">
                {report.type}
              </span>
            </div>

            <h3 className="text-xl font-semibold mb-2">{report.title}</h3>

            <p className="text-gray-400 mb-6">{report.desc}</p>

            <Link to="/404" className="mt-auto flex justify-center">
              <DownloadButton />
            </Link>
          </div>
        ))}
      </div>

      <div className="mt-24 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-neutral-900 rounded-2xl p-8 text-center border border-yellow-400/20">
          <BarChart3 className="mx-auto text-yellow-400 mb-4" />
          <h4 className="text-3xl font-bold">{reportsCount}+</h4>
          <p className="text-gray-400 mt-2">Published Reports</p>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8 text-center border border-yellow-400/20">
          <BarChart3 className="mx-auto text-yellow-400 mb-4" />
          <h4 className="text-3xl font-bold">
            {Math.floor(downloadsCount / 1000)}K+
          </h4>
          <p className="text-gray-400 mt-2">Downloads</p>
        </div>

        <div className="bg-neutral-900 rounded-2xl p-8 text-center border border-yellow-400/20">
          <BarChart3 className="mx-auto text-yellow-400 mb-4" />
          <h4 className="text-3xl font-bold">{sourcesCount}+</h4>
          <p className="text-gray-400 mt-2">Data Sources</p>
        </div>
      </div>

      <div className="mt-24 text-center">
        <h2 className="text-3xl font-bold">
          Get exclusive <span className="text-yellow-400">AI reports</span>
        </h2>

        <p className="mt-4 text-gray-400">
          Subscribe to receive premium research and analytics
        </p>

        <Link to="/news-letter">
          <button className="mt-8 bg-yellow-400 text-black font-semibold px-10 py-4 rounded-xl hover:bg-yellow-300 transition shadow-lg">
            Subscribe
          </button>
        </Link>
      </div>
    </div>
  );
}
