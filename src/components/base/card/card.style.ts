import { motion } from "motion/react";
import styled from "styled-components";

export const StyledCardWrapper = styled(motion.section)`
    background: var(--background, #fff);
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    padding: 24px;
    transition: all 0.3s ease;
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.05);
    
    &:hover {
        transform: translateY(-4px);
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
        border-color: rgba(0, 0, 0, 0.2);
    }
    width: 100%;
`;

export const StyledCardImage = styled.div`
    width: 100%;
    height: 200px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 16px;
    background: linear-gradient(135deg, var(--primary, #b16cea), var(--secondary, #ff5e69));
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.3s ease;
    }
    
    &:hover img {
        transform: scale(1.05);
    }
`;

export const StyledCardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    
`;

export const StyledCardTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    color: #333;
    margin: 0;
    line-height: 1.3;
    background: linear-gradient(to right, #c084fc, #ef4444, #ea580c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
`;

export const StyledCardSubtitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    width: 100%;
    gap: 4px;
`;

export const StyledCardSubtitle = styled.h4`
    font-size: 1rem;
    font-weight: 500;
    color: #666;
    margin: 0;
    line-height: 1.4;
`;

export const StyledCardDescription = styled.p`
    font-size: 0.95rem;
    color: #777;
    line-height: 1.6;
    margin: 0;
`;

export const StyledCardFlags = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin: 8px 0;
`;

export const StyledCardFlag = styled.span<{ $hovered?: boolean }>`
    background: ${props => props.$hovered
        ? 'linear-gradient(135deg, var(--primary, #b16cea), var(--secondary, #ff5e69))'
        : 'rgba(177, 108, 234, 0.1)'
    };
    color: ${props => props.$hovered ? '#fff' : 'var(--primary, #b16cea)'};
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
    transition: all 0.3s ease;
    border: 1px solid var(--primary, #b16cea);
    cursor: pointer;
    
    &:hover {
        background: linear-gradient(135deg, var(--primary, #b16cea), var(--secondary, #ff5e69));
        color: #fff;
        transform: translateY(-1px);
    }
`;

export const StyledCardCTA = styled(motion.a)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(135deg, var(--primary, #b16cea), var(--secondary, #ff5e69));
    color: #fff;
    text-decoration: none;
    padding: 12px 24px;
    border-radius: 8px;
    font-weight: 600;
    font-size: 0.95rem;
    margin-top: 8px;
    transition: all 0.3s ease;
    border: none;
    cursor: pointer;
    
    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 6px 20px rgba(177, 108, 234, 0.4);
        background: linear-gradient(135deg, var(--secondary, #ff5e69), var(--tertiary, #ff8a56));
    }
    
    &:active {
        transform: translateY(0);
    }
`; 