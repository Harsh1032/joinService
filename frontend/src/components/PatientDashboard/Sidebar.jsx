import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = ({isMenuOpen}) => {
    const [selectedButton, setSelectedButton] = useState("");
  return (
    <div
      className={` absolute border-2 border-[#8E8E8E] py-5 h-full lg:w-[25%] w-[80%] bg-white shadow-lg transform ${
        isMenuOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out sidebar z-50`}
    >
      <ul className="p-4 space-y-4">
        <li className={`flex gap-x-4 items-center ${selectedButton ? "bg-[#B9D6FF]" : "bg-transparent"}`} onClick={() => setSelectedButton("personalizeHealthPlan")}>
          <img src="/image8.png" alt="Personalize plan" className="size-6" />
          <Link to="/personalizePlan" className="text-lg font-normal text-[#838383]">
            Personalised Health Plan
          </Link>
        </li>
        <li className="flex gap-x-4 items-center">
          <img src="/image9.png" alt="Personalize plan" className="size-6" />
          <Link to="#" className="text-lg font-normal text-[#838383]">
            Talk to a Doctor
          </Link>
        </li>
        <li className="flex gap-x-4 items-center">
          <img src="/image10.png" alt="Personalize plan" className="size-6" />
          <Link to="#" className="text-lg font-normal text-[#838383]">
            Schedule an Appointment
          </Link>
        </li>
        <li className="flex gap-x-4 items-center">
          <img src="/image11.png" alt="Personalize plan" className="size-6" />
          <Link to="#" className="text-lg font-normal text-[#838383]">
            Never Miss a Dose
          </Link>
        </li>
        <li className="flex gap-x-4 items-center">
          <img src="/image12.png" alt="Personalize plan" className="size-6" />
          <Link to="#" className="text-lg font-normal text-[#838383]">
            E-Visit
          </Link>
        </li>
        <li className="flex gap-x-4 items-center">
          <img src="/image13.png" alt="Personalize plan" className="size-6" />
          <Link to="#" className="text-lg font-normal text-[#838383]">
            View Care Team
          </Link>
        </li>
        <li className="flex gap-x-4 items-center">
          <img src="/image14.png" alt="Personalize plan" className="size-6" />
          <Link to="#" className="text-lg font-normal text-[#838383]">
            Discover Trusted Experts
          </Link>
        </li>
        <li className="flex gap-x-4 items-center">
          <img src="/image15.png" alt="Personalize plan" className="size-6" />
          <Link to="#" className="text-lg font-normal text-[#838383]">
            Find Urgent Care
          </Link>
        </li>
        <li className="flex gap-x-4 items-center">
          <img src="/image16.png" alt="Personalize plan" className="size-6" />
          <Link to="#" className="text-lg font-normal text-[#838383]">
            Rides made Easy
          </Link>
        </li>
        <li className="flex gap-x-4 items-center">
          <img src="/image17.png" alt="Personalize plan" className="size-6" />
          <Link to="#" className="text-lg font-normal text-[#838383]">
            Your Health Knowledge Hub
          </Link>
        </li>
        <li className="flex gap-x-4 items-center">
          <img src="/image18.png" alt="Personalize plan" className="size-6" />
          <Link to="#" className="text-lg font-normal text-[#838383]">
            Top International Specialist
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
