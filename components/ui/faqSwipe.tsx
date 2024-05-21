"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@/components/styles/faq.module.css";
import 'swiper/css';
import "swiper/css/pagination";
import { faqsDataProps } from "@/lib/types/Faq";
import { Pagination, Navigation } from "swiper/modules";
import { MoveRight } from "lucide-react";



const FaqSwipe = ({ faqsData }: faqsDataProps) => {

  return (
    <div>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        pagination={{
          clickable: true,
          el: ".custom-pagination",
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
              <div className="text-left flex flex-col justify-around items-center align-middle m-2 p-9 font-inter h-[250px] text-white bg-[#004AAD] rounded-sm">
                <div className="font-semibold text-xl w-full">{faq.quetion}</div>
                <p className="font-bungee text-4xl w-full">“</p>
                <div className="text-base w-full">{faq.answer}</div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="absolute -bottom-10 left-0 z-10 flex items-center space-x-4 h-28">
        <div className="custom-pagination-home" />
        <div className="swiper-button-next cursor-pointer bg-transparent p-2">
          <MoveRight size={40} className="text-page-black" />
        </div>
      </div>
    </div>
  );
};

export default FaqSwipe;
