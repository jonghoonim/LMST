"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, X, ZoomIn } from "lucide-react";
import { useState } from "react";
import { Project } from "@/lib/projects";

interface ProjectDetailClientProps {
    project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <div className="container mx-auto px-6 py-24">
            {/* Back Navigation */}
            <Link
                href="/projects"
                className="inline-flex items-center text-sm text-gray-400 hover:text-black transition-colors mb-12 tracking-widest uppercase"
            >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20 items-end">
                    <div className="lg:col-span-8">
                        <h1 className="text-3xl font-bold tracking-tight uppercase mb-6 leading-tight">
                            {project.title}
                        </h1>
                        <div className="flex flex-wrap text-sm text-gray-500 uppercase tracking-widest gap-6 md:gap-12">
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500/50"></span>
                                {project.category}
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500/50"></span>
                                {project.location}
                            </span>
                            <span className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-blue-500/50"></span>
                                {project.year}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Hero Image */}
                <div
                    className="relative w-full h-[60vh] md:h-[80vh] mb-24 overflow-hidden rounded-sm cursor-pointer group"
                    onClick={() => setSelectedImage(project.imageUrl)}
                >
                    <Image
                        src={project.imageUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                            <ZoomIn className="w-6 h-6 text-black" />
                        </div>
                    </div>
                </div>

                {/* Description & Context */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-24">
                    <div className="lg:col-span-4">
                        <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-t border-black pt-4">Project Description</h3>
                    </div>
                    <div className="lg:col-span-8">
                        <p className="text-lg md:text-xl font-light leading-relaxed text-gray-800 whitespace-pre-line">
                            {project.description}
                        </p>
                    </div>
                </div>

                {/* Masonry Gallery */}
                <div className="columns-1 md:columns-2 gap-8 space-y-8">
                    {project.images.map((img, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: index * 0.05 }}
                            className="relative w-full break-inside-avoid rounded-sm overflow-hidden cursor-pointer group"
                            onClick={() => setSelectedImage(img)}
                        >
                            <Image
                                src={img}
                                alt={`${project.title} view ${index + 1}`}
                                width={1200}
                                height={800}
                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                                    <ZoomIn className="w-5 h-5 text-black" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
                        onClick={() => setSelectedImage(null)}
                    >
                        <button
                            className="absolute top-8 right-8 p-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-50"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-6 h-6 text-black" />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full h-full max-w-7xl max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <Image
                                src={selectedImage}
                                alt="Full view"
                                fill
                                className="object-contain"
                                quality={100}
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
