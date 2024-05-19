import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Youna from "@/public/assets/images/mascots/youna.png";

const Hero = () => {
  return (
    <div className="mt-20 container mb-12">
      <div className="flex item-center justify-between">
        {/* Left Section */}
        <div className="flex flex-col gap-4 w-full flex-[6]">
          <h1 className="uppercase font-medium text-page-blue text-[53px] font-bungee">
            Towards an Energy Future: Sign Up Now for the Change competition{" "}
          </h1>
          <p className="text-xl font-medium">
            The National University Festival 2024 (UNAS FEST 2024) is one of the
            annual events held to commemorate and celebrate the 74th anniversary
            of Dies Natalis National University.
          </p>
          <Button
            size="lg"
            className="max-w-[180px] rounded-none p-6 px-8 text-lg font-semibold"
          >
            See More
          </Button>
        </div>
        {/* Right Section */}
        <div className="w-full flex items-center justify-center relative flex-[5]">
          {/* Hero Image */}
          <Image
            src={Youna}
            alt="Hero Image"
            width={520}
            height={640}
            className="object-contain rotate-6 absolute left-0 bottom-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
