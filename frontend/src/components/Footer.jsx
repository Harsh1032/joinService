import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  const [selectedButton, setSelectedButton] = useState("");

  const scrollToSection = (id, offset = 0) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full bg-black">
      <MaxWidthWrapper className="flex flex-col lg:px-20">
        <div className="w-full flex lg:flex-row flex-col lg:justify-between py-5 lg:px-5">
          <div className="flex flex-col max-lg:items-center lg:p-5 gap-y-4">
            <img
              src="/Logo2.png"
              alt="company logo"
              className="lg:w-[131px] lg:h-[69px] w=[105px] h-[55px]"
            />
            <p className="lg:text-2xl text-xs text-[#AFAFAF] max-lg:text-center font-normal lg:pl-3 leading-relaxed">
              AI-powered stroke recovery platform
              <br />
              connecting patients, families, and care
              <br />
              teams with personalized rehab plans
            </p>
            <img
              src="/socialMedia.png"
              alt="social media icons"
              className="lg:w-[250px] lg:h-[59px] w-[119px] h-[28px]"
            />
            <hr className="text-white w-[80%] mx-auto lg:hidden" />
          </div>

          <div className="flex flex-col gap-y-4 p-5 max-lg:text-center">
            <span className="text-2xl font-normal text-[#AFAFAF]">Pages</span>
            <div className="flex lg:flex-row flex-col lg:justify-between lg:mt-3 lg:gap-x-8">
              <div className="flex flex-col lg:gap-y-5 gap-y-2">
                {/* HOME */}
                <a
                  href="#"
                  className={`text-2xl max-lg:text-lg font-normal ${
                    selectedButton === "Home"
                      ? "text-blue-600 underline"
                      : "text-[#AFAFAF]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setSelectedButton("Home");
                  }}
                >
                  Home
                </a>

                {/* ABOUT */}
                <a
                  href="#aboutUs"
                  className={`text-2xl max-lg:text-lg font-normal ${
                    selectedButton === "About"
                      ? "text-blue-600 underline"
                      : "text-[#AFAFAF]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("aboutUs", -100);
                    setSelectedButton("About");
                  }}
                >
                  About us
                </a>

                {/* PRICING - now scrolls to the badge section */}
                <a
                  href="#pricing"
                  className={`text-2xl max-lg:text-lg font-normal ${
                    selectedButton === "Pricing"
                      ? "text-blue-600 underline"
                      : "text-[#AFAFAF]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    // go straight to the real pricing start
                    scrollToSection("investor-plans", -80);
                    setSelectedButton("Pricing");
                  }}
                >
                  Pricing & Plans
                </a>

                {/* CONTACT */}
                <a
                  href="#contactUs"
                  className={`text-2xl max-lg:text-lg font-normal ${
                    selectedButton === "Contact"
                      ? "text-blue-600 underline"
                      : "text-[#AFAFAF]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection("contactUs", -100);
                    setSelectedButton("Contact");
                  }}
                >
                  Contact us
                </a>

                {/* mobile only */}
                <a
                  href="/services"
                  className={`text-2xl max-lg:text-lg font-normal lg:hidden ${
                    selectedButton === "Services"
                      ? "text-blue-600 underline"
                      : "text-[#AFAFAF]"
                  }`}
                  onClick={() => {
                    setSelectedButton("Services");
                  }}
                >
                  Find Services
                </a>
              </div>

              {/* desktop right col */}
              <div className="lg:flex flex-col gap-y-5 hidden">
                <a
                  href="/services"
                  className={`text-2xl font-normal ${
                    selectedButton === "Services"
                      ? "text-blue-600 underline"
                      : "text-[#AFAFAF]"
                  }`}
                  onClick={() => {
                    setSelectedButton("Services");
                  }}
                >
                  Find Services
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr className="text-white w-[80%] mx-auto lg:hidden" />

        <div className="w-full flex lg:flex-row flex-col lg:justify-between max-lg:text-center p-5">
          <span className="lg:text-2xl text-md font-normal text-[#AFAFAF] lg:p-5 py-1">
            © 2025 WiseCare Asia Sdn. Bhd
          </span>
          <span className="lg:text-2xl text-md font-normal text-[#AFAFAF] lg:p-5 py-1">
            Developed by <span className="underline">Gumbytes Technologies</span>
          </span>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
