import { Metadata } from "next";
import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import ProjectDetailClient from "./ProjectDetailClient";

// Update Page Props type for Next.js 15+
interface ProjectDetailProps {
    params: Promise<{
        id: string;
    }>;
}

export async function generateMetadata({ params }: ProjectDetailProps): Promise<Metadata> {
    const resolvedParams = await params;
    const project = projects.find((p) => p.id === resolvedParams.id);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `WORKS | ${project.title}`,
    };
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
    const resolvedParams = await params;
    const project = projects.find((p) => p.id === resolvedParams.id);

    if (!project) {
        notFound();
    }

    return <ProjectDetailClient project={project} />;
}

