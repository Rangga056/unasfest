"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import DOMPurify from "dompurify";

import styles from "@/components/styles/faq.module.css";
import "swiper/css";
import { faqsDataProps } from "@/lib/types/Faq";
import { Pagination, Navigation } from "swiper/modules";
import { MoveRight } from "lucide-react";
import { Swiper as SwiperType } from "swiper";

const FaqSwipe = ({ faqsData }: faqsDataProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper: SwiperType) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <div>
      <Swiper
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
        onSlideChange={handleSlideChange}
        className={`${styles.mySwiper}`}
      >
        {faqsData.map((faq, index) => {
          const isActive = index === activeIndex;
          return (
            <SwiperSlide
              id="slides"
              key={faq.index}
              className={`${styles.swiperSlide}`}
            >
              <div
                className={`flex h-[250px] cursor-grab flex-col items-center justify-around rounded-sm p-9 text-left align-middle font-inter shadow-lg active:cursor-grabbing ${
                  isActive
                    ? "bg-[#004AAD] text-white"
                    : "bg-[#FFFAF0] text-black"
                }`}
              >
                <div className="w-full text-lg font-semibold md:text-xl lg:text-2xl">
                  {faq.quetion}
                </div>
                <p className="w-full font-bungee text-4xl">“</p>
                <div className="w-full text-sm md:text-base lg:text-xl">
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(faq.answer)
                    }}
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute -bottom-14 left-7 z-10 flex h-52 items-center space-x-4 md:h-36">
        <div className="custom-pagination-faq" />
        <div className="swiper-button-next-faq cursor-pointer bg-transparent p-2">
          <MoveRight size={30} className="text-page-black" />
        </div>
      </div>
    </div>
  );
};

export default FaqSwipe;
