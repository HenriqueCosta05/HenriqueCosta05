import { motion } from "motion/react";
import styled from "styled-components";

export const StyledArticleContainer = styled(motion.div)`
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
    min-height: 100vh;

    @media (min-width: 768px) {
        padding: 40px;
    }

    @media (min-width: 1024px) {
        padding: 60px 80px;
    }
`;

export const StyledArticleHeader = styled.header`
    text-align: center;
    margin-bottom: 48px;
    padding-bottom: 32px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
        margin-bottom: 64px;
        padding-bottom: 40px;
    }
`;

export const StyledArticleTitle = styled(motion.h1)`
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 16px;
    background: linear-gradient(to right, #1e40af, #1e3a8a, #000000);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    line-height: 1.2;

    @media (min-width: 768px) {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    @media (min-width: 1024px) {
        font-size: 3rem;
        margin-bottom: 24px;
    }
`;

export const StyledArticleMeta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    font-size: 0.875rem;
    color: var(--text-secondary, #666);
    margin-bottom: 24px;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        gap: 16px;
        font-size: 0.95rem;
    }
`;

export const StyledArticleExcerpt = styled(motion.div)`
    font-size: 1.125rem;
    color: var(--text-secondary, #666);
    line-height: 1.7;
    font-weight: 400;
    letter-spacing: 0.01em;
    font-style: italic;
    text-align: center;
    max-width: 800px;
    margin: 0 auto;

    @media (min-width: 768px) {
        font-size: 1.25rem;
    }
`;

export const StyledArticleContent = styled(motion.div)`
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.8;
    font-size: 1rem;
    color: var(--text-primary, #333);

    @media (min-width: 768px) {
        font-size: 1.125rem;
        line-height: 1.8;
    }

    h1, h2, h3, h4, h5, h6 {
        margin: 32px 0 16px 0;
        font-weight: 600;
        line-height: 1.3;
        color: var(--text-primary, #333);
    }

    h1 {
        font-size: 2rem;
        border-bottom: 2px solid var(--primary, #b16cea);
        padding-bottom: 8px;
    }

    h2 {
        font-size: 1.75rem;
        color: var(--primary, #b16cea);
    }

    h3 {
        font-size: 1.5rem;
    }

    h4 {
        font-size: 1.25rem;
    }

    p {
        margin: 16px 0;
        text-align: justify;
    }

    ul, ol {
        margin: 16px 0;
        padding-left: 24px;
    }

    li {
        margin: 8px 0;
    }

    blockquote {
        margin: 24px 0;
        padding: 16px 24px;
        border-left: 4px solid var(--primary, #b16cea);
        background: rgba(30, 64, 175, 0.05);
        font-style: italic;
        border-radius: 0 8px 8px 0;
    }

    code {
        background: rgba(0, 0, 0, 0.05);
        padding: 2px 6px;
        border-radius: 4px;
        font-family: 'Courier New', monospace;
        font-size: 0.9em;
    }

    pre {
        background: rgba(0, 0, 0, 0.05);
        padding: 16px;
        border-radius: 8px;
        overflow-x: auto;
        margin: 16px 0;
    }

    img {
        max-width: 100%;
        height: auto;
        border-radius: 8px;
        margin: 24px 0;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }

    a {
        color: var(--primary, #b16cea);
        text-decoration: none;
        border-bottom: 1px solid transparent;
        transition: border-color 0.2s ease;

        &:hover {
            border-bottom-color: var(--primary, #b16cea);
        }
    }

    strong {
        font-weight: 600;
        color: var(--text-primary, #333);
    }

    em {
        font-style: italic;
    }
`;

export const StyledLoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 60vh;
    gap: 16px;
`;

export const StyledLoadingSpinner = styled.div`
    width: 40px;
    height: 40px;
    border: 3px solid rgba(30, 64, 175, 0.2);
    border-top: 3px solid var(--tertiary);
    border-radius: 50%;
    animation: spin 1s linear infinite;

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

export const StyledLoadingText = styled.p`
    color: var(--text-secondary, #666);
    font-size: 1rem;
`;
