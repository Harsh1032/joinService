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
              alt="About StrokeSMART"
              className="w-full h-full object-cover scale-[1.3]"
            />
            {/* subtle overlay badge */}
            <div className="absolute top-5 left-5">
              <span className="inline-flex items-center rounded-md bg-[#4D97FF33] border border-[#4D97FF66] px-4 py-2 text-[#0050C1] text-sm font-semibold tracking-wide">
                ABOUT StrokeSMART
              </span>
            </div>
          </div>

          {/* Right: Copy */}
          <div className="flex flex-col gap-6">
            <h2 className="text-4xl xl:text-5xl font-semibold leading-tight">
              StrokeSMART
            </h2>

            {/* top intro line (short) */}
            <p className="text-lg xl:text-xl text-black/80">
              StrokeSMART reimagines post-stroke rehabilitation with{" "}
              <strong>AI-powered insights</strong>,{" "}
              <strong>explainable algorithms</strong>, and{" "}
              <strong>family-inclusive support</strong>.
            </p>

            {/* About card */}
            <div className="rounded-2xl bg-white shadow-sm border border-black/5 p-6">
              <h3 className="text-xl font-semibold">About StrokeSMART</h3>
              <div className="mt-4 space-y-4 text-black/80">
                <p>
                  <strong>StrokeSMART</strong> reimagines ageing and
                  rehabilitation with <strong>AI-powered insights</strong>,{" "}
                  <strong>explainable algorithms</strong>, and{" "}
                  <strong>family-inclusive support</strong>.
                </p>
                <p>
                  It’s more than technology — it’s a movement to make recovery{" "}
                  <strong>connected, measurable, and dignified</strong>.
                  StrokeSMART bridges the gap between hospitals, home care, and
                  therapy <strong>teams</strong> by turning data into decisions
                  everyone can trust.
                </p>
                <p>
                  Built in collaboration with{" "}
                  <strong>
                    stroke survivors, families, doctors, therapists, and
                    caregivers
                  </strong>
                  , StrokeSMART’s AI learns from real-world use to continuously
                  improve care. Every insight is transparent, every
                  recommendation explainable, and every outcome shared —
                  empowering both clinicians and families to act early and
                  confidently.
                </p>
                <p>
                  StrokeSMART sets the foundation for a broader ecosystem of
                  intelligent recovery and aged-care solutions —{" "}
                  <strong>scalable across Australia and Southeast Asia</strong>.
                </p>
              </div>
            </div>

            {/* Why our AI is different */}
            <div className="rounded-2xl bg-white shadow-sm border border-black/5 p-6">
              <h3 className="text-xl font-semibold">
                Why Our AI Is Different — It’s Explainable, Transparent, and
                Empowering
              </h3>
              <div className="mt-4 space-y-4 text-black/80">
                <p>
                  StrokeSMART’s AI is designed for{" "}
                  <strong>trust and empowerment — not confusion</strong>. Every
                  recommendation is explainable: clinicians can see what factors
                  drive each insight, and families can understand the “why”
                  behind every care decision.
                </p>
                <p>
                  Built with input from{" "}
                  <strong>
                    stroke survivors, families, doctors, therapists, and
                    caregivers
                  </strong>
                  , our models evolve with real-world use — translating clinical
                  data into <strong>actions and impact</strong>, not algorithms.
                </p>
                <p>
                  <strong>Result:</strong> more confident decisions, earlier
                  interventions, and measurable recovery outcomes — at home,
                  where recovery truly happens.
                </p>
              </div>
            </div>

            {/* Two-column detail (order matches your screenshot) */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Patients & Families (left) */}
              <div className="rounded-xl bg-white shadow-sm border border-black/5 p-5">
                <h4 className="font-semibold text-[#0050C1]">
                  For Patients & Families
                </h4>
                <div className="mt-2 text-black/80 space-y-3">
                  <p>
                    StrokeSMART translates complex rehab data and insights into
                    plain, compassionate language.
                  </p>
                  <p>Families can see why recovery is improving — for example:</p>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>
                      “Your improvement score is high (7/10) because you’ve been
                      consistent with therapy, and caregiver engagement is
                      strong. Let’s aim for 8/10 over the next 3 days. Just
                      follow the SMART goals on your dashboard.”
                    </li>
                    <li>
                      “This clarity builds trust, motivation, and hope — helping
                      survivors regain confidence and independence at home.”
                    </li>
                  </ul>
                </div>
              </div>

              {/* Care Teams & Clinicians (right) */}
              <div className="rounded-xl bg-white shadow-sm border border-black/5 p-5">
                <h4 className="font-semibold text-[#0050C1]">
                  Care Teams & Clinicians
                </h4>
                <div className="mt-2 text-black/80 space-y-3">
                  <p>
                    StrokeSMART gives every care professional — from GPs and
                    therapists to caregivers and hospital staff — one shared,
                    trusted view of recovery progress.
                  </p>
                  <p>
                    Dashboards highlight which factors (e.g., age, mobility
                    progress, therapy adherence) influence each patient’s
                    recovery score, making it easier to validate insights,
                    increase coordination, and trust recommendations.
                  </p>
                  <p>
                    <strong>The result:</strong> less admin, faster decisions,
                    and more time for care that truly matters.
                  </p>
                </div>
              </div>
            </div>

            {/* Roadmap */}
            <div className="rounded-xl bg-white shadow-sm border border-black/5 p-5">
              <h4 className="font-semibold">Our Roadmap</h4>
              <ul className="mt-2 space-y-2 text-black/80 list-disc pl-5">
                <li>
                  Add modules for <strong>diabetes, dementia, and chronic care</strong> —
                  expanding beyond stroke.
                </li>
                <li>
                  Partner across <strong>Southeast Asia</strong> to make
                  connected care the norm.
                </li>
                <li>
                  Use <strong>ethical data</strong> and{" "}
                  <strong>predictive analytics</strong> to prevent crises before
                  they happen.
                </li>
              </ul>
              {/* optional italic footer line from screenshot
              <p className="mt-3 italic text-black/60">
                (StrokeSMART is just the beginning — each new module strengthens CareNex’s AI position as Southeast Asia’s most trusted, AI-driven home and primary care ecosystem.)
              </p>
              */}
            </div>
          </div>
        </div>

        {/* MOBILE / SMALL (unchanged shell; update copy later if you want parity) */}
        <div className="lg:hidden flex flex-col gap-5">
          <div className="flex justify-center">
            <span className="inline-flex items-center rounded-md bg-[#4D97FF33] border border-[#4D97FF66] px-3 py-1.5 text-[#0050C1] text-xs font-semibold tracking-wide">
              ABOUT STROKESMART
            </span>
          </div>

          <img
            src="image3.png"
            alt="About StrokeSMART"
            className="w-full rounded-xl object-cover"
          />

          {/* ...rest of mobile content unchanged... */}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Hero;
