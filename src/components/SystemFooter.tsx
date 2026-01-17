"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export function SystemFooter() {
    const [isAlt, setIsAlt] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsAlt(prev => !prev);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <footer className="fixed bottom-0 w-full border-t border-black bg-[#F4F4F4] text-[10px] uppercase font-mono py-2 px-4 z-50 flex flex-col items-center gap-1 sm:text-xs text-center">
            <div className="animate-pulse whitespace-nowrap">
                {isAlt ? (
                    <span>
                        RUNNING PROCESS: <span className="font-bold">L</span>ET'S <span className="font-bold">M</span>AKE <span className="font-bold">S</span>OMETHING <span className="font-bold">T</span>OGETHER
                    </span>
                ) : (
                    <span>
                        RUNNING PROCESS: <span className="font-bold">L</span>OGIC / <span className="font-bold">M</span>ATTER / <span className="font-bold">S</span>PACE / <span className="font-bold">T</span>IME
                    </span>
                )}
            </div>
            <Link href="/" className="hover:bg-black hover:text-white transition-colors px-1">
                LMST_OS_VER_2.1
            </Link>
        </footer>
    );
}
