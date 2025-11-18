import FuzzyText from "../UI/Fuzzy/FuzzyText";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <FuzzyText fontSize="clamp(3rem, 10vw, 10rem)" hoverIntensity={0.8}>
        404
      </FuzzyText>
      <p className="mt-6 text-gray-400 text-3xl">Page Not Found</p>
      <a
        href="/"
        className="mt-8 border border-white/20 px-6 py-3 rounded-lg hover:bg-white/10 transition"
      >
        Go Home
      </a>
    </div>
  );
}
