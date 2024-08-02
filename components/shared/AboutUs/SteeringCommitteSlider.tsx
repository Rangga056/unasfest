"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent } from "@/components/ui/card";
import { steeringCommittees } from "@/constants/About";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Navigation, Pagination } from "swiper/modules";

const SteeringCommitteeSlider = () => {
  return (
    <div className="relative">
      <Swiper
        // breakpoints={{
        //   0: { slidesPerView: 1 },
        //   768: { slidesPerView: 2 },
        //   1024: { slidesPerView: 3 },
        //   1440: { slidesPerView: 3 },
        // }}
        slidesPerView={"auto"}
        spaceBetween={20}
        className="overflow-hidden"

        navigation={{
          nextEl: ".swiper-button-next-judges",
        }}

        pagination={{
          clickable: true,
          el: ".custom-pagination-judges",
        }}
        modules={[Pagination, Navigation]}
      >
        {steeringCommittees.map((item) => (
          <SwiperSlide
            key={item.index}
            className="h-full max-w-[248px] md:max-w-[440px] mb-6"
          >
            <Card className="flex h-full w-full flex-shrink-0 cursor-grab flex-col rounded-none text-page-black">
              <CardContent className="flex flex-col px-0 text-left text-xl">
                <Image
                  src={item.img.src}
                  alt={item.name}
                  width={440}
                  height={576}
                  className="object-contain grayscale transition-colors delay-300 hover:grayscale-0 focus:grayscale-0"
                />
                <div className="mt-4 flex flex-col items-start">
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="capitalize">{item.position}</p>
                </div>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
         <div className="absolute -bottom-14 left-7 z-10 mb-5 flex h-32 items-center space-x-4 pt-10">
          <div className="custom-pagination-judges" />
          <div className="swiper-button-next-judges cursor-pointer bg-transparent p-2">
            <MoveRight size={30} className="text-page-black" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default SteeringCommitteeSlider;
