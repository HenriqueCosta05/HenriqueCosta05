import styled from "styled-components";
  
export const Button = styled.button < { $bgColor: string, $border: string } > `
    padding: 1rem;
    background-color: ${props => props.$bgColor || "#090E16"};
    border: ${props => props.$border || "1px solid #7B4AE2"};
    border-radius: 15px;
`;