import styled from "styled-components";

type StarsRatingProps = {
  id: number | string;
};
export default function StarsRating({ id }: StarsRatingProps) {
  return (
    <StyledWrapper>
      <div className="rating">
        <input value="5" name={`star-${id}`} id={`star5-${id}`} type="radio" />
        <label htmlFor={`star5-${id}`}></label>

        <input value="4" name={`star-${id}`} id={`star4-${id}`} type="radio" />
        <label htmlFor={`star4-${id}`}></label>

        <input value="3" name={`star-${id}`} id={`star3-${id}`} type="radio" />
        <label htmlFor={`star3-${id}`}></label>

        <input value="2" name={`star-${id}`} id={`star2-${id}`} type="radio" />
        <label htmlFor={`star2-${id}`}></label>

        <input value="1" name={`star-${id}`} id={`star1-${id}`} type="radio" />
        <label htmlFor={`star1-${id}`}></label>
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
    background-image: url("https://api.iconify.design/mdi/star-outline.svg?color=%23ffc83d");
    background-size: contain;
    transition: 0.25s;
    filter: drop-shadow(0 0 0px transparent);
  }

  .rating label:hover,
  .rating label:hover ~ label {
    background-image: url("https://api.iconify.design/mdi/star.svg?color=%23ffc83d");
    filter: drop-shadow(0 0 10px #ffc83d);
  }

  .rating input:checked ~ label {
    background-image: url("https://api.iconify.design/mdi/star.svg?color=%23ffc83d");
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
