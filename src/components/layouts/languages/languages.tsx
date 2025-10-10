import { useTranslations } from "next-intl";
import * as S from "./languages.styles";

const Languages = () => {
    const t = useTranslations("languages");

    const languageList = t.raw("list")

    return (
        <S.LanguagesContainer>
            <S.LanguagesTitle>{t("title")}</S.LanguagesTitle>
            <S.LanguagesDescription>
                {t("description")}
            </S.LanguagesDescription>
            <S.LanguagesGrid>
                {languageList.map((language) => (
                    <S.LanguageCard key={language.name}>
                        <S.LanguageName>{language.name}</S.LanguageName>
                        <S.LanguageProficiency>{language.level}</S.LanguageProficiency>
                    </S.LanguageCard>
                ))}
            </S.LanguagesGrid>
        </S.LanguagesContainer>
    )
}

export default Languages