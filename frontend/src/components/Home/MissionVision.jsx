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
            StrokeSMART Solutions
          </span>
        </div>

        {/* Title */}
        <h2 className="mt-2 text-center text-3xl md:text-5xl font-semibold leading-tight text-[#0B0B0B]">
          StrokeSMART for Every Stakeholder
        </h2>
        {/* Subtitle */}
        <p className="mt-2 text-center text-sm md:text-base text-[#4B5563]">
          One Platform, Multiple Stakeholders
        </p>

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
              From Confusion to Clarity
            </p>
            <p className="mt-2 text-center text-sm md:text-base text-[#4B5563] leading-relaxed">
              StrokeSMART turns post-stroke recovery into guided, step-by-step care.
              AI-powered SMART goals, verified by clinicians, show families exactly
              what to do each day — reducing stress, hospital visits, and costs while
              improving confidence in recovery.
            </p>
          </div>

          {/* Care Teams & Clinicians */}
          <div className="rounded-xl bg-[#F8F8F8] border border-[#B7B7B7] p-6 md:p-8">
            <div className="flex items-center justify-center">
              <img
                src="/icon12.png"
                alt="Care Teams & Clinicians icon"
                className="w-16 h-16 object-contain"
              />
            </div>
            <h3 className="mt-4 text-center text-xl md:text-2xl font-extrabold tracking-wide text-[#0B1B4A]">
              Care Teams & Clinicians
            </h3>
            <p className="mt-3 text-center text-sm md:text-base font-semibold text-[#2563EB] leading-relaxed">
              From Overload to Insightful, Explainable Care
            </p>
            <p className="mt-2 text-center text-sm md:text-base text-[#4B5563] leading-relaxed">
              StrokeSMART Technology turns stroke rehab into AI-guided SMART goals
              that clinicians can track in real time for each patient. It monitors —
              predicts risks, flags missed milestones, and adjusts care plans
              dynamically based on patient progress. Each recommendation is clear
              and explainable — showing which factors drive every insight. Shared
              dashboards connect families, therapists, and GPs in one view — cutting
              admin, preventing readmissions, and helping care teams act with
              confidence.
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
              From System Strain to Scalable Impact
            </p>
            <p className="mt-2 text-center text-sm md:text-base text-[#4B5563] leading-relaxed">
              StrokeSMART is a subscription-based scalable SaaS AI platform that
              turns inefficiency into measurable value. It reduces unnecessary hospital
              readmissions, lowers rehabilitation costs, and transforms home-based
              stroke care into recurring, scalable revenue — starting with Australia’s
              A$9 billion stroke-related economic burden, and expanding across
              Southeast Asia’s USD 100 billion ageing and home-care economy.
            </p>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default MissionVision;
