import { useTranslations } from "next-intl";
import * as S from "./projects.style";
import { Card } from "@/components/base";

const Project = () => {
    const t = useTranslations("projects");
    const projectIndexes = [0, 1];
    return (
        <S.StyledProjectSection id="Project">
            <S.StyledProjectTitle>{t("title")}</S.StyledProjectTitle>
            <S.StyledProjectDescription>{t("description")}</S.StyledProjectDescription>
            <S.StyledProjectGrid>
                {projectIndexes.map((index) => {
                    return (
                        <Card
                            image={t(`list.${index}.projectImage`) ? { src: t(`list.${index}.projectImage`), alt: t(`list.${index}.projectName`) } : undefined}
                            key={index}  
                            title={t(`list.${index}.projectName`)}
                            description={t(`list.${index}.shortDescription`)}
                            flags={Array.from(Object.values(t.raw(`list.${index}.skills`) as { name: string; hovered?: boolean }[]))}
                            cta={{
                                title: t(`list.${index}.cta.text`),
                                to: t(`list.${index}.cta.href`)
                            }}
                        />
                    )
                })}
            </S.StyledProjectGrid>
        </S.StyledProjectSection>
    )
}

export default Project;