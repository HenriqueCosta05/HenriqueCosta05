import styled from "styled-components";

export const SocialButton = styled.a`
  background-color: ${(props) => props.theme.background};
  padding: 1rem;
  border-radius: 50%;
  cursor: pointer;
  margin: 0.5rem;
  transition: all 0.3s ease-in-out;
  border: 1px solid ${(props) => props.theme.text};
  background-image: url(${(props) => props.backgroundImage});
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;

  &:hover {
    scale: 1.1;
    background-color: ${(props) => props.theme.backgroundTertiary};
  }
`;
