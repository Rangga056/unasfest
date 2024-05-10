import Link from "next/link";
import { activitiesLinks, contactLinks, quickLinks } from "@/constants/Footer";
import Image from "next/image";

const FooterLinks = () => {
  return (
    <div className="flex justify-end gap-6 leading-6 mx-auto md:mx-0">
      <div className="text-xl hidden md:flex flex-col items-start gap-6 w-[178px] ">
        <h3 className="font-semibold">Quick Links</h3>
        <div className="flex flex-col text-left gap-6">
          {quickLinks.map((item) => (
            <Link key={item.title} href={item.url}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-xl hidden md:flex flex-col items-start gap-6 w-[178px]">
        <h3 className="font-semibold">Activities</h3>
        <div className="flex flex-col text-left gap-6">
          {activitiesLinks.map((item) => (
            <Link key={item.title} href={item.url}>
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-xl flex flex-col md:items-start items-center md:text-left text-center gap-6">
        <h3 className="font-semibold">Contact</h3>
        <div className="flex flex-col lg:text-left gap-6">
          {contactLinks.map((item) => (
            <div className="flex items-start gap-2">
              <Image
                src={item.icon}
                alt={item.title}
                width={20}
                height={20}
                className="pt-1"
              />
              <Link
                key={item.title}
                href={item.url}
                className="max-w-[311px] text-wrap"
                target="_blank"
              >
                {item.title}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
