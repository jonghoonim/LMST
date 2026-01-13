"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Quantum Void",
        category: "Digital Structure",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 2,
        title: "Neural Network",
        category: "Algorithmic Design",
        image: "https://images.unsplash.com/photo-1633613286991-611fe299c4be?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 3,
        title: "Cybernetic Hive",
        category: "Parametric System",
        image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 4,
        title: "Digital Horizon",
        category: "Virtual Landscape",
        image: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 5,
        title: "Abstract Logic",
        category: "Computational Form",
        image: "https://images.unsplash.com/photo-1506784365847-bbad939e9335?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 6,
        title: "Time Dilation",
        category: "Temporal Space",
        image: "https://images.unsplash.com/photo-1534972195531-d756b9bfa9f2?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 7,
        title: "Matter Synthesis",
        category: "Material Physics",
        image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 8,
        title: "Spatial Echo",
        category: "Acoustic Geometry",
        image: "https://images.unsplash.com/photo-1515462277126-2dd0c162007a?q=80&w=1000&auto=format&fit=crop"
    },
    {
        id: 9,
        title: "Logic Gate",
        category: "Binary Architecture",
        image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1000&auto=format&fit=crop"
    }
];

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
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                                    <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-1">{project.title}</h3>
                                    <p className="text-xs font-bold text-white uppercase tracking-widest opacity-80">{project.category}</p>
                                </div>
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
