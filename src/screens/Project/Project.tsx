'use client';

import { Project } from "@/components/layouts";

interface ProjectScreenProps {
   projectSlug: string;
}

export default function ProjectScreen({ projectSlug }: ProjectScreenProps) {
    return (
        <Project projectSlug={projectSlug} />
    )
}