import { motion } from "motion/react";
import styled from "styled-components";

export const StyledCardWrapper = styled(motion.section)<{$orientation?: "horizontal" | "vertical"}>`
    background: var(--background, #fff);
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
    padding: 24px;
    transition: all 0.3s cubic-bezier(0.25, 0.1, 0.25, 1);
    cursor: pointer;
    border: 1px solid rgba(0, 0, 0, 0.05);
    position: relative;
    overflow: hidden;

    display: flex;
    flex-direction: ${props => props.$orientation === "horizontal" ? "row" :
        "column"};
    align-items: ${props => props.$orientation === "horizontal" ? "center" : "flex-start"};
    gap: 16px;
    
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
        transition: left 0.6s cubic-bezier(0.25, 0.1, 0.25, 1);
    }
    
    &:hover {
        transform: translateY(-8px) scale(1.02);
        box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
        border-color: rgba(196, 132, 252, 0.3);
        
        &::before {
            left: 100%;
        }
    }
    
    &:active {
        transform: translateY(-4px) scale(1.01);
    }
`;

export const StyledCardImage = styled.div`
    width: 100%;
    height: 350px;
    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 16px;
    background: linear-gradient(135deg, var(--primary, #b16cea), var(--secondary, #ff5e69));
    position: relative;
    
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: transform 0.4s cubic-bezier(0.25, 0.1, 0.25, 1);
        filter: brightness(1) contrast(1);
    }
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(135deg, rgba(196, 132, 252, 0.1), rgba(239, 68, 68, 0.1));
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    &:hover {
        img {
            transform: scale(1.1);
            filter: brightness(1.1) contrast(1.1);
        }
        
        &::after {
            opacity: 1;
        }
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
    text-align: left;
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

export const StyledCardRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 8px;
    margin-top: 16px;
    width: 100%;
`;

export const StyledCardBulletPoints = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
`;

export const StyledCardBulletPoint = styled.li`
    position: relative;
    padding-left: 16px;
    margin-bottom: 8px;

    &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: linear-gradient(135deg, var(--primary, #b16cea), var(--secondary, #ff5e69));
    }
`;