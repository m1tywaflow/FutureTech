import { ChevronRight, Heart, MessageSquareMore } from "lucide-react";

interface Card {
  id: number;
  img: string;
  title: string;
  category: string;
  likes: number;
  comments: number;
  link: string;
}

export default function StripeNewsCard({ card }: { card: Card }) {
  return (
    <div className="w-full h-[480px] group mx-auto bg-[#111] p-2 border border-[#2A2A2A] overflow-hidden rounded-md text-white">
      <figure className="w-full h-80 group-hover:h-72 transition-all duration-300 bg-[#111111] p-2 rounded-md relative overflow-hidden">
        <div
          style={{
            background:
              "linear-gradient(123.9deg, #FFD600 1.52%, rgba(0, 0, 0, 0) 68.91%)",
          }}
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300"
        />
        <img
          src={card.img}
          alt={card.title}
          className="absolute -bottom-1 group-hover:-bottom-5 right-0 h-64 w-[80%]
            border-4 border-[#2A2A2A] group-hover:border-[#FFD60033]
            rounded-lg object-cover transition-all duration-300"
        />
      </figure>
      <article className="p-4 space-y-2">
        <div className="h-8 px-3 inline-flex items-center text-sm rounded-md bg-[#FFD600] text-black font-medium">
          {card.category}
        </div>
        <h2 className="text-xl font-semibold leading-tight">{card.title}</h2>
        <div className="flex items-center gap-4 text-sm text-[#98989A]">
          <span className="flex items-center gap-1">
            <Heart size={16} className="text-yellow-300" />
            {card.likes}
          </span>
          <span className="flex items-center gap-1">
            <MessageSquareMore size={16} className="text-yellow-400" />
            {card.comments}
          </span>
        </div>
        <a
          href={card.link}
          className="text-[#FFD600] font-normal opacity-0 group-hover:opacity-100
      translate-y-2 group-hover:translate-y-0 pt-2 flex items-center gap-1
      transition-all duration-300"
        >
          Read more <ChevronRight size={18} />
        </a>
      </article>
    </div>
  );
}
