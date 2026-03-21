"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }
        window.scrollTo(0, 0);

        const tl = gsap.timeline({
            onComplete: () => {
                setIsLoading(false);
            }
        });

        tl.to(".progress-bar-fill", {
            width: "100%",
            duration: 1.5,
            ease: "power2.inOut"
        })
            .to(".progress-bar-container", {
                opacity: 0,
                duration: 0.3
            })
            .to(".preloader-bg", {
                yPercent: -100,
                duration: 0.8,
                ease: "power4.inOut"
            }, "+=0.2");
    }, []);

    if (!isLoading) return null;

    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center pointer-events-none">
            {/* Background layer */}
            <div className="preloader-bg absolute inset-0 bg-[#0c1f3d] w-full h-full"></div>

            {/* Progress Container */}
            <div className="progress-bar-container relative z-10 w-64 md:w-80 flex flex-col items-center">
                <div className="text-yellow font-heading font-bold text-sm md:text-base tracking-[0.2em] mb-4 uppercase text-center">
                    Soledad Barrera Quiñelen
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="progress-bar-fill h-full bg-yellow w-0"></div>
                </div>
            </div>
        </div>
    );
}
