"use client";

import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ProjectDetailProps {
    params: {
        id: string;
    };
}

export default function ProjectDetail({ params }: ProjectDetailProps) {
    const project = projects.find((p) => p.id === params.id);

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto px-6 py-24">
            <Link
                href="/projects"
                className="inline-flex items-center text-sm text-gray-500 hover:text-black transition-colors mb-8"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h1 className="text-4xl font-light tracking-widest uppercase mb-4">
                    {project.title}
                </h1>
                <div className="flex flex-col md:flex-row md:items-center text-sm text-gray-500 mb-12 space-y-2 md:space-y-0 md:space-x-8">
                    <span>{project.category}</span>
                    <span>{project.location}</span>
                    <span>{project.year}</span>
                </div>

                <div className="relative w-full h-[60vh] mb-12 overflow-hidden">
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="max-w-3xl mx-auto">
                    <p className="text-lg font-light leading-relaxed mb-16">
                        {project.description}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {project.images.map((img, index) => (
                        <div key={index} className="relative w-full h-[400px]">
                            <Image
                                src={img}
                                alt={`${project.title} view ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>
            </motion.div>
        </div>
    );
}
