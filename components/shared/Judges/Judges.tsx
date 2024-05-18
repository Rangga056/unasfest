"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { activitiesData } from "@/lib/types/Activities";

interface judgesProps {
    judgesData: activitiesData["judgesData"];
}

const MissionsSlider: React.FC<judgesProps> = ({ judgesData }) => {
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
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="overflow-hidden"
      >
        {judgesData.map((prop) => (
          <SwiperSlide key={prop.index} className="w-full h-full">
            <Card className="w-full bg-page-white text-page-black flex flex-col justify-between rounded-none flex-shrink-0 cursor-grab">
              <CardContent className="flex flex-col gap-y-4 text-left">
                <Image src={prop.image} alt={prop.name} width={400} height={400}/>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MissionsSlider;
