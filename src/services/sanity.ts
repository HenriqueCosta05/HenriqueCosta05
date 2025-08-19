import { createClient, groq } from "next-sanity";
import { Project } from "../../sanity/types/projects";
import { clientConfig } from "../../sanity/config/client-config";
import { Article } from "../../sanity/types/articles";
import { Experience } from "../../sanity/types/experiences";
import { MultilingualString, MultilingualText, MultilingualArrayString, MultilingualPortableText } from "../../sanity/types/shared";

export type SupportedLocale = 'en' | 'es' | 'pt';

export const getLocalizedString = (multilingualString: MultilingualString, locale: SupportedLocale): string => {
    return multilingualString[locale] || multilingualString.en || '';
};

export const getLocalizedText = (multilingualText: MultilingualText, locale: SupportedLocale): string => {
    return multilingualText[locale] || multilingualText.en || '';
};

export const getLocalizedArray = (multilingualArray: MultilingualArrayString, locale: SupportedLocale): string[] => {
    return multilingualArray[locale] || multilingualArray.en || [];
};

export const getLocalizedPortableText = (multilingualPortableText: MultilingualPortableText, locale: SupportedLocale) => {
    return multilingualPortableText[locale] || multilingualPortableText.en || [];
};

export const getProjects = async (locale?: string): Promise<Project[]> => {
  return createClient(clientConfig).fetch(
    groq`
        *[_type == "project"] | order(displayOrder asc, _createdAt desc) {
          _id,
          projectName,
          slug,
          shortDescription,
          projectImage {
            asset -> {
              _id,
              url
            }
          },
          skills,
          cta,
          viewCode,
          functionalities,
          challenges,
          projectType,
          status,
          startDate,
          endDate,
          featured,
          displayOrder
        }
    `
  )
}

export const getProjectBySlug = async (slug: string): Promise<Project | null> => {
    return createClient(clientConfig).fetch(
        groq`
            *[_type == "project" && slug.current == $slug][0] {
              _id,
              projectName,
              slug,
              shortDescription,
              projectImage {
                asset -> {
                  _id,
                  url
                }
              },
              skills,
              cta,
              viewCode,
              functionalities,
              challenges,
              projectType,
              status,
              startDate,
              endDate,
              featured,
              displayOrder
            }
        `,
        { slug }
    )
}

export const getExperiences = async (): Promise<Experience[]> => {
    return createClient(clientConfig).fetch(
        groq`
            *[_type == "experience"] | order(displayOrder asc, startDate desc) {
              _id,
              company,
              slug,
              position,
              location,
              description,
              achievements,
              technologies,
              companyLogo {
                asset -> {
                  _id,
                  url
                }
              },
              companyWebsite,
              employmentType,
              startDate,
              endDate,
              cta,
              featured,
              displayOrder
            }
        `
    )
}

export const getExperienceBySlug = async (slug: string): Promise<Experience | null> => {
    return createClient(clientConfig).fetch(
        groq`
            *[_type == "experience" && slug.current == $slug][0] {
              _id,
              company,
              slug,
              position,
              location,
              description,
              achievements,
              technologies,
              companyLogo {
                asset -> {
                  _id,
                  url
                }
              },
              companyWebsite,
              employmentType,
              startDate,
              endDate,
              cta,
              featured,
              displayOrder
            }
        `,
        { slug }
    )
}

export const getArticles = async (): Promise<Article[]> => {
    return createClient(clientConfig).fetch(
        groq`
            *[_type == "article"] | order(publishedAt desc) {
              _id,
              title,
              slug,
              publishedAt,
              shortDescription,
              excerpt,
              mainImage {
                asset -> {
                  _id,
                  url
                }
              },
              tags,
              cta,
              featured
            }
        `
    )
}

export const getArticleBySlug = async (slug: string): Promise<Article | null> => {
    return createClient(clientConfig).fetch(
        groq`
            *[_type == "article" && slug.current == $slug][0] {
              _id,
              title,
              slug,
              publishedAt,
              excerpt,
              shortDescription,
              content,
              mainImage {
                asset -> {
                  _id,
                  url
                }
              },
              tags,
              cta,
              featured
            }
        `,
        { slug }
    )
}

export const getFeaturedProjects = async (): Promise<Project[]> => {
    return createClient(clientConfig).fetch(
        groq`
            *[_type == "project" && featured == true] | order(displayOrder asc, _createdAt desc) {
              _id,
              projectName,
              slug,
              shortDescription,
              projectImage {
                asset -> {
                  _id,
                  url
                }
              },
              skills,
              cta,
              viewCode,
              projectType,
              status,
              startDate,
              endDate,
              featured,
              displayOrder
            }
        `
    )
}

export const getFeaturedExperiences = async (): Promise<Experience[]> => {
    return createClient(clientConfig).fetch(
        groq`
            *[_type == "experience" && featured == true] | order(displayOrder asc, startDate desc) {
              _id,
              company,
              slug,
              position,
              location,
              description,
              achievements,
              technologies,
              companyLogo {
                asset -> {
                  _id,
                  url
                }
              },
              companyWebsite,
              employmentType,
              startDate,
              endDate,
              featured,
              displayOrder
            }
        `
    )
}

export const getFeaturedArticles = async (): Promise<Article[]> => {
    return createClient(clientConfig).fetch(
        groq`
            *[_type == "article" && featured == true] | order(publishedAt desc) {
              _id,
              title,
              slug,
              publishedAt,
              excerpt,
              mainImage {
                asset -> {
                  _id,
                  url
                }
              },
              tags,
              featured
            }
        `
    )
}

export const getProjectsByType = async (projectType: string): Promise<Project[]> => {
    return createClient(clientConfig).fetch(
        groq`
            *[_type == "project" && projectType == $projectType] | order(displayOrder asc, _createdAt desc) {
              _id,
              projectName,
              slug,
              shortDescription,
              projectImage {
                asset -> {
                  _id,
                  url
                }
              },
              skills,
              cta,
              viewCode,
              projectType,
              status,
              startDate,
              endDate,
              featured,
              displayOrder
            }
        `,
        { projectType }
    )
}

export const getExperiencesByEmploymentType = async (employmentType: string): Promise<Experience[]> => {
    return createClient(clientConfig).fetch(
        groq`
            *[_type == "experience" && employmentType == $employmentType] | order(displayOrder asc, startDate desc) {
              _id,
              company,
              slug,
              position,
              location,
              description,
              achievements,
              technologies,
              companyLogo {
                asset -> {
                  _id,
                  url
                }
              },
              companyWebsite,
              employmentType,
              startDate,
              endDate,
              featured,
              displayOrder
            }
        `,
        { employmentType }
    )
}

export const getRecentArticles = async (limit: number = 5): Promise<Article[]> => {
    return createClient(clientConfig).fetch(
        groq`
            *[_type == "article"] | order(publishedAt desc) [0...$limit] {
              _id,
              title,
              slug,
              publishedAt,
              excerpt,
              mainImage {
                asset -> {
                  _id,
                  url
                }
              },
              tags,
              featured
            }
        `,
        { limit: limit - 1 }
    )
}

export const getArticlesByTag = async (tag: string, locale: string = "en"): Promise<Article[]> => {
    // For now, let's fetch all articles and filter client-side
    // In production, you might want to optimize this with a more complex GROQ query
    const allArticles = await getArticles()
    return allArticles.filter(article => 
        article.tags?.[locale as keyof typeof article.tags]?.includes(tag)
    )
}

// Utility function to get all unique project types
export const getProjectTypes = async (): Promise<string[]> => {
    const projects: { projectType: string }[] = await createClient(clientConfig).fetch(
        groq`*[_type == "project"] { projectType }`
    )
    return [...new Set(projects.map(project => project.projectType).filter(Boolean))]
}

// Utility function to get all unique employment types
export const getEmploymentTypes = async (): Promise<string[]> => {
    const experiences: { employmentType: string }[] = await createClient(clientConfig).fetch(
        groq`*[_type == "experience"] { employmentType }`
    )
    return [...new Set(experiences.map(exp => exp.employmentType).filter(Boolean))]
}

// Utility function to get all unique tags for a specific locale
export const getAllTags = async (locale: string = "en"): Promise<string[]> => {
    const articles: { tags: any }[] = await createClient(clientConfig).fetch(
        groq`*[_type == "article"] { tags }`
    )
    const allTags: string[] = articles.flatMap(article => 
        Array.isArray(article.tags?.[locale]) ? article.tags[locale] : []
    )
    return [...new Set(allTags.filter(Boolean))]
}

// Content management functions with pagination
export const getProjectsPaginated = async (
    page: number = 1, 
    limit: number = 10, 
    featured?: boolean
): Promise<{ projects: Project[], total: number, hasMore: boolean }> => {
    const offset = (page - 1) * limit;
    const featuredFilter = featured !== undefined ? `&& featured == ${featured}` : '';
    
    const [projects, totalCount] = await Promise.all([
        createClient(clientConfig).fetch(
            groq`
                *[_type == "project" ${featuredFilter}] | order(displayOrder asc, _createdAt desc) [$offset...$end] {
                  _id,
                  projectName,
                  slug,
                  shortDescription,
                  projectImage {
                    asset -> {
                      _id,
                      url
                    }
                  },
                  skills,
                  cta,
                  viewCode,
                  projectType,
                  status,
                  startDate,
                  endDate,
                  featured,
                  displayOrder
                }
            `,
            { offset, end: offset + limit - 1 }
        ),
        createClient(clientConfig).fetch(
            groq`count(*[_type == "project" ${featuredFilter}])`
        )
    ]);

    return {
        projects,
        total: totalCount,
        hasMore: offset + limit < totalCount
    };
}

export const getArticlesPaginated = async (
    page: number = 1, 
    limit: number = 10, 
    featured?: boolean
): Promise<{ articles: Article[], total: number, hasMore: boolean }> => {
    const offset = (page - 1) * limit;
    const featuredFilter = featured !== undefined ? `&& featured == ${featured}` : '';
    
    const [articles, totalCount] = await Promise.all([
        createClient(clientConfig).fetch(
            groq`
                *[_type == "article" ${featuredFilter}] | order(publishedAt desc) [$offset...$end] {
                  _id,
                  title,
                  slug,
                  publishedAt,
                  excerpt,
                  mainImage {
                    asset -> {
                      _id,
                      url
                    }
                  },
                  tags,
                  featured
                }
            `,
            { offset, end: offset + limit - 1 }
        ),
        createClient(clientConfig).fetch(
            groq`count(*[_type == "article" ${featuredFilter}])`
        )
    ]);

    return {
        articles,
        total: totalCount,
        hasMore: offset + limit < totalCount
    };
}

// Search functionality
export const searchContent = async (
    query: string, 
    contentTypes: ('project' | 'article' | 'experience')[] = ['project', 'article', 'experience']
): Promise<{
    projects: Project[],
    articles: Article[],
    experiences: Experience[]
}> => {
    const typeFilter = contentTypes.map(type => `_type == "${type}"`).join(' || ');
    
    const results = await createClient(clientConfig).fetch(
        groq`
            *[${typeFilter} && (
                projectName.en match $query ||
                projectName.es match $query ||
                projectName.pt match $query ||
                title.en match $query ||
                title.es match $query ||
                title.pt match $query ||
                company.en match $query ||
                company.es match $query ||
                company.pt match $query ||
                shortDescription.en match $query ||
                shortDescription.es match $query ||
                shortDescription.pt match $query ||
                position.en match $query ||
                position.es match $query ||
                position.pt match $query
            )] {
                _type,
                _id,
                projectName,
                title,
                company,
                slug,
                shortDescription,
                excerpt,
                position,
                projectImage {
                  asset -> {
                    _id,
                    url
                  }
                },
                mainImage {
                  asset -> {
                    _id,
                    url
                  }
                },
                companyLogo {
                  asset -> {
                    _id,
                    url
                  }
                },
                featured,
                publishedAt,
                startDate,
                displayOrder
            }
        `,
        { query: `*${query}*` } as any
    );

    return {
        projects: results.filter((item: any) => item._type === 'project'),
        articles: results.filter((item: any) => item._type === 'article'),
        experiences: results.filter((item: any) => item._type === 'experience')
    };
}