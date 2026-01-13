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
        const gridSize = 40; // Smaller grid for smoother curve
        const basePointColor = "rgba(0, 0, 0, 0.4)";
        const baseLineColor = "rgba(0, 0, 0, 0.1)";
        const activeLineColor = "rgba(0, 0, 0, 0.8)";
        const backgroundColor = "#ffffff";

        // Physics - "Einstein Spacetime" (Rubber Sheet)
        // High connection stiffness (fabric), High drag (syrup), Deep gravity well
        const mouseMass = 5000;         // Power of the distortion
        const stiffness = 0.08;         // Structural integrity (Higher = stiffer space)
        const originStiffness = 0.008;  // Tendency to return to flat space
        const damping = 0.92;           // Damping (Higher = slower, more viscous movement)
        const influenceRadius = 600;    // How far the gravity propagates

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

        // Point Definition
        interface Point {
            x: number; y: number;       // Current position
            ox: number; oy: number;     // Original position
            vx: number; vy: number;     // Velocity
            neighbors: Point[];         // Connected points (Structural springs)
        }

        const points: Point[] = [];
        let gridDims = { cols: 0, rows: 0 };

        const initPoints = () => {
            points.length = 0;
            // Pad the grid slightly to avoid edge artifacts
            const cols = Math.ceil(canvas.width / gridSize) + 2;
            const rows = Math.ceil(canvas.height / gridSize) + 2;
            gridDims = { cols, rows };

            // 1. Create Points
            const tempGrid: Point[][] = [];
            for (let i = 0; i < cols; i++) {
                tempGrid[i] = [];
                for (let j = 0; j < rows; j++) {
                    const x = i * gridSize - gridSize;
                    const y = j * gridSize - gridSize;
                    const p = { x, y, ox: x, oy: y, vx: 0, vy: 0, neighbors: [] };
                    points.push(p);
                    tempGrid[i][j] = p;
                }
            }

            // 2. Connect Neighbors (Structure)
            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const p = tempGrid[i][j];
                    if (i < cols - 1) p.neighbors.push(tempGrid[i + 1][j]); // Right
                    if (j < rows - 1) p.neighbors.push(tempGrid[i][j + 1]); // Bottom
                    if (i > 0) p.neighbors.push(tempGrid[i - 1][j]);        // Left
                    if (j > 0) p.neighbors.push(tempGrid[i][j - 1]);        // Top
                }
            }
        };

        initPoints();

        const draw = () => {
            ctx.fillStyle = backgroundColor;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // 1. Physics Step
            points.forEach(p => {
                let fx = 0;
                let fy = 0;

                // A. Gravity Well (Curvature)
                // We model this as a displacement force that inversely scales with distance
                const dx = mouse.x - p.x;
                const dy = mouse.y - p.y;
                const distSq = dx * dx + dy * dy;
                const dist = Math.sqrt(distSq);

                if (dist < influenceRadius) {
                    // Smooth spacetime well formula
                    const force = mouseMass / (dist + 100);
                    const angle = Math.atan2(dy, dx);
                    fx += Math.cos(angle) * force;
                    fy += Math.sin(angle) * force;
                }

                // B. Elastic Fabric (Neighbor Springs)
                // This is the "Connected" part - points pull each other
                p.neighbors.forEach(n => {
                    const ndx = n.x - p.x;
                    const ndy = n.y - p.y;
                    const ndist = Math.sqrt(ndx * ndx + ndy * ndy);

                    // Simple spring: pull towards neighbor if too far
                    // Ideal distance is 0 in relative terms for a "contraction" effect, 
                    // or gridSize for "structure". Space warping actually contracts space.
                    // Let's try to maintain gridSize but allow compression.
                    const stretch = ndist - gridSize;
                    const springF = stretch * stiffness;

                    const angle = Math.atan2(ndy, ndx);
                    fx += Math.cos(angle) * springF;
                    fy += Math.sin(angle) * springF;
                });

                // C. Memory (Origin)
                // Keeps the whole universe from collapsing into the black hole
                fx += (p.ox - p.x) * originStiffness;
                fy += (p.oy - p.y) * originStiffness;

                p.vx += fx;
                p.vy += fy;
            });

            // 2. Integration
            points.forEach(p => {
                p.vx *= damping;
                p.vy *= damping;
                p.x += p.vx;
                p.y += p.vy;
            });

            // 3. Render
            ctx.lineWidth = 1;

            // We draw lines by iterating neighbors (Right/Bottom only to avoid duplicates)
            // But we need to use the linear array for simpler looping or the nested structure if we kept it.
            // Using the points array and grid logic:

            const cols = gridDims.cols;
            const rows = gridDims.rows;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const idx = i * rows + j;
                    const p = points[idx];

                    // Draw Right Connection
                    if (i < cols - 1) {
                        const right = points[(i + 1) * rows + j];
                        // Calculate midpoint distortion for styling
                        const mx = (p.x + right.x) / 2;
                        const my = (p.y + right.y) / 2;
                        const d = Math.sqrt((mx - mouse.x) ** 2 + (my - mouse.y) ** 2);

                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(right.x, right.y);

                        // Visual Lensing effect: Darker and Thicker near center
                        if (d < influenceRadius) {
                            const intensity = 1 - (d / influenceRadius); // 0 to 1
                            ctx.strokeStyle = `rgba(0, 0, 0, ${0.1 + intensity * 0.7})`;
                            ctx.lineWidth = 1 + intensity * 1.5;
                        } else {
                            ctx.strokeStyle = baseLineColor;
                            ctx.lineWidth = 1;
                        }
                        ctx.stroke();
                    }

                    // Draw Bottom Connection
                    if (j < rows - 1) {
                        const bottom = points[i * rows + (j + 1)];
                        const mx = (p.x + bottom.x) / 2;
                        const my = (p.y + bottom.y) / 2;
                        const d = Math.sqrt((mx - mouse.x) ** 2 + (my - mouse.y) ** 2);

                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(bottom.x, bottom.y);

                        if (d < influenceRadius) {
                            const intensity = 1 - (d / influenceRadius);
                            ctx.strokeStyle = `rgba(0, 0, 0, ${0.1 + intensity * 0.7})`;
                            ctx.lineWidth = 1 + intensity * 1.5;
                        } else {
                            ctx.strokeStyle = baseLineColor;
                            ctx.lineWidth = 1;
                        }
                        ctx.stroke();
                    }
                }
            }

            // 4. Draw Event Horizon (Optional subtle point at mouse)
            // Not strictly needed but helps visualize the "mass"
            /*
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 5, 0, Math.PI * 2);
            ctx.fillStyle = "black";
            ctx.fill();
            */

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
            points.length = 0;
        };
    }, []);

    return (
        <div className="fixed inset-0 w-full h-full pointer-events-none bg-white z-0">
            <canvas ref={canvasRef} className="block" />
        </div>
    );
}
