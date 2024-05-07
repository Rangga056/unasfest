"use client";
import certificate from "@/public/img/home/certificate.png"
import money from "@/public/img/home/money.png"
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
            <div className="space-y-5 flex flex-col items-center justify-between">
              <Image src={certificate} alt="Certificate" className="w-10 lg:w-20"/>
              <h1 className="text-xs md:text-2xl"> E-CERTIFICATE</h1>
            </div>
            <div className="space-y-5 flex flex-col items-center justify-between">
              <Image src={money} alt="Money" className="w-12 lg:w-24"/>
              <h1 className="text-xs md:text-2xl"> MILIONS OF RUPIAH</h1>
            </div>
        </CardContent>
        <CardFooter className="hidden lg:h-2 lg:p-0 lg:w-3/5 lg:m-auto"></CardFooter>
      </Card>
      {children}
    </section>
  );
}

export default BenefitCard;
