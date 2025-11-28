import favIcon from "../../../assets/ComingSoon/favicon.png";
import FuzzyText from "../../UI/Fuzzy/FuzzyText";
import { Link } from "react-router-dom";

export default function ComingSoon() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#551010] text-white px-6">
      <div className="flex flex-col items-center gap-6">
        <img src={favIcon} alt="clock-img" className="w-90 h-90 opacity-80" />

        <FuzzyText fontSize="clamp(3rem, 10vw, 10rem)" hoverIntensity={0.8}>
          Coming Soon
        </FuzzyText>

        <p className="text-gray-400 text-lg text-center max-w-xl opacity-70">
          This page is currently under construction. Stay tuned for updates!
        </p>

        <Link
          to="/"
          className="
            mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[#1f1f1f]bg-[#151515] text-sm font-medium over:bg-[#1e1e1e] hover:border-[#2a2a2a] transition-all duration-300 shadow-[0_0_10px_rgba(255,255,255,0.03)]
          "
        >
          ← Go Home
        </Link>
      </div>
    </div>
  );
}
