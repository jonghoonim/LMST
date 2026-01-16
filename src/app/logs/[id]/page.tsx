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
            <div className="flex items-center justify-between border-b border-black px-4 py-2 dark:border-white">
                <div className="flex gap-4">
                    <Link href="/" className="hover:bg-black hover:text-white px-1 dark:hover:bg-white dark:hover:text-black">
                        ← BACK_TO_INDEX
                    </Link>
                    <span className="font-bold">{log.title}</span>
                </div>
                <div className="flex gap-4 text-zinc-500 dark:text-zinc-400">
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

            {/* Split View Content */}
            <div className="flex flex-1 flex-col sm:flex-row">
                {/* Left: Final Intent */}
                <div className="relative flex min-h-[50vh] flex-1 flex-col border-b border-black sm:min-h-0 sm:border-b-0 sm:border-r dark:border-white">
                    <div className="absolute top-0 left-0 bg-black text-white px-2 py-1 z-10 dark:bg-white dark:text-black">
                        VIEW: FINAL_RENDER
                    </div>
                    <div className="relative flex h-full w-full items-center justify-center bg-zinc-200 overflow-hidden dark:bg-zinc-800">
                        {log.finalImage ? (
                            <Image
                                src={log.finalImage}
                                alt={`${log.title} Final Render`}
                                fill
                                className="object-cover"
                                priority
                                quality={100}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        ) : (
                            <div className="text-zinc-400 text-center">
                                [IMG_PLACEHOLDER]
                                <br />
                                {log.title}_FINAL.jpg
                            </div>
                        )}
                    </div>
                </div>

                {/* Right: Raw Process */}
                <div className="relative flex flex-1 flex-col bg-[#F4F4F4] text-zinc-600 dark:bg-black dark:text-zinc-400">
                    <div className="absolute top-0 left-0 bg-red-600 text-white px-2 py-1 z-10">
                        VIEW: PROCESS_LOG & ERROR
                    </div>
                    <div className="flex h-full w-full flex-col p-8 overflow-auto">
                        {log.rawImage && (
                            <div className="relative mb-6 w-full border border-zinc-300 dark:border-zinc-700">
                                <Image
                                    src={log.rawImage}
                                    alt="Process Log"
                                    width={1000}
                                    height={800}
                                    className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
                                />
                                <div className="bg-zinc-200 text-[10px] px-1 py-0.5 font-mono text-zinc-500 border-t border-zinc-300 dark:bg-zinc-800 dark:border-zinc-700">
                                    IMG_SOURCE: SCREEN_CAPTURE_{log.date.replace(/\./g, "")}.PNG
                                </div>
                            </div>
                        )}
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed font-sans">
                            {log.description || MOCK_RAW_DATA}
                        </pre>
                        {log.warningMessage && (
                            <div className="mt-8 border border-red-500 p-4 text-red-600 bg-red-50 dark:bg-red-900/10">
                                <h3 className="font-bold mb-2">⚠ SYSTEM WARNING</h3>
                                <p>{log.warningMessage}</p>
                            </div>
                        )}
                        {!log.warningMessage && (
                            <div className="mt-8 border border-zinc-300 p-4 text-zinc-500 bg-zinc-100 italic dark:bg-zinc-900 dark:border-zinc-700">
                                NO_SYSTEM_WARNINGS_DETECTED
                            </div>
                        )}
                        <div className="mt-8">
                            <h3 className="font-bold mb-2 uppercase text-black dark:text-white">Data_Manifest</h3>
                            <div className="grid grid-cols-2 gap-2 text-zinc-500 dark:text-zinc-400">
                                <div>File_Size:</div><div>{log.size}</div>
                                <div>Last_Mod:</div><div>{log.date}</div>
                                <div>Author:</div><div>User_01</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
