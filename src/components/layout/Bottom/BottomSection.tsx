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
    <section className="w-full max-h-fit bg-[#1A1A1A] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="items-center flex flex-col lg:flex-row gap-8 lg:gap-12 mb-12 lg:mb-16">
          <div className="flex justify-center lg:justify-start w-full lg:w-auto">
            <img
              src={logo}
              alt="Logo-Icon"
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-24 object-contain"
            />
          </div>

          <div className="py-4 sm:py-6 max-w-2xl text-center lg:text-left">
            <h3 className="bg-[#333333] w-fit mx-auto lg:mx-0 rounded-2xl px-4 sm:px-5 py-2 mb-4 text-xs sm:text-sm font-medium text-[#E5E5E5]">
              Learn, Connect, and Innovate
            </h3>

            <h1 className="py-4 sm:py-6 text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight">
              Be Part of the Future Tech Revolution
            </h1>

            <p className="text-[#7E7E81] text-sm sm:text-base leading-relaxed">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {links.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="bg-[#1F1F1F] border border-[#2A2A2A] rounded-2xl p-5 sm:p-6hover:border-[#FFD54A] hover:-translate-y-1transition-all duration-300 cursor-pointer group"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-white font-semibold text-base sm:text-lg">
                  {item.title}
                </h2>

                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#FFD74B] flex items-center justify-center group-hover:scale-110 transition">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                </span>
              </div>

              <p className="text-[#9C9C9C] text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
