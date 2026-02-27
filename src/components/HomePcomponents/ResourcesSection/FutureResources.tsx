import { MoveUpRight, Eye } from "lucide-react";
import { Link } from "react-router-dom";

import firstIcon from "../../../assets/Resources/Icons/EbooksIcon.png";
import firstUsers from "../../../assets/Resources/users/f-users.png";
import firstBigImg from "../../../assets/Resources/img/f-bigImage.png";

import secondIcon from "../../../assets/Resources/Icons/WhitepapersIcon.png";
import secondUsers from "../../../assets/Resources/users/s-users.png";
import secondBigImg from "../../../assets/Resources/img/s-bigImage.png";

export default function FutureResources() {
  const resources = [
    {
      icon: firstIcon,
      title: "Ebooks",
      description:
        "Explore our collection of ebooks covering a wide spectrum of future technology topics.",
      button: "Download Ebooks Now",
      usersImg: firstUsers,
      topicTitle: "Variety of Topics",
      topicDesc:
        "Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).",
      bigImg: firstBigImg,
      stat1Title: "Total Ebooks",
      stat1Value: "Over 100 ebooks",
      stat2Title: "Download Formats",
      stat2Value: "PDF format for access",
      stat3Title: "Average Author Expertise",
      stat3Value:
        "Ebooks are authored by renowned experts with an average of 15 years of experience",
    },
    {
      icon: secondIcon,
      title: "Whitepapers",
      description:
        "Dive into comprehensive reports and analyses with our collection of whitepapers.",
      button: "Download Whitepapers Now",
      usersImg: secondUsers,
      topicTitle: "Topics Coverage",
      topicDesc:
        "Whitepapers cover quantum computing (20%), AI ethics (15%), space mining prospects (20%), AI in healthcare (15%), and renewable energy strategies (30%).",
      bigImg: secondBigImg,
      stat1Title: "Total Whitepapers",
      stat1Value: "Over 50 whitepapers",
      stat2Title: "Download Formats",
      stat2Value: "PDF format for access",
      stat3Title: "Average Author Expertise",
      stat3Value:
        "Whitepapers are authored by subject matter experts with an average of 20 years of experience",
    },
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-24 px-6 lg:px-16 overflow-hidden">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#BFA34A]/10 blur-[160px] rounded-full" />

      <div className="relative max-w-8xl mx-auto border border-[#1A1A1A] rounded-3xl overflow-hidden bg-[#0C0C0C]/60 backdrop-blur-xl">
        <div className="grid grid-rows-2 divide-y divide-[#1A1A1A]">
          {resources.map((item) => (
            <div
              key={item.title}
              className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-[#1A1A1A]"
            >
              <div className="p-10 lg:p-14 flex flex-col justify-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-[#111111] border border-[#1F1F1F]">
                    <img src={item.icon} alt="" className="w-7 h-7" />
                  </div>
                  <h1 className="text-3xl font-semibold">{item.title}</h1>
                </div>

                <p className="text-[#9A9A9A] max-w-md leading-relaxed">
                  {item.description}
                </p>

                <Link
                  to="/ebooks"
                  className="group flex items-center justify-center gap-2 bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl px-6 py-4 hover:border-[#BFA34A]/40 hover:shadow-[0_0_20px_rgba(191,163,74,0.2)] transition w-fit"
                >
                  {item.button}
                  <MoveUpRight className="w-5 h-5 text-[#E7D27A] group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </Link>

                <div className="flex items-center justify-between gap-4 bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl px-5 py-4 w-fit">
                  <div className="flex flex-col">
                    <span className="text-sm text-[#9A9A9A]">
                      Downloaded By
                    </span>
                    <span className="text-lg font-medium">10k + Users</span>
                  </div>
                  <img
                    src={item.usersImg}
                    alt="users"
                    className="w-24 h-auto object-contain"
                  />
                </div>
              </div>
              <div className="p-10 lg:p-14 flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <h2 className="text-xl font-semibold">{item.topicTitle}</h2>
                  <p className="text-[#9A9A9A] text-sm max-w-lg">
                    {item.topicDesc}
                  </p>
                  <img
                    src={item.bigImg}
                    alt=""
                    className="rounded-2xl mt-4 w-full border border-[#1F1F1F]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="group bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-6 transition hover:border-[#BFA34A]/40 hover:shadow-[0_0_30px_rgba(191,163,74,0.15)] hover:-translate-y-1">
                    <h3 className="text-sm text-[#9A9A9A]">
                      {item.stat1Title}
                    </h3>
                    <p className="text-base font-medium mt-2">
                      {item.stat1Value}
                    </p>
                  </div>

                  <div className="group bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-6 flex items-center justify-between transition hover:border-[#BFA34A]/40 hover:shadow-[0_0_30px_rgba(191,163,74,0.15)] hover:-translate-y-1">
                    <div>
                      <h3 className="text-sm text-[#9A9A9A]">
                        {item.stat2Title}
                      </h3>
                      <p className="text-base font-medium mt-2">
                        {item.stat2Value}
                      </p>
                    </div>
                    <Eye className="w-5 h-5 text-[#E7D27A]" />
                  </div>
                </div>

                <div className="group bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-6 transition hover:border-[#BFA34A]/40 hover:shadow-[0_0_30px_rgba(191,163,74,0.15)] hover:-translate-y-1">
                  <h3 className="text-sm text-[#9A9A9A]">{item.stat3Title}</h3>
                  <p className="text-base font-medium mt-2">
                    {item.stat3Value}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
