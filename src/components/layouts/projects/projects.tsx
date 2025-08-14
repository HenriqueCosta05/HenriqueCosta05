import { useTranslations } from "next-intl";
import * as S from "./projects.style";
import { Card } from "@/components/base";
import { useEffect, useState } from "react";
import type { Project } from "../../../../sanity";
import { getProjects } from "@/services";
import { useLocale } from "next-intl";
import { getLocaleKey } from "@/utils";

const Projects = () => {
    const t = useTranslations("projects");
    const currentLocale = useLocale();

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
        const fetchProjects = async () => {
            const projects = await getProjects();
            setProjects(projects);
        };

        fetchProjects();
    }, []);

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
                {projects.map((project, index) => {
                    const localeKey = getLocaleKey(currentLocale);
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
                                image={project.projectImage ? { src: project.projectImage.asset.url, alt: String(project.projectName) } : undefined}
                                title={project.projectName[localeKey]}
                                description={project.shortDescription[localeKey]}
                                flags={project.skills}
                                cta={{
                                    title: t(`shared.cta.text`),
                                    to: t(`shared.cta.href`, { slug: project.slug.current })
                                }}
                            />
                        </S.StyledProjectCard>
                    )
                })}
            </S.StyledProjectGrid>
        </S.StyledProjectSection>
    )
}

export default Projects;