import Image from "next/image";
import { activitiesData } from "@/lib/types/Activities";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface ContactProps {
  contact: activitiesData["contact"];
}

const ToContact = ({ contact }: ContactProps) => {
  return (
    <Card className="relative mx-auto mb-12  w-full max-w-screen-xl md:mt-20 pt-0 lg:w-[90%]">
      <div>
        <Image
          src={contact}
          alt="Hubungi Kami"
          className="w-full object-cover"
        />
        <div className="absolute top-1/3 w-[50%] md:w-[60%] ml-10 ">
          <h1 className="font-bungee text-2xl leading-none tracking-wide text-white sm:text-xs md:mb-4 md:text-4xl lg:mb-10 lg:text-5xl">
            Bisakah kami membantu Anda? Hubungi kontak person kami!
          </h1>
          <Button
            size="xl"
            className="bg-white text-black hover:text-white sm:mt-2 sm:h-7 sm:w-1 sm:text-[10px] md:h-10 md:w-32 md:text-base lg:h-14 lg:w-40 lg:text-lg"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ToContact;
