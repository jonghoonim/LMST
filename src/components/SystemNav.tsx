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
                            ? "text-white hover:text-white/80 mix-blend-difference"
                            : "text-zinc-500 hover:text-black"
                )}
            >
                <span className={clsx(isActive && "opacity-0")}>[</span>
                {label}
                <span className={clsx(isActive && "opacity-0")}>]</span>
            </Link>
        );
    };

    return (
        <nav
            className={clsx(
                "fixed top-0 left-0 z-50 w-full flex flex-col sm:grid sm:grid-cols-[180px_1fr_auto] items-center px-4 py-2 transition-all sm:h-12",
                isTransparentPage
                    ? "bg-transparent text-white mix-blend-difference border-b border-transparent"
                    : "bg-[#F4F4F4]/90 border-b border-black/10 backdrop-blur-sm text-black"
            )}
        >
            <div className="flex w-full sm:w-auto items-center justify-between sm:justify-start gap-4">
                <Link href="/" className={clsx(
                    "font-archivo text-lg tracking-tighter hover:opacity-50 transition-opacity",
                    // Reverting to consistently bold. The difference mode is solid enough now.
                    "font-bold"
                )}>
                    LMST_OS<span className="animate-blink inline-block bg-current w-[8px] h-[16px] align-middle ml-1">_</span>
                </Link>
                {/* Mobile Menu (Moved below on mobile via flex/grid or just simple wrapping) */}
            </div>

            <div className="flex w-full sm:w-auto gap-1 mt-2 sm:mt-0 justify-between sm:justify-start overflow-x-auto no-scrollbar">
                <NavLink href="/" label="INDEX" />
                <NavLink href="/logs" label="LOGS" />
                <NavLink href="/profile" label="PROFILE" />
                <NavLink href="/io" label="I/O" />
            </div>

            <div className={clsx(
                "hidden sm:flex items-center justify-end gap-4 font-mono text-xs",
                isTransparentPage ? "text-white mix-blend-difference" : "text-zinc-400"
            )}>
                <SysMemIndicator />
                <span>SYS.READY</span>
                <span>{time}</span>
            </div>
        </nav>
    );
}
