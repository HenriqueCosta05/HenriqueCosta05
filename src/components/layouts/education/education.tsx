import { Card } from "@/components/base";
import * as S from "./education.styles";
import { useTranslations, useLocale } from "next-intl";
import type { Education as APIEducation } from "../../../../sanity/types/education";
import { useEffect, useState } from "react";
import { getEducations } from "@/services";
import { dateStringToLocaleDate, getLocaleKey, portableTextToBulletPoints } from "@/utils";


const Education = () => {
    const [educationsData, setEducationsData] = useState<APIEducation[]>([]);
    const currentLocale = useLocale();
    const t = useTranslations("education");

    useEffect(() => {
        const fetchEducationsDataArr = async () => {
            const data = await getEducations();
            setEducationsData(data);
        };
        fetchEducationsDataArr();
    }, []);

    return (
        <S.StyledEducationSection id="education">
            <S.StyledEducationTitle>{t("title")}</S.StyledEducationTitle>
            <S.StyledEducationDescription>{t("description")}</S.StyledEducationDescription>
            <S.StyledEducationGrid>
                {educationsData.map((education) => {
                    const localeKey = getLocaleKey(currentLocale);

                    const degree = education.degree?.[localeKey] || 'Degree not available';
                    const fieldOfStudy = education.fieldOfStudy?.[localeKey] || '';
                    const description = education.description?.[localeKey] || [];
                    const honors = education.honors?.[localeKey] || [];

                    return (
                        <Card
                           key={education._id}
                           title={education.institution?.[localeKey] || 'Institution not available'}
                           subtitle={degree + (fieldOfStudy ? ` — ${fieldOfStudy}` : '')}
                           endSubtitle={`${dateStringToLocaleDate(education.startDate ?? '', currentLocale)} - ${dateStringToLocaleDate(education.endDate ?? '', currentLocale) || t("shared.current")}`}
                           bulletPoints={portableTextToBulletPoints(description)}
                           cta={{
                            title: education.cta?.text[localeKey] || 'Learn More',
                            to: education.cta?.linkUrl || '#',
                           }}
                        />
                    );
                })}
            </S.StyledEducationGrid>
        </S.StyledEducationSection>
    );
}

export default Education;
