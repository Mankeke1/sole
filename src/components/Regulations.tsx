"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FileWarning, Info, Activity, ShieldAlert } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const rules = [
    {
        icon: <Activity size={24} />,
        title: "Ley 16.744",
        desc: "Seguro Social contra Riesgos de Accidentes del Trabajo y Enfermedades Profesionales.",
    },
    {
        icon: <ShieldAlert size={24} />,
        title: "DS 40",
        desc: "Reglamento sobre prevención de riesgos profesionales y el derecho a saber.",
    },
    {
        icon: <FileWarning size={24} />,
        title: "DS 594",
        desc: "Condiciones sanitarias y ambientales básicas exigidas en los lugares de trabajo.",
    },
    {
        icon: <Info size={24} />,
        title: "Gestión Sernageomin",
        desc: "Cumplimiento normativo y protocolos específicos para la industria minera extractiva.",
    },
];

export default function Regulations() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(".reg-header",
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".reg-header",
                        start: "top 95%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                }
            );

            gsap.fromTo(".reg-card",
                { scale: 0.9, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".reg-grid",
                        start: "top 95%",
                    },
                    scale: 1,
                    opacity: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "back.out(1.5)",
                }
            );
        },
        { scope: container }
    );

    return (
        <section id="normativa" ref={container} className="py-16 sm:py-20 lg:py-24 bg-lightgray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">

                    <div className="reg-header lg:col-span-5 text-center lg:text-left">
                        <span className="text-yellow font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 sm:mb-3 block">Normativa Vigente</span>
                        <h2 className="text-navy font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
                            Respaldo legal absoluto
                        </h2>
                        <p className="text-graytext text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                            El incumplimiento de la normativa nacional puede significar multas altísimas, paralización de faenas o cierres. Mi trabajo garantiza que operes bajo la ley.
                        </p>
                        <p className="text-graytext text-sm sm:text-base lg:text-lg leading-relaxed">
                            Mantén el enfoque en la productividad de tu negocio, mientras yo me encargo de ordenar, documentar y defender el cumplimiento normativo ante fiscalizaciones de la <strong className="font-semibold text-navy">SEREMI, Dirección del Trabajo y SERNAGEOMIN</strong>.
                        </p>
                    </div>

                    <div className="reg-grid lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                        {rules.map((rule, idx) => (
                            <div key={idx} className="reg-card bg-white p-5 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-lightgray rounded-lg flex items-center justify-center text-navy mb-3 sm:mb-4">
                                    {rule.icon}
                                </div>
                                <h4 className="font-heading font-bold text-navy text-base sm:text-[18px] mb-1 sm:mb-2">{rule.title}</h4>
                                <p className="text-graytext text-xs sm:text-sm leading-relaxed">{rule.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
