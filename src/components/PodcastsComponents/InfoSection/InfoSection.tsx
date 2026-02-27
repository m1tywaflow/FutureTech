import revoIcon from "../../../assets/Podcasts/icons/revoIcon.png";
import convIcon from "../../../assets/Podcasts/icons/convIcon.png";
import firstBigImg from "../../../assets/Podcasts/bigImg/fistBig.png";
import secondBigImg from "../../../assets/Podcasts/bigImg/secondBig.png";
import StarsRating from "../../UI/StarRating/StarsRating";
import { Link } from "react-router-dom";

export default function InfoSection() {
  const podcasts = [
    {
      id: 1,
      icon: revoIcon,
      title: "AI Revolution",
      host: "Dr. Sarah Mitchell",
      bigImg: firstBigImg,
      description:
        "Delves into the transformative impact of AI across industries, featuring expert interviews and real-world case studies.",
      stats: {
        episodes: 50,
        length: "30 min",
        frequency: "Weekly",
      },
    },
    {
      id: 2,
      icon: convIcon,
      title: "AI Conversations",
      host: "Mark Anderson",
      bigImg: secondBigImg,
      description:
        "Engage in thought-provoking conversations with leading experts about the future of AI and its impact on society.",
      stats: {
        episodes: 40,
        length: "40 min",
        frequency: "Monthly",
      },
    },
  ];

  return (
    <section className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-white">
      <div className="flex flex-col lg:flex-row gap-8">
        {podcasts.map((item) => (
          <div
            key={item.id}
            className="flex-1 border border-[#1E1E1E] rounded-3xl bg-[#111111] p-6 sm:p-8 transition hover:border-[#BFA34A]/40 hover:-translate-y-1"
          >
            <div className="overflow-hidden rounded-2xl mb-6">
              <img
                src={item.bigImg}
                alt={item.title}
                className="w-full h-[260px] object-cover transition duration-500 hover:scale-105"
              />
            </div>
            <div className="flex items-center gap-3 mb-4">
              <img src={item.icon} alt="" className="w-10 h-10" />
              <StarsRating id={item.id} />
            </div>
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-zinc-400 text-sm mb-4">
              Host: <span className="text-white">{item.host}</span>
            </p>
            <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
              {item.description}
            </p>
            <div className="flex justify-between mb-6 text-sm">
              <div>
                <p className="text-zinc-500">Episodes</p>
                <p className="font-semibold">{item.stats.episodes}</p>
              </div>
              <div>
                <p className="text-zinc-500">Length</p>
                <p className="font-semibold">{item.stats.length}</p>
              </div>
              <div>
                <p className="text-zinc-500">Frequency</p>
                <p className="font-semibold">{item.stats.frequency}</p>
              </div>
            </div>
            <Link
              to="/coming-soon"
              className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-black text-sm font-medium hover:opacity-90 transition"
            >
              Listen Podcast →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
