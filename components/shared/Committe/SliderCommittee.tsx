"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent } from "@/components/ui/card";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import { MoveRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";

type DPMItem = {
  id: number;
  name: string;
  role: string;
  image: StaticImageData;
};

type SliderCommitteeProps = {
  props: DPMItem[];
  maxWidth?: number;
  isDPM?: boolean;
  showPagination?: boolean;
  responsivePagination?: boolean;
};

const SliderCommittee: React.FC<SliderCommitteeProps> = ({
  props,
  maxWidth = 400,
  isDPM = true,
  showPagination = true,
  responsivePagination = false,
}) => {
  return (
    <div className="relative">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={20}
        pagination={{
          clickable: true,
          el: ".custom-pagination-commitee",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
        }}
        modules={[Pagination, Navigation]}
        className="overflow-hidden "
      >
        {props.map((member) => (
          <SwiperSlide
            key={member.id}
            className={`mx-auto md:max-w-[${maxWidth}px]`}
            style={{ maxWidth: `${maxWidth}px` }} // Set maxWidth dynamically
          >
            <div>
              <Card className="-mt-5 flex flex-shrink-0 flex-col justify-center rounded-none text-page-black">
                <CardContent className="relative flex flex-col text-left">
                  <div
                    className="relative -mb-5 flex aspect-[4/6] w-full items-end bg-cover bg-center"
                    style={{ backgroundImage: `url(${member.image.src})` }} // Using the image URL as background
                  >
                    {/* Shadow overlay */}
                    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0)]"></div>

                    {/* Overlay text for APM */}
                    {!isDPM && (
                      <div className="relative z-10 flex flex-col p-4 text-white">
                        <h1 className="font-inter text-lg">{member.name}</h1>
                        <p className="text-base font-normal">{member.role}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
                {/* Text container below the image for DPM */}
                {isDPM && (
                  <div className="-pt-10 flex flex-col px-6 text-start text-black">
                    <h1 className="font-inter text-xl">{member.name}</h1>
                    <p className="font-lg text-base">{member.role}</p>
                  </div>
                )}
              </Card>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Custom Pagination and Navigation Container */}
      {showPagination && (
        <div className={`absolute -bottom-14 left-0 z-10 flex h-14 items-center space-x-4 ${responsivePagination ? "hidden md:hidden" : ""}`}>
          <div className="custom-pagination-commitee" />
          <div className="swiper-button-next cursor-pointer bg-transparent p-2">
            <MoveRight />
          </div>
        </div>
      )}
    </div>
  );
};

export default SliderCommittee;
