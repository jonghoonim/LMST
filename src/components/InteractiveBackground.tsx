"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Point {
    x: number;
    y: number;
    vx: number;
    vy: number;
    radius: number;
    color: string;
    originalX: number;
    originalY: number;
}

export default function InteractiveBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isGrid, setIsGrid] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let animationFrameId: number;
        let points: Point[] = [];
        const width = window.innerWidth;
        const height = window.innerHeight;

        canvas.width = width;
        canvas.height = height;

        // Initialize points
        const initPoints = () => {
            points = [];
            const numPoints = 100;
            for (let i = 0; i < numPoints; i++) {
                points.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    vx: (Math.random() - 0.5) * 2,
                    vy: (Math.random() - 0.5) * 2,
                    radius: Math.random() * 20 + 10,
                    color: "rgba(0, 0, 0, 0.1)", // Light gray/black for bubbles
                    originalX: Math.random() * width,
                    originalY: Math.random() * height,
                });
            }
        };

        initPoints();

        const draw = () => {
            ctx.clearRect(0, 0, width, height);

            points.forEach((point) => {
                // Update position
                if (!isGrid) {
                    point.x += point.vx;
                    point.y += point.vy;

                    // Bounce off walls
                    if (point.x < 0 || point.x > width) point.vx *= -1;
                    if (point.y < 0 || point.y > height) point.vy *= -1;
                } else {
                    // Move towards grid position (simplified)
                    // In a real implementation, we'd calculate grid positions
                    const targetX = point.originalX;
                    const targetY = point.originalY;
                    point.x += (targetX - point.x) * 0.1;
                    point.y += (targetY - point.y) * 0.1;
                }

                ctx.beginPath();
                ctx.arc(point.x, point.y, point.radius, 0, Math.PI * 2);
                ctx.fillStyle = point.color;
                ctx.fill();
            });

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initPoints();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener("resize", handleResize);
        };
    }, [isGrid]);

    return (
        <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none">
            <canvas ref={canvasRef} className="block" />
            <button
                onClick={() => setIsGrid(!isGrid)}
                className="absolute bottom-8 right-8 pointer-events-auto bg-black text-white px-4 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors"
            >
                {isGrid ? "Release" : "Organize"}
            </button>
        </div>
    );
}
