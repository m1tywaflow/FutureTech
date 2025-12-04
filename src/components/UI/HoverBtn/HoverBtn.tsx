import styled from "styled-components";
import { MoveRight } from "lucide-react";

const HoverBtn = () => {
  return (
    <StyledWrapper>
      <button className="btn-53">
        <div className="original">Learn More</div>
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
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
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
    border: 1px solid;
    border-radius: 999px;
    padding: 1.2rem 3rem;
    overflow: hidden;
    position: relative;
    font-weight: 900;
    text-transform: uppercase;
  }

  .btn-53 svg {
    display: block;
  }

  .btn-53 .original {
    background: #fff;
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

  /* Smooth letters animation */
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

  /* Delays for stagger animation */
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

  /* Arrow appears last */
  .btn-53:hover .arrow {
    transition-delay: 0.45s;
  }
`;

export default HoverBtn;
