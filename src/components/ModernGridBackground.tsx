"use client";

import React, { useEffect, useRef } from "react";

export default function ModernGridBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // Configuration
        const gridSize = 40;
        const lineColor = "rgba(0, 0, 0, 0.06)"; // Very subtle architectural lines
        const backgroundColor = "#ffffff";

        const drawGrid = () => {
            if (!canvas || !ctx) return;

            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.lineWidth = 1;
            ctx.strokeStyle = lineColor;

            const cols = Math.ceil(canvas.width / gridSize);
            const rows = Math.ceil(canvas.height / gridSize);

            // Vertical Lines
            for (let i = 0; i <= cols; i++) {
                const x = i * gridSize;
                ctx.beginPath();
                ctx.moveTo(x, 0);
                ctx.lineTo(x, canvas.height);
                ctx.stroke();
            }

            // Horizontal Lines
            for (let j = 0; j <= rows; j++) {
                const y = j * gridSize;
                ctx.beginPath();
                ctx.moveTo(0, y);
                ctx.lineTo(canvas.width, y);
                ctx.stroke();
            }
        };

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawGrid();
        };

        // Initial setup
        resize();

        window.addEventListener("resize", resize);

        return () => {
            window.removeEventListener("resize", resize);
        };
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none bg-white z-0">
            <canvas ref={canvasRef} className="block" />
        </div>
    );
}
