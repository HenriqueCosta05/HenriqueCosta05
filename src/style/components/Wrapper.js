import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: ${(props) =>
    props.background === "primary"
      ? props.theme.background
      : props.theme.backgroundSecondary};
  color: ${(props) => props.theme.text};
  font-size: 4rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
  flex-wrap: nowrap;

  @media (max-width: 1024px) {
    display: flex;
    font-size: 2rem;
    width: 100%;
    max-width: 100%;
    flex-wrap: wrap;
    border: none;
  }
`;
