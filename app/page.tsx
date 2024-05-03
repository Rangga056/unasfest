import Poster from "@/components/shared/(HOME)/Poster/Poster";
import Hero from "@/components/shared/(HOME)/Hero/Hero";
import Benefit from '@/components/shared/(HOME)/Benefit/Benefit';
import Gallery from '@/components/shared/(HOME)/Gallery/Gallery'; 
import Timeline from "@/components/shared/(HOME)/Timeline/Timeline";
import Faq from "@/components/shared/(HOME)/Faq/Faq";
import Contact from "@/components/shared/(HOME)/Contact/Contact"


export default function Home() {
  return (
    <main>
      {/* Hero  */}
      <Hero />
      {/* Banner Component  */}
      <Poster />
      {/* Activities  */}
      {/* Benefit  */}
      <Benefit />
      {/* Gallery Component  */}
      <Gallery />
      {/* Timeline Component */}
      <Timeline />
      {/* FAQ Component   */}
      <Faq />
      {/* Contact Component  */}
      <Contact />
    </main>
  );
}
