"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import anime from "animejs";

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
    const container = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            gsap.fromTo(".stat-box",
                { y: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 95%",
                    },
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.15,
                    ease: "power3.out",
                    onComplete: () => {
                        const counters = document.querySelectorAll(".stat-counter");
                        counters.forEach((counter) => {
                            const target = parseInt(counter.getAttribute("data-target") || "0");
                            anime({
                                targets: counter,
                                innerHTML: [0, target],
                                easing: "easeOutExpo",
                                round: 1,
                                duration: 2000,
                            });
                        });
                    },
                }
            );
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-12 sm:py-16 lg:py-20 bg-lightgray">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

                    <div className="stat-box bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <h3 className="text-yellow font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-1 sm:mb-2">
                            <span className="stat-counter" data-target="14">0</span>
                        </h3>
                        <p className="text-navy font-bold text-[11px] sm:text-xs lg:text-sm uppercase tracking-wide">Años de experiencia</p>
                        <p className="text-graytext text-[11px] sm:text-xs lg:text-sm mt-2 sm:mt-3 hidden sm:block">Trayectoria real protegiendo operaciones en terreno.</p>
                    </div>

                    <div className="stat-box bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <h3 className="text-yellow font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-1 sm:mb-2">
                            <span className="stat-counter" data-target="14">0</span>
                        </h3>
                        <p className="text-navy font-bold text-[11px] sm:text-xs lg:text-sm uppercase tracking-wide">Empresas Asesoradas</p>
                        <p className="text-graytext text-[11px] sm:text-xs lg:text-sm mt-2 sm:mt-3 hidden sm:block">Confían en nuestra gestión preventiva y documental.</p>
                    </div>

                    <div className="stat-box bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <h3 className="text-yellow font-heading font-extrabold text-2xl sm:text-3xl lg:text-5xl mb-1 sm:mb-2">
                            Atacama
                        </h3>
                        <p className="text-navy font-bold text-[11px] sm:text-xs lg:text-sm uppercase tracking-wide">Base Principal</p>
                        <p className="text-graytext text-[11px] sm:text-xs lg:text-sm mt-2 sm:mt-3 hidden sm:block">Atención presencial en Copiapó y toda la región.</p>
                    </div>

                    <div className="stat-box bg-white p-5 sm:p-6 lg:p-8 rounded-xl sm:rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <h3 className="text-yellow font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl mb-1 sm:mb-2">
                            <span className="stat-counter" data-target="100">0</span>%
                        </h3>
                        <p className="text-navy font-bold text-[11px] sm:text-xs lg:text-sm uppercase tracking-wide">Cumplimiento Legal</p>
                        <p className="text-graytext text-[11px] sm:text-xs lg:text-sm mt-2 sm:mt-3 hidden sm:block">Evita multas Sernageomin, Seremi y Dirección del Trabajo.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
