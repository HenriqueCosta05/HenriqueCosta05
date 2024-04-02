import styled from "styled-components";

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;

    .navbar {
        max-height: ${props => (props.open ? "500px" : "0")};
        overflow: hidden;
        transition: max-height 0.5s ease-in-out;
    }
`;