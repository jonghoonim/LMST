"use client";

import { use, useEffect, useState } from "react";
import { INITIAL_LOGS } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { clsx } from "clsx";

// Mock raw data for demonstration
const MOCK_RAW_DATA = `Error: Mesh topology invalid at index 4022.
Attempting auto-repair... Failed.
> Optimization terminated. 
> Result: 154 unstable nodes.

// Grasshopper Logic Patch v0.4
if (curvature > 0.8) {
  panel.subdivide(u=4, v=4);
} else {
  return null; // Unexpected null reference
}`;

export default function LogDetailPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const log = INITIAL_LOGS.find((l) => l.id === id);
    const [activeTab, setActiveTab] = useState<"FINAL" | "RAW">("FINAL");

    if (!log) {
        return (
            <div className="flex h-screen items-center justify-center font-mono text-red-500">
                ERROR_404: LOG_NOT_FOUND
            </div>
        );
    }

    return (
        <main className="flex h-screen w-full flex-col font-mono text-xs sm:text-sm">
            {/* Top Bar Info */}
            <div className="flex items-center justify-between border-b border-black px-4 py-2">
                <div className="flex gap-4">
                    <Link href="/" className="hover:bg-black hover:text-white px-1">
                        ← BACK_TO_INDEX
                    </Link>
                    <span className="font-bold">{log.title}</span>
                </div>
                <div className="flex gap-4 text-zinc-500">
                    <span>{log.id}</span>
                    <span>{log.phase}</span>
                    <span
                        className={clsx(
                            log.status === "RUNTIME_ERROR" && "text-red-500",
                            log.status === "COMPILED" && "text-green-500",
                            log.status === "WARNING" && "text-yellow-500",
                            log.status === "UNREACHABLE" && "text-purple-500",
                            log.status === "NULL" && "text-gray-400"
                        )}
                    >
                        {log.status}
                    </span>
                </div>
            </div>

            {/* Vertical Stack Content */}
            <div className="flex flex-1 flex-col overflow-y-auto">
                {/* Top: Final Intent (Image) - OMA Style Full Width */}
                <div className="relative w-full">
                    {/* Massive Bold Title Overlay */}
                    <div className="absolute top-0 left-0 w-full p-4 sm:p-8 z-20 pointer-events-none mix-blend-difference text-white">
                        <h1 className="text-5xl sm:text-8xl font-black uppercase tracking-tighter leading-none opacity-90">
                            {log.title}
                        </h1>
                    </div>

                    <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 z-10 text-xs font-bold tracking-widest">
                        VIEW: FINAL_RENDER
                    </div>

                    {/* Full Bleed Image Container */}
                    <div className="relative w-full h-[60vh] sm:h-[80vh] bg-zinc-200 overflow-hidden">
                        {log.finalImage ? (
                            <Image
                                src={log.finalImage}
                                alt={`${log.title} Final Render`}
                                fill
                                className="object-cover"
                                priority
                                quality={100}
                                sizes="100vw"
                            />
                        ) : (
                            <div className="flex h-full w-full items-center justify-center text-zinc-400 text-center">
                                <div>
                                    <span className="text-4xl sm:text-6xl font-black opacity-20 block mb-4">NO_IMAGE</span>
                                    {log.title}_FINAL.jpg
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Bottom: Raw Process (Documentation) - "Not Filled" Space */}
                <div className="relative flex flex-col bg-[#F4F4F4] text-black pb-24 pt-16 px-4">
                    {/* Floating Badge */}
                    <div className="absolute top-0 left-4 -translate-y-1/2 bg-red-600 text-white px-4 py-2 text-sm font-bold tracking-widest z-10 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                        PROCESS_LOG & ERROR
                    </div>

                    <div className="w-full max-w-3xl mx-auto">
                        <h2 className="text-3xl sm:text-4xl font-black mb-8 border-b-4 border-black pb-2 uppercase tracking-tight">
                            Process Record
                        </h2>

                        {log.rawImage && (
                            <div className="relative mb-12 w-full border-2 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.1)]">
                                <Image
                                    src={log.rawImage}
                                    alt="Process Log"
                                    width={1000}
                                    height={800}
                                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                                />
                                <div className="bg-black text-white text-xs px-2 py-1 font-mono border-t-2 border-black flex justify-between">
                                    <span>RAW_CAPTURE</span>
                                    <span>{log.date}</span>
                                </div>
                            </div>
                        )}

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-xl font-bold mb-4 uppercase bg-black text-white inline-block px-2">System Log</h3>
                                <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                                    {log.description || MOCK_RAW_DATA}
                                </pre>
                            </div>

                            {log.warningMessage && (
                                <div>
                                    <h3 className="text-xl font-bold mb-4 uppercase text-red-600 bg-red-100 inline-block px-2">Critical Warning</h3>
                                    <div className="border-4 border-red-600 p-6 text-red-600 bg-white shadow-[4px_4px_0px_0px_rgba(220,38,38,1)]">
                                        <p className="font-bold text-lg">⚠ {log.warningMessage}</p>
                                    </div>
                                </div>
                            )}

                            {!log.warningMessage && (
                                <div className="border-2 border-zinc-300 p-6 text-zinc-400 bg-zinc-50 italic text-center">
                                    NO_SYSTEM_WARNINGS_DETECTED
                                </div>
                            )}

                            <div>
                                <h3 className="text-xl font-bold mb-4 uppercase border-b-2 border-black inline-block">Data Manifest</h3>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-sm font-mono border-t-2 border-black pt-4">
                                    <div>
                                        <div className="text-zinc-500 text-xs mb-1">FILE_SIZE</div>
                                        <div className="font-bold text-lg">{log.size}</div>
                                    </div>
                                    <div>
                                        <div className="text-zinc-500 text-xs mb-1">LAST_MOD</div>
                                        <div className="font-bold text-lg">{log.date}</div>
                                    </div>
                                    <div>
                                        <div className="text-zinc-500 text-xs mb-1">AUTHOR</div>
                                        <div className="font-bold text-lg">User_01</div>
                                    </div>
                                    <div>
                                        <div className="text-zinc-500 text-xs mb-1">PHASE</div>
                                        <div className="font-bold text-lg">{log.phase}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
