"use client";

import photo1 from "@/public/img/home/gallery/gkotak.jpg";
import photo2 from "@/public/img/home/gallery/gkotak.jpg";
import photo3 from "@/public/img/home/gallery/gkotak.jpg";
import photo4 from "@/public/img/home/gallery/gpanjang.jpg";

import Image from "next/image";
import { Card } from "@/components/ui/card";

const Gallery = () => {
  return (
    <section className="relative font-inter w-full max-w-screen-xl m-auto lg:w-4/5">
      <Card className="w-[90%] p-5 m-auto border border-active-blue overflow-hidden lg:p-16 lg:w-full lg:border-none">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex gap-5">
            <Image src={photo1} alt="Photo1" width={250} height={250} />
            <div className="w-64 aspect-square bg-red-500">
              <h1>join join join join join</h1>
            </div>
            <Image src={photo2} alt="Photo1" width={250} height={250}/>
          </div>

          <div className="flex gap-5">
            <div className="w-40 aspect-square bg-red-500">
              <h1>join join join join join</h1>
            </div>
            <Image src={photo4} alt="Photo1" width={400} height={250}/>
            <div>
              <Image src={photo3} alt="Photo1" width={200} height={250}/>
              <h1>join ojijnasdfas</h1>
            </div>
          </div>
        </div>
      </Card>
    </section>
  );
};

export default Gallery;
