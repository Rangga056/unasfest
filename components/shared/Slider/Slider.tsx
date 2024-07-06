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
        // breakpoints={{
        //   0: { slidesPerView: 1 },
        //   768: { slidesPerView: 2 },
        //   1024: { slidesPerView: 3 },
        //   1440: { slidesPerView: 3 },
        // }}
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
        }}
        modules={[Pagination, Navigation]}
        className="overflow-hidden"
      >
        {props.map((prop) => (
          <SwiperSlide
            key={prop.index}
            className="max-w-[285px] md:max-w-[380px]"
          >
            <Card className="flex h-[279px] w-[285px] flex-shrink-0 cursor-grab flex-col justify-start gap-y-1 rounded-none bg-page-white py-5 text-page-black active:cursor-grabbing md:w-[380px] md:gap-y-6">
              <CardContent className="flex flex-col gap-y-4 text-left">
                <h1 className="font-bungee text-5xl font-semibold">
                  0{prop.index}
                </h1>
              </CardContent>
              <CardContent>
                <p className="text-start text-xl font-medium line-clamp-4">{prop.detail}</p>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination and Navigation Container */}
      <div className="absolute -bottom-14 left-0 z-10 h-14 flex items-center space-x-4">
        <div className="custom-pagination" />
        <div className="swiper-button-next cursor-pointer bg-transparent p-2">
          <MoveRight />
        </div>
      </div>
    </div>
  );
};

export default MissionsSlider;
