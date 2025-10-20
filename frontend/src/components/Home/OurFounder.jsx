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
        {/* Vision & Mission Card */}
        <div className="mt-5 md:mt-6 rounded-xl bg-[#F8F8F8] border border-[#B7B7B7] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-5">
            {/* Image */}
            <div className="md:col-span-2">
              <img
                src="/mission.jpg"
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
                <h4 className="text-base md:text-lg font-bold text-[#2563EB] mb-2">
                  Vision
                </h4>
                <p className="text-sm md:text-base text-[#4B5563] leading-relaxed italic">
                  A world where stroke survivors and their families regain
                  dignity, independence, and confidence — through connected,
                  AI-powered care that bridges homes, clinics, and communities.
                </p>
              </div>

              <div>
                <h4 className="text-base md:text-lg font-bold text-[#2563EB] mb-2">
                  Mission
                </h4>
                <p className="text-sm md:text-base text-[#4B5563] leading-relaxed italic">
                  To make recovery simpler, smarter, and more human — by
                  connecting patients, families, and providers through
                  explainable AI and coordinated digital care pathways.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Title */}
        <h2 className="mt-12 md:mt-16 text-center text-3xl md:text-5xl font-semibold leading-tight">
          The Founder’s Why
        </h2>

        {/* Founder Story Card */}
        <div className="mt-8 md:mt-12 rounded-2xl border border-[#B7B7B7] bg-[#F8F8F8] shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-8 md:gap-10 p-6 md:p-10">
            {/* Photo */}
            <figure className="md:col-span-5">
              <div className="rounded-xl overflow-hidden md:h-[480px] lg:h-[520px]">
                <img
                  src="/founder.jpg"
                  alt="Founder"
                  className="w-full h-full object-cover"
                />
              </div>
            </figure>

            {/* Text */}
            <div className="md:col-span-7 flex flex-col gap-6 justify-center">
              <div className="max-w-[62ch]">
                <p className="text-base md:text-lg leading-relaxed text-black/80">
                  I faced many challenges as a stroke survivor — from
                  inconsistent advice between specialists and GPs, to gaps in
                  therapy, motivation, and cost barriers. My recovery lacked
                  coordination, and my confidence suffered. I didn’t know what
                  “normal” was anymore. I even had to change my medication based
                  on my body’s reaction against the GP’s advice.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-black/80 mt-4">
                  The worst was the post-stroke fatigue. It was debilitating,
                  yet there was no real advice or guidance. My daily living
                  activities were affected, and the goals of recovery felt
                  verbal, generic, and impersonal.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-black/80 mt-4">
                  Through that struggle, I discovered a universal truth: stroke
                  recovery isn’t just medical — it’s emotional, logistical, and
                  deeply human.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-black/80 mt-4">
                  I am building <strong>StrokeSMART</strong> to make recovery{" "}
                  <strong>connected, measurable, and dignified</strong> — so no
                  survivor or family ever feels lost again.
                </p>
                <p className="text-base md:text-lg leading-relaxed text-black/80 mt-4">
                  Today, <strong>StrokeSMART</strong> isn’t just my story — it’s
                  a platform born from it.
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
