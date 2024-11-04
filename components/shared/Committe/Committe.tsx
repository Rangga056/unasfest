import React from "react";
import projectManagerImg from "@/public/assets/images/about-us/committee/shafa.webp";
import linkedinIcon from "@/public/assets/icons/LinkedIn-icon-white.svg";
import instagramIcon from "@/public/assets/icons/instagram-icon-white.svg";
import Image from "next/image";
import Link from "next/link";

import { DPM, APM } from "@/constants/Committe";
import SliderCommittee from "./SliderCommittee";
// import SliderCommittee from './SliderCommittee';

const Committe = () => {
  return (
    <div className="container mt-20 gap-x-10 text-center font-semibold">
      <h1 className="font-bungee text-5xl font-bold uppercase">
        main committee
      </h1>
      <h3 className="mt-3 text-lg font-normal">Main Committee List</h3>
      <h4 className="mt-8 flex justify-start text-start text-2xl md:text-3xl font-semibold uppercase">
        project manager
      </h4>
      <div className="mx-auto mt-10 md:mt-20 max-w-[1560px] md:pl-10">
        <div className="relative ml-auto mr-6 flex w-full flex-col bg-page-black md:max-w-[1380px] md:flex-row">
          {/* Image */}
          <div className="-left-8 -top-8 p-5 md:absolute aspect-[380/480] md:p-0">
            <Image
              src={projectManagerImg}
              alt="project manager"
              width={380}
              height={530}
              className="h-full w-full object-contain md:w-auto"
            />
          </div>
          {/* description */}
          <div className="mx-auto flex w-full max-w-[678px] flex-col items-center justify-center gap-y-6 p-5 text-left text-xl text-page-white md:h-[530px] md:w-3/4 md:p-0 md:pl-[160px]">
            <div className="flex w-full flex-col items-start gap-y-3">
              <p>Project Manager UNAS FEST 2024</p>
              <h1 className="font-bungee text-5xl font-medium uppercase">
                shafa sabrina
              </h1>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation{" "}
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor{" "}
            </p>
          </div>
          {/* social media links */}
          <div className="absolute right-10 top-0 z-0 flex h-[200px] w-[54px] flex-col items-center justify-end gap-y-2 bg-page-green pb-5 text-3xl text-page-white md:right-32">
            <Link href="/">
              <Image
                src={linkedinIcon}
                alt="linkedinIcon"
                width={32}
                height={32}
              />
            </Link>
            <Link href="/">
              <Image
                src={instagramIcon}
                alt="instagramIcon"
                width={32}
                height={32}
              />
            </Link>
          </div>
        </div>
      </div>

      {/* DPM */}
      <h4 className="mt-10 md:mt-16 flex justify-start text-start text-2xl md:text-3xl font-semibold uppercase">
        deputy <br /> project manager
      </h4>
      <div>
        <SliderCommittee props={DPM} maxWidth={400} isDPM={true} />
      </div>
      <h4 className="mt-16 flex justify-start text-start text-2xl md:text-3xl font-semibold uppercase">
        asistant <br /> project manager
      </h4>
      <div>
        <SliderCommittee props={APM} maxWidth={320} isDPM={false} />
      </div>
    </div>
  );
};

export default Committe;
// "use client";

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import { Card, CardContent } from "@/components/ui/card";
// import { Pagination, Navigation } from "swiper/modules";
// import "swiper/css/pagination";
// import { MoveRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// type Prop = {
//   index: number;
//   image: string;
//   name: string;
//   path: string;
// };

// type Props = Prop[];

// type PropsTypes = {
//   props: Props;
// };

// const Commmitee: React.FC<PropsTypes> = ({ props }) => {
//   return (
//     <div className="relative">
//       <Swiper
//         slidesPerView={"auto"}
//         spaceBetween={30}
//         pagination={{
//           clickable: true,
//           el: ".custom-pagination-home",
//         }}
//         navigation={{
//           nextEl: ".swiper-button-next",
//         }}
//         modules={[Pagination, Navigation]}
//         className="overflow-hidden"
//       >
//         {props.map((prop) => (
//           <SwiperSlide
//             key={prop.index}
//             className="h-auto w-full max-w-[249px] md:max-w-[320px]"
//           >
//             <Link href={prop.path} className="">
//               <Card className=" flex h-full w-fit flex-shrink-0 cursor-pointer flex-col justify-between rounded-none p-0 text-page-white active:cursor-grabbing">
//                 <CardContent className="relative flex flex-col p-0">
//                   {/* <h1 className="font-bungee uppercase font-medium text-[27px]"> */}
//                   {/*   {prop.name} */}
//                   {/* </h1> */}
//                   <Image
//                     src={prop.image}
//                     alt="activity poster"
//                     width={366}
//                     height={483}
//                     className="relative h-auto w-[249px] object-contain md:w-[320px] lg:w-[366px]"
//                   />
//                 </CardContent>
//               </Card>
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//       {/* Custom Pagination and Navigation Container */}
//       <div className="absolute -bottom-16 left-0 z-10 flex items-center space-x-4 lg:hidden">
//         <div className="custom-pagination-home" />
//         <div className="swiper-button-next cursor-pointer bg-transparent p-2 ">
//           <MoveRight size={40} className="text-page-black" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Commmitee;
