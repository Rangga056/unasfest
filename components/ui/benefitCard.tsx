"use client";
import {Banknote, Newspaper} from "lucide-react";

import {
    Card,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
  } from "@/components/ui/card";
  
  import React from "react";

  export interface benefitProps{
    title: string;
    title2: string;
    children?: React.ReactNode;
  }
  
  function BenefitCard({ title, title2, children }: benefitProps) {
    return (
      <section className="relative mt-20 w-full max-w-screen-xl m-auto lg:w-[90%] mb-12">
        <Card className="pb-2 text-center overflow-hidden">
          <CardTitle className="text-4xl tracking-wide font-semibold leading-normal lg:text-5xl">
            {title}
          </CardTitle>
          <CardDescription className="text-4xl tracking-wide font-semibold leading-normal lg:text-5xl">
            {title2}
          </CardDescription>
          <CardContent className="w-full h-full">
            <div className="flex justify-between align-center p-20">
              <div className="">
              <Banknote size={84}/>
              h1
              </div>
              <Newspaper size={84}/>
            </div>
          </CardContent>
          <CardFooter className="hidden lg:h-2 lg:p-0 lg:w-3/5 lg:m-auto"></CardFooter>
        </Card>
        {children}
      </section>
    );
  }
  
  export default BenefitCard;
  