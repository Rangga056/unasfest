import imgBottomRight from "@/public/assets/images/gallery/videotron-kdbi.png";
import imgTopRight from "@/public/assets/images/gallery/kompetisi-debat.png";
import imgBottom from "@/public/assets/images/gallery/juara-lomba.png";
import imgTopLeft from "@/public/assets/images/gallery/videotron-kdbi-2.png";
import { CirclePlay } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Gallery = () => {
  return (
    <div className="flex flex-col gap-y-6 w-[1180px] item-center justify-center mx-auto">
      <div className="flex flex-1 items-start justify-center gap-x-4">
        <div>
          <Image
            src={imgTopLeft}
            alt="kompetisi-debat"
            width={377}
            height={283}
            className="object-contain"
          />
        </div>
        <div>
          <h1 className="text-5xl uppercase font-bungee font-medium opacity-50">
            let&apos;s join
          </h1>
          <h1 className="text-5xl uppercase font-bungee font-medium opacity-70">
            let&apos;s join
          </h1>
          <h1 className="text-5xl uppercase font-bungee font-medium">
            let&apos;s join <br /> unas fest <br /> competency
          </h1>
        </div>
        <div>
          <Image
            src={imgTopRight}
            alt="kompetisi-debat"
            width={400}
            height={283}
            className="object-contain"
          />
        </div>
      </div>
      <div className="flex flex-1 items-start justify-center gap-x-4">
        <div className="w-[218px] relative">
          <p className="text-xl mt-4">
            A few flashbacks of the National University Festival competition
            held from December 19, 2023 to December 19, 2023.
          </p>
          <Button
            size="xl"
            asChild
            className="absolute -bottom-24 left-0 bg-page-btnBlue hover:bg-page-blue "
          >
            <Link
              href="/gallery"
              className="flex items-center gap-6 py-8 px-16 "
            >
              <CirclePlay />
              <span className="capitalize text-[24px] text-page-white">
                see gallery
              </span>
            </Link>
          </Button>
        </div>
        <div>
          <Image
            src={imgBottom}
            alt="kompetisi-debat"
            width={510}
            height={320}
            className="object-contain"
          />
        </div>

        <div>
          <Image
            src={imgBottomRight}
            alt="kompetisi-debat"
            width={380}
            height={252}
            className="object-contain"
          />
          <p className="text-xl uppercase">unas fest 2023</p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
