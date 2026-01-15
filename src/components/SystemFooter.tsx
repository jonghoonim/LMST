"use client";

import Link from "next/link";

export function SystemFooter() {
    return (
        <footer className="fixed bottom-0 w-full border-t border-black bg-[#F4F4F4] text-[10px] uppercase font-mono py-1 px-4 z-50 flex justify-between items-center">
            <div className="animate-pulse">RUNNING PROCESS: LOGIC / MATTER / SPACE / TIME</div>
            <Link href="/" className="hover:bg-black hover:text-white transition-colors px-1">
                LMST_OS_VER_2.4
            </Link>
        </footer>
    );
}
