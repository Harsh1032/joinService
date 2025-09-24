// src/components/Plans.jsx
import React, { useState } from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

export default function Plans() {
  const [selectedButton, setSelectedButton] = useState("explorePlans");

  return (
    <div className="w-full bg-[#D9D9D94F] min-h-screen">
      <MaxWidthWrapper>
        <div className="flex flex-col items-center pt-5">
          <h1 className="lg:text-6xl text-xl font-semibold mb-5">
            Choose the Right Plan for You
          </h1>

          <div className="flex lg:gap-x-5 max-lg:w-[75%] mt-5">
            <button
              className={`${
                selectedButton === "explorePlans" ? "bg-[#D4E6FF]" : "bg-[#D9D9D94F]"
              } lg:px-4 px-2 lg:py-3 py-2 max-lg:mx-auto lg:rounded-t-[9px] rounded-t-[3px]`}
              onClick={() => setSelectedButton("explorePlans")}
            >
              <span
                className={`${
                  selectedButton === "explorePlans" ? "text-[#0050C1]" : "text-[#747474]"
                } font-medium lg:text-xl text-sm`}
              >
                Explore care plans
              </span>
            </button>

            <button
              className={`${
                selectedButton === "growPractice" ? "bg-[#D4E6FF]" : "bg-[#D9D9D94F]"
              } lg:px-4 px-2 lg:py-3 py-2 max-lg:mx-auto lg:rounded-t-[9px] rounded-t-[3px]`}
              onClick={() => setSelectedButton("growPractice")}
            >
              <span
                className={`${
                  selectedButton === "growPractice" ? "text-[#0050C1]" : "text-[#747474]"
                } font-medium lg:text-xl text-sm`}
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

              <div className="flex flex-row gap-x-[1px] lg:w-[72%]">
                <div className="flex flex-col bg-[#D9D9D961] lg:rounded-l-3xl rounded-l-md lg:w-[33%] min-w-[180px] px-5 py-4 gap-y-2">
                  <span className="text-black font-medium lg:text-2xl text-lg">Basic</span>
                  <button className="flex items-center p-1 justify-center bg-transparent rounded-md border-[0.7px] border-[#AAAAAA]">
                    <span className="font-medium lg:text-2xl text-lg">Get Started</span>
                  </button>
                </div>

                <div className="flex flex-col bg-[#D4E6FF] lg:w-[33%] min-w-[180px] px-5 py-4 gap-y-2">
                  <span className="text-black font-medium lg:text-2xl text-lg">Standard</span>
                  <button className="flex items-center p-1 justify-center bg-[#217DFF] rounded-md">
                    <span className="font-medium lg:text-2xl text-lg text-white">Subscribe Now</span>
                  </button>
                </div>

                <div className="flex flex-col bg-[#D4E6FF] lg:rounded-r-3xl rounded-r-md lg:w-[33%] min-w-[180px] px-5 py-4 gap-y-2">
                  <span className="text-black font-medium lg:text-2xl text-lg">Premium</span>
                  <button className="flex items-center p-1 justify-center bg-[#217DFF] rounded-md">
                    <span className="font-medium lg:text-2xl text-lg text-white">Subscribe Now</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto lg:w-full w-[90%] max-lg:mx-auto">
              <table className="w-full text-left border-collapse my-5">
                <thead>
                  <tr className="bg-[#D9D9D9]">
                    <th className="p-4 rounded-tl-3xl">Plans & Pricing</th>
                    <th className="p-4 text-center">Free</th>
                    <th className="p-4 text-center">RM 50/mo</th>
                    <th className="p-4 text-center rounded-tr-3xl">RM 150/mo</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">Dashboard/Health Record Storage</td>
                    <td className="p-4 text-center text-[#737373]">Limited Storage</td>
                    <td className="p-4 text-center text-[#737373]">Full Storage + Appointment Scheduling</td>
                    <td className="p-4 text-center text-[#737373]">Full Storage + Appointment Scheduling</td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 border-r border-[#D7D7D7]">Customer Support</td>
                    <td className="p-4 text-[#737373] text-center">Basic Support</td>
                    <td className="p-4 text-[#737373] text-center">Priority Support</td>
                    <td className="p-4 text-[#737373] text-center">24/7 Premium Support</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">Panel Clinics</td>
                    <td className="p-4 text-center text-[#737373]">❌</td>
                    <td className="p-4 text-center text-[#737373]">Access to Partner Clinics</td>
                    <td className="p-4 text-center text-[#737373]">Access to Partner Clinics</td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 border-r border-[#D7D7D7]">Telehealth Platform</td>
                    <td className="p-4 text-[#737373] text-center">1 Basic Consultation</td>
                    <td className="p-4 text-[#737373] text-center">3 Consultations/Month</td>
                    <td className="p-4 text-[#737373] text-center">Unlimited Telehealth Care</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">Medication Reminders</td>
                    <td className="p-4 text-center text-[#737373]">✅</td>
                    <td className="p-4 text-center text-[#737373]">✅</td>
                    <td className="p-4 text-center text-[#737373]">✅</td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 border-r border-[#D7D7D7]">Health Information Resources</td>
                    <td className="p-4 text-[#737373] text-center">Access to Articles</td>
                    <td className="p-4 text-[#737373] text-center">Access to Articles & Videos</td>
                    <td className="p-4 text-[#737373] text-center">Comprehensive Resources</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">Therapist and Nutritionist</td>
                    <td className="p-4 text-center text-[#737373]">❌</td>
                    <td className="p-4 text-center text-[#737373]">Limited Access</td>
                    <td className="p-4 text-center text-[#737373]">Priority Access</td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 border-r border-[#D7D7D7]">Extended Telehealth Care</td>
                    <td className="p-4 text-[#737373] text-center">❌</td>
                    <td className="p-4 text-[#737373] text-center">✅</td>
                    <td className="p-4 text-[#737373] text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">Transportation Arrangement</td>
                    <td className="p-4 text-center text-[#737373]">❌</td>
                    <td className="p-4 text-center text-[#737373]">Limited (2 Trips/Month)</td>
                    <td className="p-4 text-center text-[#737373]">Unlimited</td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 border-r border-[#D7D7D7]">Access to Geriatric Consultant</td>
                    <td className="p-4 text-[#737373] text-center">❌</td>
                    <td className="p-4 text-[#737373] text-center">❌</td>
                    <td className="p-4 text-[#73773] text-center">✅</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">Access to US Consultants</td>
                    <td className="p-4 text-center text-[#737373]">❌</td>
                    <td className="p-4 text-center text-[#737373]">❌</td>
                    <td className="p-4 text-center text-[#737373]">✅</td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 rounded-bl-3xl border-r border-[#D7D7D7]">Personalized AI Insights</td>
                    <td className="p-4 text-center text-[#737373]">❌</td>
                    <td className="p-4 text-center text-[#737373]">Fully Tailored Care Plans</td>
                    <td className="p-4 text-center text-[#737373] rounded-br-3xl">Fully Tailored Care Plans</td>
                  </tr>
                </tbody>
              </table>
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

              <div className="flex flex-row gap-x-[1px] lg:w-[72%]">
                <div className="flex flex-col bg-[#D9D9D961] lg:rounded-l-3xl rounded-l-md lg:w-[33%] min-w-[180px] px-5 py-4 gap-y-2">
                  <span className="text-black font-medium lg:text-2xl text-lg">Basic</span>
                  <button className="flex items-center p-1 justify-center bg-transparent rounded-md border-[0.7px] border-[#AAAAAA]">
                    <span className="font-medium lg:text-2xl text-lg">Get Started</span>
                  </button>
                </div>

                <div className="flex flex-col bg-[#D4E6FF] lg:w-[33%] min-w-[180px] px-5 py-4 gap-y-2">
                  <span className="text-black font-medium lg:text-2xl text-lg">Standard</span>
                  <button className="flex items-center p-1 justify-center bg-[#217DFF] rounded-md">
                    <span className="font-medium lg:text-2xl text-lg text-white">Subscribe Now</span>
                  </button>
                </div>

                <div className="flex flex-col bg-[#D4E6FF] lg:rounded-r-3xl rounded-r-md lg:w-[33%] min-w-[180px] px-5 py-4 gap-y-2">
                  <span className="text-black font-medium lg:text-2xl text-lg">Premium</span>
                  <button className="flex items-center p-1 justify-center bg-[#217DFF] rounded-md">
                    <span className="font-medium lg:text-2xl text-lg text-white">Subscribe Now</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto lg:w-full w-[90%] max-lg:mx-auto">
              <table className="w-full text-left border-collapse my-5">
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
                    <td className="p-4 border-r border-[#D7D7D7]">Profile Visibility</td>
                    <td className="p-4 text-center text-[#737373]">Limited (Search Only)</td>
                    <td className="p-4 text-center text-[#737373]">Highlighted in Results</td>
                    <td className="p-4 text-center text-[#737373]">Top Search Placement</td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 border-r border-[#D7D7D7]">Appointment Booking</td>
                    <td className="p-4 text-[#737373] text-center">Included</td>
                    <td className="p-4 text-[#737373] text-center">Included</td>
                    <td className="p-4 text-[#737373] text-center">Included</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">Teleconsultation Tools</td>
                    <td className="p-4 text-center text-[#737373]">Basic Video Support</td>
                    <td className="p-4 text-center text-[#737373]">Advanced Video</td>
                    <td className="p-4 text-center text-[#737373]">Tools Priority Support</td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 border-r border-[#D7D7D7]">Practice Management Dashboard</td>
                    <td className="p-4 text-[#737373] text-center">Limited Features</td>
                    <td className="p-4 text-[#737373] text-center">Full Features</td>
                    <td className="p-4 text-[#737373] text-center">Full Features + Priority</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">Analytics & Insights</td>
                    <td className="p-4 text-center text-[#737373]">Not Included</td>
                    <td className="p-4 text-center text-[#737373]">Basic Insights</td>
                    <td className="p-4 text-center text-[#737373]">Advanced AI-Driven Insights</td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 border-r border-[#D7D7D7]">Patient Reviews & Feedback</td>
                    <td className="p-4 text-[#737373] text-center">Included</td>
                    <td className="p-4 text-[#737373] text-center">Included</td>
                    <td className="p-4 text-[#737373] text-center">Highlighted Reviews</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">Marketing Support</td>
                    <td className="p-4 text-center text-[#737373]">Not Included</td>
                    <td className="p-4 text-center text-[#737373]">Platform Promotions</td>
                    <td className="p-4 text-center text-[#737373]">Featured Promotions</td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 border-r border-[#D7D7D7]">Custom Branding</td>
                    <td className="p-4 text-[#737373] text-center">Not Included</td>
                    <td className="p-4 text-[#737373] text-center">Included</td>
                    <td className="p-4 text-[#737373] text-center">Included</td>
                  </tr>
                  <tr>
                    <td className="p-4 border-r border-[#D7D7D7]">Patient Sharing/Referral</td>
                    <td className="p-4 text-center text-[#737373]">Not Included</td>
                    <td className="p-4 text-center text-[#737373]">Limited (5 Referrals/Month)</td>
                    <td className="p-4 text-center text-[#737373]">Unlimited</td>
                  </tr>
                  <tr className="bg-[#D9D9D94F]">
                    <td className="p-4 rounded-bl-3xl border-r border-[#D7D7D7]">Subscription Fee</td>
                    <td className="p-4 text-center text-[#737373]">Free</td>
                    <td className="p-4 text-center text-[#737373]">RM 150/month</td>
                    <td className="p-4 text-center text-[#737373] rounded-br-3xl">RM 500/month</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Learn More cards */}
            <div className="flex flex-col items-center py-8 lg:py-12 gap-y-5 w-[92%] lg:w-full max-lg:mx-auto text-center">
              <h1 className="font-semibold lg:text-5xl text-2xl mx-auto max-w-[900px]">
                Learn More on Your Health
              </h1>
              <span className="text-center font-normal lg:text-xl text-sm text-[#000000AD] max-w-[820px]">
                Learn how StrokeSMART supports patients &amp; families, clinicians, and partners with
                AI-guided recovery, coordinated care, and scalable impact.
              </span>

              <div className="w-full mt-6 flex lg:justify-center gap-x-3 overflow-x-auto lg:grid lg:grid-cols-3 lg:gap-6 snap-x snap-mandatory">
                {/* Patients & Families */}
                <div className="relative lg:w-[423.5px] lg:h-[560px] max-lg:min-w-[85%] h-[420px] px-2 snap-center rounded-2xl overflow-hidden">
                  <img src="/image4.png" alt="Patients & Families" className="w-full h-full object-cover rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 rounded-2xl" />
                  <div className="absolute bottom-0 w-full text-left text-white px-5 py-6">
                    <span className="inline-block text-[12px] lg:text-sm font-semibold uppercase tracking-wider text-blue-200">
                      For Patients &amp; Families
                    </span>
                    <h3 className="mt-2 font-semibold lg:text-2xl text-lg">
                      AI-personalised recovery, clearer progress, lower cost.
                    </h3>
                    <ul className="mt-3 space-y-1 text-sm lg:text-base text-white/90">
                      <li>• AI-personalised recovery plans tailored to the survivor’s progress.</li>
                      <li>• A real-time family dashboard powered by StrokeSMART Technology.</li>
                      <li>• Reduced long-term costs by avoiding unnecessary hospital visits.</li>
                    </ul>
                  </div>
                </div>

                {/* Clinicians & Allied Care */}
                <div className="relative lg:w-[423.5px] lg:h-[560px] max-lg:min-w-[85%] h-[420px] px-2 snap-center rounded-2xl overflow-hidden">
                  <img src="/image4.png" alt="Clinicians & Allied Care" className="w-full h-full object-cover rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 rounded-2xl" />
                  <div className="absolute bottom-0 w-full text-left text-white px-5 py-6">
                    <span className="inline-block text-[12px] lg:text-sm font-semibold uppercase tracking-wider text-blue-200">
                      For Clinicians &amp; Allied Care
                    </span>
                    <h3 className="mt-2 font-semibold lg:text-2xl text-lg">
                      Smarter tools. Better decisions. Less admin.
                    </h3>
                    <ul className="mt-3 space-y-1 text-sm lg:text-base text-white/90">
                      <li>• AI decision support &amp; predictive alerts to guide interventions.</li>
                      <li>• Shared dashboards to coordinate with families and allied teams.</li>
                      <li>• Tech-enabled workflows that reduce admin burden.</li>
                    </ul>
                  </div>
                </div>

                {/* Funders & Partners */}
                <div className="relative lg:w-[423.5px] lg:h-[560px] max-lg:min-w-[85%] h-[420px] px-2 snap-center rounded-2xl overflow-hidden">
                  <img src="/image4.png" alt="Funders & Partners" className="w-full h-full object-cover rounded-2xl" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/10 rounded-2xl" />
                  <div className="absolute bottom-0 w-full text-left text-white px-5 py-6">
                    <span className="inline-block text-[12px] lg:text-sm font-semibold uppercase tracking-wider text-blue-200">
                      For Funders &amp; Partners
                    </span>
                    <h3 className="mt-2 font-semibold lg:text-2xl text-lg">
                      Scalable AI platform with strong economics.
                    </h3>
                    <ul className="mt-3 space-y-1 text-sm lg:text-base text-white/90">
                      <li>• Proprietary AI platform monetised via subscriptions, SaaS, and partnerships.</li>
                      <li>• Direct access to a RM 1B+ stroke rehab/homecare segment with proven scalability.</li>
                      <li>• Technology moat — StrokeSMART IP enables growth beyond stroke into dementia, diabetes, and chronic care.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </MaxWidthWrapper>
        </div>
      )}
    </div>
  );
}
