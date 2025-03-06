import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Select from "react-select";
import { io } from "socket.io-client";


const baseurl = import.meta.env.VITE_BASE_URL;
// Establish Socket.io connection
const socket = io(baseurl, { transports: ["websocket"] });

const options = [
  { value: "provider1", label: "Provider 1" },
  { value: "provider2", label: "Provider 2" },
  { value: "provider3", label: "Provider 3" },
];

// Assume this function fetches the list of applicants from an API
const fetchApplicants = async () => {
  // Replace this with your actual API call
  const response = await fetch(`${baseurl}/api/applicants`);
  return response.json();
};

const Services = () => {
  
    const [applicants, setApplicants] = useState([]);

    useEffect(() => {
      const getApplicants = async () => {
        const data = await fetchApplicants();
        const approvedApplicants = data.applicants.filter(
          (applicant) => applicant.approvalStatus === "Approved"
        );
        setApplicants(approvedApplicants);
      };
  
      getApplicants();
  
      // Listen for real-time updates when an applicant is approved
      socket.on("applicationUpdated", async (updatedApplicant) => {
        if (updatedApplicant.approvalStatus === "Approved") {
          setApplicants((prevApplicants) => {
            // Check if applicant already exists, if not add it
            const isExisting = prevApplicants.some(
              (app) => app._id === updatedApplicant._id
            );
            return isExisting ? prevApplicants : [...prevApplicants, updatedApplicant];
          });
        }
      });
  
      return () => {
        socket.off("applicationUpdated");
      };
    }, []);

  return (
    <div className="w-full min-h-screen py-5">
      <h1 className="font-medium lg:text-6xl text-2xl my-10 w-full text-center">
        Search for Services
      </h1>
      <MaxWidthWrapper className="flex flex-col ">
        <div className="flex lg:flex-row flex-col items-center lg:justify-between w-full">
          <div className="flex flex-col gap-y-3 lg:w-[25%] w-[90%]">
            <label>Search for Provider</label>
            <Select
              options={options}
              isDisabled={true} // Disable the dropdown
              className="react-select"
              classNamePrefix="react-select"
              placeholder="- Choose Provider -"
              styles={{
                control: (provided) => ({
                  ...provided,
                  // Use Tailwind classes via `className`
                  width: "100%",
                  padding: "2px 4px 2px 4px",
                  borderRadius: "4px",
                  borderColor: "#CDCDCD",
                  backgroundColor: "transparent",
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: state.isSelected ? "#fff" : "#858585",
                  backgroundColor: state.isSelected ? "#3B82F6" : "#fff",
                  fontSize: "16px",
                  fontWeight: "normal",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#858585",
                }),
              }}
            />
          </div>
          <div className="flex flex-col gap-y-3 lg:w-[30%] w-[90%] max-lg:mt-5">
            <label>Filter by Allied Health Services</label>
            <Select
              options={options}
              isDisabled={true} // Disable the dropdown
              className="react-select"
              classNamePrefix="react-select"
              placeholder="- Filter Allied Health Services -"
              styles={{
                control: (provided) => ({
                  ...provided,
                  // Use Tailwind classes via `className`
                  width: "100%",
                  padding: "2px 4px 2px 4px",
                  borderRadius: "4px",
                  borderColor: "#CDCDCD",
                  backgroundColor: "transparent",
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: state.isSelected ? "#fff" : "#858585",
                  backgroundColor: state.isSelected ? "#3B82F6" : "#fff",
                  fontSize: "16px",
                  fontWeight: "normal",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#858585",
                }),
              }}
            />
          </div>
          <div className="flex flex-col gap-y-3 lg:w-[30%] w-[90%] max-lg:mt-5">
            <label>Consultation Scheduling</label>
            <Select
              options={options}
              isDisabled={true} // Disable the dropdown
              className="react-select"
              classNamePrefix="react-select"
              placeholder="- Choose Consultation Scheduling -"
              styles={{
                control: (provided) => ({
                  ...provided,
                  // Use Tailwind classes via `className`
                  width: "100%",
                  padding: "2px 4px 2px 4px",
                  borderRadius: "4px",
                  borderColor: "#CDCDCD",
                  backgroundColor: "transparent",
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: state.isSelected ? "#fff" : "#858585",
                  backgroundColor: state.isSelected ? "#3B82F6" : "#fff",
                  fontSize: "16px",
                  fontWeight: "normal",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#858585",
                }),
              }}
            />
          </div>
        </div>
        <span className="text-3xl text-black lg:flex hidden font-medium mt-8">
          AVAILABLE SERVICES
        </span>
        <div className="flex lg:flex-row flex-col-reverse max-lg:mt-5 items-center lg:space-x-5 w-full h-[800px] max-lg:min-h-[1040px]">
          <div className="lg:flex flex-col w-[45%] hidden mt-[1.9%] gap-y-5 max-h-[670px] overflow-y-scroll no-scrollbar">
            {applicants.map((applicant, index) => (
              <div
                key={index}
                className="w-full lg:h-[225px] h-[300px] px-4 py-2 rounded-sm bg-white border border-[#CCCCCC] flex justify-between"
              >
                <img
                  src={applicant.profilePhoto[0] || "/image5.png"}
                  alt="consultant image"
                  className="w-[30%]"
                />
                <div className="flex flex-col gap-y-2 w-[65%]">
                  <span className="text-black font-medium text-3xl">
                  {applicant.fullName || "John Doe LLC"} {/* Replace with applicant's name */}
                  </span>
                  <div className="flex gap-x-1">
                    <span className="text-[#858585] font-medium">
                      Provider Type:
                    </span>
                    <span className="font-normal text-[#858585]">
                      Primary Care Providers
                    </span>
                  </div>
                  <div className="flex gap-x-1">
                    <span className="text-[#858585] font-medium">Service:</span>
                    <span className="font-normal text-[#858585]">
                     {applicant.specialization || " Dentist, Dietician"}
                    </span>
                  </div>
                  <div className="flex gap-x-1">
                    <span className="text-[#858585] font-medium">
                      Consultation Scheduling:
                    </span>
                    <span className="font-normal text-[#858585]">                
                      {applicant.practiceType || "Telehealth Consultation"}
                    </span>
                  </div>
                  <button className="bg-[#005EE2] border border-[#4D97FF] text-white rounded-md py-2">
                    <span className="font-medium text-xl">Choose Service</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:hidden flex-col w-[90%] flex gap-y-2 max-lg:max-h-[660px] overflow-y-scroll no-scrollbar">
            {applicants.map((applicant, index) => (
              <div
                key={index}
                className="w-full h-[220px] px-4 py-2 rounded-sm bg-white border border-[#CCCCCC]  gap-y-3flex flex-col justify-between"
              >
                <div className="flex w-full justify-between">
                  <img
                  src={applicant.profilePhoto[0] || "/image5.png"}
                    alt="consultant image"
                    className="w-[46%] h-[140px]"
                  />
                  <div className="flex flex-col gap-y-2 w-[52%]">
                    <span className="text-black font-medium text-xl">
                      {applicant.fullName || "John Doe LLC"} {/* Replace with applicant's name */}
                    </span>
                    <div className="flex ">
                      <span className="text-[#858585] font-medium text-xs ">
                        Provider Type:
                      </span>
                      <span className="font-normal text-[#858585] text-xs">
                        Primary Care Providers
                      </span>
                    </div>
                    <div className="flex gap-x-1">
                      <span className="text-[#858585] font-medium text-xs">
                        Service:
                      </span>
                      <span className="font-normal text-[#858585] text-xs">
                      {applicant.specialization || " Dentist, Dietician"}
                      </span>
                    </div>
                    <div className="flex gap-x-1">
                      <span className="text-[#858585] font-medium text-xs">
                        Consultation Scheduling:
                      </span>
                      <span className="font-normal text-[#858585] text-xs">         
                      {applicant.practiceType || "Telehealth Consultation"}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="bg-[#005EE2] border border-[#4D97FF] text-white rounded-md py-1 mt-3 w-full">
                  <span className="font-medium text-lg">Choose Service</span>
                </button>
              </div>
            ))}
          </div>
          <div className="lg:hidden flex items-start w-[90%]">
            <span className="lg:text-3xl text-xl text-black lg:hidden flex font-medium mt-8 mb-5">
              AVAILABLE SERVICES
            </span>
          </div>
          {/* <img src="/map.png" alt="map" className="lg:w-[55%] h-full w-[98%]" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.685052381312!2d101.6832174803171!3d3.138675048665258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc36248d3dc25d%3A0xb3dbd79d046232c1!2sHilton%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1644321122334"
            className="lg:w-[55%] lg:h-[80%] w-[90%] max-lg:min-h-[300px]"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Services;
