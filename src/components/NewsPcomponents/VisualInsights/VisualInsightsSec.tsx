import subImgFirst from "../../../assets/NewsPageImg/VisInsights/subContainer1.png";
import subImgSecond from "../../../assets/NewsPageImg/VisInsights/subContainer2.png";
import subImgThird from "../../../assets/NewsPageImg/VisInsights/subContainer3.png";
import subImgFourth from "../../../assets/NewsPageImg/VisInsights/subContainer4.png";

export default function VisualInsightsSec() {
  const SubContainers = [
    {
      img: subImgFirst,
      title: "Mars Exploration: Unveiling Alien Landscapes",
      text: "Embark on a journey through the Red Planet's breathtaking landscapes and uncover the mysteries of Mars.",
    },
    {
      img: subImgSecond,
      title: "Blockchain Explained: A Revolution in Finance",
      text: "Delve into the world of blockchain technology and its transformative impact on the financial industry.",
    },
    {
      img: subImgThird,
      title: "Breaking the Silence: Mental Health Awareness in the Workplace",
      text: "An exploration of the importance of mental health awareness and the initiatives reshaping workplaces for employee well-being.",
    },
    {
      img: subImgFourth,
      title: "Revolutionizing Investment Strategies",
      text: "An in-depth look at global efforts to conserve biodiversity and safeguard endangered species from extinction.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-24 px-6 lg:px-16 overflow-hidden">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#BFA34A]/10 blur-[160px] rounded-full" />
      <div className="relative max-w-7xl mx-auto border border-[#1A1A1A] rounded-3xl overflow-hidden bg-[#0C0C0C]/60 backdrop-blur-xl p-8 lg:p-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {SubContainers.map((item) => (
            <div
              key={item.title}
              className="group bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl overflow-hidden transition hover:border-[#BFA34A]/40 hover:shadow-[0_0_30px_rgba(191,163,74,0.15)] hover:-translate-y-1"
            >
              <div className="relative w-full h-52 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#E7D27A] transition">
                  {item.title}
                </h3>

                <p className="text-sm text-[#9A9A9A] leading-relaxed">
                  {item.text}
                </p>
                <div className="mt-5 h-[1px] bg-gradient-to-r from-transparent via-[#BFA34A]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
