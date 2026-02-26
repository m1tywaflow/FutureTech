import { useMemo, useState } from "react";
import imgRowFirst from "../../../../assets/NewsPageImg/heroSec/imgRow1.png";
import imgRowSecond from "../../../../assets/NewsPageImg/heroSec/imgRow2.png";
import imgRowThird from "../../../../assets/NewsPageImg/heroSec/imgRow3.png";
import { ArrowDownWideNarrow } from "lucide-react";
import StripeNewsCard from "@/components/UI/RowLinkCards/StripeNewsCard";

interface Card {
  id: number;
  img: string;
  title: string;
  category: string;
  likes: number;
  comments: number;
  link: string;
}

export default function RowLinks() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");
  type SortType = "likes" | "comments";
  const [sortBy, setSortBy] = useState<SortType>("likes");

  const cards: Card[] = [
    {
      id: 1,
      img: imgRowFirst,
      title: "A Decisive Victory for Progressive Policies",
      category: "Politics",
      likes: 12,
      comments: 60,
      link: "/decisive",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?q=80&w=800&auto=format&fit=crop",
      title: "Global Leaders Debate Climate Reforms",
      category: "Politics",
      likes: 28,
      comments: 41,
      link: "/climate-reforms",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop",
      title: "Election Results Signal Major Shift",
      category: "Politics",
      likes: 19,
      comments: 33,
      link: "/election-shift",
    },
    {
      id: 4,
      img: imgRowSecond,
      title: "Tech Giants Unveil Cutting-Edge AI Innovations",
      category: "Technology",
      likes: 34,
      comments: 92,
      link: "/tech-giants-ai",
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop",
      title: "Quantum Computing Breakthrough Announced",
      category: "Technology",
      likes: 51,
      comments: 110,
      link: "/quantum-breakthrough",
    },
    {
      id: 6,
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?q=80&w=800&auto=format&fit=crop",
      title: "Startups Race to Build Smarter Robots",
      category: "Technology",
      likes: 23,
      comments: 48,
      link: "/smart-robots",
    },
    {
      id: 7,
      img: imgRowThird,
      title: "COVID-19 Variants",
      category: "Health",
      likes: 45,
      comments: 124,
      link: "/covid-variants",
    },
    {
      id: 8,
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
      title: "AI Helps Detect Diseases Earlier",
      category: "Health",
      likes: 39,
      comments: 77,
      link: "/ai-healthcare",
    },
    {
      id: 9,
      img: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800&auto=format&fit=crop",
      title: "Mental Health Awareness Gains Momentum",
      category: "Health",
      likes: 17,
      comments: 29,
      link: "/mental-health-awareness",
    },
  ];

  const categories = useMemo(
    () => ["All", ...new Set(cards.map((card) => card.category))],
    [cards]
  );

  const filteredCards = useMemo(() => {
    let result =
      activeCategory === "All"
        ? cards
        : cards.filter((card) => card.category === activeCategory);

    if (search.trim()) {
      result = result.filter((card) =>
        card.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    return [...result].sort((a, b) => {
      if (sortBy === "likes") return b.likes - a.likes;
      if (sortBy === "comments") return b.comments - a.comments;
      return 0;
    });
  }, [activeCategory, cards, search, sortBy]);

  return (
    <section className="w-full bg-[#0D0D0D] text-white px-4 sm:px-6 md:px-10 py-16 md:py-20">
      <div className="flex flex-col gap-6 mb-10 md:mb-12">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 relative">
          <input
            type="text"
            placeholder="Search news..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="
              w-full lg:max-w-sm px-4 py-2 rounded-lg border border-[#2A2A2A]
              bg-[#111111] text-white placeholder-[#98989A]
              focus:outline-none focus:border-[#FFD600]
              lg:absolute lg:left-1/2 lg:-translate-x-1/2
            "
          />

          <div className="flex justify-between w-full lg:w-auto lg:justify-start gap-3 lg:ml-auto">
            <button
              onClick={() => setSortBy("likes")}
              className={`px-5 py-2 flex items-center gap-2 border transition
              ${
                sortBy === "likes"
                  ? "border-[#FFD600] text-[#FFD600]"
                  : "border-[#2A2A2A] text-[#98989A] hover:border-[#7c7345]"
              }`}
            >
              Likes <ArrowDownWideNarrow className="w-4 h-4" />
            </button>

            <button
              onClick={() => setSortBy("comments")}
              className={`px-5 py-2 flex items-center gap-2 border transition
              ${
                sortBy === "comments"
                  ? "border-[#FFD600] text-[#FFD600]"
                  : "border-[#2A2A2A] text-[#98989A] hover:border-[#7c7345]"
              }`}
            >
              Comments <ArrowDownWideNarrow className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex justify-center gap-2 sm:gap-3 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-1 rounded-full border text-sm transition
              ${
                activeCategory === category
                  ? "border-[#FFD600] text-[#FFD600]"
                  : "border-[#2A2A2A] text-[#98989A] hover:border-[#7c7345]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {filteredCards.map((card) => (
          <StripeNewsCard key={card.id} card={card} />
        ))}
      </div>
    </section>
  );
}
