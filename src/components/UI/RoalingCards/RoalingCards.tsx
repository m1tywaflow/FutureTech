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
                {card.img ? (
                  <img
                    src={card.img}
                    alt={card.title}
                    className="image w-30 h-30"
                  />
                ) : (
                  <span className="icon">{card.icon}</span>
                )}
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
  .wrapper {
    width: 100%;
    height: 420px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }

  .inner {
    --w: 140px;
    --h: 180px;
    --translateZ: 260px;
    --rotateX: -15deg;
    --perspective: 1000px;

    position: relative;
    width: var(--w);
    height: var(--h);
    transform-style: preserve-3d;
    animation: rotating 22s linear infinite;
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
    border-radius: 16px;
    background: linear-gradient(
      145deg,
      rgba(40, 40, 40, 0.9),
      rgba(20, 20, 20, 0.9)
    );
    border: 1px solid rgba(255, 255, 255, 0.08);

    display: flex;
    align-items: center;
    justify-content: center;

    transform: rotateY(calc((360deg / var(--quantity)) * var(--index)))
      translateZ(var(--translateZ));

    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 12px;
    color: #fff;
    font-family: system-ui, sans-serif;
  }

  .icon {
    font-size: 42px;
  }

  .title {
    font-size: 14px;
    opacity: 0.8;
    letter-spacing: 0.4px;
  }
`;

export default RoalingCards;
