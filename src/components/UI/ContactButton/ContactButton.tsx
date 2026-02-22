import styled from "styled-components";
import { Link } from "react-router-dom";

const ContactButton = () => {
  return (
    <StyledLink to="/contact-us">
      <p className="text">Contact Us</p>
    </StyledLink>
  );
};

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 15px;
  gap: 15px;
  background-color: rgb(250, 204, 21);
  outline: 3px #181717 solid;
  outline-offset: -3px;
  border-radius: 5px;
  text-decoration: none;
  cursor: pointer;
  transition: 400ms;
  font-weight: 700;

  .text {
    color: black;
    transition: 400ms;
  }

  &:hover {
    background-color: transparent;
    box-shadow: 0 0 10px rgb(250, 204, 21);
  }

  &:hover .text {
    color: #fff;
  }
`;

export default ContactButton;
