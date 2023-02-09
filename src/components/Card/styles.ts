import { Link } from "react-router-dom";
import styled from "styled-components";

export const Cover = styled.div`
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 50vh;
`;

export const Container = styled.div`
  transition: transform 300ms;
  &:hover {
    transform: scale(1.05);
    z-index: 1;
    box-shadow: 0 0 5px var(--color-gray);
  }
`;

export const LinkStyle = styled(Link)`
  text-decoration: none;
  color: black;
  font-weight: 700;
`;
