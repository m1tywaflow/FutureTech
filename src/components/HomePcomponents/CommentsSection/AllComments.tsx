import fAvatar from "../../../assets/comments/firstAvatar.png";
import sAvatar from "../../../assets/comments/secondAvatar.png";
import tAvatar from "../../../assets/comments/thirdAvatar.png";
import foAvatar from "../../../assets/comments/fourthAvatar.png";
import fiAvatar from "../../../assets/comments/fifthAvatar.png";
import siAvatar from "../../../assets/comments/sixAvatar.png";
import { Star } from "lucide-react";

export default function AllComments() {
  const comments = [
    {
      avatar: fAvatar,
      name: "Sarah Thompson",
      location: "San Francisco, USA",
      text: "The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.",
    },
    {
      avatar: sAvatar,
      name: "Raj Patel",
      location: "Mumbai, India",
      text: "The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.",
    },
    {
      avatar: tAvatar,
      name: "Emily Adams",
      location: "London, UK",
      text: "The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.",
    },
    {
      avatar: foAvatar,
      name: "Alan Jackson",
      location: "Houston, USA",
      text: "The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.",
    },
    {
      avatar: fiAvatar,
      name: "Jessica Miller",
      location: "Boston, USA",
      text: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
    },
    {
      avatar: siAvatar,
      name: "Diego Lopez",
      location: "Barcelona, Spain",
      text: "The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.",
    },
  ];

  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-24 px-6 lg:px-16 overflow-hidden">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#BFA34A]/10 blur-[160px] rounded-full" />
      <div className="relative max-w-8xl mx-auto border border-[#1A1A1A] rounded-3xl overflow-hidden bg-[#0C0C0C]/60 backdrop-blur-xl p-10 lg:p-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {comments.map((comment) => (
            <div
              key={comment.name}
              className="group flex flex-col items-center text-center bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-8 transition hover:border-[#BFA34A]/40 hover:shadow-[0_0_30px_rgba(191,163,74,0.15)] hover:-translate-y-1"
            >
              <img
                src={comment.avatar}
                alt={comment.name}
                className="w-14 h-14 rounded-full mb-4 border border-[#1F1F1F]"
              />
              <h3 className="font-semibold text-lg group-hover:text-[#E7D27A] transition">
                {comment.name}
              </h3>
              <p className="text-sm text-[#9A9A9A] mb-4">{comment.location}</p>
              <div className="flex justify-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-[#E7D27A] fill-[#E7D27A]"
                  />
                ))}
              </div>
              <p className="text-sm text-[#B3B3B3] leading-relaxed">
                {comment.text}
              </p>
              <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-[#BFA34A]/40 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
