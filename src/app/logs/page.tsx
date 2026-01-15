"use client";

import { INITIAL_LOGS } from "@/lib/data";
import Link from "next/link";

export default function LogsIndexPage() {
    return (
        <main className="flex min-h-screen w-full flex-col bg-[#F4F4F4] font-mono text-xs sm:text-sm pt-16 px-4">
            <h1 className="mb-8 font-bold text-lg">/ROOT/LOGS_DIRECTORY</h1>

            <div className="flex flex-col gap-1">
                <div className="text-zinc-500">.</div>
                <div className="text-zinc-500">└── projects</div>

                {INITIAL_LOGS.map((log, index) => {
                    const isLast = index === INITIAL_LOGS.length - 1;
                    return (
                        <div key={log.id} className="flex gap-2 pl-4">
                            <span className="text-zinc-400">{isLast ? "└──" : "├──"}</span>
                            <Link
                                href={`/logs/${log.id}`}
                                className="hover:bg-black hover:text-white px-1 transition-colors"
                            >
                                {log.id} _ {log.title} <span className="text-zinc-400">[{log.size}]</span>
                            </Link>
                        </div>
                    );
                })}

                <div className="pl-4 text-zinc-400">
                    └── <span className="italic opacity-50">...more_data_fetching...</span>
                </div>
            </div>

            <div className="fixed bottom-4 right-4 text-right text-zinc-400 text-[10px]">
                TOTAL_NODES: {INITIAL_LOGS.length}<br />
                DIR_SIZE: {INITIAL_LOGS.length * 124}MB (EST)
            </div>
        </main>
    );
}
