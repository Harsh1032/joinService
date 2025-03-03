import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Hero = () => {
  return (
    <div id="aboutUs" className="w-full py-5 bg-[#D9D9D94F]">
      <MaxWidthWrapper>
        <div className="lg:flex hidden w-full justify-center">
          <div className="h-full w-[50%] flex justify-center pl-10">
            <img
              src="image2.png"
              alt="About us"
              className="max-h-[700px] h-auto"
            />
          </div>
          <div className="flex flex-col w-[50%] gap-y-4 py-[1%]">
            <button className="rounded-[4px] border w-[296px] h-[41px] text-center bg-[#4D97FF40] ">
              <span className="text-xl font-normal text-[#0050C1]">
                ABOUT CAREHUB.ASIA
              </span>
            </button>
            <span className="font-semibold text-5xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </span>
            <p className="font-normal text-2xl my-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="font-normal text-2xl">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident,
            </p>
            <div className="flex items-center h-[80px] p-4 border-[#4D97FF40] opacity-60 bg-[#4D97FF40] border rounded-lg">
              <div className="relative left-[-30px] w-10 h-10 flex items-center justify-center rounded-full bg-white border text-[#4D97FF] border-[#4D97FF] font-bold text-lg">
                <span className="text-black">1</span>
              </div>
              <span className="text-[#0050C1] text-3xl font-semibold">
                LOREM IPSUM DOLOR SIT AMET CONSEC
              </span>
            </div>

            {/* Second Item */}
            <div className="flex items-center h-[80px] p-4 border-[#4D97FF40] opacity-40 bg-[#4D97FF40] border rounded-lg">
              <div className="relative left-[-30px] w-10 h-10 flex items-center justify-center rounded-full bg-white border text-[#4D97FF] border-[#4D97FF] font-bold text-lg">
                <span className="text-black">2</span>
              </div>
              <span className="text-[#0050C1] text-3xl font-semibold">
                LOREM IPSUM DOLOR SIT AMET CONSEC
              </span>
            </div>

            {/* Third Item with Reflection Effect */}
            <div className="flex items-center h-[80px] p-4 border-[#4D97FF40] opacity-10 bg-[#4D97FF40] border rounded-lg">
              <div className="relative left-[-30px] w-10 h-10 flex items-center justify-center rounded-full bg-white border text-[#4D97FF] border-[#4D97FF] font-bold text-lg">
                <span className="text-black">3</span>
              </div>
              <span className="text-[#0050C1] text-3xl font-semibold">
                LOREM IPSUM DOLOR SIT AMET CONSEC
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mx-auto lg:hidden gap-y-4">
          <button className="rounded-[4px] border w-[148px] h-[30px] text-center bg-[#4D97FF40] border-[#0050C1]">
            <span className="text-xs font-normal text-[#0050C1]">
              ABOUT CAREHUB.ASIA
            </span>
          </button>
          <img src="image3.png" alt="About us" className="w-full" />
          <span className="font-medium text-base w-[90%] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </span>
          <p className="font-normal text-xs w-[90%] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <p className="font-normal text-xs w-[90%] text-center">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident,
          </p>

          <div className="flex items-center w-[90%] h-[60px] p-4 border-[#0050C1] opacity-60 bg-[#4D97FF40] border-2 rounded-lg">
            <div className="relative left-[-25px] w-6 h-6 flex items-center justify-center rounded-full bg-white border text-[#4D97FF] border-[#4D97FF] ">
              <span className="text-black font-normal text-sm">1</span>
            </div>
            <span className="text-[#0050C1] font-medium text-sm">
              LOREM IPSUM DOLOR SIT AMET CONSEC
            </span>
          </div>

          {/* Second Item */}
         <div className="flex items-center w-[90%] h-[60px] p-4 border-[#0050C1] opacity-40 bg-[#4D97FF40] border-2 rounded-lg">
            <div className="relative left-[-25px] w-6 h-6 flex items-center justify-center rounded-full bg-white border text-[#4D97FF] border-[#4D97FF] ">
              <span className="text-black font-normal text-sm">2</span>
            </div>
            <span className="text-[#0050C1] font-medium text-sm">
              LOREM IPSUM DOLOR SIT AMET CONSEC
            </span>
          </div>

          {/* Third Item with Reflection Effect */}
          <div className="flex items-center w-[90%] h-[60px] p-4 border-[#0050C1] opacity-10 bg-[#4D97FF40] border-2 rounded-lg">
            <div className="relative left-[-25px] w-6 h-6 flex items-center justify-center rounded-full bg-white border text-[#4D97FF] border-[#4D97FF] ">
              <span className="text-black font-normal text-sm">3</span>
            </div>
            <span className="text-[#0050C1] font-medium text-sm">
              LOREM IPSUM DOLOR SIT AMET CONSEC
            </span>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
