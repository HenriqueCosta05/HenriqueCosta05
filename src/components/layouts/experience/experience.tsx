import { Card } from "@/components/base";
import * as S from "./experience.styles";
import { useTranslations, useLocale } from "next-intl";
import type {Experience} from "../../../../sanity/types/experiences";
import { useEffect, useState } from "react";
import { getExperiences } from "@/services";
import { dateStringToLocaleDate, getLocaleKey, portableTextToBulletPoints } from "@/utils";


const Experience = () => {
    const [experiencesData, setExperiencesData] = useState<Experience[]>([]);
    const currentLocale = useLocale();
    const t = useTranslations("experience");

    useEffect(() => {
        const fetchExperiencesDataArr = async () => {
            const data = await getExperiences();
            setExperiencesData(data);
        };
        fetchExperiencesDataArr();
    }, []);

    return (
        <S.StyledExperienceSection id="experience">
            <S.StyledExperienceTitle>{t("title")}</S.StyledExperienceTitle>
            <S.StyledExperienceDescription>{t("description")}</S.StyledExperienceDescription>
            <S.StyledExperienceGrid>
                {experiencesData.map((experience) => {
                    const localeKey = getLocaleKey(currentLocale);
                    
                    const position = experience.position?.[localeKey] || 'Position not available';
                    const description = experience.description?.[localeKey] || [];
                    const technologies = experience.technologies?.[localeKey] || [];
                                        
                    return (
                        <Card
                           key={experience._id}
                           title={position}
                           subtitle={experience.employmentType?.[localeKey] || 'Employment Type not available'}
                           endSubtitle={`${dateStringToLocaleDate(experience.startDate ?? '', currentLocale)} - ${dateStringToLocaleDate(experience.endDate ?? '', currentLocale) || t("shared.current")}`}
                           bulletPoints={portableTextToBulletPoints(description)}
                           flags={technologies.map((tech: string) => ({ name: tech }))}
                           cta={{
                            title: experience.cta?.text[localeKey] || 'Learn More',
                            to: experience.cta?.linkUrl || '#',
                           }}
                            
                        />
                    );
                })}
            </S.StyledExperienceGrid>
        </S.StyledExperienceSection>
    );
}

export default Experience;