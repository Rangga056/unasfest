"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  activitiesGallery,
  Galleryfilter,
} from "@/constants/ActivitiesGallery";
import React, { useEffect } from "react";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";

const GalleryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedYear, setSelectedYear] = useState<string | null>(null);

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
  };

  const handleYearChange = (value: string) => {
    setSelectedYear(value);
  };

  // Filter the activities based on the selected category and year
  const filteredActivities = Galleryfilter.filter((activity) => {
    const matchesCategory = selectedCategory
      ? activity.category === selectedCategory
      : true;
    const matchesYear = selectedYear ? activity.year === selectedYear : true;
    return matchesCategory && matchesYear;
  });

  return (
    <Card className="relative m-auto mb-12 max-w-screen-xl overflow-hidden rounded-none bg-[#1F1E23] p-5 py-0 pb-20 md:p-16">
      <CardTitle className="mb-5 mt-7 w-full text-start font-inter text-2xl font-[900] uppercase text-white md:text-3xl lg:ml-16">
        MEMORIES FROM <span className="text-[#2A9763]">THE PAST</span>
        <div className="ml-auto flex items-center">
          <Select onValueChange={handleCategoryChange}>
            <SelectTrigger className=" my-4 h-[35px] w-[175px] rounded-none bg-black font-normal">
              <SelectValue placeholder="Competition Title" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Seminar Internasional">
                Seminar Internasional
              </SelectItem>
              <SelectItem value="Seminar Nasional">
                Seminar Nasional
              </SelectItem>
              <SelectItem value="KDBI">KDBI</SelectItem>
              <SelectItem value="EDC">EDC</SelectItem>
              <SelectItem value="SPC">SPC</SelectItem>
              <SelectItem value="SMC">SMC</SelectItem>
            </SelectContent>
          </Select>
          <span className="my-4 ml-5 justify-end text-[15px] font-normal text-white">
            From
          </span>
          <Select onValueChange={handleYearChange}>
            <SelectTrigger className="ml-2 h-[35px] w-[100px] rounded-none bg-black font-normal">
              <SelectValue placeholder="Year" />
            </SelectTrigger>
            <SelectContent className="font-normal">
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardTitle>
      <CardContent className="flex flex-wrap justify-center gap-5 p-0">
        {filteredActivities.map((activity) => (
          <div key={activity.index}>
            <div className="relative h-[180px] w-[300px] md:h-[230px] md:w-[380px]">
              <Image
                src={activity.img}
                alt={activity.category}
                fill
                className="object-cover object-center"
              />
            </div>
            <p className="mt-2 text-white">{activity.desc}</p>
            <p className="font-[200] text-white">{activity.year}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default GalleryFilter;
