import styled from "styled-components";

export const Subheading = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: left;
  text-color: ${(props) => props.theme.text};
  margin: 2rem;

  @media (max-width: 1024px) {
    font-size: 1rem;
  }
`;
