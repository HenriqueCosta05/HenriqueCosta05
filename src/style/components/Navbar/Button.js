import styled from "styled-components";

export const Button = styled.button`
    background-color: ${({ theme }) => theme.backgroundSecondary};
    color: ${({ theme }) => theme.text};
    padding: 0.5rem 1rem;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    width: max-content;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: ${({ theme }) => theme.backgroundSecondary};
        color: ${({ theme }) => theme.text};
    }

    @media (max-width: 968px) {
        width: 100%;
        margin: auto;
    }
    `;