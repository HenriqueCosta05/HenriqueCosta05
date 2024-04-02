import * as Navbar from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';

export const List = styled(Navbar.List)`
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    @media (max-width: 1024px) {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin: 20px auto;
    }
`;
