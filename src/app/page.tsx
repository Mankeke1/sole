import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import Sectors from "@/components/Sectors";
import About from "@/components/About";
import Regulations from "@/components/Regulations";
import Differentiators from "@/components/Differentiators";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-white overflow-hidden">
      <Hero />
      <Stats />
      <Services />
      <Sectors />
      <About />
      <Regulations />
      <Differentiators />
      <Testimonials />
      <FinalCTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
