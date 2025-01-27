import React from "react";
import { Dot } from "lucide-react";

const Yb = () => {
  return (
    <div className="relative h-screen w-full bg-black">
      {/* Gambar YB */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="h-full w-[1100px] bg-[url('/assets/images/about-us/YB.png')] bg-contain bg-center bg-no-repeat">
          {/* Teks di tengah */}
          <div className="flex flex-col items-center justify-center h-full text-white text-center px-4">
            <div className="flex items-center gap-2 text-lg mb-4">
              <h1>245 members</h1>
              <Dot />
              <h1>15 department</h1>
              <Dot />
              <h1>3 sector</h1>
            </div>
            <h1 className="text-5xl font-bold uppercase w-[80%] font-bungee">
              Discover the Stories in Our Yearbook
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yb;
