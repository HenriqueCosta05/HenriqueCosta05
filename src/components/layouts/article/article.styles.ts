import { motion } from "motion/react";
import styled from "styled-components";

export const StyledArticleContainer = styled(motion.div)`
    padding: 40px;
    max-width: 1440px;
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

export const StyledArticleExcerpt = styled(motion.div)`
    font-size: 1.25rem;
    color: var(--text-secondary, #666);
    margin-bottom: 32px;
    line-height: 1.7;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 400;
    letter-spacing: 0.01em;

    @media (max-width: 768px) {
        font-size: 1rem;
        margin-bottom: 20px;
        padding: 0 12px;
    }
`