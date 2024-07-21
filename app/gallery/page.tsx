import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import galleryHeader from "@/public/assets/images/gallery/header.png";

{
  /* Memories From The Past */
}
import juara from "@/public/assets/images/gallery/juara-lomba.png";

import FaqActivities from "@/components/shared/FaqActivities/FaqActivities";
import { faqsgallery } from "@/constants/Faqs";
import faqs from "@/public/assets/images/gallery/faqs.png";
export default function Gallery() {
  return (
    <section>
      <div className="relative mx-auto w-full max-w-screen-2xl">
        <Image
          src={galleryHeader}
          alt="gallery header"
          className="mx-auto h-screen w-full"
        />
        <p className="absolute left-20 top-[40%] z-50 hidden font-bungee text-5xl leading-tight tracking-wide text-white shadow-lg lg:block">
          <span className="text-[#C02424]">Canvas of Triumph: </span>
          <br />
          An Artistic Showcase of
          <br /> Unforgettable Moments
          <br />
          from Our Competition
        </p>
      </div>

      <Card className="relative m-auto mb-12 mt-20 w-full max-w-screen-xl overflow-hidden lg:w-[90%]">
        <CardTitle className="text-center text-3xl font-semibold uppercase leading-normal tracking-wide md:text-4xl lg:text-5xl">
          kaleidoscope <span className="text-[#C02424]">unas fest 2024</span>
        </CardTitle>
        <CardContent className="pt-10">
          <div className="w-full">
            <iframe
              src="https://www.youtube.com/embed/XWlBhQ9dFUQ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="mx-auto aspect-video w-full"
            />
          </div>
        </CardContent>
      </Card>

      {/* Memories From The Past */}
      <div className="relative m-auto max-w-screen-xl bg-[#1F1E23] pb-16 pl-16 pr-16 pt-16">
        <h2 className="text-left text-3xl font-semibold uppercase leading-normal tracking-wide md:text-4xl lg:text-5xl">
          <span className="pl-3 text-[#FFFAF0]">Memories from</span>{" "}
          <span className="text-[#00A36C]">the Past</span>
        </h2>
        <div className="justify-left mt-4 flex items-center space-x-4 p-4">
          <select className="h-10 rounded border border-[#FFFAF0] bg-[#1F1E23] p-1 text-white">
            <option>Competition Title</option>
          </select>
          <span className="text-[#FFFAF0]">From</span>
          <input
            type="number"
            className="h-10 rounded border border-[#FFFAF0] bg-[#1F1E23] p-1 text-white"
            placeholder="2023"
          />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="p-4">
            <div className="relative h-32 bg-[#FFFAF0]">
              <Image
                src={juara}
                alt="Kompetisi Debat Bahasa Indonesia"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <p className="font-semibold text-[#FFFAF0]">
              Kompetisi Debat Bahasa Indonesia
            </p>
            <p className="text-[#FFFAF0]">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-[#FFFAF0]"></div>
            <p className="font-semibold text-[#FFFAF0]">
              English Debate Competition
            </p>
            <p className="text-[#FFFAF0]">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-[#FFFAF0]"></div>
            <p className="font-semibold text-[#FFFAF0]">
              Scientific Paper Competition
            </p>
            <p className="text-[#FFFAF0]">Presentation From Cak Imin</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-[#FFFAF0]"></div>
            <p className="font-semibold text-[#FFFAF0]">
              Kompetisi Debat Bahasa Indonesia
            </p>
            <p className="text-[#FFFAF0]">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-[#FFFAF0]"></div>
            <p className="font-semibold text-[#FFFAF0]">
              English Debate Competition
            </p>
            <p className="text-[#FFFAF0]">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-[#FFFAF0]"></div>
            <p className="font-semibold text-[#FFFAF0]">
              Scientific Paper Competition
            </p>
            <p className="text-[#FFFAF0]">Presentation From Cak Imin</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-[#FFFAF0]"></div>
            <p className="font-semibold text-[#FFFAF0]">
              Kompetisi Debat Bahasa Indonesia
            </p>
            <p className="text-[#FFFAF0]">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-[#FFFAF0]"></div>
            <p className="font-semibold text-[#FFFAF0]">
              English Debate Competition
            </p>
            <p className="text-[#FFFAF0]">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-[#FFFAF0]"></div>
            <p className="font-semibold text-[#FFFAF0]">
              Scientific Paper Competition
            </p>
            <p className="text-[#FFFAF0]">Presentation From Cak Imin</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-[#FFFAF0]"></div>
            <p className="font-semibold text-[#FFFAF0]">
              Kompetisi Debat Bahasa Indonesia
            </p>
            <p className="text-[#FFFAF0]">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-[#FFFAF0]"></div>
            <p className="font-semibold text-[#FFFAF0]">
              English Debate Competition
            </p>
            <p className="text-[#FFFAF0]">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-[#FFFAF0]"></div>
            <p className="font-semibold text-[#FFFAF0]">
              Scientific Paper Competition
            </p>
            <p className="text-[#FFFAF0]">Presentation From Cak Imin</p>
          </div>
        </div>
      </div>

      <div className="relative m-auto max-w-screen-xl pt-16">
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
