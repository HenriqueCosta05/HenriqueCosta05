import * as Navbar from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';

export const Root = styled(Navbar.Root)`
    background-color: ${({ theme }) => theme.navbarBackground};
    position: relative;
    align-items: center;
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem;
    margin: 0;
    flex-wrap: nowrap;

    @media (max-width: 1024px) {
        margin: 0 auto;
        flex-wrap: wrap;
        gap: 10px;
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-direction: column;
        align-items: center;

       .first-child {
            flex-wrap: nowrap;
            display: flex;
            justify-content: space-between;
            width: 100%;
        }
    }

`;
