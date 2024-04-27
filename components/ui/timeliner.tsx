// import * as React from "react";
// import {
//   Timeline,
//   TimelineItem,
//   TimelineSeparator,
//   TimelineConnector,
//   TimelineContent,
// } from "@mui/lab";

// import { useMediaQuery, useTheme } from "@mui/material";

// import { Card } from "@/components/ui/card";

// export interface timelinesDatasProps {
//   timelines: Array<{
//     title: string;
//     description: string;
//     month: string;
//     date: string;
//     year: string;
//     color: string;
//   }>;
// }

// const Timeliner = ({ timelines }: timelinesDatasProps) => {
//   const theme = useTheme(); // Use useTheme hook to access theme properties
//   const isLgOrMdScreen = useMediaQuery(theme.breakpoints.up("sm"));

//   // return (
//   //   <section>
//   //     <Card className="">
//   //       <Timeline position={isLgOrMdScreen ? "alternate" : "right"}>
//   //         {timelines.map((item, index) => (
//   //           <TimelineItem key={index} className="m-1 md:-m-10">
//   //             <TimelineSeparator>
//   //               <TimelineConnector />
//   //             </TimelineSeparator>
//   //             <TimelineContent className="bg-blue-700">
//   //               <div className={`relative ${index % 2 === 1 ? "transform scale-x-[-1]" : ""} ${isLgOrMdScreen ? "" : "transform scale-x-[1]"}`}>
//   //                 <svg

//   //                   width="100%"
//   //                   height="auto"
//   //                   viewBox="0 0 571 225"
//   //                   fill="none"
//   //                   xmlns="http://www.w3.org/2000/svg"
//   //                 >
//   //                   <g filter="url(#filter0_d_0_1)">
//   //                     <path
//   //                       fill-rule="evenodd"
//   //                       clip-rule="evenodd"
//   //                       d="M557 2C557 0.895431 556.105 0 555 0H39C37.8954 0 37 0.895428 37 2V16.9664C37 17.6604 36.6402 18.3049 36.0493 18.669L0.954224 40.2974C-0.762006 41.355 -0.0124488 44 2.00352 44H35C36.1046 44 37 44.8954 37 46V210C37 211.105 37.8954 212 39 212H555C556.105 212 557 211.105 557 210V2Z"
//   //                       fill="#FFFAF0"
//   //                     />
//   //                   </g>
//   //                   <path
//   //                     fill-rule="evenodd"
//   //                     clip-rule="evenodd"
//   //                     d="M155 2C155 0.895431 154.105 0 153 0H39C37.8954 0 37 0.895428 37 2V16.9664C37 17.6604 36.6402 18.3049 36.0493 18.669L0.954224 40.2974C-0.762006 41.355 -0.0124488 44 2.00352 44H35C36.1046 44 37 44.8954 37 46V210C37 211.105 37.8954 212 39 212H153C154.105 212 155 211.105 155 210V2Z"
//   //                     fill={item.color}
//   //                   />
//   //                   <defs>
//   //                     <filter
//   //                       id="filter0_d_0_1"
//   //                       x="0"
//   //                       y="0"
//   //                       width="563"
//   //                       height="218"
//   //                       filterUnits="userSpaceOnUse"
//   //                       color-interpolation-filters="sRGB"
//   //                     >
//   //                       <feFlood
//   //                         flood-opacity="0"
//   //                         result="BackgroundImageFix"
//   //                       />
//   //                       <feColorMatrix
//   //                         in="SourceAlpha"
//   //                         type="matrix"
//   //                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
//   //                         result="hardAlpha"
//   //                       />
//   //                       <feOffset dx="3" dy="3" />
//   //                       <feGaussianBlur stdDeviation="1.5" />
//   //                       <feComposite in2="hardAlpha" operator="out" />
//   //                       <feColorMatrix
//   //                         type="matrix"
//   //                         values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
//   //                       />
//   //                       <feBlend
//   //                         mode="normal"
//   //                         in2="BackgroundImageFix"
//   //                         result="effect1_dropShadow_0_1"
//   //                       />
//   //                       <feBlend
//   //                         mode="normal"
//   //                         in="SourceGraphic"
//   //                         in2="effect1_dropShadow_0_1"
//   //                         result="shape"
//   //                       />
//   //                     </filter>
//   //                   </defs>
//   //                 </svg>
//   //               </div>
//   //                 <div className="flex justify-center items-center align-center absolute top-1/2 -translate-y-1/2 pl-[40px]">
//   //                   <div className="w-36 font-bungee flex flex-col justify-center align-center items-center -space-y-1">
//   //                     <p className="text-2xl md:text-lg sm:text-xl">{item.month}</p>
//   //                     <p className="text-6xl">{item.date}</p>
//   //                     <p className="text-xl">{item.year}</p>
//   //                   </div>
//   //                   <div className="">
//   //                   <h1 className="text-inter font-semibold text-3xl w-96">{item.title}</h1>
//   //                   <p>{item.description}</p>
//   //                   </div>
//   //                 </div>
//   //             </TimelineContent>
//   //           </TimelineItem>
//   //         ))}
//   //       </Timeline>
//   //     </Card>
//   //   </section>
//   );
// };

// export default Timeliner;

import "@/components/styles/timelines.module.css";

const Timeliner = () => {
  return (
    <div>
      <h1 className={}></h1>
    </div>
  );
};

export default Timeliner;
