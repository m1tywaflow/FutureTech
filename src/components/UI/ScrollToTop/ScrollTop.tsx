import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { lenis } from "../../types/lenisInstance";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = ({ scroll }: { scroll: number }) => {
      setVisible(scroll > 300);
    };

    lenis.on("scroll", onScroll);
    return () => {
      lenis.off("scroll", onScroll);
    };
  }, []);

  const scrollToTop = () => {
    lenis.scrollTo(0, { duration: 1.2 });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="
        fixed bottom-6 right-6 p-3 rounded-full
        bg-[#FFD600] text-black
        shadow-lg z-50
        transition-transform duration-300
        hover:scale-110
      "
    >
      <ArrowUp size={20} />
    </button>
  );
}
