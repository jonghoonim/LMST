"use client";

import { use, useEffect, useState } from "react";
import { INITIAL_LOGS } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";

// Mock raw data for demonstration
const MOCK_RAW_DATA = `OMA-STYLE NARRATION MOCKUP:
This project explores the intersection of algorithmic logic and material reality. By utilizing recursive subdivision techniques, we generated a mesh that responds to curvature parameters derived from environmental analysis. The process involved 154 iterations of optimization, resulting in a stable yet complex topology.

The structural integrity was verified through finite element analysis, revealing stress concentration at the nodes which were subsequently reinforced. The aesthetic language emerges from this rigorous logic, avoiding arbitrary form-making.

Data flow:
1. Input: Site Boundaries & Wind Rose
2. Process: Curvature Field Generation
3. Output: Rationalized Panel Geometry

Final compilation achieved with 0.4s compute time per iteration. The system remains open for further adaptation to varying scales.`;

function FadeInImage(props: React.ComponentProps<typeof Image>) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <Image
            {...props}
            className={clsx(
                props.className,
                "transition-all duration-700 ease-in-out",
                isLoading ? "scale-[1.02] blur-xl grayscale opacity-0" : "scale-100 blur-0 grayscale-0 opacity-100"
            )}
            onLoadingComplete={() => setIsLoading(false)}
        />
    );
}

export default function LogDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const log = INITIAL_LOGS.find((l) => l.id === id);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLightboxOpen, setIsLightboxOpen] = useState(false);

    if (!log) {
        return (
            <div className="flex h-screen items-center justify-center font-mono text-red-500">
                ERROR_404: LOG_NOT_FOUND
            </div>
        );
    }

    return (
        <>
            {/* Lightbox Overlay */}
            {isLightboxOpen && (
                <div
                    className="fixed inset-0 z-[100] bg-[#F4F4F4] overflow-y-auto cursor-zoom-out"
                    onClick={() => setIsLightboxOpen(false)}
                >
                    <div className="w-full min-h-screen">
                        {log.finalImage && (
                            <FadeInImage
                                src={log.finalImage}
                                alt={`${log.title} Full View`}
                                width={3840}
                                height={2160}
                                sizes="100vw"
                                className="w-full h-auto"
                                priority
                                unoptimized
                            />
                        )}
                    </div>
                </div>
            )}

            <main className="flex h-screen w-full flex-col font-mono text-xs sm:text-sm">
                {/* Top Bar Info: System Breadcrumb (Sticky Second Header) */}
                <div className="sticky top-0 sm:top-12 left-0 w-full flex items-center justify-between px-4 py-3 z-40 bg-[#F4F4F4]/90 backdrop-blur-sm border-b border-black/10 text-black">
                    <div className="flex items-center gap-2 font-mono text-xs">
                        <Link href="/" className="hover:underline transition-all font-bold">
                            [ ../ ]
                        </Link>
                        <span className="opacity-50">/</span>
                        <span className="opacity-70">ROOT</span>
                        <span className="opacity-50">/</span>
                        <span className="opacity-70">LOGS</span>
                        <span className="opacity-50">/</span>
                        <span className="font-bold">{log.id}</span>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex flex-1 flex-col overflow-y-auto bg-white">

                    {/* 1. Hero Image (Final Render) - Full Width */}
                    <div
                        className="relative w-full border-b border-black cursor-zoom-in group"
                        onContextMenu={(e) => e.preventDefault()}
                        onClick={() => setIsLightboxOpen(true)}
                    >
                        {/* View Label */}
                        <div className="absolute bottom-0 left-0 bg-black text-white px-2 py-1 z-10 group-hover:bg-[#00FF00] group-hover:text-black transition-colors">
                            VIEW: FINAL_RENDER [CLICK_TO_EXPAND]
                        </div>

                        <div className="relative w-full bg-zinc-200 aspect-video overflow-hidden">
                            {log.finalImage ? (
                                <FadeInImage
                                    src={log.finalImage}
                                    alt={`${log.title} Final Render`}
                                    width={3840}
                                    height={2160}
                                    sizes="100vw"
                                    className="w-full h-auto select-none pointer-events-none"
                                    priority
                                    unoptimized
                                />
                            ) : (
                                <div className="flex w-full aspect-video items-center justify-center text-zinc-400 text-center">
                                    <div>
                                        <span className="text-4xl sm:text-6xl font-black opacity-20 block mb-4">NO_IMAGE</span>
                                        {log.title}_FINAL.jpg
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Content Section: OMA Layout (Narration -> Overview -> Images) */}
                    <div className="flex flex-col w-full max-w-[960px] mx-auto px-4 py-16 sm:py-24">

                        {/* 2. Title & Narration (Expandable - First Paragraph Only) */}
                        <div className="mb-24 w-full">
                            <h1 className="text-2xl sm:text-5xl font-bold uppercase tracking-tighter leading-none mb-8 font-swis721">
                                {log.title}
                            </h1>

                            <div className="text-base sm:text-lg font-pretendard font-medium leading-relaxed text-black">
                                {(() => {
                                    const text = log.description || MOCK_RAW_DATA;
                                    const paragraphs = text.split(/\n\n/);
                                    const firstParagraph = paragraphs[0];
                                    const hasMore = paragraphs.length > 1;

                                    return (
                                        <>
                                            <div className="transition-all duration-300">
                                                <p className="whitespace-pre-wrap text-left">
                                                    {isExpanded ? text : firstParagraph}
                                                    {!isExpanded && hasMore && "..."}
                                                </p>
                                            </div>

                                            {hasMore && (
                                                <button
                                                    onClick={() => setIsExpanded(!isExpanded)}
                                                    className="mt-4 underline decoration-2 underline-offset-4 hover:bg-black hover:text-white transition-all font-bold text-sm uppercase"
                                                >
                                                    {isExpanded ? "Read Less" : "Read More"}
                                                </button>
                                            )}
                                        </>
                                    );
                                })()}
                            </div>
                        </div>

                        {/* 3. Project Overview (List Style) */}
                        <div className="mb-24 w-full">
                            <h2 className="text-sm font-bold uppercase border-b-2 border-black mb-0 pb-2">Project Data</h2>
                            <div className="flex flex-col border-t-0 border-black">
                                {[
                                    { label: "Location", value: log.location },
                                    { label: "Program", value: log.program },
                                    { label: "Site Area", value: log.siteArea },
                                    { label: "Gross Floor Area", value: log.totalArea },
                                    { label: "Building Scale", value: log.buildingScope },
                                    { label: "Structure", value: log.structure },
                                    { label: "Exterior Finish", value: log.exteriorFinish },
                                    { label: "Architects", value: log.architects || log.team },
                                    { label: "Status", value: log.phase },
                                ].map((item, i) => (
                                    item.value && (
                                        <div key={i} className="flex flex-col sm:flex-row border-b border-black/10 py-3 sm:py-2 text-sm">
                                            <div className="w-[180px] shrink-0 font-bold uppercase text-zinc-500 sm:text-black">
                                                {item.label}
                                            </div>
                                            <div className="font-normal text-black font-mono">
                                                {item.value}
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>

                        {/* 4. Process Images (The "Small Images") */}
                        <div className="w-full">
                            <h2 className="text-sm font-bold uppercase border-b-2 border-black mb-8 pb-1">Process Documentation</h2>

                            {log.rawImage ? (
                                <div className="grid grid-cols-1 gap-8">
                                    <div
                                        className="relative w-full bg-zinc-100 overflow-hidden"
                                        onContextMenu={(e) => e.preventDefault()}
                                    >
                                        <FadeInImage
                                            src={log.rawImage}
                                            alt="Process Log"
                                            width={1200}
                                            height={800}
                                            className="w-full h-auto grayscale hover:grayscale-0 transition-grayscale duration-300 pointer-events-none"
                                        />
                                        <div className="text-xs mt-2 font-mono text-zinc-500">
                                            FIG 1. RAW_CAPTURE_{log.date}
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="text-zinc-400 italic">topological_data_pending...</div>
                            )}

                            {log.warningMessage && (
                                <div className="mt-12 p-6 border-l-4 border-red-600 bg-red-50">
                                    <div className="text-red-600 font-bold uppercase mb-2 text-xs">System Alert</div>
                                    <div className="text-red-600 font-mono text-lg font-bold">
                                        {log.warningMessage}
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </main>
        </>
    );
}
