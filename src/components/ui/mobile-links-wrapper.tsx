"use client";

import { useState } from "react";
import NavbarMobileLinks from "../navbar-mobile-links";
import { FaAnglesLeft } from "react-icons/fa6";

export default function MobileLinkstWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpenNavbar = () => {
    setIsOpen((curr) => !curr);
  };

  return (
    <>
      {/* Mobile toggle button */}
      <button
        className={`mr-4 p-2 duration-200 sm:hidden ${isOpen ? "rotate-180" : ""}`}
        onClick={toggleOpenNavbar}
      >
        <FaAnglesLeft />
      </button>
      {/* Mobile Links */}
      <NavbarMobileLinks
        isOpen={isOpen}
        toggleOpenNavbarFunc={toggleOpenNavbar}
      />
    </>
  );
}
