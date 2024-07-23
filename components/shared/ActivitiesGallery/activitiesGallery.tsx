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
      <Card className="relative m-auto mb-12 w-full max-w-screen-xl rounded-none bg-[#1F1E23] p-16 pb-20 sm:w-[90%]">
        <CardTitle className="mb-5 w-full text-start font-inter text-3xl font-[900] uppercase text-white lg:ml-16">
          see our <br /> <span className="text-[#C02424]">latest photos</span>
        </CardTitle>
        <CardContent className="flex flex-wrap justify-center gap-5 p-0">
          {activitiesGallery.slice(0, 3).map((activity) => (
            <div key={activity.index}>
              <Image
                src={activity.img}
                alt={activity.desc}
                width={380}
                height={400}
              />
              <p className="mt-2 text-white">{activity.desc}</p>
              <p className="font-[200] text-white">{activity.date}</p>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* OUR COMPETITION */}
      <Card className="relative m-auto max-w-screen-xl rounded-none pb-20">
        <div className="mx-auto flex-none md:flex w-[80%] justify-between">
          <CardTitle className="md:mb-5 font-inter text-xl md:text-3xl uppercase text-black">
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
                <Image
                  src={activity.img}
                  alt={activity.desc}
                  width={380}
                  height={380}
                />
                <p className="mt-2 w-full text-start">{activity.desc}</p>
                <p className="w-full text-start font-[200]">{activity.date}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* INTERNATIONAL SEMINAR */}
      <Card className="relative m-auto mb-12 max-w-screen-xl rounded-none pb-20 pt-0">
        <div className="mx-auto flex-none md:flex w-[80%] justify-between">
          <CardTitle className="md:mb-5 font-inter text-xl md:text-3xl uppercase text-black">
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
                <Image
                  src={activity.img}
                  alt={activity.desc}
                  width={380}
                  height={380}
                />
                <p className="mt-2 w-full text-start text-white">
                  {activity.desc}
                </p>
                <p className="w-full text-start font-[200] text-white">
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
