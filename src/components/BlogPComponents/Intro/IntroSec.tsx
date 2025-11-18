import IntroImg from "../../../assets/BlogPage/IntroIMG.png";
export default function IntroSec() {
  return (
    <section
      className="w-full h-[600px] flex items-end pb-10"
      style={{
        backgroundImage: `url(${IntroImg})`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1 className="text-6xl font-semibold text-center w-full">
        The Rise of Artificial Intelligence in Healthcare
      </h1>
    </section>
  );
}
