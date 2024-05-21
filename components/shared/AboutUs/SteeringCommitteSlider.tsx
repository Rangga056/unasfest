"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent } from "@/components/ui/card";
import { steeringCommittees } from "@/constants/About";
import Image from "next/image";

const SteeringCommitteeSlider = () => {
  return (
    <div className="relative">
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 3 },
        }}
        slidesPerView={"auto"}
        spaceBetween={0}
        className="overflow-hidden"
      >
        {steeringCommittees.map((item) => (
          <SwiperSlide key={item.index} className="h-full w-full">
            <Card className="flex h-full w-full flex-shrink-0 cursor-grab flex-col rounded-none text-page-black">
              <CardContent className="flex flex-col text-left text-xl">
                <Image
                  src={item.img.src}
                  alt={item.name}
                  width={440}
                  height={576}
                  className="object-contain grayscale hover:grayscale-0 focus:grayscale-0 transition-colors delay-300"
                />
                <div className="mt-4 flex flex-col items-start">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="capitalize">{item.position}</p>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SteeringCommitteeSlider;
