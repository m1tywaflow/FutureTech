import futureIcon from "../../../assets/HomeImg/Icons/technology.png";
import insightsIcon from "../../../assets/HomeImg/Icons/insights.png";

export default function FutureTech() {
  const techBlog = [
    {
      title: "Quantity",
      info: "Over 1,000 articles on emerging tech trends and breakthroughs.",
    },
    {
      title: "Variety",
      info: "Articles cover fields like AI, robotics, biotechnology, and more.",
    },
    {
      title: "Frequency",
      info: "Fresh content added daily to keep you up to date.",
    },
    {
      title: "Authoritative",
      info: "Written by our team of tech experts and industry professionals.",
    },
  ];

  const insightsBlog = [
    {
      title: "Depth",
      info: "500+ research articles for in-depth understanding.",
    },
    {
      title: "Graphics",
      info: "Visual aids and infographics to enhance comprehension.",
    },
    {
      title: "Trends",
      info: "Explore emerging trends in future technology research.",
    },
    {
      title: "Contributors",
      info: "Contributions from tech researchers and academics.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-24 px-6 lg:px-16 overflow-hidden">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#BFA34A]/10 blur-[160px] rounded-full" />
      <div className="relative max-w-8xl mx-auto border border-[#1A1A1A] rounded-3xl overflow-hidden bg-[#0C0C0C]/60 backdrop-blur-xl">
        <div className="grid grid-rows-2 divide-y divide-[#1A1A1A]">
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1A1A]">
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[#111111] border border-[#1F1F1F]">
                  <img src={futureIcon} alt="" className="w-7 h-7" />
                </div>
                <h1 className="text-3xl font-semibold">
                  Future Technology Blog
                </h1>
              </div>

              <p className="text-[#9A9A9A] max-w-md leading-relaxed">
                Stay informed with our curated insights on emerging technology,
                innovation trends, and breakthroughs shaping the future.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-10 lg:p-14">
              {techBlog.map((item, index) => (
                <div
                  key={index}
                  className="
                  group
                  bg-[#0F0F0F]
                  border border-[#1F1F1F]
                  rounded-2xl
                  p-6
                  transition
                  hover:border-[#BFA34A]/40
                  hover:shadow-[0_0_30px_rgba(191,163,74,0.15)]
                  hover:-translate-y-1
                  "
                >
                  <h2 className="text-lg font-semibold mb-2 group-hover:text-[#E7D27A] transition">
                    {item.title}
                  </h2>
                  <p className="text-[#9A9A9A] text-sm leading-relaxed">
                    {item.info}
                  </p>

                  <div className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-[#BFA34A]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1A1A]">
            <div className="p-10 lg:p-14 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-[#111111] border border-[#1F1F1F]">
                  <img src={insightsIcon} alt="" className="w-7 h-7" />
                </div>
                <h1 className="text-3xl font-semibold">
                  Research Insights Blogs
                </h1>
              </div>

              <p className="text-[#9A9A9A] max-w-md leading-relaxed">
                Deep dive into advanced research, analysis and future-focused
                technology concepts explored by experts.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-10 lg:p-14">
              {insightsBlog.map((item, index) => (
                <div
                  key={index}
                  className="
                  group
                  bg-[#0F0F0F]
                  border border-[#1F1F1F]
                  rounded-2xl
                  p-6
                  transition
                  hover:border-[#BFA34A]/40
                  hover:shadow-[0_0_30px_rgba(191,163,74,0.15)]
                  hover:-translate-y-1
                  "
                >
                  <h2 className="text-lg font-semibold mb-2 group-hover:text-[#E7D27A] transition">
                    {item.title}
                  </h2>
                  <p className="text-[#9A9A9A] text-sm leading-relaxed">
                    {item.info}
                  </p>
                  <div className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-[#BFA34A]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
