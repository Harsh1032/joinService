import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Select from "react-select";
import { io } from "socket.io-client";
import toast, { Toaster } from "react-hot-toast";

const baseurl = import.meta.env.VITE_BASE_URL;
// Establish Socket.io connection
const socket = io(baseurl, {
  transports: ["websocket"], // Force WebSocket (avoid polling)
  reconnection: true, // Auto-reconnect
  reconnectionAttempts: 5, // Number of times to retry before failing
  reconnectionDelay: 3000, // Wait before retrying
});

const options = [
  { value: "Telehealth", label: "Telehealth" },
  { value: "Private Clinic", label: "Private Clinic" },
];

// Assume this function fetches the list of applicants from an API
const fetchApplicants = async () => {
  // Replace this with your actual API call
  const response = await fetch(`${baseurl}/api/applicants`);
  return response.json();
};

// ✅ Fetch **directly added doctors** from API
const fetchDoctors = async () => {
  const response = await fetch(`${baseurl}/api/doctors/doctors`);
  const data = await response.json(); // ✅ Convert response to JSON

  return data.doctors || []; // ✅ Return only the array, fallback to [] if undefined
};

const fetchFilters = async () => {
  try {
    const response = await fetch(`${baseurl}/api/filters/filters`);
    const data = await response.json();
    return data.filters || []; // Return filters array, fallback to []
  } catch (error) {
    console.error("❌ Error fetching filters:", error);
    return [];
  }
};

const Services = () => {
  const [people, setPeople] = useState([]); // Combined list of applicants & doctors
  const [selectedPracticeType, setSelectedPracticeType] = useState(null);
  const [alliedHealthOptions, setAlliedHealthOptions] = useState([]);
  const [filters, setFilters] = useState([]); // ✅ Store filters in state
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [providerOptions, setProviderOptions] = useState([]);
  const [selectedProvider, setSelectedProvider] = useState(null);

  console.log(people);

  useEffect(() => {
    const getPeople = async () => {
      const data = await fetchApplicants();
      const approvedApplicants = data.applicants.filter(
        (applicant) => applicant.approvalStatus === "Approved"
      );
      const doctors = await fetchDoctors();
      // ✅ Merge both lists and update state
      setPeople([...approvedApplicants, ...doctors]);
    };

    getPeople();

    const getFilters = async () => {
      const allFilters = await fetchFilters();
      setFilters(allFilters); // ✅ Set fetched filters
    };

    getFilters(); // Fetch filters on component mount

    // ✅ Real-time updates via WebSockets
    socket.on("applicationUpdated", (updatedApplicant) => {
      if (updatedApplicant.approvalStatus === "Approved") {
        setPeople((prev) => {
          const isExisting = prev.some((p) => p._id === updatedApplicant._id);
          return isExisting ? prev : [...prev, updatedApplicant];
        });
        // toast.success(`Application approved: ${updatedApplicant.fullName}`);
      }
    });

    socket.on("newDoctor", (newDoctor) => {
      setPeople((prevPeople) => {
        const exists = prevPeople.some((p) => p._id === newDoctor._id);
        if (!exists) {
          console.log("🟢 Adding new doctor to the state:", newDoctor);
          return [...prevPeople, newDoctor]; // ✅ Ensures UI re-renders
        }
        return prevPeople;
      });
      // toast.success(`New doctor added: ${newDoctor.fullName}`);
    });

    // ✅ Listen for doctor updates
    socket.on("doctorUpdated", (updatedDoctor) => {
      // console.log("🟡 Doctor Updated in Real-Time:", updatedDoctor);
      setPeople((prevPeople) =>
        prevPeople.map((doc) =>
          doc._id === updatedDoctor._id ? updatedDoctor : doc
        )
      );
    });

    // ✅ Real-time doctor deletion handling
    socket.on("doctorDeleted", ({ doctorId }) => {
      // console.log("🔴 Doctor Deleted:", doctorId);
      setPeople((prevPeople) => prevPeople.filter((p) => p._id !== doctorId));
    });

    // ✅ Listen for real-time updates from WebSocket
    socket.on("newFilter", (newFilter) => {
      // console.log("📡 New Filter Received:", newFilter);
      setFilters((prevFilters) => [...prevFilters, newFilter]); // ✅ Add new filter
      // toast.success(`New filter added: ${newFilter.filterName}`);
    });

    socket.on("disconnect", () => {
      console.warn("WebSocket disconnected. Attempting to reconnect...");
    });

    return () => {
      socket.off("applicationUpdated");
      socket.off("newDoctor");
      socket.off("doctorUpdated"); // ✅ Unsubscribe from doctorUpdated
      socket.off("doctorDeleted"); // ✅ Unsubscribe from doctorDeleted
      socket.off("disconnect");
      socket.off("newFilter"); // ✅ Cleanup listener
    };
  }, []);

  // Create unique options for the filter dropdown
  useEffect(() => {
    const specializationOptions = [
      ...new Set(people.map((p) => p.specialization).filter(Boolean)),
    ].map((spec) => ({
      value: spec,
      label: spec,
    }));

    const filterOptions = filters.map((filter) => ({
      value: filter.filterName,
      label: filter.filterName,
    }));

    setAlliedHealthOptions([...filterOptions, ...specializationOptions]);
  }, [filters, people]);

  useEffect(() => {
    const providerOptions = [
      ...new Set(people.map((p) => p.providerType || "Primary Care Providers")),
    ].map((provider) => ({
      value: provider,
      label: provider,
    }));

    setProviderOptions(providerOptions);
  }, [people]);

  const handlePracticeTypeChange = (selectedOption) => {
    setSelectedPracticeType(selectedOption ? selectedOption.value : null);
  };

  const handleAlliedHealthChange = (selectedOption) => {
    setSelectedFilter(selectedOption ? selectedOption.value : null);
  };

  const handleProviderChange = (selectedOption) => {
    setSelectedProvider(selectedOption ? selectedOption.value : null);
  };

  const filteredPeople = people.filter((p) => {
    const matchesPracticeType = !selectedPracticeType || p.practiceType === selectedPracticeType;
    const matchesSpecialization = !selectedFilter || p.specialization === selectedFilter;
    const matchesProvider = !selectedProvider || p.providerType === selectedProvider || (!p.providerType && selectedProvider === "Primary Care Providers");
  
    // ✅ If all three filters are selected, return only those who match all conditions
    if (selectedPracticeType && selectedFilter && selectedProvider) {
      return matchesPracticeType && matchesSpecialization && matchesProvider;
    }
  
    // ✅ If two filters are selected, return those who match both conditions
    if (selectedPracticeType && selectedFilter) {
      return matchesPracticeType && matchesSpecialization;
    }
  
    if (selectedPracticeType && selectedProvider) {
      return matchesPracticeType && matchesProvider;
    }
  
    if (selectedFilter && selectedProvider) {
      return matchesSpecialization && matchesProvider;
    }
  
    // ✅ If only one filter is selected, return those who match that condition
    if (selectedPracticeType) {
      return matchesPracticeType;
    }
  
    if (selectedFilter) {
      return matchesSpecialization;
    }
  
    if (selectedProvider) {
      return matchesProvider;
    }
  
    // ✅ If no filter is applied, return all people
    return true;
  });
  
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
              options={providerOptions} // ✅ Dynamic provider options
              value={
                selectedProvider
                  ? { value: selectedProvider, label: selectedProvider }
                  : null
              }
              onChange={handleProviderChange} // ✅ Update selection
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
              options={alliedHealthOptions}
              value={
                selectedFilter
                  ? { value: selectedFilter, label: selectedFilter }
                  : null
              }
              onChange={handleAlliedHealthChange}
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
              value={
                selectedPracticeType
                  ? { value: selectedPracticeType, label: selectedPracticeType }
                  : null
              }
              onChange={handlePracticeTypeChange}
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
        <div className="flex lg:flex-row flex-col-reverse mt-5 items-center lg:space-x-5 w-full h-[800px] max-lg:min-h-[1040px]">
          <div className="lg:flex flex-col w-[45%] hidden gap-y-5 h-full overflow-y-scroll no-scrollbar self-start">
            {filteredPeople.length > 0 ? (
              filteredPeople.map((applicant, index) => (
                <div
                  key={index}
                  className="w-full h-[220px] px-4 py-2 rounded-sm bg-white border border-[#CCCCCC] flex justify-between items-center"
                >
                  <img
                    src={applicant.profilePhoto[0] || "/image5.png"}
                    alt="consultant image"
                    className="w-[30%] max-h-[185.6px] min-h-[185px]"
                  />
                  <div className="flex flex-col gap-y-2 w-[65%]">
                    <span className="text-black font-medium text-3xl">
                      {applicant.fullName || "John Doe LLC"}
                    </span>
                    <div className="flex gap-x-1">
                      <span className="text-[#858585] font-medium">
                        Provider Type:
                      </span>
                      <span className="font-normal text-[#858585AD]">
                        {applicant.providerType || "Primary Care Providers"}{" "}
                      </span>
                    </div>
                    <div className="flex gap-x-1">
                      <span className="text-[#858585] font-medium">
                        Service:
                      </span>
                      <span className="font-normal text-[#858585AD]">
                        {applicant.specialization || "Dentist, Dietician"}
                      </span>
                    </div>
                    <div className="flex gap-x-1">
                      <span className="text-[#858585] font-medium">
                        Consultation Scheduling:
                      </span>
                      <span className="font-normal text-[#858585AD]">
                        {applicant.practiceType || "Telehealth Consultation"}
                      </span>
                    </div>
                    <button className="bg-[#005EE2] border border-[#4D97FF] text-white rounded-md py-2">
                      <span className="font-medium text-xl">
                        Choose Service
                      </span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center mt-5">
                No applicants match the selected filter.
              </p>
            )}
          </div>
          <div className="lg:hidden flex-col w-[90%] flex gap-y-2 max-lg:min-h-[660px] overflow-y-scroll no-scrollbar justify-start">
            {filteredPeople.length > 0 ? (
              filteredPeople.map((applicant, index) => (
                <div
                  key={index}
                  className="w-full h-[220px] px-2 py-2 rounded-sm bg-white border border-[#CCCCCC]  gap-y-3flex flex-col justify-between"
                >
                  <div className="flex w-full justify-between">
                    <img
                      src={applicant.profilePhoto[0] || "/image5.png"}
                      alt="consultant image"
                      className="w-[40%] h-[145px]"
                    />
                    <div className="flex flex-col w-[58%]">
                      <span className="text-black font-medium text-lg">
                        {applicant.fullName || "John Doe LLC"}{" "}
                        {/* Replace with applicant's name */}
                      </span>
                      <div className=" w-full">
                        <span className="text-[#858585] font-medium text-[11px]">
                          Provider Type:
                        </span>{" "}
                        &nbsp;
                        <span className="font-normal text-[#858585AD] text-xs ">
                          {applicant.providerType || "Primary Care Providers"}{" "}
                        </span>
                      </div>
                      <div className="w-full">
                        <span className="text-[#858585] font-medium text-xs">
                          Service:
                        </span>
                        &nbsp;
                        <span className="font-normal text-[#858585AD] text-xs">
                          {applicant.specialization || " Dentist, Dietician"}
                        </span>
                      </div>
                      <div className="w-full">
                        <span className="text-[#858585] font-medium text-xs">
                          Consultation Scheduling:
                        </span>
                        &nbsp;
                        <span className="font-normal text-[#858585AD] text-xs">
                          {applicant.practiceType || "Telehealth Consultation"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="bg-[#005EE2] border border-[#4D97FF] text-white rounded-md py-1 mt-3 w-full">
                    <span className="font-medium text-lg">Choose Service</span>
                  </button>
                </div>
              ))
            ) : (
              <p className="text-gray-500 text-center mt-5">
                No applicants match the selected filter.
              </p>
            )}
          </div>
          <div className="lg:hidden flex items-start w-[90%]">
            <span className="lg:text-3xl text-xl text-black lg:hidden flex font-medium mt-8 mb-5">
              AVAILABLE SERVICES
            </span>
          </div>
          {/* <img src="/map.png" alt="map" className="lg:w-[55%] h-full w-[98%]" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.685052381312!2d101.6832174803171!3d3.138675048665258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc36248d3dc25d%3A0xb3dbd79d046232c1!2sHilton%20Kuala%20Lumpur!5e0!3m2!1sen!2smy!4v1644321122334"
            className="lg:w-[55%] lg:h-[100%] w-[90%] max-lg:min-h-[300px] lg:px-4"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </MaxWidthWrapper>
      <Toaster />
    </div>
  );
};

export default Services;
