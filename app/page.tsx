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
      <InfiniteSlidingComponent props={InfiniteSlidingProps} />
      {/* Activities  Slide*/}
      <div className="container mt-20 pr-0">
        <ActivitySlider props={postersData} />
      </div>

      {/* Benefit  */}
      <div className="container mt-20">
        <SpecialBanner />
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
      {/* <Contact /> */}
    </main>
  );
}
