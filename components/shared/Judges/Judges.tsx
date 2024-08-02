import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { activitiesData } from "@/lib/types/Activities";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerPortal,
  DrawerOverlay,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordiion";
import { useState } from "react";
import linkedin from "@/public/assets/icons/LinkedIn-icon-white.svg";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface judgesProps {
  judgesData: activitiesData["judgesData"];
}

const Judges: React.FC<judgesProps> = ({ judgesData }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const swiperConfig = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
    1440: { slidesPerView: 3 },
  };

  return (
    <div className="relative">
      <Swiper
        breakpoints={swiperConfig}
        slidesPerView={"auto"}
        spaceBetween={10}
        pagination={{
          clickable: true,
          el: ".custom-pagination-faq",
        }}
        navigation={{
          nextEl: ".swiper-button-next-faq",
        }}
        modules={[Pagination, Navigation]}
        className="overflow-hidden pb-5"
      >
        {judgesData.map((prop, index) => (
          <SwiperSlide
            key={index}
            className="h-full w-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card>
              <CardContent className="relative flex flex-col items-center gap-y-4 text-left grayscale hover:filter-none md:filter">
                <div>
                  <Image
                    src={prop.image}
                    alt={prop.name}
                    className="h-[430px] w-full object-cover md:h-[500px] md:w-[400px] lg:px-4"
                  />
                  <div className="pb-6 font-inter lg:px-4">
                    <h1 className="text-lg font-bold">{prop.name}</h1>
                    <h2 className="w-full text-base">{prop.lastEducation}</h2>
                  </div>
                </div>
                {hoveredIndex === index && (
                  <div
                    className={`absolute top-36 mx-2 w-72 bg-black p-5 text-white md:left-12 md:top-44 md:w-[70%]`}
                  >
                    <div className="h-[200px] md:h-[250px]">
                      <p className="font-semi bold mb-10 line-clamp-9 text-sm md:text-base">
                        {prop.description}
                      </p>
                    </div>
                    <Drawer>
                      <DrawerTrigger className="cursor-pointer underline">
                        Read More ...
                      </DrawerTrigger>
                      <DrawerPortal>
                        <DrawerOverlay />
                        <DrawerContent>
                          <div className="overflow-y-auto">
                            <div className="relative flex flex-wrap justify-center gap-5 md:flex-nowrap">
                              <Image
                                src={prop.image}
                                alt={prop.name}
                                className="h-[250px] w-[200px] object-cover md:ml-12 md:h-[400px] md:w-[300px] lg:h-[500px] lg:w-[400px]"
                              />
                              <div className="z-10 my-auto text-center sm:text-black md:ml-20 md:space-y-4 md:p-4 md:text-start md:text-white ">
                                <h1 className="font-semibold sm:text-lg md:w-[500px] md:text-5xl">
                                  {prop.name}
                                </h1>
                                <p className="w-96 font-medium md:text-lg">
                                  {prop.lastEducation}
                                </p>
                              </div>
                              <div className="absolute -z-10 h-72 w-full transform self-center bg-[#1F1E23] sm:hidden md:inline-block" />
                            </div>
                            <div className="relative z-50 mx-auto sm:w-[90%] sm:pt-10 md:w-[80%] md:pt-20">
                              <div className="flex flex-wrap">
                                <h1 className="w-full text-center text-2xl font-semibold uppercase md:w-1/2 md:text-start">
                                  summary
                                </h1>
                                <p className="w-full sm:mt-5 md:w-1/2 md:text-lg">
                                  {prop.description}
                                </p>
                              </div>
                              <div className="flex flex-wrap pt-14">
                                <h1 className="w-full text-2xl font-semibold uppercase sm:text-center md:w-1/2 md:text-start">
                                  Education
                                </h1>
                                <p className="w-full font-bold sm:mt-5 md:w-1/2 md:text-lg">
                                  {prop.lastEducation}
                                </p>
                              </div>
                              <div className="flex flex-wrap pt-14">
                                <h1 className="w-full text-2xl font-semibold uppercase sm:text-center md:w-1/2 md:text-start">
                                  honors-award
                                </h1>
                                <ul className="mt-5 w-full list-inside list-disc md:w-1/2">
                                  {prop.achievements &&
                                    prop.achievements.map((achievement, i) => (
                                      <li
                                        className="sm:mb-2 md:mb-5 md:text-lg"
                                        key={i}
                                      >
                                        {achievement}
                                      </li>
                                    ))}
                                </ul>
                              </div>
                              <div className="flex flex-wrap pt-14">
                                <h1 className="w-full text-2xl font-semibold uppercase sm:text-center md:w-1/2 md:text-start">
                                  Experience
                                </h1>
                                <div className="w-full sm:mt-5 md:w-1/2">
                                  <Accordion
                                    defaultValue="item-0"
                                    type="single"
                                    collapsible
                                  >
                                    {prop.experience.map((exp, i) => (
                                      <AccordionItem
                                        key={i}
                                        value={`item-${i}`}
                                        className="md:mt-0"
                                      >
                                        <AccordionTrigger className="w-full cursor-pointer text-start font-inter text-xl font-semibold sm:py-10 sm:text-lg md:pb-8">
                                          {exp.eTitle}
                                        </AccordionTrigger>
                                        <AccordionContent className="text-start text-xl font-semibold opacity-70 sm:text-lg">
                                          <p className="md:text-xl">
                                            {exp.eTime}
                                          </p>
                                          <p className="pb-6 md:text-xl">
                                            {exp.place}
                                          </p>
                                          {exp.eDesc?.dDetail && (
                                            <p>{exp.eDesc.dDetail}</p>
                                          )}
                                          {exp.eDesc?.dPoint && (
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
                                  {prop.linkedin && (
                                    <Link href={prop.linkedin} target="_blank">
                                      <div className="my-10 flex w-[80%] cursor-pointer items-center justify-center bg-[#1F1E23] py-1 hover:opacity-90">
                                        <Image
                                          src={linkedin}
                                          alt="linkedin"
                                          width={40}
                                        />
                                        <p className="pl-5 text-white">
                                          {prop.name}
                                        </p>
                                      </div>
                                    </Link>
                                  )}
                                </div>
                              </div>
                            </div>
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
        <div className="absolute -bottom-10 left-7 z-10 mb-5 flex h-28 items-center space-x-4 pt-10 lg:hidden">
          <div className="custom-pagination-faq" />
          <div className="swiper-button-next-faq cursor-pointer bg-transparent p-2">
            <MoveRight size={30} className="text-page-black" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default Judges;
