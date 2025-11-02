import { Twitter, Dribbble, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-4">Home</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Features",
              "Blogs",
              "Resources",
              "Testimonials",
              "Contact Us",
              "Newsletter",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-white flex items-center gap-2 transition-colors"
                >
                  {item}
                  {item === "Resources" && (
                    <span className="text-[10px] bg-yellow-500 text-black px-1.5 rounded">
                      New
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">News</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Trending Stories",
              "Featured Videos",
              "Technology",
              "Health",
              "Politics",
              "Environment",
            ].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-white transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Blogs</h3>
          <ul className="space-y-2 text-sm">
            {[
              "Quantum Computing",
              "AI Ethics",
              "Space Exploration",
              "Biotechnology",
              "Renewable Energy",
              "Biohacking",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-white flex items-center gap-2 transition-colors"
                >
                  {item}
                  {item === "Biotechnology" && (
                    <span className="text-[10px] bg-yellow-500 text-black px-1.5 rounded">
                      New
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Podcasts</h3>
          <ul className="space-y-2 text-sm">
            {[
              "AI Revolution",
              "AI Revolution (New)",
              "TechTalk AI",
              "AI Conversations",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-white flex items-center gap-2 transition-colors"
                >
                  {item.includes("(New)") ? "AI Revolution" : item}
                  {item.includes("(New)") && (
                    <span className="text-[10px] bg-yellow-500 text-black px-1.5 rounded">
                      New
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-sm">
            {["Whitepapers", "Ebooks", "Reports", "Research Papers"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="flex items-center justify-between bg-neutral-900 rounded-md px-3 py-2 hover:bg-neutral-800 transition-colors"
                  >
                    {item}
                    <span className="text-yellow-400 text-xs">↗</span>
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <div className="flex gap-6 mb-4 md:mb-0">
          <a href="#" className="hover:text-white transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>

        <div className="flex gap-4 mb-4 md:mb-0">
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-white transition-colors"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="Dribbble"
            className="hover:text-white transition-colors"
          >
            <Dribbble className="w-4 h-4" />
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:text-white transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
        <p className="mt-2 md:mt-0">© 2024 FutureTech. All rights reserved.</p>
      </div>
    </footer>
  );
}
