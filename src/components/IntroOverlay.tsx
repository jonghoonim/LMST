"use client";

import { useEffect, useState } from "react";

export function IntroOverlay() {
    const [step, setStep] = useState(0);
    const [visible, setVisible] = useState(true);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        // Check session storage to only run once per session
        const hasSeenIntro = sessionStorage.getItem("lmst_intro_seen_v25");
        if (hasSeenIntro) {
            setVisible(false);
            return;
        }

        const timeline = [
            { time: 500, action: () => setStep(1) },  // DECODING_LOGIC
            { time: 1000, action: () => setStep(2) }, // MATERIALIZING_MATTER
            { time: 1500, action: () => setStep(3) }, // OCCUPYING_SPACE
            { time: 2000, action: () => setStep(4) }, // ARCHIVING_TIME
            { time: 2700, action: () => setStep(5) }, // CHECKING_KERNEL
            { time: 3500, action: () => setStep(6) }, // ROOT_IDENTITY
            { time: 4300, action: () => { setStep(7); setReady(true); } }, // AWAITING_INPUT + Ready
        ];

        timeline.forEach(({ time, action }) => {
            setTimeout(action, time);
        });

    }, []);

    const handleEnter = () => {
        // Only allow click if the sequence is complete (ready)
        if (!ready) return;

        setVisible(false);
        sessionStorage.setItem("lmst_intro_seen_v25", "true");
    };

    if (!visible) return null;

    return (
        <div
            onClick={handleEnter}
            className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#F4F4F4]/90 backdrop-blur-md text-black font-mono text-xs sm:text-lg ${ready ? "cursor-pointer" : "cursor-wait"}`}
        >
            <div className="flex flex-col gap-1 w-auto min-w-[300px] max-w-[95vw]">
                {/* L, M, S, T Alignment: Materializing_ (14 chars) is the anchor for the next word start */}
                <div className={`whitespace-pre ${step >= 1 ? "opacity-100" : "opacity-0"}`}>
                    &gt; DECODING______LOGIC... <span className="text-[#00FF00] font-bold">OK</span>
                </div>
                <div className={`whitespace-pre ${step >= 2 ? "opacity-100" : "opacity-0"}`}>
                    &gt; MATERIALIZING_MATTER... <span className="text-[#00FF00] font-bold">OK</span>
                </div>
                <div className={`whitespace-pre ${step >= 3 ? "opacity-100" : "opacity-0"}`}>
                    &gt; OCCUPYING_____SPACE... <span className="text-[#00FF00] font-bold">OK</span>
                </div>
                <div className={`whitespace-pre ${step >= 4 ? "opacity-100" : "opacity-0"}`}>
                    &gt; ARCHIVING_____TIME... <div className="inline-block sm:inline"><span className="text-orange-500 font-bold">[IN PROGRESS]</span></div>
                </div>

                <div className={`whitespace-pre mt-4 ${step >= 5 ? "opacity-100" : "opacity-0"}`}>
                    &gt; CHECKING______KERNEL... <span className="text-[#00FF00] font-bold">FOUND.</span>
                </div>
                <div className={`mt-1 ${step >= 6 ? "opacity-100" : "opacity-0"}`}>
                    <div className="whitespace-pre">&gt; ROOT IDENTITY : </div>
                    <div className="pl-6 sm:pl-8 whitespace-normal sm:whitespace-nowrap mt-1 font-bold">
                        Let's Make Something Together!
                    </div>
                </div>

                <div className={`mt-8 text-black transition-opacity duration-300 ${step >= 7 ? "opacity-100" : "opacity-0"}`}>
                    &gt; AWAITING_INPUT<span className="animate-blink">_</span>
                </div>
            </div>
        </div>
    );
}
