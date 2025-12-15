import styled from "styled-components";

export const LanguagesContainer = styled.section`
    padding: 60px 20px;
    background: var(--background, #fff);
    margin: 0 auto;
`;

export const LanguagesTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 40px;
    background: linear-gradient(to right, #1e40af, #1e3a8a, #000000);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    text-align: center;

    @media (min-width: 768px) {
        font-size: 3rem;
    }
`;

export const LanguagesGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    max-width: 1200px;
    margin: 20px auto;

    @media (min-width: 600px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 900px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

export const LanguagesDescription = styled.p`
    font-size: 1.125rem;
    color: #666;
    margin-bottom: 40px;
    max-width: 800px;
    margin: 0 auto;

    @media (min-width: 600px) {
        font-size: 1.25rem;
    }
`;

export const LanguageCard = styled.div`
    background: var(--card-background, #f9f9f9);
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
    }
`;

export const LanguageName = styled.h3`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: var(--text-primary, #333);
`;

export const LanguageProficiency = styled.p`
    font-size: 1rem;
    color: var(--text-secondary, #666);
`;
