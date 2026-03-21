"use client";

import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
    const container = useRef<HTMLDivElement>(null);
    const [btnText, setBtnText] = useState("Enviar Mensaje");
    const [isSubmitting, setIsSubmitting] = useState(false);

    useGSAP(
        () => {
            gsap.fromTo(".contact-info-block",
                { x: -40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 95%",
                    },
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out"
                }
            );

            gsap.fromTo(".contact-form-block",
                { x: 40, opacity: 0 },
                {
                    scrollTrigger: {
                        trigger: container.current,
                        start: "top 95%",
                    },
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power3.out",
                    delay: 0.2
                }
            );
        },
        { scope: container }
    );

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setBtnText("Enviando...");

        const formData = new FormData(e.currentTarget);

        // REEMPLAZAR AQUÍ TU ACCESS KEY DE WEB3FORMS (obtenla gratis en web3forms.com)
        formData.append("access_key", "TU_ACCESS_KEY_AQUI");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setBtnText("¡Enviado! Te contactaré pronto.");
                (e.target as HTMLFormElement).reset();
            } else {
                console.log("Error", data);
                setBtnText("Hubo un error");
            }
        } catch (error) {
            console.error(error);
            setBtnText("Error de red");
        } finally {
            setIsSubmitting(false);
            setTimeout(() => {
                setBtnText("Enviar Mensaje");
            }, 5000);
        }
    };

    return (
        <section id="contacto" ref={container} className="py-24 bg-lightgray">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    <div className="contact-info-block">
                        <span className="text-yellow font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Hablemos</span>
                        <h2 className="text-navy font-heading font-extrabold text-4xl md:text-5xl mb-6 tracking-tight">
                            Conversemos sobre tu empresa
                        </h2>
                        <p className="text-graytext text-lg leading-relaxed mb-10 max-w-md">
                            Estoy disponible para evaluar tus requerimientos en prevención de riesgos y entregarte una propuesta a la medida de tu operación.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-navy shadow-sm shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-navy text-lg mb-1">Base de Operaciones</h4>
                                    <p className="text-graytext">Copiapó, Región de Atacama<br />Chile</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-navy shadow-sm shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-navy text-lg mb-1">Teléfono / WhatsApp</h4>
                                    <p className="text-graytext">+56 9 1234 5678</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-navy shadow-sm shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-navy text-lg mb-1">Correo Electrónico</h4>
                                    <p className="text-graytext">contacto@soledadbarrera.cl</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-navy shadow-sm shrink-0">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h4 className="font-heading font-bold text-navy text-lg mb-1">Horario de Atención</h4>
                                    <p className="text-graytext">Lunes a Viernes<br />09:00 - 18:00 hrs.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-block bg-white p-8 lg:p-12 rounded-2xl shadow-lg border border-gray-100">
                        <h3 className="font-heading font-bold text-2xl text-navy mb-6">Envíame un mensaje</h3>
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-navy mb-2">Nombre completo</label>
                                    <input required type="text" name="name" className="w-full bg-white border border-gray-200 focus:border-yellow focus:ring-4 focus:ring-yellow/10 px-4 py-3.5 rounded-xl outline-none transition-all duration-300 text-navy shadow-sm" placeholder="Ej. Juan Pérez" />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-navy mb-2">Empresa</label>
                                    <input required type="text" name="company" className="w-full bg-white border border-gray-200 focus:border-yellow focus:ring-4 focus:ring-yellow/10 px-4 py-3.5 rounded-xl outline-none transition-all duration-300 text-navy shadow-sm" placeholder="Nombre de tu empresa" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-navy mb-2">Teléfono</label>
                                    <input required type="tel" name="phone" className="w-full bg-white border border-gray-200 focus:border-yellow focus:ring-4 focus:ring-yellow/10 px-4 py-3.5 rounded-xl outline-none transition-all duration-300 text-navy shadow-sm" placeholder="+56 9..." />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-navy mb-2">Email</label>
                                    <input required type="email" name="email" className="w-full bg-white border border-gray-200 focus:border-yellow focus:ring-4 focus:ring-yellow/10 px-4 py-3.5 rounded-xl outline-none transition-all duration-300 text-navy shadow-sm" placeholder="tu@email.com" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-navy mb-2">Servicio de interés</label>
                                <select name="service" className="w-full bg-white border border-gray-200 focus:border-yellow focus:ring-4 focus:ring-yellow/10 px-4 py-3.5 rounded-xl outline-none transition-all duration-300 text-navy shadow-sm appearance-none">
                                    <option value="No especificado">Selecciona un servicio</option>
                                    <option value="Asesoría Mensual Continua">Asesoría Mensual Continua</option>
                                    <option value="Auditoría Documental">Auditoría Documental</option>
                                    <option value="Capacitación / Relatoría">Capacitación / Relatoría</option>
                                    <option value="Investigación de Accidente">Investigación de Accidente</option>
                                    <option value="Inducción Hombre Nuevo">Inducción Hombre Nuevo (ODI)</option>
                                    <option value="Otro">Otro</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-navy mb-2">Mensaje</label>
                                <textarea required name="message" rows={4} className="w-full bg-white border border-gray-200 focus:border-yellow focus:ring-4 focus:ring-yellow/10 px-4 py-3.5 rounded-xl outline-none transition-all duration-300 resize-none text-navy shadow-sm" placeholder="Cuéntame sobre las necesidades de prevención de tu empresa..."></textarea>
                            </div>

                            <button type="submit" disabled={isSubmitting} className="w-full bg-navy text-white font-bold py-4 rounded-lg hover:bg-deepblue transition-colors duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed">
                                {btnText}
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}
