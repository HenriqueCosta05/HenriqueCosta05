import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
  border: none;

  @media (max-width: 1024px) {
    display: flex;
    font-size: 2rem;
    flex-wrap: wrap;
    max-width: 100%;
    width: 90%;
  }
`;
