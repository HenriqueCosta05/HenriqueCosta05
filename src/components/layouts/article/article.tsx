import { useLocale, useTranslations } from 'next-intl';
import * as S from './article.styles';
import { useEffect, useState } from 'react';
import { Article as ArticleType } from '../../../../sanity';
import { getArticleBySlug } from '@/services';
import { getLocaleKey } from '@/utils';
import { PortableText } from '@portabletext/react';

const Article = ({ articleSlug }: { articleSlug: string }) => {
    const t = useTranslations();

    const locale = useLocale();
    const localeKey = getLocaleKey(locale);
    const [article, setArticle] = useState<ArticleType | null>(null);

    useEffect(() => {
        const fetchArticle = async () => {
            const response = await getArticleBySlug(articleSlug);
            setArticle(response);
        };

        fetchArticle();
    }, [articleSlug]);

    return (
        <S.StyledArticleContainer>
            {article ? (
                <>
                    <S.StyledArticleTitle>{article.title[localeKey]}</S.StyledArticleTitle>
                    <S.StyledArticleExcerpt>
                        <PortableText value={article.content[localeKey]} />
                    </S.StyledArticleExcerpt>
                </>
            ) : null}
        </S.StyledArticleContainer>
    )
};

export default Article;