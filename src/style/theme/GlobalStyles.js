import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.text};
    }

    html {
        width: 100%;
        max-width: 100%;
        height: 100%;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    *, *::before, *::after {
        box-sizing: inherit;
        margin: 0;
        padding: 0;
        border: 0;
        font-family: 'Poppins', sans-serif;
    }
`;
