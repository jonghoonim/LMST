"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&";

interface IntroAnimationProps {
    onFinish: () => void;
}

export default function IntroAnimation({ onFinish }: IntroAnimationProps) {
    const [text, setText] = useState("");
    const [isDecoded, setIsDecoded] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        const scrambleDuration = 2000;
        const startTime = Date.now();

        // Start with random characters immediately
        interval = setInterval(() => {
            const elapsed = Date.now() - startTime;

            if (elapsed < scrambleDuration) {
                // Generate 4 random characters exactly like the target "LMST" length
                const randomStr = Array(4)
                    .fill(0)
                    .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
                    .join("");
                setText(randomStr);
            } else {
                // Decoded state
                setText("LMST");
                setIsDecoded(true);
                clearInterval(interval);

                // Wait 0.5s before triggering the exit animation via parent callback
                setTimeout(() => {
                    onFinish();
                }, 500);
            }
        }, 50); // Scramble speed (every 50ms)

        return () => clearInterval(interval);
    }, [onFinish]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] flex flex-col justify-center items-center bg-white text-black"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1, ease: "easeInOut" } }}
        >
            <div className="text-center px-4 pointer-events-none">
                <h1
                    className={`text-6xl md:text-8xl font-bold mb-4 text-center tracking-[0.35em] ${isDecoded ? "" : "font-mono tracking-widest"
                        }`}
                >
                    {text}
                </h1>
                {/* Placeholder to match the subtitle height in the Hero section for perfect vertical alignment */}
                <p className="text-sm md:text-base tracking-[0.3em] uppercase text-transparent select-none">
                    LOGIC, MATTER, SPACE AND TIME
                </p>
            </div>
        </motion.div>
    );
}
