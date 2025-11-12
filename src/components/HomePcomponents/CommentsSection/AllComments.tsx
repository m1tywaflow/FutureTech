import fAvatar from "../../../assets/comments/firstAvatar.png";
import sAvatar from "../../../assets/comments/secondAvatar.png";
import tAvatar from "../../../assets/comments/thirdAvatar.png";
import foAvatar from "../../../assets/comments/fourthAvatar.png";
import fiAvatar from "../../../assets/comments/fifthAvatar.png";
import siAvatar from "../../../assets/comments/sixAvatar.png";
import { Star } from "lucide-react";

export default function AllComments() {
  const Comments = [
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
    <section className="w-full text-white py-24 px-10 md:px-20 bg-[#0D0D0D]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Comments.map((comment, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border border-[#1E1E1E] rounded-2xl bg-[#121212] p-8"
          >
            <img
              src={comment.avatar}
              alt={comment.name}
              className="w-14 h-14 rounded-full mb-3"
            />
            <h3 className="font-semibold text-lg">{comment.name}</h3>
            <p className="text-sm text-gray-400 mb-3">{comment.location}</p>

            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
              ))}
            </div>

            <p className="text-sm text-gray-300 ">
              {comment.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
