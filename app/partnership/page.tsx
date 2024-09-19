"use client";

import { Card, CardContent, CardTitle } from "@/components/ui/card";
import banner from "@/public/assets/images/Partnership/banner.png";
import vector31 from "@/public/assets/images/Partnership/Vector31.png";
import Image from "next/image";
import sample from "@/public/assets/images/Partnership/sample.png";
import contact from "@/public/assets/images/Partnership/contact.png";
import contactsm from "@/public/assets/images/Partnership/contactsm.png";
import whatsap from "@/public/assets/icons/whatsap.png";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { contactsData } from "@/constants/Contacts";
import Link from "next/link";
import { partnership } from "@/constants/Partnership";
import { partnershipDataProps } from "@/lib/types/Partnership";
import { unasCollaborate } from "@/constants/About";
import { mediaPartnership } from "@/constants/About";

const Partnership = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <Card className="relative mb-12 flex w-full items-center justify-center overflow-hidden rounded-none p-0 pb-2 text-center align-middle">
        <Image
          src={banner}
          alt="banner"
          className="h-full w-full max-w-[1600px] object-cover object-center px-3 md:px-24"
        />
      </Card>
      <div className="mx-auto max-w-screen-xl">
        <Card className="overflow-hidden rounded-none pb-2">
          <CardContent className="p-0">
            <CardTitle className="mx-auto items-center pb-4  text-center text-3xl font-normal leading-tight md:w-[80%] md:text-4xl md:leading-relaxed md:tracking-wide lg:text-6xl">
              Sponsor Our Competition
              <br /> for the Future of Energy
            </CardTitle>

            <p className="mx-auto px-5 pb-16 text-center text-base md:w-[60%] md:text-[20px] lg:text-[24px]">
              There are 4 branches of competition in this activity, namely
              Scientific Paper Competition (SPC), English Debate Competition
              (EDC), Kompetisi Debat Bahasa Indonesia (KDBI) and Short Movie
              Competition (SMC)
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-12 w-full overflow-hidden rounded-none bg-[#1F1E23] py-[70px]">
        <div className="mx-auto max-w-screen-xl">
          <CardTitle className="pb-10 text-center font-inter text-3xl font-bold uppercase text-white md:text-5xl">
            our sponsor
          </CardTitle>
          <div className="flex flex-wrap justify-center gap-5">
            {partnership.map((item) => (
              <div
                key={item.index}
                className="flex w-80 flex-col justify-evenly bg-white p-7 md:w-96"
              >
                <Image
                  src={item.image}
                  alt="sample"
                  className="mx-auto"
                  width={400}
                  height={250}
                />
                <h3 className="mt-2 text-base">{item.title}</h3>
                <p className="line-clamp-3 font-semibold">{item.description}</p>
                <Link href={item.link}>
                  <Button className="mt-5 rounded-none px-10 py-3">
                    See More
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </Card>
      {/*TODO: Collaborations */}
      <div className="container mt-24 h-full px-3 text-5xl">
        <h1 className="text-center font-bungee text-2xl md:text-5xl">
          collaborator
        </h1>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-2 md:mt-24 md:gap-5">
          {unasCollaborate.map((item) => (
            <div
              key={item.index}
              className="flex h-[230px] w-[150px] flex-col justify-center gap-y-4 border border-page-black p-6 md:h-[350px] md:w-[250px] md:p-16"
            >
              <div className="flex justify-center">
                <Image
                  src={item.img.src}
                  alt={item.alt}
                  width={143}
                  height={142}
                  className="aspect-square object-contain"
                />
              </div>

              <p className="text-center uppercase text-base font-semibold md:text-xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/*TODO: Collaborations */}
      <div className="container mt-24 h-full px-3 text-5xl">
        <h1 className="text-center font-bungee text-2xl md:text-5xl">
            Media Partner
        </h1>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-2 md:mt-24 md:gap-5">
          {mediaPartnership.map((item) => (
            <div
              key={item.index}
              className="flex h-[230px] w-[150px] flex-col justify-center gap-y-4 border border-page-black p-6 md:h-[350px] md:w-[250px] md:p-16"
            >
              <div className="flex justify-center">
                <Image
                  src={item.img.src}
                  alt={item.alt}
                  width={143}
                  height={142}
                  className="aspect-square object-contain"
                />
              </div>

              <p className="text-center uppercase text-base font-semibold md:text-xl">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Card className="mx-auto mt-20 max-w-screen-xl">
        <CardContent className="relative p-0 md:p-6">
          <Image
            src={isMobile ? contactsm : contact}
            alt="contact"
            width={1350}
            className="mx-auto"
          />
          <div className="absolute top-7 md:left-16 md:top-[20%] lg:left-24 lg:top-1/4">
            <p className="px-2 font-bungee font-medium leading-relaxed text-[#FFFAF0] md:w-[70%] md:pb-4 md:text-3xl lg:w-1/2 lg:text-5xl">
              can we help you? get in touch with our contact person!
            </p>
            <div className="ml-2 flex w-[70%] flex-wrap gap-3 md:w-full">
              {contactsData.map((contact) => (
                <Link href={contact.whatsApp} key={contact.index}>
                  <button className="flex items-center gap-1 bg-[#FFFAF0] px-2 py-1 md:gap-3 md:px-9 md:py-3">
                    <Image src={whatsap} alt="whatsap" className="w-3 md:w-7" />
                    <p className="text-sm md:text-base lg:text-xl">
                      {contact.title}
                    </p>
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Partnership;
