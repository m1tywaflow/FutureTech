import { motion, useScroll, useSpring } from "framer-motion";
import {
  Brain,
  Cpu,
  Sparkles,
  ShieldCheck,
  LineChart,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Models",
    description:
      "Cutting-edge neural networks trained on massive datasets to deliver human-level reasoning and creativity.",
  },
  {
    icon: Cpu,
    title: "High Performance",
    description:
      "Optimized inference pipelines ensure ultra-fast responses even under heavy workloads.",
  },
  {
    icon: Sparkles,
    title: "Creative Intelligence",
    description:
      "Generate ideas, content, and designs with AI that understands context and style.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by Design",
    description:
      "Enterprise-grade security, data privacy, and compliance built into every layer.",
  },
  {
    icon: LineChart,
    title: "Smart Analytics",
    description:
      "Transform raw data into actionable insights with predictive AI analytics.",
  },
  {
    icon: Zap,
    title: "Automation",
    description:
      "Automate workflows and decision-making to save time and scale effortlessly.",
  },
];

export default function Features() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#1a1a0f] via-[#14140b] to-black text-yellow-100 overflow-hidden">
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-yellow-400"
      />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-yellow-500/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-amber-400/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-yellow-400">
            FutureTech AI
          </h1>
          <p className="mt-6 text-lg md:text-xl text-yellow-200/80 max-w-3xl mx-auto">
            Discover the powerful features that make{" "}
            <span className="text-yellow-300 font-semibold">FutureTech</span>{" "}
            the next generation AI platform.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group relative rounded-2xl bg-gradient-to-br from-[#2a2a14] to-[#1a1a0f] border border-yellow-500/20 p-8 shadow-lg hover:shadow-yellow-500/20 transition"
              >
                <div className="absolute inset-0 rounded-2xl bg-yellow-400/5 opacity-0 group-hover:opacity-100 transition" />
                <div className="relative z-10">
                  <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-yellow-500/20 mb-6">
                    <Icon className="w-7 h-7 text-yellow-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-yellow-300 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-yellow-100/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-24 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 mb-6">
            Build the Future with AI
          </h2>
          <p className="text-yellow-200/80 max-w-2xl mx-auto mb-8">
            Join FutureTech and start leveraging artificial intelligence to
            innovate faster and smarter.
          </p>
          <Link
            to="/ai-conversations"
            className="px-8 py-4 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition shadow-lg shadow-yellow-500/30"
          >
            Get Started
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
