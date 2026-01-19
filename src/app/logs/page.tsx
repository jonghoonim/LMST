"use client";

import { INITIAL_LOGS, ProjectLog } from "@/lib/data";
import { PHILOSOPHY_CONTENT } from "@/lib/philosophy";
import Link from "next/link";
import { useState } from "react";

type LogNode = {
    type: "PROJECT" | "FILE";
    date: string; // YYYY.MM.DD
    name: string;
    size?: string;
    id?: string; // Only for PROJECT
    ext?: string; // Only for FILE
    content?: string; // Only for text files
};

const MOCK_FILES: Omit<LogNode, "type">[] = [
    { date: "2026.01.15", name: "Facade_Pattern_Test", ext: ".gh", size: "124KB" },
    { date: "2026.01.14", name: "SH_Housing_Idea_Note", ext: ".txt", size: "2KB" },
    {
        date: "2024.02.01",
        name: "LMST_OFFICE_STATEMENT",
        ext: ".md",
        size: "4KB",
        content: PHILOSOPHY_CONTENT
    },
    { date: "2025.12.02", name: "Optimization_Logic_v3", ext: ".py", size: "15KB" },
    { date: "2025.07.11", name: "Site_Analysis_Map", ext: ".dwg", size: "5.4MB" },
    { date: "2025.04.20", name: "Structure_Review_Report", ext: ".pdf", size: "8.1MB" },
    { date: "2024.11.05", name: "Concept_Sketch_Scans", ext: ".zip", size: "450MB" },
    { date: "2024.01.02", name: "Kickoff_Meeting_Minutes", ext: ".hwp", size: "24KB" },
];

export default function LogsIndexPage() {
    const [selectedFile, setSelectedFile] = useState<LogNode | null>(null);

    // Merge Real Projects and Mock Files
    const nodes: LogNode[] = [
        ...INITIAL_LOGS.map((log: ProjectLog) => ({
            type: "PROJECT" as const,
            date: log.date,
            name: log.title,
            size: log.size,
            id: log.id,
        })),
        ...MOCK_FILES.map((file) => ({
            type: "FILE" as const,
            date: file.date,
            name: file.name,
            size: file.size,
            ext: file.ext,
            content: file.content,
        })),
    ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // Group by Year
    const groupedNodes: Record<string, LogNode[]> = {};
    nodes.forEach((node) => {
        const year = node.date.split(".")[0];
        if (!groupedNodes[year]) groupedNodes[year] = [];
        groupedNodes[year].push(node);
    });

    return (
        <main className="min-h-screen w-full bg-[#F4F4F4] pt-20 px-4 pb-12 font-mono text-xs sm:text-sm">
            <h1 className="mb-8 font-bold text-lg">/ROOT/LOGS_DIRECTORY</h1>

            <div className="flex flex-col gap-1">
                <div className="text-zinc-500">.</div>

                {Object.keys(groupedNodes)
                    .sort((a, b) => Number(b) - Number(a))
                    .map((year, i, arr) => (
                        <div key={year}>
                            <div className="flex gap-2 font-bold text-black mt-4 mb-1">
                                <span className="text-zinc-400">├──</span>
                                <span>{year}_ARCHIVE</span>
                            </div>

                            {groupedNodes[year].map((node, j) => {
                                const isProject = node.type === "PROJECT";
                                const isClickableFile = node.type === "FILE" && node.content;

                                return (
                                    <div key={j} className="flex gap-2 pl-8 hover:bg-zinc-200/50 transition-colors group">
                                        <span className="text-zinc-300">├──</span>
                                        <span className="text-zinc-400 w-24 shrink-0">[{node.date}]</span>

                                        {isProject ? (
                                            <Link
                                                href={`/logs/${node.id}`}
                                                className="font-bold text-black hover:underline flex gap-2"
                                            >
                                                <span>{node.id}_{node.name}</span>
                                                <span className="text-blue-600 ml-2">[DIR]</span>
                                            </Link>
                                        ) : (
                                            <div
                                                className={`flex gap-2 ${isClickableFile ? "cursor-pointer text-zinc-800 hover:bg-black hover:text-white px-1 -ml-1" : "cursor-not-allowed text-zinc-500"}`}
                                                onClick={() => isClickableFile && setSelectedFile(node)}
                                            >
                                                <span>{node.name}{node.ext}</span>
                                                <span className={`${isClickableFile ? "" : "opacity-50"} ml-2 text-zinc-400`}>({node.size})</span>
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    ))}

                <div className="mt-4 text-zinc-400">
                    └── <span className="italic opacity-50">...end_of_stream...</span>
                </div>
            </div>

            <div className="fixed bottom-4 right-4 text-right text-zinc-400 text-[10px]">
                TOTAL_NODES: {nodes.length}<br />
                LAST_SYNC: {new Date().toLocaleDateString()}
            </div>

            {/* File Viewer Modal */}
            {selectedFile && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
                    onClick={() => setSelectedFile(null)}
                >
                    <div
                        className="bg-white w-full max-w-2xl max-h-[80vh] overflow-y-auto border border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="flex justify-between items-center mb-4 border-b border-black pb-2">
                            <h2 className="font-bold text-lg">{selectedFile.name}{selectedFile.ext}</h2>
                            <button
                                onClick={() => setSelectedFile(null)}
                                className="hover:bg-red-500 hover:text-white px-2 font-bold"
                            >
                                [X] CLOSE
                            </button>
                        </div>
                        <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-zinc-800">
                            {selectedFile.content}
                        </pre>
                    </div>
                </div>
            )}
        </main>
    );
}
