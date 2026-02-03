import React from "react";
import styled from "styled-components";

interface LikeButtonProps {
  likes: number;
  liked: boolean;
  onToggle: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({
  likes,
  liked,
  onToggle,
}) => {
  return (
    <StyledWrapper onClick={onToggle} liked={liked}>
      <svg
        className="like-icon"
        fill={liked ? "#fc4e4e" : "#505050"}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
      </svg>

      <span className="like-text">Likes</span>
      <span className="like-count">{likes}</span>
    </StyledWrapper>
  );
};

export default LikeButton;

const StyledWrapper = styled.div<{ liked: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  padding: 4px 12px;
  border-radius: 12px;
  background: #1d1d1d;
  user-select: none;

  .like-icon {
    width: 24px;
    height: 24px;
    transition: transform 0.2s;
    transform: ${({ liked }) => (liked ? "scale(1.2)" : "scale(1)")};
  }

  .like-text {
    color: #fcfcfc;
    font-size: 16px;
  }

  .like-count {
    color: #717070;
    font-size: 16px;
    margin-left: 4px;
  }
`;
