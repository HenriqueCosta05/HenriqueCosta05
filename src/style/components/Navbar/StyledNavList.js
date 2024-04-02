import { NavList } from "../../../components/Navbar/Navlist";
import styled from "styled-components";

export const StyledNavList = styled(NavList)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    transform-origin: top;
    transition: transform 0.5s ease-in-out;
    @media (max-width: 1024px) {
        transform: ${props => (props.open ? "translateY(0)" : "translateY(-150%)")};
    }
`;
