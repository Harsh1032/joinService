// src/components/MissionVision.jsx
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const MissionVision = () => {
  return (
    <section
      id="mission"
      className="scroll-mt-[88px] md:scroll-mt-[96px] py-10 md:py-14 bg-white"
    >
      <MaxWidthWrapper>
        {/* Eyebrow */}
        <div className="text-center">
          <span className="text-xs md:text-sm font-semibold tracking-wide text-[#2563EB] uppercase">
            Our Solutions
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-2 text-center text-3xl md:text-5xl font-semibold leading-tight text-[#0B0B0B]">
          StrokeSMART for Every Stakeholder
        </h2>

        {/* 3 Solution Cards */}
        <div className="mt-8 md:mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {/* PATIENTS & FAMILIES */}
          <div className="rounded-xl bg-[#F8F8F8] border border-[#B7B7B7] p-6 md:p-8">
            <div className="flex items-center justify-center">
              <img
                src="/icon11.png"
                alt="Patients & Families icon"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="mt-4 text-center text-xl md:text-2xl font-extrabold tracking-wide text-[#0B1B4A]">
              PATIENTS & FAMILIES
            </h3>
            <p className="mt-3 text-center text-sm md:text-base font-semibold text-[#2563EB] leading-relaxed">
              StrokeSMART makes recovery at home trustworthy, guided and cheaper.
            </p>
            <p className="mt-2 text-center text-sm md:text-base text-[#4B5563] leading-relaxed">
              StrokeSMART makes recovery at home trustworthy, guided and cheaper.
StrokeSMART technology provides AI-powered SMART recovery plans, guided routines verified by experts, real-time dashboards and step by step support for families that make stroke rehab clearer, safer, and more effective — so survivors move closer to normal life without the guesswork.

            </p>
          </div>

          {/* CLINICIANS & ALLIED CARE */}
          <div className="rounded-xl bg-[#F8F8F8] border border-[#B7B7B7] p-6 md:p-8">
            <div className="flex items-center justify-center">
              <img
                src="/icon12.png"
                alt="Clinicians & Allied Care icon"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="mt-4 text-center text-xl md:text-2xl font-extrabold tracking-wide text-[#0B1B4A]">
              CLINICIANS & ALLIED CARE
            </h3>
            <p className="mt-3 text-center text-sm md:text-base font-semibold text-[#2563EB] leading-relaxed">
              StrokeSMART gives you smarter tools for better care.
            </p>
            <p className="mt-2 text-center text-sm md:text-base text-[#4B5563] leading-relaxed">
              StrokeSMART Technology turns rehab into AI-guided SMART goals you can track in real time specific to each patient.
It goes beyond monitoring — it predicts risks, flags missed milestones, adjusts explainable care requirement, decision support and shares recovery dashboards with families and therapists. You get coordinated actionable insights, not more admin — reducing or preventing readmissions, giving you confidence in every decision and saving time.

            </p>
          </div>

          {/* FUNDERS & PARTNERS */}
          <div className="rounded-xl bg-[#F8F8F8] border border-[#B7B7B7] p-6 md:p-8">
            <div className="flex items-center justify-center">
              <img
                src="/icon13.png"
                alt="Funders & Partners icon"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="mt-4 text-center text-xl md:text-2xl font-extrabold tracking-wide text-[#0B1B4A]">
              FUNDERS & PARTNERS
            </h3>
            <p className="mt-3 text-center text-sm md:text-base font-semibold text-[#2563EB] leading-relaxed">
              StrokeSMART turns inefficiency into scalable impact.
            </p>
            <p className="mt-2 text-center text-sm md:text-base text-[#4B5563] leading-relaxed">
              StrokeSMART turns inefficiency into scalable impact.
StrokeSMART Technology is a scalable SaaS AI platform that reduces unnecessary hospital referrals, cuts care costs, and creates recurring revenue streams in Malaysia’s RM 1B+ rehab and homecare market — with expansion into Southeast Asia’s USD 100B aged care economy.

            </p>
          </div>
        </div>

        {/* Wide Mission & Vision Card */}
        <div className="mt-5 md:mt-6 rounded-xl bg-[#F8F8F8] border border-[#B7B7B7] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Image */}
            <div className="md:col-span-2">
              <img
                src="/mission.jpg" /* replace with your image path */
                alt="Mission & Vision"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text */}
            <div className="md:col-span-3 p-6 md:p-8">
              <h3 className="text-lg md:text-xl font-extrabold tracking-wide text-[#0B1B4A] mb-4">
                OUR VISION & MISSION
              </h3>
              
              <div className="mb-4">
                <h4 className="text-base md:text-lg font-bold text-[#2563EB] mb-2">Vision</h4>
                <p className="text-sm md:text-base text-[#4B5563] leading-relaxed italic">
                  A world where stroke survivors regain dignity and independence — supported by AI-driven collaboration between families, GPs, and care teams.
                </p>
              </div>
              
              <div>
                <h4 className="text-base md:text-lg font-bold text-[#2563EB] mb-2">Mission</h4>
                <p className="text-sm md:text-base text-[#4B5563] leading-relaxed italic">
                  We make stroke recovery simpler and stronger through StrokeSMART technology — connecting patients, families, and providers with AI-supported decision-making and coordinated care pathways.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default MissionVision;