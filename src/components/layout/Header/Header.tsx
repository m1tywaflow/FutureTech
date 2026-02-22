import logoImg from "../../../assets/logo/logo.png";
import { NavLink, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ContactButton from "@/components/UI/ContactButton/ContactButton";

export default function Header() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-[#0F0F0F] text-white
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoImg} alt="logo" className="w-8 h-8" />
          <h1 className="text-lg font-semibold">FutureTech</h1>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {[
            { to: "/news-page", label: "News" },
            { to: "/podcasts-page", label: "Podcasts" },
            { to: "/resources", label: "Resources" },
            { to: "/global", label: "Models" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
  isActive
    ? "px-3 py-1 rounded-md outline-3 outline-[#181717] outline-offset-[-3px] bg-transparent text-white font-bold transition shadow-[0_0_10px_rgb(250,204,21)]"
    : "text-sm text-gray-400 hover:text-white transition px-3 py-1 rounded-md"
}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <ContactButton />
      </div>
    </header>
  );
}
