// src/components/Hero.jsx
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const Hero = () => {
  return (
    <div id="aboutUs" className="w-full py-10 bg-[#D9D9D94F]">
      <MaxWidthWrapper>
        {/* DESKTOP / LARGE */}
        <div className="hidden lg:grid grid-cols-2 gap-10 items-center">
          {/* Left: Visual */}
          <div className="relative overflow-hidden rounded-2xl shadow-xl">
            <img
              src="image2.png"
              alt="About CareHub.asia"
              className="w-full h-full object-cover scale-[1.3]" 
            />
            {/* subtle overlay badge */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center rounded-md bg-[#4D97FF33] border border-[#4D97FF66] px-4 py-2 text-[#0050C1] text-sm font-semibold tracking-wide">
                ABOUT CAREHUB.ASIA
              </span>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl xl:text-5xl font-semibold leading-tight">
              The Platform Behind StrokeSMART
            </h2>

            <p className="text-lg xl:text-xl text-black/80">
              CareHub.asia reimagines ageing and rehabilitation with AI-powered
              insights, explainable algorithms, family-inclusive support, and
              connected care.
            </p>

            {/* Highlight card */}
            <div className="rounded-2xl bg-white shadow-sm border border-black/5 p-6">
              <h3 className="text-xl font-semibold">
                Why Our AI Is Different — It’s Explainable and Transparent
              </h3>
              <div className="mt-4 space-y-4 text-black/80">
                <p>
                  At CareHub.asia, we believe ageing and recovery should be
                  personalised, preventive, and full of dignity. That’s why
                  CareHub.asia is building a cloud-based hub for AI-driven home
                  and primary care solutions.
                </p>
                <p>
                  <strong>StrokeSMART</strong>, our first feature, is an
                  AI-supported rehab and collaboration tool helping stroke
                  survivors, families, allied health providers, and clinicians
                  work together for better outcomes.
                </p>
                <p>
                  Ageing and recovery should be empowering — not confusing.
                  StrokeSMART Technology uses explainable AI — algorithms
                  designed to make their reasoning clear.
                </p>
              </div>
            </div>

            {/* Two-column detail */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-white shadow-sm border border-black/5 p-5">
                <h4 className="font-semibold text-[#0050C1]">
                  For Clinicians & Therapists
                </h4>
                <p className="mt-2 text-black/80">
                  Dashboards highlight which factors (e.g., age, mobility
                  progress, therapy adherence) influence each patient’s recovery
                  score — making it easier to validate and trust
                  recommendations.
                </p>
              </div>
              <div className="rounded-xl bg-white shadow-sm border border-black/5 p-5">
                <h4 className="font-semibold text-[#0050C1]">
                  For Patients & Families
                </h4>
                <p className="mt-2 text-black/80">
                  Insights are translated into plain language: “Your improvement
                  score is high because you’ve been consistent with therapy, and
                  caregiver engagement is strong.”
                </p>
              </div>
            </div>

            {/* Assurances */}
            <div className="rounded-xl bg-white shadow-sm border border-black/5 p-5">
              <p className="text-black/80">
                Even as our models grow smarter (e.g., using medical images or
                sensor data), we’ll keep explanations simple and visual — showing
                what data points mattered most. We co-design with real doctors
                and therapists so predictions reflect clinical wisdom, not just
                data. Every recommendation is backed by clear reasoning you can
                understand and act on.
              </p>
              <p className="mt-3 font-medium">
                The result: Better decisions you can trust, care plans you
                understand, and outcomes everyone can see improving.
              </p>
            </div>

            {/* Future vision */}
            <div className="rounded-xl bg-white shadow-sm border border-black/5 p-5">
              <h4 className="font-semibold">Our future vision</h4>
              <ul className="mt-2 space-y-2 text-black/80 list-disc pl-5">
                <li>Add modules for diabetes, dementia, and chronic care.</li>
                <li>
                  Partner across Southeast Asia to make connected care the norm.
                </li>
                <li>
                  Use ethical data & predictive analytics to prevent crises
                  before they happen.
                </li>
              </ul>
            </div>

            
          </div>
        </div>

        {/* MOBILE / SMALL (unchanged) */}
        <div className="lg:hidden flex flex-col gap-5">
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-md bg-[#4D97FF33] border border-[#4D97FF66] px-3 py-1.5 text-[#0050C1] text-xs font-semibold tracking-wide">
              ABOUT CAREHUB.ASIA
            </span>
          </div>

          <img
            src="image3.png"
            alt="About CareHub.asia"
            className="w-full rounded-xl object-cover"
          />

          {/* ... rest of mobile content unchanged ... */}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
