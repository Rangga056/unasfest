import Image from "next/image";
import ToContactImage from "@/public/img/home/contactHome.png";
import { Button } from "@/components/ui/button";

const ToContact = () => {
  return (
<div className="relative">
  <div className="bg-[#FE672E] w-full h-[81%] absolute bottom-0 left-0 -z-10"></div>
  <Image
    src={ToContactImage}
    alt="Picture of the author"
    className="w-full"
  />
  <div className="absolute top-44 left-24 max-w-[700px]">
    <h1 className="font-bungee tracking-wide text-white mb-10 md:text-5xl">can we help you?<br/>get in touch with our contact person!</h1>
    <Button>Contact Us</Button>
  </div>
</div>

  );
};

export default ToContact;
