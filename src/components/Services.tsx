"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ShieldCheck, FileText, Users, HardHat, FileSearch, Building2 } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const servicesList = [
    {
        icon: <ShieldCheck size={32} />,
        title: "Identificación y Evaluación de Riesgos",
        description: "Diagnóstico completo de peligros en faena, plantas o proyectos de ingeniería.",
    },
    {
        icon: <FileText size={32} />,
        title: "Planes de Prevención",
        description: "Elaboración e implementación de procedimientos de trabajo seguro ajustados a tu operación.",
    },
    {
        icon: <Users size={32} />,
        title: "Capacitaciones",
        description: "Charlas obligatorias DS 40, ODI e inducciones, con experiencia de relatora Mutual.",
    },
    {
        icon: <FileSearch size={32} />,
        title: "Investigación de Accidentes",
        description: "Análisis experto bajo metodologías reconocidas para evitar reincidencias y cumplir la norma.",
    },
    {
        icon: <HardHat size={32} />,
        title: "Asesoría en Terreno",
        description: "Visitas técnicas de inspección, control documental y observaciones conductuales in situ.",
    },
    {
        icon: <Building2 size={32} />,
        title: "Documentación Reglamentaria",
        description: "Creación de Reglamentos Internos, matrices MIPER y protocolos Minsal.",
    },
];

export default function Services() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(".service-header",
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".service-header",
                        start: "top 95%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                }
            );

            gsap.fromTo(".service-card",
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".services-grid",
                        start: "top 95%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out"
                }
            );
        },
        { scope: container }
    );

    return (
        <section id="servicios" ref={container} className="py-24 bg-gradient-to-b from-white to-[#F4F6FA] relative">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="service-header text-center max-w-2xl mx-auto mb-16 lg:mb-20">
                    <span className="text-yellow font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Lo que hago</span>
                    <h2 className="text-navy font-heading font-extrabold text-4xl md:text-5xl mb-6 tracking-tight">
                        Especialista en Prevención de Riesgos
                    </h2>
                    <p className="text-graytext text-[17px] md:text-lg leading-relaxed font-light">
                        Soluciones completas para proteger a tus trabajadores y asegurar que tu empresa cumpla rigurosamente con todos los requerimientos legales en Chile.
                    </p>
                </div>

                <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {servicesList.map((service, idx) => (
                        <div
                            key={idx}
                            className="service-card group bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-2xl hover:shadow-navy/5 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
                        >
                            {/* Subtle top border accent */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow to-[#f8c168] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

                            <div className="w-14 h-14 bg-lightgray rounded-xl flex items-center justify-center text-navy mb-6 group-hover:bg-navy group-hover:text-white transition-colors duration-300">
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-heading font-bold text-navy mb-3 group-hover:text-yellow transition-colors duration-300">
                                {service.title}
                            </h3>
                            <p className="text-graytext leading-relaxed text-[15px]">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
