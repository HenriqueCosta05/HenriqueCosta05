import { ArticleScreen } from "@/screens";

interface ArticlePageProps {
    params: Promise<{ id: string }>;
}

export default async function ArticlePage({ params }: ArticlePageProps) {

    const { id } = await params;

    return <ArticleScreen articleSlug={id} />;
}