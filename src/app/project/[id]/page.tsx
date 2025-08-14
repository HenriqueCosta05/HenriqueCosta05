import { ProjectScreen } from "@/screens";

interface ProjectPageProps {
    params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {

    const { id } = await params;

    return <ProjectScreen projectSlug={id} />;
}