"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import { MoveRight } from "lucide-react";

type Prop = {
  index: number | undefined;
  detail: string | undefined;
};

type Props = Prop[];

type PropsTypes = {
  props: Props;
};

const MissionsSlider: React.FC<PropsTypes> = ({ props }) => {
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
        modules={[Pagination, Navigation]}
        className="overflow-hidden"
      >
        {props.map((prop) => (
          <SwiperSlide key={prop.index} className="h-full w-full">
            <Card className="flex h-[279px] w-full flex-shrink-0 cursor-grab flex-col justify-between rounded-none bg-page-white text-page-black">
              <CardContent className="flex flex-col gap-y-4 text-left">
                <h1 className="font-bungee text-5xl font-semibold">
                  0{prop.index}
                </h1>
              </CardContent>
              <CardContent>
                <p className="text-start text-xl font-medium">{prop.detail}</p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination and Navigation Container */}
      <div className="absolute -bottom-10 left-0 z-10 flex items-center space-x-4">
        <div className="custom-pagination" />
        <div className="swiper-button-next cursor-pointer bg-transparent p-2 ">
          <MoveRight />
        </div>
      </div>
    </div>
  );
};

export default MissionsSlider;
