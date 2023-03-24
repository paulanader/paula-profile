import { Col } from "react-bootstrap";
import styled from "styled-components";

export const Border = styled(Col)`
  @media (min-width: 992px) {
    border-right: 3px solid var(--color-purple);
    position: relative;
    padding-right: 10px;
    &:after {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      background-color: var(--color-purple);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      right: 0;
      transform: translate(66%, -50%);
      z-index: 1;
    }
  }

  @media (max-width: 991px) {
    border-left: 3px solid var(--color-purple);
    padding-left: 30px;
    position: relative;
    padding-left: 10px;
    &:after {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      background-color: var(--color-purple);
      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translate(-66%, -50%);
      z-index: 1;
    }
  }
`;

export const Dots = styled.div`
  width: 10px;
  height: 50px;
  position: relative;
  border-left: 3px dotted black;

  @media (max-width: 992px) {
    margin-left: -11px;
  }
`;
