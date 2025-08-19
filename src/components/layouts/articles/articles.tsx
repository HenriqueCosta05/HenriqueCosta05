import { useLocale, useTranslations } from 'next-intl';
import * as S from './articles.style';
import { useEffect, useState } from 'react';
import { Article } from '../../../../sanity';
import { getArticles } from '@/services';
import { getLocaleKey } from '@/utils';
import { Card } from '@/components/base';

const Articles = () => {
    const t = useTranslations();
    const [articles, setArticles] = useState<Article[]>([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response = await getArticles();
            setArticles(response);
        };
        fetchArticles();
    }, []);

    const locale = useLocale();
    const localeKey = getLocaleKey(locale);

    return (
        <>
        <S.StyledArticleTitle>{t('articles.title')}</S.StyledArticleTitle>
        <S.StyledArticleDescription>{t('articles.description')}</S.StyledArticleDescription>
        <S.StyledArticleGrid>
            {articles.map((article) => (
                <S.StyledArticleCard key={article.slug.current}>
                    <Card
                        title={article.title?.[localeKey]}
                        description={article.shortDescription?.[localeKey]}
                        flags={article.tags?.[localeKey] ? article.tags[localeKey].map(tag => ({ name: tag })) : []}
                        subtitle={new Date(article.publishedAt).toLocaleDateString(locale, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}
                        cta={{
                            title: article.cta?.text?.[localeKey] || "",
                            to: `/article/${article.slug.current}`
                        }}
                    />
                </S.StyledArticleCard>
            ))}
        </S.StyledArticleGrid>
        </>
    );
};

export default Articles;