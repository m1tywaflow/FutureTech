import styled from "styled-components";

export default function StarsRating() {
  return (
    <StyledWrapper>
      <div className="rating">
        <input value="5" name="star" id="star5" type="radio" />
        <label htmlFor="star5"></label>

        <input value="4" name="star" id="star4" type="radio" />
        <label htmlFor="star4"></label>

        <input value="3" name="star" id="star3" type="radio" />
        <label htmlFor="star3"></label>

        <input value="2" name="star" id="star2" type="radio" />
        <label htmlFor="star2"></label>

        <input value="1" name="star" id="star1" type="radio" />
        <label htmlFor="star1"></label>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .rating {
    display: flex;
    flex-direction: row-reverse;
    justify-content: start;
    gap: 8px;
  }

  .rating input {
    display: none;
  }

  .rating label {
    width: 26px;
    height: 26px;
    cursor: pointer;
    background-image: url("https://api.iconify.design/mdi/star-outline.svg");
    background-size: contain;
    transition: 0.25s;
    filter: drop-shadow(0 0 0px transparent);
  }

  .rating label:hover,
  .rating label:hover ~ label {
    background-image: url("https://api.iconify.design/mdi/star.svg");
    filter: drop-shadow(0 0 10px #ffc83d);
  }

  .rating input:checked ~ label {
    background-image: url("https://api.iconify.design/mdi/star.svg");
    filter: drop-shadow(0 0 14px #ffc83d);
    animation: pulse 0.6s infinite alternate;
  }

  @keyframes pulse {
    from {
      transform: scale(1);
    }
    to {
      transform: scale(1.15);
    }
  }
`;
