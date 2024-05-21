import Image from "next/image";
import { activitiesData } from "@/lib/types/Activities";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ContactProps {
  contact: activitiesData["contact"];
}

const ToContact = ({ contact }: ContactProps) => {
  return (
    <Card className="relative m-auto mb-12 mt-20 w-full max-w-screen-xl lg:w-[90%]">
      <div className="absolute bottom-0 left-0 -z-10 h-[81%] w-full" />
      <div>
        <Image
          src={contact}
          alt="Hubungi Kami"
          className="w-full object-cover"
        />
        <div className="absolute left-4 right-4 sm:left-8 sm:right-8 sm:top-20 sm:max-w-[50%] md:left-16 md:right-16 md:top-36 md:max-w-[50%] lg:left-24 lg:right-auto lg:top-52 lg:max-w-[60%]">
          <h1 className="font-bungee text-2xl leading-none tracking-wide text-white sm:text-xs md:mb-4 md:text-2xl lg:mb-10 lg:text-5xl">
            Bisakah kami membantu Anda? Hubungi kontak person kami!
          </h1>
          <Button
            size="xl"
            className="bg-white text-black hover:text-white sm:mt-2 sm:h-5 sm:w-1 sm:text-[10px] md:h-10 md:w-32 md:text-base lg:h-14 lg:w-40 lg:text-lg"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ToContact;
