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
        <Image src={contact} alt="Hubungi Kami" className="w-full" />
          <div className="absolute top-56 left-24 max-w-3xl">
            <h1 className="font-bungee tracking-wide leading-none text-white mb-10 md:text-5xl">
              Bisakah kami membantu Anda? Hubungi kontak person kami!
            </h1>
            <Button size="xl" className="bg-white text-black md:text-xl hover:text-white">
              Contact Us
            </Button>
          </div>
      </div>
    </Card>
  );
};

export default ToContact;
