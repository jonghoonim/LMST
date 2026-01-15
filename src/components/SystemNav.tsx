"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { useEffect, useState } from "react";

export function SystemNav() {
    const pathname = usePathname();
    const [time, setTime] = useState("");

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
        }, 1000);
        setTime(new Date().toLocaleTimeString("en-GB", { hour12: false }));
        return () => clearInterval(timer);
    }, []);

    const NavLink = ({ href, label }: { href: string; label: string }) => {
        const isActive = pathname === href;
        return (
            <Link
                href={href}
                className={clsx(
                    "px-2 py-1 font-mono text-sm uppercase tracking-tight transition-colors hover:bg-black hover:text-white",
                    isActive ? "bg-black text-white" : "text-zinc-500"
                )}
            >
                [{label}]
            </Link>
        );
    };

    return (
        <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between border-b border-black/10 bg-[#F4F4F4]/80 px-4 py-2 backdrop-blur-sm dark:border-white/10 dark:bg-black/80">
            <div className="flex items-center gap-4">
                <span className="font-archivo text-lg font-bold tracking-tighter mix-blend-difference">
                    LMST_OS<span className="animate-blink inline-block bg-black w-[8px] h-[16px] sm:bg-transparent sm:text-inherit sm:w-auto sm:h-auto align-middle ml-1">_</span>
                </span>
                <div className="flex gap-2">
                    <NavLink href="/" label="INDEX" />
                    <NavLink href="/logs" label="LOGS" />
                    <NavLink href="/profile" label="PROFILE" />
                </div>
            </div>

            <div className="hidden items-center gap-4 font-mono text-xs text-zinc-400 sm:flex">
                <span>SYS.READY</span>
                <span>{time}</span>
            </div>
        </nav>
    );
}
