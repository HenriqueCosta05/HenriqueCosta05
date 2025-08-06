import { useTranslations } from "next-intl";
import * as S from "./projects.style";
import { Card } from "@/components/base";

const Project = () => {
    const t = useTranslations("projects");
    const projectIndexes = [0, 1];

    return (
        <S.StyledProjectSection 
            id="Project"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <S.StyledProjectTitle
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            >
                {t("title")}
            </S.StyledProjectTitle>
            <S.StyledProjectDescription
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
            >
                {t("description")}
            </S.StyledProjectDescription>
            <S.StyledProjectGrid
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
            >
                {projectIndexes.map((index) => {
                    return (
                        <S.StyledProjectCard
                            key={index}
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ 
                                duration: 0.6, 
                                ease: "easeOut",
                                delay: 0.7 + (index * 0.2)
                            }}
                            whileHover={{ 
                                y: -5,
                                transition: { duration: 0.2 }
                            }}
                        >
                            <Card
                                image={t(`list.${index}.projectImage`) ? { src: t(`list.${index}.projectImage`), alt: t(`list.${index}.projectName`) } : undefined}
                                title={t(`list.${index}.projectName`)}
                                description={t(`list.${index}.shortDescription`)}
                                flags={Array.from(Object.values(t.raw(`list.${index}.skills`) as { name: string; hovered?: boolean }[]))}
                                cta={{
                                    title: t(`list.${index}.cta.text`),
                                    to: t(`list.${index}.cta.href`)
                                }}
                            />
                        </S.StyledProjectCard>
                    )
                })}
            </S.StyledProjectGrid>
        </S.StyledProjectSection>
    )
}

export default Project;