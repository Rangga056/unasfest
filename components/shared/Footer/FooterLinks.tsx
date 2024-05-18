import Link from "next/link";
import { activitiesLinks, contactLinks, quickLinks } from "@/constants/Footer";

const FooterLinks = () => {
  return (
    <div className="w-full flex justify-center mt-8 lg:mt-0 lg:justify-end gap-6 leading-6 mx-auto md:mx-0">
      <div className="text-xl hidden md:flex flex-col items-start gap-6 w-fit lg:w-[178px] ">
        <h3 className="font-semibold">Quick Links</h3>
        <div className="flex flex-col text-left gap-6">
          {quickLinks.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className="hover:text-page-blue transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-xl hidden md:flex flex-col items-start gap-6 w-fit lg:w-[178px] pl-6">
        <h3 className="font-semibold">Activities</h3>
        <div className="flex flex-col text-left gap-6">
          {activitiesLinks.map((item) => (
            <Link
              key={item.title}
              href={item.url}
              className="hover:text-page-blue transition-colors"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </div>
      <div className="text-xl flex flex-col md:items-start items-center md:text-left text-center gap-6 w-[180px] lg:w-fit">
        <h3 className="font-semibold">Contact</h3>
        <div className="flex flex-col lg:text-left gap-6">
          {contactLinks.map((item) => (
            <div
              key={item.url}
              className="flex items-center lg:items-start gap-2"
            >
              <Link
                key={item.title}
                href={item.url}
                className="max-w-[311px] w-full text-wrap hover:text-page-blue transition-colors"
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
