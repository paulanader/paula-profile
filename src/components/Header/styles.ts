import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-image: linear-gradient(
    to bottom,
    #ffffff 70%,
    rgba(255, 255, 255, 0.5)
  );
  position: fixed;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
`;

export const List = styled.ul`
  cursor: pointer;

  @media (min-width: 320px) {
    align-items: start;
    margin-top: 15px;
  }
  @media (min-width: 1400px) {
    align-items: center;
  }
`;
