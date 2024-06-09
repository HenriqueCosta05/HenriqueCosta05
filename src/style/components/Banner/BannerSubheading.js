import styled from "styled-components";

export const BannerSubheading = styled.h2`
  font-size: 1.5rem;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: left;
  text-color: ${(props) => props.theme.text};
  margin: 2rem;
`;
