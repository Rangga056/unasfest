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

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
export default function Gallery() {
  return (
    <section>
      <div className="relative mx-auto mt-20 w-full max-w-screen-2xl">
        <Image
          src={galleryHeader}
          alt="gallery header"
          className="mx-auto h-full max-h-[728px] w-full object-contain"
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

      <Card className="relative m-auto mb-12 mt-20 w-full max-w-screen-xl overflow-hidden pt-0 lg:w-[90%]">
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
      <div className="relative m-auto max-w-screen-xl bg-page-black pb-16 pl-4 pr-4 pt-16 sm:pl-16 sm:pr-16">
        <h2 className="text-left text-3xl font-semibold uppercase leading-normal tracking-wide md:text-4xl lg:text-5xl">
          <span className="pl-3 text-page-white">Memories from</span>{" "}
          <span className="text-page-green">the Past</span>
        </h2>
        <div className="justify-left mt-4 flex items-center space-x-4 p-4">
          <div className="border-1 z-10 w-[185px] rounded-none border-page-white text-page-white">
            <Select>
              <SelectTrigger className="w-[160px] bg-page-black">
                <SelectValue placeholder="Competition Title" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="KDBI">KDBI</SelectItem>
                  <SelectItem value="EDC">EDC</SelectItem>
                  <SelectItem value="SPC">SPC</SelectItem>
                  <SelectItem value="SMC">SMC</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <span className="text-page-white">From</span>
          <div className="border-1 z-10 w-[200px] rounded-none border-page-white text-page-white">
            <Select>
              <SelectTrigger className="w-[80px] bg-page-black">
                <SelectValue placeholder="2023" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2024">2024</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          <div className="p-4">
            <div className="relative h-32 bg-page-white">
              <Image
                src={juara}
                alt="Kompetisi Debat Bahasa Indonesia"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <p className="font-semibold text-page-white">
              Kompetisi Debat Bahasa Indonesia
            </p>
            <p className="text-page-white">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-page-white"></div>
            <p className="font-semibold text-page-white">
              English Debate Competition
            </p>
            <p className="text-page-white">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-page-white"></div>
            <p className="font-semibold text-page-white">
              Scientific Paper Competition
            </p>
            <p className="text-page-white">Presentation From Cak Imin</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-page-white"></div>
            <p className="font-semibold text-page-white">
              Kompetisi Debat Bahasa Indonesia
            </p>
            <p className="text-page-white">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-page-white"></div>
            <p className="font-semibold text-page-white">
              English Debate Competition
            </p>
            <p className="text-page-white">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-page-white"></div>
            <p className="font-semibold text-page-white">
              Scientific Paper Competition
            </p>
            <p className="text-page-white">Presentation From Cak Imin</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-page-white"></div>
            <p className="font-semibold text-page-white">
              Kompetisi Debat Bahasa Indonesia
            </p>
            <p className="text-page-white">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-page-white"></div>
            <p className="font-semibold text-page-white">
              English Debate Competition
            </p>
            <p className="text-page-white">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-page-white"></div>
            <p className="font-semibold text-page-white">
              Scientific Paper Competition
            </p>
            <p className="text-page-white">Presentation From Cak Imin</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-page-white"></div>
            <p className="font-semibold text-page-white">
              Kompetisi Debat Bahasa Indonesia
            </p>
            <p className="text-page-white">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-page-white"></div>
            <p className="font-semibold text-page-white">
              English Debate Competition
            </p>
            <p className="text-page-white">Team A vs Team B</p>
          </div>
          <div className="p-4">
            <div className="h-32 bg-page-white"></div>
            <p className="font-semibold text-page-white">
              Scientific Paper Competition
            </p>
            <p className="text-page-white">Presentation From Cak Imin</p>
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
