import { Button } from "react-bootstrap";
import styled from "styled-components";

export const ButtonContainer = styled(Button)`
  border: none;
  background-color: transparent;
  transition: transform 300ms;

  &:hover {
    border: none;
    background-color: transparent;
    transform: scale(1.05);
    z-index: 1;
  }
`;
