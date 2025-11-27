import { useState, useRef, useEffect } from "react";
import FAQicon from "../../../assets/ContactUs/Icons/FAQicon.png";

const faqData = [
  {
    question: "What is AI?",
    answer:
      "AI stands for Artificial Intelligence, which refers to the simulation of human intelligence in machines. It enables them to perform tasks like problem-solving, learning, and decision-making.",
  },
  {
    question: "How can I listen to your podcasts?",
    answer:
      "You can listen to our podcasts on all major platforms including Spotify, Apple Podcasts, and Google Podcasts.",
  },
  {
    question: "Are your podcasts free to listen to?",
    answer:
      "Yes! All our podcasts are completely free and accessible to everyone.",
  },
  {
    question: "Can I download episodes to listen offline?",
    answer:
      "Yes, most platforms allow you to download episodes for offline listening.",
  },
  {
    question: "How often do you release new episodes?",
    answer: "We release new episodes weekly. Stay tuned!",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="w-full border border-[#1E1E1E]  bg-[#0B0B0B] py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col justify-center">
          <img src={FAQicon} className="w-16 mb-6" />

          <h2 className="text-4xl font-semibold text-white mb-4">
            Asked question
          </h2>

          <p className="text-gray-400 mb-6">
            If the question is not available on our FAQ section, feel free to
            contact us personally, we will resolve your respective doubts.
          </p>

          <button className="bg-[#111] text-white px-6 py-3 rounded-lg border border-[#1F1F1F] hover:bg-[#161616] transition flex items-center gap-2 w-fit">
            Ask Question
            <span>↗</span>
          </button>
        </div>
        <div className="space-y-4">
          {faqData.map((item, i) => (
            <FAQItem
              key={i}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

type FAQItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
};

function FAQItem({ question, answer, isOpen, onClick }: FAQItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      setHeight(isOpen ? ref.current.scrollHeight : 0);
    }
  }, [isOpen]);

  return (
    <div className="border border-[#1F1F1F] rounded-xl bg-[#0F0F0F] overflow-hidden transition">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center px-6 py-4 text-left"
      >
        <span className="text-white font-medium">{question}</span>

        <span className="text-yellow-500 text-xl">{isOpen ? "−" : "+"}</span>
      </button>
      <div
        style={{
          maxHeight: height,
        }}
        className="transition-all duration-500 ease-in-out overflow-hidden"
      >
        <div ref={ref} className="px-6 pb-5 text-gray-400 leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
