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
> ADDRESS:   6-6, Tojeong-ro 2-gil, Mapo-gu, Seoul, ROC

> SENDING_PACKET...
> WAITING_FOR_INPUT_
`;

    useEffect(() => {
        let i = 0;
        const speed = 30;
        const timer = setInterval(() => {
            if (i < fullText.length) {
                setText(fullText.slice(0, i + 1));
                i++;
            } else {
                clearInterval(timer);
            }
        }, speed);
        return () => clearInterval(timer);
    }, [fullText]);

    return (
        <main className="flex h-screen w-full items-center justify-center bg-[#F4F4F4]/90 p-4 font-mono text-sm sm:text-base backdrop-blur-sm z-40 fixed top-0 left-0">
            <div className="w-full max-w-lg overflow-hidden border border-black bg-black p-4 text-[#00FF00] shadow-2xl relative">
                <div className="absolute top-0 left-0 w-full bg-[#00FF00] text-black px-2 py-0.5 text-xs font-bold flex justify-between">
                    <span>TERMINAL_SESSION_01</span>
                    <span>[X]</span>
                </div>
                <div className="mt-6 whitespace-pre-wrap min-h-[300px]">
                    {text}
                    <span className="animate-blink inline-block bg-[#00FF00] w-[10px] h-[18px] align-middle ml-1"></span>
                </div>

                <div className="mt-4 border-t border-[#00FF00]/30 pt-4 flex flex-col gap-2 text-xs opacity-80">
                    <Link href="mailto:jim@lmst.kr" className="hover:bg-[#00FF00] hover:text-black w-fit px-1">
                        [EXECUTE] SEND_EMAIL
                    </Link>
                    <Link href="https://instagram.com/jim_lmst" target="_blank" className="hover:bg-[#00FF00] hover:text-black w-fit px-1">
                        [EXECUTE] OPEN_INSTAGRAM
                    </Link>
                </div>
            </div>
        </main>
    );
}
