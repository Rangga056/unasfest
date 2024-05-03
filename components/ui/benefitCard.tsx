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
  competency: React.ReactNode;
  children?: React.ReactNode;
}

function BenefitCard({ title, competency, children }: benefitProps) {
  return (
    <section className="relative mt-20 w-full max-w-screen-xl m-auto bg-[#F3BB1C] lg:w-[90%] mb-12">
      <Card className="pb-2 text-center overflow-hidden">
        <CardTitle className="text-4xl tracking-wide font-semibold leading-normal lg:text-5xl ">
          {title}
          {competency}
        </CardTitle>
        <CardContent className="w-full h-full flex justify-around align-center p-20 text-xl">
            <div className="space-y-5 flex flex-col items-center">
              <Image src={certificate} alt="Certificate"/>
              <h1 className=""> E-CERTIFICATE</h1>
            </div>
            <div className="space-y-5 flex flex-col items-center">
              <Image src={money} alt="Money"/>
              <h1 className=""> MILIONS OF RUPIAH</h1>
            </div>
        </CardContent>
        <CardFooter className="hidden lg:h-2 lg:p-0 lg:w-3/5 lg:m-auto"></CardFooter>
      </Card>
      {children}
    </section>
  );
}

export default BenefitCard;
