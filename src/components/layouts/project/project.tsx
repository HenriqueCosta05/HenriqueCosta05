import { useTranslations } from 'next-intl';
import * as S from './project.style'
import { Button } from '@/components/base';
import { Navbar } from '@/components/templates';

interface DetailedProjectProps {
    projectIndex: number;
    projectName?: string;
}

const DetailedProject = ({ projectIndex }: DetailedProjectProps) => {
    const t = useTranslations('projects')

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
                {t(`list.${projectIndex}.projectName`)}
            </S.StyledDetailedProjectTitle>

            <S.StyledDetailedProjectDescription
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            >
                {t(`list.${projectIndex}.shortDescription`)}
            </S.StyledDetailedProjectDescription>
                <S.StyledDetailedProjectImage
                    src={t(`list.${projectIndex}.projectImage`)}
                />
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
                {Object.values(t.raw(`list.${projectIndex}.skills`) as Record<string, { name: string; hovered?: boolean } | string>)
                    .map((skill: { name: string; hovered?: boolean } | string, index) => {
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
                {t(`list.${projectIndex}.functionalities.title`)}
            </S.StyledDetailedProjectSubtitle>

            <S.StyledDetailedProjectDescription
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.7 }}
            >
                {t(`list.${projectIndex}.functionalities.description`)}
            </S.StyledDetailedProjectDescription>

            <S.StyledFeatureList
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.8 }}
            >
                {Object.values(t.raw(`list.${projectIndex}.functionalities.list`) as Record<string, string>)
                    .map((functionality, index) => (
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
                {t(`list.${projectIndex}.challenges.title`)}
            </S.StyledDetailedProjectSubtitle>

            <S.StyledDetailedProjectDescription
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.1 }}
            >
                {t(`list.${projectIndex}.challenges.description`)}
            </S.StyledDetailedProjectDescription>
            <S.StyledChallengeList
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 1.2 }}
            >
                {Object.values(t.raw(`list.${projectIndex}.challenges.list`) as Record<string, string>)
                    .map((challenge, index) => (
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
                    txt={t(`list.${projectIndex}.viewCode.text`)}
                        href={t(`list.${projectIndex}.viewCode.href`)} 
                />
            </S.StyledDetailedProjectButtonWrapper>
            </S.StyledDetailedProjectWrapper>
            </>
    )
}

export default DetailedProject;