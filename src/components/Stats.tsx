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
            // Reveal the whole section
            gsap.from(".stat-box", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 85%",
                },
                y: 40,
                opacity: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power3.out",
                onComplete: () => {
                    // Animate numbers with anime.js once revealed
                    const counters = document.querySelectorAll(".stat-counter");
                    counters.forEach((counter) => {
                        const target = parseInt(counter.getAttribute("data-target") || "0");
                        anime({
                            targets: counter,
                            innerHTML: [0, target],
                            easing: "easeOutExpo",
                            round: 1, // Round to integer
                            duration: 2000,
                        });
                    });
                },
            });
        },
        { scope: container }
    );

    return (
        <section ref={container} className="py-20 bg-lightgray">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

                    <div className="stat-box bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <h3 className="text-yellow font-heading font-extrabold text-5xl mb-2">
                            <span className="stat-counter" data-target="14">0</span>+
                        </h3>
                        <p className="text-navy font-bold text-sm uppercase tracking-wide">Años de experiencia</p>
                        <p className="text-graytext text-sm mt-3">Trayectoria real protegiendo operaciones en terreno.</p>
                    </div>

                    <div className="stat-box bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <h3 className="text-yellow font-heading font-extrabold text-5xl mb-2">
                            <span className="stat-counter" data-target="200">0</span>+
                        </h3>
                        <p className="text-navy font-bold text-sm uppercase tracking-wide">Empresas Asesoradas</p>
                        <p className="text-graytext text-sm mt-3">Confían en nuestra gestión preventiva y documental.</p>
                    </div>

                    <div className="stat-box bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <h3 className="text-yellow font-heading font-extrabold text-5xl mb-2">
                            Atacama
                        </h3>
                        <p className="text-navy font-bold text-sm uppercase tracking-wide">Base Principal</p>
                        <p className="text-graytext text-sm mt-3">Atención presencial en Copiapó y toda la región.</p>
                    </div>

                    <div className="stat-box bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center text-center">
                        <h3 className="text-yellow font-heading font-extrabold text-5xl mb-2">
                            <span className="stat-counter" data-target="100">0</span>%
                        </h3>
                        <p className="text-navy font-bold text-sm uppercase tracking-wide">Cumplimiento Legal</p>
                        <p className="text-graytext text-sm mt-3">Evita multas Sernageomin, Seremi y Dirección del Trabajo.</p>
                    </div>

                </div>
            </div>
        </section>
    );
}
