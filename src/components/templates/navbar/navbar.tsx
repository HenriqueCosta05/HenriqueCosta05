"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Logo from "../logo/logo";
import { NavbarProps } from "./navbar.interface";
import {
    StyledHeader,
    StyledContainer,
    StyledNav,
    StyledNavContent,
    StyledMenuIcon,
    StyledDesktopMenu,
    StyledNavLink,
    StyledContactLink,
    StyledArrowIcon,
    StyledMobileMenu,
    StyledMobileMenuContent,
    StyledMobileNavLink,
    StyledMobileContactLink
} from "./navbar.styles";
import { useTranslations } from "next-intl";
import { Selector } from "@/components/base";
import { useLanguageSwitch } from "@/hooks";

const Navbar = ({ logoText = "Henrique", highlightedText = "Costa" }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const t = useTranslations("navbar");

    const { switchLanguage, locale } = useLanguageSwitch();
    
    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMobileLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <StyledHeader>
            <StyledContainer>
                <StyledNav>
                    <StyledNavContent>
                        <Logo
                            text={logoText}
                            highlightedText={highlightedText}
                            onClick={() => console.log("Logo clicked")}
                        />

                        <StyledMenuIcon
                            onClick={handleMenuToggle}
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                            />
                        </StyledMenuIcon>

                        <StyledDesktopMenu>
                            <StyledNavLink
                                href="/experience"
                                $isActive={pathname.includes("/experience")}
                            >
                                {t("menu.experience")}
                            </StyledNavLink>
                            <StyledNavLink
                                href="/projects"
                                $isActive={pathname.includes("/projects")}
                            >
                                {t("menu.projects")}
                            </StyledNavLink>
                            <StyledNavLink
                                href="/articles"
                                $isActive={pathname.includes("/articles")}
                            >
                                {t("menu.articles")}
                            </StyledNavLink>
                            <Selector
                                options={[
                                    {
                                        value: "en-US",
                                        label: "English",
                                        icon: (
                                            <img src="/us.svg" alt="English" width={24} height={24} />
                                        )
                                    },
                                    {
                                        value: "pt-BR",
                                        label: "Português",
                                        icon: (
                                            <img src="/pt.svg" alt="Português" width={24} height={24} />
                                        )
                                    },
                                    {
                                        value: "es-ES",
                                        label: "Español",
                                        icon: (
                                            <img src="/sp.svg" alt="Español" width={24} height={24} />
                                        )
                                    }
                                ]}
                                selectedOption={locale}
                                onChange={switchLanguage}
                            />
                            <StyledContactLink
                                href="/contact"
                                $isActive={pathname === "/contact"}
                            >
                                <span>{t("menu.contact")}</span>
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
                            </StyledContactLink>
                        </StyledDesktopMenu>
                    </StyledNavContent>

                    <StyledMobileMenu
                        initial={{
                            height: 0,
                            zIndex: "-5",
                            padding: 0,
                        }}
                        animate={{
                            height: isMenuOpen ? "auto" : 0,
                            zIndex: isMenuOpen ? "500" : "-5",
                            padding: isMenuOpen ? "20px" : 0,
                        }}
                        transition={{ duration: 0.5 }}
                    >
                        <StyledMobileMenuContent>
                            <StyledMobileNavLink
                                href="/experience"
                                $isActive={pathname.includes("/experience")}
                                onClick={handleMobileLinkClick}
                            >
                                {t("menu.experience")}
                            </StyledMobileNavLink>
                            <StyledMobileNavLink
                                href="/projects"
                                $isActive={pathname.includes("/projects")}
                                onClick={handleMobileLinkClick}
                            >
                                {t("menu.projects")}
                            </StyledMobileNavLink>
                            <StyledMobileNavLink
                                href="/articles"
                                $isActive={pathname.includes("/articles")}
                                onClick={handleMobileLinkClick}
                            >
                                {t("menu.articles")}
                            </StyledMobileNavLink>
                            <StyledMobileContactLink
                                href="/contact"
                                $isActive={pathname === "/contact"}
                                onClick={handleMobileLinkClick}
                            >
                                <span>{t("menu.contact")}</span>
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
                            </StyledMobileContactLink>
                            <Selector
                                options={[
                                    {
                                        value: "en-US",
                                        label: "English",
                                        icon: (
                                            <img src="/us.svg" alt="English" width={24} height={24} />
                                        )
                                    },
                                    {
                                        value: "pt-BR",
                                        label: "Português",
                                        icon: (
                                            <img src="/pt.svg" alt="Português" width={24} height={24} />
                                        )
                                    },
                                    {
                                        value: "es-ES",
                                        label: "Español",
                                        icon: (
                                            <img src="/sp.svg" alt="Español" width={24} height={24} />
                                        )
                                    }
                                ]}
                                selectedOption={locale}
                                onChange={switchLanguage}
                            />
                        </StyledMobileMenuContent>
                    </StyledMobileMenu>
                </StyledNav>
            </StyledContainer>
        </StyledHeader>
    );
};

export default Navbar;
