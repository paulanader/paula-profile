import styled from "styled-components";
import { Link } from "react-scroll";

export const Title = styled.span`
  font-weight: 900;
  font-size: 1rem;
  cursor: pointer;
`;

export const UnderLine = styled(Link)`
  text-decoration: none;
  color: var(--color-dark);
  cursor: pointer;

  &:hover {
    text-decoration: underline 1.5px var(--color-dark);
    color: var(--color-dark);
  }
`;
