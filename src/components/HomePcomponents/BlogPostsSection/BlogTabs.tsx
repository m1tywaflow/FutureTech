import { useState } from "react";
import { MessageSquare, Eye, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import LikeButton from "@/components/UI/LikesBtn/LikeButton";

type BlogPost = {
  id: number;
  author: string;
  authorImg: string;
  category: string;
  date: string;
  title: string;
  description: string;
  likes: number;
  isLiked: boolean;
  comments: number;
  views: number;
};

const categories = ["All", "Quantum Computing", "Space Exploration"];

const initialPosts: BlogPost[] = [
  {
    id: 1,
    author: "John Techson",
    authorImg: "https://randomuser.me/api/portraits/men/32.jpg",
    category: "Quantum Computing",
    date: "October 15, 2023",
    title: "The Quantum Leap in Computing",
    description:
      "Explore the revolution in quantum computing, its applications, and its potential impact on various industries.",
    likes: 24500,
    isLiked: false,
    comments: 50,
    views: 20,
  },
  {
    id: 2,
    author: "Elena Qubit",
    authorImg: "https://randomuser.me/api/portraits/women/11.jpg",
    category: "Quantum Computing",
    date: "September 28, 2023",
    title: "Breaking Barriers with Quantum AI",
    description:
      "How quantum algorithms are redefining machine learning and optimization problems.",
    likes: 18000,
    isLiked: false,
    comments: 40,
    views: 15,
  },
  {
    id: 3,
    author: "Dr. Qubit",
    authorImg: "https://randomuser.me/api/portraits/men/90.jpg",
    category: "Quantum Computing",
    date: "January 3, 2024",
    title: "Quantum Supremacy: What It Really Means",
    description:
      "A deep dive into Google's and IBM's quantum breakthroughs — what quantum supremacy actually represents for the future of computation.",
    likes: 27000,
    isLiked: false,
    comments: 66,
    views: 25,
  },
  {
    id: 4,
    author: "Astronomer X",
    authorImg: "https://randomuser.me/api/portraits/men/65.jpg",
    category: "Space Exploration",
    date: "December 10, 2023",
    title: "The Mars Colonization Challenge",
    description:
      "Exploring the technical and logistical challenges of human colonization on Mars.",
    likes: 20000,
    isLiked: false,
    comments: 31,
    views: 12,
  },
  {
    id: 5,
    author: "Samantha Vega",
    authorImg: "https://randomuser.me/api/portraits/women/47.jpg",
    category: "Space Exploration",
    date: "March 14, 2024",
    title: "The Future of Deep Space Travel",
    description:
      "How AI and renewable energy technologies will redefine our next missions to the outer solar system and beyond.",
    likes: 22300,
    isLiked: false,
    comments: 44,
    views: 17,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

const BlogTabs = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [posts, setPosts] = useState(initialPosts);

  const toggleLike = (id: number) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? {
              ...post,
              isLiked: !post.isLiked,
              likes: post.isLiked ? post.likes - 1 : post.likes + 1,
            }
          : post
      )
    );
  };

  const filteredPosts =
    activeTab === "All"
      ? posts
      : posts.filter((post) => post.category === activeTab);

  return (
    <section className="relative w-full bg-[#0A0A0A] text-white py-24 px-6 lg:px-16 overflow-hidden">
      <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-[#BFA34A]/10 blur-[160px] rounded-full" />
      <div className="relative max-w-7xl mx-auto border border-[#1A1A1A] rounded-3xl overflow-hidden bg-[#0C0C0C]/60 backdrop-blur-xl p-8 lg:p-12">
        <div className="flex justify-center gap-4 flex-wrap border-b border-[#1A1A1A] pb-6 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveTab(category)}
              className="relative px-6 py-2 text-sm font-medium"
            >
              {activeTab === category && (
                <motion.span
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#0F0F0F] border border-[#1F1F1F] rounded-xl -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span
                className={`transition ${
                  activeTab === category
                    ? "text-[#E7D27A]"
                    : "text-[#9A9A9A] hover:text-white"
                }`}
              >
                {category}
              </span>
            </button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="flex flex-col gap-6"
          >
            {filteredPosts.map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                layout
                className="group flex flex-col lg:flex-row lg:items-center justify-between gap-6 bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl p-6 transition hover:border-[#BFA34A]/40 hover:shadow-[0_0_30px_rgba(191,163,74,0.15)] hover:-translate-y-1"
              >
                <div className="flex gap-4">
                  <img
                    src={post.authorImg}
                    alt={post.author}
                    className="w-14 h-14 rounded-full object-cover border border-[#1F1F1F]"
                  />
                  <div>
                    <p className="text-sm text-[#9A9A9A]">
                      {post.author} • {post.category}
                    </p>
                    <p className="text-xs text-[#6A6A6A] mt-1">{post.date}</p>
                    <h3 className="text-lg font-semibold mt-2 group-hover:text-[#E7D27A] transition">
                      {post.title}
                    </h3>
                    <p className="text-[#B3B3B3] text-sm mt-1 max-w-xl">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 mt-4 text-sm">
                      <LikeButton
                        likes={post.likes}
                        liked={post.isLiked}
                        onToggle={() => toggleLike(post.id)}
                      />
                      <span className="flex items-center gap-1 text-[#9A9A9A]">
                        <MessageSquare className="w-4 h-4" />
                        {post.comments}
                      </span>

                      <span className="flex items-center gap-1 text-[#9A9A9A]">
                        <Eye className="w-4 h-4" />
                        {post.views}
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/blog"
                  className="group flex items-center gap-2 bg-[#0F0F0F] border border-[#1F1F1F] rounded-2xl px-6 py-3 hover:border-[#BFA34A]/40 hover:shadow-[0_0_20px_rgba(191,163,74,0.2)] transition"
                >
                  View Blog
                  <ArrowUpRight className="w-4 h-4 text-[#E7D27A] group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default BlogTabs;
