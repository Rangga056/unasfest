import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import mascotgroup from "@/public/assets/images/mascots/mascotgroup.png";

const Hero = () => {
  return (
    <div className="container mt-8 flex flex-col items-center justify-between gap-y-3 lg:flex-row">
      {/* right section */}
      <div className="flex h-full w-full items-center justify-center md:w-3/5 lg:order-2 lg:w-2/5">
        <Image
          src={mascotgroup}
          alt="mascot group"
          width={392}
          height={309}
          className="h-auto w-full object-contain"
        />
      </div>
      {/* left section */}
      <div className="order-2 flex h-full w-full flex-col items-start lg:order-1 lg:w-3/5">
        <h1 className="w-full whitespace-break-spaces font-bungee text-[39px] font-medium uppercase leading-tight text-page-blue md:text-[53px] lg:w-4/5">
          Sign Up Now for the Change competition
        </h1>
        <p className="mt-4 w-full text-xl font-semibold md:w-[90%]">
          The National University Festival 2024 (UNAS FEST 2024) is one of the
          annual events held to commemorate and celebrate the 74th anniversary
          of Dies Natalis National University.{" "}
        </p>
        <Button className="mt-4 h-[50px] w-[150px] rounded-none text-xl font-semibold capitalize md:h-[60px] md:w-[200px]">
          see more
        </Button>
      </div>
    </div>
  );
};

export default Hero;