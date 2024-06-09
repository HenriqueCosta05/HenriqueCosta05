import styled from "styled-components";

export const BannerHeading = styled.h1`
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
  text-color: ${(props) => props.theme.text};
  margin: 1rem;
`;
