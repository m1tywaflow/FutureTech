import trendsImg from "../../../assets/Resources/img/RowImg/trendsImg.png";
import spaceImg from "../../../assets/Resources/img/RowImg/spaceImg.png";
import quantumImg from "../../../assets/Resources/img/RowImg/quantumImg.png";
import { Link } from "react-router-dom";
import DownloadButton from "@/components/UI/DownloadButton/DownloadButton";
export default function RowImg() {
  const ImgBox = [
    {
      id: 1,
      img: trendsImg,
      title: "FutureTech Trends 2024",
      description:
        "An ebook that predicts upcoming technology trends for the next year, including AI developments",
    },
    {
      id: 2,
      img: spaceImg,
      title: "Space Exploration Ebook",
      description:
        "An ebook that predicts upcoming technology trends for the next year, including AI developments",
    },
    {
      id: 3,
      img: quantumImg,
      title: "Quantum Computing Whitepaper",
      description:
        "An in-depth whitepaper exploring the principles, applications.",
    },
  ];

  return (
    <section className="max-w-8xl mx-auto bg-[#0A0A0A] text-white ">
      <div className="border border-[#1E1E1E]  overflow-hidden grid grid-cols-3 divide-x divide-[#1E1E1E]">
        {ImgBox.map((item) => (
          <div key={item.id} className="p-10 flex flex-col gap-5">
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[200px] object-cover rounded-xl"
            />

            <h3 className="text-xl font-semibold">{item.title}</h3>

            <p className="text-gray-400">{item.description}</p>

            <div className="flex gap-4 mt-auto pt-4">
              <Link
                to="/ebooks"
                className="px-6 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-yellow-400/40 hover:shadow-[0_0_25px_rgba(250,204,21,0.15)] transition duration-300 cursor-pointer"
              >
                View Details
              </Link>
              <Link to="/ebooks">
                <DownloadButton />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
