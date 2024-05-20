"use client";
import certificate from "@/public/assets/images/home/certificate.png";
import money from "@/public/assets/images/home/money.png";
import merch from "@/public/assets/icons/benefit/merch.png";
import trophy from "@/public/assets/icons/benefit/trophy.png";
import plaque from "@/public/assets/icons/benefit/plaque.png";

import Image from "next/image";

import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

import React from "react";

export interface benefitProps {
  title: string;
  children?: React.ReactNode;
}

function BenefitCard({ title, children }: benefitProps) {
  return (
    <section className="relative mt-20 max-w-screen-xl m-auto bg-[#F3BB1C] mb-12 ">
      <Card className="flex flex-col justify-center items-center pb-2 text-center overflow-hidden flex-grow">
        <CardTitle className="text-xl font-thin tracking-wide leading-normal md:text-5xl md:w-[80%]">
          {title}
        </CardTitle>
        <CardContent className="w-full h-full flex justify-around py-10 align-center text-xl md:p-20">
          <div className="grid grid-cols-3 gap-20">
            <div className="space-y-5 flex flex-col items-center justify-between">
              <Image
                src={certificate}
                alt="Certificate"
                className="w-10 lg:w-[71px]"
              />
              <h1 className="text-xs md:text-2xl text-center">
                Certificate &<br />
                E-Certificate
              </h1>
            </div>
            <div className="space-y-5 flex flex-col items-center justify-center">
              <Image src={money} alt="Money" className="w-12 lg:w-[95px]" />
              <h1 className="text-xs md:text-2xl text-center">
                Millions of Rupiah
              </h1>
            </div>
            <div className="space-y-5 flex flex-col items-center justify-center">
              <Image src={trophy} alt="Trophy" className="w-12 lg:w-[80px]" />
              <h1 className="text-xs md:text-2xl text-center">Trophy</h1>
            </div>
            <div className="flex justify-evenly items-center w-full col-span-3">
              <div className="space-y-5 flex flex-col items-center justify-center">
                <Image src={plaque} alt="Plaque" className="w-12 lg:w-[41]" />
                <h1 className="text-xs md:text-2xl text-center">Plaque</h1>
              </div>
              <div className="space-y-5 flex flex-col items-center justify-center">
                <Image src={merch} alt="Merch" className="w-12 lg:w-[77px]" />
                <h1 className="text-xs md:text-2xl text-center">Merch</h1>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="hidden lg:h-2 lg:p-0 lg:w-3/5 lg:m-auto"></CardFooter>
      </Card>
      {children}
    </section>
  );
}

export default BenefitCard;
