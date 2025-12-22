"use client";

import { useEffect, useState } from "react";

export default function HintBox() {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      localStorage.setItem("hint-shown", "true");
    }, 120000); // 2 minutes

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-50 w-64 rounded-xl bg-neutral-900 p-4 shadow-2xl animate-slide-in">
      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-2 text-neutral-400 hover:text-white cursor-pointer"
        aria-label="Close"
      >
        ×
      </button>

      <p className="text-sm text-neutral-200 leading-relaxed">
        👋 By the way, you can also check out the{" "}
        <a href="/blog" className="underline hover:text-amber-400 ">
          Blog
        </a>
      </p>
    </div>
  );
}
