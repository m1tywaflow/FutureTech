import bigImgfirst from "../../../assets/Resources/img/resBigImg/bigimg1.png";
import bigImgsecond from "../../../assets/Resources/img/resBigImg/bigimg2.png";
import spaceIcon from "../../../assets/Resources/Icons/spaceIcon.png";
import quantumIcon from "../../../assets/Resources/Icons/quantumIcon.png";

const analysisData = [
  {
    id: 1,
    icon: quantumIcon,
    title: "Quantum Computing Whitepaper",
    image: bigImgfirst,
    shortText: "Provides technical specs for implementing quantum systems.",
    longText:
      "An in-depth whitepaper exploring principles, applications, and future impact.",
    publication: "July 2023",
    category: "Quantum",
    author: "Dr. Quantum",
  },
  {
    id: 2,
    icon: spaceIcon,
    title: "Space Exploration Whitepaper",
    image: bigImgsecond,
    shortText: "Mars colonization, asteroid mining, and space tourism.",
    longText:
      "Latest advancements in space exploration including Mars missions.",
    publication: "September 2023",
    category: "Space",
    author: "FutureTech",
  },
];

function Card({ item }: { item: (typeof analysisData)[0] }) {
  return (
    <div className="group bg-[#0F0F0F] border border-[#1E1E1E] rounded-2xl overflow-hidden hover:border-[#2A2A2A] transition-all duration-300">
      <img
        src={item.image}
        alt={item.title}
        className="h-64 sm:h-72 w-full object-cover group-hover:scale-105 transition duration-500"
      />

      <div className="p-8 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <img src={item.icon} className="w-12 h-12" />
          <h2 className="text-xl sm:text-2xl font-semibold">{item.title}</h2>
        </div>

        <p className="text-[#98989A] text-sm sm:text-base">{item.shortText}</p>

        <p className="text-[#C7C7C7] text-sm sm:text-base line-clamp-3">
          {item.longText}
        </p>

        <div className="flex flex-wrap gap-3 mt-3 text-xs sm:text-sm">
          <span className="px-3 py-1 bg-[#1A1A1A] rounded-lg">
            {item.publication}
          </span>
          <span className="px-3 py-1 bg-[#1A1A1A] rounded-lg">
            {item.category}
          </span>
          <span className="px-3 py-1 bg-[#1A1A1A] rounded-lg">
            {item.author}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function BigSection() {
  return (
    <section className="bg-[#0A0A0A] text-white py-24 px-6 md:px-16">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h3 className="text-sm sm:text-base text-[#C7C7C7] mb-2 uppercase tracking-wide">
          Explore Our Research
        </h3>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          In-Depth Whitepapers and Reports
        </h2>
        <p className="text-[#98989A] mt-4 text-sm sm:text-base">
          Stay ahead with our curated collection of insights into quantum
          computing, space exploration, and other cutting-edge technologies.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10">
        {analysisData.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>

      <div className="max-w-4xl mx-auto mt-12 text-center text-[#C7C7C7] text-sm sm:text-base">
        Discover more research papers and case studies to deepen your knowledge
        and stay updated with the latest technological breakthroughs.
      </div>
    </section>
  );
}
