"use client";

import { INITIAL_LOGS } from "@/lib/data";
import Link from "next/link";
import { clsx } from "clsx";

export default function Home() {
  return (
    <main className="min-h-screen w-full px-4 py-8 font-mono text-xs uppercase tracking-tight sm:text-sm">
      {/* Header Row */}
      <div className="mb-2 grid grid-cols-[1fr_2fr_1fr_1fr] border-b border-black text-black/50 sm:grid-cols-[1fr_3fr_1fr_1fr_1fr]">
        <div className="pb-2 pl-2">ID</div>
        <div className="pb-2">PROJECT NAME</div>
        <div className="hidden pb-2 sm:block">PHASE</div>
        <div className="pb-2 text-right">DATE</div>
        <div className="pb-2 pr-2 text-right">STATUS</div>
      </div>

      {/* Data Rows */}
      <div className="flex flex-col">
        {INITIAL_LOGS.map((log) => (
          <Link
            key={log.id}
            href={`/logs/${log.id}`}
            className="group grid grid-cols-[1fr_2fr_1fr_1fr] border-b border-black/10 py-3 text-black transition-colors hover:bg-black hover:text-white sm:grid-cols-[1fr_3fr_1fr_1fr_1fr]"
          >
            <div className="pl-2 group-hover:underline">{log.id}</div>
            <div className="font-bold">{log.title}</div>
            <div className="hidden text-black/50 group-hover:text-white/70 sm:block">
              {log.phase}
            </div>
            <div className="text-right tabular-nums">{log.date}</div>
            <div
              className={clsx(
                "pr-2 text-right font-bold",
                log.status === "RUNTIME_ERROR" && "text-red-600 group-hover:text-red-400",
                log.status === "COMPILED" && "text-green-600 group-hover:text-green-400",
                log.status === "WARNING" && "text-yellow-600 group-hover:text-yellow-400"
              )}
            >
              {log.status}
            </div>
          </Link>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-8 flex justify-between border-t border-black/20 pt-4 text-black/40">
        <div>TOTAL RECORDS: {INITIAL_LOGS.length}</div>
        <div>SYS_MEM: 32%</div>
      </div>
    </main>
  );
}
