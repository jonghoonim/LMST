"use client";

import { useState } from "react";
import { OFFICE_LOG, OfficeLogEntry } from "@/lib/philosophy";

function LogEntry({ entry, isLast }: { entry: OfficeLogEntry; isLast: boolean }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [showKr, setShowKr] = useState(false);

    const isStatement = entry.type === "STATEMENT";

    return (
        <div className="relative flex gap-4 pl-0 pb-0">
            {/* Timeline dot */}
            <div className="flex flex-col items-center shrink-0">
                <div
                    className={`w-[11px] h-[11px] rounded-full border-2 shrink-0 mt-[6px] ${
                        isStatement
                            ? "bg-black border-black"
                            : "bg-transparent border-black/30"
                    }`}
                />
                {!isLast && <div className="w-px flex-1 bg-black/10 mt-1" />}
            </div>

            {/* Content */}
            <div className={`flex-1 min-w-0 ${!isLast ? "pb-10" : "pb-0"}`}>
                {/* Date + Type badge */}
                <div className="flex items-baseline gap-3 mb-1">
                    <span className="font-mono text-[11px] text-zinc-400">
                        {entry.date}
                    </span>
                    <span
                        className={`font-mono text-[10px] px-1.5 py-0.5 uppercase tracking-wider ${
                            isStatement
                                ? "bg-black text-white"
                                : "bg-zinc-200 text-zinc-600"
                        }`}
                    >
                        {entry.type}
                    </span>
                </div>

                {/* Title */}
                <h3
                    className={`font-bold uppercase tracking-tight leading-tight mt-2 ${
                        isStatement ? "text-lg sm:text-xl" : "text-sm"
                    }`}
                >
                    {entry.title}
                </h3>

                {/* Statement content */}
                {isStatement && entry.content && (
                    <div className="mt-4">
                        <div className="relative">
                            <p
                                className={`text-sm leading-relaxed whitespace-pre-wrap ${
                                    !isExpanded ? "line-clamp-4" : ""
                                }`}
                            >
                                {showKr ? entry.contentKr : entry.content}
                            </p>
                            {!isExpanded && (
                                <div className="absolute bottom-0 left-0 w-full h-8 bg-gradient-to-t from-white to-transparent" />
                            )}
                        </div>

                        <div className="flex gap-4 mt-3">
                            <button
                                onClick={() => setIsExpanded(!isExpanded)}
                                className="text-xs font-mono underline underline-offset-4 hover:bg-black hover:text-white transition-all px-1"
                            >
                                {isExpanded ? "COLLAPSE" : "READ"}
                            </button>
                            {entry.contentKr && (
                                <button
                                    onClick={() => setShowKr(!showKr)}
                                    className="text-xs font-mono text-zinc-400 hover:text-black transition-colors"
                                >
                                    {showKr ? "EN" : "KR"}
                                </button>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default function ProfilePage() {
    // Show entries newest first
    const entries = [...OFFICE_LOG].reverse();

    return (
        <main className="min-h-screen">
            {/* Header */}
            <section className="max-w-[var(--max-width-content)] mx-auto px-8 pt-24 pb-16 border-b border-[var(--color-border)]">
                <h1 className="text-4xl font-medium mb-4">LMST</h1>
                <p className="text-sm text-[var(--color-subtle)]">
                    Logic, Materiality, Structure, Time
                </p>
            </section>

            {/* Main Content */}
            <div className="max-w-[var(--max-width-content)] mx-auto px-8 py-16">
                <div className="asymmetric-grid gap-16">
                    {/* Left Column - Office Log */}
                    <div>
                        <h2 className="text-sm font-bold uppercase border-b-2 border-black mb-0 pb-2">
                            Office Log
                            <span className="font-normal text-zinc-500 ml-2">
                                {OFFICE_LOG.length} entries
                            </span>
                        </h2>

                        <div className="mt-8">
                            {entries.map((entry, i) => (
                                <LogEntry
                                    key={`${entry.date}-${entry.title}`}
                                    entry={entry}
                                    isLast={i === entries.length - 1}
                                />
                            ))}

                            {/* End marker */}
                            <div className="flex items-center gap-4 pt-6">
                                <div className="w-[11px] h-[11px] border-2 border-black/20 rounded-full shrink-0 flex items-center justify-center">
                                    <div className="w-[3px] h-[3px] bg-black/20 rounded-full" />
                                </div>
                                <span className="font-mono text-[10px] text-zinc-400 uppercase">
                                    init
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Bio */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-sm font-bold uppercase border-b-2 border-black mb-8 pb-2">
                                Jonghoon Im
                            </h2>
                            <div className="space-y-8">
                                {/* Education */}
                                <div>
                                    <h3 className="text-sm font-medium mb-3">Education</h3>
                                    <div className="space-y-2 text-sm">
                                        <div>
                                            <div className="font-medium">M.Arch, UC Berkeley</div>
                                            <div className="text-[var(--color-subtle)] text-xs">2012</div>
                                        </div>
                                        <div>
                                            <div className="font-medium">M.S., Seoul National University</div>
                                            <div className="text-[var(--color-subtle)] text-xs">2006</div>
                                        </div>
                                        <div>
                                            <div className="font-medium">B.S., Chonnam National University</div>
                                            <div className="text-[var(--color-subtle)] text-xs">2004</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Teaching */}
                                <div>
                                    <h3 className="text-sm font-medium mb-3">Teaching</h3>
                                    <div className="space-y-2 text-sm">
                                        <div>
                                            <div className="font-medium">Seoul National University</div>
                                            <div className="text-[var(--color-subtle)] text-xs">2015–Present / Lecturer</div>
                                            <div className="text-xs mt-1 space-y-0.5 opacity-70">
                                                <div>Digital Design Studio</div>
                                                <div>Design Computing</div>
                                                <div>Basic Studio 3, 4</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Practice */}
                                <div>
                                    <h3 className="text-sm font-medium mb-3">Practice</h3>
                                    <div className="space-y-3 text-sm">
                                        <div>
                                            <div className="font-medium">LMST</div>
                                            <div className="text-[var(--color-subtle)] text-xs">2024–Present / Principal</div>
                                        </div>
                                        <div>
                                            <div className="font-medium">TAAL Architects</div>
                                            <div className="text-[var(--color-subtle)] text-xs">2014–2024 / Principal</div>
                                            <div className="text-xs mt-1 space-y-0.5 opacity-70">
                                                <div>SNU Southern Academy (Kim Swoo Geun Award '16)</div>
                                                <div>Songpa Wirye Kindergarten</div>
                                                <div>Hwaseong Coffee Complex</div>
                                            </div>
                                        </div>
                                        <div className="text-xs opacity-60 space-y-1">
                                            <div>Perkins+Will (SF) / 2013</div>
                                            <div>Haeahn Architecture / 2006–2013</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Awards */}
                                <div>
                                    <h3 className="text-sm font-medium mb-3">Selected Awards</h3>
                                    <div className="space-y-1 text-sm">
                                        <div>
                                            <span className="font-medium">2016</span>{" "}
                                            <span className="opacity-70">Kim Swoo Geun Preview Award</span>
                                        </div>
                                        <div>
                                            <span className="font-medium">2012</span>{" "}
                                            <span className="opacity-70">UC Berkeley Fellowship</span>
                                        </div>
                                        <div>
                                            <span className="font-medium">2010</span>{" "}
                                            <span className="opacity-70">AIA NY Design Awards (Merit)</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Contact */}
                                <div>
                                    <h3 className="text-sm font-medium mb-3">Contact</h3>
                                    <div className="space-y-2 text-sm">
                                        <div>
                                            <span className="opacity-60">Email:</span>{" "}
                                            <a href="mailto:jim@lmst.kr" className="hover:opacity-60">
                                                jim@lmst.kr
                                            </a>
                                        </div>
                                        <div>
                                            <span className="opacity-60">Instagram:</span>{" "}
                                            <a
                                                href="https://instagram.com/jim_lmst"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:opacity-60"
                                            >
                                                @jim_lmst
                                            </a>
                                        </div>
                                        <div>
                                            <span className="opacity-60">Location:</span> Seoul, Korea
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Spacer */}
            <div className="h-24" />
        </main>
    );
}
