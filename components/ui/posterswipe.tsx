"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../styles/poster.css";

// import required modules
import Image, { StaticImageData } from "next/image";
import { Button } from "./button";
import Pagination from './pagination';
// import { Pagination } from 'swiper/modules';

export interface posterDatasProps {
  posterDatas: Array<{
    image: StaticImageData | string;
    name: string;
  }>;
}

const PosterLomba = ({ posterDatas }: posterDatasProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index : number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        // modules={[Pagination]}
        className="mySwiper"
      >
        {posterDatas.map((poster, index) => {
          return (
            <SwiperSlide
              id="slides"
              key={index}
              className="poster-slide mx-2"
              style={{
                width: "100%",
                height: "100%",
              }}
            >
              <div className="flex flex-col w-72 justify-center items-center align-center relative bg-red-400">
              <Image
                src={poster.image}
                alt={poster.name}
                layout="responsive"
              className="object-cover"
              />
              <Button size="poster" className="absolute bottom-0 left-1/2 -translate-x-1/2 right-0 p-4 text-center">
                see more
              </Button>
              </div>
              
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Pagination 
      activeIndex={activeIndex}
      totalSlides={posterDatas.length}
      onSlideChange={handleSlideChange}
      />
    </>
  );
};

export default PosterLomba;
