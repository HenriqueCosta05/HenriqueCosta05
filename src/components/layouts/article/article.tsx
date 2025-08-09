import { useTranslations } from 'next-intl';
import * as S from './article.styles';

const Article = () => {
    const t = useTranslations();
    return (
        <S.StyledArticleContainer>
            <S.StyledArticleTitle>{t('articles.title')}</S.StyledArticleTitle>
            <S.StyledFeaturedArticleWrapper>
                <S.StyledFeaturedArticleHeader>{t('articles.featured')}</S.StyledFeaturedArticleHeader>
            </S.StyledFeaturedArticleWrapper>
        </S.StyledArticleContainer>
    )
};

export default Article;