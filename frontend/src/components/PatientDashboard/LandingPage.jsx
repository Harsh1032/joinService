import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { Clock4 } from "lucide-react";
import { CalendarDays } from "lucide-react";
import Sidebar from "./Sidebar";

const landingPage = ({ isMenuOpen }) => {
  return (
    <div className="w-full flex flex-col gap-y-5 relative">
      <div className="bg-[#D4E6FF] border-y border-[#00429E] min-h-[100px] h-auto flex items-center justify-between px-5">
        <div className="flex gap-x-5 items-center">
          <img
            src="/image6.png"
            alt="dollar"
            className="lg:w-[71px] lg:h-[71px] w-[50px] h-[50px] "
          />
          <div className="flex flex-col gap-y-2">
            <span className="text-[#00429E] lg:text-3xl text-xl font-medium">
              PRICE TRANSPARENCY
            </span>
            <p className="flex">
              <span className="font-normal lg:text-xl text-base text-[#00429E]">
                Worried about how much a procedure will cost?{" "}
                <span className="underline font-medium">
                  Request an estimate
                </span>
              </span>
            </p>
          </div>
        </div>
        <span className="text-[#00429E] font-medium size-4">X</span>
      </div>
      <MaxWidthWrapper className="flex flex-col gap-y-5 w-full">
        <div className="max-lg:overflow-x-auto flex max-lg:w-[90%] mx-auto">
          <div className="flex flex-col mb-5 max-lg:min-w-max">
          <div className="bg-[#DEECFF] px-10 items-center flex justify-between lg:h-[239px] h-[160px] mt-10 relative rounded-t-[14px] z-0 ">
              <div className="relative h-full flex items-end z-0">
                <img
                  src="image7.png"
                  alt="men"
                  className="lg:h-[300px] h-[200px] z-0"
                />
              </div>
            <div className="flex flex-col gap-y-2 max-w-[40%] lg:mr-[10%]">
              <span className="text-[#00429E] lg:text-2xl text-lg font-medium">
                Hi Finn McKenzie!
              </span>
              <p className="text-[#0349A9E3] font-normal lg:text-lg text-base">
                Welcome to your patient dashboard! Here, you can easily view
                your previous bookings, rebook appointments, and manage your
                healthcare schedule with just a few clicks.
              </p>
            </div>
              <button className="bg-[#1D6BD7] text-white text-center px-3 py-1 rounded-[4px] max-lg:min-w-[100px] max-lg:max-h-[50px]">
                <span className="lg:text-xl text-base font-medium uppercase">
                  Here to help
                </span>
              </button>
          </div>
          <div className="flex items-center lg:gap-x-4 gap-x-2 justify-center rounded-b-[14px] bg-[#1D6BD7] border border-[#4D97FF] lg:py-3 py-2">
            <span className="font-medium lg:text-xl text-xs text-white">
              TRACK YOUR AI STROKESMART PROGRESS
            </span>
            <button className="bg-[#4D97FF] rounded-[4px] py-2 px-3 w-fit text-center">
              <span className="font-medium lg:text-xl text-xs text-white">
                VIEW SUMMARY
              </span>
            </button>
          </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col max-lg:items-center lg:justify-between my-5">
          <div className=" lg:w-[47%] w-[90%] flex flex-col mb-5">
            <div className="flex items-center justify-center rounded-t-[14px] border-4 border-[#4D97FF] bg-[#4D97FF] py-3 px-2 gap-x-2">
              <span className="font-medium lg:text-3xl text-xl text-white">
                UPCOMING APPOINTMENT
              </span>
            </div>
            <div className="bg-[#CFE3FF] py-2 lg:px-4 px-2 flex flex-col gap-y-1 border-x-4 border-[#4D97FF]">
              <span className="text-[#00429E] lg:text-2xl text-lg font-medium">
                Emily Harrington (Physiotherapist)
              </span>
              <span className="font-normal lg:text-lg text-base text-[#0349A9E3]">
                1245 Pinebrook Avenue, Adelaide, 5017
                <br />
                Left Arm/ Left Leg Mobility Test based on StrokeSmart
              </span>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-2 items-center">
                  <Clock4 className="text-[#0349A9] size-5" />
                  <span className="text-[#0349A9E3] lg:text-lg text-xs font-normal">
                    8:00 AM
                  </span>
                  <CalendarDays className="text-[#0349A9] size-5" />
                  <span className="text-[#0349A9E3] lg:text-lg text-xs font-normal">
                    29/04/2025
                  </span>
                </div>
                <button className="bg-[#4D97FF] rounded-[4px] px-4 py-2">
                  <span className="text-white uppercase ">Book again</span>
                </button>
              </div>
            </div>
            <div className="bg-[#DEECFF] py-2 lg:px-4 px-2 flex flex-col gap-y-1 border-x-4 border-[#4D97FF]">
              <span className="text-[#00429E] lg:text-2xl text-lg font-medium">
                Dr. Marcus Delgado
              </span>
              <span className="font-normal lg:text-lg text-base text-[#0349A9E3]">
                7820 Willow Creek Drive, Adelaide, 5017
                <br />
                Blood Pressure Level Test
              </span>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-2 items-center">
                  <Clock4 className="text-[#0349A9] size-5" />
                  <span className="text-[#0349A9E3] lg:text-lg text-xs font-normal">
                    8:00 AM
                  </span>
                  <CalendarDays className="text-[#0349A9] size-5" />
                  <span className="text-[#0349A9E3] lg:text-lg text-xs font-normal">
                    29/04/2025
                  </span>
                </div>
                <button className="bg-[#4D97FF] rounded-[4px] px-4 py-2">
                  <span className="text-white uppercase ">Book again</span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#1D6BD7] rounded-b-[14px] py-3 px-2 gap-x-2 border-x-4 border-[#4D97FF]">
              <span className="font-medium lg:text-3xl text-xl text-white">
                VIEW PAST APPOINTMENTS
              </span>
            </div>
          </div>
          <div className=" lg:w-[47%] w-[90%] flex flex-col mb-5">
            <div className="flex items-center justify-center rounded-t-[14px] border-4 border-[#CB1111] bg-[#CB1111] py-3 px-2 gap-x-2">
              <span className="font-medium lg:text-3xl text-xl text-white">
                HEALTH RECORDS
              </span>
            </div>
            <div className="bg-[#FFDADA] py-2 px-4 flex flex-col gap-y-1 border-x-4 border-[#CB1111]">
              <span className="text-[#610101] lg:text-2xl text-lg font-medium">
                BLOOD & GLUCOSE LEVEL TEST
              </span>
              <span className="font-normal lg:text-lg text-base text-[#610101E3]">
                Severe, High Level, Prescribed Glucose Level, No Pills Prescribed
                <br />
                Dr. Olivia Bennett
              </span>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-2 items-center">
                  <Clock4 className="text-[#800000] size-5" />
                  <span className="text-[#610101E3] lg:text-lg text-xs font-normal">
                    8:00 AM
                  </span>
                  <CalendarDays className="text-[#800000] size-5" />
                  <span className="text-[#610101E3] lg:text-lg text-xs font-normal">
                    29/04/2025
                  </span>
                </div>

                <button className="bg-transaprent rounded-[4px] px-4 py-2 cursor-default">
                  <span className="text-[#FFDADA] uppercase">Book again</span>
                </button>
              </div>
            </div>
            <div className="bg-[#FFEBEB] py-2 px-4 flex flex-col gap-y-1 border-x-4 border-[#CB1111]">
              <span className="text-[#610101] lg:text-2xl text-lg font-medium">
                MOBILITY TEST
              </span>
              <span className="font-normal lg:text-lg text-base text-[#610101A9]">
                Very good progress achieved week 6 StrokeSmart therapy goal.
                <br />
                Dr. Nathaniel Rhodes
              </span>
              <div className="flex items-center justify-between">
                <div className="flex gap-x-2 items-center">
                  <Clock4 className="text-[#800000] size-5" />
                  <span className="text-[#610101E3] lg:text-lg text-xs font-normal">
                    8:00 AM
                  </span>
                  <CalendarDays className="text-[#800000] size-5" />
                  <span className="text-[#610101E3] lg:text-lg text-xs font-normal">
                    29/04/2025
                  </span>
                </div>
                <button className="bg-transaprent rounded-[4px] px-4 py-2 cursor-default">
                  <span className="text-[#FFEBEB] uppercase">Book again</span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#610101] rounded-b-[14px] py-3 px-2 gap-x-2 border-x-4 border-[#CB1111]">
              <span className="font-medium lg:text-3xl text-xl text-white">
                VIEW PAST APPOINTMENTS
              </span>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
      {isMenuOpen && (
        <>
          {/* Sidebar */}
          <Sidebar isMenuOpen={isMenuOpen} />
        </>
      )}
    </div>
  );
};

export default landingPage;
