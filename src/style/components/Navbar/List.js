import * as Navbar from '@radix-ui/react-navigation-menu';
import styled from 'styled-components';

export const List = styled(Navbar.List)`
    display: flex;
    gap: 1rem;
    align-items: center;
    @media (max-width: 968px) {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    
    }
`;
