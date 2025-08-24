import { motion } from "motion/react";
import styled from "styled-components";

export const StyledExperienceSection = styled(motion.section)`
    padding: 60px 20px;
    background: var(--background, #fff);
    margin: 0 auto;
`;

export const StyledExperienceTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 40px;
    background: linear-gradient(to right, #fb923c, #ef4444, #9333ea);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;

export const StyledExperienceGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 1200px;
    margin: 20px auto;
`;

export const StyledExperienceDescription = styled.p`
    font-size: 1.125rem;
    color: #666;
    margin-bottom: 40px;
    max-width: 800px;
    margin: 0 auto;

    @media (min-width: 600px) {
        font-size: 1.25rem;
    }
`;