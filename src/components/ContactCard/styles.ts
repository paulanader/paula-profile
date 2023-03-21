import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  border-radius: 100px 100px 100px 100px;
  border: transparent;
  box-shadow: 0 0 5px var(--color-gray);
  width: 100%;
  transition: transform 300ms;

  &:hover {
    transform: scale(1.05);
    z-index: 1;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 1rem;

  @media (max-width: 321px) {
    font-size: 0.7rem;
  }

  @media (max-width: 376px) {
    font-size: 0.8rem;
  }
`;

export const LinkCard = styled(Link)`
  text-decoration: none;
  color: black;
  :hover {
    text-decoration: none;
    color: black;
  }
`;
