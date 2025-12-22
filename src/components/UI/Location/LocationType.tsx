"use client";

import styled from "styled-components";

const Tooltip = () => {
  return (
    <StyledWrapper>
      <div className="reference">
        <p className="main-title">
          Location <span className="hover-card">Warsaw</span>, Poland
        </p>

        <div className="card">
          <div className="cloud" />
          <div className="cloud" />
          <div className="cloud" />
          <div className="cloud" />

          <div className="inner-card">
            <div className="bg-map" />
            <div className="location" />
            <div className="elements">
              <div className="description">
                <div className="blur-item" />
                <span className="main-title">Warsaw</span>
                <p className="second-title">Poland</p>
              </div>
              <div className="details">
                <div className="peoples">
                  <div className="people" />
                  <div className="people" />
                  <div className="people" />
                </div>
                <div className="action" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .reference {
    position: relative;
    display: inline-block;
  }

  .hover-card {
    font-style: italic;
    color: #ffd700;
    cursor: pointer;
    font-weight: 600;
  }

  .card {
    position: absolute;
    top: 30px;
    left: 0;
    width: 220px;
    padding: 12px;
    border-radius: 12px;
    background: #1a1a1a;
    box-shadow: 0 5px 15px rgba(255, 215, 0, 0.2);
    transform: scale(0);
    transform-origin: top;
    opacity: 0;
    pointer-events: none;
    transition: transform 0.3s ease, opacity 0.3s ease;
    z-index: 50;
  }

  .reference:hover .card {
    transform: scale(1);
    opacity: 1;
    pointer-events: auto;
  }

  .main-title {
    font-size: 1.2rem;
    color: #ffd700;
    font-weight: 600;
  }

  .second-title {
    font-size: 0.9rem;
    color: #ffc966;
    font-weight: 500;
  }

  .inner-card {
    position: relative;
    border-radius: 12px;
    background: #2a2a2a;
    padding: 8px;
    overflow: hidden;
  }

  .location {
    position: absolute;
    top: 20%;
    left: 60%;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #ffd700;
    border: 3px solid #1a1a1a;
    box-shadow: 0 0 10px 5px rgba(255, 215, 0, 0.5);
    animation: pulse 3s infinite;
  }

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 215, 0, 0.5);
    }
    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 215, 0, 0);
    }
    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 215, 0, 0);
    }
  }

  .cloud {
    position: absolute;
    border-radius: 50%;
    background: #333;
    opacity: 0.6;
    animation: movingClouds 40s linear infinite;
  }

  @keyframes movingClouds {
    from {
      transform: translateX(-100px);
    }
    to {
      transform: translateX(100px);
    }
  }

  .blur-item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #2a2a2a;
    filter: blur(8px);
    z-index: -1;
  }
`;

export default Tooltip;
