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
    <section className="w-full bg-[#0A0A0A] text-white py-24 px-20 border-t border-[#1E1E1E]">
      <div className="text-white  py-16 border-b-2 border-[#262626] w-full">
        <h3 className="bg-[#333333] w-fit rounded-2xl px-5 py-2 mb-4">
          Unlock the Power of
        </h3>
        <h1 className="text-6xl font-semibold">FutureTech Features</h1>
      </div>
      <div className="border border-[#1E1E1E] rounded-2xl overflow-hidden">
        <div className="grid grid-rows-2 divide-y divide-[#1E1E1E]">
          <div className="grid grid-cols-2 divide-x divide-[#1E1E1E]">
            <div className="p-12 flex flex-col justify-center space-y-6">
              <img src={futureIcon} alt="Future Icon" className="w-14 h-14" />
              <h1 className="text-3xl font-semibold">Future Technology Blog</h1>
              <p className="text-[#98989A] max-w-md">
                Stay informed with our blog section dedicated to future
                technology.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 p-12">
              {techBlog.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0D0D0D] border border-[#1E1E1E] rounded-xl p-6 hover:bg-[#111111] transition-colors"
                >
                  <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                  <p className="text-[#A1A1AA] text-sm">{item.info}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 divide-x divide-[#1E1E1E]">
            <div className="p-12 flex flex-col justify-center space-y-6">
              <img src={insightsIcon} alt="Future Icon" className="w-14 h-14" />
              <h1 className="text-3xl font-semibold">
                Research Insights Blogs
              </h1>
              <p className="text-[#98989A] max-w-md">
                Dive deep into future technology concepts with our research
                section.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6 p-12">
              {insightsBlog.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#0D0D0D] border border-[#1E1E1E] rounded-xl p-6 hover:bg-[#111111] transition-colors"
                >
                  <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                  <p className="text-[#A1A1AA] text-sm">{item.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
