import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Link from "next/link";

export const StyledFooter = styled.footer`
    position: relative;
    background: var(--background, #fff);
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 80px;
`;

export const StyledFooterContainer = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px 20px;

    @media (min-width: 1024px) {
        padding: 60px 80px 30px;
    }
`;

export const StyledFooterContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 32px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
    }
`;

export const StyledFooterSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const StyledFooterTitle = styled.h3`
    font-size: 1.125rem;
    font-weight: 600;
    color: #333;
    margin: 0;
    background: linear-gradient(to right, #fb923c, #ef4444, #9333ea);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
`;

export const StyledFooterNav = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 12px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 24px;
    }
`;

export const StyledFooterLink = styled(Link)`
    transition: opacity 0.075s;
    text-decoration: none;
    color: #666;
    font-size: 0.95rem;

    &:hover {
        opacity: 0.5;
        color: var(--primary, #b16cea);
    }
`;

export const StyledSocialLinks = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;
`;

export const StyledSocialLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba(177, 108, 234, 0.1);
    color: var(--secondary, #b16cea);
    text-decoration: none;
    transition: all 0.3s ease;

    &:hover {
        background: linear-gradient(to right, #fb923c, #ef4444, #9333ea);
        color: white;
        transform: translateY(-2px);
    }
`;

export const StyledFooterBottom = styled.div`
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    margin-top: 32px;
    padding-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    text-align: center;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
    }
`;

export const StyledCopyright = styled.p`
    font-size: 0.875rem;
    color: #666;
    margin: 0;
`;

export const StyledFooterIcon = styled.svg`
    width: 20px;
    height: 20px;
`;