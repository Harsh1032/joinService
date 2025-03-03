import React from "react";
import Sidebar from "./Sidebar";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { CalendarDays } from "lucide-react";

const PersonalizeHealthPlan = ({ isMenuOpen }) => {
  return (
    <div className="w-full min-h-screen relative bg-white">
      {isMenuOpen && (
        <>
          <Sidebar isMenuOpen={isMenuOpen} />
        </>
      )}
      <MaxWidthWrapper className="w-full gap-y-5 py-10 flex flex-col relative">
        <h1 className="lg:text-5xl text-2xl text-black mx-auto font-medium">
          Your Personalized Health Plan
        </h1>
        <span className="text-[#000000AD] font-normal lg:text-xl text-xs mx-auto">
          Designed to support your unique health needs and goals
        </span>
        <div className="flex lg:flex-row flex-col max-lg:items-center lg:justify-between mt-5 ">
          <div className=" lg:w-[47%] w-[90%] border-4 border-[#4D97FF] rounded-[14px]  flex flex-col mb-5 overflow-hidden">
            <div className="flex items-center justify-center bg-[#4D97FF] py-3 px-2 gap-x-4">
              <img
                src="/image19.png"
                alt="Health Summary"
                className="text-white lg:size-8 size-5"
              />
              <span className="font-medium lg:text-3xl text-xl text-white uppercase">
                Health Summary
              </span>
            </div>
            <h3 className="w-full bg-[#DEECFF] text-[#00429E] font-medium p-4 lg:text-2xl text-lg">
              KNOWN CONDITIONS
            </h3>
            <span className="text-[#0349A9E3] font-medium px-4 py-3 bg-[#FFFFFFA3] border-y-[#DBDBDB] border-y lg:text-xl text-base w-full">
              Diabetes, Hypertension
            </span>
            <h3 className="w-full bg-[#DEECFF] text-[#00429E] font-medium p-4 lg:text-2xl text-lg">
              Current Medications
            </h3>
            <span className="text-[#0349A9E3] font-medium px-4 py-3 bg-[#FFFFFFA3] border-y-[#DBDBDB] border-y lg:text-xl text-base w-full">
              Diabetes, Hypertension
            </span>
            <span className="text-[#0349A9E3] font-medium px-4 py-3 bg-[#FFFFFFA3] border-t-[#DBDBDB] border-t lg:text-xl text-base w-full">
              Amlodipine (5mg, once daily)
            </span>
          </div>
          <div className=" lg:w-[47%] w-[90%] border-4 border-[#4D97FF] rounded-[14px]  flex flex-col mb-5 overflow-hidden">
            <div className="flex items-center justify-center bg-[#4D97FF] py-3 px-2 gap-x-4">
              <img
                src="/image20.png"
                alt="Health Goals Overview"
                className="text-white lg:size-8 size-5"
              />
              <span className="font-medium lg:text-3xl text-xl text-white uppercase">
                Health Goals Overview
              </span>
            </div>
            <h3 className="w-full bg-[#DEECFF] text-[#00429E] font-medium p-4 lg:text-2xl text-lg">
              Short-term Goals:
            </h3>
            <span className="text-[#0349A9E3] font-medium px-4 py-3 bg-[#FFFFFFA3] border-y-[#DBDBDB] border-y lg:text-xl text-base w-full">
              Lower blood pressure to 120/80 mmHg.
            </span>
            <span className="text-[#0349A9E3] font-medium px-4 py-3 bg-[#FFFFFFA3] border-y-[#DBDBDB] border-y lg:text-xl text-base w-full">
              Reduce fasting blood sugar levels to 100 mg/dL.
            </span>
            <h3 className="w-full bg-[#DEECFF] text-[#00429E] font-medium p-4 lg:text-2xl text-lg">
              Current Medications
            </h3>
            <span className="text-[#0349A9E3] font-medium px-4 py-3 bg-[#FFFFFFA3] border-y-[#DBDBDB] border-y lg:text-xl text-base w-full">
              Maintain a healthy BMI of 22
            </span>
            <span className="text-[#0349A9E3] font-medium px-4 py-3 bg-[#FFFFFFA3] border-t-[#DBDBDB] border-t lg:text-xl text-base w-full">
              Build a consistent 5-day exercise routine per week
            </span>
          </div>
        </div>
        <div className="flex lg:justify-between max-lg:mx-auto border-4 border-[#4D97FF] rounded-[14px] flex-col lg:w-full w-[90%] overflow-hidden">
          <div className="flex items-center justify-center text-center bg-[#4D97FF] py-3 px-2 lg:gap-x-4 gap-x-2">
            <img
              src="/image21.png"
              alt="Actionable Recommendations"
              className="text-white lg:size-8 size-5"
            />
            <span className="font-medium lg:text-3xl text-base text-white uppercase">
              Actionable Recommendations
            </span>
          </div>
          <h3 className="w-full bg-[#DEECFF] text-[#00429E] font-medium p-4 lg:text-2xl text-lg">
            Lifestyle Changes
          </h3>
          <span className="text-[#0349A9E3] font-medium px-4 py-3 bg-[#FFFFFFA3] border-y-[#DBDBDB] border-y lg:text-xl text-base w-full">
            Daily Exercise Plan: Walk for 30 minutes every morning.
          </span>
          <span className="text-[#0349A9E3] font-medium px-4 py-3 bg-[#FFFFFFA3] border-y-[#DBDBDB] border-y lg:text-xl text-base w-full">
            Dietary Suggestion: Incorporate more leafy greens and reduce sodium
            intake.
          </span>
          <h3 className="w-full bg-[#DEECFF] text-[#00429E] font-medium p-4 lg:text-2xl text-lg">
            Medication Adherence
          </h3>
          <span className="text-[#0349A9E3] font-medium px-4 py-3 bg-[#FFFFFFA3] border-y-[#DBDBDB] border-y lg:text-xl text-base w-full">
            Take Metformin (500mg) after meals, twice daily.
          </span>
          <h3 className="w-full bg-[#DEECFF] text-[#00429E] font-medium p-4 lg:text-2xl text-lg">
            Health Monitoring
          </h3>
          <span className="text-[#0349A9E3] font-medium px-4 py-3 bg-[#FFFFFFA3] border-y-[#DBDBDB] border-y lg:text-xl text-base w-full">
            Track blood sugar levels every morning before breakfast.
          </span>
        </div>
        <div className="flex lg:justify-between max-lg:mx-auto border-4 border-[#424242] rounded-[14px] flex-col lg:w-full w-[90%] overflow-hidden">
          <div className="flex items-center justify-center text-center bg-[#424242] py-3 px-2 lg:gap-x-4 gap-x-2">
            <img
              src="/image22.png"
              alt="Actionable Recommendations"
              className="text-white lg:size-8 size-5"
            />
            <span className="font-medium lg:text-3xl text-xs text-white uppercase">
              Upcoming Appointments & Reminders
            </span>
          </div>
          <h3 className="w-full bg-[#EBEBEB] text-[#434343] font-medium p-4 lg:text-2xl text-lg">
            Upcoming Appointments
          </h3>
          <div className="flex justify-between px-4 py-3 bg-[#FFFFFFA3] border-y-[#DBDBDB] border-y w-full items-center">
            <span className="text-[#434343E3] font-medium lg:text-xl text-sm">
              Consultation with Dr. Lee
            </span>
            <div className="flex space-x-3 items-center">
              <CalendarDays className="size-5 text-[#434343E3] " />
              <span className="text-[#434343E3] lg:text-xl text-basel font-medium">
                15 Feb 2025
              </span>
            </div>
          </div>
          <h3 className="w-full bg-[#EBEBEB] text-[#434343] font-medium p-4 lg:text-2xl text-lg">
            Medication Refill Dates
          </h3>
          <div className="flex justify-between px-4 py-3 bg-[#FFFFFFA3] border-y-[#DBDBDB] border-y w-full items-center">
            <span className="text-[#434343E3] font-medium lg:text-xl text-base">
              Refill Metformin
            </span>
            <div className="flex space-x-3 items-center">
              <CalendarDays className="size-5 text-[#434343E3] " />
              <span className="text-[#434343E3] lg:text-xl text-base font-medium">
                10 Feb 2025
              </span>
            </div>
          </div>
          <h3 className="w-full bg-[#EBEBEB] text-[#434343] font-medium p-4 lg:text-2xl text-lg">
            Health Screenings
          </h3>
          <div className="flex justify-between px-4 py-3 bg-[#FFFFFFA3] border-y-[#DBDBDB] border-y w-full items-center">
            <span className="text-[#434343E3] font-medium lg:text-xl text-base">
              Cholesterol test due
            </span>
            <div className="flex space-x-3 items-center">
              <CalendarDays className="size-5 text-[#434343E3] " />
              <span className="text-[#434343E3] lg:text-xl text-base font-medium">
                01 Mar 2025
              </span>
            </div>
          </div>
          <h3 className="w-full bg-[#EBEBEB] text-[#434343] font-medium p-4 lg:text-2xl text-lg">
            Patient Care Collaboration
          </h3>
        </div>
        <div className="flex lg:flex-row flex-col items-center justify-between w-full">
          <div className="lg:w-[47%] w-[90%]  border-4 border-[#4D97FF] rounded-[14px] flex flex-col mb-5 overflow-hidden">
            <div className="flex items-center justify-center   bg-[#4D97FF] py-3 px-2 gap-x-4">
              <img
                src="/image20.png"
                alt="Health Goals Overview"
                className="text-white lg:size-8 size-5"
              />
              <span className="font-medium lg:text-3xl text-xl text-white uppercase">
                blood sugar AND SUGAR
              </span>
            </div>
            <img
              src="/image23.png"
              alt="Health Summary"
              className="w-full object-contain"
            />
          </div>
          <div className=" lg:w-[47%] w-[90%] max-lg:mx-auto border-4 border-[#4D97FF] rounded-[14px] flex flex-col mb-5 overflow-hidden">
            <div className="flex items-center justify-center   bg-[#4D97FF] py-3 px-2 gap-x-4">
              <img
                src="/image20.png"
                alt="Health Goals Overview"
                className="text-white lg:size-8 size-5"
              />
              <span className="font-medium lg:text-3xl text-xl text-white uppercase">
                weight loss AND EXERCISE
              </span>
            </div>
            <table className="w-full border-collapse flex-1">
              {/* Table Head */}
              <thead>
                <tr className="bg-[#DEECFF]  text-[#434343E3] lg:text-lg text-[13px] font-bold">
                  <th className="p-3 border-r text-left border-[#A7A7A7]">
                    DATE
                  </th>
                  <th className="p-3 border-r text-left border-[#A7A7A7]">
                    WEIGHT
                  </th>
                  <th className="p-3 border-r text-left border-[#A7A7A7]">
                    EXERCISE HOURS
                  </th>
                </tr>
              </thead>
              <tbody className="h-full">
                <tr className="bg-[#CFE3FF] text-[#434343E3]">
                  <td className="p-3 border-r text-left border-[#A7A7A7] border-y border-y-[#D3D3D3]">
                    20/01/2025
                  </td>
                  <td className="p-3 border-r text-left border-[#A7A7A7] border-y border-y-[#D3D3D3]">
                    70KG
                  </td>
                  <td className="p-3 border-r text-left border-[#A7A7A7] border-y border-y-[#D3D3D3]">
                    7 HOURS 30 MINUTES
                  </td>
                </tr>
                <tr className="bg-[#DEECFF] text-[#434343E3] ">
                  <td className="p-3 border-r text-left border-[#A7A7A7] border-y border-y-[#D3D3D3]">
                    20/01/2025
                  </td>
                  <td className="p-3 border-r text-left border-[#A7A7A7] border-y border-y-[#D3D3D3]">
                    70KG
                  </td>
                  <td className="p-3 border-r text-left border-[#A7A7A7] border-y border-y-[#D3D3D3]">
                    7 HOURS 30 MINUTES
                  </td>
                </tr>
                <tr className="bg-[#CFE3FF] text-[#434343E3]">
                  <td className="p-3 border-r text-left border-[#A7A7A7] border-y border-y-[#D3D3D3]">
                    20/01/2025
                  </td>
                  <td className="p-3 border-r text-left border-[#A7A7A7] border-y border-y-[#D3D3D3]">
                    70KG
                  </td>
                  <td className="p-3 border-r text-left border-[#A7A7A7] border-y border-y-[#D3D3D3]">
                    7 HOURS 30 MINUTES
                  </td>
                </tr>
                <tr className="bg-[#DEECFF] text-[#434343E3]">
                  <td className="p-3 border-r text-left border-[#A7A7A7] border-y border-y-[#D3D3D3]">
                    20/01/2025
                  </td>
                  <td className="p-3 border-r text-left border-[#A7A7A7] border-y border-y-[#D3D3D3]">
                    70KG
                  </td>
                  <td className="p-3 border-r text-left border-[#A7A7A7] border-y border-y-[#D3D3D3]">
                    7 HOURS 30 MINUTES
                  </td>
                </tr>
                <tr className="bg-[#CFE3FF] text-[#434343E3] h-full">
                  <td className="p-3 border-r text-left border-[#A7A7A7] border-y border-y-[#D3D3D3] align-top">
                    20/01/2025
                  </td>
                  <td className="p-3 border-r text-left border-[#A7A7A7] border-y border-y-[#D3D3D3] align-top">
                    70KG
                  </td>
                  <td className="p-3 border-r text-left border-[#A7A7A7] border-y border-y-[#D3D3D3] align-top">
                    7 HOURS 30 MINUTES
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <button className="bg-[#005EE2] mx-auto rounded-[4px] lg:w-[27%] w-[70%] px-4 py-2 text-center">
          <span className="font-medium text-lg text-white">
            Book a Teleconsultation
          </span>
        </button>
        <button className="bg-[#005EE2] mx-auto rounded-[4px] lg:w-[27%] w-[70%]  px-4 py-2 text-center">
          <span className="font-medium text-lg text-white">Update My Plan</span>
        </button>
        <button className="bg-[#005EE2] mx-auto rounded-[4px] lg:w-[27%] w-[70%]  px-4 py-2 text-center">
          <span className="font-medium text-lg text-white">
            View Health Resources
          </span>
        </button>
      </MaxWidthWrapper>
    </div>
  );
};

export default PersonalizeHealthPlan;
