import * as Navbar from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';

export const Root = styled(Navbar.Root)`
    background-color: ${({ theme }) => theme.navbarBackground};
    position: relative;
    align-items: center;
    display: flex;
    width: 100%;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem;
    margin: 0;
    flex-wrap: nowrap;


`;
