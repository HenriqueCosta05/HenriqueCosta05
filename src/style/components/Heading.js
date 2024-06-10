import styled from "styled-components";

export const Heading = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
  color: ${(props) => props.theme.text};
  margin: 1rem;

  @media (max-width: 1024px) {
    font-size: 2.2rem;
  }
`;
