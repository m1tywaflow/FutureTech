import { Link } from "react-router-dom";
import icon1 from "../../../assets/HomeImg/Icons/Icon1.png";
import icon2 from "../../../assets/HomeImg/Icons/Icon2.png";
import icon3 from "../../../assets/HomeImg/Icons/Icon3.png";
import { MoveUpRight } from "lucide-react";

type LinkItem = {
  icon: string;
  title: string;
  subtitle: string;
  description: string;
  link?: string;
};

export default function LinkSection() {
  const data: LinkItem[] = [
    {
      icon: icon1,
      title: "About FutureTech",
      subtitle: "Who We Are",
      description:
        "Learn about our mission, vision, and the people behind FutureTech AI News.",
      link: "/about-us",
    },
    {
      icon: icon2,
      title: "Expert Contributors",
      subtitle: "Trusted Insights",
      description: "50+ renowned AI experts on our team",
      link: "/experts",
    },
    {
      icon: icon3,
      title: "Global Readership",
      subtitle: "Worldwide Impact",
      description: "2 million monthly readers",
      link: "/impact",
    },
  ];

  return (
    <section className="w-full">
      <div
        className="
        grid grid-cols-1 md:grid-cols-3
        border border-[#1E1E1E]
        divide-y md:divide-y-0 md:divide-x
        divide-[#1E1E1E]
        overflow-hidden
      "
      >
        {data.map((item, index) => (
          <Link
            key={index}
            to={item.link ?? "/coming-soon"}
            className="
              flex flex-col justify-between
              p-6 sm:p-8 lg:p-10
              bg-[#0D0D0D]
              hover:bg-[#111111]
              transition-colors
            "
          >
            <div className="flex justify-between gap-6">
              <div className="space-y-4 sm:space-y-6">
                <img
                  src={item.icon}
                  alt="icon"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />

                <div>
                  <h2 className="text-white text-base sm:text-lg font-semibold mb-1">
                    {item.title}
                  </h2>

                  <p className="text-gray-400 text-xs sm:text-sm mb-2 sm:mb-3">
                    {item.subtitle}
                  </p>

                  <p className="text-gray-500 text-xs sm:text-sm">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="mt-4 sm:mt-8">
                <div
                  className="
                  w-9 h-9 sm:w-10 sm:h-10
                  flex items-center justify-center
                  rounded-full
                  bg-[#FFD11A]
                  hover:bg-yellow-400
                  transition-colors
                "
                >
                  <MoveUpRight className="text-black w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
