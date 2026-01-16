"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function IOPage() {
    const [text, setText] = useState("");
    const fullText = `> INITIATING HANDSHAKE PROTOCOL...
> CONNECTING TO OPERATOR [JONGHOON_IM]...
> ESTABLISHED.









> [CONTACT_CHANNELS]
> EMAIL:     jim@lmst.kr
> INSTAGRAM: @jim_lmst
> ADDRESS:   6-6, Tojeong-ro 2-gil, Mapo-gu, Seoul, ROK

> SENDING_PACKET...
> WAITING_FOR_INPUT_
`;

    useEffect(() => {
        let i = 0;
        const speed = 15; // 2x faster (was 30)

        // If text is already full (e.g. from previous render or skip), don't restart
        if (text === fullText) return;

        const timer = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
        return () => clearInterval(timer);
    }, []); // Run once on mount

    const handleSkip = () => {
        setText(fullText);
    };

    return (
        <main
            className="min-h-screen w-full p-4 font-mono text-xs sm:text-sm cursor-pointer"
            onClick={handleSkip}
            title="[CLICK_ANYWHERE_TO_SKIP]"
        >
            <div className="mx-auto max-w-4xl border border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                {/* Header */}
                <div className="mb-6 flex items-center justify-between border-b border-black pb-2">
                    <h1 className="text-xl font-bold uppercase tracking-tighter text-black">
                        I/O_CHANNELS
                    </h1>
                    <div className="text-right text-black">
                        <div>STATUS: ACTIVE</div>
                        <div>PROTOCOL: OPEN</div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid gap-8 sm:grid-cols-2">
                    {/* Left: Text Area */}
                    <div
                        className="min-h-[200px]"
                    >
                        <div className="whitespace-pre-wrap leading-relaxed">
                            {text}
                            {text !== fullText && (
                                <span className="animate-blink inline-block bg-black w-[8px] h-[14px] align-middle ml-1"></span>
                            )}
                        </div>

                        {/* Static Links */}
                        {text === fullText && (
                            <div className="mt-4 border-t border-black/30 pt-4 flex flex-col gap-2 text-xs opacity-80 animate-in fade-in duration-500">
                                <Link href="mailto:jim@lmst.kr" className="hover:bg-black hover:text-white w-fit px-1 transition-colors">
                                    [EXECUTE] SEND_EMAIL
                                </Link>
                                <Link href="https://instagram.com/jim_lmst" target="_blank" className="hover:bg-black hover:text-white w-fit px-1 transition-colors">
                                    [EXECUTE] OPEN_INSTAGRAM
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* Right: Map Area */}
                    <div className="flex flex-col gap-2">
                        <a
                            href="https://map.naver.com/v5/search/%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C%20%EB%A7%88%ED%8F%AC%EA%B5%AC%20%ED%86%A0%EC%A0%95%EB%A1%9C2%EA%B8%B8%206-6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative w-full aspect-square border border-black overflow-hidden bg-black cursor-pointer"
                        >
                            {/* Map Iframe with CSS Filter */}
                            <iframe
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                className="pointer-events-none" // Disable iframe interaction to allow anchor click
                                style={{
                                    filter: "grayscale(100%) invert(100%) contrast(150%)",
                                    border: 0
                                }}
                                src={`https://maps.google.com/maps?q=6-6,+Tojeong-ro+2-gil,+Mapo-gu,+Seoul,+Republic+of+Korea&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                                allowFullScreen
                            ></iframe>

                            {/* Overlay Label */}
                            <div className="absolute top-0 left-0 bg-black text-white px-2 py-1 text-[10px] font-bold group-hover:bg-[#00FF00] group-hover:text-black transition-colors">
                                [ TARGET_COORDINATES ]
                            </div>

                            {/* Hover Hint */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                <span className="bg-black text-white px-2 py-1 text-xs">[ OPEN_NAVER_MAP ]</span>
                            </div>
                        </a>
                        <div className="text-[10px] text-zinc-500 font-mono text-center">
                            LAT: 37.54, LON: 126.94 // TARGET_LOCALE
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
