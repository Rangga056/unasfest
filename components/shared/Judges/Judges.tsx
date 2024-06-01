// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Card, CardContent, CardTitle } from "@/components/ui/card";
// import Image from "next/image";
// import { activitiesData } from "@/lib/types/Activities";
// import * as Dialog from "@radix-ui/react-dialog";
// import { useState } from "react";

// interface judgesProps {
//   judgesData: activitiesData["judgesData"];
//   color: string;
// }

// const MissionsSlider: React.FC<judgesProps> = ({ judgesData, color }) => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   return (
//     <div className="relative">
//       <Swiper
//         breakpoints={{
//           0: { slidesPerView: 1 },
//           768: { slidesPerView: 2 },
//           1024: { slidesPerView: 3 },
//           1440: { slidesPerView: 3 },
//         }}
//         slidesPerView={"auto"}
//         spaceBetween={20}
//         pagination={{
//           clickable: true,
//           el: ".custom-pagination",
//         }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         }}
//         className="overflow-hidden"
//       >
//         {judgesData.map((prop, index) => (
//           <SwiperSlide
//             key={index}
//             className="w-full h-full"
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <Card className="w-full bg-page-white text-page-black flex flex-col justify-between rounded-none flex-shrink-0 cursor-grab">
//               <CardContent className="flex flex-col gap-y-4 text-left relative md:filter grayscale hover:filter-none">
//                 <Image
//                   src={prop.image}
//                   alt={prop.name}
//                   width={400}
//                   height={400}
//                 />
//                 <div className="space-y-0 font-inter">
//                   <h1 className="text-lg font-bold">{prop.name}</h1>
//                   <h2 className="text-base">{prop.lastEducation}</h2>
//                 </div>
//                 {hoveredIndex === index && (
//                   <div className="absolute w-[70%] top-28 left-1/2 -translate-x-1/2 bg-black text-white p-5">
//                     <p className="pb-10 font-semibold sm:text-base">{prop.description}</p>
//                     <Dialog.Root>
//                       <Dialog.Trigger className="underline cursor-pointer">
//                         Read More ...
//                       </Dialog.Trigger>
//                       <Dialog.Portal>
//                         <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 " />
//                         <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%] rounded-[6px] p-[25px] shadow-lg focus:outline-none z-10">
//                           <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] flex" style={{ backgroundColor: color }}>
//                             <div
//                               className="w-1/2"
//                             >
//                               <Image
//                                 src={prop.image}
//                                 alt={prop.name}
//                                 width={400}
//                                 height={400}
//                                 className="absolute left-0 top-0"
//                               />
//                             </div>
//                             <div className="w-1/2 p-3">
//                               <CardTitle className="text-3xl font-bold mb-5">
//                                 {prop.name}
//                               </CardTitle>
//                               <p className="mb-5 sm:text-base">{prop.description}</p>
//                               <h1>Achiepment</h1>
//                               <ul className="list-disc list-inside">
//                                 {prop.achievements.map((achievement, i) => (
//                                   <li key={i}>{achievement}</li>
//                                 ))}
//                               </ul>
//                             </div>
//                           </Dialog.Description>
//                         </Dialog.Content>
//                       </Dialog.Portal>
//                     </Dialog.Root>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default MissionsSlider;

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
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
import { useState } from "react";

interface judgesProps {
  judgesData: activitiesData["judgesData"];
  color: string;
}

const MissionsSlider: React.FC<judgesProps> = ({ judgesData, color }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative">
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 3 },
        }}
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
        className="overflow-hidden"
      >
        {judgesData.map((prop, index) => (
          <SwiperSlide
            key={index}
            className="h-full w-full"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Card className="flex w-full flex-shrink-0 cursor-grab flex-col justify-between rounded-none bg-page-white text-page-black">
              <CardContent className="relative flex flex-col gap-y-4 text-left grayscale hover:filter-none md:filter">
                <Image
                  src={prop.image}
                  alt={prop.name}
                  width={400}
                  height={400}
                />
                <div className="space-y-0 font-inter">
                  <h1 className="text-lg font-bold">{prop.name}</h1>
                  <h2 className="text-base">{prop.lastEducation}</h2>
                </div>
                {hoveredIndex === index && (
                  <div className="buttom-0 absolute left-1/2 top-28 w-[70%] -translate-x-1/2 bg-black p-5 text-white">
                    <div className="sm:h-[200px] md:h-[250px]">
                      <p className="font-semi bold mb-10 line-clamp-9 sm:text-sm md:text-base">
                        {prop.description}
                      </p>
                    </div>
                    <div></div>
                    <Drawer>
                      <DrawerTrigger className="cursor-pointer underline">
                        Read More ...
                      </DrawerTrigger>
                      <DrawerPortal>
                        <DrawerOverlay />
                        <DrawerContent>
                          <DrawerClose asChild>
                            <button>anjay</button>
                          </DrawerClose>
                          <div className="flex flex-col gap-5">
                            <Image
                              src={prop.image}
                              alt={prop.name}
                              width={400}
                              height={400}
                            />
                            <div className="bg-blue-400">
                              <h1 className="font-bold sm:text-lg md:text-4xl">
                                {prop.name}
                              </h1>
                              <p className="font-semibold sm:text-sm md:text-base">
                                {prop.lastEducation}
                              </p>
                            </div>
                          </div>

                          <ul className="list-inside list-disc">
                            {prop.achievements.map((achievement, i) => (
                              <li
                                className="mb-5 sm:text-xs md:text-base "
                                key={i}
                              >
                                {achievement}
                              </li>
                            ))}
                          </ul>
                          <ul className="list-inside list-disc">
                            {prop.achievements.map((achievement, i) => (
                              <li
                                className="mb-5 sm:text-xs md:text-base "
                                key={i}
                              >
                                {achievement}
                              </li>
                            ))}
                          </ul>
                          <ul className="list-inside list-disc">
                            {prop.achievements.map((achievement, i) => (
                              <li
                                className="mb-5 sm:text-xs md:text-base "
                                key={i}
                              >
                                {achievement}
                              </li>
                            ))}
                          </ul>
                          <ul className="list-inside list-disc">
                            {prop.achievements.map((achievement, i) => (
                              <li
                                className="mb-5 sm:text-xs md:text-base "
                                key={i}
                              >
                                {achievement}
                              </li>
                            ))}
                          </ul>

                          {/* <div className="mt-5 w-full text-black md:mt-0 md:w-1/2">
                              <CardTitle className="mb-5 font-bold sm:text-xl md:text-3xl">
                                {prop.name}
                              </CardTitle>
                              <p className="mb-5 sm:text-xs md:text-base">
                                {prop.description}
                              </p>
                              <h1 className="sm:text-sm md:text-base">
                                Achievements
                              </h1>
                              <ul className="list-inside list-disc">
                                {prop.achievements.map((achievement, i) => (
                                  <li
                                    className="mb-5 sm:text-xs md:text-base "
                                    key={i}
                                  >
                                    {achievement}
                                  </li>
                                ))}
                              </ul>
                            </div> */}
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
  );
};

export default MissionsSlider;
