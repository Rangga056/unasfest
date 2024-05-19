import Image from "next/image";
import { activitiesData } from "@/lib/types/Activities";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ContactProps {
  contact: activitiesData["contact"];
}

const ToContact = ({ contact }: ContactProps) => {
  return (
    <Card className="relative mt-20 w-full max-w-screen-xl m-auto lg:w-[90%] mb-12">
      <div className="w-full h-[81%] absolute bottom-0 left-0 -z-10" />
      <div>
        <Image src={contact} alt="Hubungi Kami" className="w-full object-cover" />
        <div className="absolute left-4 right-4 sm:top-20 sm:left-8 sm:right-8 md:top-36 md:left-16 md:right-16 lg:top-52 lg:left-24 lg:right-auto sm:max-w-[50%] md:max-w-[50%] lg:max-w-[60%]">
          <h1 className="font-bungee tracking-wide leading-none text-white md:mb-4 lg:mb-10 text-2xl sm:text-xs md:text-2xl lg:text-5xl">
            Bisakah kami membantu Anda? Hubungi kontak person kami!
          </h1>
          <Button size="xl" className="bg-white text-black sm:text-[10px] sm:mt-2 md:text-base lg:text-lg hover:text-white sm:w-1 sm:h-5 md:w-32 md:h-10 lg:w-40 lg:h-14">
            Contact Us
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ToContact;