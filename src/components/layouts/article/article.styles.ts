import { motion } from "motion/react";
import styled from "styled-components";

export const StyledArticleContainer = styled(motion.div)`
    padding: 40px;
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 16px;
`

export const StyledArticleTitle = styled(motion.h1)`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    background: linear-gradient(to right, var(--primary), var(--secondary), var(--tertiary));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 3rem;
        margin-bottom: 24px;
    }

    @media (max-width: 768px) {
        font-size: 2rem;
        margin-bottom: 16px;
    }
`;

export const StyledFeaturedArticleWrapper = styled(motion.div)`
    padding: 20px;
    max-width: 100%;
    margin: 0 auto;
    border-radius: 12px;
    background: var(--background, #f9fafb);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
    }
`;

export const StyledFeaturedArticleHeader = styled(motion.h2)`
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 10px;
    background: linear-gradient(to right, var(--primary), var(--secondary));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    @media (min-width: 768px) {
        font-size: 2rem;
    }
`;