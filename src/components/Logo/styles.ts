import { Link } from "react-scroll";
import styled from "styled-components";

export const Title = styled(Link)`
  text-decoration: none;
  color: var(--color-black);
  cursor: pointer;

  h1 {
    font-weight: 900;
    line-height: 0.05rem;
    font-size: 3rem;
    word-spacing: 0.0025rem;
  }

  span {
    font-weight: 900;
    font-size: 4rem;
  }
`;
