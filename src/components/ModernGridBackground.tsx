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
        const gridSize = 50;
        const pointColor = "rgba(0, 0, 0, 0.2)"; // Black/Gray points
        const lineColor = "rgba(0, 0, 0, 0.05)"; // Subtle gray grid lines
        const activeLineColor = "rgba(0, 0, 255, 0.1)"; // Subtle blue tint when active
        const backgroundColor = "#ffffff"; // White background

        // Physics
        const mass = 2000; // Strength of the gravity well
        const damping = 0.1; // Smoothness of return

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
            // Only use gyro if not currently touching (touch takes priority)
            // Note: iOS requires permission for this, which we are skipping to keep it simple.
            // This will primarily work on Android or devices that allow it by default.
            if (e.gamma === null || e.beta === null) return;

            const centerX = window.innerWidth / 2;
            const centerY = window.innerHeight / 2;

            // Gamma: Left/Right tilt (-90 to 90)
            // Beta: Front/Back tilt (-180 to 180)
            // We map a small range (e.g., +/- 20 degrees) to the screen width/height
            const tiltX = e.gamma * 15; // Sensitivity factor
            const tiltY = (e.beta - 45) * 15; // Subtract 45 to assume holding phone at 45 deg angle

            mouse.x = centerX + tiltX;
            mouse.y = centerY + tiltY;
        };

        window.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("touchmove", handleTouchMove);
        window.addEventListener("touchstart", handleTouchMove);
        // Passive listener for gyroscope
        window.addEventListener("deviceorientation", handleOrientation);

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener("resize", resize);

        // Grid Points
        const points: { x: number; y: number; ox: number; oy: number; vx: number; vy: number }[] = [];

        // Calculate grid dimensions
        const getGridDimensions = () => {
            const cols = Math.ceil(canvas.width / gridSize);
            const rows = Math.ceil(canvas.height / gridSize);
            // Extend by 2 modules on each side (previously was roughly 1)
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
                    points.push({
                        x,
                        y,
                        ox: x,
                        oy: y,
                        vx: 0,
                        vy: 0
                    });
                }
            }
        };

        initPoints();

        const draw = () => {
            // 1. Clear with White
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 2. Update Physics (Gravity Well)
            points.forEach(p => {
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distSq = dx * dx + dy * dy;
                const dist = Math.sqrt(distSq);

                // Gravity force
                const force = dist < 50 ? 0 : mass / distSq;

                const angle = Math.atan2(dy, dx);
                const fx = Math.cos(angle) * force;
                const fy = Math.sin(angle) * force;

                // Spring force
                const k = 0.05;
                const springX = (p.ox - p.x) * k;
                const springY = (p.oy - p.y) * k;

                p.vx += fx + springX;
                p.vy += fy + springY;

                p.vx *= 0.9;
                p.vy *= 0.9;

                p.x += p.vx;
                p.y += p.vy;
            });

            // 3. Draw Grid Lines
            ctx.lineWidth = 1;

            // Vertical Lines
            for (let i = 0; i < gridDims.numCols; i++) {
                ctx.beginPath();
                for (let j = 0; j < gridDims.numRows; j++) {
                    const idx = i * gridDims.numRows + j;
                    const p = points[idx];
                    if (!p) continue;

                    if (j === 0) ctx.moveTo(p.x, p.y);
                    else ctx.lineTo(p.x, p.y);
                }
                const centerIdx = i * gridDims.numRows + Math.floor(gridDims.numRows / 2);
                const centerP = points[centerIdx];
                const dist = centerP ? Math.abs(centerP.x - mouse.x) : 1000;

                ctx.strokeStyle = dist < 300 ? activeLineColor : lineColor;
                ctx.stroke();
            }

            // Horizontal Lines
            for (let j = 0; j < gridDims.numRows; j++) {
                ctx.beginPath();
                for (let i = 0; i < gridDims.numCols; i++) {
                    const idx = i * gridDims.numRows + j;
                    const p = points[idx];
                    if (!p) continue;

                    if (i === 0) ctx.moveTo(p.x, p.y);
                    else ctx.lineTo(p.x, p.y);
                }
                const centerIdx = Math.floor(gridDims.numCols / 2) * gridDims.numRows + j;
                const centerP = points[centerIdx];
                const dist = centerP ? Math.abs(centerP.y - mouse.y) : 1000;

                ctx.strokeStyle = dist < 300 ? activeLineColor : lineColor;
                ctx.stroke();
            }

            // 4. Draw Points (Matter)
            points.forEach(p => {
                ctx.fillStyle = pointColor;
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 300) {
                    const size = Math.max(0, (300 - dist) / 100);
                    ctx.beginPath();
                    ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
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
