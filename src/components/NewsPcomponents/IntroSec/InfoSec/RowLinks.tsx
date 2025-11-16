import imgRowFirst from "../../../../assets/NewsPageImg/heroSec/imgRow1.png";
import imgRowSecond from "../../../../assets/NewsPageImg/heroSec/imgRow2.png";
import imgRowThird from "../../../../assets/NewsPageImg/heroSec/imgRow3.png";
import { ArrowUpRight } from "lucide-react";
import LikeButton from "../../../UI/LikesBtn/LikeButton";

interface Card {
  id: number;
  img: string;
  title: string;
  category: string;
  likes: number;
  comments: number;
}

export default function RowLinks() {
  const cards: Card[] = [
    {
      id: 1,
      img: imgRowFirst,
      title: "A Decisive Victory for Progressive Policies",
      category: "Politics",
      likes: 12,
      comments: 60,
    },
    {
      id: 2,
      img: imgRowSecond,
      title: "Tech Giants Unveil Cutting-Edge AI Innovations",
      category: "Technology",
      likes: 34,
      comments: 92,
    },
    {
      id: 3,
      img: imgRowThird,
      title: "COVID-19 Variants",
      category: "Health",
      likes: 45,
      comments: 124,
    },
  ];

  return (
    <section className="w-full bg-[#0D0D0D] text-white px-6 py-20">
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {cards.map((card) => (
          <div
            key={card.id}
            className="bg-[#111111] rounded-2xl p-4  hover:bg-[#1A1A1A] transition flex flex-col h-full"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 object-cover rounded-xl"
            />
            <h2 className="text-lg font-semibold mt-4">{card.title}</h2>
            <p className="text-sm text-[#98989A]">{card.category}</p>

            <div className="mt-auto flex items-center justify-between">
              <div className="flex items-center gap-6 py-4 text-[#98989A]">
                <LikeButton id={`like-${card.id}`} likes={card.likes} />
                <span>💬 {card.comments}</span>
              </div>

              <button
                className="flex items-center gap-1 bg-transparent border border-[#2A2A2A] text-[#98989A] px-3 py-1 rounded-lg hover:border-[#FFD600] hover:text-[#FFD600] transition cursor-pointer"
                aria-label={`Read more about ${card.title}`}
              >
                Read More <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
