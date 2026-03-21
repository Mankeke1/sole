"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import anime from "animejs";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export default function Hero() {
    const container = useRef<HTMLDivElement>(null);
    const words = ["importa.", "cuidas.", "construyes.", "vale."];
    const [currentWord, setCurrentWord] = useState(words[0]);

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
            const tl = gsap.timeline();

            // GSAP Sequence
            tl.to(".decor-line-gsap", { scaleY: 1, duration: 0.8, ease: "power3.out" }, 0)
                .to(".hero-right-gsap", { x: 0, opacity: 1, duration: 1.2, ease: "power4.out" }, 0.1)
                .to(".badge-gsap", { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" }, 0.3)
                .to(".title1-gsap", { x: 0, opacity: 1, duration: 0.6, ease: "power3.out" }, 0.5)
                .to(".title2-gsap", { x: 0, opacity: 1, duration: 0.7, ease: "power3.out" }, 0.6)
                .to(".title3-gsap", { opacity: 1, duration: 0.7, ease: "fade" }, 0.8)
                .to(".desc-gsap", { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }, 1)
                .to(".stat-gsap", { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.2)" }, 1.2)
                .to(".btn-gsap", { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" }, 1.5)
                .to(".trust-gsap", { opacity: 1, duration: 0.8, ease: "fade" }, 1.7);
        },
        { scope: container }
    );

    useEffect(() => {
        // Anime.js specific animations
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        // Particles
        const particlesContainer = document.querySelector(".particles-gsap");
        if (particlesContainer) {
            for (let i = 0; i < 15; i++) {
                const p = document.createElement("div");
                p.className = "absolute bg-yellow/20 rounded-full pointer-events-none";
                const size = Math.random() * 4 + 4;
                p.style.width = `${size}px`;
                p.style.height = `${size}px`;
                p.style.left = `${Math.random() * 100}%`;
                p.style.top = `${Math.random() * 100}%`;
                particlesContainer.appendChild(p);

                anime({
                    targets: p,
                    translateY: () => anime.random(-20, 20),
                    opacity: [
                        { value: anime.random(10, 40) / 100, duration: 0 },
                        { value: anime.random(10, 40) / 100, duration: anime.random(3000, 6000) },
                    ],
                    direction: "alternate",
                    loop: true,
                    easing: "easeInOutSine",
                });
            }
        }

        // Scroll line
        anime({
            targets: ".scroll-line-anime",
            scaleY: [0, 1, 0],
            duration: 1500,
            loop: true,
            easing: "easeInOutQuart",
        });

        // Word rotator using Anime.js
        let wordIndex = 0;
        const wordInterval = setInterval(() => {
            wordIndex = (wordIndex + 1) % words.length;

            anime({
                targets: ".rotator-word",
                opacity: [1, 0],
                translateY: [0, -16],
                duration: 300,
                easing: "easeInQuart",
                complete: () => {
                    setCurrentWord(words[wordIndex]);
                    anime({
                        targets: ".rotator-word",
                        opacity: [0, 1],
                        translateY: [16, 0],
                        duration: 400,
                        easing: "easeOutQuart",
                    });
                },
            });
        }, 3200);

        return () => clearInterval(wordInterval);
    }, [words]);

    return (
        <section id="inicio" ref={container} className="relative w-full min-h-[100vh] lg:h-screen bg-navy flex flex-col lg:flex-row overflow-hidden pt-24 lg:pt-0">

            {/* LEFT PANEL */}
            <div className="relative w-full xl:w-[55%] lg:w-[60%] h-full flex flex-col justify-center px-6 lg:pl-[8vw] xl:pl-[10vw] lg:pr-24 z-10 pb-20 lg:pb-0">

                {/* Decor Lines & Particles */}
                <div className="particles-gsap absolute inset-0 overflow-hidden z-0"></div>

                <div className="relative z-10 max-w-[620px] mx-auto lg:mx-0 text-center lg:text-left">

                    <div className="badge-gsap inline-flex items-center px-4 py-1.5 border border-yellow/40 bg-yellow/10 rounded-full text-white text-xs lg:text-sm font-medium mb-6 lg:mb-8 opacity-0 translate-y-[-20px]">
                        ⭐ Relatora Oficial &middot; Mutual de Seguridad CChC
                    </div>

                    <h1 className="font-heading mb-6 tracking-tight">
                        <span className="title1-gsap block text-yellow font-bold text-xs lg:text-sm tracking-[0.2em] mb-3 opacity-0 translate-x-[-40px] uppercase">
                            Prevención de Riesgos en Copiapó
                        </span>
                        <span className="title2-gsap block text-white font-extrabold text-4xl lg:text-[56px] leading-[1.05] opacity-0 translate-x-[-60px] pb-1">
                            14 años protegiendo
                        </span>
                        <span className="title3-gsap block text-white font-extrabold text-4xl lg:text-[56px] leading-[1.05] opacity-0 flex flex-col">
                            <span className="block mb-1 lg:mb-2">lo que más</span>
                            <span className="relative text-yellow h-[1.2em] w-full block">
                                <span className="rotator-word absolute left-0 top-0">{currentWord}</span>
                            </span>
                        </span>
                    </h1>

                    <p className="desc-gsap text-white/80 text-[15px] lg:text-lg leading-relaxed mb-10 max-w-[480px] mx-auto lg:mx-0 opacity-0 translate-y-[20px] font-light">
                        Asesoría experta en seguridad y salud ocupacional para empresas mineras, industriales y de construcción en la Región de Atacama. Cumplimiento normativo y prevención real en terreno.
                    </p>

                    <div className="flex flex-wrap justify-center lg:justify-start items-center gap-6 lg:gap-8 mb-10">
                        <div className="stat-gsap flex flex-col items-center lg:items-start opacity-0 translate-y-[30px]">
                            <span className="text-white font-heading font-extrabold text-3xl lg:text-4xl">14+</span>
                            <span className="text-white/60 text-xs lg:text-sm">Años de exp.</span>
                        </div>
                        <div className="stat-gsap hidden lg:block w-[1px] h-12 bg-white/20 opacity-0 translate-y-[30px]"></div>
                        <div className="stat-gsap flex flex-col items-center lg:items-start opacity-0 translate-y-[30px]">
                            <span className="text-white font-heading font-extrabold text-3xl lg:text-4xl">Copiapó</span>
                            <span className="text-white/60 text-xs lg:text-sm">Operaciones</span>
                        </div>
                        <div className="stat-gsap hidden sm:block lg:block w-[1px] h-12 bg-white/20 opacity-0 translate-y-[30px]"></div>
                        <div className="stat-gsap flex flex-col items-center lg:items-start opacity-0 translate-y-[30px]">
                            <span className="text-white font-heading font-extrabold text-xl lg:text-2xl mt-1 lg:mt-2 mb-1">Minería / Indus.</span>
                            <span className="text-white/60 text-xs lg:text-sm">Sectores</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10 w-full sm:w-auto">
                        <a href="#contacto" onClick={(e) => handleSmoothScroll(e, "#contacto")} className="btn-gsap inline-flex justify-center items-center gap-2 bg-yellow text-navy font-bold px-8 py-3.5 rounded-md hover:bg-[#dca029] transition-transform hover:-translate-y-0.5 opacity-0 translate-y-[30px] w-full sm:w-auto text-center">
                            Solicitar asesoría <ArrowRight size={18} />
                        </a>
                        <a href="#servicios" onClick={(e) => handleSmoothScroll(e, "#servicios")} className="btn-gsap inline-flex justify-center items-center gap-2 border-2 border-white/80 text-white font-medium px-8 py-3.5 rounded-md hover:bg-white/10 transition-colors opacity-0 translate-y-[30px] w-full sm:w-auto text-center">
                            Ver servicios
                        </a>
                    </div>

                    <div className="trust-gsap opacity-0 border-t border-white/10 pt-6 hidden lg:block mt-8">
                        <span className="block text-white/40 text-[10px] uppercase tracking-[0.15em] mb-3">Experiencia comprobada en:</span>
                        <div className="flex flex-wrap gap-2 lg:gap-3">
                            {["Ley 16.744", "DS 40", "DS 594", "SERNAGEOMIN", "Mutual de Seguridad"].map((badge) => (
                                <span key={badge} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-white/80 text-[11px] lg:text-xs">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* YELLOW LINE BACKGROUND (Forms the angled 3px border on the left edge of the right panel) */}
            <div className="decor-line-gsap hidden lg:block absolute lg:right-0 lg:top-0 h-full lg:w-[50%] xl:w-[48%] bg-yellow z-0 lg:clip-path-polygon origin-top scale-y-0"></div>

            {/* RIGHT PANEL */}
            <div className="hero-right-gsap relative w-full lg:absolute lg:right-0 lg:top-0 h-[40vh] lg:h-full lg:w-[50%] xl:w-[48%] z-10 lg:clip-path-polygon-inner opacity-0 translate-x-[60px]">
                {/* Abstract Dark Layer Over Image */}
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/40 to-transparent z-10 lg:from-navy lg:via-navy/60 lg:to-transparent"></div>
                <div className="absolute inset-0 bg-navy/20 z-10 mix-blend-multiply"></div>

                <Image
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600"
                    alt="Seguridad y prevención"
                    fill
                    priority
                    className="object-cover object-center"
                />

            </div>

            {/* Scroll indicator (Moved to Right Panel in Desktop for elegance and avoid overlap) */}
            <div className="hidden lg:flex absolute bottom-10 right-12 flex-col items-center gap-3 z-20 opacity-60 hover:opacity-100 transition-opacity">
                <span className="text-white text-[9px] uppercase tracking-[0.3em] rotate-90 mb-6">Scroll</span>
                <div className="h-16 w-[1px] bg-white/20 relative overflow-hidden">
                    <div className="scroll-line-anime absolute top-0 left-0 w-full h-full bg-yellow origin-top"></div>
                </div>
            </div>

            {/* Styles injected for layout features */}
            <style dangerouslySetInnerHTML={{
                __html: `
        @media (min-width: 1024px) {
          .lg\\:clip-path-polygon {
            clip-path: polygon(8% 0, 100% 0, 100% 100%, 0% 100%);
          }
          .lg\\:clip-path-polygon-inner {
            clip-path: polygon(calc(8% + 4px) 0, 100% 0, 100% 100%, 4px 100%);
          }
        }
      `}} />
        </section>
    );
}
