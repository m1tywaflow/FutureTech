import React from "react";
import styled from "styled-components";
import logo from "../../../assets/logo/logo.png";
import logoGpt from "../../../assets/logo/logoGpt.png";
import logoDeepSeek from "../../../assets/logo/Deepseek-logo-icon.svg.png";
import logoGemini from "../../../assets/logo/geminiLogo.png";
import logoClaude from "../../../assets/logo/claudeLogo.png";
import logoMistral from "../../../assets/logo/mistralLogo.png";
import logoLlama from "../../../assets/logo/lamaLogoo.png";
import logoPerplexity from "../../../assets/logo/perplexitiLogo.png";
import logoGrok from "../../../assets/logo/grokLogo.png";
import logoHuggingFace from "../../../assets/logo/logohuggingface.png";

const cards = [
  { title: "GPT", img: logoGpt },
  { title: "DeepSeek", img: logoDeepSeek },
  { title: "Gemini", img: logoGemini },
  { title: "Claude", img: logoClaude },
  { title: "Mistral", img: logoMistral },
  { title: "Llama", img: logoLlama },
  { title: "Perplexity", img: logoPerplexity },
  { title: "xAI (Grok)", img: logoGrok },
  { title: "Hugging Face", img: logoHuggingFace },
  { title: "Future Tech", img: logo },
];

const RoalingCards = () => {
  return (
    <StyledWrapper>
      <div className="wrapper">
        <div
          className="inner"
          style={{ "--quantity": cards.length } as React.CSSProperties}
        >
          {cards.map((card, i) => (
            <div
              key={i}
              className="card"
              style={{ "--index": i } as React.CSSProperties}
            >
              <div className="content">
                <img src={card.img} alt={card.title} className="image" />
                <span className="title">{card.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;

  .wrapper {
    width: 100%;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .wrapper::before {
    content: "";
    position: absolute;
    width: 600px;
    height: 600px;
    background: radial-gradient(
      circle,
      rgba(191, 163, 74, 0.18),
      transparent 70%
    );
    filter: blur(90px);
    pointer-events: none;
  }

  .inner {
    --w: 140px;
    --h: 180px;
    --translateZ: 260px;
    --rotateX: -12deg;
    --perspective: 1000px;

    position: relative;
    width: var(--w);
    height: var(--h);
    transform-style: preserve-3d;
    animation: rotating 28s linear infinite;
    will-change: transform;
  }

  @keyframes rotating {
    from {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(0deg);
    }
    to {
      transform: perspective(var(--perspective)) rotateX(var(--rotateX))
        rotateY(360deg);
    }
  }

  .card {
    position: absolute;
    inset: 0;
    border-radius: 18px;

    background: linear-gradient(
      145deg,
      rgba(191, 163, 74, 0.1),
      rgba(191, 163, 74, 0.18)
    );

    border: 1px solid rgba(191, 163, 74, 0.35);

    display: flex;
    align-items: center;
    justify-content: center;

    transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));

    backdrop-filter: blur(6px);

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);

    transition: transform 0.4s ease, border 0.3s ease;
  }

  .card:hover {
    border: 1px solid rgba(212, 183, 90, 0.7);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    color: #f5f3ee;
    font-family: system-ui, sans-serif;
  }

  .image {
    width: 56px;
    height: 56px;
    object-fit: contain;
    filter: drop-shadow(0 6px 18px rgba(0, 0, 0, 0.45));
  }

  .title {
    font-size: 14px;
    letter-spacing: 0.4px;
    color: #b9b2a8;
  }

  @media (max-width: 768px) {
    .inner {
      --translateZ: 200px;
      animation-duration: 35s;
    }
  }
`;

export default RoalingCards;
