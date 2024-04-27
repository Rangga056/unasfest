import AutoScrollBanner from "@/components/shared/POSTER/Poster";
import Hero from "@/components/shared/Hero/Hero";
import Benefit from '@/components/shared/Benefit/Benefit';
import Gallery from '@/components/shared/Gallery/Gallery'; 
import Timeline from  "@/components/ui/timeliner";
// import Percobaan from "@/components/ui/percobaan";


export default function Home() {
  return (
    <main>
      {/* Hero  */}
      <Hero />
      {/* Banner Component  */}
      <AutoScrollBanner />
      {/* Activities  */}
      {/* Benefit  */}
      <Benefit />
      {/* Gallery Component  */}
      <Gallery />
      {/* FAQ Component   */}
      {/* Timeline Component */}
      <Timeline />
      {/* Contact Component  */}
      {/* <Percobaan /> */}
    </main>
  );
}
