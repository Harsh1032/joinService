import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ChevronDown, ChevronUp, Loader2 } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";
import { io } from "socket.io-client";

// Create a socket connection

const baseurl = import.meta.env.VITE_BASE_URL;
const socket = io(baseurl, {
  transports: ["websocket"], // Force WebSocket (avoid polling)
  reconnection: true, // Auto-reconnect
  reconnectionAttempts: 5, // Number of times to retry before failing
  reconnectionDelay: 3000, // Wait before retrying
});

const fetchApplicants = async () => {
  try {
    const response = await fetch(`${baseurl}/api/applicants`);
    if (!response.ok) throw new Error("Failed to fetch applicants");
    return await response.json();
  } catch (error) {
    console.error("Error fetching applicants:", error);
    toast.error("Failed to fetch applicants.");
    return { applicants: [] };
  }
};

const RejectApplications = () => {
  const [applicants, setApplicants] = useState([]);
  const [openIndex, setOpenIndex] = useState(null); // Track which applicant is open
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getApplicants = async () => {
      const data = await fetchApplicants();
      const pendingApplicants = data.applicants.filter(
        (applicant) =>
          applicant.approvalStatus !== "Approved" &&
          applicant.approvalStatus !== "Rejected"
      );
      setApplicants(pendingApplicants);
    };

    getApplicants();

    // Handle new applicant event
    socket.on("newApplicant", (newApplicant) => {
      console.log("New applicant received:", newApplicant);
      setApplicants((prev) => [...prev, newApplicant]);
    });

    // Handle application update event
    socket.on("applicationUpdated", (updatedApplicant) => {
      console.log("Applicant updated:", updatedApplicant);
      setApplicants((prev) =>
        prev.filter((app) => app._id !== updatedApplicant._id)
      );
    });

    // Handle WebSocket disconnections
    socket.on("disconnect", () => {
      console.warn("WebSocket disconnected. Attempting to reconnect...");
    });

    // Cleanup event listeners on unmount
    return () => {
      socket.off("newApplicant");
      socket.off("applicationUpdated");
      socket.off("disconnect");
    };
  }, []);

  const handleAction = async (actionType, applicantId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${baseurl}/api/applicants/approve/${applicantId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: actionType }),
        }
      );

      const data = await response.json();
      if (response.ok) {
        toast.success(`Application ${actionType}d successfully.`);

        setApplicants((prev) => prev.filter((app) => app._id !== applicantId));
        setLoading(false);
      } else {
        toast.error(`Error: ${data.message}`);
        setLoading(false);
      }
    } catch (error) {
      console.log("Error while updating status:", error);
      toast.error("An error occurred while updating the status.");
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen bg-white ">
      <MaxWidthWrapper className="w-full gap-y-5 py-10 flex flex-col relative">
        <h1 className="lg:text-5xl text-2xl text-black mx-auto font-medium">
          Approval & Rejection System
        </h1>
        <span className="text-[#000000AD] font-normal lg:text-xl text-lg mx-auto text-center">
          Easily manage approval and rejection of provider applications with{" "}
          <br />
          detailed review tools.
        </span>

        <div className="flex lg:flex-row flex-col w-full max-lg:space-y-4 items-center lg:justify-between">
          <div className=" lg:max-h-[100.6px] flex items-center lg:w-[24%] w-[90%] bg-[#FBFFA9] border-[1.5px] border-[#9CA500]  rounded-md py-3 px-5 gap-x-4">
            <img
              src="/image30.png"
              alt="docotrs"
              className=" rounded-full bg-[#A9B100] w-[75px] h-[75px]"
            />

            <div className="flex flex-col justify-center">
              <span className="text-[#656A00E3] font-normal text-xl">
                Pending Applications
              </span>
              <span className="text-[#656A00E3] font-medium text-2xl">XXX</span>
            </div>
          </div>
          <div className=" lg:max-h-[100.6px] flex items-center lg:w-[24%] w-[90%] bg-[#DEECFF] border-[1.5px] border-[#4D97FF]  rounded-md py-3 px-5 gap-x-4">
            <img
              src="/image30.png"
              alt="docotrs"
              className=" rounded-full bg-[#4D97FF] w-[75px] h-[75px]"
            />

            <div className="flex flex-col justify-center">
              <span className="text-[#0349A9E3] font-normal text-xl">
                Recently Submitted
              </span>
              <span className="text-[#0349A9E3] font-medium text-2xl">
                27/01, 05:30
              </span>
            </div>
          </div>
          <div className=" lg:max-h-[100.6px] flex items-center lg:w-[24%] w-[90%] bg-[#DEECFF] border-[1.5px] border-[#4D97FF]  rounded-md py-3 px-5 gap-x-4">
            <div className="w-[75px] h-[75px] flex items-center justify-center rounded-full bg-[#4D97FF] ">
              <img
                src="/image31.png"
                alt="docotrs"
                className=" w-[65px] h-[65px]"
              />
            </div>

            <div className="flex flex-col justify-center">
              <span className="text-[#0349A9E3] font-normal text-xl">
                Application Type:
              </span>
              <span className="text-[#0349A9E3] font-medium text-2xl">
                Doctor | Counselor
              </span>
            </div>
          </div>
          <div className=" lg:max-h-[100.6px] flex items-center lg:w-[24%] w-[90%] bg-[#DEECFF] border-[1.5px] border-[#4D97FF]  rounded-md py-3 px-5 gap-x-4">
            <img
              src="/image33.png"
              alt="docotrs"
              className=" rounded-full bg-[#4D97FF] w-[75px] h-[75px]"
            />

            <div className="flex flex-col justify-center">
              <span className="text-[#0349A9E3] font-normal text-xl">
                TAI Verification Status
              </span>
              <span className="text-[#0349A9E3] font-medium text-2xl">
                Pass|Needs Review
              </span>
            </div>
          </div>
        </div>

        {applicants.length > 0 ? (
          applicants.map((applicant, index) => (
            <div
              key={applicant._id}
              className="flex  border-4 border-[#4D97FF] rounded-[14px] flex-col max-lg:mx-auto lg:w-full w-[90%]  overflow-hidden"
            >
              <div
                className="flex items-center justify-center bg-[#4D97FF] py-3 px-2 gap-x-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium lg:text-2xl text-xl uppercase text-white">
                  Application Details: {applicant.fullName}
                </span>
                {openIndex === index ? (
                  <ChevronUp className="text-white" />
                ) : (
                  <ChevronDown className="text-white" />
                )}
              </div>
              {openIndex === index && (
                <>
                  <div className="bg-[#DEECFF] w-full py-3 lg:px-5 px-2 flex">
                    <span className="text-[#00429E] font-medium  lg:text-2xl text-lg">
                      APPLICANT NAME:
                    </span>
                  </div>
                  <div className="bg-[#FFFFFFA3] w-full py-3 lg:px-5 px-2 flex">
                    <input
                      className="text-[#00429E] bg-transparent outline-none font-medium  text-2xl placeholder:text-[#0000008C] lg:placeholder:text-xl placeholder:text-base"
                      placeholder="DR MOHAMED NAZRI"
                      value={applicant.fullName}
                    />
                  </div>
                  <div className="bg-[#DEECFF] w-full py-3 lg:px-5 px-2 flex">
                    <span className="text-[#00429E] font-medium lg:text-2xl text-lg">
                      Specialization:
                    </span>
                  </div>
                  <div className="bg-[#FFFFFFA3] w-full py-3 lg:px-5 px-2 flex">
                    <input
                      className="text-[#00429E] bg-transparent outline-none font-medium  text-2xl placeholder:text-[#0000008C] lg:placeholder:text-xl placeholder:text-base"
                      placeholder="COUNSELOR / GP / Other"
                      value={applicant.specialization}
                    />
                  </div>
                  <div className="bg-[#DEECFF] w-full py-3 lg:px-5 px-2 flex">
                    <span className="text-[#00429E] font-medium lg:text-2xl text-lg">
                      EXPERIENCE:
                    </span>
                  </div>
                  <div className="bg-[#FFFFFFA3] w-full py-3 lg:px-5 px-2 flex">
                    <input
                      className="text-[#00429E] bg-transparent outline-none font-medium  text-2xl placeholder:text-[#0000008C] lg:placeholder:text-xl placeholder:text-base"
                      placeholder="XX Years"
                      value={applicant.yearsOfExperience}
                    />
                  </div>
                  <div className="bg-[#DEECFF] w-full py-3 lg:px-5 px-2 flex">
                    <span className="text-[#00429E] font-medium lg:text-2xl text-lg">
                      Certification Status:
                    </span>
                  </div>
                  <div className="bg-[#FFFFFFA3] w-full py-3 lg:px-5 px-2 flex">
                    <input
                      className="text-[#00429E] bg-transparent outline-none font-medium  text-2xl placeholder:text-[#0000008C] lg:placeholder:text-xl placeholder:text-base"
                      placeholder="Verified/Pending"
                      value={applicant.certificationStatus}
                    />
                  </div>
                  <div className="bg-[#DEECFF] w-full p-2 flex"></div>
                  <div className="flex items-center justify-center bg-[#4D97FF] py-3 px-2 gap-x-4">
                    <span className="font-medium lg:text-3xl text-xl text-white uppercase">
                      Supporting Documents
                    </span>
                  </div>
                  <div className="bg-[#DEECFF] w-full py-3 lg:px-5 px-2 flex justify-between items-center">
                    <span className="text-[#00429E] font-medium lg:text-2xl text-sm">
                      Medical License
                    </span>
                    <div className="flex space-x-3">
                      <button
                        className="bg-[#005EE2] w-fit rounded-[4px] py-1 lg:px-4 px-2 min-w-[80px] lg:min-w-[150px]"
                        onClick={() => {
                          // Check if the array has at least one item
                          if (
                            applicant.medicalLicense &&
                            applicant.medicalLicense.length > 0
                          ) {
                            // Open the first URL in the array
                            window.open(applicant.medicalLicense[0], "_blank");
                          }
                        }}
                      >
                        <span className="text-white lg:text-lg text-base font-normal lg:font-medium">
                          VIEW
                        </span>
                      </button>
                      <button className="bg-[#A8A8A8] w-fit rounded-[4px] py-1 lg:px-4 px-2 min-w-[80px] lg:min-w-[150px]">
                        <span className="text-white lg:text-lg text-base font-normal lg:font-medium">
                          DOWNLOAD
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-[#DEECFF] w-full py-3 lg:px-5 px-2 flex justify-between items-center">
                    <span className="text-[#00429E] font-medium lg:text-2xl text-sm">
                      Certification
                    </span>
                    <div className="flex space-x-3">
                      <button
                        className="bg-[#005EE2] w-fit rounded-[4px] py-1 lg:px-4 px-2 min-w-[80px] lg:min-w-[150px]"
                        onClick={() => {
                          // Check if the array has at least one item
                          if (
                            applicant.geriatricCertification &&
                            applicant.geriatricCertification.length > 0
                          ) {
                            // Open the first URL in the array
                            window.open(
                              applicant.geriatricCertification[0],
                              "_blank"
                            );
                          }
                        }}
                      >
                        <span className="text-white lg:text-lg text-base font-normal lg:font-medium">
                          VIEW
                        </span>
                      </button>
                      <button className="bg-[#A8A8A8] w-fit rounded-[4px] py-1 lg:px-4 px-2 min-w-[80px] lg:min-w-[150px]">
                        <span className="text-white lg:text-lg text-base font-normal lg:font-medium">
                          DOWNLOAD
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-[#DEECFF] w-full py-3 lg:px-5 px-2 flex justify-between items-center">
                    <span className="text-[#00429E] font-medium lg:text-2xl text-sm">
                      Indemnity Insurance
                    </span>
                    <div className="flex space-x-3">
                      <button
                        className="bg-[#005EE2] w-fit rounded-[4px] py-1 lg:px-4 px-2 min-w-[80px] lg:min-w-[150px]"
                        onClick={() => {
                          // Check if the array has at least one item
                          if (
                            applicant.indemnityInsurance &&
                            applicant.indemnityInsurance.length > 0
                          ) {
                            // Open the first URL in the array
                            window.open(
                              applicant.indemnityInsurance[0],
                              "_blank"
                            );
                          }
                        }}
                      >
                        <span className="text-white lg:text-lg text-base font-normal lg:font-medium">
                          VIEW
                        </span>
                      </button>
                      <button className="bg-[#A8A8A8] w-fit rounded-[4px] py-1 lg:px-4 px-2 min-w-[80px] lg:min-w-[150px]">
                        <span className="text-white lg:text-lg text-base font-normal lg:font-medium">
                          DOWNLOAD
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-[#DEECFF] w-full py-3 lg:px-5 px-2 flex justify-between items-center">
                    <span className="text-[#00429E] font-medium lg:text-2xl text-sm">
                      Profile Photo
                    </span>
                    <div className="flex space-x-3">
                      <button
                        className="bg-[#005EE2] w-fit rounded-[4px] py-1 lg:px-4 px-2 min-w-[80px] lg:min-w-[150px]"
                        onClick={() => {
                          // Check if the array has at least one item
                          if (
                            applicant.profilePhoto &&
                            applicant.profilePhoto.length > 0
                          ) {
                            // Open the first URL in the array
                            window.open(applicant.profilePhoto[0], "_blank");
                          }
                        }}
                      >
                        <span className="text-white lg:text-lg text-base font-normal lg:font-medium">
                          VIEW
                        </span>
                      </button>
                      <button className="bg-[#A8A8A8] w-fit rounded-[4px] py-1 lg:px-4 px-2 min-w-[80px] lg:min-w-[150px]">
                        <span className="text-white lg:text-lg text-base font-normal lg:font-medium">
                          DOWNLOAD
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-center bg-[#4D97FF] py-3 px-2 gap-x-4">
                    <span className="font-medium  max-lg:text-center lg:text-3xl text-xl text-white uppercase">
                      AI-Powered Review Assistance
                    </span>
                  </div>
                  <span className="font-medium  lg:text-2xl text-lg text-[#0000008C] bg-[#FFFFFFA3] w-full py-3 lg:px-5 px-2">
                    MMC Registration Verified
                  </span>
                  <span className="font-medium  lg:text-2xl text-lg text-[#0000008C] bg-[#FFFFFFA3] w-full py-3 lg:px-5 px-2 border-y border-y-[#DBDBDB]">
                    Missing Indemnity Insurance
                  </span>
                  <span className="font-medium lg:text-2xl text-lg text-[#0000008C] bg-[#FFFFFFA3] w-full py-3 lg:px-5 px-2 border-y border-y-[#DBDBDB]">
                    AI Suggestion: Request additional documents
                  </span>
                  <div className="bg-[#DEECFF] w-full p-2 flex"></div>
                  <div className="flex items-center justify-center bg-[#4D97FF] py-3 px-2 gap-x-4">
                    <span className="font-medium lg:text-3xl text-xl text-white uppercase">
                      Approval Actions
                    </span>
                  </div>
                  <span className="font-medium  lg:text-2xl text-lg text-[#00429E] bg-[#DEECFF] w-full py-3 lg:px-5 px-2">
                    Admin Comments
                  </span>
                  <span className="font-medium  lg:text-2xl text-lg text-[#0000008C] bg-[#FFFFFFA3] w-full py-3 lg:px-5 px-2 border-y border-y-[#DBDBDB]">
                    Enter comment here
                  </span>
                  <div className="bg-[#DEECFF] w-full p-2 flex"></div>

                  <button
                    className="bg-[#00A80E] p-3"
                    onClick={() => handleAction("approve", applicant._id)}
                  >
                    <span className="text-white font-medium llg:text-xl text-lgxl text-lg uppercase flex items-center justify-center">
                      {loading ? (
                        <>
                          <Loader2 className="size-4 text-white animate-spin" />
                        </>
                      ) : (
                        <>
                          <span className="text-white  text-xl font-medium">
                            Approve & Onboard
                          </span>
                        </>
                      )}
                    </span>
                  </button>

                  <button className="bg-[#FF0004] p-3">
                    <span
                      className="text-white font-medium llg:text-xl text-lgxl text-lg uppercase lex items-center justify-center"
                      onClick={() => handleAction("reject", applicant._id)}
                    >
                      {loading ? (
                        <>
                          <Loader2 className="size-4 text-white animate-spin" />
                        </>
                      ) : (
                        <>
                          <span className="text-white  text-xl font-medium">
                            Reject with Feedback
                          </span>
                        </>
                      )}
                    </span>
                  </button>

                  <button className="bg-[#868686B2] p-3">
                    <span className="text-white font-medium llg:text-xl text-lgxl text-lg uppercase">
                      Request More Info
                    </span>
                  </button>
                </>
              )}
            </div>
          ))
        ) : (
          <>
            <p className="text-center text-black font-medium lg:text-4xl text-xl mt-10">
              No pending applications to review.
            </p>
          </>
        )}
      </MaxWidthWrapper>
      <Toaster position="bottom-right" reverseOrder={false} />
    </div>
  );
};

export default RejectApplications;
