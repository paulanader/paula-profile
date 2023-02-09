import styled from "styled-components";

export const LinkDecoration = styled.a`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: var(--blue);
  text-decoration: none;
  color: var(--white);
  &:hover {
    color: var(--white);
    transform: scale(1.15);
    z-index: 1;
    box-shadow: 0 0 5px var(--color-gray);
  }
  & > svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  transition: transform 300ms;
`;
