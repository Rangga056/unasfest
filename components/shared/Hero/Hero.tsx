import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Youna from "@/public/assets/images/mascots/youna.png";

const Hero = () => {
  return (
    <div className="container mt-8 flex flex-col lg:flex-row items-center justify-between gap-y-3">
      {/* right section */}
      <div className="w-full lg:w-2/5 md:w-3/5 h-full flex items-center justify-center order-1 lg:order-2">
        <Image
          src={Youna}
          alt="mascot youna"
          width={392}
          height={482}
          className="w-3/4 md:w-full h-auto object-center rotate-6"
        />
      </div>
      {/* left section */}
      <div className="w-full lg:w-3/5 h-full flex flex-col items-start order-2 lg:order-1">
        <h1 className="uppercase font-bungee font-medium text-page-blue w-full lg:w-4/5 text-4xl md:text-[53px] leading-tight">
          towards an energy future: sign up now for the change competition
        </h1>
        <p className="font-semibold text-xl mt-4 w-full md:w-[90%]">
          The National University Festival 2024 (UNAS FEST 2024) is one of the
          annual events held to commemorate and celebrate the 74th anniversary
          of Dies Natalis National University.{" "}
        </p>
        <Button className="capitalize font-semibold text-xl mt-4 rounded-none w-[150px] h-[50px] md:w-[200px] md:h-[60px]">
          see more
        </Button>
      </div>
    </div>
  );
};

export default Hero;

