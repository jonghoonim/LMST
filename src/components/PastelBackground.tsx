"use client";

import React from "react";

export default function PastelBackground() {
    return (
        <div className="fixed inset-0 z-0 w-full h-full bg-white overflow-hidden pointer-events-none">
            {/* 
        Replicating the uploaded image:
        Left side: Warm, pale yellow/green
        Right side: Cool, pale blue

        Mobile Optimization:
        - Removed mix-blend-multiply for better mobile support
        - Increased opacity
        - Added translate-3d for hardware acceleration
      */}

            {/* Top Left - Pale Yellow/Green */}
            <div
                className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full filter blur-[80px] opacity-80 animate-blob will-change-transform"
                style={{ backgroundColor: "#F4FCD9", transform: "translate3d(0,0,0)" }}
            />

            {/* Bottom Right - Pale Blue */}
            <div
                className="absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full filter blur-[80px] opacity-80 animate-blob animation-delay-2000 will-change-transform"
                style={{ backgroundColor: "#D4EBF9", transform: "translate3d(0,0,0)" }}
            />

            {/* Center/Top Right accent - Very subtle Cyan */}
            <div
                className="absolute top-[10%] right-[10%] w-[60vw] h-[60vw] rounded-full filter blur-[80px] opacity-60 animate-blob animation-delay-4000 will-change-transform"
                style={{ backgroundColor: "#E0F7FA", transform: "translate3d(0,0,0)" }}
            />

            {/* Bottom Left accent - Subtle Warmth */}
            <div
                className="absolute bottom-[0%] left-[10%] w-[60vw] h-[60vw] rounded-full filter blur-[80px] opacity-60 animate-blob animation-delay-6000 will-change-transform"
                style={{ backgroundColor: "#FFFDE7", transform: "translate3d(0,0,0)" }}
            />
        </div>
    );
}
