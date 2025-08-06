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

export const StyledProjectTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 20px;
    background: linear-gradient(to right, #c084fc, #ef4444, #ea580c);
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

export const StyledProjectGrid = styled.div`
    display: grid;
    margin-top: 48px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    
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

export const StyledProjectDescription = styled.p`
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