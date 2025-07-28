import styled from "@emotion/styled";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export const StyledHeroSection = styled.section`
    margin: 80px auto;
    align-items: center;
    gap: 64px;
    max-width: 80%;
    @media (min-width: 1280px) {
        display: flex;
    }
`;

export const StyledHeroContent = styled(motion.div)`
    max-width: 876px;
`;

export const StyledHeroTitle = styled.h1`
    margin-bottom: 16px;
    font-size: 40px;
    font-weight: 700;
    line-height: 110%;

    @media (min-width: 768px) {
        font-size: 68px;
    }

    @media (min-width: 1024px) {
        font-size: 70px;
    }
`;

export const StyledGradientText = styled.span`
    background: linear-gradient(to right, #c084fc, #ef4444, #ea580c);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
`;

export const StyledHeroDescription = styled.p`
    margin-bottom: 64px;
    font-size: 19px;
    color: #666;

    @media (min-width: 1024px) {
        font-size: 22px;
    }
`;

export const StyledActionContainer = styled.div`
    margin-bottom: 64px;
    display: flex;
    flex-direction: column;
    gap: 16px;

    @media (min-width: 768px) {
        flex-direction: row;
    }

    @media (min-width: 1280px) {
        align-items: center;
    }
`;

export const StyledCustomButton = styled(Link)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 12px 24px;
    width: 180px;
    background: linear-gradient(to right, #c084fc, #ef4444, #ea580c);
    color: white;
    text-decoration: none;
    border-radius: 8px;
    font-weight: 600;
    transition: transform 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
    }
`;

export const StyledDownloadLink = styled(Link)`
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 18px;
    font-weight: 700;
    color: inherit;
    text-decoration: none;
    cursor: pointer;
    transition: opacity 0.2s ease;

    &:hover {
        opacity: 0.8;
    }
`;

export const StyledArrowIcon = styled.svg`
    width: 16px;
    height: 16px;
    transition: transform 0.5s ease;

    ${StyledDownloadLink}:hover & {
        transform: translateX(12px);
    }
`;

export const StyledProfileImage = styled(motion.img)`
    margin: 0 auto;
    width: 100%;
    border-radius: 50%;
    width: 100%;
    max-width: 500px;
    display: flex;
    
    @media (min-width: 1024px) {
        width: 500px;
    }
`;