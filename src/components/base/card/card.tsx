import Button from "../button/button";
import { CardProps } from "./card.interface";
import * as S from "./card.style";

export default function Card(Props: CardProps) {
    const { image, title, subtitle, endSubtitle, description, flags, cta} = Props;
    return (
        <S.StyledCardWrapper>
            {image && (
                <S.StyledCardImage>
                    <img src={image?.src} alt={image?.alt} />
                </S.StyledCardImage>
            )}
            <S.StyledCardContent>
                <S.StyledCardTitle>{title}</S.StyledCardTitle>
                <S.StyledCardSubtitleWrapper>
                    <S.StyledCardSubtitle>{subtitle}</S.StyledCardSubtitle>
                    <S.StyledCardSubtitle>{endSubtitle}</S.StyledCardSubtitle>
                </S.StyledCardSubtitleWrapper>
                <S.StyledCardDescription>{description}</S.StyledCardDescription>
                {flags && typeof flags === "object" && (
                    <S.StyledCardFlags>
                        {Object.values(flags).map((flag, index) => (
                            <S.StyledCardFlag $hovered={flag.hovered} key={index}>{flag.name}</S.StyledCardFlag>
                        ))}
                    </S.StyledCardFlags>
                )}
                <Button
                    href={cta?.to || "/"}
                    txt={cta?.title || ""}
                />
            </S.StyledCardContent>
        </S.StyledCardWrapper>
    );
}
