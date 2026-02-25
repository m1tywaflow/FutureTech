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
  hidden: { opacity: 0, y: 20 },
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
    <div className="w-full max-w-7xl mx-auto py-8 text-white">
      <div className="flex justify-center gap-4 overflow-x-auto border-b border-neutral-800 pb-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className="relative px-6 py-2 text-sm"
          >
            {activeTab === category && (
              <motion.span
                layoutId="activeTab"
                className="absolute inset-0 bg-neutral-800 rounded-md -z-10"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span
              className={`transition-colors ${
                activeTab === category
                  ? "text-white"
                  : "text-neutral-400 hover:text-white"
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
          className="flex flex-col gap-8"
        >
          {filteredPosts.map((post) => (
            <motion.div
              key={post.id}
              variants={itemVariants}
              layout
              className="flex flex-col lg:flex-row lg:justify-between items-start border-b border-neutral-800 pb-6 gap-4"
            >
              <div className="flex flex-col sm:flex-row items-start gap-4 w-full lg:w-auto">
                <img
                  src={post.authorImg}
                  alt={post.author}
                  className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                />

                <div className="flex-1">
                  <p className="text-sm text-neutral-400">
                    {post.author} • {post.category}
                  </p>
                  <p className="text-xs text-neutral-500 mt-1">{post.date}</p>

                  <h3 className="text-lg font-semibold mt-2">{post.title}</h3>

                  <p className="text-neutral-400 text-sm mt-1">
                    {post.description}
                  </p>

                  <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
                    <LikeButton
                      likes={post.likes}
                      liked={post.isLiked}
                      onToggle={() => toggleLike(post.id)}
                    />
                    <span className="flex items-center gap-1 text-neutral-400">
                      <MessageSquare className="w-4 h-4" />
                      {post.comments}
                    </span>
                    <span className="flex items-center gap-1 text-neutral-400">
                      <Eye className="w-4 h-4" />
                      {post.views}
                    </span>
                  </div>
                </div>
              </div>

              <Link
                to="/blog"
                className="w-full sm:w-fit flex items-center gap-2 bg-black border border-[#1E1E1E] rounded-2xl px-4 sm:px-6 py-3 sm:py-4 hover:bg-[#111111] transition text-sm font-light mt-4 lg:mt-0"
              >
                View Blog
                <ArrowUpRight className="w-4 h-4 text-yellow-500" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default BlogTabs;
