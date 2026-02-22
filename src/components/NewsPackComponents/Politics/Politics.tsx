import peoplesImg from "../../../assets/something/peoples.png";
import { Link } from "react-router-dom";

export default function Politics() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-36 bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="text-center mb-16 space-y-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Your Journey to Tomorrow
          </span>
          <br />
          Begins Here
        </h1>

        <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl mx-auto">
          Explore the Frontiers of{" "}
          <span className="text-yellow-400 font-semibold">
            Artificial Intelligence
          </span>
        </p>
      </div>
      <div className="text-center max-w-3xl mx-auto mb-20">
        <p className="text-zinc-400 text-md sm:text-lg leading-relaxed">
          Welcome to the epicenter of AI innovation. FutureTech AI News is your
          passport to a world where machines think, learn, and reshape the
          future. Join us on this visionary expedition into the heart of AI.
        </p>
      </div>
      <div className="relative w-full h-80 sm:h-96 rounded-3xl overflow-hidden mb-20 border border-white/10 group">
        <img
          src={peoplesImg}
          alt="AI Future"
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex items-end p-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-yellow-400 max-w-xl leading-snug">
            Step Into a Future Crafted by Intelligent Machines
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          {
            title: "Cutting-Edge Research",
            text: "Dive deep into breakthroughs in neural networks, autonomous systems, and next-gen machine intelligence.",
          },
          {
            title: "Global AI Impact",
            text: "Explore how AI is transforming economies, politics, healthcare, and humanity’s collective future.",
          },
          {
            title: "Visionary Perspectives",
            text: "Hear from leading technologists, researchers, and innovators shaping the AI-powered world.",
          },
        ].map((card, i) => (
          <article
            key={i}
            className="group p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-yellow-400/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.15)] hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-yellow-400 mb-3 group-hover:text-yellow-300 transition">
              {card.title}
            </h3>

            <p className="text-zinc-400 text-sm leading-relaxed">{card.text}</p>
          </article>
        ))}
      </div>
      <div className="mt-28 text-center space-y-6">
        <h3 className="text-2xl sm:text-3xl font-bold">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
            Ready to Explore the AI Revolution?
          </span>
        </h3>

        <p className="text-zinc-400 max-w-xl mx-auto">
          Stay informed with the latest insights, trends, and discoveries
          shaping the digital future.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-2xl border border-yellow-400/40 text-yellow-400 font-semibold hover:bg-yellow-400 hover:text-black hover:shadow-[0_0_20px_rgba(250,204,21,0.4)] transition-all duration-300"
        >
          Start Your Journey
        </Link>
      </div>
    </section>
  );
}
