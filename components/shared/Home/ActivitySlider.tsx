"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Prop = {
  index: number;
  image: string;
  name: string;
  path: string;
};

type Props = Prop[];

type PropsTypes = {
  props: Props;
};

const ActivitySlider: React.FC<PropsTypes> = ({ props }) => {
  return (
    <div className="relative">
      <Swiper

        slidesPerView={"auto"}
        spaceBetween={30}
        pagination={{
          clickable: true,
          el: ".custom-pagination-home",
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
            className="h-auto w-full max-w-[249px] md:max-w-[320px]"
          >
            <Link href={prop.path} className="">
              <Card className=" flex h-full w-fit flex-shrink-0 cursor-pointer flex-col justify-between rounded-none p-0 text-page-white active:cursor-grabbing">
                <CardContent className="relative flex flex-col p-0">
                  {/* <h1 className="font-bungee uppercase font-medium text-[27px]"> */}
                  {/*   {prop.name} */}
                  {/* </h1> */}
                  <Image
                    src={prop.image}
                    alt="activity poster"
                    width={366}
                    height={483}
                    className="relative h-auto w-[249px] object-contain md:w-[320px] lg:w-[366px]"
                  />
                </CardContent>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination and Navigation Container */}
      <div className="absolute -bottom-16 left-0 z-10 flex items-center space-x-4 lg:hidden">
        <div className="custom-pagination-home" />
        <div className="swiper-button-next cursor-pointer bg-transparent p-2 ">
          <MoveRight size={40} className="text-page-black" />
        </div>
      </div>
    </div>
  );
};

export default ActivitySlider;

