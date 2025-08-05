"use client";

import { useTranslations } from "next-intl";
import {
    StyledHeroSection,
    StyledHeroContent,
    StyledHeroTitle,
    StyledGradientText,
    StyledHeroDescription,
    StyledActionContainer,
    StyledDownloadLink,
    StyledArrowIcon,
    StyledProfileImage
} from "./hero.styles";
import { Button } from "@/components/base";

const Hero = () => {
    const t = useTranslations("hero");
    return (
        <StyledHeroSection>
            <StyledHeroContent
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <StyledHeroTitle>
                    <StyledGradientText>{t("headerHighlight")}</StyledGradientText>
                    {" "}{t("header")}
                </StyledHeroTitle>

                <StyledHeroDescription>
                    {t("description")}
                </StyledHeroDescription>

                <StyledActionContainer>
                    <Button
                        txt={t("cta")}
                        href={t("contactHref")}
                    />
                    <StyledDownloadLink
                        href={t("resumeUrl")}
                        target="_blank"
                        rel="noopener noreferrer"
                        download="CV-Henrique-Costa.pdf"
                    >
                        <span>{t("downloadResume")}</span>
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
                initial={{ visibility: "hidden", scale: 0.5 }}
                animate={{ scale: 1, visibility: "visible" }}
                transition={{ duration: 0.5 }}
                src={t("image")}
                alt="profile image"
            />
        </StyledHeroSection>
    );
};

export default Hero;