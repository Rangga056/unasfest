import React from "react";
import Image from "next/image";
import SpecialBannerImage from "@/public/assets/images/SI-Banner.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const SpecialBanner = () => {
  return (
    <div className="flex h-full w-[90%] flex-col items-center justify-center md:flex-row md:justify-between">
      <div className="relative aspect-square h-auto w-[100svw] max-w-[600px]">
        <Image
          src={SpecialBannerImage}
          alt="International seminar image"
          className="h-full w-full object-contain"
          fill
        />
      </div>
      <div className="flex w-full flex-col items-center justify-center text-center md:w-1/2 md:items-start md:text-left">
        <h3 className="font-bungee text-base font-normal uppercase md:text-xl">
          special event
        </h3>
        <h1 className="font-bungee text-3xl font-normal uppercase text-page-purple md:text-5xl">
          international
          <br /> seminar
        </h1>
        <p className="py-[19px] text-base md:text-xl">
        Explore groundbreaking topics and network with global experts at our exclusive international seminar. Join us for insightful discussions.{" "}
        </p>
        <Link href="/activities/international-seminar">
          <Button
            variant="secondary"
            size="xl"
            className="bg-page-purple px-14 py-4 text-base font-semibold capitalize text-page-white hover:text-page-purple focus:text-page-purple md:text-xl"
          >
            see more
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SpecialBanner;
