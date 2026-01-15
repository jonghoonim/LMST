"use client";

import { use, useEffect, useState } from "react";
import { INITIAL_LOGS } from "@/lib/data";
import Link from "next/link";
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
                            log.status === "WARNING" && "text-yellow-500"
                        )}
                    >
                        {log.status}
                    </span>
                </div>
            </div>

            {/* Split View Content */}
            <div className="flex flex-1 flex-col sm:flex-row">
                {/* Left: Final Intent */}
                <div className="relative flex flex-1 flex-col border-b border-black sm:border-b-0 sm:border-r">
                    <div className="absolute top-0 left-0 bg-black text-white px-2 py-1 z-10">
                        VIEW: FINAL_RENDER
                    </div>
                    <div className="flex h-full w-full items-center justify-center bg-zinc-200">
                        {/* Placeholder for Final Image */}
                        <div className="text-zinc-400 text-center">
                            [IMG_PLACEHOLDER]
                            <br />
                            {log.title}_FINAL.jpg
                        </div>
                    </div>
                </div>

                {/* Right: Raw Process */}
                <div className="relative flex flex-1 flex-col bg-[#F4F4F4] text-zinc-600">
                    <div className="absolute top-0 left-0 bg-red-600 text-white px-2 py-1 z-10">
                        VIEW: PROCESS_LOG & ERROR
                    </div>
                    <div className="flex h-full w-full flex-col p-8 overflow-auto">
                        <pre className="whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {MOCK_RAW_DATA}
                        </pre>
                        <div className="mt-8 border border-red-500 p-4 text-red-600 bg-red-50">
                            <h3 className="font-bold mb-2">⚠ SYSTEM WARNING</h3>
                            <p>Geometry deviation exceeds tolerance (0.05mm).</p>
                            <p>Check parameter `t` in definition `surface_gen.gh`.</p>
                        </div>
                        <div className="mt-8">
                            <h3 className="font-bold mb-2 uppercase text-black">Data_Manifest</h3>
                            <div className="grid grid-cols-2 gap-2 text-zinc-500">
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
