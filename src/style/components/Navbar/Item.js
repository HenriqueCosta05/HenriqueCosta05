import * as Navbar from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';

export const Item = styled(Navbar.Item)`
    background-color: ${({ theme }) => theme.navbarBackground};
    color: ${({ theme }) => theme.text};
    border: none;
    width: 100%;
    margin: auto;
    list-style: none;
`;
