import Poster from "@/components/shared/Poster/Poster";
import Hero from "@/components/shared/Hero/Hero";
import Benefit from "@/components/shared/Benefit/Benefit";
import Gallery from "@/components/shared/Gallery/Gallery";
import Timeline from "@/components/shared/Timeline/Timeline";
import Faq from "@/components/shared/Faq/Faq";
import Contact from "@/components/shared/Contact/Contact";
import InfiniteSlidingComponent from "@/components/shared/InfiniteSlidingComponent/InfiniteSlidingComponent";
import { postersData } from "@/constants/posterDatas";
import { faqsData } from "@/constants/Faqs";
//TODO:Change the icon based on the figma design
import HomeIcon from "@/public/assets/icons/unasfest-icon-logo.png";

export default function Home() {
  const InfiniteSlidingProps = {
    icon: HomeIcon.src,
    text: "UNAS FEST 2024",
  };

  return (
    <main>
      {/* Hero  */}
      <Hero />
      {/* Banner Component  */}
      <Poster
        title="Our Competition"
        description="UNAS FEST 2024 Competition List"
        posterDatas={postersData}
      />
      {/* Activities  */}
      {/* <AutoScrollComponent /> */}
      <InfiniteSlidingComponent props={InfiniteSlidingProps} />
      {/* Benefit  */}
      <Benefit />
      {/* Gallery Component  */}
      <Gallery />
      {/* Timeline Component */}
      <Timeline />
      {/* FAQ Component   */}
      <Faq title="frequently asked questions" faqsData={faqsData} />
      {/* Contact Component  */}
      <Contact />
    </main>
  );
}
