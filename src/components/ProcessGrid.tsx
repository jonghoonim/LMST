"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export type ProcessItem = {
    id: string;
    type: "image" | "text";
    src?: string;
    content?: string;
    caption?: string;
    size?: "normal" | "wide" | "tall";
    aspectRatio?: "video" | "square" | "portrait"; // Optional helper for layout
};

interface ProcessGridProps {
    items: ProcessItem[];
}

export default function ProcessGrid({ items }: ProcessGridProps) {
    return (
        <section className="py-24 border-t border-gray-200">
            <div className="container mx-auto px-6">
                <header className="mb-12">
                    <h2 className="text-3xl font-bold uppercase tracking-wider mb-4">Process</h2>
                    <p className="text-gray-500 max-w-2xl">
                        Design translation workflow: From raw algorithm to BIM documentation.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-min">
                    {items.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`
                                relative flex flex-col gap-2 
                                ${item.size === 'wide' ? 'md:col-span-2' : ''}
                                ${item.size === 'tall' ? 'row-span-2' : ''}
                            `}
                        >
                            {item.type === "image" && item.src && (
                                <div className="relative w-full bg-gray-100 overflow-hidden group">
                                    <Image
                                        src={item.src}
                                        alt={item.caption || "Process image"}
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            )}

                            {item.type === "text" && (
                                <div className="p-6 bg-gray-50 h-full flex items-center justify-center">
                                    <p className="text-lg font-serif italic text-gray-800 text-center leading-relaxed">
                                        "{item.content}"
                                    </p>
                                </div>
                            )}

                            {item.caption && (
                                <div className="mt-2 text-xs font-mono text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                    <span className="w-2 h-px bg-gray-400"></span>
                                    {item.caption}
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
