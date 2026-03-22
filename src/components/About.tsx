"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import { CheckCircle2 } from "lucide-react";

const basePath = process.env.NODE_ENV === 'production' ? '/sole' : '';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(".about-img",
                { x: -50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".about-img",
                        start: "top 95%",
                    },
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                }
            );

            gsap.fromTo(".about-text",
                { x: 50, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".about-text",
                        start: "top 95%",
                    },
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                }
            );

            gsap.fromTo(".about-list-item",
                { x: 20, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".about-list",
                        start: "top 95%",
                    },
                    x: 0,
                    opacity: 1,
                    stagger: 0.1,
                    duration: 0.5,
                    ease: "power2.out"
                }
            );
        },
        { scope: container }
    );

    return (
        <section id="sobre-mi" ref={container} className="py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">

                    <div className="about-img relative rounded-xl sm:rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[4/4] lg:aspect-[4/5] shadow-2xl shadow-navy/10 max-h-[400px] sm:max-h-[500px] lg:max-h-none">
                        <img
                            src={`${basePath}/images/portrait.png`}
                            alt="Soledad Barrera - Prevencionista"
                            className="absolute inset-0 w-full h-full object-cover object-top"
                        />
                        {/* Decor accent */}
                        <div className="absolute top-0 right-0 w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-yellow rounded-bl-full mix-blend-multiply opacity-80"></div>
                    </div>

                    <div className="about-text">
                        <span className="text-yellow font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 sm:mb-3 block">Sobre mí</span>
                        <h2 className="text-navy font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
                            Soledad Barrera Quiñelen
                        </h2>
                        <h3 className="text-deepblue font-bold text-lg sm:text-xl mb-3 sm:mb-4">
                            Experta en Prevención de Riesgos
                        </h3>
                        <p className="text-graytext text-sm sm:text-base lg:text-lg leading-relaxed mb-4 sm:mb-6">
                            Con más de 14 años dedicados a la seguridad y salud ocupacional, trabajo codo a codo con empresas del sector minero, industrial y de construcción en la Región de Atacama.
                        </p>
                        <p className="text-graytext text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                            Mi enfoque no es solo cumplir un papel, sino ayudar a crear ambientes de trabajo realmente seguros, donde las operaciones fluyan sin contratiempos y los equipos vuelvan sanos a casa.
                        </p>

                        <ul className="about-list space-y-3 sm:space-y-4">
                            {[
                                "14+ años de experiencia en minería e industria",
                                "Relatora Oficial en Autoridades Competentes",
                                "Asesoría externa dedicada y personalizada",
                                "Conocimiento profundo de normativas chilenas",
                                "Atención presencial en Copiapó / Atacama"
                            ].map((item, idx) => (
                                <li key={idx} className="about-list-item flex items-start sm:items-center gap-2 sm:gap-3">
                                    <CheckCircle2 className="text-yellow shrink-0 mt-0.5 sm:mt-0" size={18} />
                                    <span className="text-navy font-semibold text-sm sm:text-base">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
