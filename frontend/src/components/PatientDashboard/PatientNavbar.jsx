import React, { useState, useEffect } from "react";
import { Menu, PanelLeft } from "lucide-react"; // X for close button

const PatientNavbar = ({ isMenuOpen, setIsMenuOpen }) => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle menu on hamburger click
  const toggleMenu = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up
    setIsMenuOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        !event.target.closest(".sidebar") &&
        !event.target.closest(".menu-icon")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <div>
      {/* Navbar */}
      <nav className="w-full backdrop-blur-[12.5px] bg-white border-b border-b-[#8E8E8E] flex px-5 lg:px-8 lg:py-3 py-2 items-center relative gap-x-4">
        <div className="flex items-center">
          {isMenuOpen ? (
            <PanelLeft
              className="text-[#737373] cursor-pointer menu-icon"
              onClick={toggleMenu}
            />
          ) : (
            <Menu
              className="text-[#737373] cursor-pointer menu-icon "
              onClick={toggleMenu}
            />
          )}
        </div>
        <img
          src="/Logo.png"
          alt="company logo"
          className="lg:w-[131px] lg:h-[69px] w-[67px] h-[36px]"
        />
      </nav>
    </div>
  );
};

export default PatientNavbar;
