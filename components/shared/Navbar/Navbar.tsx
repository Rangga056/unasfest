"use client";

import React, { useEffect, useState } from "react";
import MobileNav from "./MobileNav";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { navMenu } from "@/constants/navMenu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import unasfestLogoIcon from "@/public/assets/icons/unasfest-icon-logo.png";
import unasfestLogoText from "@/public/assets/icons/unasfest-logo-text.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const pathname = usePathname();

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > prevScrollPos) {
      setVisible(false);
    } else {
      setVisible(true);
    }

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`w-full h-full z-[99] sticky duration-200 flex bg-[#FFFAF0] ${
        visible ? "top-0" : "-top-32"
      }`}
    >
      {/* Logo */}
      <div className="w-full h-[80px] duration-200 border-b-2 border-solid border-[rgba(0, 0, 0, 0.10)]">
        <div className="w-4/5 h-full max-w-screen-xl z-50 flex m-auto justify-between items-center">
          <Link href="/" className="flex items-center gapp-4 cursor-pointer">
            <Image
              src={unasfestLogoIcon}
              alt="Logo"
              width={57}
              height={57}
              className=" object-contain"
            />
            <Image
              src={unasfestLogoText}
              alt="Logo"
              width={138}
              height={57}
              className="object-contain"
            />
          </Link>
          <div className="hidden md:flex">
            {/* Mobile Nav */}
            <div
              className="lg:hidden"
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              {menuOpen ? (
                <div className="rotate-90 duration-300">
                  <X size={40} color="#004AAD" />
                </div>
              ) : (
                <div className="duration-300">
                  <Menu size={40} color="#004AAD" />
                </div>
              )}
            </div>
          </div>
          <NavigationMenu
            className={`absolute max-w-none w-full py-6 -z-50 bg-[#FFFAF0] left-0 justify-center duration-200 lg:z-0 lg:relative lg:justify-end lg:top-0 ${
              menuOpen ? "top-24" : "-top-96"
            }`}
          >
            <NavigationMenuList className="text-base flex-col lg:flex-row gap-6 lg:gap-16 lg:text-xl">
              {navMenu.map(({ title, path, child }) => {
                if (child)
                  return (
                    <NestedNav
                      key={title}
                      path={path}
                      title={title}
                      menu={child}
                      closeMenu={() => setMenuOpen(false)}
                    />
                  );
                return (
                  <NavigationMenuItem
                    key={title}
                    className={`${pathname === path ? "nav-active" : "nav"}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <Link href={path} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {title}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </div>
    </header>
  );
}

interface NestedNav extends React.HtmlHTMLAttributes<HTMLLIElement> {
  title: string;
  path: string;
  menu: { name: string; href: string; desc?: string }[];
  closeMenu: React.MouseEventHandler;
}

function NestedNav({ title, path, menu, closeMenu }: NestedNav) {
  const pathname = usePathname();

  return (
    <NavigationMenuItem
      className={`z-50 ${pathname.includes(path) ? "nav-active" : "nav"}`}
    >
      <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="w-[300px] text-left">
          {menu.map(({ name, href }, index) => (
            <NavigationMenuLink key={index} onClick={closeMenu}>
              <Link
                href={href}
                className="w-[300px] hover:bg-system-grey-900 hover:bg-opacity-10 block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
              >
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                  {name}
                </p>
              </Link>
            </NavigationMenuLink>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}
