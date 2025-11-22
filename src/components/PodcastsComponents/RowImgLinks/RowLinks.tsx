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
      title: "AI in HealthcareAI in Healthcare",
      description:
        "Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.",
    },
    {
      img: subCont3,
      title: "AI in HealthcareAI in Healthcare",
      description:
        "Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode.",
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
        "Explore the role of AI in education as Emily Turner discusses how AI is transforming the learning experience.",
    },
    {
      img: subCont6,
      title: "AI in Entertainment",
      description:
        "David Smith as they explore the influence of AI in the entertainment industry.",
    },
  ];

  return (
    <section className="w-full text-white py-24 px-10 md:px-20 bg-[#0D0D0D]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {podcasts.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border border-[#1E1E1E] rounded-2xl bg-[#121212] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
            />

            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-lg font-semibold">{item.title}</h3>

              <p className="text-sm text-gray-300">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
