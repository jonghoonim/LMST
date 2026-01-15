"use client";

import { useEffect, useState } from "react";

export function IntroOverlay() {
    const [step, setStep] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        // Check session storage to only run once per session
        const hasSeenIntro = sessionStorage.getItem("lmst_intro_seen");
        if (hasSeenIntro) {
            setVisible(false);
            return;
        }

        const timeline = [
            { time: 500, action: () => setStep(1) },  // LOGIC
            { time: 1000, action: () => setStep(2) }, // MATTER
            { time: 1500, action: () => setStep(3) }, // SPACE
            { time: 2000, action: () => setStep(4) }, // TIME
            { time: 2800, action: () => setStep(5) }, // ACCESS GRANTED
            {
                time: 4000, action: () => {
                    setVisible(false);
                    sessionStorage.setItem("lmst_intro_seen", "true");
                }
            }
        ];

        timeline.forEach(({ time, action }) => {
            setTimeout(action, time);
        });

    }, []);

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black text-white font-mono text-lg sm:text-2xl font-bold">
            <div className="flex flex-col gap-2 w-64">
                <div className={step >= 1 ? "opacity-100" : "opacity-0"}>
                    LOADING LOGIC... <span className="text-[#00FF00]">OK</span>
                </div>
                <div className={step >= 2 ? "opacity-100" : "opacity-0"}>
                    LOADING MATTER... <span className="text-[#00FF00]">OK</span>
                </div>
                <div className={step >= 3 ? "opacity-100" : "opacity-0"}>
                    LOADING SPACE... <span className="text-[#00FF00]">OK</span>
                </div>
                <div className={step >= 4 ? "opacity-100" : "opacity-0"}>
                    LOADING TIME... <span className="text-[#00FF00]">OK</span>
                </div>
                <div className={`mt-8 text-center text-[#00FF00] ${step >= 5 ? "opacity-100" : "opacity-0"}`}>
                    &gt; ACCESS GRANTED.
                </div>
            </div>
        </div>
    );
}
