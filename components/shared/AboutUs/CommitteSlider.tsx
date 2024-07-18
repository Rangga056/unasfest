"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

type Prop = {
  index: number | undefined;
  img: any;
  name: string;
  position: string;
};

type Props = Prop[];

type PropsTypes = {
  props: Props;
};

const CommitteeSlider: React.FC<PropsTypes> = ({ props }) => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        className="overflow-hidden"
      >
        {props.map((item) => (
          <SwiperSlide
            key={item.index}
            className="h-full max-w-[248px] md:max-w-[440px]"
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
      </Swiper>
    </div>
  );
};

export default CommitteeSlider;
