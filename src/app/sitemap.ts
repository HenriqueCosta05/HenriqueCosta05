import { getArticles, getProjects } from '@/services';
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://henriquecosta.dev';

  // Fetch all projects and articles
  const projects = await getProjects();
  const articles = await getArticles();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          'en-US': `${baseUrl}?locale=en-US`,
          'pt-BR': `${baseUrl}?locale=pt-BR`,
          'es-ES': `${baseUrl}?locale=es-ES`,
        },
      },
    },
  ];

  // Project pages
  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${baseUrl}/project/${project.slug.current}`,
    lastModified: project.endDate ? new Date(project.endDate) : new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
    alternates: {
      languages: {
        'en-US': `${baseUrl}/project/${project.slug.current}?locale=en-US`,
        'pt-BR': `${baseUrl}/project/${project.slug.current}?locale=pt-BR`,
        'es-ES': `${baseUrl}/project/${project.slug.current}?locale=es-ES`,
      },
    },
  }));

  // Article pages
  const articlePages: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${baseUrl}/article/${article.slug.current}`,
    lastModified: article.publishedAt ? new Date(article.publishedAt) : new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.7,
    alternates: {
      languages: {
        'en-US': `${baseUrl}/article/${article.slug.current}?locale=en-US`,
        'pt-BR': `${baseUrl}/article/${article.slug.current}?locale=pt-BR`,
        'es-ES': `${baseUrl}/article/${article.slug.current}?locale=es-ES`,
      },
    },
  }));

  return [...staticPages, ...projectPages, ...articlePages];
}
