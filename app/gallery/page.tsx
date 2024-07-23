import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import galleryHeader from "@/public/assets/images/gallery/header.png";

{
  /* Memories From The Past */
}
import juara from "@/public/assets/images/gallery/juara-lomba.png";

import FaqActivities from "@/components/shared/FaqActivities/FaqActivities";
import ActivitiesGallery from "@/components/shared/ActivitiesGallery/activitiesGallery";
import { faqsgallery } from "@/constants/Faqs";
import faqs from "@/public/assets/images/gallery/faqs.png";
export default function Gallery() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative mx-auto h-[250px] w-full max-w-screen-xl bg-cover bg-center md:h-[400px] lg:h-[700px]"
        style={{ backgroundImage: `url(${galleryHeader.src})` }}
      >
        <div className="absolute left-20 top-[50%] z-50 hidden font-bungee leading-tight tracking-wide text-white shadow-lg text-shadow-md md:block md:text-2xl lg:text-5xl">
          <span className="text-[#C02424]">Canvas of Triumph: </span>
          <br />
          An Artistic Showcase of
          <br /> Unforgettable Moments
          <br />
          from Our Competition
        </div>
      </div>

      <Card className="relative m-auto mb-12 w-full max-w-screen-xl overflow-hidden md:mt-20 lg:w-[90%]">
        <CardTitle className="text-center text-3xl font-semibold uppercase leading-normal tracking-wide md:text-4xl lg:text-5xl">
          kaleidoscope <span className="text-[#C02424]">unas fest 2024</span>
        </CardTitle>
        <CardContent className="pt-10">
          <div className="w-full">
          <iframe
            className="aspect-video w-full max-w-[1280px]"
            src="https://www.youtube.com/embed/XWlBhQ9dFUQ?si=E7Tpbh5oXLSWIif8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          </div>
        </CardContent>
      </Card>

      {/* Gallery Activities */}
      <ActivitiesGallery />

      <div className="relative m-auto max-w-screen-xl ">
        <Card className="relative flex min-h-60 w-full flex-col overflow-hidden rounded-none sm:justify-center lg:w-[90%] lg:justify-start">
          <CardTitle className="pb-5 text-3xl font-semibold leading-normal tracking-wide sm:text-center lg:w-3/5 lg:pl-12 lg:text-start lg:text-5xl">
            frequently asked questions
          </CardTitle>
          <CardContent className="lg:w-3/4 lg:pl-12">
            <FaqActivities faqs={faqsgallery} />
          </CardContent>
        </Card>
        <Image
          src={faqs}
          alt="toa"
          width={450}
          height={450}
          className="absolute bottom-16 right-0 hidden lg:inline-block"
        />
      </div>
    </section>
  );
}
