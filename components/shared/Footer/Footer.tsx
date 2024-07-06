import Image from "next/image";
import React from "react";
import unasfestLogo from "@/public/assets/icons/unasfest-logo.png";
import Link from "next/link";
import FooterLinks from "./FooterLinks";
import { Separator } from "@/components/ui/separator";
import { socialLinks } from "@/constants/Footer";

const Footer = () => {
  return (
    <footer className="bg-footer-wave bg-cover bg-right-bottom">
      <div className="container mt-24 pb-32">
      <div className="w-full flex lg:flex-row flex-col gap-y-6 items-center lg:items-start lg:justify-between justify-center">
        {/* Left section of the footer */}
        <div className="flex flex-col items-center gap-y-6 w-[336px] mx-auto md:mx-0">
          {/* Unasfest Logo */}
          <div className="flex items-center">
            <Image src={unasfestLogo} alt="unasfest logo" width={218} height={63} />
          </div>
          {/* Footer Social Media Links */}
          <div className="flex w-[250px] items-center justify-between">
            {socialLinks.map((link) => (
              <Link href={link.link} key={link.title}>
                <Image
                  src={link.icon}
                  alt={link.title}
                  height={30}
                  width={30}
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
      <p className="text-xl md:pl-7 text-center md:text-left">
        © Copyright UnasFest
      </p>
      </div>
    </footer>
  );
};

export default Footer;