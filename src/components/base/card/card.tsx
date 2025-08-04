import Button from "../button/button";
import { CardProps } from "./card.interface";
import * as S from "./card.style";

export default function Card(Props: CardProps) {
    const { image, title, subtitle, description, flags, cta} = Props;
    return (
        <S.StyledCardWrapper>
            {image && (
                <S.StyledCardImage>
                    <img src={image?.src} alt={image?.alt} />
                </S.StyledCardImage>
            )}
            <S.StyledCardContent>
                <S.StyledCardTitle>{title}</S.StyledCardTitle>
                <S.StyledCardSubtitle>{subtitle}</S.StyledCardSubtitle>
                <S.StyledCardDescription>{description}</S.StyledCardDescription>
                {flags && (
                    <S.StyledCardFlags>
                        {flags.map(flag => (
                            <S.StyledCardFlag $hovered={false} key={flag.name}>{flag.name}</S.StyledCardFlag>
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
