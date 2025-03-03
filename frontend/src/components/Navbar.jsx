import React from "react";
import { useState, useEffect } from "react";
import { Loader2, Menu } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [selectedButton, setSelectedButton] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        !event.target.closest(".navbar") &&
        !event.target.closest(".menu-icon")
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMenuOpen]);

  return (
    <nav className="w-full backdrop-blur-[12.5px] lg: bg-white flex px-5 lg:px-8 lg:py-3 py-2 items-center justify-between relative">
      <img
        src="/Logo.png"
        alt="company logo"
        className="lg:w-[131px] lg:h-[69px] w-[67px] h-[36px]"
      />
      <div className="lg:hidden flex items-center mr-4">
        <Menu className="text-black cursor-pointer" onClick={toggleMenu} />
      </div>

      <div className="lg:flex hidden gap-x-4">
        {/* <Link to="/"> */}
          <Link
            to='/'
            className={`text-2xl font-normal  ${
              selectedButton === "Home"
                ? "text-blue-600 underline"
                : "text-black"
            }`}
            onClick={() => {
              setSelectedButton("Home");
            }}
          >
            Home
          </Link>
        {/* </Link> */}
        <a
          href="#pricing"
          className={`text-2xl font-normal ${
            selectedButton === "Pricing"
              ? "text-blue-600 underline"
              : "text-black"
          }`}
          onClick={(e) => {
            e.preventDefault();
            const pricingElement = document.getElementById("pricing");
            if (pricingElement) {
              pricingElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
            setSelectedButton("Pricing");
          }}
        >
          Pricing & Plans
        </a>
        {/* <Link to="/services"> */}
          <Link
            to='/services'
            className={`text-2xl font-normal ${
              selectedButton === "Services"
                ? "text-blue-600 underline"
                : "text-black"
            }`}
            onClick={() => setSelectedButton("Services")}
          >
            Find Services
          </Link>
        {/* </Link> */}
        <a
          href="#aboutUs"
          className={`text-2xl font-normal ${
            selectedButton === "About"
              ? "text-blue-600 underline"
              : "text-black"
          }`}
          onClick={(e) => {
            e.preventDefault();
            const pricingElement = document.getElementById("aboutUs");
            if (pricingElement) {
              pricingElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
            setSelectedButton("About");
          }}
        >
          About us
        </a>
        <a
          href="#contactUs"
          className={`text-2xl font-normal ${
            selectedButton === "Contact"
              ? "text-blue-600 underline"
              : "text-black"
          }`}
          onClick={(e) => {
            e.preventDefault();
            const pricingElement = document.getElementById("contactUs");
            if (pricingElement) {
              pricingElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
            setSelectedButton("Contact");
          }}
        >
          Contact us
        </a>{" "}
      </div>
      {/* Mobile Menu (below navbar) */}
      {/* {isMenuOpen && (
        <div className="fixed top-full left-0 w-full bg-black/80 text-white py-4 flex flex-col items-center z-[100] rounded-b-xl">
          <a
            href="#"
            className={`text-2xl font-normal  ${
              selectedButton === "Home"
                ? ""
                : "text-white"
            }`}
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#"
            className={`text-2xl font-normal ${
              selectedButton === "Pricing"
                ? ""
                : "text-white"
            }`}
            onClick={toggleMenu}
          >
            Pricing & Plans
          </a>
          <a
            href="#"
            className={`text-2xl font-normal ${
              selectedButton === "Services"
                ? ""
                : "text-white"
            }`}
            onClick={toggleMenu}
          >
            Find Services
          </a>
          <a
            href="#"
            className={`text-2xl font-normal ${
              selectedButton === "About"
                ? ""
                : "text-white"
            }`}
            onClick={toggleMenu}
          >
            About us
          </a>
          <a
            href="#"
            className={`text-2xl font-normal ${
              selectedButton === "Contact"
                ? ""
                : "text-white"
            }`}
            onClick={toggleMenu}
          >
            Contact us
          </a>{" "}
        </div>
      )} */}
    </nav>
  );
};

export default Navbar;
