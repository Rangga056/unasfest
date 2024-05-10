import Image from "next/image";
import React from "react";
import unafestIconLogo from "@/public/assets/icons/unasfest-icon-logo.png";
import unafestIconText from "@/public/assets/icons/unasfest-logo-text.png";
import Link from "next/link";
import FooterLinks from "./FooterLinks";
import { Separator } from "@/components/ui/separator";
import { socialLinks } from "@/constants/Footer";

const Footer = () => {
  return (
    <footer className="container mt-24 pb-32">
      <div className="w-full flex md:flex-row flex-col gap-y-6 items-start lg:justify-between justify-center">
        {/* Left section of the footer */}
        <div className="flex flex-col items-center gap-y-6 w-[218px] mx-auto md:mx-0">
          {/* Unasfest Logo */}
          <div className="flex items-center gap-1">
            <Image src={unafestIconLogo} alt="logo" width={57} height={57} />
            <Image src={unafestIconText} alt="logo" width={150} height={57} />
          </div>
          {/* Footer Social Media Links */}
          <div className="flex w-[200px] items-center justify-between">
            {socialLinks.map((link) => (
              <Link href={link.link} key={link.title}>
                <Image
                  src={link.icon}
                  alt={link.title}
                  height={30}
                  width={37}
                  className="oject-contain"
                />
              </Link>
            ))}
          </div>
        </div>
        {/* Right section of the footer */}
        <FooterLinks />
      </div>
      {/* Separator liine */}
      <Separator className="w-full my-10 bg-page-black" />
      <p className="text-xl text-center md:text-left">
        @Copyright UnasFest 2023
      </p>
    </footer>
  );
};

export default Footer;
