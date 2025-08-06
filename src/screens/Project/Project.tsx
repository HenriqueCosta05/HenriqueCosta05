'use client';

import { Project } from "@/components/layouts";

interface ProjectScreenProps {
    projectIndex: number;
    projectName?: string;
}
export default function ProjectScreen({ projectName, projectIndex }: ProjectScreenProps) {
    return (
        <Project projectName={projectName} projectIndex={projectIndex} />
    )
}