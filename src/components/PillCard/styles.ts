import styled from "styled-components";

export const Cover = styled.div`
  background-size: cover;
  background-position: center center;
  border-radius: 100px;
  height: 100px;
  width: 100px;
`;

export const Container = styled.div`
  border-radius: 100px 100px 100px 100px;
  border: transparent;
  box-shadow: 0 0 5px var(--color-gray);
  width: 100%;
`;

export const Title = styled.span`
  font-weight: bold;
  color: var(--color-gray);
  font-size: 1.5rem;
`;

export const Subtitle = styled.p`
  font-size: 0.7rem;
`;
