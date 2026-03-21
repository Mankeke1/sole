"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const sectors = [
    {
        title: "Minería",
        description: "Comprendo la exigencia del rubro minero. Faenas, túneles, plantas concentradoras y operaciones de extracción seguras.",
        img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800",
    },
    {
        title: "Industria",
        description: "Control de riesgos en plantas manufactureras, bodegas y procesos productivos complejos.",
        img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800",
    },
    {
        title: "Construcción",
        description: "Gestión preventiva en obras civiles, edificación y mega proyectos de infraestructura urbana o vial.",
        img: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=800",
    },
    {
        title: "Mantención",
        description: "Asesoría para equipos de mantención, operadores de maquinaria pesada y empresas contratistas.",
        img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800",
    },
];

export default function Sectors() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(".sector-header",
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".sector-header",
                        start: "top 90%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                }
            );

            gsap.fromTo(".sector-card",
                { scale: 0.95, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".sectors-grid",
                        start: "top 90%",
                    },
                    scale: 1,
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
        <section id="sectores" ref={container} className="py-24 bg-navy">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="sector-header text-center max-w-2xl mx-auto mb-16">
                    <span className="text-yellow font-bold tracking-wider uppercase text-sm mb-3 block">Sectores</span>
                    <h2 className="text-white font-heading font-extrabold text-3xl md:text-5xl mb-6">
                        Experiencia en terreno de alto riesgo
                    </h2>
                </div>

                <div className="sectors-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sectors.map((sector, idx) => (
                        <div
                            key={idx}
                            className="sector-card group relative bg-deepblue rounded-2xl overflow-hidden cursor-pointer shadow-lg border border-white/5 hover:border-white/20 transition-colors"
                        >
                            <div className="absolute inset-0 z-0">
                                <Image
                                    src={sector.img}
                                    alt={sector.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-30 group-hover:opacity-40"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-navy block to-transparent opacity-90"></div>
                            </div>

                            <div className="relative z-10 p-8 h-full flex flex-col justify-start pt-48 min-h-[380px]">
                                <div className="w-16 h-1 bg-yellow mb-4 rounded-full"></div>
                                <h3 className="text-xl font-heading font-bold text-white mb-3">
                                    {sector.title}
                                </h3>
                                <p className="text-white/80 text-[15px] leading-relaxed">
                                    {sector.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
