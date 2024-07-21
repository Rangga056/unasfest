"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import { MoveRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTrigger,
} from "@radix-ui/react-dialog";

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
            <Dialog>
              <DialogTrigger>
                <div className="relative">
                <Card className="flex h-[279px] w-[285px] flex-shrink-0 flex-col justify-start gap-y-1 rounded-none bg-page-white py-5 text-page-black active:cursor-grabbing md:w-[380px] md:gap-y-6">
                  <CardContent className="flex flex-col gap-y-4 text-left">
                    <h1 className="font-bungee text-5xl font-semibold">
                      0{prop.index}
                    </h1>
                  </CardContent>
                  <CardContent>
                    <p className="line-clamp-4 text-start text-xl font-medium">
                      {prop.detail}
                    </p>
                  </CardContent>
                </Card>
                </div>
                <DialogContent>
                  <DialogDescription className="flex items-center p-6 absolute text-start text-base font-medium inset-0 bg-page-white text-black">
                    {prop.detail}
                  </DialogDescription>
                </DialogContent>
              </DialogTrigger>
            </Dialog>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination and Navigation Container */}
      <div className="absolute -bottom-14 left-0 z-10 flex h-14 items-center space-x-4">
        <div className="custom-pagination" />
        <div className="swiper-button-next cursor-pointer bg-transparent p-2">
          <MoveRight />
        </div>
      </div>
    </div>
  );
};

export default MissionsSlider;
