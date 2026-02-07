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
    <section className="max-w-7xl mx-auto visual-bg  text-white px-6 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 ">
        {SubContainers.map((item, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden bg-[#141414] border border-[#2A2A2A] hover:border-[#3A3A3A] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative w-full h-52 overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>

            <div className="p-5">
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">
                {item.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
