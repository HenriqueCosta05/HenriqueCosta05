import { useLocale, useTranslations } from 'next-intl';
import * as S from './article.styles';
import { useEffect, useState } from 'react';
import { Article as ArticleType } from '../../../../sanity';
import { getArticleBySlug } from '@/services';
import { getLocaleKey } from '@/utils';
import { PortableText } from '@portabletext/react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/base';

const Article = ({ articleSlug }: { articleSlug: string }) => {
    const t = useTranslations();
    const router = useRouter();

    const locale = useLocale();
    const localeKey = getLocaleKey(locale);
    const [article, setArticle] = useState<ArticleType | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setIsLoading(true);
                const response = await getArticleBySlug(articleSlug);
                setArticle(response);
            } catch (error) {
                console.error('Error fetching article:', error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticle();
    }, [articleSlug]);

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString(locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (isLoading) {
        return (
            <S.StyledArticleContainer>
                <S.StyledLoadingContainer>
                    <S.StyledLoadingSpinner />
                    <S.StyledLoadingText>{t('shared.loading')}</S.StyledLoadingText>
                </S.StyledLoadingContainer>
            </S.StyledArticleContainer>
        );
    }

    if (!article) {
        return (
            <S.StyledArticleContainer>
                <S.StyledLoadingContainer>
                    <S.StyledLoadingText>{t('shared.notFound')}</S.StyledLoadingText>
                </S.StyledLoadingContainer>
            </S.StyledArticleContainer>
        );
    }

    return (
        <S.StyledArticleContainer
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <Button href="/" txt={t('shared.back')}></Button>

            <S.StyledArticleHeader>
                <S.StyledArticleTitle
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    {article.title[localeKey]}
                </S.StyledArticleTitle>

                {(article.publishedAt || article.excerpt?.[localeKey]) && (
                    <S.StyledArticleMeta>
                        {article.publishedAt && (
                            <span>{formatDate(article.publishedAt)}</span>
                        )}
                        {article.publishedAt && article.excerpt?.[localeKey] && (
                            <span>•</span>
                        )}
                        {article.excerpt?.[localeKey] && (
                            <PortableText value={article.excerpt[localeKey]} />
                        )}
                    </S.StyledArticleMeta>
                )}

                {article.excerpt?.[localeKey] && (
                    <S.StyledArticleExcerpt
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <PortableText value={article.excerpt[localeKey]} />
                    </S.StyledArticleExcerpt>
                )}
            </S.StyledArticleHeader>

            <S.StyledArticleContent
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                <PortableText value={article.content[localeKey]} />
            </S.StyledArticleContent>
        </S.StyledArticleContainer>
    );
};

export default Article;