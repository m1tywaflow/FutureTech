import { MoveUpRight, Eye } from "lucide-react";
import firstIcon from "../../../assets/Resources/Icons/EbooksIcon.png";
import firstUsers from "../../../assets/Resources/users/f-users.png";
import firstBigImg from "../../../assets/Resources/img/f-bigImage.png";
import secondIcon from "../../../assets/Resources/Icons/WhitepapersIcon.png";
import secondUsers from "../../../assets/Resources/users/s-users.png";
import secondBigImg from "../../../assets/Resources/img/s-bigImage.png";

export default function FutureResources() {
  return (
    <section className="w-full bg-[#0D0D0D] text-white flex flex-col items-center justify-center">
      <div className="max-w-8xl p-24 w-full grid grid-cols-1 lg:grid-cols-2 divide-x divide-[#1E1E1E] border border-[#1E1E1E] ">
        <div className="flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-4">
            <img src={firstIcon} alt="Ebooks Icon" className="w-12 h-12" />
            <h1 className="text-4xl font-semibold">Ebooks</h1>
            <p className="text-[#A3A3A3] text-base leading-relaxed max-w-md">
              Explore our collection of ebooks covering a wide spectrum of
              future technology topics.
            </p>
          </div>
          <button className="flex items-center justify-center cursor-pointer gap-2 bg-[#1E1E1E] border border-[#2A2A2A] rounded-2xl px-6 py-4 hover:bg-[#111111] transition duration-200 text-sm font-light w-fit">
            Download Ebooks Now
            <MoveUpRight className="w-5 h-5 text-yellow-500" />
          </button>
          <div className="flex items-center gap-4 bg-[#141414] border border-[#1E1E1E] rounded-2xl px-4 py-3 w-fit">
            <div className="flex flex-col">
              <span className="text-sm text-[#A3A3A3]">Downloaded By</span>
              <span className="text-lg font-medium">10k + Users</span>
            </div>
            <img
              src={firstUsers}
              alt="users-avatars"
              className="w-24 h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 p-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Variety of Topics</h2>
            <p className="text-[#A3A3A3] text-sm max-w-lg">
              Topics include AI in education (25%), renewable energy (20%),
              healthcare (15%), space exploration (25%), and biotechnology
              (15%).
            </p>
            <img
              src={firstBigImg}
              alt="Ebook Topics"
              className="rounded-2xl mt-4"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#141414] border border-[#1E1E1E] rounded-2xl p-4">
              <h3 className="text-sm text-[#A3A3A3]">Total Ebooks</h3>
              <p className="text-base font-medium mt-1">Over 100 ebooks</p>
            </div>
            <div className="bg-[#141414] border border-[#1E1E1E] rounded-2xl p-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#A3A3A3]">Download Formats</h3>
                <p className="text-base font-medium mt-1">
                  PDF format for access
                </p>
              </div>
              <Eye className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
          <div className="bg-[#141414] border border-[#1E1E1E] rounded-2xl p-4">
            <h3 className="text-sm text-[#A3A3A3]">Average Author Expertise</h3>
            <p className="text-base font-medium mt-1">
              Ebooks are authored by renowned experts with an average of 15
              years of experience
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-8xl w-full grid grid-cols-1 lg:grid-cols-2 p-24 divide-x divide-[#1E1E1E] border border-[#1E1E1E]">
        <div className="flex flex-col justify-center gap-8">
          <div className="flex flex-col gap-4">
            <img
              src={secondIcon}
              alt="Whitepapers Icon"
              className="w-12 h-12"
            />
            <h1 className="text-4xl font-semibold">Whitepapers</h1>
            <p className="text-[#A3A3A3] text-base leading-relaxed max-w-md">
              Dive into comprehensive reports and analyses with our collection
              of whitepapers.
            </p>
          </div>
          <button className="flex items-center justify-center cursor-pointer gap-2 bg-[#1E1E1E] border border-[#2A2A2A] rounded-2xl px-6 py-4 hover:bg-[#111111] transition duration-200 text-sm font-light w-fit">
            Download Whitepapers Now
            <MoveUpRight className="w-5 h-5 text-yellow-500" />
          </button>
          <div className="flex items-center gap-4 bg-[#141414] border border-[#1E1E1E] rounded-2xl px-4 py-3 w-fit">
            <div className="flex flex-col">
              <span className="text-sm text-[#A3A3A3]">Downloaded By</span>
              <span className="text-lg font-medium">10k + Users</span>
            </div>
            <img
              src={secondUsers}
              alt="users-avatars"
              className="w-24 h-auto object-contain"
            />
          </div>
        </div>
        <div className="flex flex-col gap-6 p-8">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold">Topics Coverage</h2>
            <p className="text-[#A3A3A3] text-sm max-w-lg">
              Whitepapers cover quantum computing (20%), AI ethics (15%), space
              mining prospects (20%), AI in healthcare (15%), and renewable
              energy strategies (30%).
            </p>
            <img
              src={secondBigImg}
              alt="Whitepaper Topics"
              className="rounded-2xl mt-4"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-[#141414] border border-[#1E1E1E] rounded-2xl p-4">
              <h3 className="text-sm text-[#A3A3A3]">Total Whitepapers</h3>
              <p className="text-base font-medium mt-1">Over 50 whitepapers</p>
            </div>

            <div className="bg-[#141414] border border-[#1E1E1E] rounded-2xl p-4 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#A3A3A3]">Download Formats</h3>
                <p className="text-base font-medium mt-1">
                  PDF format for access
                </p>
              </div>
              <Eye className="w-5 h-5 text-yellow-500" />
            </div>
          </div>
          <div className="bg-[#141414] border border-[#1E1E1E] rounded-2xl p-4">
            <h3 className="text-sm text-[#A3A3A3]">Average Author Expertise</h3>
            <p className="text-base font-medium mt-1">
              Whitepapers are authored by subject matter experts with an average
              of 20 years of experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
