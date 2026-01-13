"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&";

interface IntroAnimationProps {
    onFinish: () => void;
}

export default function IntroAnimation({ onFinish }: IntroAnimationProps) {
    const [text, setText] = useState("");

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
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
            initial={{ y: 0 }}
            exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
        >
            <h1 className="text-8xl md:text-9xl font-bold tracking-[0.35em] text-black">
                {text}
            </h1>
        </motion.div>
    );
}
