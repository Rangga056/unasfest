import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <Card className="relative mt-20 w-full max-w-screen-xl m-auto mb-12">
    <div className="md:flex item-center md:px-[100px] py-8">
      {/* Left Section */}
      <div className="flex flex-col w-1/2 gap-[1em]">
        <h1 className="uppercase font-[800] text-5xl tracking-wide leading-[62px] font-bungee">
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
      <div className="w-1/2">
        {/* Hero Image */}
        <Image
          src={""}
          alt="Hero Image"
          className="w-full h-full object-contain"
        />
      </div>
    </div>
    </Card>
  );
};

export default Hero;
