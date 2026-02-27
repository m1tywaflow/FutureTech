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
    <div
      className="
      group
      bg-[#0F0F0F]
      border border-[#1F1F1F]
      rounded-2xl
      overflow-hidden
      transition
      hover:border-[#BFA34A]/40
      hover:shadow-[0_0_30px_rgba(191,163,74,0.15)]
      hover:-translate-y-1
    "
    >
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-64 sm:h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-8 flex flex-col gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-xl bg-[#111111] border border-[#1F1F1F]">
            <img src={item.icon} className="w-7 h-7" />
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold group-hover:text-[#E7D27A] transition">
            {item.title}
          </h2>
        </div>

        <p className="text-[#9A9A9A] text-sm sm:text-base">{item.shortText}</p>

        <p className="text-[#C7C7C7] text-sm sm:text-base leading-relaxed line-clamp-3">
          {item.longText}
        </p>

        <div className="flex flex-wrap gap-3 mt-2 text-xs sm:text-sm">
          <span className="px-3 py-1 bg-[#141414] border border-[#1F1F1F] rounded-lg">
            {item.publication}
          </span>
          <span className="px-3 py-1 bg-[#141414] border border-[#1F1F1F] rounded-lg">
            {item.category}
          </span>
          <span className="px-3 py-1 bg-[#141414] border border-[#1F1F1F] rounded-lg">
            {item.author}
          </span>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#BFA34A]/40 to-transparent opacity-0 group-hover:opacity-100 transition mt-2" />
      </div>
    </div>
  );
}

export default function BigSection() {
  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-24 px-6 lg:px-16 overflow-hidden">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#BFA34A]/10 blur-[160px] rounded-full" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h3 className="text-sm text-[#9A9A9A] mb-3 uppercase tracking-wider">
            Explore Our Research
          </h3>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
            In-Depth Whitepapers and Reports
          </h2>
          <p className="text-[#9A9A9A] mt-5 text-sm sm:text-base leading-relaxed">
            Stay ahead with our curated collection of insights into quantum
            computing, space exploration, and other cutting-edge technologies.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {analysisData.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
        <p className="max-w-3xl mx-auto mt-14 text-center text-[#9A9A9A] text-sm sm:text-base">
          Discover more research papers and case studies to deepen your
          knowledge and stay updated with the latest technological
          breakthroughs.
        </p>
      </div>
    </section>
  );
}
