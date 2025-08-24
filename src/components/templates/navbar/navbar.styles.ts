import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Link from "next/link";

export const StyledHeader = styled.header`
    position: relative;
`;

export const StyledContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px 20px 0;

    @media (min-width: 1024px) {
        padding: 20px 80px 0;
    }
`;

export const StyledNav = styled.nav``;

export const StyledNavContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 12px;
`;

export const StyledMenuIcon = styled.svg`
    width: 24px;
    height: 24px;
    cursor: pointer;

    @media (min-width: 768px) {
        width: 32px;
        height: 32px;
    }

    @media (min-width: 1024px) {
        display: none;
    }
`;

export const StyledDesktopMenu = styled.div`
    display: none;
    gap: 24px;
    font-weight: 500;

    @media (min-width: 1024px) {
        display: flex;
    }

    @media (min-width: 1280px) {
        gap: 32px;
    }
`;

export const StyledNavLink = styled(Link, {
    shouldForwardProp: (prop) => prop !== '$isActive'
}) <{ $isActive?: boolean }>`
    margin: 20px 0;
    transition: opacity 0.075s;
    text-decoration: none;
    color: inherit;
    opacity: ${props => props.$isActive ? 0.5 : 1};

    &:hover {
        opacity: 0.5;
    }
`;

export const StyledArrowIcon = styled.svg`
    width: 16px;
    height: 16px;
`;

export const StyledMobileMenu = styled(motion.div)`
    position: absolute;
    left: 0;
    top: 56px;
    width: 100%;
    overflow: hidden;
    background-color: white;
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

    @media (min-width: 1024px) {
        display: none;
    }
`;

export const StyledMobileMenuContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    font-weight: 500;
`;

export const StyledMobileNavLink = styled(Link, {
    shouldForwardProp: (prop) => prop !== '$isActive'
}) <{ $isActive?: boolean }>`
    margin: 20px 0;
    transition: opacity 0.075s;
    text-decoration: none;
    color: inherit;
    opacity: ${props => props.$isActive ? 0.5 : 1};

    &:hover {
        opacity: 0.5;
    }
`;

export const StyledMobileContactLink = styled(StyledMobileNavLink)`
    display: flex;
    align-items: center;
    gap: 8px;
`;
