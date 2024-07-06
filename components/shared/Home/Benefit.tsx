import certificate from "@/public/assets/images/home/certificate.png";
import money from "@/public/assets/images/home/money.png";
import merch from "@/public/assets/icons/benefit/merch.png";
import trophy from "@/public/assets/icons/benefit/trophy.png";
import plaque from "@/public/assets/icons/benefit/plaque.png";

import React from "react";
import Image from "next/image";

const Benefit = () => {
  return (
    <div className="mx-auto mt-20 w-full bg-page-yellow p-4">
      <div className="container flex flex-col items-center justify-center gap-y-16 p-4 md:p-20">
        <h1 className="text-center font-bungee text-3xl font-medium uppercase leading-tight text-page-black md:text-5xl">
          benefits of the unas fest 2024 <br /> competency
        </h1>
        <div className="flex w-full flex-col items-center justify-center gap-y-10 text-xl">
          {/* top section */}
          <div className="flex w-full flex-col flex-wrap items-center justify-evenly gap-y-10 text-center md:flex-row">
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={certificate}
                alt="certificate icon"
                className="aspect-square w-16 object-contain md:w-24"
              />
              <p className="w-32 md:w-36 text-center">Certificate & <br /> E-Certificate</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={money}
                alt="money icon"
                className="aspect-square w-16 object-contain md:w-24"
              />
              <p className="w-24 md:w-36">Millions of Rupiah</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={trophy}
                alt="trophy icon"
                className="aspect-square w-16 object-contain md:w-24"
              />
              <p className="w-24 md:w-36">Trophy</p>
            </div>
          </div>
          {/* bottom section */}
          <div className="flex w-full flex-col flex-wrap items-center justify-evenly gap-y-10 text-center md:flex-row">
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={plaque}
                alt="plaque icon"
                className="aspect-square w-16 object-contain md:w-24"
              />
              <p className="w-24 md:w-36">Plaque</p>
            </div>
            <div className="flex flex-col items-center justify-center gap-y-2">
              <Image
                src={merch}
                alt="merch icon"
                className="aspect-square w-16 object-contain md:w-24"
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
