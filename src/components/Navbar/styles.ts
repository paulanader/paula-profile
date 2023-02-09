import styled from "styled-components";
import { Link } from "react-scroll";

export const Title = styled.span`
  font-size: 1.3rem;
  cursor: pointer;
`;

export const UnderLine = styled(Link)`
  text-decoration: none;
  color: var(--white);
  cursor: pointer;
`;

export const Line = styled.li`
  &.selected {
    color: var(--white);
    border-top: 4px solid var(--color-blue);
  }
`;
