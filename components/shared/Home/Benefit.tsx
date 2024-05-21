import certificate from "@/public/assets/images/home/certificate.png";
import money from "@/public/assets/images/home/money.png";
import merch from "@/public/assets/icons/benefit/merch.png";
import trophy from "@/public/assets/icons/benefit/trophy.png";
import plaque from "@/public/assets/icons/benefit/plaque.png";

import React from "react";
import Image from "next/image";

const Benefit = () => {
  return (
    <div className="max-w-[1560px] mx-auto bg-page-yellow mt-20">
      <div className="container p-20 flex flex-row flex-wrap md:flex-col items-center justify-center gap-y-16">
        <h1 className="uppercase font-bungee font-medium text-5xl text-page-black text-center leading-tight">
          benefits of the unas fest 2024 <br /> competency
        </h1>
        <div className="w-full flex flex-col items-center justify-center gap-y-10 text-xl">
          {/* top section */}
          <div className="w-full gap-y-10 flex flex-wrap flex-row items-center justify-evenly text-center">
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={certificate}
                alt="certificate icon"
                className="object-contain w-16 md:w-24 aspect-square"
              />
              <p className="w-24 md:w-36">certificate & E-Certificate</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={money}
                alt="money icon"
                className="object-contain w-16 md:w-24 aspect-square"
              />
              <p className="w-24 md:w-36">Millions of Rupiah</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={trophy}
                alt="trophy icon"
                className="object-contain w-16 md:w-24 aspect-square"
              />
              <p className="w-24 md:36">Trophy</p>
            </div>
          </div>
          {/* bottom section */}
          <div className="w-full gap-y-10 flex flex-wrap flex-row items-center justify-evenly text-center">
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={plaque}
                alt="plaque icon"
                className="object-contain w-16 md:w-24 aspect-square"
              />
              <p className="w-24 md:w-36">Plaque</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={merch}
                alt="merch icon"
                className="object-contain w-16 md:w-24 aspect-square"
              />
              <p className="w-24 md:w-36">Merch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefit;
