"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/components/styles/faq.module.css";
import "swiper/css";
import Pagination from "../shared/pagination/pagination";
import { activitiesData } from "@/lib/types/Activities";

interface RequirementsSwipeProps {
  requirements: activitiesData["requirements"];
}

const RequirementsSwipe: React.FC<RequirementsSwipeProps> = ({ requirements }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        className={`${styles.mySwiper}`}
      >
        {requirements.map((requirement, index) => (
          <SwiperSlide
            key={index}
            className={`${styles.swiperSlideHome}`}
          >
            <div className="text-left flex flex-col justify-start items-center align-middle m-2 p-5 font-inter h-[250px] text-black rounded-sm bg-white">
              <div className="text-4xl w-full font-bungee mb-5">{requirement.no}</div>
              <div className="text-lg w-full">{requirement.detail}</div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <Pagination
        activeIndex={activeIndex}
        totalSlides={requirements.length}
        onSlideChange={handleSlideChange}
      />
    </div>
  );
};

export default RequirementsSwipe;
