"use client";

import React, { useEffect, useRef } from "react";

export default function ModernGridBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;

        // Configuration
        const gridSize = 60; // Slightly larger grid for more dramatic deformation
        const basePointColor = "rgba(0, 0, 0, 0.4)";
        const baseLineColor = "rgba(0, 0, 0, 0.08)";
        const activeLineColor = "rgba(0, 0, 0, 0.6)"; // Stronger black for active lines
        const backgroundColor = "#ffffff";

        // Physics - "Radical" Gesture
        const mass = 15000; // Much stronger gravity (was 2000)
        const springStiffness = 0.03; // Looser spring for more sway (was 0.05)
        const friction = 0.92; // Less friction for longer movement (was 0.9)
        const influenceRadius = 400; // Larger area of effect

        const mouse = { x: -1000, y: -1000 };

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = e.clientX - rect.left;
            mouse.y = e.clientY - rect.top;
        };

        const handleTouchMove = (e: TouchEvent) => {
            const rect = canvas.getBoundingClientRect();
            const touch = e.touches[0];
            mouse.x = touch.clientX - rect.left;
            mouse.y = touch.clientY - rect.top;
        };

        const handleOrientation = (e: DeviceOrientationEvent) => {
            if (e.gamma === null || e.beta === null) return;
            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;
            const tiltX = e.gamma * 25;
            const tiltY = (e.beta - 45) * 25;
            mouse.x = centerX + tiltX;
            mouse.y = centerY + tiltY;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchstart", handleTouchMove);
        window.addEventListener("deviceorientation", handleOrientation);

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        const points: { x: number; y: number; ox: number; oy: number; vx: number; vy: number }[] = [];

        const getGridDimensions = () => {
            const cols = Math.ceil(canvas.width / gridSize);
            const rows = Math.ceil(canvas.height / gridSize);
            const iMin = -2;
            const iMax = cols + 2;
            const jMin = -2;
            const jMax = rows + 2;
            return { iMin, iMax, jMin, jMax, numCols: iMax - iMin, numRows: jMax - jMin };
        };

        let gridDims = getGridDimensions();

        const initPoints = () => {
            points.length = 0;
            gridDims = getGridDimensions();
            for (let i = 0; i < gridDims.numCols; i++) {
                for (let j = 0; j < gridDims.numRows; j++) {
                    const x = (i + gridDims.iMin) * gridSize;
                    const y = (j + gridDims.jMin) * gridSize;
                    points.push({ x, y, ox: x, oy: y, vx: 0, vy: 0 });
                }
            }
        };

        initPoints();

        const draw = () => {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Update Physics
            points.forEach(p => {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distSq = dx * dx + dy * dy;
                const dist = Math.sqrt(distSq);

                // Stronger Gravity Force
                const force = dist < 20 ? 0 : mass / (distSq + 1000);

                const angle = Math.atan2(dy, dx);
                const fx = Math.cos(angle) * force;
                const fy = Math.sin(angle) * force;

                const springX = (p.ox - p.x) * springStiffness;
                const springY = (p.oy - p.y) * springStiffness;

                p.vx += fx + springX;
                p.vy += fy + springY;

                p.vx *= friction;
                p.vy *= friction;

                p.x += p.vx;
                p.y += p.vy;
            });

            // Draw Lines
            ctx.lineWidth = 1;

            // Vertical Lines
            for (let i = 0; i < gridDims.numCols; i++) {
                ctx.beginPath();
                // Determine distortion for this column based on center point proximity
                const centerIdx = i * gridDims.numRows + Math.floor(gridDims.numRows / 2);
                const centerP = points[centerIdx];
                const colDist = centerP ? Math.abs(centerP.x - mouse.x) : 1000;

                ctx.strokeStyle = colDist < influenceRadius ? activeLineColor : baseLineColor;

                // Increase line width for active lines
                if (colDist < influenceRadius) {
                    ctx.lineWidth = 1.5 + (1 - colDist / influenceRadius) * 1.5;
                } else {
                    ctx.lineWidth = 1;
                }

                for (let j = 0; j < gridDims.numRows; j++) {
                    const idx = i * gridDims.numRows + j;
                    const p = points[idx];
                    if (!p) continue;
                    if (j === 0) ctx.moveTo(p.x, p.y);
                    else ctx.lineTo(p.x, p.y);
                }
                ctx.stroke();
            }

            // Horizontal Lines
            for (let j = 0; j < gridDims.numRows; j++) {
                ctx.beginPath();
                const centerIdx = Math.floor(gridDims.numCols / 2) * gridDims.numRows + j;
                const centerP = points[centerIdx];
                const rowDist = centerP ? Math.abs(centerP.y - mouse.y) : 1000;

                ctx.strokeStyle = rowDist < influenceRadius ? activeLineColor : baseLineColor;

                if (rowDist < influenceRadius) {
                    ctx.lineWidth = 1.5 + (1 - rowDist / influenceRadius) * 1.5;
                } else {
                    ctx.lineWidth = 1;
                }

                for (let i = 0; i < gridDims.numCols; i++) {
                    const idx = i * gridDims.numRows + j;
                    const p = points[idx];
                    if (!p) continue;
                    if (i === 0) ctx.moveTo(p.x, p.y);
                    else ctx.lineTo(p.x, p.y);
                }
                ctx.stroke();
            }

            // Draw Matter Points
            points.forEach(p => {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < influenceRadius) {
                    ctx.fillStyle = basePointColor;
                    // Dramatic point size scaling
                    const size = Math.max(0, (influenceRadius - dist) / 40);
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, size * 1.5, 0, Math.PI * 2);
                    ctx.fill();
                }
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", resize);
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("touchmove", handleTouchMove);
            window.removeEventListener("touchstart", handleTouchMove);
            window.removeEventListener("deviceorientation", handleOrientation);
        };
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none bg-white z-0">
            <canvas ref={canvasRef} className="block" />
        </div>
    );
}
