import { ProjectScreen } from "@/screens";

interface ProjectPageProps {
    params: Promise<{ id: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { id } = await params;
    const projectIndex = id !== undefined ? Number(id) : 0;
    
    return <ProjectScreen projectIndex={projectIndex} />;
}