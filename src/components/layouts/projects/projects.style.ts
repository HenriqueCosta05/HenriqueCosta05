import { Tab, Tabs } from "@mui/material";
import { motion } from "motion/react";
import styled from "styled-components";

export const StyledProjectSection = styled(motion.section)`
    padding: 80px 20px;
    background: var(--background, #fff);
    max-width: 1600px;
    margin: 20px auto;
    text-align: center;

    @media (max-width: 768px) {
        padding: 60px 16px;
    }

    @media (min-width: 1200px) {
        padding: 100px 40px;
    }
`;

export const StyledProjectTitle = styled(motion.h2)`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    background: linear-gradient(to right, #1e40af, #1e3a8a, #000000);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 3rem;
        margin-bottom: 24px;
    }
`;


export const StyledProjectGrid = styled(motion.div)`
    display: grid;
    margin-top: 48px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 32px;

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 24px;
        margin-top: 32px;
        padding: 0 8px;
    }

    @media (min-width: 1200px) {
        gap: 40px;
        margin-top: 56px;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    }
`;

export const StyledProjectCard = styled(motion.div)`
    width: 100%;
    will-change: transform;
    transform-style: preserve-3d;
    backface-visibility: hidden;

    &:nth-child(even) {
        transform: translateY(20px);
    }

    @media (max-width: 768px) {
        &:nth-child(even) {
            transform: translateY(0);
        }
    }
`;

export const StyledProjectDescription = styled(motion.p)`
    font-size: 1.125rem;
    color: #666;
    margin-bottom: 40px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
    line-height: 1.6;
    text-align: center;

    @media (min-width: 600px) {
        font-size: 1.25rem;
    }
`;

export const StyledTabsContainer = styled(Tabs)`
    margin: 32px auto;
    max-width: 1200px;
    display: flex;
    justify-content: center;

    .MuiTabs-indicator {
        background: linear-gradient(to right, #1e40af, #1e3a8a, #000000);
        height: 3px;
        border-radius: 3px 3px 0 0;
    }

    .MuiTabs-flexContainer {
        gap: 8px;
        justify-content: center;

        @media (max-width: 768px) {
            justify-content: flex-start;
        }
    }

    @media (max-width: 768px) {
        margin: 24px 0;
    }
`;

export const StyledTab = styled(Tab)`
    text-transform: none !important;
    font-weight: 500 !important;
    font-size: 16px !important;
    color: #666 !important;
    min-width: 100px !important;
    transition: all 0.3s ease !important;
    padding: 12px 20px !important;

    &.Mui-selected {
        font-weight: 700 !important;
        background: linear-gradient(to right, #1e40af, #1e3a8a, #000000) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
    }

    &:hover {
        background: linear-gradient(to right, #1e40af, #1e3a8a, #000000) !important;
        -webkit-background-clip: text !important;
        -webkit-text-fill-color: transparent !important;
        background-clip: text !important;
    }

    @media (max-width: 768px) {
        font-size: 14px !important;
        min-width: 80px !important;
        padding: 10px 16px !important;
    }
`;

export const StyledEmptyState = styled(motion.div)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 80px 20px;
    text-align: center;
    min-height: 400px;

    @media (max-width: 768px) {
        padding: 60px 20px;
        min-height: 300px;
    }
`;

export const StyledEmptyStateIcon = styled.div`
    font-size: 4rem;
    margin-bottom: 24px;
    opacity: 0.3;

    @media (max-width: 768px) {
        font-size: 3rem;
        margin-bottom: 16px;
    }
`;

export const StyledEmptyStateTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 600;
    color: #333;
    margin: 0 0 12px 0;

    @media (max-width: 768px) {
        font-size: 1.25rem;
    }
`;

export const StyledEmptyStateText = styled.p`
    font-size: 1rem;
    color: #666;
    margin: 0;
    max-width: 400px;

    @media (max-width: 768px) {
        font-size: 0.9rem;
    }
`;
