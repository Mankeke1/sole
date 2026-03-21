import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Soledad Barrera | Prevención de Riesgos",
  description:
    "Asesoría experta en seguridad y salud ocupacional para empresas mineras, industriales y de construcción en la Región de Atacama.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="antialiased bg-white text-graytext flex flex-col min-h-screen">
        <SmoothScroll>
          <Preloader />
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
