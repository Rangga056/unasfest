import React from "react";
import Image from "next/image";
import SpecialBannerImage from "@/public/assets/images/SI-Banner.png";
import { Button } from "@/components/ui/button";

const SpecialBanner = () => {
  return (
    <div className="flex flex-col md:flex-row h-auto w-full items-center justify-start p-8 pl-0">
      <div className="flex w-full max-w-screen-lg items-center flex-col md:flex-row">
        <Image
          src={SpecialBannerImage}
          alt="International Seminar"
          width={2500}
          height={2500}
          className="w-full md:w-auto rounded-full"
        />
        <div className="ml-0 md:ml-8 mt-4 md:mt-0 text-center md:text-left">
          <h2 className="font-bungee text-[16px] md:text-[20px] font-bold leading-normal tracking-[0.2px] text-black">
            SPECIAL EVENT
          </h2>
          <h1 className="font-bungee text-[32px] md:text-[48px] font-bold leading-normal tracking-[0.48px] text-purple-700">
            INTERNATIONAL SEMINAR
          </h1>
          <p className="mt-2 text-black text-sm md:text-base">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
          </p>
          <Button
            variant="secondary"
            size="lg"
            className="hover:bg-purple-800 mt-6 rounded-none bg-purple-700 px-6 md:px-10 py-4 md:py-6 text-lg md:text-xl font-semibold text-white"
          >
            See More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SpecialBanner;
