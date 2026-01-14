"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";
import { useState, useMemo } from "react";

export default function WorksClient() {
    const [filterYear, setFilterYear] = useState<string>("All");
    const [filterType, setFilterType] = useState<string>("All");
    const [filterStatus, setFilterStatus] = useState<string>("All");

    // Extract unique values for filters
    const years = useMemo(() => ["All", ...Array.from(new Set(projects.map(p => p.year))).sort().reverse()], []);
    const types = useMemo(() => ["All", ...Array.from(new Set(projects.map(p => p.type).filter(Boolean))).sort()], []);
    const statuses = useMemo(() => ["All", ...Array.from(new Set(projects.map(p => p.status).filter(Boolean))).sort()], []);

    const filteredProjects = projects.filter(project => {
        if (filterYear !== "All" && project.year !== filterYear) return false;
        if (filterType !== "All" && project.type !== filterType) return false;
        if (filterStatus !== "All" && project.status !== filterStatus) return false;
        return true;
    });

    return (
        <div className="container mx-auto px-6 py-24">
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-4xl font-bold tracking-widest uppercase mb-12 text-center"
            >
                WORKS
            </motion.h1>

            {/* Filters */}
            <div className="mb-12 flex flex-wrap justify-center gap-6 items-center">
                {/* Year Filter */}
                <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold uppercase">Year</span>
                    <select
                        value={filterYear}
                        onChange={(e) => setFilterYear(e.target.value)}
                        className="border-b border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-black bg-transparent"
                    >
                        {years.map((year: string) => (
                            <option key={year} value={year}>{year}</option>
                        ))}
                    </select>
                </div>

                {/* Type Filter */}
                <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold uppercase">Type</span>
                    <select
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                        className="border-b border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-black bg-transparent"
                    >
                        {types.map((type: string) => (
                            <option key={type} value={type}>{type}</option>
                        ))}
                    </select>
                </div>

                {/* Status Filter */}
                <div className="flex items-center space-x-2">
                    <span className="text-sm font-bold uppercase">Status</span>
                    <select
                        value={filterStatus}
                        onChange={(e) => setFilterStatus(e.target.value)}
                        className="border-b border-gray-300 py-1 px-2 text-sm focus:outline-none focus:border-black bg-transparent"
                    >
                        {statuses.map((status: string) => (
                            <option key={status} value={status}>{status}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                        <ProjectCard {...project} />
                    </motion.div>
                ))}
            </div>

            {filteredProjects.length === 0 && (
                <div className="text-center text-gray-500 py-12">
                    No works found matching the selected filters.
                </div>
            )}
        </div>
    );
}
