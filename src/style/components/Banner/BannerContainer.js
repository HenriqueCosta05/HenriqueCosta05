import styled from "styled-components";

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 45%;
  height: 100vh;
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;

  @media (max-width: 1024px) {
    display: flex;
    font-size: 2rem;
    border: none;
    height: max-content;
    width: 100%;
    padding: 1rem 0;
  }
`;
