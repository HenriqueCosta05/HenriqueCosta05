import { NavList } from "../../../components/Navbar/Navlist";
import styled from "styled-components";

export const ResponsiveNavList = styled(NavList)`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    transition: max-height 0.5s ease-in-out;
    max-height: ${props => (props.open ? "750px" : "0")};
    overflow: hidden;
    border-top: 1px solid ${({ theme }) => theme.text};
    @media (max-width: 1024px) {
        max-height: ${props => (props.open ? "750px" : "0")};
    }
`;