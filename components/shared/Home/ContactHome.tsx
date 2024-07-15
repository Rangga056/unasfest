import React from "react";
import Image from "next/image";
import ContactImage from "@/public/assets/images/home/contactUs/homeContact.png";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const ContactHome = () => {
  return (
    <Card className="relative mx-auto mb-12 w-full max-w-screen-xl p-0 md:mt-20 lg:w-[90%]">
      <div>
        <Image
          src={ContactImage}
          alt="Hubungi Kami"
          className="w-full object-cover"
        />
        <div className="absolute top-1/3 ml-10 w-[50%] md:w-[60%] ">
          <h1 className="font-bungee text-2xl leading-none tracking-wide text-white sm:text-xs md:mb-4 md:text-4xl lg:mb-10 lg:text-5xl">
            CAN WE HELP YOU? <br />
            GET IN TOUCH WITH OUR <br />
            CONTACT PERSON!
          </h1>
          <Link href="https://wa.me/6285210637393">
            <Button
              size="xl"
              className="bg-white text-black hover:text-white sm:mt-2 sm:h-7 sm:w-1 sm:text-[10px] md:h-10 md:w-32 md:text-base lg:h-14 lg:w-40 lg:text-lg"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ContactHome;
