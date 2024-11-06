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
    <div className="mt-20 gap-x-10 text-center font-semibold">
      <h1 className="font-bungee text-5xl font-bold uppercase">
        main committee
      </h1>
      <h3 className="mt-3 text-lg font-normal">Main Committee List</h3>
      <h4 className="mt-8 flex justify-start text-start text-2xl font-semibold uppercase md:text-3xl">
        project manager
      </h4>
      <div className="mx-auto mt-10 max-w-[1560px] md:mt-20 md:pl-10">
        <div className="relative ml-auto flex w-full flex-col bg-page-black pb-8 md:mr-6 md:max-w-[1380px] md:flex-row">
          {/* Image */}
          <div className="-left-8 -top-8 aspect-[3/4] p-5 md:absolute md:p-0">
            <Image
              src={projectManagerImg}
              alt="project manager"
              width={380}
              height={560}
              className="h-full w-full object-cover object-center"
            />
          </div>
          {/* description */}
          <div className="mx-auto flex w-full max-w-[878px] flex-col items-center justify-center gap-y-6 p-5 text-left text-xl text-page-white md:h-[530px] md:w-3/4 md:p-0 md:pl-[160px]">
            <div className="flex w-full flex-col items-start gap-y-3">
              <p>Project Manager UNAS FEST 2024</p>
              <h1 className="font-bungee text-5xl font-medium uppercase">
                shafa sabrina
              </h1>
            </div>
            <p>
              Shafa Sabrina is the Project Manager of Universitas Nasional
              Festival (UNAS FEST) 2024. With extensive experience in project
              management and event development, Shafa has led various creative
              and educational initiatives to create a dynamic and impactful
              festival experience. Her leadership within the UNAS FEST team
              centers on collaboration and innovation to deliver high-quality
              events that engage both the campus community and the broader
              public.{" "}
            </p>
            <p>
              As Project Manager of UNAS FEST 2024, Shafa Sabrina leads a
              dedicated team to bring engaging and impactful events to the
              Universitas Nasional community.{" "}
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
      <div className="container">
        <h4 className="mt-10 flex justify-start text-start text-2xl font-semibold uppercase md:mt-16 md:text-3xl">
          deputy <br /> project manager
        </h4>
        <div>
          <SliderCommittee props={DPM} maxWidth={400} isDPM={true} />
        </div>
        <h4 className="mt-16 flex justify-start text-start text-2xl font-semibold uppercase md:text-3xl">
          asistant <br /> project manager
        </h4>
        <div>
          <SliderCommittee props={APM} maxWidth={320} isDPM={false} />
        </div>
      </div>
    </div>
  );
};

export default Committe;
