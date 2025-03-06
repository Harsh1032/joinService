import React, { useState, useEffect, useRef } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Select from "react-select";
import { CloudUpload, Loader2 } from "lucide-react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { io } from "socket.io-client";

const options = [
  { value: "Verified", label: "Verified" },
  { value: "Pending", label: "Pending" },
];
const options2 = [
  { value: "Pending", label: "Pending" },
  { value: "Approved", label: "Approved" },
  { value: "Rejected", label: "Rejected" },
];
const options3 = [
  { value: "Certified", label: "Certified" },
  { value: "Not Certified", label: "Not Certified" },
];
const options4 = [
  { value: "Private Clinic", label: "Private Clinic" },
  { value: "Telehealth", label: "Telehealth" },
];

const JoinServices = () => {
  // State to manage form fields and files
  const [formData, setFormData] = useState({
    fullName: "",
    specialization: "",
    yearsOfExperience: "",
    certificationStatus: "",
    applicationStatus: "",
    medicalDegree: "",
    mmcRegistrationNumber: "",
    geriatricCertification: "",
    practiceType: "",
  });

  const [files, setFiles] = useState({
    medicalLicense: { file: null, progress: 0 },
    geriatricCertification: { file: null, progress: 0 },
    indemnityInsurance: { file: null, progress: 0 },
    profilePhoto: { file: null, progress: 0 },
  });

  const [loading, setLoading] = useState(false);

  const medicalLicenseInputRef = useRef(null);
  const geriatricCertificationInputRef = useRef(null);
  const indemnityInsuranceInputRef = useRef(null);
  const profilePhotoInputRef = useRef(null);


  // Handle input change
  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    // Reset progress to 0 whenever a new file is selected
    setFiles((prevFiles) => ({
      ...prevFiles,
      [name]: { file, progress: 0 },
    }));

    // Simulate the file upload progress
    const uploadFile = (fileName) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setFiles((prevFiles) => ({
          ...prevFiles,
          [fileName]: { ...prevFiles[fileName], progress },
        }));

        if (progress === 100) {
          clearInterval(interval);
        }
      }, 500); // Simulate progress every 500ms
    };

    uploadFile(name); // Start the upload progress for the selected file
  };

  const ProgressBar = ({ progress }) => (
    <div className="relative w-full h-2 bg-gray-200 rounded-full mt-2">
      <div
        className="h-full bg-blue-500"
        style={{ width: `${progress}%` }}
      ></div>
    </div>
  );

  const baseurl = import.meta.env.VITE_BASE_URL;
  // Ensure a single socket connection (outside component to prevent multiple connections)
  const socket = io(baseurl, { transports: ["websocket"] });
  useEffect(() => {
    // Listen for new applicant events from the backend
    socket.on("newApplicant", (newApplicant) => {
      console.log("New applicant received in real-time:", newApplicant);
    });

    return () => {
      socket.off("newApplicant");
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Create FormData to send in the POST request
    const form = new FormData();
    form.append("fullName", formData.fullName);
    form.append("specialization", formData.specialization);
    form.append("yearsOfExperience", formData.yearsOfExperience);
    form.append("certificationStatus", formData.certificationStatus);
    form.append("applicationStatus", formData.applicationStatus);
    form.append("medicalDegree", formData.medicalDegree);
    form.append("mmcRegistrationNumber", formData.mmcRegistrationNumber);
    form.append("geriatricCertification", formData.geriatricCertification);
    form.append("practiceType", formData.practiceType);

    // Append files to FormData
    if (files.medicalLicense.file)
      form.append("medicalLicense", files.medicalLicense.file);
    if (files.geriatricCertification.file)
      form.append("geriatricCertification", files.geriatricCertification.file);
    if (files.indemnityInsurance.file)
      form.append("indemnityInsurance", files.indemnityInsurance.file);
    if (files.profilePhoto.file)
      form.append("profilePhoto", files.profilePhoto.file);

    try {
      const response = await axios.post(
        `${baseurl}/api/applicants`, // Update with your backend API URL
        form,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (response.data.success) {
        // Emit an event to the server via Socket.io after successful submission
        socket.emit("newApplicant", response.data.applicant);
        // Handle successful submission
        toast.success("Application submitted successfully!");
        // Reset everything after successful submission
        resetFormState();
        resetFileState();
        setLoading(false);
      } else {
        // Handle failure
        toast.error("Failed to submit the application.");
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Error submitting the application.");
    }
  };

  // Reset form data
  const resetFormState = () => {
    setFormData({
      fullName: "",
      specialization: "",
      yearsOfExperience: "",
      certificationStatus: "",
      applicationStatus: "",
      medicalDegree: "",
      mmcRegistrationNumber: "",
      geriatricCertification: "",
      practiceType: "",
    });
  };

  // Reset file states
  const resetFileState = () => {
    setFiles({
      medicalLicense: { file: null, progress: 0 },
      geriatricCertification: { file: null, progress: 0 },
      indemnityInsurance: { file: null, progress: 0 },
      profilePhoto: { file: null, progress: 0 },
    });
  };

  return (
    <div className="w-full min-h-screen">
      <h1 className="font-medium lg:text-6xl text-2xl my-10 w-full text-center">
        Join our Services
      </h1>
      <div className="w-full bg-white min-h-screen py-10">
        <MaxWidthWrapper className="flex flex-col gap-y-5">
          <div className="flex flex-col max-lg:w-[90%] max-lg:mx-auto gap-y-2">
            <span className="lg:text-3xl text-xl max-lg:text-center font-medium mb-4 uppercase">
              Applicant Summary
            </span>
            <label className="font-normal lg:text-2xl text-xl text-[#000000AD]">
              Full name
            </label>
            <input
              type="text"
              name="fullName"
              className="border border-[#CDCDCD] p-3 rounded-[4px] placeholder:text-[#858585AD] placeholder:text-lg"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              placeholder="Dr. [Name]"
            />
            <div className="flex lg:flex-row flex-col gap-x-4 max-lg:gap-y-2">
              <div className="flex flex-col gap-y-2 lg:w-[45%] w-full">
                <label className="font-normal lg:text-2xl text-xl text-[#000000AD]">
                  Specialization
                </label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  required
                  className="border border-[#CDCDCD] p-3 rounded-[4px] placeholder:text-[#858585AD] placeholder:text-lg"
                  placeholder="Geriatric Care"
                />
              </div>
              <div className="flex flex-col gap-y-2 lg:w-[20%] w-full">
                <label className="font-normal lg:text-2xl text-xl text-[#000000AD]">
                  Years of Experience
                </label>
                <input
                  type="text"
                  name="yearsOfExperience"
                  value={formData.yearsOfExperience}
                  onChange={handleInputChange}
                  required
                  className="border border-[#CDCDCD] p-3 rounded-[4px] placeholder:text-[#858585AD] placeholder:text-lg"
                  placeholder="X years"
                />
              </div>
              <div className="flex flex-col gap-y-2 lg:w-[35%] w-full">
                <label className="font-normal lg:text-2xl text-xl text-[#000000AD]">
                  Certification Status
                </label>
                <Select
                  options={options}
                  className="react-select"
                  classNamePrefix="react-select"
                  value={options.find(
                    (option) => option.value === formData.certificationStatus
                  )}
                  onChange={(selectedOption) =>
                    setFormData({
                      ...formData,
                      certificationStatus: selectedOption.value,
                    })
                  }
                  required
                  placeholder="Verified/Pending"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      // Use Tailwind classes via `className`
                      width: "100%",
                      padding: "6px",
                      borderRadius: "4px",
                      borderColor: "#CDCDCD",
                      backgroundColor: "transparent",
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      color: state.isSelected ? "#fff" : "#858585AD",
                      backgroundColor: state.isSelected ? "#3B82F6" : "#fff",
                      fontSize: "20px",
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
            <label className="font-normal lg:text-2xl text-xl text-[#000000AD]">
              Application Status
            </label>
            <Select
              options={options2}
              className="react-select lg:flex hidden"
              classNamePrefix="react-select"
              value={options.find(
                (option) => option.value === formData.applicationStatus
              )}
              onChange={(selectedOption) =>
                setFormData({
                  ...formData,
                  applicationStatus: selectedOption.value,
                })
              }
              required
              placeholder="Pending / Approved / Rejected "
              styles={{
                control: (provided) => ({
                  ...provided,
                  // Use Tailwind classes via `className`
                  width: "44%",
                  padding: "6px",
                  borderRadius: "4px",
                  borderColor: "#CDCDCD",
                  backgroundColor: "transparent",
                }),
                menu: (provided) => ({
                  ...provided,
                  width: "44%", // Match the control width
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: state.isSelected ? "#fff" : "#858585AD",
                  backgroundColor: state.isSelected ? "#3B82F6" : "#fff",
                  fontSize: "20px",
                  fontWeight: "normal",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#858585",
                }),
              }}
            />
            <Select
              options={options2}
              className="react-select lg:hidden"
              classNamePrefix="react-select"
              value={options.find(
                (option) => option.value === formData.applicationStatus
              )}
              onChange={(selectedOption) =>
                setFormData({
                  ...formData,
                  applicationStatus: selectedOption.value,
                })
              }
              required
              placeholder="Pending / Approved / Rejected "
              styles={{
                control: (provided) => ({
                  ...provided,
                  // Use Tailwind classes via `className`
                  width: "100%",
                  padding: "6px",
                  borderRadius: "4px",
                  borderColor: "#CDCDCD",
                  backgroundColor: "transparent",
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: state.isSelected ? "#fff" : "#858585AD",
                  backgroundColor: state.isSelected ? "#3B82F6" : "#fff",
                  fontSize: "20px",
                  fontWeight: "normal",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#858585",
                }),
              }}
            />
          </div>
          <div className="flex flex-col max-lg:w-[90%] max-lg:mx-auto  gap-y-2">
            <span className="lg:text-3xl text-xl max-lg:text-center font-medium mb-4 uppercase">
              Professional Credentials
            </span>
            <div className="flex lg:flex-row flex-col gap-x-4 max-lg:gap-y-2">
              <div className="flex flex-col gap-y-2 lg:w-[45%] w-full">
                <label className="font-normal lg:text-2xl text-xl text-[#000000AD]">
                  Medical Degree
                </label>
                <input
                  type="text"
                  name="medicalDegree"
                  value={formData.medicalDegree}
                  onChange={handleInputChange}
                  required
                  className="border border-[#CDCDCD] p-3 rounded-[4px] placeholder:text-[#858585AD] placeholder:text-lg"
                  placeholder="MBBS, XYZ University "
                />
              </div>
              <div className="flex flex-col gap-y-2 lg:w-[27.5%] w-full">
                <label className="font-normal lg:text-2xl text-xl text-[#000000AD]">
                  MMC Registration Number
                </label>
                <input
                  type="text"
                  name="mmcRegistrationNumber"
                  value={formData.mmcRegistrationNumber}
                  onChange={handleInputChange}
                  required
                  className="border border-[#CDCDCD] p-3 rounded-[4px] placeholder:text-[#858585AD] placeholder:text-lg"
                  placeholder="XXXXXXX"
                />
              </div>
              <div className="flex flex-col gap-y-2 lg:w-[27.5%] w-full">
                <label className="font-normal lg:text-2xl text-xl text-[#000000AD]">
                  Geriatric Certification
                </label>
                <Select
                  options={options3}
                  className="react-select"
                  classNamePrefix="react-select"
                  value={options.find(
                    (option) => option.value === formData.geriatricCertification
                  )}
                  onChange={(selectedOption) =>
                    setFormData({
                      ...formData,
                      geriatricCertification: selectedOption.value,
                    })
                  }
                  required
                  placeholder="Certified/ Not Certified"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      // Use Tailwind classes via `className`
                      width: "100%",
                      padding: "6px",
                      borderRadius: "4px",
                      borderColor: "#CDCDCD",
                      backgroundColor: "transparent",
                    }),
                    option: (provided, state) => ({
                      ...provided,
                      color: state.isSelected ? "#fff" : "#858585AD",
                      backgroundColor: state.isSelected ? "#3B82F6" : "#fff",
                      fontSize: "20px",
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
            <label className="font-normal lg:text-2xl text-xl text-[#000000AD]">
              Practice Type
            </label>
            <Select
              options={options4}
              className="react-select lg:flex hidden"
              classNamePrefix="react-select"
              value={options.find(
                (option) => option.value === formData.practiceType
              )}
              onChange={(selectedOption) =>
                setFormData({
                  ...formData,
                  practiceType: selectedOption.value,
                })
              }
              required
              placeholder="Private Clinic/ Telehealth"
              styles={{
                control: (provided) => ({
                  ...provided,
                  // Use Tailwind classes via `className`
                  width: "44%",
                  padding: "6px",
                  borderRadius: "4px",
                  borderColor: "#CDCDCD",
                  backgroundColor: "transparent",
                }),
                menu: (provided) => ({
                  ...provided,
                  width: "44%", // Match the control width
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: state.isSelected ? "#fff" : "#858585AD",
                  backgroundColor: state.isSelected ? "#3B82F6" : "#fff",
                  fontSize: "20px",
                  fontWeight: "normal",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#858585",
                }),
              }}
            />
            <Select
              options={options4}
              className="react-select lg:hidden"
              classNamePrefix="react-select"
              value={options.find(
                (option) => option.value === formData.practiceType
              )}
              onChange={(selectedOption) =>
                setFormData({
                  ...formData,
                  practiceType: selectedOption.value,
                })
              }
              required
              placeholder="Private Clinic/ Telehealth"
              styles={{
                control: (provided) => ({
                  ...provided,
                  // Use Tailwind classes via `className`
                  width: "100%",
                  padding: "6px",
                  borderRadius: "4px",
                  borderColor: "#CDCDCD",
                  backgroundColor: "transparent",
                }),
                option: (provided, state) => ({
                  ...provided,
                  color: state.isSelected ? "#fff" : "#858585AD",
                  backgroundColor: state.isSelected ? "#3B82F6" : "#fff",
                  fontSize: "20px",
                  fontWeight: "normal",
                }),
                singleValue: (provided) => ({
                  ...provided,
                  color: "#858585",
                }),
              }}
            />
          </div>
          <div className="flex flex-col mt-1 gap-y-4 max-lg:w-[90%] max-lg:mx-auto">
            <span className="lg:text-3xl text-xl max-lg:text-center  font-medium mb-4 uppercase">
              Supporting Documents
            </span>
            <div className="flex flex-col gap-y-2">
              <span className="text-xl font-normal">Medical License</span>
              <div
                onClick={() => medicalLicenseInputRef.current.click()} // Trigger file input click
                className="flex flex-col items-center justify-center gap-y-2 w-full border border-[#CDCDCD] min-h-[150px] h-auto rounded-[4px]"
              >
                <input
                  type="file"
                  name="medicalLicense"
                  onChange={handleFileChange}
                  className="hidden"
                  ref={medicalLicenseInputRef} // Attach ref to input
                  required
                />

                {/* Conditional Rendering */}
                {!files.medicalLicense.file ? (
                  // Show default icon and text if no file is selected
                  <>
                    <CloudUpload className="text-[#858585] size-8" />
                    <span className="text-[#858585AD] text-lg">
                      Click to Upload (Max Size 20 MB)
                    </span>
                  </>
                ) : files.medicalLicense.progress < 100 ? (
                  // Show progress bar if file is being uploaded
                  <div className="w-[20%] flex flex-col items-center justify-center">
                    <span className="text-[#000000AD] text-lg">
                      {files.medicalLicense.file.name}
                    </span>
                    <ProgressBar progress={files.medicalLicense.progress} />
                  </div>
                ) : (
                  // Show file name and checkmark if upload is complete
                  <div className="flex items-center gap-2">
                    <span className="text-[#000000AD] text-lg">
                      {files.medicalLicense.file.name}
                    </span>
                    <span className="text-green-500 text-lg">✔</span>
                    {/* Green checkmark */}
                  </div>
                )}
              </div>
            </div>
            <div className="flex items-center px-5 py-2 rounded-[4px] justify-between bg-[#E6E6E6] border border-[#CDCDCD]">
              <span className="text-[#000000AD] text-lg font-medium">
                File Name Lorem Ipsum (27 MB)
              </span>
              <span className="text-[#000000AD] text-lg font-medium">X</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 max-lg:w-[90%] max-lg:mx-auto">
            <div className="flex flex-col gap-y-2">
              <span className="text-xl font-normal">
                Geriatric Certification
              </span>

              <div
                onClick={() => geriatricCertificationInputRef.current.click()}
                className="flex flex-col items-center justify-center gap-y-2 w-full border border-[#CDCDCD] min-h-[150px] h-auto rounded-[4px]"
              >
                <input
                  type="file"
                  name="geriatricCertification"
                  onChange={handleFileChange}
                  ref={geriatricCertificationInputRef}
                  className="hidden"
                  required
                />
                {!files.geriatricCertification.file ? (
                  <>
                    <CloudUpload className="text-[#858585] size-8" />
                    <span className="text-[#858585AD] text-lg">
                      Click to Upload (Max Size 20 MB)
                    </span>
                  </>
                ) : files.geriatricCertification.progress < 100 ? (
                  <div className="w-[20%] flex flex-col items-center justify-center">
                    <span className="text-[#000000AD] text-lg">
                      {files.geriatricCertification.file.name}
                    </span>
                    <ProgressBar
                      progress={files.geriatricCertification.progress}
                    />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-[#000000AD] text-lg">
                      {files.geriatricCertification.file.name}
                    </span>
                    <span className="text-green-500 text-lg">✔</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 max-lg:w-[90%] max-lg:mx-auto">
            <div className="flex flex-col gap-y-2">
              <span className="text-xl font-normal">Indemnity Insurance</span>

              <div
                onClick={() => indemnityInsuranceInputRef.current.click()}
                className="flex flex-col items-center justify-center gap-y-2 w-full border border-[#CDCDCD] min-h-[150px] h-auto rounded-[4px]"
              >
                <input
                  type="file"
                  name="indemnityInsurance"
                  onChange={handleFileChange}
                  ref={indemnityInsuranceInputRef}
                  className="hidden"
                  required
                />
                {!files.indemnityInsurance.file ? (
                  <>
                    <CloudUpload className="text-[#858585] size-8" />
                    <span className="text-[#858585AD] text-lg">
                      Click to Upload (Max Size 20 MB)
                    </span>
                  </>
                ) : files.indemnityInsurance.progress < 100 ? (
                  <div className="w-[20%] flex flex-col items-center justify-center">
                    <span className="text-[#000000AD] text-lg">
                      {files.indemnityInsurance.file.name}
                    </span>
                    <ProgressBar progress={files.indemnityInsurance.progress} />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-[#000000AD] text-lg">
                      {files.indemnityInsurance.file.name}
                    </span>
                    <span className="text-green-500 text-lg">✔</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 max-lg:w-[90%] max-lg:mx-auto">
            <div className="flex flex-col gap-y-2">
              <span className="text-xl font-normal">Profile Photo</span>

              <div
                onClick={() => profilePhotoInputRef.current.click()}
                className="flex flex-col items-center justify-center gap-y-2 w-full border border-[#CDCDCD] min-h-[150px] h-auto rounded-[4px]"
              >
                <input
                  type="file"
                  name="profilePhoto"
                  onChange={handleFileChange}
                  ref={profilePhotoInputRef}
                  className="hidden"
                  required
                />
                {!files.profilePhoto.file ? (
                  <>
                    <CloudUpload className="text-[#858585] size-8" />
                    <span className="text-[#858585AD] text-lg">
                      Click to Upload (Max Size 20 MB)
                    </span>
                  </>
                ) : files.profilePhoto.progress < 100 ? (
                  <div className="w-[20%] flex flex-col items-center justify-center">
                    <span className="text-[#000000AD] text-lg">
                      {files.profilePhoto.file.name}
                    </span>
                    <ProgressBar progress={files.profilePhoto.progress} />
                  </div>
                ) : (
                  <div className="flex items-center gap-2">
                    <span className="text-[#000000AD] text-lg">
                      {files.profilePhoto.file.name}
                    </span>
                    <span className="text-green-500 text-lg">✔</span>
                  </div>
                )}
              </div>
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-[#005EE2] rounded-[4px] border border-[#4D97FF] p-4 flex items-center justify-center text-center max-lg:w-[90%] max-lg:mx-auto"
          >
            {loading ? (
              <>
                <Loader2 className="size-4 text-white animate-spin" />
              </>
            ) : (
              <>
                <span className="text-white  text-xl font-medium">
                  Submit Application
                </span>
              </>
            )}
          </button>
          <span className="font-light text-base italic text=[#000000AD] mb-5 max-lg:w-[90%] max-lg:mx-auto">
            *By submitting this application, you consent to our internal team
            processing your data for evaluation.
          </span>
        </MaxWidthWrapper>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default JoinServices;
