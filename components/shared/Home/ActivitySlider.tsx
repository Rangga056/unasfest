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
  console.table(props);

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
        spaceBetween={10}
        pagination={{
          clickable: true,
          el: ".custom-pagination-home",
        }}
        navigation={{
          nextEl: ".swiper-button-next"
        }}
        modules={[Pagination, Navigation]}
        className="overflow-hidden"
      >
        {props.map((prop) => (
          <SwiperSlide key={prop.index} className="w-full h-fit">
            <Link href={prop.path}>
              <Card className=" p-0 w-full h-fit text-page-white flex flex-col justify-between rounded-none flex-shrink-0 cursor-pointer">
                <CardContent className="p-0 flex flex-col relative">
                  {/* <h1 className="font-bungee uppercase font-medium text-[27px]"> */}
                  {/*   {prop.name} */}
                  {/* </h1> */}
                  <Image
                    src={prop.image}
                    alt="activity poster"
                    width={380}
                    height={483}
                    className="object-contain w-full h-auto relative"
                  />
                </CardContent>
              </Card>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination and Navigation Container */}
      <div className="absolute -bottom-12 left-0 flex items-center space-x-4 z-10">
        <div className="custom-pagination-home" />

        <div className="swiper-button-next cursor-pointer p-2 bg-transparent ">
          <MoveRight size={40} className="text-page-black" />
        </div>
      </div>
    </div>
  );
};

export default ActivitySlider;