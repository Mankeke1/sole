"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        quote: "Soledad nos ayudó a ordenar toda nuestra documentación de prevención en la faena. Gracias a ella pasamos la fiscalización de SERNAGEOMIN sin ningún problema. Un alivio total.",
        author: "Ingeniero Administrador, Minera Local",
        role: "Cliente desde 2021"
    },
    {
        quote: "Las capacitaciones fueron claras y muy prácticas. Los trabajadores las entendieron de inmediato y ahora aplican los protocolos correctamente. Excelente disposición siempre.",
        author: "Jefa de RRHH, Construcciones Norte",
        role: "Región de Atacama"
    },
    {
        quote: "Respuesta rápida y profesionalismo total. La recomiendo a cualquier empresa del sector que necesite cumplir la normativa sin complicaciones y con alguien que realmente sabe.",
        author: "Gerente Operaciones, Industria Metalmecánica",
        role: "Copiapó"
    }
];

export default function Testimonials() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(".test-header",
                { y: 30, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".test-header",
                        start: "top 95%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                }
            );

            gsap.fromTo(".test-card",
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: ".test-grid",
                        start: "top 95%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.6,
                    stagger: 0.2,
                    ease: "power2.out"
                }
            );
        },
        { scope: container }
    );

    return (
        <section id="testimonios" ref={container} className="py-16 sm:py-20 lg:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                <div className="test-header text-center max-w-2xl mx-auto mb-10 sm:mb-14 lg:mb-16">
                    <span className="text-yellow font-bold tracking-wider uppercase text-xs sm:text-sm mb-2 sm:mb-3 block">Lo que dicen las empresas</span>
                    <h2 className="text-navy font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4 sm:mb-6">
                        Confianza respaldada por clientes reales
                    </h2>
                </div>

                <div className="test-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                    {testimonials.map((test, idx) => (
                        <div
                            key={idx}
                            className="test-card bg-lightgray rounded-xl sm:rounded-2xl p-6 sm:p-7 lg:p-8 relative hover:-translate-y-2 transition-transform duration-300"
                        >
                            <Quote className="text-yellow/30 absolute top-5 sm:top-6 right-5 sm:right-6" size={36} />

                            <div className="relative z-10 h-full flex flex-col">
                                <p className="text-graytext text-sm sm:text-[15px] leading-relaxed italic mb-6 sm:mb-8 flex-grow">
                                    &ldquo;{test.quote}&rdquo;
                                </p>

                                <div className="border-t border-gray-200 pt-3 sm:pt-4 mt-auto">
                                    <h4 className="font-bold text-navy text-xs sm:text-sm uppercase tracking-wide">
                                        {test.author}
                                    </h4>
                                    <span className="text-graytext text-[10px] sm:text-xs">
                                        {test.role}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
