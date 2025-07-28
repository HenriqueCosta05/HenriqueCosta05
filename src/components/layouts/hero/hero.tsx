"use client";

import { HeroProps } from "./hero.interface";
import {
    StyledHeroSection,
    StyledHeroContent,
    StyledHeroTitle,
    StyledGradientText,
    StyledHeroDescription,
    StyledActionContainer,
    StyledCustomButton,
    StyledDownloadLink,
    StyledArrowIcon,
    StyledProfileImage
} from "./hero.styles";

const Hero = ({
    title = "soluções que impulsionam o seu negócio.",
    subtitle = "Olá! Sou Henrique, desenvolvedor Front-end. Eu crio aplicações web de alta qualidade e desempenho.",
    resumeUrl = "/CV - Henrique Costa.pdf",
    contactHref = "/contact"
}: HeroProps) => {
    const profileImageSrc = "/profile_image.jpg"; 
    return (
        <StyledHeroSection>
            <StyledHeroContent
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <StyledHeroTitle>
                    <StyledGradientText>Eu desenvolvo </StyledGradientText>
                    {title}
                </StyledHeroTitle>

                <StyledHeroDescription>
                    {subtitle}
                </StyledHeroDescription>

                <StyledActionContainer>
                    <StyledCustomButton href={contactHref}>
                        Entre em contato!
                    </StyledCustomButton>

                    <StyledDownloadLink
                        href={resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        download="CV-Henrique-Costa.pdf"
                    >
                        <span>Baixe meu CV</span>
                        <StyledArrowIcon
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                            />
                        </StyledArrowIcon>
                    </StyledDownloadLink>
                </StyledActionContainer>
            </StyledHeroContent>

            <StyledProfileImage
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                src={profileImageSrc}
                alt="profile image"
                priority
                
            />
        </StyledHeroSection>
    );
};

export default Hero;