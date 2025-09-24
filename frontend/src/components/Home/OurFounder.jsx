// src/components/OurFounder.jsx
import React from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";

const OurFounder = () => {
  return (
    <section
      id="founder"
      className="scroll-mt-[88px] md:scroll-mt-[96px] py-10 md:py-16 bg-white"
    >
      <MaxWidthWrapper>
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
        {/* Title */}
<h2 className="mt-12 md:mt-16 text-center text-3xl md:text-5xl font-semibold leading-tight">
  The Founder’s Why
</h2>

        {/* Card */}
        <div className="mt-8 md:mt-12 rounded-2xl border border-[#B7B7B7] bg-[#F8F8F8] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-10 p-6 md:p-10">
            {/* Photo */}
            <figure className="md:col-span-5">
              <div className="rounded-xl overflow-hidden md:h-[480px] lg:h-[520px]">
                <img
                  src="/founder.jpg" /* replace with your path */
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </figure>

            {/* Copy */}
            <div className="md:col-span-7 flex flex-col gap-6 justify-center">
              <div className="max-w-[62ch]">
                <p className="text-base md:text-lg leading-relaxed text-black/80">
                  I faced many challenges as a stroke survivor during my rehab. I faced difference of opinion between specialist and GP. I forgot my medicine routine or was over confident of my ability to chew and swallow food or liquid. I forgot or missed my speech therapy and physio routine. It affected my morale, my confidence to bounce to a normal life. Will ever have one again? How normal would it be? The worse was the post stroke fatigue. It was debilitating yet there was no real advice or guidance. It was not coordinated at all. My daily living activity was affected. The goals of recovery were verbal and it didn't feel personalised. I had to change the medication based on my body's reaction against the GPs advice. I didn't go to the specialist because I was worried about the cost since I am not able to earn an income. I became dependant on my wife's sole effort in earning a salary to sustain our livelihood.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default OurFounder;