"use client";

import {
  Accordion,
  AccordionItemGallery,
  AccordionTriggerGallery,
} from "@/components/ui/accordiion";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  activitiesGallery,
  activitiesSemin,
} from "@/constants/ActivitiesGallery";
import Image from "next/image";
import { useState } from "react";

const ActivitiesGallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [showAllG, setShowAllG] = useState(false);

  const displayedActivities = showAll
    ? activitiesSemin
    : activitiesSemin.slice(0, 3);
  const displayedActivitiesG = showAllG
    ? activitiesGallery
    : activitiesGallery.slice(0, 3);

  return (
    <section>
      {/* LATEST PHOTOS */}
      <Card className="relative m-auto mb-12 max-w-screen-xl overflow-hidden rounded-none bg-[#1F1E23] p-5 py-0 pb-20 md:p-16">
        <CardTitle className="mb-5 w-full text-start font-inter text-2xl font-[900] uppercase text-white md:text-3xl lg:ml-16">
          see our <br /> <span className="text-[#C02424]">latest photos</span>
        </CardTitle>
        <div className="flex flex-wrap justify-center gap-5 bg-red-400 p-0">
          {activitiesGallery.slice(0, 3).map((activity) => (
            <div key={activity.index}>
              <div className="relative h-[180px] w-[300px] md:h-[230px] md:w-[380px]">
                <Image
                  src={activity.img}
                  alt={activity.desc}
                  fill
                  className="object-cover object-center"
                />
              </div>
              <p className="mt-2 text-white">{activity.desc}</p>
              <p className="font-[200] text-white">{activity.date}</p>
            </div>
          ))}
        </div>
      </Card>

      {/* OUR COMPETITION */}
      <Card className="relative m-auto max-w-screen-xl rounded-none pb-20">
        <div className="mx-auto w-[80%] flex-none justify-between md:flex">
          <CardTitle className="font-inter text-xl uppercase text-black md:mb-5 md:text-3xl">
            our competition
          </CardTitle>
          <Accordion defaultValue="item-0" type="single" collapsible>
            <AccordionItemGallery value="view-all">
              <AccordionTriggerGallery
                className="mb-5 text-sm text-black"
                onClick={() => setShowAll(!showAll)}
              >
                {showAll ? "Hide All Photos" : "View All Photos"}
              </AccordionTriggerGallery>
            </AccordionItemGallery>
          </Accordion>
        </div>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-5 p-0">
            {displayedActivities.map((activity, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="relative h-[180px] w-[300px] md:h-[230px] md:w-[380px]">
                  <Image
                    src={activity.img}
                    alt={activity.desc}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <p className="mt-2 w-full text-start font-semibold">
                  {activity.desc}
                </p>
                <p className="w-full text-start font-normal">{activity.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* INTERNATIONAL SEMINAR */}
      <Card className="relative m-auto mb-12 max-w-screen-xl rounded-none pb-20 pt-0">
        <div className="mx-auto w-[80%] flex-none justify-between md:flex">
          <CardTitle className="font-inter text-xl uppercase text-black md:mb-5 md:text-3xl">
            international seminar
          </CardTitle>
          <Accordion defaultValue="item-0" type="single" collapsible>
            <AccordionItemGallery value="view-all">
              <AccordionTriggerGallery
                className="mb-5 text-sm text-black"
                onClick={() => setShowAllG(!showAllG)}
              >
                {showAll ? "Hide All Photos" : "View All Photos"}
              </AccordionTriggerGallery>
            </AccordionItemGallery>
          </Accordion>
        </div>
        <CardContent>
          <div className="flex flex-wrap justify-center gap-5 p-0">
            {displayedActivitiesG.map((activity, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center"
              >
                <div className="relative h-[180px] w-[300px] md:h-[230px] md:w-[380px]">
                  <Image
                    src={activity.img}
                    alt={activity.desc}
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <p className="mt-2 w-full text-start font-semibold text-black">
                  {activity.desc}
                </p>
                <p className="w-full text-start font-normal text-black">
                  {activity.date}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default ActivitiesGallery;
