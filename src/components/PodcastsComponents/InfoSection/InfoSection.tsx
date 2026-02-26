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
    <section className="max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-12 sm:py-16 lg:py-24 text-white">
      <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
        {podcasts.map((item) => (
          <div
            key={item.id}
            className="grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center border border-white/10 rounded-3xl p-4 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-zinc-900 to-black w-full"
          >
            <div className="w-full h-[180px] sm:h-[240px] md:h-[320px] lg:h-[400px] overflow-hidden rounded-2xl">
              <img
                src={item.bigImg}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="flex items-center gap-3 sm:gap-4 border-b border-white/10 pb-3 sm:pb-4">
                  <img
                    src={item.icon}
                    alt=""
                    className="w-10 h-10 sm:w-12 sm:h-12"
                  />
                  <StarsRating id={item.id} />
                </div>

                <div className="border-b border-white/10 pb-3 sm:pb-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight">
                    {item.title}
                  </h2>
                </div>

                <div className="border-b border-white/10 pb-3 sm:pb-4">
                  <p className="text-zinc-400 text-sm sm:text-base lg:text-lg">
                    Host: <span className="text-white">{item.host}</span>
                  </p>
                </div>

                <div className="border-b border-white/10 pb-3 sm:pb-4">
                  <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-xl">
                    {item.description}
                  </p>
                </div>

                <div className="flex gap-3 sm:gap-6 mt-2 border-b border-white/10 pb-3 sm:pb-4">
                  <div className="flex-1 text-center border-r border-white/10 pr-2 sm:pr-4">
                    <p className="text-xs sm:text-sm text-zinc-500">Episodes</p>
                    <p className="text-lg sm:text-xl font-semibold">
                      {item.stats.episodes}
                    </p>
                  </div>

                  <div className="flex-1 text-center border-r border-white/10 px-2 sm:px-4">
                    <p className="text-xs sm:text-sm text-zinc-500">Length</p>
                    <p className="text-lg sm:text-xl font-semibold">
                      {item.stats.length}
                    </p>
                  </div>

                  <div className="flex-1 text-center pl-2 sm:pl-4">
                    <p className="text-xs sm:text-sm text-zinc-500">
                      Frequency
                    </p>
                    <p className="text-lg sm:text-xl font-semibold">
                      {item.stats.frequency}
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/coming-soon"
                className="mt-2 sm:mt-4 w-fit px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-white text-black text-sm sm:text-base font-medium hover:opacity-90 transition"
              >
                Listen Podcast →
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
