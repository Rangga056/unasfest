import imgBottom from "@/public/assets/images/gallery/videotron-kdbi.png";
import imgTopRight from "@/public/assets/images/gallery/kompetisi-debat.png";
import imgBottomRight from "@/public/assets/images/gallery/juara-lomba.png";
import imgTopLeft from "@/public/assets/images/gallery/videotron-kdbi2.png";
import { CirclePlay } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Gallery = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 relative">
      {/* Top left image */}
      <div className="col-span-1">
        <Image
          src={imgTopLeft}
          alt="Event 1"
          width={300}
          height={200}
          className="w-full h-auto"
        />
      </div>
      {/* Top middle text */}
      <div className="col-span-1 hidden md:flex flex-col items-start">
        <h1 className="text-3xl md:text-[44px] lg:text-6xl uppercase font-bungee font-medium opacity-50">
          let&apos;s join
        </h1>
        <h1 className="text-3xl md:text-[44px] lg:text-6xl uppercase font-bungee font-medium opacity-70">
          let&apos;s join
        </h1>
        <h1 className="text-3xl md:text-[44px] lg:text-6xl uppercase font-bungee font-medium">
          let&apos;s join <br /> unas fest <br /> competency
        </h1>
      </div>
      {/* Top right image */}
      <div className="col-span-1">
        <Image
          src={imgTopRight}
          alt="Event 2"
          width={300}
          height={200}
          className="w-full h-auto"
        />
      </div>
      <div className="col-span-2 md:col-span-3 flex items-start flex-1 gap-x-1 md:gap-x-4">
        {/* Bottom left text */}
        <div className="w-[250px] md:w-[400px] flex flex-col items-start text-xs md:text-xl">
          <p>
            Flashbacks of the National University Festival{" "}
            <span className="hidden lg:flex">
              {" "}
              competition held from December 19, 2023 to December 19, 2023.
            </span>
          </p>
        </div>
        {/* Bottom middle image */}
        <div className="w-full">
          <Image
            src={imgBottom}
            alt="Event 3"
            width={300}
            height={200}
            className="w-full h-auto"
          />
        </div>
        {/* Bottom right image */}
        <div className="w-full flex flex-col md:gap-2">
          <Image
            src={imgBottomRight}
            alt="Event 4"
            width={300}
            height={200}
            className="w-full h-auto"
          />
          <p className="uppercase text-xs md:text-xl">unas fest 2023</p>
        </div>
      </div>
      <Button
        asChild
        className="absolute left-0 -bottom-2 md:bottom-4 bg-page-btnBlue hover:bg-page-blue rounded-none"
      >
        <Link
          href="/gallery"
          className="flex items-center gap-2 lg:gap-6 py-3 md:py-8 px-5 md:px-16 "
        >
          <CirclePlay />
          <span className="capitalize text-xs md:text-[24px] text-page-white">
            see gallery
          </span>
        </Link>
      </Button>
    </div>
  );
};

export default Gallery;
