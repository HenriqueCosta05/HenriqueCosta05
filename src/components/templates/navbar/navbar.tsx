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

const Navbar = ({ logoText = "Henrique", highlightedText = "Costa" }: NavbarProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

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
                                href="/projects"
                                $isActive={pathname.includes("/projects")}
                            >
                                Projetos
                            </StyledNavLink>
                            <StyledNavLink
                                href="/articles"
                                $isActive={pathname.includes("/articles")}
                            >
                                Artigos
                            </StyledNavLink>
                            <StyledContactLink
                                href="/contact"
                                $isActive={pathname === "/contact"}
                            >
                                <span>Entre em contato!</span>
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
                                Experiência
                            </StyledMobileNavLink>
                            <StyledMobileNavLink
                                href="/projects"
                                $isActive={pathname.includes("/projects")}
                                onClick={handleMobileLinkClick}
                            >
                                Projetos
                            </StyledMobileNavLink>
                            <StyledMobileNavLink
                                href="/articles"
                                $isActive={pathname.includes("/articles")}
                                onClick={handleMobileLinkClick}
                            >
                                Artigos
                            </StyledMobileNavLink>
                            <StyledMobileContactLink
                                href="/contact"
                                $isActive={pathname === "/contact"}
                                onClick={handleMobileLinkClick}
                            >
                                <span>Entre em contato!</span>
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
                        </StyledMobileMenuContent>
                    </StyledMobileMenu>
                </StyledNav>
            </StyledContainer>
        </StyledHeader>
    );
};

export default Navbar;
