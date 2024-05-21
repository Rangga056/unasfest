"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import styles from "@/components/styles/faq.module.css";
import "swiper/css";
import { faqsDataProps } from "@/lib/types/Faq";
import { Pagination, Navigation } from "swiper/modules";
import { MoveRight } from "lucide-react";

const FaqSwipe = ({ faqsData }: faqsDataProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        pagination={{
          clickable: true,
          el: ".custom-pagination-home1",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Navigation]}
        className={`${styles.mySwiper}`}
      >
        {faqsData.map((faq) => {
          return (
            <SwiperSlide
              id="slides"
              key={faq.index}
              className={`${styles.swiperSlide}`}
            >
              <div className="m-2 flex h-[250px] flex-col items-center justify-around rounded-sm bg-[#004AAD] p-9 text-left align-middle font-inter text-white">
                <div className="w-full text-lg font-semibold md:text-xl lg:text-2xl">
                  {faq.quetion}
                </div>
                <p className="w-full font-bungee text-4xl">“</p>
                <div className="w-full text-sm md:text-base lg:text-xl">
                  {faq.answer}
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute -bottom-10 left-0 z-10 flex h-28 items-center space-x-4">
        <div className="custom-pagination-home1" />
        <div className="swiper-button-next cursor-pointer bg-transparent p-2">
          <MoveRight size={30} className="text-page-black" />
        </div>
      </div>
    </div>
  );
};

export default FaqSwipe;
