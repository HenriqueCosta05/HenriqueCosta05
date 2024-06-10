import styled from "styled-components";

export const Button = styled.button`
  font-size: 1.6rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  text-align: center;
  padding: 1rem 2rem;
  background-color: ${(props) => props.background};
  color: ${(props) => props.text};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-top: 2rem;

  &:hover {
    background-color: ${(props) => props.theme.secondary};
  }
`;
