import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Footer = () => {
  const [selectedButton, setSelectedButton] = useState("");
  return (
    <div className="w-full bg-black">
      <MaxWidthWrapper className="flex flex-col lg:px-20">
        <div className="w-full flex lg:flex-row flex-col lg:justify-between py-5 lg:px-5">
          <div className="flex flex-col max-lg:items-center lg:p-5 gap-y-4">
            <img
              src="/Logo2.png"
              alt="company logo"
              className="lg:w-[131px] lg:h-[69px] w-[105px] h-[55px]"
            />
            <p className="lg:text-2xl text-xs text-[#AFAFAF] max-lg:text-center font-normal lg:pl-3">
              Lorem ipsum dolor sit amet, consect
              <br />
              etur adipiscing elit, sed do eiu
              <br />
              smod tempor incididunt ut labor
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
                <a
                  href="#"
                  className={`text-2xl font-normal ${
                    selectedButton === "Home"
                      ? "text-blue-600 underline"
                      : "text-[#AFAFAF]"
                  }`}
                  onClick={() => {
                    setSelectedButton("Home");
                  }}
                >
                  Home
                </a>
                <a
                  href="#aboutUs"
                  className={`text-2xl font-normal ${
                    selectedButton === "About"
                      ? "text-blue-600 underline"
                      : "text-[#AFAFAF]"
                  }`}
                  // onClick={() => setSelectedButton("About")}
                  onClick={(e) => {
                    e.preventDefault();
                    const pricingElement = document.getElementById("aboutUs");
                    if (pricingElement) {
                      pricingElement.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                    setSelectedButton("About");
                  }}
                >
                  About us
                </a>
                <a
                  href="#pricing"
                  className={`text-2xl font-normal ${
                    selectedButton === "Pricing"
                      ? "text-blue-600 underline"
                      : "text-[#AFAFAF]"
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    const pricingElement = document.getElementById("pricing");
                    if (pricingElement) {
                      pricingElement.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                    setSelectedButton("Pricing");
                  }}
                >
                  Pricing & Plans
                </a>
                <a
                  href="#contactUs"
                  className={`text-2xl font-normal ${
                    selectedButton === "Contact"
                      ? "text-blue-600 underline"
                      : "text-[#AFAFAF]"
                  }`}
                  // onClick={() => setSelectedButton("Contact")}
                  onClick={(e) => {
                    e.preventDefault();
                    const pricingElement = document.getElementById("contactUs");
                    if (pricingElement) {
                      pricingElement.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                    setSelectedButton("Contact");
                  }}
                >
                  Contact us
                </a>
                <a
                  href="#"
                  className={`text-2xl font-normal lg:hidden ${
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
                <a
                  href="#"
                  className={`text-2xl font-normal lg:hidden ${
                    selectedButton === "healthArticles"
                      ? "text-blue-600 underline"
                      : "text-[#AFAFAF]"
                  }`}
                  onClick={() => setSelectedButton("healthArticles")}
                >
                  Health Articles
                </a>
              </div>
              <div className="lg:flex flex-col gap-y-5 hidden">
                <a
                  href="#"
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
                <a
                  href="#"
                  className={`text-2xl font-normal ${
                    selectedButton === "healthArticles"
                      ? "text-blue-600 underline"
                      : "text-[#AFAFAF]"
                  }`}
                  onClick={() => setSelectedButton("healthArticles")}
                >
                  Health Articles
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
            Developed by{" "}
            <span className="underline">Gumbytes Technologies</span>
          </span>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Footer;
