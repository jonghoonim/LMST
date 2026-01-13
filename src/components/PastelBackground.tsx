"use client";

import React from "react";

export default function PastelBackground() {
    return (
        <div className="fixed inset-0 z-0 w-full h-full bg-white overflow-hidden pointer-events-none">
            {/* 
        Replicating the uploaded image:
        Left side: Warm, pale yellow/green
        Right side: Cool, pale blue
      */}

            {/* Top Left - Pale Yellow/Green */}
            <div
                className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob"
                style={{ backgroundColor: "#F4FCD9" }} // Pale Lime/Yellow
            />

            {/* Bottom Right - Pale Blue */}
            <div
                className="absolute bottom-[-20%] right-[-10%] w-[70vw] h-[70vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-60 animate-blob animation-delay-2000"
                style={{ backgroundColor: "#D4EBF9" }} // Pale Blue
            />

            {/* Center/Top Right accent - Very subtle Cyan */}
            <div
                className="absolute top-[10%] right-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[120px] opacity-40 animate-blob animation-delay-4000"
                style={{ backgroundColor: "#E0F7FA" }} // Cyan
            />

            {/* Bottom Left accent - Subtle Warmth */}
            <div
                className="absolute bottom-[0%] left-[10%] w-[50vw] h-[50vw] rounded-full mix-blend-multiply filter blur-[100px] opacity-40 animate-blob animation-delay-6000"
                style={{ backgroundColor: "#FFFDE7" }} // Yellow
            />
        </div>
    );
}
