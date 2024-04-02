import * as Navbar from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';

export const Link = styled(Navbar.Link)`
    background-color: ${({ theme }) => theme.navbarBackground};
    color: ${({ theme }) => theme.text};
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem 1rem;
    width: max-content;
    border-radius: 5px;
`;
