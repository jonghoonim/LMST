"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "@/lib/projects";

export default function ProjectCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsToShow = 3;

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    // Calculate visible items with wrap-around
    const visibleProjects = [];
    for (let i = 0; i < itemsToShow; i++) {
        const index = (currentIndex + i) % projects.length;
        visibleProjects.push(projects[index]);
    }

    return (
        <div className="relative w-full">
            <div className="overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {visibleProjects.map((project, i) => (
                            <motion.div
                                key={`${project.id}-${currentIndex}`}
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="relative aspect-[3/4] bg-gray-100 group cursor-pointer"
                            >
                                <Link href={`/works/${project.id}`} className="block w-full h-full">
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                                    <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                                        <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-1">{project.title}</h3>
                                        <p className="text-xs font-bold text-white uppercase tracking-widest opacity-80">{project.category}</p>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-end mt-8 gap-4">
                <button
                    onClick={prevSlide}
                    className="p-2 border border-black hover:bg-black hover:text-white transition-colors"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={nextSlide}
                    className="p-2 border border-black hover:bg-black hover:text-white transition-colors"
                >
                    <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
}
