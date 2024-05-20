"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { activitiesData } from "@/lib/types/Activities";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";

interface judgesProps {
  judgesData: activitiesData["judgesData"];
  color: string;
}

const MissionsSlider: React.FC<judgesProps> = ({ judgesData, color }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

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
        {judgesData.map((prop, index) => (
          <SwiperSlide
            key={index}
            className="w-full h-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card className="w-full bg-page-white text-page-black flex flex-col justify-between rounded-none flex-shrink-0 cursor-grab">
              <CardContent className="flex flex-col gap-y-4 text-left relative">
                <Image
                  src={prop.image}
                  alt={prop.name}
                  width={400}
                  height={400}
                />
                <div className="space-y-0 font-inter">
                  <h1 className="text-lg font-bold">{prop.name}</h1>
                  <h2 className="text-base">{prop.lastEducation}</h2>
                </div>
                {hoveredIndex === index && (
                  <div className="absolute w-[70%] top-28 left-1/2 -translate-x-1/2 bg-black text-white p-5">
                    <p className="pb-10 font-semibold">{prop.description}</p>
                    <Dialog.Root>
                      <Dialog.Trigger className="underline cursor-pointer">
                        Read More ...
                      </Dialog.Trigger>
                      <Dialog.Portal>
                        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 " />
                        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] shadow-lg focus:outline-none z-10">
                          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] flex">
                            <div
                              className="w-1/2 p-5"
                              style={{ backgroundColor: color }}
                            >
                              <Image
                                src={prop.image}
                                alt={prop.name}
                                width={400}
                                height={400}
                              />
                            </div>
                            <div className="w-1/2 p-10 bg-white">
                              <CardTitle className="text-3xl font-bold mb-5">
                                {prop.name}
                              </CardTitle>
                              <p className="mb-5">{prop.description}</p>
                              <h1>Achiepment</h1>
                              <ul className="list-disc list-inside">
                                {prop.achievements.map((achievement, i) => (
                                  <li key={i}>{achievement}</li>
                                ))}
                              </ul>
                            </div>
                          </Dialog.Description>
                        </Dialog.Content>
                      </Dialog.Portal>
                    </Dialog.Root>
                  </div>
                )}
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MissionsSlider;
