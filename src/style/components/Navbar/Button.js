import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({ theme }) => theme.backgroundSecondary};
    color: ${({ theme }) => theme.text};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    width: max-content;
    height: 100%;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.backgroundSecondary};
        color: ${({ theme }) => theme.text};
    }

    @media (max-width: 1024px) {
        width: 100%;
    }
    `;