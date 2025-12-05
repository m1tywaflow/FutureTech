import { Twitter, Dribbble, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

type FooterLink = {
  label: string;
  href?: string;
  isNew?: boolean;
};

const defaultHref = "/404";

const footerLinks: {
  home: FooterLink[];
  news: FooterLink[];
  blogs: FooterLink[];
  podcasts: FooterLink[];
  resources: FooterLink[];
} = {
  home: [
    { label: "Features", href: "/features" },
    { label: "Blogs", href: "/blog" },
    { label: "Resources", href: "/resources", isNew: true },
    { label: "Contact Us", href: "/contact-us" },
    { label: "Newsletter", href: "/news-letter" },
  ],
  news: [
    { label: "Trending Stories", href: "/trending-stories" },
    { label: "Politics", href: "/politics" },
  ],
  blogs: [
    {
      label: "The Rise of Artificial Intelligence in Healthcare",
      href: "/blog",
    },
    { label: "AI Ethics", href: "/ai-ethics" },
  ],
  podcasts: [
    { label: "AI Revolution (New)", href: "/ai-revolution", isNew: true },
    { label: "TechTalk AI", href: "/tech-talk-ai" },
    { label: "AI Conversations", href: "/podcasts/ai-conversations" },
  ],
  resources: [
    { label: "Whitepapers" },
    { label: "Ebooks" },
    { label: "Reports" },
    { label: "Research Papers" },
  ],
};

const safeHref = (href?: string) => href || defaultHref;

export default function Footer() {
  const renderLink = (item: FooterLink) => (
    <Link
      to={safeHref(item.href)}
      className="hover:text-white flex items-center gap-2 transition-colors"
    >
      {item.label.includes("(New)")
        ? item.label.replace("(New)", "").trim()
        : item.label}
      {item.isNew && (
        <span className="text-[10px] bg-yellow-500 text-black px-1.5 rounded">
          New
        </span>
      )}
    </Link>
  );

  return (
    <footer className="bg-black text-gray-300 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
        <div>
          <h3 className="text-white font-semibold mb-4">Home</h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.home.map((item) => (
              <li key={item.label}>{renderLink(item)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">News</h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.news.map((item) => (
              <li key={item.label}>{renderLink(item)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Blogs</h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.blogs.map((item) => (
              <li key={item.label}>{renderLink(item)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Podcasts</h3>
          <ul className="space-y-2 text-sm">
            {footerLinks.podcasts.map((item) => (
              <li key={item.label}>{renderLink(item)}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-3 text-sm">
            {footerLinks.resources.map((item) => (
              <li key={item.label}>
                <Link
                  to={safeHref(item.href)}
                  className="flex items-center justify-between bg-neutral-900 rounded-md px-3 py-2 hover:bg-neutral-800 transition-colors"
                >
                  {item.label}
                  <span className="text-yellow-400 text-xs">↗</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-12 pt-6 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <div className="flex gap-6 mb-4 md:mb-0">
          <Link
            to="/terms-conditions"
            className="hover:text-white transition-colors"
          >
            Terms & Conditions
          </Link>
          <Link
            to="/privacy-policy"
            className="hover:text-white transition-colors"
          >
            Privacy Policy
          </Link>
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
