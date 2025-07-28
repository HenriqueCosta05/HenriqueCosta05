"use client";

import { CustomBtnProps } from "./button.interface";
import { StyledLink, ButtonContainer, StyledMotionButton } from "./button.styles";

export default function CustomBtn({ className, txt, href }: CustomBtnProps) {
    return (
        <StyledLink href={href}>
            <ButtonContainer>
                <StyledMotionButton
                    initial={{ right: "8px", bottom: "8px" }}
                    whileHover={{ right: 0, bottom: 0 }}
                    className={className}
                >
                    {txt}
                </StyledMotionButton>
            </ButtonContainer>
        </StyledLink>
    );
}
