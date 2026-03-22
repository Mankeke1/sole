"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FinalCTA() {
    const container = useRef<HTMLDivElement>(null);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    useGSAP(
        () => {
            gsap.fromTo(".cta-content",
                { scale: 0.95, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 95%",
                    },
                    scale: 1,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out"
                }
            );
        },
        { scope: container }
    );

    return (
        <section ref={container} className="w-full relative py-16 sm:py-20 lg:py-32 bg-gradient-to-br from-navy to-deepblue overflow-hidden flex items-center justify-center border-y border-white/10 mt-8 sm:mt-12">

            {/* Abstract Background Shapes - Scaled down on mobile */}
            <div className="absolute top-[-20%] left-[-10%] w-[60vw] sm:w-[40vw] h-[60vw] sm:h-[40vw] min-w-[250px] min-h-[250px] sm:min-w-[400px] sm:min-h-[400px] bg-yellow/10 rounded-full blur-[80px] sm:blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[70vw] sm:w-[50vw] h-[70vw] sm:h-[50vw] min-w-[300px] min-h-[300px] sm:min-w-[500px] sm:min-h-[500px] bg-white/5 rounded-full blur-[100px] sm:blur-[120px] pointer-events-none"></div>

            <div className="cta-content relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
                <h2 className="text-white font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6 lg:mb-8 leading-tight">
                    Lleva la seguridad de tu empresa <span className="text-yellow">al siguiente nivel</span>
                </h2>
                <p className="text-white/80 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 max-w-2xl mx-auto font-light">
                    Evita multas, protege a tus trabajadores y mejora la productividad. Conversemos sobre las necesidades específicas de tu operación en terreno.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center">
                    <a
                        href="#contacto"
                        onClick={(e) => handleSmoothScroll(e, "#contacto")}
                        className="inline-flex justify-center items-center gap-2 bg-yellow text-navy font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-[#dca029] transition-transform hover:-translate-y-1 shadow-lg shadow-yellow/20 text-sm sm:text-base"
                    >
                        Comenzar ahora <ArrowRight size={18} />
                    </a>
                    <a
                        href="https://wa.me/56956973129"
                        target="_blank"
                        className="inline-flex justify-center items-center gap-2 border border-white/20 bg-white/5 text-white font-medium px-6 sm:px-8 py-3 sm:py-4 rounded-md hover:bg-white/10 hover:border-white/30 transition-all text-sm sm:text-base"
                    >
                        Escribir al WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
