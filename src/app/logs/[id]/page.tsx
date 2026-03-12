"use client";

import { use, useEffect, useState } from "react";
import { INITIAL_LOGS, ArchiveArtifact } from "@/lib/data";
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
    const hasGrayscale = props.className?.includes("grayscale") && !props.className?.includes("grayscale-0");

    return (
        <Image
            {...props}
            className={clsx(
                props.className,
                "transition-all duration-700 ease-in-out",
                isLoading ? "scale-[1.02] blur-xl grayscale opacity-0" : `scale-100 blur-0 opacity-100 ${hasGrayscale ? "" : "grayscale-0"}`
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
                                className={`w-full h-auto ${log.id === "LOG_2402" ? "grayscale" : ""}`}
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
                                    className={`w-full h-auto select-none pointer-events-none ${log.id === "LOG_2402" ? "grayscale" : ""}`}
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
                                    const isLongText = text.length > 200;

                                    return (
                                        <>
                                            <div className={`transition-all duration-300 relative`}>
                                                <p
                                                    className={`whitespace-pre-wrap text-left ${!isExpanded ? 'line-clamp-[8]' : ''}`}
                                                >
                                                    {text}
                                                </p>
                                                {!isExpanded && isLongText && (
                                                    <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent" />
                                                )}
                                            </div>

                                            {isLongText && (
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

                        {/* 4. Archive Timeline (Archaeological Excavation) */}
                        {log.archive && log.archive.length > 0 ? (
                            <div className="w-full">
                                <h2 className="text-sm font-bold uppercase border-b-2 border-black mb-0 pb-2">
                                    Excavation Log
                                    <span className="font-normal text-zinc-500 ml-2">
                                        {log.archive.length} artifacts recovered
                                    </span>
                                </h2>

                                <div className="relative mt-0">
                                    {/* Timeline spine */}
                                    <div className="absolute left-[7px] top-0 bottom-0 w-px bg-black/15" />

                                    {log.archive.map((artifact, i) => {
                                        const typeColors: Record<string, string> = {
                                            SITE_PHOTO: "bg-emerald-600",
                                            MASS_STUDY: "bg-blue-600",
                                            RENDER_WIP: "bg-amber-500",
                                            RENDER_FINAL: "bg-black",
                                            DIAGRAM: "bg-violet-600",
                                            DOCUMENT: "bg-zinc-400",
                                        };
                                        const isNewDay = i === 0 || artifact.timestamp.slice(0, 10) !== log.archive![i - 1].timestamp.slice(0, 10);

                                        return (
                                            <div key={i}>
                                                {/* Date separator */}
                                                {isNewDay && (
                                                    <div className="flex items-center gap-3 pt-8 pb-3 pl-6">
                                                        <div className="font-mono text-xs font-bold text-black tracking-wider">
                                                            {artifact.timestamp.slice(0, 10).replace(/\./g, "/")}
                                                        </div>
                                                        <div className="flex-1 h-px bg-black/10" />
                                                    </div>
                                                )}

                                                <div className="relative flex gap-4 pl-0 pb-6 group">
                                                    {/* Timeline dot */}
                                                    <div className={clsx(
                                                        "relative z-10 w-[15px] h-[15px] rounded-full border-2 border-white shrink-0 mt-1 transition-transform group-hover:scale-125",
                                                        typeColors[artifact.type] || "bg-zinc-400"
                                                    )} />

                                                    {/* Content */}
                                                    <div className="flex-1 min-w-0">
                                                        {/* Header row */}
                                                        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                                                            <span className="font-mono text-[10px] text-zinc-400">
                                                                {artifact.timestamp.slice(11) || "—"}
                                                            </span>
                                                            <span className={clsx(
                                                                "font-mono text-[10px] text-white px-1.5 py-0.5 uppercase tracking-wider",
                                                                typeColors[artifact.type] || "bg-zinc-400"
                                                            )}>
                                                                {artifact.type.replace(/_/g, " ")}
                                                            </span>
                                                            <span className="font-mono text-[10px] text-zinc-400 truncate">
                                                                {artifact.filename}
                                                            </span>
                                                        </div>

                                                        {/* Image */}
                                                        {artifact.src && (
                                                            <div
                                                                className="relative w-full mb-2 overflow-hidden bg-zinc-100"
                                                                onContextMenu={(e) => e.preventDefault()}
                                                            >
                                                                <FadeInImage
                                                                    src={artifact.src}
                                                                    alt={artifact.label}
                                                                    width={1200}
                                                                    height={800}
                                                                    className={`w-full h-auto transition-all duration-500 pointer-events-none select-none ${
                                                                        artifact.type === "SITE_PHOTO"
                                                                            ? "grayscale"
                                                                            : "grayscale hover:grayscale-0"
                                                                    }`}
                                                                />
                                                            </div>
                                                        )}

                                                        {/* Label */}
                                                        <p className="font-mono text-xs text-zinc-600 leading-relaxed">
                                                            {artifact.label}
                                                        </p>
                                                        {artifact.meta && (
                                                            <p className="font-mono text-[10px] text-zinc-400 mt-1">
                                                                {artifact.meta}
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}

                                    {/* End marker */}
                                    <div className="flex items-center gap-3 pl-0 pt-2">
                                        <div className="w-[15px] h-[15px] border-2 border-black/20 rounded-full shrink-0 flex items-center justify-center">
                                            <div className="w-[5px] h-[5px] bg-black/20 rounded-full" />
                                        </div>
                                        <span className="font-mono text-[10px] text-zinc-400 uppercase">
                                            end_of_excavation
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            /* Fallback: Original Process Documentation */
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
                            </div>
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
            </main>
        </>
    );
}
