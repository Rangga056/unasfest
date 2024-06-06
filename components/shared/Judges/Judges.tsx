import { Swiper, SwiperSlide } from "swiper/react";
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
  DrawerClose,
} from "@/components/ui/drawer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordiion";
import { useState } from "react";
import linkedin from "@/public/assets/icons/LinkedIn-icon-white.svg";

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

  const swiperConfig = {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: judgesData.length === 2 ? 2 : 3 },
    1440: { slidesPerView: judgesData.length === 2 ? 2 : 3 },
  };

  return (
    <div className="">
      <div
        className={`relative ${judgesData.length === 2 ? "w-full" : "w-full"}`}
      >
        <Swiper
          breakpoints={swiperConfig}
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
          className="mx-auto overflow-hidden"
        >
          {judgesData.map((prop, index) => (
            <SwiperSlide
              key={index}
              className="h-full w-full"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <Card>
                <CardContent className="relative flex flex-col gap-y-4 text-left grayscale hover:filter-none md:filter">
                  <Image
                    src={prop.image}
                    alt={prop.name}
                    className="object-cover sm:h-[430px] md:h-[500px] md:w-[400px]"
                  />
                  <div className="space-y-0 font-inter">
                    <h1 className="text-lg font-bold">{prop.name}</h1>
                    <h2 className="text-base sm:w-[300px] lg:w-[400px]">
                      {prop.lastEducation}
                    </h2>
                  </div>
                  {hoveredIndex === index && (
                    <div
                      className={`absolute left-1/2 top-28 ${
                        judgesData.length === 2
                          ? "sm:w-[70%] md:w-[60%] lg:w-[45%]"
                          : "w-[70%]"
                      } ${judgesData.length === 2 ? "sm:-translate-x-1/2 lg:-translate-x-[80%]" : "-translate-x-1/2"} bg-black p-5 text-white`}
                    >
                      <div className="sm:h-[200px] md:h-[250px]">
                        <p className="font-semi bold mb-10 line-clamp-9 sm:text-sm md:text-base">
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
                            <div className="relative flex flex-wrap gap-5 justify-center">
                              <Image
                                src={prop.image}
                                alt={prop.name}
                                className="md:ml-12 object-cover sm:h-[200px] sm:w-[200px] md:h-[500px] md:w-[400px]"
                              />
                              <div className="z-10 my-auto text-center md:text-start md:ml-20 md:space-y-4 md:p-4 md:text-white sm:text-black ">
                                <h1 className="md:w-[500px] font-semibold sm:text-lg md:text-5xl">
                                  {prop.name}
                                </h1>
                                <p className="font-medium md:text-lg">
                                  {prop.lastEducation}
                                </p>
                              </div>
                              <div className="absolute bottom-0 -z-10 h-72 w-full -translate-y-1/3 transform self-center bg-[#1F1E23] sm:hidden md:inline-block" />
                            </div>
                            <div className="relative z-50 mx-auto md:pt-20 sm:pt-10 sm:w-[90%] md:w-[80%]">
                              <div className="flex flex-wrap">
                                <h1 className="w-full text-2xl font-semibold uppercase sm:text-center md:text-start md:w-1/2">
                                  summary
                                </h1>
                                <p className="w-full sm:mt-5 md:w-1/2 md:text-lg">
                                  {prop.description}
                                </p>
                              </div>
                              <div className="flex flex-wrap pt-14">
                                <h1 className="w-full text-2xl font-semibold uppercase sm:text-center md:text-start md:w-1/2">
                                  Education
                                </h1>
                                <p className="w-full font-bold sm:mt-5 md:w-1/2 md:text-lg">
                                  {prop.lastEducation}
                                </p>
                              </div>
                              <div className="flex flex-wrap pt-14">
                                <h1 className="w-full text-2xl font-semibold uppercase sm:text-center md:text-start md:w-1/2">
                                  honors-awards
                                </h1>
                                <ul className="w-full list-inside list-disc md:w-1/2 mt-5">
                                  {prop.achievements.map((achievement, i) => (
                                    <li
                                      className="sm:mb-2 md:mb-5 sm:text-xs md:text-lg"
                                      key={i}
                                    >
                                      {achievement}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div className="flex flex-wrap pt-14">
                                <h1 className="w-full text-2xl font-semibold uppercase sm:text-center md:text-start md:w-1/2">
                                  Experience
                                </h1>
                                <div className="w-full md:w-1/2 sm:mt-5">
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
                                        <AccordionTrigger className="w-full cursor-pointer text-start font-inter text-xl font-semibold sm:py-10 md:pb-8 sm:text-lg">
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
                                  <div className="my-10 flex w-96 cursor-pointer items-center justify-center bg-[#1F1E23] py-1 hover:opacity-90">
                                    <Image
                                      src={linkedin}
                                      alt="linkedin"
                                      width={40}
                                    />
                                    <p className="pl-5 text-white">
                                      Lorem, ipsum.
                                    </p>
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
        </Swiper>
      </div>
    </div>
  );
};

export default MissionsSlider;
