"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { activitiesData } from "@/lib/types/Activities";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerPortal,
  DrawerOverlay,
  DrawerClose,
} from "@/components/ui/drawer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordiion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface judgesProps {
  judgesData: activitiesData["judgesData"];
  color: string;
}

const MissionsSlider: React.FC<judgesProps> = ({ judgesData, color }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

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
            className="h-full w-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card className="flex w-full flex-shrink-0 cursor-grab flex-col justify-between rounded-none bg-page-white text-page-black">
              <CardContent className="relative flex flex-col gap-y-4 text-left grayscale hover:filter-none md:filter">
                <Image
                  src={prop.image}
                  alt={prop.name}
                  className="h-[500px] w-[400px] object-cover"
                />
                <div className="space-y-0 font-inter">
                  <h1 className="text-lg font-bold">{prop.name}</h1>
                  <h2 className="text-base">{prop.lastEducation}</h2>
                </div>
                {hoveredIndex === index && (
                  <div className="buttom-0 absolute left-1/2 top-28 w-[70%] -translate-x-1/2 bg-black p-5 text-white">
                    <div className="sm:h-[200px] md:h-[250px]">
                      <p className="font-semi bold mb-10 line-clamp-9 sm:text-sm md:text-base">
                        {prop.description}
                      </p>
                    </div>
                    <div></div>
                    <Drawer>
                      <DrawerTrigger className="cursor-pointer underline">
                        Read More ...
                      </DrawerTrigger>
                      <DrawerPortal>
                        <DrawerOverlay />
                        <DrawerContent>
                          <DrawerClose asChild className="mx-auto cursor-pointer">
                            <ChevronDown
                              className="ease-[cubic-bezier(0.87,_0,_0.13,_1)] flex-shrink-0 transition-transform duration-300 hover:scale-150 hover:rotate-0 rotate-180 scale-125"
                              aria-hidden
                            />
                          </DrawerClose>
                          <div className="relative flex gap-5">
                            <Image
                              src={prop.image}
                              alt={prop.name}
                              className="ml-36 h-[500px] w-[400px] object-cover"
                            />
                            <div className="z-10 my-auto ml-28 space-y-4 p-4 text-white">
                              <h1 className="w-[500px] font-semibold sm:text-lg md:text-5xl">
                                {prop.name}
                              </h1>
                              <p className="font-medium md:text-lg">
                                {prop.lastEducation}
                              </p>
                            </div>
                            <div className="absolute bottom-0 -z-10 h-72 w-full -translate-y-1/3 transform self-center bg-[#1F1E23]" />
                          </div>

                          <div className="relative z-50 mx-auto w-[80%] pt-20">
                            <div className="flex sm:flex-wrap md:flex-nowrap">
                              <h1 className="w-1/2 text-2xl font-semibold uppercase">
                                summary
                              </h1>
                              <p className="w-1/2 md:text-lg">
                                {prop.description}
                              </p>
                            </div>
                            <div className="flex pt-14 sm:flex-wrap md:flex-nowrap">
                              <h1 className="w-1/2 text-2xl font-semibold uppercase">
                                Education
                              </h1>
                              <p className="w-1/2 font-bold md:text-lg">
                                {prop.lastEducation}
                              </p>
                            </div>

                            <div className="flex pt-14 sm:flex-wrap md:flex-nowrap">
                              <h1 className="w-1/2 text-2xl font-semibold uppercase">
                                honors-awards
                              </h1>
                              <ul className="w-1/2 list-inside list-disc">
                                {prop.achievements.map((achievement, i) => (
                                  <li
                                    className="mb-5 sm:text-xs md:text-lg"
                                    key={i}
                                  >
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {prop.experience && prop.experience.length > 0 && (
                              <div className="flex pt-14 sm:flex-wrap md:flex-nowrap">
                                <h1 className="w-1/2 text-2xl font-semibold uppercase">
                                  Experience
                                </h1>
                                <div className="w-1/2">
                                  <Accordion
                                    defaultValue="item-0"
                                    type="single"
                                    collapsible
                                  >
                                    {prop.experience.map((exp, i) => (
                                      <AccordionItem
                                        key={i}
                                        value={`item-${i}`}
                                      >
                                        <AccordionTrigger className="w-full cursor-pointer text-start font-inter text-xl font-semibold sm:pb-3 sm:text-lg">
                                          {exp.eTitle}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-start text-xl font-semibold opacity-70 sm:text-lg">
                                          <p className="md:text-xl">
                                            {exp.eTime}
                                          </p>
                                          <p className="pb-6 md:text-xl">
                                            {exp.place}
                                          </p>
                                          <p>{exp.eDesc.dDetail}</p>
                                          {exp.eDesc.dPoint && (
                                            <ul className="list-inside list-disc">
                                              {exp.eDesc.dPoint.map(
                                                (point, j) => (
                                                  <li key={j}>{point}</li>
                                                ),
                                              )}
                                            </ul>
                                          )}
                                        </AccordionContent>
                                      </AccordionItem>
                                    ))}
                                  </Accordion>
                                </div>
                              </div>
                            )}
                          </div>
                        </DrawerContent>
                      </DrawerPortal>
                    </Drawer>
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
