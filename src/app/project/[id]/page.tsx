import { generateBreadcrumbSchema, generateProjectSchema, generateSEO } from "@/lib/seo";
import { ProjectScreen } from "@/screens";
import { getProjectBySlug } from "@/services/sanity";
import { getLocaleKey, getUserLocale } from "@/utils";
import type { Metadata } from 'next';

interface ProjectPageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { id } = await params;
    const locale = await getUserLocale();
    const localeKey = getLocaleKey(locale);

    try {
        const project = await getProjectBySlug(id);

        if (!project) {
            return generateSEO({
                title: 'Project Not Found',
                description: 'The requested project could not be found.',
                locale,
            });
        }

        const title = project.seo?.metaTitle?.[localeKey] || project.projectName[localeKey];
        const description = project.seo?.metaDescription?.[localeKey] || project.shortDescription[localeKey];
        const image = project.seo?.ogImage?.asset?.url || project.projectImage?.asset?.url;
        const keywords = project.seo?.keywords || project.skills.map((s: any) => s.name);

        return generateSEO({
            title,
            description,
            keywords,
            image,
            url: `https://henriquecosta.dev/project/${id}`,
            type: 'website',
            locale,
        });
    } catch (error) {
        return generateSEO({
            title: 'Project Not Found',
            description: 'The requested project could not be found.',
            locale,
        });
    }
}

export default async function ProjectPage({ params }: ProjectPageProps) {

    const { id } = await params;
    const project = await getProjectBySlug(id);
    const locale = await getUserLocale();
    const localeKey = getLocaleKey(locale);

    if (!project) {
        return null;
    }

    const projectSchema = generateProjectSchema({
        name: project.projectName[localeKey],
        description: project.shortDescription[localeKey],
        image: project.projectImage?.asset?.url,
        url: `https://henriquecosta.dev/project/${id}`,
        technologies: project.skills.map((s: any) => s.name),
        startDate: project.startDate,
        endDate: project.endDate,
    });

    const breadcrumbSchema = generateBreadcrumbSchema([
        { name: 'Home', url: 'https://henriquecosta.dev' },
        { name: 'Projects', url: 'https://henriquecosta.dev/#projects' },
        { name: project.projectName[localeKey], url: `https://henriquecosta.dev/project/${id}` },
    ]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(projectSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbSchema),
                }}
            />
            <ProjectScreen projectSlug={id} />
        </>
    );
}
