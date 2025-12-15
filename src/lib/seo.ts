import { Metadata } from 'next';

export interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'profile';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
  locale?: string;
}

export function generateSEO({
  title,
  description,
  keywords = [],
  image = '/og-image.jpg',
  url = 'https://henriquecosta.dev',
  type = 'website',
  publishedTime,
  modifiedTime,
  authors = ['Henrique Costa'],
  tags = [],
  locale = 'en-US',
}: SEOProps): Metadata {
  const siteName = 'Henrique Costa - Front-End Developer';
  const fullTitle = title.includes('Henrique Costa') ? title : `${title} | ${siteName}`;

  return {
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    authors: authors.map(name => ({ name })),
    creator: 'Henrique Costa',
    publisher: 'Henrique Costa',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type,
      locale,
      url,
      siteName,
      title: fullTitle,
      description,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(type === 'article' && {
        publishedTime,
        modifiedTime,
        authors,
        tags,
      }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [image],
      creator: '@henriquecosta',
    },
    alternates: {
      canonical: url,
      languages: {
        'en-US': `${url}?locale=en-US`,
        'pt-BR': `${url}?locale=pt-BR`,
        'es-ES': `${url}?locale=es-ES`,
      },
    },
    verification: {
      google: '-i9iLsDZLCmxAgyXn7OIvY0HScYAoQxLxouDOSBI0SU',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image?: string;
  publishedTime: string;
  modifiedTime?: string;
  author: string;
  url: string;
  tags?: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image || '/og-image.jpg',
    datePublished: article.publishedTime,
    dateModified: article.modifiedTime || article.publishedTime,
    author: {
      '@type': 'Person',
      name: article.author,
      url: 'https://henriquecosta.dev',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Henrique Costa',
      logo: {
        '@type': 'ImageObject',
        url: 'https://henriquecosta.dev/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
    keywords: article.tags?.join(', '),
  };
}

export function generatePersonSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Henrique Costa',
    jobTitle: 'Front-End Developer',
    url: 'https://henriquecosta.dev',
    sameAs: [
      'https://www.linkedin.com/in/henriquecosta05/',
      'https://github.com/HenriqueCosta05',
    ],
    knowsAbout: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'Node.js',
      'Front-End Development',
      'Web Development',
      'UI/UX',
      'Accessibility',
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Your University',
    },
    worksFor: {
      '@type': 'Organization',
      name: 'Your Company',
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateProjectSchema(project: {
  name: string;
  description: string;
  image?: string;
  url: string;
  technologies: string[];
  startDate?: string;
  endDate?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.name,
    description: project.description,
    image: project.image,
    url: project.url,
    creator: {
      '@type': 'Person',
      name: 'Henrique Costa',
    },
    keywords: project.technologies.join(', '),
    ...(project.startDate && { dateCreated: project.startDate }),
    ...(project.endDate && { datePublished: project.endDate }),
  };
}

export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Henrique Costa - Front-End Developer',
    url: 'https://henriquecosta.dev',
    description: 'Portfolio of Henrique Costa, a Front-End Developer specializing in React.js, Next.js, TypeScript, and modern web development.',
    inLanguage: ['en-US', 'pt-BR', 'es-ES'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://henriquecosta.dev/search?q={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
