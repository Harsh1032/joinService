import React, { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Pricing = () => {
  const [selectedButton, setSelectedButton] = useState("explorePlans");

  return (
    <div id="pricing" className="w-full bg-[#D9D9D94F] pt-5">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center pt-5 ">
          <h1 className="lg:text-6xl text-xl font-semibold mb-5">
            Choose the Right Plan for You
          </h1>
          <div className="flex lg:gap-x-5 max-lg:w-[75%] mt-5">
            <button
              className={`${
                selectedButton === "explorePlans"
                  ? "bg-[#D4E6FF]"
                  : "bg-[#D9D9D94F]"
              } lg:px-4 px-2 lg:py-3 py-2 max-lg:mx-auto lg:rounded-t-[9px] rounded-t-[3px]`}
              onClick={() => setSelectedButton("explorePlans")}
            >
              <span
                className={`${
                  selectedButton === "explorePlans"
                    ? "text-[#0050C1]"
                    : "text-[#747474]"
                }   font-medium lg:text-xl text-sm`}
              >
                Explore care plans
              </span>
            </button>
            <button
              className={`${
                selectedButton === "growPractice"
                  ? "bg-[#D4E6FF]"
                  : "bg-[#D9D9D94F]"
              } lg:px-4 px-2 lg:py-3 py-2 max-lg:mx-auto lg:rounded-t-[9px] rounded-t-[3px] `}
              onClick={() => setSelectedButton("growPractice")}
            >
              <span
                className={`${
                  selectedButton === "growPractice"
                    ? "text-[#0050C1]"
                    : "text-[#747474]"
                }   font-medium lg:text-xl text-sm`}
              >
                Grow your practice
              </span>
            </button>
          </div>
        </div>
      </MaxWidthWrapper>
      {selectedButton === "explorePlans" && (
        <div className="w-full bg-white pb-5 pt-10 flex flex-col gap-y-5">
          <MaxWidthWrapper className="overflow-x-auto">
            <div className="flex flex-row justify-between items-center lg:w-full max-lg:space-y-2 overflow-x-auto w-[90%] max-lg:mx-auto">
              <span className="text-[#000000AD] font-normal lg:text-2xl text-lg lg:w-[25%] max-lg:min-w-[200px]">
                Find the perfect plan to access expert care for your loved ones.
              </span>
              <div className="flex flex-row  gap-x-[1px] lg:w-[72%]">
                <div className="flex flex-col bg-[#D9D9D961] lg:rounded-l-3xl rounded-l-md lg:w-[33%] max- min-w-[180px] px-5 py-4 gap-y-2">
                  <span className="text-black font-medium lg:text-2xl text-lg">
                    Basic
                  </span>
                  <button className="flex items-center p-1 justify-center bg-transparent rounded-md border-[0.7px] border-[#AAAAAA]">
                    <span className="font-medium lg:text-2xl text-lg">
                      Get Started
                    </span>
                  </button>
                </div>
                <div className="flex flex-col bg-[#D4E6FF] lg:w-[33%] min-w-[180px] px-5 py-4 gap-y-2 ">
                  <span className="text-black font-medium lg:text-2xl text-lg">
                    Standard
                  </span>
                  <button className="flex items-center p-1 justify-center bg-[#217DFF] rounded-md">
                    <span className="font-medium lg:text-2xl text-lg text-white">
                      Subscribe Now
                    </span>
                  </button>
                </div>
                <div className="flex flex-col bg-[#D4E6FF] lg:rounded-r-3xl rounded-r-md  lg:w-[33%] min-w-[180px] px-5 py-4 gap-y-2">
                  <span className="text-black font-medium lg:text-2xl text-lg">
                    Premium
                  </span>
                  <button className="flex items-center p-1 justify-center bg-[#217DFF] rounded-md">
                    <span className="font-medium lg:text-2xl text-lg text-white">
                      Subscribe Now
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-x-auto lg:w-full w-[90%] max-lg:mx-auto">
              <table className="w-full text-left border-collapse my-5 ">
                <thead>
                  <tr className="bg-[#D9D9D9]">
                    <th className="p-4 rounded-tl-3xl">Plans & Pricing</th>
                    <th className="p-4 text-center">Free</th>
                    <th className="p-4 text-center">R 50/mo</th>
                    <th className="p-4 text-center rounded-tr-3xl">R 150/mo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">
                      Dashboard/Health Record Storage
                    </td>
                    <td className="p-4 text-center text-[#737373]">
                      Limited Storage
                    </td>
                    <td className="p-4 text-center text-[#737373]">
                      Full Storage + Appointment Scheduling
                    </td>
                    <td className="p-4 text-center text-[#737373]">
                      Full Storage + Appointment Scheduling
                    </td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 border-r border-[#D7D7D7]">
                      Customer Support
                    </td>
                    <td className="p-4 text-[#737373] text-center">
                      Basic Support
                    </td>
                    <td className="p-4 text-[#737373] text-center">
                      Priority Support
                    </td>
                    <td className="p-4 text-[#737373] text-center">
                      24/7 Premium Support
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">
                      Panel Clinics
                    </td>
                    <td className="p-4 text-center text-[#737373]">❌</td>
                    <td className="p-4 text-center text-[#737373]">
                      Access to Partner Clinics
                    </td>
                    <td className="p-4 text-center text-[#737373]">
                      Access to Partner Clinics
                    </td>
                  </tr>
                  <tr className=" bg-[#D9D9D94F]">
                    <td className="p-4 border-r border-[#D7D7D7]">
                      Telehealth Platform
                    </td>
                    <td className="p-4 text-[#737373] text-center">
                      1 Basic Consultation
                    </td>
                    <td className="p-4 text-[#737373] text-center">
                      3 Consultations/Month
                    </td>
                    <td className="p-4 text-[#737373] text-center">
                      Unlimited Telehealth Care
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">
                      Medication Reminders
                    </td>
                    <td className="p-4 text-center text-[#737373]">✅</td>
                    <td className="p-4 text-center text-[#737373]">✅</td>
                    <td className="p-4 text-center text-[#737373]">✅</td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 border-r border-[#D7D7D7]">
                      Health Information Resources
                    </td>
                    <td className="p-4 text-[#737373] text-center">
                      Access to Articles
                    </td>
                    <td className="p-4 text-[#737373] text-center">
                      Access to Articles & Videos
                    </td>
                    <td className="p-4 text-[#737373] text-center">
                      Comprehensive Resources
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">
                      Therapist and Nutritionist
                    </td>
                    <td className="p-4 text-center text-[#737373]">❌</td>
                    <td className="p-4 text-center text-[#737373]">
                      Limited Access
                    </td>
                    <td className="p-4 text-center text-[#737373]">
                      Priority Access
                    </td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 border-r border-[#D7D7D7]">
                      Extended Telehealth Care
                    </td>
                    <td className="p-4 text-[#737373] text-center">❌</td>
                    <td className="p-4 text-[#737373] text-center">✅</td>
                    <td className="p-4 text-[#737373] text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">
                      Transportation Arrangement
                    </td>
                    <td className="p-4 text-center text-[#737373]">❌</td>
                    <td className="p-4 text-center text-[#737373]">
                      Limited (2 Trips/Month)
                    </td>
                    <td className="p-4 text-center text-[#737373]">
                      Unlimited
                    </td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 border-r border-[#D7D7D7]">
                      Access to Geriatric Consultant
                    </td>
                    <td className="p-4 text-[#737373] text-center">❌</td>
                    <td className="p-4 text-[#737373] text-center">❌</td>
                    <td className="p-4 text-[#737373] text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">
                      Access to US Consultants
                    </td>
                    <td className="p-4 text-center text-[#737373]">❌</td>
                    <td className="p-4 text-center text-[#737373]">❌</td>
                    <td className="p-4 text-center text-[#737373]">✅</td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 rounded-bl-3xl border-r border-[#D7D7D7]">
                      Personalized AI Insights
                    </td>
                    <td className="p-4 text-center text-[#737373]">❌</td>
                    <td className="p-4 text-center text-[#737373]">
                      Fully Tailored Care Plans
                    </td>
                    <td className="p-4 text-center text-[#737373] rounded-br-3xl">
                      Fully Tailored Care Plans
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex flex-col items-center py-5  gap-y-5  w-[90%] lg:w-full max-lg:mx-auto text-center">
              <h1 className="font-medium lg:text-6xl text-xl mx-auto max-lg:w-[90%]">
                Learn More on Your Health
              </h1>
              <span className="text-center font-normal lg:text-2xl text-sm text-[#000000AD] max-lg:w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud.
              </span>
              <div className="w-full mt-4 flex lg:justify-center gap-x-3 overflow-x-auto ">
                <div className="relative lg:w-[423.5px] lg:h-[550px] max-lg:min-w-full h-[389px] px-2 ">
                  <img
                    src="/image4.png"
                    alt="grow yourself"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-10 w-full bg-opacity-50 text-white px-10 rounded-b-lg py-2 gap-y-2">
                    <span className="font-medium lg:text-3xl text-xl">
                      Lorem ipsum dolor sit amet
                    </span>
                    <br />
                    <p className="font-normal lg:text-lg text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation....{" "}
                      <span className="underline">Read More</span>
                    </p>
                  </div>
                </div>
                <div className="relative lg:w-[423.5px] lg:h-[550px] max-lg:min-w-full h-[389px] px-2 ">
                  <img
                    src="/image4.png"
                    alt="grow yourself"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-10 w-full bg-opacity-50 text-white px-10 rounded-b-lg py-2 gap-y-2">
                    <span className="font-medium lg:text-3xl text-xl">
                      Lorem ipsum dolor sit amet
                    </span>
                    <br />
                    <p className="font-normal lg:text-lg text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation....{" "}
                      <span className="underline">Read More</span>
                    </p>
                  </div>
                </div>
                <div className="relative lg:w-[423.5px] lg:h-[550px] max-lg:min-w-full h-[389px]  px-2 ">
                  <img
                    src="/image4.png"
                    alt="grow yourself"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-10 w-full bg-opacity-50 text-white px-10 rounded-b-lg py-2 gap-y-2">
                    <span className="font-medium lg:text-3xl text-xl">
                      Lorem ipsum dolor sit amet
                    </span>
                    <br />
                    <p className="font-normal lg:text-lg text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation....{" "}
                      <span className="underline">Read More</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      )}

      {selectedButton === "growPractice" && (
        <div className="w-full bg-white pb-5 pt-10 flex flex-col gap-y-5">
        <MaxWidthWrapper className="overflow-x-auto">
          <div className="flex flex-row justify-between items-center lg:w-full max-lg:space-y-2 overflow-x-auto w-[90%] max-lg:mx-auto">
            <span className="text-[#000000AD] font-normal lg:text-2xl text-lg lg:w-[25%] max-lg:min-w-[200px]">
              Find the perfect plan to access expert care for your loved ones.
            </span>
            <div className="flex flex-row  gap-x-[1px] lg:w-[72%]">
              <div className="flex flex-col bg-[#D9D9D961] lg:rounded-l-3xl rounded-l-md lg:w-[33%] max- min-w-[180px] px-5 py-4 gap-y-2">
                <span className="text-black font-medium lg:text-2xl text-lg">
                  Basic
                </span>
                <button className="flex items-center p-1 justify-center bg-transparent rounded-md border-[0.7px] border-[#AAAAAA]">
                  <span className="font-medium lg:text-2xl text-lg">
                    Get Started
                  </span>
                </button>
              </div>
              <div className="flex flex-col bg-[#D4E6FF] lg:w-[33%] min-w-[180px] px-5 py-4 gap-y-2 ">
                <span className="text-black font-medium lg:text-2xl text-lg">
                  Standard
                </span>
                <button className="flex items-center p-1 justify-center bg-[#217DFF] rounded-md">
                  <span className="font-medium lg:text-2xl text-lg text-white">
                    Subscribe Now
                  </span>
                </button>
              </div>
              <div className="flex flex-col bg-[#D4E6FF] lg:rounded-r-3xl rounded-r-md  lg:w-[33%] min-w-[180px] px-5 py-4 gap-y-2">
                <span className="text-black font-medium lg:text-2xl text-lg">
                  Premium
                </span>
                <button className="flex items-center p-1 justify-center bg-[#217DFF] rounded-md">
                  <span className="font-medium lg:text-2xl text-lg text-white">
                    Subscribe Now
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="overflow-x-auto lg:w-full w-[90%] max-lg:mx-auto">
            <table className="w-full text-left border-collapse my-5 ">
              <thead>
                <tr className="bg-[#D9D9D9]">
                  <th className="p-4 rounded-tl-3xl">Feature</th>
                  <th className="p-4 text-center">Basic Plan</th>
                  <th className="p-4 text-center">Standard Plan</th>
                  <th className="p-4 text-center rounded-tr-3xl">Premium Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border-r border-[#D7D7D7]">
                  Profile Visibility	
                  </td>
                  <td className="p-4 text-center text-[#737373]">
                  Limited (Search Only)	
                  </td>
                  <td className="p-4 text-center text-[#737373]">
                  Highlighted in Results	
                  </td>
                  <td className="p-4 text-center text-[#737373]">
                  Top Search Placement
                  </td>
                </tr>
                <tr className="bg-[#D9D9D94F]">
                  <td className="p-4 border-r border-[#D7D7D7]">
                  Appointment Booking		
                  </td>
                  <td className="p-4 text-[#737373] text-center">
                  Included
                  </td>
                  <td className="p-4 text-[#737373] text-center">
                  Included
                  </td>
                  <td className="p-4 text-[#737373] text-center">
                  Included
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-[#D7D7D7]">
                  Teleconsultation Tools	
                  </td>
                  <td className="p-4 text-center text-[#737373]">Basic Video Support</td>
                  <td className="p-4 text-center text-[#737373]">
                  	 Advanced Video
                  </td>
                  <td className="p-4 text-center text-[#737373]">
                   Tools	Priority Support
                  </td>
                </tr>
                <tr className=" bg-[#D9D9D94F]">
                  <td className="p-4 border-r border-[#D7D7D7]">
                  Practice Management Dashboard	
                  </td>
                  <td className="p-4 text-[#737373] text-center">
                  Limited Features	
                  </td>
                  <td className="p-4 text-[#737373] text-center">
                  Full Features	
                  </td>
                  <td className="p-4 text-[#737373] text-center">
                  Full Features + Priority
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-[#D7D7D7]">
                  Analytics & Insights	
                  </td>
                  <td className="p-4 text-center text-[#737373]">Not Included	</td>
                  <td className="p-4 text-center text-[#737373]">Basic Insights	</td>
                  <td className="p-4 text-center text-[#737373]">Advanced AI-Driven Insights</td>
                </tr>
                <tr className="bg-[#D9D9D94F]">
                  <td className="p-4 border-r border-[#D7D7D7]">
                  Patient Reviews & Feedback	
                  </td>
                  <td className="p-4 text-[#737373] text-center">
                  Included	
                  </td>
                  <td className="p-4 text-[#737373] text-center">
                  Included	
                  </td>
                  <td className="p-4 text-[#737373] text-center">
                  Highlighted Reviews
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-[#D7D7D7]">
                  Marketing Support	
                  </td>
                  <td className="p-4 text-center text-[#737373]">Not Included	</td>
                  <td className="p-4 text-center text-[#737373]">
                  Platform Promotions	
                  </td>
                  <td className="p-4 text-center text-[#737373]">
                  Featured Promotions
                  </td>
                </tr>
                <tr className="bg-[#D9D9D94F]">
                  <td className="p-4 border-r border-[#D7D7D7]">
                  Custom Branding	
                  </td>
                  <td className="p-4 text-[#737373] text-center">Not Included		</td>
                  <td className="p-4 text-[#737373] text-center">Included</td>
                  <td className="p-4 text-[#737373] text-center">Included</td>
                </tr>
                <tr>
                  <td className="p-4 border-r border-[#D7D7D7]">
                  Patient Sharing/Referral	
                  </td>
                  <td className="p-4 text-center text-[#737373]">Not Included	</td>
                  <td className="p-4 text-center text-[#737373]">
                  Limited (5 Referrals/Month)	
                  </td>
                  <td className="p-4 text-center text-[#737373]">
                  Unlimited
                  </td>
                </tr>
                <tr className="bg-[#D9D9D94F]">
                  <td className="p-4 rounded-bl-3xl border-r border-[#D7D7D7]">
                  Subscription Fee	
                  </td>
                  <td className="p-4 text-center text-[#737373]">Free	</td>
                  <td className="p-4 text-center text-[#737373]">
                    FRM 150/month	
                  </td>
                  <td className="p-4 text-center text-[#737373] rounded-br-3xl">
                    RM 500/month
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex flex-col items-center py-5  gap-y-5  w-[90%] lg:w-full max-lg:mx-auto text-center">
              <h1 className="font-medium lg:text-6xl text-xl mx-auto max-lg:w-[90%]">
                Learn More on Your Health
              </h1>
              <span className="text-center font-normal lg:text-2xl text-sm text-[#000000AD] max-lg:w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor <br /> incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud.
              </span>
              <div className="w-full mt-4 flex lg:justify-center gap-x-3 overflow-x-auto ">
                <div className="relative lg:w-[423.5px] lg:h-[550px] max-lg:min-w-full h-[389px] px-2 ">
                  <img
                    src="/image4.png"
                    alt="grow yourself"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-10 w-full bg-opacity-50 text-white px-10 rounded-b-lg py-2 gap-y-2">
                    <span className="font-medium lg:text-3xl text-xl">
                      Lorem ipsum dolor sit amet
                    </span>
                    <br />
                    <p className="font-normal lg:text-lg text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation....{" "}
                      <span className="underline">Read More</span>
                    </p>
                  </div>
                </div>
                <div className="relative lg:w-[423.5px] lg:h-[550px] max-lg:min-w-full h-[389px] px-2 ">
                  <img
                    src="/image4.png"
                    alt="grow yourself"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-10 w-full bg-opacity-50 text-white px-10 rounded-b-lg py-2 gap-y-2">
                    <span className="font-medium lg:text-3xl text-xl">
                      Lorem ipsum dolor sit amet
                    </span>
                    <br />
                    <p className="font-normal lg:text-lg text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation....{" "}
                      <span className="underline">Read More</span>
                    </p>
                  </div>
                </div>
                <div className="relative lg:w-[423.5px] lg:h-[550px] max-lg:min-w-full h-[389px]  px-2 ">
                  <img
                    src="/image4.png"
                    alt="grow yourself"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute bottom-10 w-full bg-opacity-50 text-white px-10 rounded-b-lg py-2 gap-y-2">
                    <span className="font-medium lg:text-3xl text-xl">
                      Lorem ipsum dolor sit amet
                    </span>
                    <br />
                    <p className="font-normal lg:text-lg text-sm mt-2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation....{" "}
                      <span className="underline">Read More</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
        </MaxWidthWrapper>
      </div>
      )}
    </div>
  );
};

export default Pricing;
