import styled from "styled-components";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

const HoverBtn = () => {
  return (
    <StyledWrapper>
      <Link to="/ai-conversations" className="link">
        <button className="btn-53">
          <div className="original">Start Chat</div>

          <div className="letters flex gap-3">
            <span>E</span>
            <span>X</span>
            <span>P</span>
            <span>L</span>
            <span>O</span>
            <span>R</span>
            <span>E</span>

            <span className="arrow">
              <MoveRight />
            </span>
          </div>
        </button>
      </Link>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .link {
    display: inline-block;
  }

  .btn-53,
  .btn-53 *,
  .btn-53 :after,
  .btn-53 :before,
  .btn-53:after,
  .btn-53:before {
    border: 0 solid;
    box-sizing: border-box;
  }

  .btn-53 {
    -webkit-tap-highlight-color: transparent;
    background-color: #000;
    color: #fff;
    cursor: pointer;
    border: 1px solid rgba(191, 163, 74, 0.5);
    border-radius: 999px;
    padding: 1.2rem 3rem;
    overflow: hidden;
    position: relative;
    font-weight: 900;
    text-transform: uppercase;
    transition: all 0.3s ease;
  }

  .btn-53:hover {
    box-shadow: 0 0 25px rgba(191, 163, 74, 0.35);
    border-color: rgba(191, 163, 74, 0.9);
  }

  .btn-53 svg {
    display: block;
  }

  .btn-53 .original {
    background: linear-gradient(
      135deg,
      rgba(232, 212, 138, 1),
      rgba(191, 163, 74, 1)
    );
    color: #000;
    display: grid;
    place-content: center;
    inset: 0;
    position: absolute;
    transition: transform 0.2s cubic-bezier(0.87, 0, 0.13, 1);
  }

  .btn-53:hover .original {
    transform: translateY(100%);
  }

  .btn-53 .letters {
    display: inline-flex;
    align-items: center;
  }

  .btn-53 span {
    opacity: 0;
    transform: translateY(-15px);
    transition: transform 0.25s cubic-bezier(0.87, 0, 0.13, 1), opacity 0.25s;
  }

  .btn-53 span:nth-child(2n) {
    transform: translateY(15px);
  }

  .btn-53:hover span {
    opacity: 1;
    transform: translateY(0);
  }

  .btn-53:hover span:nth-child(1) {
    transition-delay: 0.05s;
  }
  .btn-53:hover span:nth-child(2) {
    transition-delay: 0.1s;
  }
  .btn-53:hover span:nth-child(3) {
    transition-delay: 0.15s;
  }
  .btn-53:hover span:nth-child(4) {
    transition-delay: 0.2s;
  }
  .btn-53:hover span:nth-child(5) {
    transition-delay: 0.25s;
  }
  .btn-53:hover span:nth-child(6) {
    transition-delay: 0.3s;
  }
  .btn-53:hover span:nth-child(7) {
    transition-delay: 0.35s;
  }

  .btn-53:hover .arrow {
    transition-delay: 0.45s;
  }
`;

export default HoverBtn;
