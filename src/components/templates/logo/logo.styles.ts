import styled from "@emotion/styled";
import Link from "next/link";

export const StyledLogoContainer = styled(Link)`
    color: #000 !important;
    text-decoration: none;
    font-size: 15px;
    font-weight: 700;
    font-style: italic;
    color: inherit;
    cursor: pointer;
    transition: opacity 0.3s ease;

    &:hover {
        opacity: 0.8;
    }

    @media (min-width: 640px) {
        font-size: 16px;
    }

    @media (min-width: 768px) {
        font-size: 24px;
    }

    @media (min-width: 1024px) {
        font-weight: 700;
    }
`;

export const StyledGradientText = styled.span`
    background: linear-gradient(to right, #c084fc, #ef4444, #ea580c);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
`;