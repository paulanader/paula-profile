import { Card } from "react-bootstrap";
import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 400px;
  bottom: 75px;
  border-style: none;
  background-color: var(--color-gray);
  z-index: 1;

  &:after {
    content: "";
    /* position: absolute; */
    border-style: solid;
    border-width: 7px 7px 0;
    border-color: var(--color-gray) transparent;
    display: block;
    width: 0;
    z-index: 1;
    bottom: -20px;
    left: -51%;
    transform: translate(-66%, -430%) rotate(90deg);
  }
`;

export const CardContent = styled(Card)`
  background-color: var(--color-gray);
  border: none;
`;
