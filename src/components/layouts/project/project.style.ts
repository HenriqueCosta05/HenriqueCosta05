import { motion } from "motion/react";
import styled from "styled-components";

export const StyledDetailedProjectWrapper = styled(motion.div)`
    padding: 40px;
    background: var(--background, #f9fafb);
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 16px;
    position: relative;
    
    @media (max-width: 768px) {
        padding: 24px 16px;
    }
`;

export const StyledDetailedProjectTitle = styled(motion.h1)`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    background: linear-gradient(to right, #fb923c, #ef4444, #9333ea);
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

export const StyledDetailedProjectSubtitle = styled(motion.h3)`
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--text, #333);
    margin: 32px 0 16px 0;
    position: relative;
    
    &:before {
        content: '';
        position: absolute;
        left: 0;
        bottom: -4px;
        width: 40px;
        height: 3px;
        background: linear-gradient(to right, #fb923c, #ef4444, #9333ea);
        border-radius: 2px;
    }
    
    @media (max-width: 768px) {
        font-size: 1.25rem;
        margin: 24px 0 12px 0;
    }
`;

export const StyledDetailedProjectDescription = styled(motion.p)`
    font-size: 1.125rem;
    line-height: 1.7;
    color: var(--text, #666);
    margin-bottom: 24px;

    @media (min-width: 768px) {
        font-size: 1.2rem;
    }
`;

export const StyledDetailedProjectButtonWrapper = styled(motion.div)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 16px;
    margin-top: 40px;
    
    @media (max-width: 768px) {
        justify-content: center;
        margin-top: 32px;
    }
`;

export const StyledDetailedProjectImage = styled(motion.img)`
    width: 100%;
    height: 75vh;
    border-radius: 6px;
    margin: 24px 0;
    object-fit: cover;
`;

export const StyledTechStackContainer = styled(motion.div)`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin: 16px 0 32px 0;
`;

export const StyledTechChip = styled(motion.span)`
    display: inline-flex;
    align-items: center;
    padding: 8px 16px;
    background: var(--background);
    border: 1px solid rgba(177, 108, 234, 0.2);
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 500;
    color: var(--text);
    transition: all 0.3s ease;
    cursor: default;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(177, 108, 234, 0.3);
        background: linear-gradient(to right, #fb923c, #ef4444, #9333ea);
        color: white;
        border-color: transparent;
    }
    
    @media (max-width: 768px) {
        padding: 6px 12px;
        font-size: 0.8rem;
    }
`;

export const StyledFeatureList = styled(motion.ul)`
    list-style: none;
    padding: 0;
    margin: 20px 0 32px 0;
    display: grid;
    gap: 16px;
    width: 100%;
    @media (min-width: 768px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }
`;

export const StyledFeatureItem = styled(motion.li)`
    position: relative;
    padding: 16px 20px 16px 48px;
    background: var(--background);
    border: 1px solid rgba(177, 108, 234, 0.15);
    border-radius: 12px;
    color: var(--text);
    font-size: 1rem;
    line-height: 1.6;
    transition: all 0.3s ease;
    
    &:before {
        content: '✓';
        position: absolute;
        left: 16px;
        top: 50%;
        transform: translateY(-50%);
        width: 24px;
        height: 24px;
        background: linear-gradient(to right, #fb923c, #ef4444, #9333ea);
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.75rem;
        font-weight: bold;
    }
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }
`;

export const StyledChallengeList = styled(motion.ul)`
    list-style: none;
    padding: 0;
    margin: 20px 0 32px 0;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const StyledChallengeItem = styled(motion.li)`
    position: relative;
    padding: 20px 24px 20px 56px;
    border: 1px solid rgba(177, 108, 234, 0.15);
    border-radius: 12px;
    color: var(--text);
    font-size: 1rem;
    line-height: 1.6;
    transition: all 0.3s ease;
    
    &:before {
        content: '🎯';
        position: absolute;
        left: 20px;
        top: 20px;
        width: 28px;
        height: 28px;
        color: white;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875rem;
    }
    
    &:hover {
        transform: translateX(4px);
    }
`;