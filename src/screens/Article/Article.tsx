'use client';

import { Article } from "@/components/layouts";
import { Footer, Navbar } from "@/components/templates";

interface ArticleScreenProps {
   articleSlug: string;
}

export default function ArticleScreen({ articleSlug }: ArticleScreenProps) {
    return (
        <>
            <Navbar />
            <Article articleSlug={articleSlug} />
            <Footer />
        </>
    )
}