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

export default function LogDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const log = INITIAL_LOGS.find((l) => l.id === id);
    const [isExpanded, setIsExpanded] = useState(false);

    if (!log) {
        return (
            <div className="flex h-screen items-center justify-center font-mono text-red-500">
                ERROR_404: LOG_NOT_FOUND
            </div>
        );
    }

    return (
        <main className="flex h-screen w-full flex-col font-mono text-xs sm:text-sm">
            {/* Top Bar Info: System Breadcrumb */}
            <div className="flex items-center justify-between border-b border-black px-4 py-3 bg-white z-50 sticky top-0">
                <div className="flex items-center gap-2 font-mono text-xs">
                    <Link href="/" className="hover:bg-black hover:text-white transition-colors font-bold">
                        [ ../ ]
                    </Link>
                    <span className="text-zinc-300">/</span>
                    <span className="text-zinc-400">ROOT</span>
                    <span className="text-zinc-300">/</span>
                    <span className="text-zinc-400">LOGS</span>
                    <span className="text-zinc-300">/</span>
                    <span className="text-black font-bold">{log.id}</span>
                </div>
            </div>

            {/* Scrollable Content */}
            <div className="flex flex-1 flex-col overflow-y-auto bg-white">

                {/* 1. Hero Image (Final Render) - Full Width */}
                <div className="relative w-full border-b border-black">
                    {/* View Label */}
                    <div className="absolute top-0 left-0 bg-black text-white px-2 py-1 z-10">
                        VIEW: FINAL_RENDER
                    </div>

                    <div className="relative w-full bg-zinc-200">
                        {log.finalImage ? (
                            <Image
                                src={log.finalImage}
                                alt={`${log.title} Final Render`}
                                width={0}
                                height={0}
                                sizes="100vw"
                                className="w-full h-auto"
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
                <div className="flex flex-col w-full max-w-7xl mx-auto px-4 py-16 sm:py-24">

                    {/* 2. Title & Narration (Expandable - First Paragraph Only) */}
                    <div className="mb-24 w-full">
                        <h1 className="text-3xl sm:text-5xl font-bold uppercase tracking-tighter leading-none mb-8 font-roboto-condensed">
                            {log.title}
                        </h1>

                        <div className="text-base sm:text-lg font-medium leading-relaxed text-black">
                            {(() => {
                                const text = log.description || MOCK_RAW_DATA;
                                const paragraphs = text.split(/\n\n/);
                                const firstParagraph = paragraphs[0];
                                const hasMore = paragraphs.length > 1;

                                return (
                                    <>
                                        <div className="transition-all duration-300">
                                            <p className="whitespace-pre-wrap text-justify">
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

                    {/* 3. Project Overview (Data Grid) */}
                    <div className="mb-24 w-full">
                        <h2 className="text-sm font-bold uppercase border-b-2 border-black mb-4 pb-1">Project Data</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-4 border-t-2 border-black">
                            {/* Column 1 */}
                            <div className="border-b border-zinc-200 py-3 sm:border-r sm:pr-4">
                                <div className="text-[10px] text-zinc-500 mb-1">STATUS</div>
                                <div className="font-bold">{log.status}</div>
                            </div>
                            {/* Column 2 */}
                            <div className="border-b border-zinc-200 py-3 sm:border-r sm:px-4">
                                <div className="text-[10px] text-zinc-500 mb-1">PHASE</div>
                                <div className="font-bold">{log.phase}</div>
                            </div>
                            {/* Column 3 */}
                            <div className="border-b border-zinc-200 py-3 sm:border-r sm:px-4">
                                <div className="text-[10px] text-zinc-500 mb-1">DATE</div>
                                <div className="font-bold">{log.date}</div>
                            </div>
                            {/* Column 4 */}
                            <div className="border-b border-zinc-200 py-3 sm:pl-4">
                                <div className="text-[10px] text-zinc-500 mb-1">FILE SIZE</div>
                                <div className="font-bold">{log.size}</div>
                            </div>

                            {/* Row 2 (Mock Data for OMA feel) */}
                            <div className="border-b border-zinc-200 py-3 sm:border-r sm:pr-4">
                                <div className="text-[10px] text-zinc-500 mb-1">PROGRAM</div>
                                <div className="font-bold">Algorithmic Study</div>
                            </div>
                            <div className="border-b border-zinc-200 py-3 sm:border-r sm:px-4">
                                <div className="text-[10px] text-zinc-500 mb-1">LOCATION</div>
                                <div className="font-bold">Digital Space</div>
                            </div>

                            <div className="border-b border-zinc-200 py-3 sm:pl-4">
                                <div className="text-[10px] text-zinc-500 mb-1">TEAM</div>
                                <div className="font-bold">User_01, Copilot</div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Process Images (The "Small Images") */}
                    <div className="w-full">
                        <h2 className="text-sm font-bold uppercase border-b-2 border-black mb-8 pb-1">Process Documentation</h2>

                        {log.rawImage ? (
                            <div className="grid grid-cols-1 gap-8">
                                <div className="relative w-full">
                                    <Image
                                        src={log.rawImage}
                                        alt="Process Log"
                                        width={1200}
                                        height={800}
                                        className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                                    />
                                    <div className="text-[10px] mt-2 font-mono text-zinc-500">
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
    );
}
