import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Youna from "@/public/assets/images/mascots/youna.png";

const Hero = () => {
  return (
    <div className="mt-20 container mb-12">
      <div className="flex item-center">
        {/* Left Section */}
        <div className="flex flex-col w-full">
          <h1 className="uppercase font-[800] text-5xl tracking-wide leading-[62px] font-bungee text-page-blur">
            together with the pioneers of change towards maritime Indonesia
          </h1>
          <p className="leading-6">
            National University Festival 2023 (UNAS FEST 2023) is one of the
            annual activities held to enliven as well as celebrating the 74th
            Anniversary of National University
          </p>
          <Button
            size="lg"
            className="max-w-[180px] rounded-none p-6 px-8 text-lg font-semibold"
          >
            See More
          </Button>
        </div>
        {/* Right Section */}
        <div className="w-full">
          {/* Hero Image */}
          <Image
            src={Youna}
            alt="Hero Image"
            width={390}
            height={480}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
