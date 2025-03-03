import { useState, useEffect } from "react";

const Modal = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest(".modal-content")) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="modal-content bg-[#DEECFF] rounded-2xl pb-5 shadow-lg w-[80%] border-2 border-[#4D97FF] overflow-hidden max-h-[90vh] overflow-y-scroll no-scrollbar">
        <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#0349A9] items-center justify-center">
          <span className="font-medium uppercase lg:text-2xl text-lg">CARE TEAM</span>
        </div>
        <div className="flex flex-col gap-y-2 px-4 py-3">
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li>Primary Family Caregiver (Son/ Daughter)</li>
            </ul>
            <button className="bg-[#4D97FF] py-1 min-w-[100px] w-auto px-4 rounded-[4px]">
              <span className="text-white lg:text-xl text-base font-medium">Chat</span>
            </button>
          </div>
          <ul className="square ml-8 space-y-2">
            <li>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium text-base w-full">
                  Mr. Muhammad Aiman
                </span>
              </div>
            </li>
            <li>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium text-base w-full">
                  Ms. Amir Hamdi
                </span>
              </div>
            </li>
          </ul>
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li>Other Family Members</li>
            </ul>
            <button className="bg-[#4D97FF] py-1 min-w-[100px] w-auto px-4 rounded-[4px]">
              <span className="text-white lg:text-xl text-base font-medium">Chat</span>
            </button>
          </div>
          <ul className="square ml-8 space-y-2">
            <li>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium text-base w-full">
                  Ms. Nurizan
                </span>
              </div>
            </li>
            <li>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium text-base w-full">
                  Ms. Samsinah
                </span>
              </div>
            </li>
          </ul>
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li>Home Nurse / Hired Caregiver</li>
            </ul>
            <button className="bg-[#4D97FF] py-1 min-w-[100px] w-auto px-4 rounded-[4px]">
              <span className="text-white lg:text-xl text-base font-medium">Chat</span>
            </button>
          </div>
          <ul className="square ml-8 space-y-2">
            <li>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium text-base w-full">
                  Ms. Nurul Aini
                </span>
              </div>
            </li>
            <li>
              <div className="flex justify-between items-center">
                <span className="text-[#0349A9E3] font-medium text-base w-full">
                  Mr. Aiman NordinDr. Muhammad Samsudin
                </span>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#0349A9] items-center justify-center">
          <span className="font-medium uppercase lg:text-2xl text-lg text-center">
            Healthcare Professionals
          </span>
        </div>
        <div className="flex flex-col gap-y-2 px-4 py-3">
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li>Dr. Lee - GP</li>
            </ul>
            <button className="bg-[#4D97FF] py-1 min-w-[100px] w-auto px-4 rounded-[4px]">
              <span className="text-white lg:text-xl text-base font-medium">Chat</span>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li>Dr. Lim - Cardiologist</li>
            </ul>
            <button className="bg-[#4D97FF] py-1 min-w-[100px] w-auto px-4 rounded-[4px]">
              <span className="text-white lg:text-xl text-base font-medium"> Call</span>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li>Ms. Susan - Physiotherapist</li>
            </ul>
            <button className="bg-[#4D97FF] py-1 min-w-[100px] w-auto px-4 rounded-[4px]">
              <span className="text-white lg:text-xl text-base font-medium">Chat</span>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li>Ms. Amy - Dietitian</li>
            </ul>
            <button className="bg-[#4D97FF] py-1 min-w-[100px] w-auto px-4 rounded-[4px]">
              <span className="text-white lg:text-xl text-base font-medium">Call</span>
            </button>
          </div>
        </div>
        <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#0349A9] items-center justify-center">
          <span className="font-medium uppercase lg:text-2xl text-lg text-center">
            Allied Health & Support Services
          </span>
        </div>
        <div className="flex flex-col gap-y-2 px-4 py-3">
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li>Social Worker</li>
            </ul>
            <button className="bg-[#4D97FF] py-1 min-w-[100px] w-auto px-4 rounded-[4px]">
              <span className="text-white lg:text-xl text-base font-medium">Chat</span>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li>Transport Coordinator</li>
            </ul>
            <button className="bg-[#4D97FF] py-1 min-w-[100px] w-auto px-4 rounded-[4px]">
              <span className="text-white lg:text-xl text-base font-medium"> Call</span>
            </button>
          </div>
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li>Case Manager</li>
            </ul>
            <button className="bg-[#4D97FF] py-1 min-w-[100px] w-auto px-4 rounded-[4px]">
              <span className="text-white lg:text-xl text-base font-medium">Chat</span>
            </button>
          </div>
        </div>
        <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#0349A9] items-center justify-center">
          <span className="font-medium uppercase lg:text-2xl text-lg text-center">
            Personalized Health Plan (AI-Generated Insights)
          </span>
        </div>
        <div className="flex flex-col gap-y-2 px-4 py-3">
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li className=" space-x-2">
                <span className="font-bold">Health Goals:</span> Improve
                mobility, manage blood pressure
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li className=" space-x-2">
                <span className="font-bold">Medication Plan:</span> Adjust
                hypertension dosage
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li className=" space-x-2">
                <span className="font-bold">Counseling Schedule:</span>{" "}
                Physiotherapy 3x weekly
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li className=" space-x-2">
                <span className="font-bold">Diet Plan:</span> Reduce sodium,
                increase protein
              </li>
            </ul>
          </div>
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li className=" space-x-2">
                <span className="font-bold">Next Review:</span> March 15, 2025
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-x-4 w-full p-4 bg-[#CFE3FF] text-[#0349A9] items-center justify-center">
          <span className="font-medium uppercase lg:text-2xl text-lg">
            AI Smart Alerts
          </span>
        </div>
        <div className="flex flex-col items-center  gap-y-2 px-4 py-3">
          <div className="flex justify-between items-center">
            <ul className="text-[#0349A9E3] font-medium lg:text-xl text-base w-full square lg:pl-5 pl-2">
              <li className=" space-x-2">
                <span className="font-bold">Alert: </span>Patient missed 3 doses
                of medication. (Notification sent to GP & family)
              </li>
            </ul>
          </div>
          <button className="bg-[#005EE2] rounded-[4px] lg:w-[40%] w-full py-1 px-4 lg:ml-8">
            <span className="text-white font-medium lg:text-lg text-sm">
              Request a Change (For family & caregivers)
            </span>
          </button>
          <button className="bg-[#005EE2] rounded-[4px] lg:w-[40%] w-full py-1 px-4 lg:ml-8">
            <span className="text-white font-medium lg:text-lg text-sm">
              Acknowledge/Confirm (For caregivers & family)
            </span>
          </button>
          <button className="bg-[#005EE2] rounded-[4px] lg:w-[40%] w-full py-1 px-4 lg:ml-8">
            <span className="text-white font-medium lg:text-lg text-sm">
              Update Plan (For doctors & specialists)
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
