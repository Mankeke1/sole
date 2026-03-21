"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
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
                        start: "top 90%",
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
        <section ref={container} className="w-full relative py-20 lg:py-32 bg-gradient-to-br from-navy to-deepblue overflow-hidden flex items-center justify-center border-y border-white/10 mt-12">

            {/* Abstract Background Shapes */}
            <div className="absolute top-[-20%] left-[-10%] w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] bg-yellow/10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] min-w-[500px] min-h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="cta-content relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
                <h2 className="text-white font-heading font-extrabold text-4xl md:text-5xl lg:text-5xl mb-6 lg:mb-8 leading-tight">
                    Lleva la seguridad de tu empresa <span className="text-yellow">al siguiente nivel</span>
                </h2>
                <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
                    Evita multas, protege a tus trabajadores y mejora la productividad. Conversemos sobre las necesidades específicas de tu operación en terreno.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 justify-center">
                    <a
                        href="#contacto"
                        onClick={(e) => handleSmoothScroll(e, "#contacto")}
                        className="inline-flex justify-center items-center gap-2 bg-yellow text-navy font-bold px-8 py-4 rounded-md hover:bg-[#dca029] transition-transform hover:-translate-y-1 shadow-lg shadow-yellow/20"
                    >
                        Comenzar ahora <ArrowRight size={20} />
                    </a>
                    <a
                        href="https://wa.me/56912345678"
                        target="_blank"
                        className="inline-flex justify-center items-center gap-2 border border-white/20 bg-white/5 text-white font-medium px-8 py-4 rounded-md hover:bg-white/10 hover:border-white/30 transition-all"
                    >
                        Escribir al WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
