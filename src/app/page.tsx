import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";

import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import CTA from "@/components/sections/cta";
import Contact from "@/components/sections/contact";
import WhatsAppFloat from "@/components/sections/whatsapp-float";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <CTA />
        <Contact />
      </main>

      <Footer />
      <WhatsAppFloat />
    </>
  );
}