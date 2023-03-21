import { Link } from "react-router-dom";
import styled from "styled-components";

export const ColorFooter = styled.footer`
  background-color: var(--color-purple);
  padding: 30px;
  @media (max-width: 576px) {
    padding-top: 25px;
    padding-bottom: 25px;
  }
`;

export const Signature = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  transition: transform 300ms;

  :hover {
    text-decoration: none;
    color: white;
    font-weight: 900;
    font-size: 1.1rem;
    transform: scale(1.05);
    z-index: 1;
  }
`;
