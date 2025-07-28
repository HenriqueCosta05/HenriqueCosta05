import { StaticImageData } from "next/image";

export interface HeroProps {
    title?: string;
    subtitle?: string;
    profileImageSrc?: StaticImageData | string;
    resumeUrl?: string;
    contactHref?: string;
}
