"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { missions } from "@/constants/About";
import "swiper/css";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import Pagination from "@/components/shared/pagination/pagination";

const MissionsSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <>
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 3 },
        }}
        slidesPerView={3}
        spaceBetween={30}
        navigation
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="overflow-hidden ml-12"
      >
        {missions.map((mission) => (
          <SwiperSlide key={mission.index} className="w-full h-full">
            <Card className="w-full h-full bg-page-white text-page-black flex flex-col justify-between rounded-none flex-shrink-0 cursor-grab">
              <CardContent className="flex flex-col gap-y-4">
                <h1 className="text-5xl font-bungee font-semibold">
                  0{mission.index}
                </h1>
                <p className="text-xl font-medium">
                  Students who register themselves on the registration link that
                  has been listed on the UNAS FEST 2023 website.
                </p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <Pagination
        activeIndex={activeIndex}
        totalSlides={missions.length}
        onSlideChange={handleSlideChange}
      />
    </>
  );
};

export default MissionsSlider;
