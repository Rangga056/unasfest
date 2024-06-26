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
    <div className="relative grid grid-cols-2 gap-4 md:grid-cols-3">
      {/* Top left image */}
      <div className="col-span-1">
        <Image
          src={imgTopLeft}
          alt="Event 1"
          width={300}
          height={200}
          className="h-auto w-full"
        />
      </div>
      {/* Top middle text */}
      <div className="col-span-1 hidden flex-col items-start md:flex">
        <h1 className="font-bungee text-3xl font-medium uppercase opacity-50 md:text-[44px] lg:text-6xl">
          let&apos;s join
        </h1>
        <h1 className="font-bungee text-3xl font-medium uppercase opacity-70 md:text-[44px] lg:text-6xl">
          let&apos;s join
        </h1>
        <h1 className="font-bungee text-3xl font-medium uppercase md:text-[44px] lg:text-6xl">
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
          className="h-auto w-full"
        />
      </div>
      <div className="col-span-2 flex flex-1 items-start gap-x-1 md:col-span-3 md:gap-x-4">
        {/* Bottom left text */}
        <div className="hidden flex-col items-start md:flex md:w-[400px] md:text-xl">
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
            className="h-auto w-full"
          />
        </div>
        {/* Bottom right image */}
        <div className="flex w-full flex-col md:gap-2">
          <Image
            src={imgBottomRight}
            alt="Event 4"
            width={300}
            height={200}
            className="h-auto w-full"
          />
          <p className="hidden uppercase md:flex md:text-xl">unas fest 2023</p>
        </div>
      </div>
      <Button
        asChild
        size="lg"
        className="absolute -bottom-2 left-0 rounded-none bg-page-btnBlue hover:bg-page-blue md:bottom-4"
      >
        <Link
          href="/gallery"
          className="flex items-center gap-2 px-5 py-3 md:px-16 md:py-8 lg:gap-6 "
        >
          <CirclePlay />
          <span className="text-xs capitalize text-page-white md:text-[24px]">
            see gallery
          </span>
        </Link>
      </Button>
    </div>
  );
};

export default Gallery;