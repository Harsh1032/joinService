import React, { useState, useRef, useEffect } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { CloudUpload, Loader2, X } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";
import { io } from "socket.io-client";

const baseurl = import.meta.env.VITE_BASE_URL;
// Ensure a single socket connection (outside component to prevent multiple connections)
const socket = io(baseurl, {
  transports: ["websocket", "polling"],
  withCredentials: true, // Ensure proper CORS handling
});

const options = [
  { value: "Telehealth", label: "Telehealth" },
  { value: "Private Clinic", label: "Private Clinic" },
];

const AdminDshboard = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]); // ✅ Store doctors
  const [loading, setLoading] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null); // ✅ Track the selected doctor
  const [isEditing, setIsEditing] = useState(false); // ✅ Track form mode (Add or Edit)
  const [filterName, setFilterName] = useState("");
  const [filterLoading, setFilterLoading] = useState(false);

  // State to manage form fields and files
  const [formData, setFormData] = useState({
    fullName: "",
    providerType: "",
    specialization: "",
    practiceType: "",
  });

  const [profilePhoto, setProfilePhoto] = useState({ file: null, progress: 0 });

  const profilePhotoInputRef = useRef(null);
  // ✅ Fetch doctors from API and update state
  const fetchDoctors = async () => {
    try {
      const response = await fetch(`${baseurl}/api/doctors/doctors`);
      const data = await response.json();
      setDoctors(data.doctors || []);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    }
  };

  const handleFilterSubmit = async (e) => {
    e.preventDefault();
    
    if (!filterName.trim()) {
      toast.error("Filter name cannot be empty!");
      return;
    }

    try {
      const response = await axios.post(`${baseurl}/api/filters/filters`, {
        filterName,
      });

      if (response.data.success) {
        toast.success("Filter Added Successfully!");
        
        // Emit event for real-time updates
        socket.emit("newFilter", response.data.filter);

        // Clear input field
        setFilterName("");
      } else {
        toast.error("Failed to add filter.");
      }
    } catch (error) {
      console.error("❌ Error Adding Filter:", error);
      toast.error("Error adding filter.");
    }
  };

  // Handle input change for text fields
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle file selection
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Reset progress to 0 when a new file is selected
    setProfilePhoto({ file, progress: 0 });

    // Simulate file upload progress
    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      setProfilePhoto((prev) => ({ ...prev, progress }));

      if (progress === 100) clearInterval(interval);
    }, 500); // Simulate progress every 500ms
  };

  // Progress bar component
  const ProgressBar = ({ progress }) => (
    <div className="relative w-full h-2 bg-gray-200 rounded-full mt-2">
      <div
        className="h-full bg-blue-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );

  // Remove the selected file
  const removeFile = () => {
    setProfilePhoto({ file: null, progress: 0 });

    // Reset input field
    if (profilePhotoInputRef.current) {
      profilePhotoInputRef.current.value = "";
    }
  };

  useEffect(() => {
    fetchDoctors(); // Initial Fetch

    socket.on("connect", () => {
      console.log("Connected to WebSocket:", socket.id);
    });

    socket.on("disconnect", () => {
      console.log("WebSocket Disconnected!");
    });

    socket.on("newDoctor", (newDoctor) => {
      console.log("New Doctor received in real-time:", newDoctor);
      setDoctors((prevDoctors) => [newDoctor, ...prevDoctors]); // Add at the top
    });

    socket.on("doctorDeleted", ({ doctorId }) => {
      console.log("Doctor Deleted:", doctorId);
      setDoctors((prevDoctors) =>
        prevDoctors.filter((doc) => doc._id !== doctorId)
      );
    });

    socket.on("doctorUpdated", (updatedDoctor) => {
      setDoctors((prevDoctors) =>
        prevDoctors.map((doc) =>
          doc._id === updatedDoctor._id ? updatedDoctor : doc
        )
      );
    });

    return () => {
      socket.off("newDoctor");
      socket.off("doctorDeleted");
      socket.off("doctorUpdated");
    };
  }, []);

  // ✅ Delete doctor function
  const handleDelete = async (doctorId) => {
    // const confirmDelete = window.confirm(
    //   "Are you sure you want to delete this doctor?"
    // );
    // if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${baseurl}/api/doctors/delete/${doctorId}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();
      if (data.success) {
        setDoctors((prevDoctors) =>
          prevDoctors.filter((doc) => doc._id !== doctorId)
        );
      } else {
        alert("Failed to delete doctor.");
      }
    } catch (error) {
      console.error("Error deleting doctor:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = new FormData();
    form.append("fullName", formData.fullName);
    form.append("providerType", formData.providerType);
    form.append("specialization", formData.specialization);
    form.append("practiceType", formData.practiceType);
    if (profilePhoto.file) form.append("profilePhoto", profilePhoto.file);

    console.log("🚀 Sending Update Request:", {
      method: isEditing ? "PUT" : "POST",
      url: isEditing
        ? `${baseurl}/api/doctors/update/${selectedDoctor._id}`
        : `${baseurl}/api/doctors/doctors`,
      formData: Object.fromEntries(form.entries()), // ✅ Convert FormData to Object for Debugging
    });

    try {
      const response = await axios({
        method: isEditing ? "PUT" : "POST",
        url: isEditing
          ? `${baseurl}/api/doctors/update/${selectedDoctor._id}`
          : `${baseurl}/api/doctors/doctors`,
        data: form,
        headers: { "Content-Type": "multipart/form-data" }, // ✅ Ensure Correct Header
      });

      if (response.data.success) {
        toast.success(
          isEditing
            ? "Doctor Updated Successfully!"
            : "Doctor Added Successfully!"
        );
        resetFormState();
        resetFileState();
        if (isEditing) {
          socket.emit("doctorUpdated", response.data.doctor);
          setIsEditing(false);
        } else {
          socket.emit("newDoctor", response.data.doctor);
        }
      } else {
        toast.error("Failed to save doctor.");
      }
    } catch (error) {
      console.error("❌ Error Sending Update Request:", error);
      toast.error("Error saving doctor.");
    }

    setLoading(false);
  };

  // Reset form data
  const resetFormState = () => {
    setFormData({
      fullName: "",
      providerType: "",
      specialization: "",
      practiceType: "",
    });
    setSelectedDoctor(null);
    setIsEditing(false);
  };

  // Reset file states
  const resetFileState = () => {
    setProfilePhoto({ file: null, progress: 0 });
    if (profilePhotoInputRef.current) {
      profilePhotoInputRef.current.value = "";
    }
  };

  return (
    <div className="w-full min-h-screen bg-white ">
      <MaxWidthWrapper className="w-full gap-y-5 py-10 flex flex-col relative">
        <h1 className="lg:text-5xl text-2xl text-black mx-auto font-medium">
          Admin Dashboard
        </h1>
        <span className="text-[#000000AD] font-normal lg:text-xl text-lg mx-auto text-center">
          Manage your service provider profiles, applications, system settings,
          and <br /> security all in one place with our intuitive Admin
          Dashboard.
        </span>
        <div className=" flex lg:flex-row flex-col w-full max-lg:space-y-4 items-center lg:justify-between">
          <div className=" lg:max-h-[100.6px] flex items-center lg:w-[24%] w-[90%] bg-[#DEECFF] border-[1.5px] border-[#4D97FF]  rounded-md py-3 px-5 gap-x-4">
            <img
              src="/image29.png"
              alt="docotrs"
              className=" rounded-full bg-[#4D97FF] w-[75px] h-[75px]"
            />

            <div className="flex flex-col justify-center">
              <span className="text-[#0349A9E3] font-normal lg:text-xl text-lg">
                Total Active Doctors
              </span>
              <span className="text-[#0349A9E3] font-medium lg:text-3xl text-xl">
                XXX
              </span>
            </div>
          </div>
          <div
            className="cursor-pointer lg:max-h-[100.6px] flex items-center lg:w-[24%] w-[90%] bg-[#FBFFA9] border-[1.5px] border-[#9CA500]  rounded-md py-3 px-5 gap-x-4"
            onClick={() => navigate("/adminRejectApplication")}
          >
            <img
              src="/image30.png"
              alt="docotrs"
              className=" rounded-full bg-[#A9B100] w-[75px] h-[75px]"
            />

            <div className="flex flex-col justify-center">
              <span className="text-[#656A00E3] font-normal lg:text-xl text-lg">
                Pending Applications
              </span>
              <span className="text-[#656A00E3] font-medium lg:text-3xl text-xl">
                XXX
              </span>
            </div>
          </div>
          <div className=" lg:max-h-[100.6px] flex items-center  lg:w-[24%] w-[90%] bg-[#FFB6B8] border-[1.5px] border-[#FF0004]  rounded-md py-3 px-5 gap-x-4">
            <div className="w-[75px] h-[75px] flex items-center justify-center rounded-full bg-[#B30003] ">
              <img
                src="/image31.png"
                alt="docotrs"
                className=" w-[65px] h-[65px]"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-[#870002E3] font-normal lg:text-xl text-lg">
                Rejected Applications
              </span>
              <span className="text-[#870002E3] font-medium lg:text-3xl text-xl">
                XXX
              </span>
            </div>
          </div>
          <div className=" lg:max-h-[100.6px] flex items-center lg:w-[24%] w-[90%] bg-[#FFB6B8] border-[1.5px] border-[#FF0004]  rounded-md py-3 px-5 gap-x-4">
            <img
              src="/image32.png"
              alt="docotrs"
              className=" rounded-full bg-[#B30003] w-[75px] h-[75px]"
            />

            <div className="flex flex-col justify-center">
              <span className="text-[#870002E3] font-normal lg:text-xl text-lg">
                System Alerts
              </span>
              <span className="text-[#870002E3] font-medium lg:text-2xl text-xl">
                New Compliance Issues, etc.
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between border-4 border-[#4D97FF] rounded-[14px] flex-col max-lg:mx-auto lg:w-full w-[90%] overflow-hidden">
          <div className="flex items-center justify-center bg-[#4D97FF] py-3 px-2 gap-x-4">
            <span className="font-medium text-center lg:text-3xl text-xl text-white uppercase">
              Manage Service Provider Profiles
            </span>
          </div>
          <div className="bg-transparent w-full py-3 lg:px-5 px-2 flex items-center justify-between">
            <span className="text-[#00429E] font-medium  lg:text-2xl text-lg">
              Search & Filter Doctors/COUNSELOR
            </span>
            <button className="bg-[#005EE2] rounded-[4px] py-1 lg:px-4 px-2 min-w-[91.8px] lg:min-w-[150px]">
              <span className="text-white lg:text-lg text-base font-normal lg:font-medium">
                View More
              </span>
            </button>
          </div>
          <div className="bg-[#DEECFF] w-full py-3 lg:px-5 px-2 flex  items-center justify-between">
            <span className="text-[#00429E] font-medium  lg:text-2xl text-lg">
              Edit Profile Details
            </span>
            <button className="bg-[#005EE2] rounded-[4px] py-1 lg:px-4 px-2 min-w-[80px] lg:min-w-[150px]">
              <span className="text-white lg:text-lg text-base font-normal lg:font-medium">
                View More
              </span>
            </button>
          </div>
          <div className="bg-transparent w-full py-3 lg:px-5 px-2 flex items-center  justify-between">
            <span className="text-[#00429E] font-medium  lg:text-2xl text-lg">
              Assign Specializations
            </span>
            <button className="bg-[#005EE2] rounded-[4px] py-1 lg:px-4 px-2 min-w-[80px] lg:min-w-[150px]">
              <span className="text-white lg:text-lg text-base font-normal lg:font-medium">
                View More
              </span>
            </button>
          </div>
          <div className="bg-[#DEECFF] w-full py-3 lg:px-5 px-2 flex  items-center justify-between">
            <span className="text-[#00429E] font-medium  lg:text-2xl text-lg">
              Update Availability
            </span>
            <button className="bg-[#005EE2] rounded-[4px] py-1 lg:px-4 px-2 min-w-[80px] lg:min-w-[150px]">
              <span className="text-white lg:text-lg text-base font-normal lg:font-medium">
                View More
              </span>
            </button>
          </div>
          <div className="bg-transparent w-full py-3 lg:px-5 px-2 flex items-center  justify-between">
            <span className="text-[#00429E] font-medium  lg:text-2xl text-lg">
              Deactivate/Remove Profile
            </span>
            <button className="bg-[#005EE2] rounded-[4px] py-1 lg:px-4 px-2 min-w-[80px] lg:min-w-[150px]">
              <span className="text-white lg:text-lg text-base font-normal lg:font-medium">
                View More
              </span>
            </button>
          </div>
        </div>
        <div className="flex justify-between border-4 border-[#4D97FF] rounded-[14px] flex-col lg:w-full w-[90%] max-lg:mx-auto overflow-hidden">
          <div className="flex items-center justify-center bg-[#4D97FF] py-3 px-2 gap-x-4">
            <span className="font-medium lg:text-3xl text-center text-xl text-white uppercase">
              Manage Filters & Dynamic Settings
            </span>
          </div>
          <div className="bg-transparent w-full py-3 lg:px-5 px-2 flex items-center justify-between">
            <span className="text-[#00429E] font-medium lg:text-2xl text-base">
              Add/Edit Specialization Filters
            </span>
            <button className="bg-[#005EE2] rounded-[4px] lg:py-1 lg:px-4 px-2 min-w-[130px] max-lg:h-[30px] text-center lg:min-w-[150px]">
              <span className="text-white text-lg font-medium">View More</span>
            </button>
          </div>
          <div className="bg-[#DEECFF] w-full py-3 lg:px-5 px-2 flex  items-center justify-between">
            <span className="text-[#00429E] font-medium lg:text-2xl text-base">
              Manage Search & Recommendation Algorithms
            </span>
            <button className="bg-[#005EE2] rounded-[4px] lg:py-1 lg:px-4 px-2 min-w-[130px] max-lg:h-[30px] text-center lg:min-w-[150px]">
              <span className="text-white text-lg font-medium">View More</span>
            </button>
          </div>
          <div className="bg-transparent w-full py-3 lg:px-5 px-2 flex items-center justify-between">
            <span className="text-[#00429E] font-medium lg:text-2xl text-base">
              Set Consultation Fee Rangeslg:
            </span>
            <button className="bg-[#005EE2] rounded-[4px] lg:py-1 lg:px-4 px-2 min-w-[130px] max-lg:h-[30px] text-center lg:min-w-[150px]">
              <span className="text-white text-lg font-medium">View More</span>
            </button>
          </div>
          <div className="bg-[#DEECFF] w-full py-3 lg:px-5 px-2 flex  items-center justify-between">
            <span className="text-[#00429E] font-medium lg:text-2xl text-base">
              Adjust AI Matching Preferences
            </span>
            <button className="bg-[#005EE2] rounded-[4px] lg:py-1 lg:px-4 px-2 min-w-[130px] max-lg:h-[30px] text-center lg:min-w-[150px]">
              <span className="text-white text-lg font-medium">View More</span>
            </button>
          </div>
        </div>
        <div className="flex w-full lg:flex-row  flex-col max-lg:space-y-5 max-lg:items-center  lg:justify-between mt-5 lg:items-start">
          <form
            onSubmit={handleSubmit}
            className=" lg:w-[47%] w-[90%] border-4 border-[#4D97FF] bg-[#DEECFF] rounded-[14px] flex flex-col lg:mb-5 overflow-hidden"
          >
            <div className="flex items-center justify-center   bg-[#4D97FF] py-3 px-2 gap-x-4">
              <span className="font-medium lg:text-3xl text-center text-xl text-white uppercase">
                {isEditing ? "Update Doctor" : "Add New Doctor"}
              </span>
            </div>
            <div className="w-full bg-[#CFE3FF] p-3 flex items-center justify-center">
              <ul className="square">
                <li>
                  <span className="text-[#0349A9E3] font-medium lg:text-2xl text-xl">
                    Doctor Name
                  </span>
                </li>
              </ul>
            </div>
            <input
              type="text"
              placeholder="Enter Name Here"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="placeholder:text-[#0000006B] lg:placeholder:text-xl placeholder:text-base px-2  font-normal py-2 lg:px-5 outline-none"
            />
            <div className="w-full bg-[#CFE3FF] p-3 flex items-center justify-center">
              <ul className="square">
                <li>
                  <span className="text-[#0349A9E3] font-medium lg:text-2xl text-xl">
                    Provider Type
                  </span>
                </li>
              </ul>
            </div>
            <input
              type="text"
              placeholder="Enter Provider Here"
              name="providerType"
              value={formData.providerType}
              onChange={handleInputChange}
              className="placeholder:text-[#0000006B] lg:placeholder:text-xl placeholder:text-base px-2 font-normal py-2 lg:px-5 outline-none"
            />
            <div className="w-full bg-[#CFE3FF] p-3 flex items-center justify-center">
              <ul className="square">
                <li>
                  <span className="text-[#0349A9E3] font-medium lg:text-2xl text-xl">
                    Service Offered
                  </span>
                </li>
              </ul>
            </div>
            <input
              type="text"
              placeholder="Enter Service Offered Here and Click Enter"
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              className="placeholder:text-[#0000006B] lg:placeholder:text-xl placeholder:text-base px-2 font-normal py-2 lg:px-5 outline-none"
            />
            <div className="w-full bg-[#CFE3FF] p-3 flex items-center justify-center">
              <ul className="square">
                <li>
                  <span className="text-[#0349A9E3] font-medium lg:text-2xl text-xl">
                    Consultation Scheduling
                  </span>
                </li>
              </ul>
            </div>
            <Select
              options={options}
              className="react-select"
              classNamePrefix="react-select"
              placeholder="- Choose Consultation Scheduling -"
              value={options.find(
                (option) => option.value === formData.practiceType
              )}
              onChange={(selectedOption) =>
                setFormData({ ...formData, practiceType: selectedOption.value })
              }
              styles={{
                control: (provided) => ({
                  ...provided,
                  width: "100%",
                  padding: "2px 4px 2px 4px",
                  borderRadius: "0px",
                  // borderColor: "",
                  backgroundColor: "#fff",
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

            <div className="w-full bg-[#CFE3FF] p-3 flex items-center justify-center">
              <ul className="square">
                <li>
                  <span className="text-[#0349A9E3] font-medium lg:text-2xl text-xl">
                    UPLOAd IMAGE
                  </span>
                </li>
              </ul>
            </div>
            <div
              className="flex flex-col items-center justify-center gap-y-2 w-full bg-white min-h-[150px]"
              onClick={() => profilePhotoInputRef.current.click()}
            >
              <input
                type="file"
                name="profilePhoto"
                ref={profilePhotoInputRef}
                onChange={handleFileChange}
                className="hidden"
                required
              />
              {/* Conditional Rendering */}
              {!profilePhoto.file ? (
                // Show default icon and text if no file is selected
                <>
                  <CloudUpload className="text-[#858585] size-8" />
                  <span className="text-[#858585AD] text-lg">
                    Click to Upload (Max Size 20 MB)
                  </span>
                </>
              ) : profilePhoto.progress < 100 ? (
                // Show progress bar if file is being uploaded
                <div className="w-[20%] flex flex-col items-center justify-center">
                  <span className="text-[#000000AD] text-lg">
                    {profilePhoto.file.name}
                  </span>
                  <ProgressBar progress={profilePhoto.progress} />
                </div>
              ) : (
                // Show file name and checkmark if upload is complete
                <div className="flex items-center gap-2">
                  <span className="text-[#000000AD] text-lg">
                    {profilePhoto.file.name}
                  </span>
                  <span className="text-green-500 text-lg">✔</span>
                  {/* Green checkmark */}
                </div>
              )}
            </div>
            {profilePhoto.file && profilePhoto.progress === 100 && (
              <div className="flex items-center px-5 py-2 rounded-[4px] justify-between bg-[#E6E6E6] border border-[#CDCDCD]">
                <span className="text-[#000000AD] text-lg font-medium">
                  {profilePhoto.file.name}
                </span>
                <button onClick={() => removeFile("medicalLicense")}>
                  <X className="text-[#000000AD] size-6 cursor-pointer" />
                </button>
              </div>
            )}

            <button
              type="submit"
              className="bg-blue-500 text-white p-2 w-full mt-5"
            >
              {loading
                ? "Saving..."
                : isEditing
                ? "UPDATE DOCTOR"
                : "ADD DOCTOR"}
            </button>
          </form>
          <form
            onSubmit={handleFilterSubmit}
            className=" lg:w-[47%] w-[90%] bg-[#DEECFF] border-4 border-[#4D97FF] rounded-[14px] flex flex-col lg:mb-5 overflow-hidden"
          >
            <div className="flex items-center justify-center bg-[#4D97FF] py-3 px-2 gap-x-4">
              <span className="font-medium lg:text-3xl text-center text-xl text-white uppercase">
                MANAGE FILTERS
              </span>
            </div>
            <div className="w-full bg-[#CFE3FF] p-3 flex items-center justify-center">
              <ul className="square">
                <li>
                  <span className="text-[#0349A9E3] font-medium lg:text-2xl text-xl">
                    Service Offered
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white w-full flex flex-col lg:py-5 lg:px-5 p-2  space-y-4">
              <input
                type="text"
                value={filterName}
                onChange={(e) => setFilterName(e.target.value)}
                placeholder="Enter New Filter Here and Click Enter"
                className="placeholder:text-[#0000006B] lg:placeholder:text-xl placeholder:text-base font-normal outline-none"
              />
              {/* <button className="bg-[#DFDFDF] w-fit flex space-x-3 px-4 py-1 rounded-[3px] border border-[#B6B6B6]">
                <span className="text-[#0000006B] text-base font-normal">
                  X
                </span>
                <span className="text-[#0000006B] text-base font-normal">
                  On Call GP 24/7
                </span>
              </button>
              <button className="bg-[#DFDFDF] w-fit flex space-x-3  px-4 py-1 rounded-[3px] border border-[#B6B6B6]">
                <span className="text-[#0000006B] text-base font-normal">
                  X
                </span>
                <span className="text-[#0000006B] text-base font-normal">
                  Pain Management
                </span>
              </button>
              <button className="bg-[#DFDFDF] w-fit flex space-x-3  px-4 py-1 rounded-[3px] border border-[#B6B6B6]">
                <span className="text-[#0000006B] text-base font-normal">
                  X
                </span>
                <span className="text-[#0000006B] text-base font-normal">
                  Continence management
                </span>
              </button> */}
            </div>

            <button type="submit" className="bg-[#1D6BD7] p-3">
              <span className="text-white font-medium lg:text-xl text-lg flex items-center justify-center">
                {filterLoading ? <Loader2 className="size-4 animate-spin text-white"/> : "SAVE CHANGES"}
              </span>
            </button>
          </form>
        </div>
        <div className="flex justify-between border-4 border-[#4D97FF] rounded-[14px] flex-col lg:w-full w-[90%] max-lg:mx-auto overflow-hidden">
          <div className="flex items-center justify-center bg-[#4D97FF] py-3 px-2 gap-x-4">
            <span className="font-medium lg:text-3xl text-center text-xl text-white uppercase">
              MANAge existing doctors
            </span>
          </div>
          {/* ✅ Dynamically Render Doctors (with Alternating Row Colors) */}
          {doctors.length > 0 ? (
            doctors.map((doctor, index) => (
              <div
                key={doctor._id}
                className={`w-full py-3 lg:px-5 px-2 flex items-center justify-between ${
                  index % 2 === 0 ? "bg-transparent" : "bg-[#DEECFF]"
                }`}
              >
                <span className="text-[#00429E] font-medium lg:text-2xl text-sm">
                  {doctor.fullName}
                </span>
                <div className="flex space-x-3">
                  {/* ✅ DELETE BUTTON */}
                  <button
                    onClick={() => handleDelete(doctor._id)}
                    className="bg-[#E20004] w-fit rounded-[4px] py-1 px-4 lg:min-w-[150px] max-lg:h-[30px]"
                  >
                    <span className="text-white lg:text-lg text-xs font-medium">
                      DELETE
                    </span>
                  </button>

                  {/* ✅ EDIT BUTTON */}
                  <button
                    onClick={() => {
                      setSelectedDoctor(doctor);
                      setFormData(doctor);
                      setIsEditing(true);
                    }}
                    className="bg-[#005EE2] w-fit rounded-[4px] py-1 px-4 lg:min-w-[150px] max-lg:h-[30px]"
                  >
                    <span className="text-white lg:text-lg text-xs font-medium">
                      Edit Details
                    </span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-5 text-gray-500">
              No doctors found.
            </div>
          )}
        </div>
        <div className="flex justify-between border-4 border-[#4D97FF] rounded-[14px] flex-col lg:w-full w-[90%] max-lg:mx-auto overflow-hidden">
          <div className="flex items-center justify-center bg-[#4D97FF] py-3 px-2 gap-x-4">
            <span className="font-medium lg:text-3xl text-center text-xl text-white uppercase">
              System Logs & Security
            </span>
          </div>
          <div className="bg-transparent w-full py-3 lg:px-5 px-2 flex justify-between items-center">
            <span className="text-[#00429E] font-medium lg:text-2xl text-sm">
              Recent Activity Logs
            </span>
            <button className="bg-[#005EE2] rounded-[4px] py-1 px-4 lg:min-w-[150px] max-lg:h-[30px]">
              <span className="text-white lg:text-lg text-xs font-medium">
                View More
              </span>
            </button>
          </div>
          <div className="bg-[#DEECFF] w-full py-3 lg:px-5 px-2 flex justify-between items-center">
            <span className="text-[#00429E] font-medium lg:text-2xl text-sm">
              Access Permissions & Roles
            </span>
            <button className="bg-[#005EE2] rounded-[4px] py-1 px-4 lg:min-w-[150px] max-lg:h-[30px]">
              <span className="text-white lg:text-lg text-xs font-medium">
                View More
              </span>
            </button>
          </div>
          <div className="bg-transparent w-full py-3 lg:px-5 px-2  flex justify-between items-center">
            <span className="text-[#00429E] font-medium lg:text-2xl text-sm">
              System Backup & Restore
            </span>
            <button className="bg-[#005EE2] rounded-[4px] py-1 px-4 lg:min-w-[150px] max-lg:h-[30px]">
              <span className="text-white lg:text-lg text-xs font-medium">
                View More
              </span>
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
      <Toaster />
    </div>
  );
};

export default AdminDshboard;
