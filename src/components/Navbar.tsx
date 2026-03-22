"use client";

import { useEffect, useState } from "react";
import { cn } from "@/components/ui/Button";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [mobileOpen]);

    const navLinks = [
        { label: "Inicio", href: "#inicio" },
        { label: "Servicios", href: "#servicios" },
        { label: "Sectores", href: "#sectores" },
        { label: "Sobre mí", href: "#sobre-mi" },
        { label: "Normativa", href: "#normativa" },
        { label: "Contacto", href: "#contacto" },
    ];

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileOpen(false);
        const targetId = href.replace(/.*\#/, "");
        const elem = document.getElementById(targetId);
        if (elem) {
            elem.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
                scrolled
                    ? "bg-navy/95 backdrop-blur-md py-3 sm:py-4 shadow-lg"
                    : "bg-transparent py-4 sm:py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <a
                    href="#inicio"
                    onClick={(e) => handleSmoothScroll(e, "#inicio")}
                    className="flex items-center gap-2 sm:gap-3 decoration-none group z-[101]"
                >
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-yellow rounded-full flex items-center justify-center text-navy font-extrabold text-xs sm:text-sm font-heading transition-transform group-hover:scale-105">
                        SB
                    </div>
                    <span className="text-white font-bold text-base sm:text-lg font-heading tracking-tight">
                        Soledad Barrera
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleSmoothScroll(e, link.href)}
                            className="text-white/90 hover:text-yellow text-[12px] lg:text-[14px] xl:text-[15px] font-medium transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        onClick={(e) => handleSmoothScroll(e, "#contacto")}
                        className="bg-yellow text-navy font-bold px-4 lg:px-5 xl:px-6 py-2 lg:py-2.5 rounded-md hover:bg-[#dca029] transition-colors text-xs lg:text-sm"
                    >
                        Cotizar &rarr;
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white p-2 focus:outline-none z-[101] relative"
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Abrir menú"
                >
                    <div className="space-y-1.5">
                        <span
                            className={cn(
                                "block w-6 h-0.5 bg-white transition-all duration-300",
                                mobileOpen ? "rotate-45 translate-y-2" : ""
                            )}
                        ></span>
                        <span
                            className={cn(
                                "block w-6 h-0.5 bg-white transition-all duration-300",
                                mobileOpen ? "opacity-0" : ""
                            )}
                        ></span>
                        <span
                            className={cn(
                                "block w-6 h-0.5 bg-white transition-all duration-300",
                                mobileOpen ? "-rotate-45 -translate-y-2" : ""
                            )}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu - Full screen overlay with solid background */}
            <div
                className={cn(
                    "fixed inset-0 bg-navy z-[100] transition-all duration-500 ease-in-out md:hidden flex flex-col justify-center items-center gap-6 sm:gap-8",
                    mobileOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
                )}
            >
                {navLinks.map((link, idx) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className={cn(
                            "text-white text-xl sm:text-2xl font-medium transition-all duration-300",
                            mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                        )}
                        style={{ transitionDelay: mobileOpen ? `${idx * 50}ms` : "0ms" }}
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="#contacto"
                    onClick={(e) => handleSmoothScroll(e, "#contacto")}
                    className={cn(
                        "bg-yellow text-navy font-bold px-8 py-3 rounded-md mt-4 text-base sm:text-lg transition-all duration-300",
                        mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    )}
                    style={{ transitionDelay: mobileOpen ? `${navLinks.length * 50}ms` : "0ms" }}
                >
                    Cotizar Ahora
                </a>
            </div>
        </nav>
    );
}
