type CardFlag = {
    name: string;
    hovered?: boolean;
}

type CardImage = {
    src: string;
    alt?: string;
}

type CardCTA = {
    to: string;
    title: string;
}

export interface CardProps {
    title: string;
    subtitle?: string;
    description?: string;
    flags?: CardFlag[];
    image?: CardImage;
    cta?: CardCTA
}

