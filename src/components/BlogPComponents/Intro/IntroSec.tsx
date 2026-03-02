import IntroImg from "../../../assets/BlogPage/IntroIMG.png";

export default function IntroSec() {
  return (
    <section
      className="w-full min-h-[320px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[600px] 
                 flex items-end pb-6 sm:pb-8 md:pb-10 px-4"
      style={{
        backgroundImage: `url(${IntroImg})`,
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <h1
        className="w-full text-center font-semibold 
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        The Rise of Artificial Intelligence in Healthcare
      </h1>
    </section>
  );
}
