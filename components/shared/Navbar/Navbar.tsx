"use client";

import React, { useEffect, useState } from "react";
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
import unasfestLogo from "@/public/assets/icons/unasfest-logo.png";

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
      className={`sticky z-[99] flex h-full w-full bg-[#FFFAF0] duration-200 ${
        visible ? "top-0" : "-top-32"
      }`}
    >
      {/* Logo */}
      <div className="border-[rgba(0, 0, 0, 0.10)] h-[80px] w-full border-b-2 border-solid duration-200">
        <div className="container z-50 flex h-full w-full items-center justify-between">
          <Link href="/" className="flex cursor-pointer items-center">
            <Image
              src={unasfestLogo}
              alt="unasfest logo"
              width={190}
              height={56}
              className="h-[40px] w-[120px] object-contain md:h-[56px] md:w-[190px]"
            />
          </Link>
          <div className="flex md:hidden">
            {/* Mobile Nav */}
            <div
              className="md:hidden"
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
            className={`absolute left-0 -z-50 w-full max-w-none justify-center bg-[#FFFAF0] py-6 duration-200 md:relative md:top-0 md:z-0 md:justify-end ${
              menuOpen ? "top-20" : "-top-96"
            }`}
          >
            <NavigationMenuList className="flex-col md:gap-5 lg:gap-10 text-xl md:text-4xl lg:text-xl md:flex-row">
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
                className="hover:bg-system-grey-900 block w-[300px] select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:bg-opacity-10 hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
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
