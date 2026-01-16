"use client";

import { useEffect, useState } from "react";

export function IntroOverlay() {
    const [step, setStep] = useState(0);
    const [visible, setVisible] = useState(true);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Check session storage to only run once per session
        const hasSeenIntro = sessionStorage.getItem("lmst_intro_seen");
        if (hasSeenIntro) {
            setVisible(false);
            return;
        }

        const timeline = [
            { time: 500, action: () => setStep(1) },  // DECODING_LOGIC
            { time: 1000, action: () => setStep(2) }, // MATERIALIZING_MATTER
            { time: 1500, action: () => setStep(3) }, // CHECKING_KERNEL
            { time: 2200, action: () => setStep(4) }, // ROOT_IDENTITY
            { time: 3000, action: () => setStep(5) }, // AWAITING_INPUT
            { time: 3500, action: () => setReady(true) }, // Show Enter Button
        ];

        timeline.forEach(({ time, action }) => {
            setTimeout(action, time);
        });

    }, []);

    const handleEnter = () => {
        setVisible(false);
        sessionStorage.setItem("lmst_intro_seen", "true");
    };

    if (!visible) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#F4F4F4]/90 backdrop-blur-md text-black font-mono text-lg sm:text-lg font-bold">
            <div className="flex flex-col gap-2 w-auto min-w-[300px]">
                <div className={`whitespace-nowrap ${step >= 1 ? "opacity-100" : "opacity-0"}`}>
                    &gt; DECODING_LOGIC... <span className="text-[#00FF00]">OK</span>
                </div>
                <div className={`whitespace-nowrap ${step >= 2 ? "opacity-100" : "opacity-0"}`}>
                    &gt; MATERIALIZING_MATTER... <span className="text-[#00FF00]">OK</span>
                </div>
                <div className={`whitespace-nowrap ${step >= 3 ? "opacity-100" : "opacity-0"}`}>
                    &gt; CHECKING_KERNEL... <span className="text-[#00FF00]">FOUND.</span>
                </div>
                <div className={`whitespace-nowrap mt-2 ${step >= 4 ? "opacity-100" : "opacity-0"}`}>
                    &gt; ROOT_IDENTITY: "LET'S MAKE SOMETHING TOGETHER"
                </div>

                <div className={`mt-8 text-black transition-opacity duration-300 ${step >= 5 ? "opacity-100" : "opacity-0"}`}>
                    &gt; AWAITING_INPUT<span className="animate-blink">_</span>
                </div>

                {ready && (
                    <button
                        onClick={handleEnter}
                        className="mt-4 mx-auto text-sm border border-black bg-black text-white px-4 py-1 hover:bg-white hover:text-black transition-all animate-pulse uppercase"
                    >
                        [ Enter_System ]
                    </button>
                )}
            </div>
        </div>
    );
}
