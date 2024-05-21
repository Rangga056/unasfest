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
import HomeIcon from "@/public/assets/icons/unasfest-icon-logo.png";
import SpecialBanner from "@/components/shared/Home/SpecialBanner";
import ActivitySlider from "@/components/shared/Home/ActivitySlider";

export default function Home() {
  const InfiniteSlidingProps = {
    icon: HomeIcon.src,
    text: "UNAS FEST 2024",
  };

  return (
    <main>
      {/* Hero  */}
      <Hero />
      {/* Activities  Slide*/}
      <div className="my-20 container">
        <ActivitySlider props={postersData} />
      </div>

      {/* <AutoScrollComponent /> */}
      <InfiniteSlidingComponent props={InfiniteSlidingProps} />
      {/* Benefit  */}
      <Benefit />
      {/* Gallery Component  */}

      <div className="max-w-[1400px] mx-auto px-3 md:container mt-20">
        <Gallery />
      </div>
      {/* Special Banner */}
      {/* <SpecialBanner /> */}

      {/* Timeline Component */}
      <Timeline />
      {/* FAQ Component   */}
      <Faq title="frequently asked questions" faqsData={faqsData} />
      {/* Contact Component  */}
      {/* <Contact /> */}
    </main>
  );
}
