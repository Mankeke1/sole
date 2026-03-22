"use client";

import Link from "next/link";
import { Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-navy pt-14 sm:pt-16 lg:pt-20 pb-6 sm:pb-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">

                    <div className="col-span-2 sm:col-span-2 lg:col-span-2 pr-0 lg:pr-12">
                        <Link href="#inicio" className="flex items-center gap-2 sm:gap-3 decoration-none mb-4 sm:mb-6">
                            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow rounded-full flex items-center justify-center text-navy font-extrabold text-xs sm:text-sm font-heading">
                                SB
                            </div>
                            <span className="text-white font-bold text-base sm:text-lg font-heading tracking-tight">
                                Soledad Barrera
                            </span>
                        </Link>
                        <p className="text-white/60 text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                            14 años de experiencia en Prevención de Riesgos. Protegiendo equipos y empresas en la Región de Atacama mediante un acompañamiento profesional en terreno.
                        </p>
                        <div className="flex gap-3 sm:gap-4">
                            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-yellow hover:border-yellow hover:text-navy transition-all">
                                <Linkedin size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-yellow hover:border-yellow hover:text-navy transition-all">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white/80 hover:bg-yellow hover:border-yellow hover:text-navy transition-all">
                                <Twitter size={16} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-heading font-bold mb-4 sm:mb-6 uppercase tracking-[0.15em] text-[10px] sm:text-xs">Navegación</h4>
                        <ul className="space-y-2.5 sm:space-y-4">
                            <li><Link href="#inicio" className="text-white/60 hover:text-yellow transition-colors text-xs sm:text-[15px]">Inicio</Link></li>
                            <li><Link href="#servicios" className="text-white/60 hover:text-yellow transition-colors text-xs sm:text-[15px]">Servicios</Link></li>
                            <li><Link href="#sectores" className="text-white/60 hover:text-yellow transition-colors text-xs sm:text-[15px]">Sectores</Link></li>
                            <li><Link href="#sobre-mi" className="text-white/60 hover:text-yellow transition-colors text-xs sm:text-[15px]">Sobre mí</Link></li>
                            <li><Link href="#normativa" className="text-white/60 hover:text-yellow transition-colors text-xs sm:text-[15px]">Normativa</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-heading font-bold mb-4 sm:mb-6 uppercase tracking-[0.15em] text-[10px] sm:text-xs">Servicios</h4>
                        <ul className="space-y-2.5 sm:space-y-4">
                            <li><span className="text-white/60 text-xs sm:text-[15px]">Evaluación de Riesgos</span></li>
                            <li><span className="text-white/60 text-xs sm:text-[15px]">Capacitaciones y ODI</span></li>
                            <li><span className="text-white/60 text-xs sm:text-[15px]">Auditorías Normativas</span></li>
                            <li><span className="text-white/60 text-xs sm:text-[15px]">Asesoría Presencial</span></li>
                            <li><span className="text-white/60 text-xs sm:text-[15px]">Comités Paritarios</span></li>
                        </ul>
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <h4 className="text-white font-heading font-bold mb-4 sm:mb-6 uppercase tracking-[0.15em] text-[10px] sm:text-xs">Contacto</h4>
                        <ul className="space-y-2.5 sm:space-y-4">
                            <li><span className="text-white/60 text-xs sm:text-[15px] block">Copiapó, Atacama</span></li>
                            <li><a href="mailto:spbarreraq@gmail.com" className="text-white/60 hover:text-yellow transition-colors text-xs sm:text-[15px] block break-all sm:break-normal">spbarreraq@gmail.com</a></li>
                            <li><a href="tel:+56956973129" className="text-white/60 hover:text-yellow transition-colors text-xs sm:text-[15px] block">+56 9 5697 3129</a></li>
                        </ul>
                    </div>

                </div>

                <div className="pt-6 sm:pt-8 border-t border-white/10 flex flex-col gap-3 sm:gap-4 md:flex-row items-center">
                    <p className="text-white/50 text-[10px] sm:text-xs md:flex-1 text-center md:text-left">
                        &copy; {currentYear} Soledad Barrera Quiñelen. Todos los derechos reservados.
                    </p>
                    <a
                        href="https://www.linkedin.com/in/tomasquinelen/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/30 hover:text-yellow transition-colors text-[10px] sm:text-[11px] tracking-wide md:flex-1 text-center"
                    >
                        Desarrollado por <span className="font-semibold text-white/50 hover:text-yellow">Tomás</span>
                    </a>
                    <div className="flex gap-4 sm:gap-6 items-center md:flex-1 justify-center md:justify-end">
                        <Link href="#" className="text-white/50 hover:text-white text-[10px] sm:text-xs transition-colors">Términos de Servicio</Link>
                        <Link href="#" className="text-white/50 hover:text-white text-[10px] sm:text-xs transition-colors">Política de Privacidad</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
