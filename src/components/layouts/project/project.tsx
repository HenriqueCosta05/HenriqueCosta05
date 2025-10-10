import { useLocale, useTranslations } from 'next-intl';
import * as S from './project.style'
import { Button } from '@/components/base';
import { Footer, Navbar } from '@/components/templates';
import { useEffect, useState } from 'react';
import { Project } from '../../../../sanity';
import { getProjectBySlug } from '@/services';
import { getLocaleKey } from '@/utils';

interface DetailedProjectProps {
    projectSlug: string;
}

const DetailedProject = ({ projectSlug }: DetailedProjectProps) => {
    const t = useTranslations('projects')

    const [detailedProject, setDetailedProject] = useState<Project | null>(null);

    useEffect(() => {
        const fetchProject = async () => {
            const project = await getProjectBySlug(projectSlug);
            console.log("Fetched project:", project);
            setDetailedProject(project);
        };

        fetchProject();
    }, [projectSlug]);

    const locale = useLocale();
    const localeKey = getLocaleKey(locale);

    return (
        <>
            <Navbar />
            <S.StyledDetailedProjectWrapper
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <S.StyledDetailedProjectTitle
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                    {detailedProject?.projectName[localeKey]}
                </S.StyledDetailedProjectTitle>

                <S.StyledDetailedProjectDescription
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                    {detailedProject?.shortDescription[localeKey]}
                </S.StyledDetailedProjectDescription>
                <S.StyledDetailedProjectImage
                    src={detailedProject?.projectImage?.asset.url}
                />
                {detailedProject?.gallery && detailedProject.gallery.length > 0 && (
                        <S.StyledImageGrid
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            {detailedProject.gallery.map((image, index) => (
                                <S.StyledGridImage
                                    key={index}
                                    src={image.asset.url}
                                    alt={`Project image ${index + 1}`}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                />
                            ))}
                        </S.StyledImageGrid>
                )}

                <S.StyledDetailedProjectSubtitle
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                >
                    {t(`skills`)}
                </S.StyledDetailedProjectSubtitle>

                <S.StyledTechStackContainer
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                >
                    {Object.values(detailedProject?.skills || {}).map((skill, index) => {
                        const skillName = typeof skill === 'string' ? skill : skill.name;
                        return (
                            <S.StyledTechChip
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.4,
                                    ease: "easeOut",
                                    delay: 0.5 + (index * 0.1)
                                }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {skillName}
                            </S.StyledTechChip>
                        );
                    })}
                </S.StyledTechStackContainer>

                <S.StyledDetailedProjectSubtitle
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.6 }}
                >
                    {detailedProject?.functionalities.title[localeKey]}
                </S.StyledDetailedProjectSubtitle>

                <S.StyledDetailedProjectDescription
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
                >
                    {detailedProject?.functionalities.description[localeKey]}
                </S.StyledDetailedProjectDescription>

                <S.StyledFeatureList
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
                >
                    {Object.values(detailedProject?.functionalities.list?.[localeKey] || {}).map((functionality, index) => (
                        <S.StyledFeatureItem
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                                delay: 0.9 + (index * 0.1)
                            }}
                            whileHover={{ scale: 1.02 }}
                        >
                            {functionality}
                        </S.StyledFeatureItem>
                    ))}
                </S.StyledFeatureList>

                <S.StyledDetailedProjectSubtitle
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 1.0 }}
                >
                    {detailedProject?.challenges.title[localeKey]}
                </S.StyledDetailedProjectSubtitle>

                <S.StyledDetailedProjectDescription
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
                >
                    {detailedProject?.challenges.description[localeKey]}
                </S.StyledDetailedProjectDescription>
                <S.StyledChallengeList
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
                >
                    {Object.values(detailedProject?.challenges.list?.[localeKey] || {}).map((challenge, index) => (
                        <S.StyledChallengeItem
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                                delay: 1.3 + (index * 0.1)
                            }}
                            whileHover={{ scale: 1.01 }}
                        >
                            {challenge}
                        </S.StyledChallengeItem>
                    ))}
                </S.StyledChallengeList>

                <S.StyledDetailedProjectButtonWrapper
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 1.4 }}
                >
                    <Button
                        txt={detailedProject?.viewCode?.text?.[localeKey] || ""}
                        href={detailedProject?.viewCode?.href || ""}
                    />
                </S.StyledDetailedProjectButtonWrapper>
            </S.StyledDetailedProjectWrapper>
            <Footer />
        </>
    )

}

export default DetailedProject;