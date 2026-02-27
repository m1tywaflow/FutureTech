import logo from "../../../assets/logo/logo.png";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTER_PATHS } from "../../../router";

export default function BottomSection() {
  const navigate = useNavigate();

  const links = [
    {
      title: "Resource Access",
      text: "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
      path: ROUTER_PATHS.RESOURCES,
    },
    {
      title: "Community Forum",
      text: "Join our active community forum to discuss industry trends, share insights, and collaborate with peers.",
      path: ROUTER_PATHS.BLOG,
    },
    {
      title: "Tech Events",
      text: "Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.",
      path: ROUTER_PATHS.PODCASTS,
    },
  ];

  return (
    <section className="relative w-full bg-[#0B0B0B] py-20 px-6 lg:px-16 overflow-hidden">
      <div className="absolute top-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#BFA34A]/10 blur-[160px] rounded-full" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14 mb-16">
          <div className="flex justify-center lg:justify-start">
            <div className="p-4 rounded-2xl bg-[#111111] border border-[#1F1F1F]">
              <img
                src={logo}
                alt="Logo"
                className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
              />
            </div>
          </div>
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block bg-[#151515] border border-[#262626] rounded-xl px-4 py-2 text-xs text-[#CFCFCF] mb-4">
              Learn, Connect, and Innovate
            </span>
            <h2 className="text-3xl sm:text-4xl font-semibold text-white leading-tight">
              Be Part of the Future Tech Revolution
            </h2>
            <p className="text-[#9A9A9A] mt-4 text-sm sm:text-base leading-relaxed">
              Immerse yourself in the world of future technology. Explore our
              resources, connect with tech enthusiasts, and drive innovation
              forward with a community of future thinkers.
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {links.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="
                group
                relative
                bg-[#111111]
                border border-[#1F1F1F]
                rounded-2xl
                p-6
                cursor-pointer
                transition
                hover:border-[#BFA34A]/40
                hover:-translate-y-1
                hover:shadow-[0_0_30px_rgba(191,163,74,0.12)]
              "
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-white font-semibold text-lg group-hover:text-[#E7D27A] transition">
                  {item.title}
                </h3>
                <div className="w-10 h-10 rounded-xl bg-[#BFA34A] flex items-center justify-center group-hover:scale-110 transition">
                  <ArrowUpRight className="w-5 h-5 text-black" />
                </div>
              </div>
              <p className="text-[#9A9A9A] text-sm leading-relaxed">
                {item.text}
              </p>
              <div className="mt-5 h-[1px] bg-gradient-to-r from-transparent via-[#BFA34A]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
