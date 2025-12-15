import { generateArticleSchema, generateBreadcrumbSchema, generateSEO } from "@/lib/seo";
import { ArticleScreen } from "@/screens";
import { getArticleBySlug } from "@/services/sanity";
import { getLocaleKey, getUserLocale } from "@/utils";
import type { Metadata } from 'next';

interface ArticlePageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
    const { id } = await params;
    const locale = await getUserLocale();
    const localeKey = getLocaleKey(locale);

    try {
        const article = await getArticleBySlug(id);

        if (!article) {
            return generateSEO({
                title: 'Article Not Found',
                description: 'The requested article could not be found.',
                locale,
            });
        }

        const title = article.seo?.metaTitle?.[localeKey] || article.title[localeKey];
        const description = article.seo?.metaDescription?.[localeKey] || article.shortDescription[localeKey];
        const image = article.seo?.ogImage?.asset?.url || article.mainImage?.asset?.url;
        const keywords = article.seo?.keywords || article.tags?.[localeKey] || [];

        return generateSEO({
            title,
            description,
            keywords,
            image,
            url: article.seo?.canonicalUrl || `https://henriquecosta.dev/article/${id}`,
            type: 'article',
            publishedTime: article.publishedAt,
            modifiedTime: article.publishedAt,
            authors: ['Henrique Costa'],
            tags: article.tags?.[localeKey] || [],
            locale,
        });
    } catch (error) {
        return generateSEO({
            title: 'Article Not Found',
            description: 'The requested article could not be found.',
            locale,
        });
    }
}

export default async function ArticlePage({ params }: ArticlePageProps) {

    const { id } = await params;
    const article = await getArticleBySlug(id);
    const locale = await getUserLocale();
    const localeKey = getLocaleKey(locale);

    if (!article) {
        return null;
    }

    const articleSchema = generateArticleSchema({
        title: article.title[localeKey],
        description: article.shortDescription[localeKey],
        image: article.mainImage?.asset?.url,
        publishedTime: article.publishedAt,
        author: 'Henrique Costa',
        url: `https://henriquecosta.dev/article/${id}`,
        tags: article.tags?.[localeKey],
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://henriquecosta.dev' },
        { name: 'Articles', url: 'https://henriquecosta.dev/#articles' },
        { name: article.title[localeKey], url: `https://henriquecosta.dev/article/${id}` },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(articleSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            <ArticleScreen articleSlug={id} />
        </>
    );
}
