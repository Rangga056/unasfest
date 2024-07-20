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
        <div className="flex w-full flex-col items-center justify-center gap-y-6 lg:flex-row lg:items-start lg:justify-between">
          {/* Left section of the footer */}
          <div className="mx-auto flex w-full max-w-[336px] flex-col items-center gap-y-6 md:mx-0">
            {/* Unasfest Logo */}
            <div className="flex items-center">
              <Image
                src={unasfestLogo}
                alt="unasfest logo"
                width={218}
                height={63}
              />
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
        <Separator className="my-10 w-full bg-page-black" />
        <p className="text-center text-xl md:pl-7 md:text-left">
          © Copyright UnasFest
        </p>
      </div>
    </footer>
  );
};

export default Footer;

