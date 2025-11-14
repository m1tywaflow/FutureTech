import logo from "../../../assets/logo/logo.png";
import { ArrowUpRight } from "lucide-react";

export default function BottomSection() {
  const links = [
    {
      title: "Resource Access",
      text: "Visitors can access a wide range of resources, including ebooks, whitepapers, reports.",
    },
    {
      title: "Community Forum",
      text: "Join our active community forum to discuss industry trends, share insights, and collaborate with peers.",
    },
    {
      title: "Tech Events",
      text: "Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.",
    },
  ];
  return (
    <section className="w-full bg-[#1A1A1A] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="items-center flex flex-col lg:flex-row gap-12 mb-16">
          <div>
            <img
              src={logo}
              alt="Logo-Icon"
              className="w-28 h-24 object-contain"
            />
          </div>
          <div className="py-6 max-w-2xl">
            <h3 className="bg-[#333333] w-fit rounded-2xl px-5 py-2 mb-4 text-sm font-medium text-[#E5E5E5]">
              Learn, Connect, and Innovate
            </h3>
            <h1 className="py-6 text-4xl font-semibold text-white">
              Be Part of the Future Tech Revolution
            </h1>
            <p className="text-[#7E7E81] text-sm leading-relaxed">
              Immerse yourself in the world of future technology. Explore our
              comprehensive resources, connect with fellow tech enthusiasts, and
              drive innovation in the industry. Join a dynamic community of
              forward-thinkers.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {links.map((item, index) => (
            <div
              key={index}
              className="bg-[#1F1F1F] border border-[#2A2A2A] rounded-2xl p-6 hover:border-[#FFD54A] transition-all duration-300 cursor-pointer"
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-white font-semibold text-lg">
                  {item.title}
                </h2>
                <span className="w-10 h-10 rounded-full bg-[#FFD74B] flex items-center justify-center">
                  <ArrowUpRight className="w-5 h-5 text-black" />
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
