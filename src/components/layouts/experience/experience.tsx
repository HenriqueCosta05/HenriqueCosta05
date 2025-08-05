import { Card } from "@/components/base";
import * as S from "./experience.styles";
import { useTranslations } from "next-intl";

const Experience = () => {
    const t = useTranslations("experience");
    const experienceIndices = [0]
    return (
        <S.StyledExperienceSection id="experience">
            <S.StyledExperienceTitle>{t("title")}</S.StyledExperienceTitle>
            <S.StyledExperienceDescription>{t("description")}</S.StyledExperienceDescription>
            <S.StyledExperienceGrid>
                {experienceIndices.map((index) => (
                    <Card
                        key={index}
                        title={t(`list.${index}.role`)}
                        subtitle={`${t(`list.${index}.company`)}`}
                        endSubtitle={`${t(`list.${index}.duration`)}`}
                        description={t(`list.${index}.shortDescription`)}
                        flags={t.raw(`list.${index}.technologies`) as { name: string; hovered?: boolean }[]}
                        cta={{
                            title: t(`list.${index}.cta.text`),
                            to: t(`list.${index}.cta.href`)
                        }}
                    />
                ))}
            </S.StyledExperienceGrid>
        </S.StyledExperienceSection>
    );
}

export default Experience;