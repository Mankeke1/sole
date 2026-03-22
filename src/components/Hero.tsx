"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import anime from "animejs";

import { ArrowRight } from "lucide-react";

const basePath = process.env.NODE_ENV === 'production' ? '/sole' : '';

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
        const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReducedMotion) return;

        // Particles - spread across entire hero
        const particlesContainer = document.querySelector(".particles-gsap");
        if (particlesContainer) {
            const count = window.innerWidth < 768 ? 15 : 25;
            for (let i = 0; i < count; i++) {
                const p = document.createElement("div");
                p.className = "absolute rounded-full pointer-events-none";
                const size = Math.random() * 6 + 2;
                p.style.width = `${size}px`;
                p.style.height = `${size}px`;
                p.style.left = `${Math.random() * 100}%`;
                p.style.top = `${Math.random() * 100}%`;
                p.style.backgroundColor = size > 5 ? "rgba(224, 175, 49, 0.25)" : "rgba(224, 175, 49, 0.15)";
                particlesContainer.appendChild(p);

                anime({
                    targets: p,
                    translateX: () => anime.random(-30, 30),
                    translateY: () => anime.random(-30, 30),
                    opacity: [
                        { value: anime.random(5, 20) / 100, duration: 0 },
                        { value: anime.random(15, 45) / 100, duration: anime.random(3000, 7000) },
                    ],
                    scale: [
                        { value: anime.random(80, 120) / 100, duration: anime.random(4000, 8000) },
                    ],
                    direction: "alternate",
                    loop: true,
                    easing: "easeInOutSine",
                    delay: anime.random(0, 2000),
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

        // Word rotator
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
        <section id="inicio" ref={container} className="relative w-full min-h-[100svh] md:min-h-screen bg-navy flex flex-col md:flex-row overflow-hidden">

            {/* ===== MOBILE BACKGROUND IMAGE (visible only < md) ===== */}
            <div className="absolute inset-0 md:hidden z-0">
                <img
                    src={`${basePath}/images/capacitacion.jpg`}
                    alt="Capacitación en prevención de riesgos"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{ transform: 'scale(1.15)', transformOrigin: 'center center' }}
                />
                {/* Dark overlay for readability */}
                <div className="absolute inset-0 bg-navy/70"></div>
                {/* Bottom gradient fade */}
                <div className="absolute inset-0 bg-gradient-to-b from-navy/40 via-transparent to-navy/80"></div>
            </div>

            {/* Particles - spread across entire hero */}
            <div className="particles-gsap absolute inset-0 overflow-hidden z-[5] pointer-events-none"></div>

            {/* LEFT PANEL */}
            <div className="relative w-full md:w-[60%] lg:w-[60%] xl:w-[55%] h-full flex flex-col justify-center px-5 sm:px-6 md:pl-[4vw] lg:pl-[5vw] xl:pl-[8vw] 2xl:pl-[10vw] md:pr-8 lg:pr-12 xl:pr-20 z-10 pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-20 md:pb-0">


                <div className="relative z-10 max-w-[620px] mx-auto md:mx-0 text-center md:text-left">

                    <div className="badge-gsap inline-flex items-center px-3 sm:px-4 py-1.5 border border-yellow/40 bg-yellow/10 rounded-full text-white text-[11px] sm:text-xs md:text-xs lg:text-sm font-medium mb-4 sm:mb-5 md:mb-4 lg:mb-6 opacity-0 translate-y-[-20px]">
                        ⭐ Relatora Oficial &middot; Mutual de Seguridad CChC
                    </div>

                    <h1 className="font-heading mb-3 sm:mb-5 md:mb-3 lg:mb-4 tracking-tight">
                        <span className="title1-gsap block text-yellow font-bold text-[10px] sm:text-xs md:text-[11px] lg:text-sm tracking-[0.2em] mb-2 opacity-0 translate-x-[-40px] uppercase">
                            Ingeniera en Prevención de Riesgos
                        </span>
                        <span className="title2-gsap block text-white font-extrabold text-3xl sm:text-4xl md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] leading-[1.1] opacity-0 translate-x-[-60px] pb-1">
                            14 años de experiencia
                        </span>
                        <span className="title3-gsap block text-white font-extrabold text-3xl sm:text-4xl md:text-[32px] lg:text-[40px] xl:text-[48px] 2xl:text-[56px] leading-[1.1] opacity-0 flex flex-col">
                            <span className="block mb-1">protegiendo lo que más</span>
                            <span className="relative text-yellow h-[1.2em] w-full block">
                                <span className="rotator-word absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 top-0">{currentWord}</span>
                            </span>
                        </span>
                    </h1>

                    <p className="desc-gsap text-white/80 text-sm sm:text-[15px] md:text-sm lg:text-base xl:text-lg leading-relaxed mb-6 sm:mb-7 md:mb-4 lg:mb-6 xl:mb-8 max-w-[480px] mx-auto md:mx-0 opacity-0 translate-y-[20px] font-light">
                        Asesoría especializada en seguridad y salud ocupacional, impulsando operaciones más seguras, eficientes y alineadas con la normativa vigente.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 sm:gap-5 md:gap-4 lg:gap-6 xl:gap-8 mb-6 sm:mb-7 md:mb-4 lg:mb-6 xl:mb-8">
                        <div className="stat-gsap flex flex-col items-center md:items-start opacity-0 translate-y-[30px]">
                            <span className="text-white font-heading font-extrabold text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">14</span>
                            <span className="text-white/60 text-[10px] sm:text-xs md:text-[10px] lg:text-sm">Años de exp.</span>
                        </div>
                        <div className="stat-gsap hidden sm:block w-[1px] h-8 sm:h-10 md:h-8 lg:h-10 xl:h-12 bg-white/20 opacity-0 translate-y-[30px]"></div>
                        <div className="stat-gsap flex flex-col items-center md:items-start opacity-0 translate-y-[30px]">
                            <span className="text-white font-heading font-extrabold text-2xl sm:text-3xl md:text-2xl lg:text-3xl xl:text-4xl">14</span>
                            <span className="text-white/60 text-[10px] sm:text-xs md:text-[10px] lg:text-sm">Empresas asesoradas</span>
                        </div>
                        <div className="stat-gsap hidden sm:block w-[1px] h-8 sm:h-10 md:h-8 lg:h-10 xl:h-12 bg-white/20 opacity-0 translate-y-[30px]"></div>
                        <div className="stat-gsap flex flex-col items-center md:items-start opacity-0 translate-y-[30px]">
                            <span className="text-white font-heading font-extrabold text-lg sm:text-xl md:text-lg lg:text-xl xl:text-2xl">Minería / Indus.</span>
                            <span className="text-white/60 text-[10px] sm:text-xs md:text-[10px] lg:text-sm">Sectores</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mb-0 md:mb-4 lg:mb-6 xl:mb-8 w-full sm:w-auto">
                        <a href="#contacto" onClick={(e) => handleSmoothScroll(e, "#contacto")} className="btn-gsap inline-flex justify-center items-center gap-2 bg-yellow text-navy font-bold px-6 sm:px-8 py-3 sm:py-3.5 rounded-md hover:bg-[#dca029] transition-transform hover:-translate-y-0.5 opacity-0 translate-y-[30px] w-full sm:w-auto text-center text-sm sm:text-base">
                            Solicitar asesoría <ArrowRight size={18} />
                        </a>
                        <a href="#servicios" onClick={(e) => handleSmoothScroll(e, "#servicios")} className="btn-gsap inline-flex justify-center items-center gap-2 border-2 border-white/80 text-white font-medium px-6 sm:px-8 py-3 sm:py-3.5 rounded-md hover:bg-white/10 transition-colors opacity-0 translate-y-[30px] w-full sm:w-auto text-center text-sm sm:text-base">
                            Ver servicios
                        </a>
                    </div>

                    <div className="trust-gsap opacity-0 border-t border-white/10 pt-3 lg:pt-4 hidden md:block mt-2 lg:mt-4">
                        <span className="block text-white/40 text-[10px] uppercase tracking-[0.15em] mb-2 lg:mb-3">Experiencia comprobada en:</span>
                        <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {["Ley 16.744", "DS 40", "DS 594", "SERNAGEOMIN", "Mutual de Seguridad"].map((badge) => (
                                <span key={badge} className="px-2 md:px-2.5 lg:px-3 py-1 bg-white/5 border border-white/10 rounded-md text-white/80 text-[9px] md:text-[10px] lg:text-xs">
                                    {badge}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* ===== DESKTOP/TABLET SIDE IMAGE (visible only >= md) ===== */}
            {/* Yellow line background */}
            <div className="decor-line-gsap hidden md:block absolute right-0 top-0 bottom-0 md:w-[50%] xl:w-[48%] bg-yellow z-0 md:clip-path-polygon origin-top scale-y-0"></div>

            {/* Right image panel */}
            <div className="hero-right-gsap hidden md:block absolute right-0 top-0 bottom-0 md:w-[50%] xl:w-[48%] z-10 md:clip-path-polygon-inner opacity-0 translate-x-[60px]">
                <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/60 to-transparent z-10"></div>
                <div className="absolute inset-0 bg-navy/20 z-10 mix-blend-multiply"></div>

                <img
                    src={`${basePath}/images/capacitacion.jpg`}
                    alt="Capacitación en prevención de riesgos"
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                />
            </div>

            {/* Scroll indicator */}
            <div className="hidden md:flex absolute bottom-10 right-12 flex-col items-center gap-3 z-20 opacity-60 hover:opacity-100 transition-opacity">
                <span className="text-white text-[9px] uppercase tracking-[0.3em] rotate-90 mb-6">Scroll</span>
                <div className="h-16 w-[1px] bg-white/20 relative overflow-hidden">
                    <div className="scroll-line-anime absolute top-0 left-0 w-full h-full bg-yellow origin-top"></div>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @media (min-width: 768px) {
          .md\\:clip-path-polygon {
            clip-path: polygon(8% 0, 100% 0, 100% 100%, 0% 100%);
          }
          .md\\:clip-path-polygon-inner {
            clip-path: polygon(calc(8% + 4px) 0, 100% 0, 100% 100%, 4px 100%);
          }
        }
      `}} />
        </section>
    );
}
