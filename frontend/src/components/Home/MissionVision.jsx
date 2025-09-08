// src/components/MissionVision.jsx
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const MissionVision = () => {
  return (
    <section
      id="mission"
      className="scroll-mt-[88px] md:scroll-mt-[96px] py-10 md:py-14 bg-white"
    >
      <MaxWidthWrapper>
        {/* Eyebrow */}
        <div className="text-center">
          <span className="text-xs md:text-sm font-semibold tracking-wide text-[#2563EB] uppercase">
            Our Mission & Vision
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-2 text-center text-3xl md:text-5xl font-semibold leading-tight text-[#0B0B0B]">
          Quality, Integrity, and Experience
        </h2>

        {/* 3 Feature Cards */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* QUALITY */}
          <div className="rounded-xl bg-[#F8F8F8] border border-[#B7B7B7] p-6 md:p-8">
            <div className="flex items-center justify-center">
              <img
                src="/icon11.png"
                alt="Quality icon"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="mt-4 text-center text-xl md:text-2xl font-extrabold tracking-wide text-[#0B1B4A]">
              QUALITY
            </h3>
            <p className="mt-3 text-center text-sm md:text-base text-[#4B5563] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          {/* INTEGRITY */}
          <div className="rounded-xl bg-[#F8F8F8] border border-[#B7B7B7] p-6 md:p-8">
            <div className="flex items-center justify-center">
              <img
                src="/icon12.png"
                alt="Integrity icon"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="mt-4 text-center text-xl md:text-2xl font-extrabold tracking-wide text-[#0B1B4A]">
              INTEGRITY
            </h3>
            <p className="mt-3 text-center text-sm md:text-base text-[#4B5563] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>

          {/* EXPERIENCE */}
          <div className="rounded-xl bg-[#F8F8F8] border border-[#B7B7B7] p-6 md:p-8">
            <div className="flex items-center justify-center">
              <img
                src="/icon13.png"
                alt="Experience icon"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="mt-4 text-center text-xl md:text-2xl font-extrabold tracking-wide text-[#0B1B4A]">
              EXPERIENCE
            </h3>
            <p className="mt-3 text-center text-sm md:text-base text-[#4B5563] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam.
            </p>
          </div>
        </div>

        {/* Wide Mission & Vision Card */}
        <div className="mt-5 md:mt-6 rounded-xl bg-[#F8F8F8] border border-[#B7B7B7] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Image */}
            <div className="md:col-span-2">
              <img
                src="/mission.jpg" /* replace with your image path */
                alt="Mission & Vision"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="md:col-span-3 p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-extrabold tracking-wide text-[#0B1B4A]">
                MISSION & VISION
              </h3>
              <p className="mt-3 text-sm md:text-base text-[#4B5563] leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mt-3 text-sm md:text-base text-[#4B5563] leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default MissionVision;
