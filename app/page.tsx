import Poster from "@/components/shared/Poster/Poster";
import Hero from "@/components/shared/Hero/Hero";
import Benefit from '@/components/shared/Benefit/Benefit';
import Gallery from '@/components/shared/Gallery/Gallery'; 
import Timeline from "@/components/shared/Timeline/Timeline";
import Faq from "@/components/shared/Faq/Faq";
import Contact from "@/components/shared/Contact/Contact"
import InfiniteSlidingComponent from "@/components/shared/InfiniteSlidingComponent/InfiniteSlidingComponent";
import { postersData } from "@/constants/posterDatas";
import { faqsData } from "@/constants/Faqs";



export default function Home() {
  return (
    <main>
      {/* Hero  */}
      <Hero />
      {/* Banner Component  */}
      <Poster title="Our Competition" description="UNAS FEST 2024 Competition List" posterDatas={postersData}/>
      {/* Activities  */}
      {/* <AutoScrollComponent /> */}
      <InfiniteSlidingComponent />
      {/* Benefit  */}
      <Benefit />
      {/* Gallery Component  */}
      <Gallery />
      {/* Timeline Component */}
      <Timeline />
      {/* FAQ Component   */}
      <Faq title="frequently asked questions" faqsData={faqsData}/>
      {/* Contact Component  */}
      <Contact />
    </main>
  );
}
