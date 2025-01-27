import React from "react";
import { Dot } from "lucide-react";
import Link from "next/link";

const Yb = () => {
  return (
    <div className="relative block h-72 w-full bg-black md:h-screen">
      {/* Gambar YB */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-[1100px] bg-[url('/assets/images/about-us/YB.png')] bg-contain bg-center bg-no-repeat m-10">
          {/* Teks di tengah */}
          <div className="flex h-full flex-col items-center justify-center text-center text-white">
            <div className="flex items-center text-sm md:text-lg">
              <h1>245 members</h1>
              <Dot className="scale-150" />
              <h1>15 departments</h1>
              <Dot className="scale-150" />
              <h1>4 sectors</h1>
            </div>

            <h1 className="font-bungee text-xl uppercase tracking-wide w-96 md:w-[70%] lg:w-[50%] md:text-4xl">
              Discover the Stories in Our Yearbook
            </h1>
            <Link href="https://caturnawa.unasfest.com/yb" target="_blank">
              <h1 className="mt-3 text-sm md:text-base bg-white px-6 font-inter font-medium text-black transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg md:mt-5 md:px-10 py-2 md:font-bold">
                Explore 2024 Yearbook
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yb;
