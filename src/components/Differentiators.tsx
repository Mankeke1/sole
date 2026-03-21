"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const diffs = [
    {
        title: "100% Orientada a Resultados",
        desc: "No entrego carpetas vacías para 'cumplir'. Implemento sistemas reales que bajan la accidentabilidad."
    },
    {
        title: "Gestión en Terreno",
        desc: "Acompaño a tus equipos directamente en las faenas, asegurando que la teoría se aplique en la práctica diaria."
    },
    {
        title: "Trato Directo y Cercano",
        desc: "Sin intermediarios ni consultoras enormes donde eres un número más. Atención rápida y enfocada."
    },
    {
        title: "Expertise de Relatora",
        desc: "Como formadora de la Mutual de Seguridad, sé exactamente cómo comunicar riesgos para que el trabajador entienda y actúe."
    }
];

export default function Differentiators() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(".diff-header",
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 90%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                }
            );

            gsap.fromTo(".diff-card",
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".diff-grid",
                        start: "top 90%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power2.out"
                }
            );
        },
        { scope: container }
    );

    return (
        <section id="diferenciales" ref={container} className="py-24 bg-navy relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow rounded-full mix-blend-overlay opacity-5 blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

                <div className="diff-header text-center max-w-2xl mx-auto mb-16">
                    <span className="text-yellow font-bold tracking-wider uppercase text-sm mb-3 block">Por qué elegirme</span>
                    <h2 className="text-white font-heading font-extrabold text-3xl md:text-5xl mb-6">
                        Diferencia que se nota en terreno
                    </h2>
                    <p className="text-white/70 text-lg leading-relaxed">
                        La prevención no se trata solo de llenar papeles; se trata de liderazgo, empatía y conocimiento técnico aplicado a la realidad operativa de tu empresa.
                    </p>
                </div>

                <div className="diff-grid grid grid-cols-1 md:grid-cols-2 gap-6">
                    {diffs.map((item, idx) => (
                        <div
                            key={idx}
                            className="diff-card group bg-deepblue border border-white/10 rounded-2xl p-8 hover:bg-white/5 transition-colors duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-10 h-10 mt-1 flex-shrink-0 bg-yellow/10 rounded-full flex items-center justify-center text-yellow font-bold">
                                    {idx + 1}
                                </div>
                                <div>
                                    <h3 className="text-xl font-heading font-bold text-white mb-3 group-hover:text-yellow transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/70 leading-relaxed">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
