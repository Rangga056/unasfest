"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { FinalisSMC } from "@/constants/FinalisSMC";

const FinalisPosters = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
      {FinalisSMC.map((item) => (
        <div
          key={item.index}
          className="mb-6 h-full max-w-[248px] md:max-w-[440px]"
        >
          <Card className="flex h-full w-full flex-shrink-0 flex-col rounded-none text-page-black">
            <CardContent className="flex flex-col px-0 text-left text-xl">
              <Image
                src={item.poster.src}
                alt={item.title}
                width={440}
                height={576}
                className="object-contain"
              />
              <div className="mt-4 flex flex-col items-center">
                <h3 className="font-semibold">{item.title}</h3>
                <p className="capitalize">{item.team}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      ))}
      <div className="absolute -bottom-14 left-7 z-10 mb-5 flex h-32 items-center space-x-4 pt-10">
        <div className="custom-pagination-judges" />
        <div className="swiper-button-next-judges cursor-pointer bg-transparent p-2">
          <MoveRight size={30} className="text-page-black" />
        </div>
      </div>
    </div>
  );
};

export default FinalisPosters;
