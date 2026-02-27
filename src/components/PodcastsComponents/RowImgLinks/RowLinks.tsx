import subCont1 from "../../../assets/Podcasts/imgRow/subCont1.png";
import subCont2 from "../../../assets/Podcasts/imgRow/subCont2.png";
import subCont3 from "../../../assets/Podcasts/imgRow/subCont3.png";
import subCont4 from "../../../assets/Podcasts/imgRow/subCont4.png";
import subCont5 from "../../../assets/Podcasts/imgRow/subCont5.png";
import subCont6 from "../../../assets/Podcasts/imgRow/subCont6.png";

export default function RowLinks() {
  const podcasts = [
    {
      img: subCont1,
      title: "AI in Healthcare",
      description:
        "Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.",
    },
    {
      img: subCont2,
      title: "AI Ethics",
      description:
        "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
    },
    {
      img: subCont3,
      title: "Machine Learning Deep Dive",
      description:
        "Dive into the intricacies of machine learning with AI expert Sarah Davis in this episode.",
    },
    {
      img: subCont4,
      title: "AI and the Future of Work",
      description:
        "Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.",
    },
    {
      img: subCont5,
      title: "AI in Education",
      description:
        "Explore how AI is transforming the learning experience and reshaping modern education.",
    },
    {
      img: subCont6,
      title: "AI in Entertainment",
      description:
        "David Smith explores the influence of AI in the entertainment industry and media creation.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-24 px-6 lg:px-16 overflow-hidden">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#BFA34A]/10 blur-[160px] rounded-full" />
      <div className="relative max-w-8xl mx-auto border border-[#1A1A1A] rounded-3xl overflow-hidden bg-[#0C0C0C]/60 backdrop-blur-xl p-8 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {podcasts.map((item) => (
            <div
              key={item.title}
              className="group flex flex-col bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl overflow-hidden transition hover:border-[#BFA34A]/40 hover:shadow-[0_0_30px_rgba(191,163,74,0.15)] hover:-translate-y-1"
            >
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
              </div>
              <div className="p-6 flex flex-col gap-3">
                <h3 className="text-lg font-semibold group-hover:text-[#E7D27A] transition">
                  {item.title}
                </h3>
                <p className="text-sm text-[#9A9A9A] leading-relaxed">
                  {item.description}
                </p>
                <div className="mt-4 h-[1px] bg-gradient-to-r from-transparent via-[#BFA34A]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
