import bigImgfirst from "../../../assets/Resources/img/resBigImg/bigimg1.png";
import bigImgsecond from "../../../assets/Resources/img/resBigImg/bigimg2.png";
import spaceIcon from "../../../assets/Resources/Icons/spaceIcon.png";
import quantumIcon from "../../../assets/Resources/Icons/quantumIcon.png";

export default function BigSection() {
  const Analysis = [
    {
      id: 1,
      icon: quantumIcon,
      title: "Quantum Computing Whitepaper",
      bigImg: bigImgfirst,
      shortText:
        "Provides technical specifications and requirements for implementing quantum computing systems.",
      longText:
        "An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.",
      publication: "July 2023",
      category: "Quantum Computing",
      author: "Dr. Quantum",
    },
    {
      id: 2,
      icon: spaceIcon,
      title: "Space Exploration Whitepaper",
      bigImg: bigImgsecond,
      shortText:
        "Explores Mars colonization, asteroid resource potential, and space tourism.",
      longText:
        "An in-depth whitepaper covering the latest advancements in space exploration, including Mars missions and asteroid mining.",
      publication: "September 2023",
      category: "Space Exploration",
      author: "FutureTech Space Division",
    },
  ];

  return (
    <section className="max-w-8xl bg-[#0A0A0A] text-white py-24 px-20">
      <div className="border border-[#1E1E1E] rounded-2xl overflow-hidden">
        <div className="grid grid-rows-2 divide-y divide-[#1E1E1E]">
          {Analysis.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-2 divide-x divide-[#1E1E1E]"
            >
              <div className="p-12 flex flex-col justify-center gap-6">
                <img src={item.icon} alt="" className="w-12 h-12" />

                <h1 className="text-3xl font-semibold leading-snug">
                  {item.title}
                </h1>

                <p className="text-[#98989A] max-w-xs">{item.shortText}</p>
              </div>

              <div className="flex flex-col p-12 gap-6">
                <img
                  src={item.bigImg}
                  alt={item.title}
                  className="rounded-xl w-full object-cover h-64"
                />

                <h2 className="text-xl font-semibold">{item.title}</h2>

                <p className="text-[#C7C7C7] max-w-2xl">{item.longText}</p>

                <div className="grid grid-cols-3 gap-4 text-left">
                  <div className="bg-[#0F0F0F] border border-[#1E1E1E] px-6 py-4 rounded-xl">
                    <p className="text-[#98989A] text-sm">Publication Date</p>
                    <p className="text-white mt-1">{item.publication}</p>
                  </div>

                  <div className="bg-[#0F0F0F] border border-[#1E1E1E] px-6 py-4 rounded-xl">
                    <p className="text-[#98989A] text-sm">Category</p>
                    <p className="text-white mt-1">{item.category}</p>
                  </div>

                  <div className="bg-[#0F0F0F] border border-[#1E1E1E] px-6 py-4 rounded-xl">
                    <p className="text-[#98989A] text-sm">Author</p>
                    <p className="text-white mt-1">{item.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
