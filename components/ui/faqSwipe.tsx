"use client";

import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import styles from "@/components/styles/faq.module.css";
import 'swiper/css';
import Pagination from "./pagination";
export interface faqsDataProps {
  faqsData: Array<{
    quetion: string;
    answer: string;
  }>;
}

const FaqSwipe = ({ faqsData }: faqsDataProps) => {
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
        // modules={[Pagination]}
        className={`${styles.mySwiper}`}
      >
        {faqsData.map((faq, index) => {
          return (
            <SwiperSlide
              id="slides"
              key={index}
              className={`${styles.swiperSlide}`}
            >
              <div className="text-left flex flex-col justify-around items-center align-middle m-2 p-9 font-inter h-[250px] text-white bg-[#004AAD] rounded-sm">
                <div className="font-semibold text-xl w-full">{faq.quetion}</div>
                <p className="font-bungee text-4xl w-full">“</p>
                <div className="text-base w-full">{faq.answer}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Pagination
        activeIndex={activeIndex}
        totalSlides={6}
        onSlideChange={handleSlideChange}
      />
    </div>
  );
};

export default FaqSwipe;
