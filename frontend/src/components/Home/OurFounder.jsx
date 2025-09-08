// src/components/OurFounder.jsx
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const OurFounder = () => {
  return (
    <section
      id="founder"
      className="scroll-mt-[88px] md:scroll-mt-[96px] py-10 md:py-16 bg-white"
    >
      <MaxWidthWrapper>
        {/* Title */}
        <h2 className="text-center text-3xl md:text-5xl font-semibold leading-tight">
          The Mind Behind the Mission
        </h2>

        {/* Card */}
        <div className="mt-8 md:mt-12 rounded-2xl border border-[#B7B7B7] bg-[#F8F8F8] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-10 p-6 md:p-10">
            {/* Photo */}
            <figure className="md:col-span-5">
              <div className="rounded-xl overflow-hidden md:h-[480px] lg:h-[520px]">
                <img
                  src="/founder.jpg" /* replace with your path */
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </figure>

            {/* Copy */}
            <div className="md:col-span-7 flex flex-col gap-6 justify-center">
              <div className="max-w-[62ch]">
                <h3 className="text-[#0B1B4A] font-extrabold text-lg md:text-xl tracking-normal">
                  LOREM CONTENT 1
                </h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed text-black/80">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <div className="max-w-[62ch]">
                <h3 className="text-[#0B1B4A] font-extrabold text-lg md:text-xl tracking-normal">
                  LOREM CONTENT 2
                </h3>
                <p className="mt-2 text-sm md:text-base leading-relaxed text-black/80">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>

              <p className="max-w-[62ch] text-sm md:text-base leading-relaxed text-black/80">
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

export default OurFounder;
