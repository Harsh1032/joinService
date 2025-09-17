import React, { useState } from "react";
import Sidebar from "../PatientDashboard/Sidebar";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { CalendarDays } from "lucide-react";
import { ChevronUp, ChevronDown } from "lucide-react";
import Modal from "./Modal";

const ServiceProviderDashboard = ({ isMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = (event) => {
    event.stopPropagation(); // Prevent event from bubbling up
    setIsOpen((prev) => !prev);
  };

  console.log(isOpen);
  return (
    <div className="w-full min-h-screen relative bg-white">
      {isMenuOpen && (
        <>
          <Sidebar isMenuOpen={isMenuOpen} />
        </>
      )}
      <MaxWidthWrapper className="flex flex-col pt-10 gap-y-5 w-full">
        <div className="max-lg:overflow-x-auto flex max-lg:w-[90%] mx-auto">
          <div className="flex flex-col mb-5 max-lg:min-w-max">
            <div className="bg-[#DEECFF] px-10 items-center flex justify-between lg:h-[239px] h-[160px] mt-10 relative rounded-t-[14px] z-0 ">
              <div className="relative h-full flex items-end z-0">
                <img
                  src="image24.png"
                  alt="men"
                  className="lg:h-[300px] h-[200px] z-0"
                />
              </div>
              <div className="flex flex-col gap-y-2 max-w-[50%]">
                <span className="text-[#00429E] lg:text-2xl text-lg font-medium">
                  Hi Dr. Matt Barnes!
                </span>
                <p className="text-[#0349A9E3] font-normal lg:text-xl text-base">
                  Welcome to your service provider dashboard! Manage your
                  bookings, track appointments, and oversee income—all in one
                  place.
                </p>
              </div>
              <button className="bg-[#1D6BD7] text-white text-center px-3 py-1 rounded-[4px] max-lg:min-w-[100px] max-lg:max-h-[50px]">
                <span className="lg:text-xl text-base font-medium uppercase">
                  Here to help
                </span>
              </button>
            </div>
            <div className="flex items-center lg:gap-x-4 gap-x-2 justify-center rounded-b-[14px] bg-[#1D6BD7] border border-[#4D97FF] lg:py-3 py-2 ">
              <span className="font-medium lg:text-xl text-xs text-white">
                TRACK YOUR PATIENT AI STROKESMART PROGRESS
              </span>
              <button className="bg-[#4D97FF] rounded-[4px] py-2 px-3 w-fit text-center">
                <span className="font-medium lg:text-xl text-xs text-white">
                  VIEW SUMMARY
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col max-lg:items-center justify-between mt-5 ">
          <div className="lg:w-[47%] w-[90%] border-4 border-[#4D97FF] bg-[#DEECFF]  rounded-[14px] flex flex-col mb-5 overflow-hidden">
            <div className="flex items-center justify-center   bg-[#4D97FF] py-3 px-2 gap-x-4">
              <img
                src="/image25.png"
                alt="Health Summary"
                className="text-white lg:size-8 size-5"
              />
              <span className="font-medium lg:text-3xl text-xl text-white uppercase">
                Care Management
              </span>
            </div>
            <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#00429E] items-center justify-center">
              <ul className="square">
                <li className=" font-medium uppercase lg:text-2xl text-lg">
                  Patients list
                </li>
              </ul>
              <div className="relative group inline-block">
                {/* Question Mark Image */}
                <img
                  src="/image28.png"
                  alt="question mark"
                  className="size-5 cursor-pointer"
                />

                {/* Tooltip Content */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 lg:w-60 bg-[#DEECFF] text-gray-700 text-sm shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                  <h3 className="font-semibold text-[#00429E]">
                    Care Management
                  </h3>
                  <ul className="list-disc pl-5 text-[#0349A9E3]">
                    <li>
                      <b>Patient List</b> – Complete directory with quick
                      access.
                    </li>
                    <li>
                      <b>Patient Insights</b> – Condition history & vitals
                      tracking.
                    </li>
                    <li>
                      <b>Patient Care Collaboration</b> – Engage with
                      professionals & caregivers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#DEECFF] px-4 py-3 max-lg:space-y-2">
              <div className="flex justify-between ">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-sm w-full">
                  1. Jason Whitmore
                </span>
                <div className="flex space-x-3">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-sm font-normal">
                    11/01/2025
                  </span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-sm w-full">
                  2. Sophia Tran
                </span>
                <div className="flex space-x-3 items-center">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-sm font-normal">
                    19/01/2025
                  </span>
                </div>
              </div>
              <div className="flex justify-between ">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-sm w-full">
                  3. Malik Johnson
                </span>
                <div className="flex space-x-3 items-center">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-sm font-normal">
                    21/01/2025
                  </span>
                </div>
              </div>
              <div className="flex justify-between ">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-sm w-full">
                  4. Hannah Ruiz
                </span>
                <div className="flex space-x-3 items-center">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-sm font-normal">
                    28/01/2025
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#00429E] items-center justify-center">
              <ul className="square">
                <li className=" font-medium uppercase lg:text-2xl text-lg">
                  Patient Insights
                </li>
              </ul>
              <div className="relative group inline-block">
                {/* Question Mark Image */}
                <img
                  src="/image28.png"
                  alt="question mark"
                  className="size-5 cursor-pointer"
                />

                {/* Tooltip Content */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 lg:w-60 bg-[#DEECFF] text-gray-700 text-sm shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                  <h3 className="font-semibold text-[#00429E]">
                    Care Management
                  </h3>
                  <ul className="list-disc pl-5 text-[#0349A9E3]">
                    <li>
                      <b>Patient List</b> – Complete directory with quick
                      access.
                    </li>
                    <li>
                      <b>Patient Insights</b> – Condition history & vitals
                      tracking.
                    </li>
                    <li>
                      <b>Patient Care Collaboration</b> – Engage with
                      professionals & caregivers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#DEECFF] px-4 py-3 flex flex-col gap-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-sm w-full">
                  1. Jason Whitmore
                </span>
                <button
                  className="bg-[#4D97FF] py-1 lg:min-w-[210px] min-w-[150px] w-auto px-4 rounded-[4px] "
                  onClick={toggleMenu}
                >
                  <span className="text-white lg:text-xl text-sm font-medium">
                    VIEW INSIGHTS{" "}
                  </span>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-sm w-full">
                  2. Sophia Tran
                </span>
                <button
                  className="bg-[#4D97FF] py-1 lg:min-w-[210px] min-w-[150px] w-auto px-4 rounded-[4px] "
                  onClick={toggleMenu}
                >
                  <span className="text-white lg:text-xl text-sm font-medium">
                    VIEW INSIGHTS
                  </span>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-sm w-full">
                  3. Malik Johnson
                </span>
                <button
                  className="bg-[#4D97FF] py-1 lg:min-w-[210px] min-w-[150px] w-auto px-4 rounded-[4px] "
                  onClick={toggleMenu}
                >
                  <span className="text-white lg:text-xl text-sm font-medium">
                    VIEW INSIGHTS
                  </span>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-sm w-full">
                  4. Hannah Ruiz
                </span>
                <button
                  className="bg-[#4D97FF] py-1 lg:min-w-[210px] min-w-[150px] w-auto px-4 rounded-[4px] "
                  onClick={toggleMenu}
                >
                  <span className="text-white lg:text-xl text-sm font-medium">
                    VIEW INSIGHTS
                  </span>
                </button>
              </div>
            </div>
            <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#00429E] items-center justify-center">
              <ul className="square">
                <li className="font-medium uppercase lg:text-2xl text-sm">
                  Patient Care Collaboration
                </li>
              </ul>
              <div className="relative group inline-block">
                {/* Question Mark Image */}
                <img
                  src="/image28.png"
                  alt="question mark"
                  className="size-5 cursor-pointer"
                />

                {/* Tooltip Content */}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-40 lg:w-60 bg-[#DEECFF] text-gray-700 text-sm shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                  <h3 className="font-semibold text-[#00429E]">
                    Care Management
                  </h3>
                  <ul className="list-disc pl-5 text-[#0349A9E3]">
                    <li>
                      <b>Patient List</b> – Complete directory with quick
                      access.
                    </li>
                    <li>
                      <b>Patient Insights</b> – Condition history & vitals
                      tracking.
                    </li>
                    <li>
                      <b>Patient Care Collaboration</b> – Engage with
                      professionals & caregivers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#DEECFF] flex flex-col gap-y-4 px-4 py-3">
              <div className="flex justify-between ">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full">
                  1. Jason Whitmore
                </span>
                <ChevronUp className="text-[#0349A9E3] size-5 font-normal" />
              </div>
              <ul className="square lg:ml-8 ml-6 space-y-2 py-2">
                <li>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0349A9E3] font-medium lg:text-base  text-sm w-full">
                      Ms. Nurul Aini (Daughter)
                    </span>
                    <button className="bg-[#4D97FF] py-1 min-w-[140px] w-auto px-4 rounded-[4px]">
                      <span className="text-white text-sm font-medium">
                        CONTACT INFO
                      </span>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0349A9E3] font-medium lg:text-base  text-sm w-full">
                      Dr. Muhammad Samsudin
                    </span>
                    <button className="bg-[#4D97FF] py-1 min-w-[140px] w-auto px-4 rounded-[4px]">
                      <span className="text-white text-sm font-medium">
                        CONTACT INFO
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
              <div className="flex justify-between ">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full">
                  2. Sophia Tran
                </span>
                <ChevronDown className="text-[#0349A9E3] size-5 font-normal" />
              </div>
              <div className="flex justify-between ">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full">
                  3. Malik Johnson
                </span>
                <ChevronDown className="text-[#0349A9E3] size-5 font-normal" />
              </div>
              <div className="flex justify-between ">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full">
                  4. Hannah Ruiz
                </span>
                <ChevronDown className="text-[#0349A9E3] size-5 font-normal" />
              </div>
            </div>
          </div>
          <div className="lg:w-[47%] w-[90%] bg-[#DEECFF] border-4 border-[#4D97FF] rounded-[14px] flex flex-col mb-5 overflow-hidden">
            <div className="flex items-center justify-center   bg-[#4D97FF] py-3 px-2 gap-x-4">
              <img
                src="/image26.png"
                alt="Health Summary"
                className="text-white lg:size-8 size-5"
              />
              <span className="font-medium lg:text-3xl text-xl text-white uppercase">
                Practice Management
              </span>
            </div>
            <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#00429E] items-center justify-center">
              <ul className="square">
                <li className=" font-medium uppercase lg:text-2xl text-lg">
                  Bills and Invoices
                </li>
              </ul>{" "}
              <div className="relative group inline-block">
                {/* Question Mark Image */}
                <img
                  src="/image28.png"
                  alt="question mark"
                  className="size-5 cursor-pointer"
                />

                {/* Tooltip Content */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 lg:w-60 bg-[#DEECFF] text-gray-700 text-sm shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                  <h3 className="font-semibold text-[#00429E] mt-3">
                    Practice Management
                  </h3>
                  <ul className="list-disc pl-5 text-[#0349A9E3]">
                    <li>
                      <b>Billing & Invoices</b> – Revenue tracking & payments.
                    </li>
                    <li>
                      <b>Sales & Revenue</b> – Performance-based analytics.
                    </li>
                    <li>
                      <b>Marketing & Promotions</b> – Patient outreach &
                      referrals.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#DEECFF] px-4 py-3">
              <div className="flex justify-between">
                <div className="flex space-x-3 items-center">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-basefont-normal">
                    24/01/2025
                  </span>
                </div>
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base">
                  USD 201.20
                </span>
              </div>
              <div className="flex justify-between ">
                <div className="flex space-x-3 items-center">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-base font-normal">
                    29/01/2025
                  </span>
                </div>
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base">
                  USD 192.00
                </span>
              </div>
              <div className="flex justify-between ">
                <div className="flex space-x-3 items-center">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-base font-normal">
                    02/02/2025
                  </span>
                </div>
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base mr-[1.8%]">
                  USD 99.10
                </span>
              </div>
              <div className="flex justify-between ">
                <div className="flex space-x-3 items-center">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-base font-normal">
                    12/02/2025
                  </span>
                </div>
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base">
                  USD 231.80
                </span>
              </div>
            </div>
            <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#00429E] items-center justify-center">
              <ul className="square">
                <li className="font-medium uppercase lg:text-2xl text-lg">
                  Sales and Revenue
                </li>
              </ul>
              <div className="relative group inline-block">
                {/* Question Mark Image */}
                <img
                  src="/image28.png"
                  alt="question mark"
                  className="size-5 cursor-pointer"
                />

                {/* Tooltip Content */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 lg:w-60 bg-[#DEECFF] text-gray-700 text-sm shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                  <h3 className="font-semibold text-[#00429E] mt-3">
                    Practice Management
                  </h3>
                  <ul className="list-disc pl-5 text-[#0349A9E3]">
                    <li>
                      <b>Billing & Invoices</b> – Revenue tracking & payments.
                    </li>
                    <li>
                      <b>Sales & Revenue</b> – Performance-based analytics.
                    </li>
                    <li>
                      <b>Marketing & Promotions</b> – Patient outreach &
                      referrals.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#DEECFF] flex flex-col gap-y-2 px-4 py-3">
              <table className="w-full border-collapse flex-1">
                <thead>
                  <tr className="w-full">
                    <th className="text-left lg:text-xl text-base p-3 text-[#00429E] font-semibold">
                      {" "}
                      Month{" "}
                    </th>
                    <th className="text-left lg:text-xl text-base p-3 text-[#00429E] font-semibold">
                      {" "}
                      Sales{" "}
                    </th>
                    <th className="text-left lg:text-xl text-base p-3 text-[#00429E] font-semibold">
                      {" "}
                      Revenue
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-3 text-[#00429E] font-medium lg:text-lg text-sm">
                      1.January
                    </td>
                    <td className="p-3 text-[#00429E] font-medium lg:text-lg text-sm">
                      {" "}
                      USD 920.00{" "}
                    </td>
                    <td className="p-3 text-[#00429E] font-medium lg:text-lg text-sm">
                      {" "}
                      USD 790.00
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00429E] font-medium lg:text-lg text-sm">
                      February{" "}
                    </td>
                    <td className="p-3 text-[#00429E] font-medium lg:text-lg text-sm">
                      USD 1,900.00{" "}
                    </td>
                    <td className="p-3 text-[#00429E] font-medium lg:text-lg text-sm">
                      USD 1,800.00
                    </td>
                  </tr>
                  <tr>
                    <td className="p-3 text-[#00429E] font-medium lg:text-lg text-sm">
                      March{" "}
                    </td>
                    <td className="p-3 text-[#00429E] font-medium lg:text-lg text-sm">
                      USD 940.00{" "}
                    </td>
                    <td className="p-3 text-[#00429E] font-medium lg:text-lg text-sm">
                      USD 720.00
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#00429E] items-center justify-center">
              <ul className="square">
                <li className=" font-medium uppercase lg:text-2xl text-base">
                  Marketing & Promotions
                </li>
              </ul>
              <div className="relative group inline-block">
                {/* Question Mark Image */}
                <img
                  src="/image28.png"
                  alt="question mark"
                  className="size-5 cursor-pointer"
                />

                {/* Tooltip Content */}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 w-40 lg:w-60 bg-[#DEECFF] text-gray-700 text-sm shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                  <h3 className="font-semibold text-[#00429E] mt-3">
                    Practice Management
                  </h3>
                  <ul className="list-disc pl-5 text-[#0349A9E3]">
                    <li>
                      <b>Billing & Invoices</b> – Revenue tracking & payments.
                    </li>
                    <li>
                      <b>Sales & Revenue</b> – Performance-based analytics.
                    </li>
                    <li>
                      <b>Marketing & Promotions</b> – Patient outreach &
                      referrals.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#DEECFF] px-4 py-3 flex flex-col gap-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full">
                  1. January Sales Promotion
                </span>
                <button className="bg-[#4D97FF] py-1 lg:min-w-[180px] min-w-[150px]  w-auto px-4 rounded-[4px]">
                  <span className="text-white text-sm font-medium">
                    PROMOTION INFO
                  </span>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full">
                  2. CNY Promotion
                </span>
                <button className="bg-[#4D97FF] py-1 lg:min-w-[180px] min-w-[150px]  w-auto px-4 rounded-[4px]">
                  <span className="text-white text-sm font-medium">
                    PROMOTION INFO
                  </span>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full">
                  3. Eid Promotion
                </span>
                <button className="bg-[#4D97FF] py-1 lg:min-w-[180px] min-w-[150px]  w-auto px-4 rounded-[4px]">
                  <span className="text-white text-sm font-medium">
                    PROMOTION INFO
                  </span>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full">
                  4. End Year 30% Off
                </span>
                <button className="bg-[#4D97FF] py-1 lg:min-w-[180px] min-w-[150px]  w-auto px-4 rounded-[4px]">
                  <span className="text-white text-sm font-medium">
                    PROMOTION INFO
                  </span>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full">
                  5. Back to School Promotion
                </span>
                <button className="bg-[#4D97FF] py-1 lg:min-w-[180px] min-w-[150px]  w-auto px-4 rounded-[4px]">
                  <span className="text-white text-sm font-medium">
                    PROMOTION INFO
                  </span>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full">
                  6. Deepavali Promotion
                </span>
                <button className="bg-[#4D97FF] py-1 lg:min-w-[180px] min-w-[150px]  w-auto px-4 rounded-[4px]">
                  <span className="text-white text-sm font-medium">
                    PROMOTION INFO
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col max-lg:items-center justify-between mt-5 items-start">
          <div className="lg:w-[47%] w-[90%] border-4 border-[#4D97FF] bg-[#DEECFF]  rounded-[14px] flex flex-col mb-5 overflow-hidden">
            <div className="flex items-center justify-center   bg-[#4D97FF] py-3 px-2 gap-x-4">
              <img
                src="/image20.png"
                alt="Analytics and Insights"
                className="text-white lg:size-8 size-5"
              />
              <span className="font-medium lg:text-3xl text-xl text-white uppercase">
                Analytics and Insights
              </span>
            </div>
            <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#00429E] items-center justify-center">
              <ul className="square">
                <li className=" font-medium uppercase lg:text-2xl text-lg">
                  Practice Insights
                </li>
              </ul>
              <div className="relative group inline-block">
                {/* Question Mark Image */}
                <img
                  src="/image28.png"
                  alt="question mark"
                  className="size-5 cursor-pointer"
                />

                {/* Tooltip Content */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 lg:w-60 bg-[#DEECFF] text-gray-700 text-sm shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                  <h3 className="font-semibold text-[#00429E] mt-3">
                    Analytics & AI Insights
                  </h3>
                  <ul className="list-disc pl-5 text-[#0349A9E3]">
                    <li>
                      <b>Practice Insights</b> – Appointment volumes & referral
                      analysis.
                    </li>
                    <li>
                      <b>Patient Insights</b> – Population-level analytics.
                    </li>
                    <li>
                      <b>AI-Driven Care Plans</b> – Predictive alerts &
                      adjustments.
                    </li>
                    <li>
                      <b>Patient Feedback</b> – Surveys & improvement areas.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#DEECFF] space-y-2 px-4 py-3">
              <div className="flex flex-col space-y">
                <div className="flex justify-between items-center">
                  <span className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full">
                    Appointment Values
                  </span>
                  <span className="text-[#0349A9E3] lg:text-2xl text-lg font-bold mr-8">
                    232
                  </span>
                </div>
                <span className="text-[#0349A9E3] lg:text-base text-sm font-normal italic">
                  As of February 2025
                </span>
              </div>
              <div className="flex flex-col space-y">
                <div className="flex justify-between items-center">
                  <span className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full">
                    Referral Success Rates
                  </span>
                  <span className="text-[#0349A9E3] lg:text-2xl text-lg font-bold mr-8">
                    19
                  </span>
                </div>
                <span className="text-[#0349A9E3] lg:text-base text-sm font-normal italic">
                  As of February 2025
                </span>
              </div>
            </div>
            <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#00429E] items-center justify-center">
              <ul className="square">
                <li className=" font-medium uppercase lg:text-2xl text-lg">
                  Patient Insights
                </li>
              </ul>
              <div className="relative group inline-block">
                {/* Question Mark Image */}
                <img
                  src="/image28.png"
                  alt="question mark"
                  className="size-5 cursor-pointer"
                />

                {/* Tooltip Content */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 lg:w-60 bg-[#DEECFF] text-gray-700 text-sm shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                  <h3 className="font-semibold text-[#00429E] mt-3">
                    Analytics & AI Insights
                  </h3>
                  <ul className="list-disc pl-5 text-[#0349A9E3]">
                    <li>
                      <b>Practice Insights</b> – Appointment volumes & referral
                      analysis.
                    </li>
                    <li>
                      <b>Patient Insights</b> – Population-level analytics.
                    </li>
                    <li>
                      <b>AI-Driven Care Plans</b> – Predictive alerts &
                      adjustments.
                    </li>
                    <li>
                      <b>Patient Feedback</b> – Surveys & improvement areas.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#DEECFF] px-4 py-3 flex flex-col gap-y-2">
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-sm w-full">
                  1. Jason Whitmore
                </span>
                <button
                  className="bg-[#4D97FF] py-1 lg:min-w-[210px] min-w-[150px] w-auto px-4 rounded-[4px] "
                  onClick={toggleMenu}
                >
                  <span className="text-white lg:text-xl text-sm font-medium">
                    VIEW INSIGHTS{" "}
                  </span>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-sm w-full">
                  2. Sophia Tran
                </span>
                <button
                  className="bg-[#4D97FF] py-1 lg:min-w-[210px] min-w-[150px] w-auto px-4 rounded-[4px] "
                  onClick={toggleMenu}
                >
                  <span className="text-white lg:text-xl text-sm font-medium">
                    VIEW INSIGHTS
                  </span>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-sm w-full">
                  3. Malik Johnson
                </span>
                <button
                  className="bg-[#4D97FF] py-1 lg:min-w-[210px] min-w-[150px] w-auto px-4 rounded-[4px] "
                  onClick={toggleMenu}
                >
                  <span className="text-white lg:text-xl text-sm font-medium">
                    VIEW INSIGHTS
                  </span>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-sm w-full">
                  4. Hannah Ruiz
                </span>
                <button
                  className="bg-[#4D97FF] py-1 lg:min-w-[210px] min-w-[150px] w-auto px-4 rounded-[4px] "
                  onClick={toggleMenu}
                >
                  <span className="text-white lg:text-xl text-sm font-medium">
                    VIEW INSIGHTS
                  </span>
                </button>
              </div>
            </div>
            <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#00429E] items-center justify-center">
              <ul className="square">
                <li className="font-medium uppercase lg:text-2xl text-sm">
                  AI STROKESMART CARE PLAN
                </li>
              </ul>
              <div className="relative group inline-block">
                {/* Question Mark Image */}
                <img
                  src="/image28.png"
                  alt="question mark"
                  className="size-5 cursor-pointer"
                />

                {/* Tooltip Content */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 lg:w-60 bg-[#DEECFF] text-gray-700 text-sm shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                  <h3 className="font-semibold text-[#00429E] mt-3">
                    Analytics & AI Insights
                  </h3>
                  <ul className="list-disc pl-5 text-[#0349A9E3]">
                    <li>
                      <b>Practice Insights</b> – Appointment volumes & referral
                      analysis.
                    </li>
                    <li>
                      <b>Patient Insights</b> – Population-level analytics.
                    </li>
                    <li>
                      <b>AI-Driven Care Plans</b> – Predictive alerts &
                      adjustments.
                    </li>
                    <li>
                      <b>Patient Feedback</b> – Surveys & improvement areas.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <img src="/image23.png" alt="chart" />
            <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#00429E] items-center justify-center">
              <ul className="square">
                <li className="font-medium uppercase lg:text-2xl text-sm">
                  Patient Satisfaction & Feedback
                </li>
              </ul>
              <div className="relative group inline-block">
                {/* Question Mark Image */}
                <img
                  src="/image28.png"
                  alt="question mark"
                  className="size-5 cursor-pointer"
                />

                {/* Tooltip Content */}
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2  w-40 lg:w-60 bg-[#DEECFF] text-gray-700 text-sm shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                  <h3 className="font-semibold text-[#00429E] mt-3">
                    Analytics & AI Insights
                  </h3>
                  <ul className="list-disc pl-5 text-[#0349A9E3]">
                    <li>
                      <b>Practice Insights</b> – Appointment volumes & referral
                      analysis.
                    </li>
                    <li>
                      <b>Patient Insights</b> – Population-level analytics.
                    </li>
                    <li>
                      <b>AI-Driven Care Plans</b> – Predictive alerts &
                      adjustments.
                    </li>
                    <li>
                      <b>Patient Feedback</b> – Surveys & improvement areas.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#DEECFF] px-4 py-3 flex flex-col items-center gap-y-4">
              <h1 className="text-[#00429E] lg:text-5xl text-xl font-bold">
                4.9/5.0
              </h1>
              <span className="text-[#00429E] font-normal lg:text-xl text-base">
                Satisfaction Rate
              </span>
              <button className="bg-[#005EE2] rounded-[4px] lg:w-[55%] w-[80%] px-5 py-2">
                <span className="text-white lg:text-xl text-base font-medium">
                  View Detailed Summary
                </span>
              </button>
            </div>
          </div>
          <div className="lg:w-[47%] w-[90%] bg-[#DEECFF] border-4 border-[#4D97FF] rounded-[14px] flex flex-col mb-5 overflow-hidden">
            <div className="flex items-center justify-center   bg-[#4D97FF] py-3 px-2 gap-x-4">
              <img
                src="/image27.png"
                alt="Consultation and Referrals"
                className="text-white lg:size-8 size-5"
              />
              <span className="font-medium lg:text-3xl text-base text-white uppercase">
                Consultation and Referrals
              </span>
            </div>
            <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#00429E] items-center justify-center">
              <ul className="square">
                <li className=" font-medium uppercase lg:text-2xl text-lg">
                  Tele-Consultation
                </li>
              </ul>
              <div className="relative group inline-block">
                {/* Question Mark Image */}
                <img
                  src="/image28.png"
                  alt="question mark"
                  className="size-5 cursor-pointer"
                />

                {/* Tooltip Content */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 lg:w-60 bg-[#DEECFF] text-gray-700 text-sm shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                  <h3 className="font-semibold text-[#00429E] mt-3">
                    Consultations & Referrals
                  </h3>
                  <ul className="list-disc pl-5 text-[#0349A9E3]">
                    <li>
                      <b>Teleconsultation</b> – Virtual care via video.
                    </li>
                    <li>
                      <b>Face-to-Face Visits</b> – Efficient in-clinic
                      management.
                    </li>
                    <li>
                      <b>Referrals & Collaborations</b> – Seamless patient
                      handovers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#DEECFF] flex flex-col space-y-4 lg:px-4 px-2 py-3">
              <div className="flex justify-between">
                <div className="flex space-x-3 items-center">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-base font-normal">
                    24/01/2025
                  </span>
                </div>
                <button className="bg-[#4D97FF] py-1 min-w-[180px] w-auto px-4 rounded-[4px]">
                  <span className="text-white text-sm font-medium">
                    VIEW MEETING DETAILS
                  </span>
                </button>
              </div>
              <div className="flex justify-between ">
                <div className="flex space-x-3 items-center">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-base font-normal">
                    29/01/2025
                  </span>
                </div>
                <button className="bg-[#4D97FF] py-1 min-w-[180px] w-auto px-4 rounded-[4px]">
                  <span className="text-white text-sm font-medium">
                    VIEW MEETING DETAILS
                  </span>
                </button>
              </div>
              <div className="flex justify-between ">
                <div className="flex space-x-3 items-center">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-base font-normal">
                    02/02/2025
                  </span>
                </div>
                <button className="bg-[#4D97FF] py-1 min-w-[180px] w-auto px-4 rounded-[4px]">
                  <span className="text-white text-sm font-medium">
                    VIEW MEETING DETAILS
                  </span>
                </button>
              </div>
              <div className="flex justify-between ">
                <div className="flex space-x-3 items-center">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-base font-normal">
                    12/02/2025
                  </span>
                </div>
                <button className="bg-[#4D97FF] py-1 min-w-[180px] w-auto px-4 rounded-[4px]">
                  <span className="text-white text-sm font-medium">
                    VIEW MEETING DETAILS
                  </span>
                </button>
              </div>
            </div>
            <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#00429E] items-center justify-center">
              <ul className="square">
                <li className="font-medium uppercase lg:text-2xl text-lg">
                  Face-to-Face Visits
                </li>
              </ul>
              <div className="relative group inline-block">
                {/* Question Mark Image */}
                <img
                  src="/image28.png"
                  alt="question mark"
                  className="size-5 cursor-pointer"
                />

                {/* Tooltip Content */}
                <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 lg:w-60 bg-[#DEECFF] text-gray-700 text-sm shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                  <h3 className="font-semibold text-[#00429E] mt-3">
                    Consultations & Referrals
                  </h3>
                  <ul className="list-disc pl-5 text-[#0349A9E3]">
                    <li>
                      <b>Teleconsultation</b> – Virtual care via video.
                    </li>
                    <li>
                      <b>Face-to-Face Visits</b> – Efficient in-clinic
                      management.
                    </li>
                    <li>
                      <b>Referrals & Collaborations</b> – Seamless patient
                      handovers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#DEECFF] flex flex-col space-y-4 lg:px-4 px-2 py-3">
              <div className="flex justify-between">
                <div className="flex space-x-3 items-center">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-base  font-normal">
                    22/01/2025
                  </span>
                </div>
                <button className="bg-[#4D97FF] py-1 min-w-[180px] w-auto px-4 rounded-[4px]">
                  <span className="text-white text-sm font-medium">
                    VIEW VISIT DETAILS
                  </span>
                </button>
              </div>
              <div className="flex justify-between ">
                <div className="flex space-x-3 items-center">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-base  font-normal">
                    29/01/2025
                  </span>
                </div>
                <button className="bg-[#4D97FF] py-1 min-w-[180px] w-auto px-4 rounded-[4px]">
                  <span className="text-white text-sm font-medium">
                    VIEW VISIT DETAILS
                  </span>
                </button>
              </div>
              <div className="flex justify-between ">
                <div className="flex space-x-3 items-center">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-base  font-normal">
                    09/02/2025
                  </span>
                </div>
                <button className="bg-[#4D97FF] py-1 min-w-[180px] w-auto px-4 rounded-[4px]">
                  <span className="text-white text-sm font-medium">
                    VIEW VISIT DETAILS
                  </span>
                </button>
              </div>
              <div className="flex justify-between ">
                <div className="flex space-x-3 items-center">
                  <CalendarDays className="size-5 text-[#0349A9E3] font-normal" />
                  <span className="text-[#0349A9E3] lg:text-xl text-base  font-normal">
                    17/02/2025
                  </span>
                </div>
                <button className="bg-[#4D97FF] py-1 min-w-[180px] w-auto px-4 rounded-[4px]">
                  <span className="text-white text-sm font-medium">
                    VIEW VISIT DETAILS
                  </span>
                </button>
              </div>
            </div>
            <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#00429E] items-center justify-center">
              <ul className="square">
                <li className=" font-medium uppercase lg:text-2xl text-sm">
                  Referral and Collaboration
                </li>
              </ul>
              <div className="relative group inline-block">
                {/* Question Mark Image */}
                <img
                  src="/image28.png"
                  alt="question mark"
                  className="size-5 cursor-pointer"
                />

                {/* Tooltip Content */}
                <div className="absolute bottom-full mb-2  left-1/2 transform -translate-x-1/2  w-40 lg:w-60 bg-[#DEECFF] text-gray-700 text-sm shadow-lg rounded-lg p-4 hidden group-hover:block z-50">
                  <h3 className="font-semibold text-[#00429E] mt-3">
                    Consultations & Referrals
                  </h3>
                  <ul className="list-disc pl-5 text-[#0349A9E3]">
                    <li>
                      <b>Teleconsultation</b> – Virtual care via video.
                    </li>
                    <li>
                      <b>Face-to-Face Visits</b> – Efficient in-clinic
                      management.
                    </li>
                    <li>
                      <b>Referrals & Collaborations</b> – Seamless patient
                      handovers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-[#DEECFF] flex flex-col gap-y-4 lg:px-4 px-2 py-3">
              <div className="flex justify-between ">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base  w-full">
                  1. Jason Whitmore
                </span>
                <ChevronUp className="text-[#0349A9E3] size-5 font-normal" />
              </div>
              <ul className="square lg:ml-8 ml-6 space-y-2 py-2">
                <li>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0349A9E3] font-medium lg:text-base text-sm w-full">
                      Dr. Lim Chin
                    </span>
                    <button className="bg-[#4D97FF] py-1 min-w-[180px] w-auto px-4 rounded-[4px]">
                      <span className="text-white text-sm font-medium">
                        VIEW MORE DETAILS
                      </span>
                    </button>
                  </div>
                </li>
                <li>
                  <div className="flex justify-between items-center">
                    <span className="text-[#0349A9E3] font-medium lg:text-base text-sm w-full">
                      Dr. Aiman Haziq
                    </span>
                    <button className="bg-[#4D97FF] py-1 min-w-[180px]  w-auto px-4 rounded-[4px]">
                      <span className="text-white text-sm font-medium">
                        VIEW MORE DETAILS
                      </span>
                    </button>
                  </div>
                </li>
              </ul>
              <div className="flex justify-between ">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base  w-full">
                  2. Sophia Tran
                </span>
                <ChevronDown className="text-[#0349A9E3] size-5 font-normal" />
              </div>
              <div className="flex justify-between ">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base  w-full">
                  3. Malik Johnson
                </span>
                <ChevronDown className="text-[#0349A9E3] size-5 font-normal" />
              </div>
              <div className="flex justify-between ">
                <span className="text-[#0349A9E3] font-medium lg:text-xl text-base  w-full">
                  4. Hannah Ruiz
                </span>
                <ChevronDown className="text-[#0349A9E3] size-5 font-normal" />
              </div>
            </div>
          </div>
        </div>
        {/* Modal Overlay */}
        {isOpen && <Modal isOpen={isOpen} setIsOpen={setIsOpen} />}
      </MaxWidthWrapper>
    </div>
  );
};

export default ServiceProviderDashboard;
