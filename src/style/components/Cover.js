import styled from "styled-components";

export const Cover = styled.div`
  background-image: url(${(props) =>
    props.imageType === "about"
      ? props.theme.aboutImage
      : props.theme.coverImage});
  background-position: center;
  background-repeat: no-repeat;
  width: ${(props) => (props.imageType === "about" ? "40%" : "50%")};
  margin: auto 0.5rem;
  height: ${(props) => (props.imageType === "about" ? "80%" : "100vh")};
  background-size: ${(props) => (props.imageType === "about" ? "cover" : "")};
  @media (max-width: 1024px) {
    display: flex;
    background-size: cover;
    width: 95vw;
    height: 50vh;
    padding: 1rem 0;
  }
`;
