import styled from "styled-components";

export const BannerCover = styled.div`
  background-image: url(${(props) => props.src || props.theme.coverImage});
  background-position: center;
  background-repeat: no-repeat;
  width: 50%;
  margin: auto 0.5rem;
  height: 100%;

  @media (max-width: 1024px) {
    display: flex;
    background-size: cover;
    width: 95vw;
    height: 50vh;
  }
`;
