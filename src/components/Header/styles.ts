import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-image: linear-gradient(
    to bottom,
    #f3f2ef 70%,
    rgba(243, 242, 239, 0.5)
  );
  margin-bottom: 10px;
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
