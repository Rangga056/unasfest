import Hero from "@/components/shared/Hero/Hero";
import Benefit from "@/components/shared/Home/Benefit";
import Gallery from "@/components/shared/Gallery/Gallery";
import Timeline from "@/components/shared/Timeline/Timeline";
import Faq from "@/components/shared/Faq/Faq";
import Contact from "@/components/shared/Contact/Contact";
import InfiniteSlidingComponent from "@/components/shared/Home/InfiniteSlidingComponent";
import { postersData } from "@/constants/Posters/posterDatas";
import { faqsData } from "@/constants/Faqs";
//TODO:Change the icon based on the figma design
import SpecialBanner from "@/components/shared/Home/SpecialBanner";
import Star from "@/public/assets/icons/star.png";
import ActivitySlider from "@/components/shared/Home/ActivitySlider";
import ContactHome from "@/components/shared/Home/ContactHome";
import FinalisSMC from "@/components/shared/Home/FinalisSMC";

export default function Home() {
  const InfiniteSlidingProps = {
    icon: Star.src,
    text: "UNAS FEST 2024",
  };

  return (
    <main>
      {/* Hero  */}
      <Hero />
      {/* <AutoScrollComponent /> */}
      <div className="overflow-hidden pb-2 md:overflow-visible md:p-0">
        <InfiniteSlidingComponent props={InfiniteSlidingProps} />
      </div>

      {/* Activities  Slide*/}
      <div className="container mt-20 pr-0" id="activity-slider-section">
        <ActivitySlider props={postersData} />
      </div>
      {/* Benefit  */}
      <div className="container mt-20 flex items-center justify-center">
        <SpecialBanner />
      </div>
      <div className="mt-20">
        {/* Finalis SMC */}
        <FinalisSMC/>
      </div>
      <div className="mt-20">
        {/* Special Banner */}
        <Benefit />
        {/* Gallery Component  */}
      </div>
      <div className="mx-auto mt-20 max-w-[1400px] px-3 md:container">
        <Gallery />
      </div>
      {/* Timeline Component */}
      <Timeline />
      {/* FAQ Component   */}
      <Faq title="frequently asked questions" faqsData={faqsData} />
      {/* Contact Component  */}
      <ContactHome />
    </main>
  );
}
