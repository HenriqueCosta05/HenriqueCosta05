import { Card } from "@/components/base";
import { getProjects } from "@/services";
import { getLocaleKey } from "@/utils";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import type { Project } from "../../../../sanity";
import * as S from "./projects.style";

type FilterType = 'all' | Project['projectType'];

const Projects = () => {
    const t = useTranslations("projects");
    const currentLocale = useLocale();

    const [projects, setProjects] = useState<Project[]>([]);
    const [activeFilter, setActiveFilter] = useState<FilterType>('all');

    useEffect(() => {
        const fetchProjects = async () => {
            const projects = await getProjects();
            setProjects(projects);
        };

        fetchProjects();
    }, []);

    const filteredProjects = useMemo(() => {
        if (activeFilter === 'all') return projects;
        return projects.filter(project => project.projectType === activeFilter);
    }, [projects, activeFilter]);

    const tabs: { label: string; value: FilterType }[] = [
        { label: t('tabs.all'), value: 'all' },
        { label: t('tabs.website'), value: 'website' },
        { label: t('tabs.webApp'), value: 'web-app' },
        { label: t('tabs.mobile'), value: 'mobile' },
        { label: t('tabs.desktop'), value: 'desktop' },
        { label: t('tabs.api'), value: 'api' },
    ];

    return (
        <S.StyledProjectSection
            id="projects"
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
            <S.StyledTabsContainer
                value={activeFilter}
                onChange={(_, newValue) => setActiveFilter(newValue as FilterType)}
                variant="scrollable"
                scrollButtons="auto"
            >
                {tabs.map((tab) => (
                    <S.StyledTab
                        key={tab.value}
                        label={tab.label}
                        value={tab.value}
                        disableRipple
                    />
                ))}
            </S.StyledTabsContainer>
            {filteredProjects.length === 0 ? (
                <S.StyledEmptyState
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                >
                    <S.StyledEmptyStateIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                    </S.StyledEmptyStateIcon>
                    <S.StyledEmptyStateTitle>
                        {t('empty.title')}
                    </S.StyledEmptyStateTitle>
                    <S.StyledEmptyStateText>
                        {t('empty.description')}
                    </S.StyledEmptyStateText>
                </S.StyledEmptyState>
            ) : (
            <S.StyledProjectGrid
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 }}
            >
                {filteredProjects.map((project, index) => {
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
            </S.StyledProjectGrid>            )}        </S.StyledProjectSection>
    )
}

export default Projects;
