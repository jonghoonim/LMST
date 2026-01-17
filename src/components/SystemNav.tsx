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

    const SysMemIndicator = () => {
        const [mem, setMem] = useState(32);

        useEffect(() => {
            const interval = setInterval(() => {
                // Random fluctuation between 30 and 45
                setMem(Math.floor(Math.random() * (45 - 30 + 1) + 30));
            }, 3000);
            return () => clearInterval(interval);
        }, []);

        return <span>SYS_MEM: {mem}%</span>;
    };

    const isTransparentPage = pathname?.startsWith("/logs/") && pathname.length > 6;

    const NavLink = ({ href, label }: { href: string; label: string }) => {
        const isActive = pathname === href || (href !== "/" && pathname?.startsWith(href));
        return (
            <Link
                href={href}
                className={clsx(
                    "px-2 py-1 font-mono text-sm uppercase tracking-tight transition-all",
                    isActive
                        ? "bg-black text-white"
                        : isTransparentPage
                            ? "text-white/70 hover:text-white mix-blend-exclusion"
                            : "text-zinc-500 hover:text-black"
                )}
            >
                {isActive ? label : `[${label}]`}
            </Link>
        );
    };

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 z-50 flex w-full flex-col sm:flex-row items-center justify-between sm:justify-start px-4 py-2 transition-all sm:h-12",
                isTransparentPage
                    ? "bg-transparent text-white mix-blend-exclusion border-b border-transparent"
                    : "bg-[#F4F4F4]/90 border-b border-black/10 backdrop-blur-sm text-black"
            )}
        >
            <div className="flex w-full sm:w-auto items-center justify-between sm:justify-start gap-4">
                <Link href="/" className={clsx(
                    "font-archivo text-lg tracking-tighter hover:opacity-50 transition-opacity",
                    isTransparentPage ? "font-semibold" : "font-bold"
                )}>
                    LMST_OS<span className="animate-blink inline-block bg-current w-[8px] h-[16px] align-middle ml-1">_</span>
                </Link>
                {/* Mobile Menu (Moved below on mobile via flex/grid or just simple wrapping) */}
            </div>

            <div className="flex w-full sm:w-auto gap-1 mt-2 sm:mt-0 justify-between sm:justify-start sm:ml-12 overflow-x-auto no-scrollbar">
                <NavLink href="/" label="INDEX" />
                <NavLink href="/logs" label="LOGS" />
                <NavLink href="/profile" label="PROFILE" />
                <NavLink href="/io" label="I/O" />
            </div>

            <div className={clsx(
                "hidden absolute right-4 top-1/2 -translate-y-1/2 items-center gap-4 font-mono text-xs sm:flex",
                isTransparentPage ? "text-white/70 mix-blend-exclusion" : "text-zinc-400"
            )}>
                <SysMemIndicator />
                <span>SYS.READY</span>
                <span>{time}</span>
            </div>
        </nav>
    );
}
