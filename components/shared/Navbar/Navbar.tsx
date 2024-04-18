import React from "react";
import MobileNav from "./MobileNav";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4">
      {/* Logo */}
      <div>logo</div>

      <div className="hidden md:flex">
        {/* Desktop Nav */}
        <nav>Usernav</nav>
        {/* Mobile Nav */}
      </div>
      <div className="flex md:hidden">
        <MobileNav />
      </div>
    </header>
  );
};

export default Navbar;
