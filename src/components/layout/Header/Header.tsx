import logoImg from "../../../assets/logo/logo.png";

export default function Header() {
  return (
    <header className="w-full bg-[#0F0F0F] text-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
          <img src={logoImg} alt="logo" className="w-8 h-8" />
          <h1 className="text-lg font-semibold">FutureTech</h1>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#"
            className="px-3 py-1 rounded-md bg-[#1A1A1A] text-sm font-medium hover:bg-[#2A2A2A] transition"
          >
            Home
          </a>
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            News
          </a>
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Podcasts
          </a>
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white transition"
          >
            Resources
          </a>
        </nav>
        <button className="bg-[#FFD600] text-black text-sm font-medium px-4 py-2 rounded-md hover:bg-[#FFCC00] transition">
          Contact Us
        </button>
      </div>
    </header>
  );
}
