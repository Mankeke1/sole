"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
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
                    ? "bg-navy/95 backdrop-blur-md py-4 shadow-lg"
                    : "bg-transparent py-6"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
                {/* Logo */}
                <a
                    href="#inicio"
                    onClick={(e) => handleSmoothScroll(e, "#inicio")}
                    className="flex items-center gap-3 decoration-none group"
                >
                    <div className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center text-navy font-extrabold text-sm font-heading transition-transform group-hover:scale-105">
                        SB
                    </div>
                    <span className="text-white font-bold text-lg font-heading tracking-tight">
                        Soledad Barrera
                    </span>
                </a>

                {/* Desktop Links */}
                <div className="hidden lg:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={(e) => handleSmoothScroll(e, link.href)}
                            className="text-white/90 hover:text-yellow text-[15px] font-medium transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#contacto"
                        onClick={(e) => handleSmoothScroll(e, "#contacto")}
                        className="bg-yellow text-navy font-bold px-6 py-2.5 rounded-md hover:bg-[#dca029] transition-colors"
                    >
                        Cotizar &rarr;
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="lg:hidden text-white p-2 focus:outline-none"
                    onClick={() => setMobileOpen(!mobileOpen)}
                >
                    <div className="space-y-1.5">
                        <span
                            className={cn(
                                "block w-6 h-0.5 bg-white transition-transform",
                                mobileOpen ? "rotate-45 translate-y-2" : ""
                            )}
                        ></span>
                        <span
                            className={cn(
                                "block w-6 h-0.5 bg-white transition-opacity",
                                mobileOpen ? "opacity-0" : ""
                            )}
                        ></span>
                        <span
                            className={cn(
                                "block w-6 h-0.5 bg-white transition-transform",
                                mobileOpen ? "-rotate-45 -translate-y-2" : ""
                            )}
                        ></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 bg-navy z-[-1] transition-transform duration-500 ease-in-out lg:hidden flex flex-col justify-center items-center gap-8",
                    mobileOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleSmoothScroll(e, link.href)}
                        className="text-white text-2xl font-medium"
                    >
                        {link.label}
                    </a>
                ))}
                <a
                    href="#contacto"
                    onClick={(e) => handleSmoothScroll(e, "#contacto")}
                    className="bg-yellow text-navy font-bold px-8 py-3 rounded-md mt-4 text-lg"
                >
                    Cotizar Ahora
                </a>
            </div>
        </nav>
    );
}
