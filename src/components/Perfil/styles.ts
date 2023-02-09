import styled from "styled-components";

export const Cover = styled.div`
  background-size: cover;
  background-position: center center;
  width: 100%;
  height: 80vh;
`;

export const Title = styled.h1`
  font-weight: 900;
`;

export const SubTitle = styled.h2`
  font-size: 1.5rem;
`;

export const Span = styled.p`
  color: var(--color-light);
  font-weight: bold;
`;

export const Alignment = styled.div`
  color: red;
  /* @media (min-width: 320px) {
    align-items: start;
    margin-top: 20px;
  }
  @media (min-width: 1400px) {
    align-items: center;
    justify-content: center;
  } */
`;
