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

    return (
        <>
            <ProjectDetailClient project={project} />
            <ProcessGrid items={[
                {
                    id: "p1",
                    type: "text",
                    content: "Algorithm is not just a tool, but a translator of logic.",
                    size: "normal"
                },
                {
                    id: "p2",
                    type: "image",
                    src: "/process_01.png", // Start with placeholder, will ask user to confirm paths
                    caption: "Rhino.Inside.Revit Mesh Translation",
                    size: "wide"
                },
                {
                    id: "p3",
                    type: "image",
                    src: "/process_02.png",
                    caption: "Grasshopper Logic Definition",
                    size: "normal"
                }
            ]} />
        </>
    );
}

// Dynamically import ProcessGrid to avoid SSR issues if any, but standard import is fine for client components usually.
// However, since ProjectDetailClient is handling the main content, putting ProcessGrid here makes sense to stack them.
import ProcessGrid from "@/components/ProcessGrid";

