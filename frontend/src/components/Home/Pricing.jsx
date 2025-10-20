import React, { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ChevronDown, ChevronUp } from "lucide-react";

const Pricing = () => {
  const [selectedButton, setSelectedButton] = useState("explorePlans");
  const [expandedCard, setExpandedCard] = useState(null); // <-- fixed

  return (
    <div id="pricing" className="w-full bg-[#D9D9D94F] pt-5">
      <MaxWidthWrapper>
        {/* === FEATURES & BENEFITS (same design, updated copy only) === */}
<div className="flex flex-col items-center py-5 gap-y-5 w-[90%] lg:w-full max-lg:mx-auto text-center">
  <h1 className="font-medium lg:text-6xl text-xl mx-auto max-lg:w-[90%]">
    Features & Benefits
  </h1>
  <span className="text-center font-normal lg:text-2xl text-sm text-[#000000AD] max-lg:w-[80%]">
    Inside StrokeSMART — The Technology Behind the Transformation
  </span>

  <div className="w-full mt-4 flex lg:justify-center gap-x-3 overflow-x-auto">
    {/* === Card 1: Patients & Families === */}
    <div className={`relative lg:w-[423.5px] max-lg:min-w-full rounded-2xl overflow-hidden transition-all duration-500 ease-in-out ${
      expandedCard === 0 ? 'lg:h-auto' : 'lg:h-[550px] h-[389px]'
    }`}>
      <img
        src="/image4.png"
        alt="Patients & Families"
        className="w-full h-[550px] max-lg:h-[389px] object-cover rounded-2xl transform scale-[1.14]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-2xl" />
      <div className="absolute inset-0 flex flex-col justify-end text-white">
        <div className="px-6 py-6">
          <span className="inline-block text-[12px] lg:text-sm font-semibold uppercase tracking-wider text-blue-200">
            For Patients & Families
          </span>
          <h3 className="mt-2 font-semibold lg:text-2xl text-lg">
            AI-personalised recovery, clearer progress, lower cost.
          </h3>

          {/* Top bullets (Features) */}
          <ul className="mt-3 space-y-1 text-sm lg:text-base text-white/90">
            <li>• AI-powered StrokeSMART recovery plans that adapt to progress.</li>
            <li>• Family dashboard showing exercises, milestones, and clinician feedback.</li>
            <li>• Automated reminders and adherence tracking to keep routines on target.</li>
            <li>• Secure data sharing with GPs and allied health professionals.</li>
          </ul>

          {/* Toggle */}
          <button
            onClick={() => setExpandedCard(expandedCard === 0 ? null : 0)}
            className="mt-4 flex items-center gap-2 text-sm lg:text-base font-medium text-blue-200 hover:text-blue-100 transition-colors group"
          >
            {expandedCard === 0 ? 'Show Less' : 'View Benefits'}
            {expandedCard === 0 ? (
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>

          {/* Expanded (Benefits) */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expandedCard === 0 ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-white/20 pt-4">
              <h4 className="text-base lg:text-lg font-semibold mb-3 text-blue-200">Benefits:</h4>
              <div className="space-y-3">
                <div className="text-white/90">
                  <h5 className="font-medium text-sm lg:text-base text-white mb-1">
                    Personalised Recovery That Adapts to You
                  </h5>
                  <p className="text-xs lg:text-sm text-white/80 leading-relaxed">
                    Recalibration of plans for faster recovery and independence — reducing frustration.
                  </p>
                </div>
                <div className="text-white/90">
                  <h5 className="font-medium text-sm lg:text-base text-white mb-1">
                    Window Into Your Loved One&apos;s Care
                  </h5>
                  <p className="text-xs lg:text-sm text-white/80 leading-relaxed">
                    Greater peace of mind through transparency and updates — keeping you informed, connected, and confident.
                  </p>
                </div>
                <div className="text-white/90">
                  <h5 className="font-medium text-sm lg:text-base text-white mb-1">
                    Smarter Care, Lower Costs Over Time
                  </h5>
                  <p className="text-xs lg:text-sm text-white/80 leading-relaxed">
                    Cutting unnecessary visits and focusing on what matters reduces expenses while improving quality of care.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* /Expanded */}
        </div>
      </div>
    </div>

    {/* === Card 2: Care Teams & Clinicians === */}
    <div className={`relative lg:w-[423.5px] max-lg:min-w-full rounded-2xl overflow-hidden transition-all duration-500 ease-in-out ${
      expandedCard === 1 ? 'lg:h-auto' : 'lg:h-[550px] h-[389px]'
    }`}>
      <img
        src="/imagee4.png"
        alt="Care Teams & Clinicians"
        className="w-full h-[550px] max-lg:h-[389px] object-cover rounded-2xl transform scale-[1.14]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-2xl" />
      <div className="absolute inset-0 flex flex-col justify-end text-white">
        <div className="px-6 py-6">
          <span className="inline-block text-[12px] lg:text-sm font-semibold uppercase tracking-wider text-green-200">
            For Care Teams & Clinicians
          </span>
          <h3 className="mt-2 font-semibold lg:text-2xl text-lg">
            Smarter tools. Better decisions. Less admin.
          </h3>

          {/* Top bullets (Features) */}
          <ul className="mt-3 space-y-1 text-sm lg:text-base text-white/90">
            <li>• Explainable AI decision-support with risk predictions and goal tracking and interventions.</li>
            <li>• Shared dashboards for family–clinician collaboration.</li>
            <li>• Auto-generated reports for Medicare/NDIS compliance.</li>
            <li>• Integration with existing EMR and telehealth systems (FHIR-ready).</li>
          </ul>

          {/* Toggle */}
          <button
            onClick={() => setExpandedCard(expandedCard === 1 ? null : 1)}
            className="mt-4 flex items-center gap-2 text-sm lg:text-base font-medium text-green-200 hover:text-green-100 transition-colors group"
          >
            {expandedCard === 1 ? 'Show Less' : 'View Benefits'}
            {expandedCard === 1 ? (
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>

          {/* Expanded (Benefits) */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expandedCard === 1 ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-white/20 pt-4">
              <h4 className="text-base lg:text-lg font-semibold mb-3 text-green-200">Benefits:</h4>
              <div className="space-y-3">
                <p className="text-xs lg:text-sm text-white/80 leading-relaxed">
                  More time for patient care, less time on paperwork.
                </p>
                <p className="text-xs lg:text-sm text-white/80 leading-relaxed">
                  Early detection of deterioration to prevent readmissions.
                </p>
                <p className="text-xs lg:text-sm text-white/80 leading-relaxed">
                  Data-driven confidence in every rehab decision.
                </p>
                <p className="text-xs lg:text-sm text-white/80 leading-relaxed">
                  Stronger collaboration and communication with families.
                </p>
              </div>
            </div>
          </div>
          {/* /Expanded */}
        </div>
      </div>
    </div>

    {/* === Card 3: Funders & Partners === */}
    <div className={`relative lg:w-[423.5px] max-lg:min-w-full rounded-2xl overflow-hidden transition-all duration-500 ease-in-out ${
      expandedCard === 2 ? 'lg:h-auto' : 'lg:h-[550px] h-[389px]'
    }`}>
      <img
        src="/imageee4.png"
        alt="Funders & Partners"
        className="w-full h-[550px] max-lg:h-[389px] object-cover rounded-2xl transform scale-[1.14]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-2xl" />
      <div className="absolute inset-0 flex flex-col justify-end text-white">
        <div className="px-6 py-6">
          <span className="inline-block text-[12px] lg:text-sm font-semibold uppercase tracking-wider text-yellow-200">
            For Funders & Partners
          </span>
          <h3 className="mt-2 font-semibold lg:text-2xl text-lg">
            Scalable AI platform with strong economics.
          </h3>

          {/* Top bullets (Features) */}
          <ul className="mt-3 space-y-1 text-sm lg:text-base text-white/90">
            <li>• SaaS subscription and partner-licensing model monetisation.</li>
            <li>• Population-level analytics to measure outcomes and ROI.</li>
            <li>• Defensible AI IP moat using anonymised rehab data.</li>
            <li>• StrokeSMART IP moat; scalable design across chronic and aged-care pathways.</li>
          </ul>

          {/* Toggle */}
          <button
            onClick={() => setExpandedCard(expandedCard === 2 ? null : 2)}
            className="mt-4 flex items-center gap-2 text-sm lg:text-base font-medium text-yellow-200 hover:text-yellow-100 transition-colors group"
          >
            {expandedCard === 2 ? 'Show Less' : 'View Benefits'}
            {expandedCard === 2 ? (
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            ) : (
              <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
            )}
          </button>

          {/* Expanded (Benefits) */}
          <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
            expandedCard === 2 ? 'max-h-[28rem] opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}>
            <div className="border-t border-white/20 pt-4">
              <h4 className="text-base lg:text-lg font-semibold mb-3 text-yellow-200">Benefits:</h4>
              <div className="space-y-3">
                <p className="text-xs lg:text-sm text-white/80 leading-relaxed">
                  <span className="font-semibold">Early-mover advantage in a high-growth, tech-enabled care market.</span>
                  {" "}Stroke care is a <span className="font-semibold">$9B+</span> challenge in Australia,
                  and a gateway into <span className="font-semibold">Southeast Asia’s USD 100B</span> ageing and home-care economy.
                </p>
                <p className="text-xs lg:text-sm text-white/80 leading-relaxed">
                  <span className="font-semibold">Clear ROI Through Cost Savings</span> — reducing readmissions and unnecessary
                  visits creates measurable system-wide savings and investor returns.
                </p>
                <p className="text-xs lg:text-sm text-white/80 leading-relaxed">
                  <span className="font-semibold">Rapid scalability across Australia’s community rehab ecosystem.</span>
                  {" "}Scalable, data-driven model: every interaction builds anonymised datasets that power AI insights,
                  creating defensible IP and recurring revenue streams.
                </p>
                <p className="text-xs lg:text-sm text-white/80 leading-relaxed">
                  <span className="font-semibold">Aligned With Policy & Demographics</span> — leverages ageing-population momentum
                  and digital-health priorities.
                </p>
              </div>
            </div>
          </div>
          {/* /Expanded */}
        </div>
      </div>
    </div>
  </div>
</div>
{/* === /FEATURES & BENEFITS === */}


        {/* ===== INVESTOR-FOCUSED PLANS (reordered per notes) ===== */}
        <section id="investor-plans" className="w-full bg-white py-12 lg:py-16">
          <MaxWidthWrapper>
            {/* Header */}
            <div className="text-center mb-8 lg:mb-12">
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-4">
                <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                <span className="text-emerald-700 text-sm font-semibold">
                  Scalable Revenue Model
                </span>
              </div>

              <h1 className="font-semibold text-3xl lg:text-6xl leading-tight mb-4">
                Revenue Tiers That Scale
              </h1>
              <p className="mt-3 text-sm lg:text-xl text-black/70 max-w-3xl mx-auto">
                Clear value at every level, designed to scale outcomes, reduce system cost, and prove ROI.
              </p>

              <div className="flex justify-center gap-8 mt-6 text-sm">
                <div className="text-center">
                  <div className="font-bold text-lg text-blue-600">3</div>
                  <div className="text-black/60">Revenue Streams</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-purple-600">B2B+B2C</div>
                  <div className="text-black/60">Market Coverage</div>
                </div>
                <div className="text-center">
                  <div className="font-bold text-lg text-emerald-600">Custom</div>
                  <div className="text-black/60">Enterprise Scale</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-8">
              {/* ===== Starter ===== */}
              <div className="relative rounded-2xl border border-[#E5E7EB] bg-[#F8FAFF] p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                    B2C Entry Point
                  </span>
                </div>

                {/* Title */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-600 font-bold">🏠</span>
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">Starter</h3>
                    <p className="text-black/60 text-sm">Families starting post-stroke recovery</p>
                  </div>
                </div>

                {/* Value Promise (moved above pricing) */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide">
                    💡 Value Promise
                  </h4>
                  <p className="mt-2 text-sm text-black/80">
                    Guides families from confusion to confidence with AI-personalised recovery plans
                    and transparent progress tracking.
                  </p>
                </div>

                {/* Pricing */}
                <div className="mt-5 p-4 rounded-xl bg-blue-50 border border-blue-100">
                  <p className="text-2xl lg:text-3xl font-bold text-blue-700">
                    AUD $29<span className="text-base font-medium text-black/60"> / month</span>
                  </p>
                  <p className="text-xs text-black/50">Family use</p>
                </div>

                {/* ROI Impact (moved under pricing) */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide">ROI Impact</h4>
                  <ul className="mt-2 space-y-2 text-sm text-black/80">
                    <li>• Faster independence for survivors</li>
                    <li>• Greater peace of mind for families</li>
                    <li>• Fewer unnecessary visits = lower costs</li>
                  </ul>
                </div>

                {/* Core Features (below ROI) */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide flex items-center gap-2">
                    <span className="text-blue-600">🚀</span> Core Features
                  </h4>
                  <div className="mt-3 p-4 rounded-xl bg-blue-50 border border-blue-100">
                    <ul className="space-y-3 text-sm text-black/80">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <div>
                          <span className="font-semibold text-blue-700">AI-personalised recovery plans</span>
                          <p className="text-xs text-black/60 mt-0.5">Adaptive algorithms tailor goals and routines</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <div>
                          <span className="font-semibold text-blue-700">Real-time family dashboard</span>
                          <p className="text-xs text-black/60 mt-0.5">View exercises, milestones & clinician feedback in one place</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <div>
                          <span className="font-semibold text-blue-700">Secure clinician sharing</span>
                          <p className="text-xs text-black/60 mt-0.5">Seamless coordination across care providers</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-7">
                  <a
                    href="#contactUs"
                    className="block w-full rounded-lg bg-[#1E63F0] text-white py-3 font-medium hover:opacity-95 text-center"
                  >
                    Start Family Plan
                  </a>
                </div>
              </div>

              {/* ===== Pro ===== */}
              <div className="relative rounded-2xl border-2 border-[#1E63F0] bg-[#E9F2FF] p-6 lg:p-8 shadow-lg transform scale-105">
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
                    B2B Growth Engine
                  </span>
                </div>

                {/* Title */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <span className="text-indigo-600 font-bold">🏥</span>
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">Pro</h3>
                    <p className="text-black/60 text-sm">Clinicians & care teams</p>
                  </div>
                </div>

                {/* Value Promise (moved above pricing) */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide">
                    💡 Value Promise
                  </h4>
                  <p className="mt-2 text-sm text-black/80">
                    Smarter tools that predict risks, streamline coordination, and give clinicians
                    more time for patients — not paperwork.
                  </p>
                </div>

                {/* Pricing */}
                <div className="mt-5 p-4 rounded-xl bg-indigo-50 border border-indigo-200">
                  <p className="text-2xl lg:text-3xl font-bold text-indigo-700">
                    AUD $149<span className="text-base font-medium text-black/60"> / month</span>
                  </p>
                  <p className="text-xs text-black/50">Per clinician license</p>
                </div>

                {/* ROI Impact (under pricing) */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide">ROI Impact</h4>
                  <ul className="mt-2 space-y-2 text-sm text-black/80">
                    <li>• Earlier interventions, fewer readmissions</li>
                    <li>• 60% reduction in admin time</li>
                    <li>• Clearer decisions backed by explainable AI</li>
                  </ul>
                </div>

                {/* Core Features (below ROI) */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide flex items-center gap-2">
                    <span className="text-indigo-600">🚀</span> Core Features
                  </h4>
                  <div className="mt-3 p-4 rounded-xl bg-indigo-50 border border-indigo-100">
                    <ul className="space-y-3 text-sm text-black/80">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <div>
                          <span className="font-semibold text-indigo-700">All Starter features included</span>
                          <p className="text-xs text-black/60 mt-0.5">Complete B2C foundation</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <div>
                          <span className="font-semibold text-indigo-700">Predictive AI alerts</span>
                          <p className="text-xs text-black/60 mt-0.5">Identify missed milestones or risk of deterioration early</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <div>
                          <span className="font-semibold text-indigo-700">Shared dashboards</span>
                          <p className="text-xs text-black/60 mt-0.5">Unified view across therapists, GPs, and families</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <div>
                          <span className="font-semibold text-indigo-700">Admin-lite workflows</span>
                          <p className="text-xs text-black/60 mt-0.5">Automate documentation and reporting</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-7">
                  <a
                    href="#contactUs"
                    className="block w-full rounded-lg bg-[#0B1B4A] text-white py-3 font-medium hover:opacity-95 text-center"
                  >
                    Book Clinical Demo
                  </a>
                </div>
              </div>

              {/* ===== Enterprise ===== */}
              <div className="relative rounded-2xl border border-[#E5E7EB] bg-white p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="absolute -top-3 left-6">
                  <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
                    Revenue Multiplier
                  </span>
                </div>

                {/* Title */}
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
                    <span className="text-emerald-600 font-bold">🏢</span>
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold">Enterprise</h3>
                    <p className="text-black/60 text-sm">Health networks, insurers, Lumary partnerships</p>
                  </div>
                </div>

                {/* Value Promise (above pricing) */}
                <div className="mt-4">
                  <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide">
                    💡 Value Promise
                  </h4>
                  <p className="mt-2 text-sm text-black/80">
                    Integrate digital rehab, compliance, and analytics into one scalable SaaS
                    ecosystem — with measurable ROI and policy alignment.
                  </p>
                </div>

                {/* Pricing */}
                <div className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                  <p className="text-2xl lg:text-3xl font-bold text-emerald-700">Custom Pricing</p>
                  <p className="text-xs text-black/50">Per organisation</p>
                </div>

                {/* ROI Impact (under pricing) */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide">ROI Impact</h4>
                  <ul className="mt-2 space-y-2 text-sm text-black/80">
                    <li>• System-wide cost savings; improved rehab throughput</li>
                    <li>• Scalable model aligned with My Aged Care & NDIS priorities</li>
                    <li>• Strong, defensible data-driven ROI</li>
                  </ul>
                </div>

                {/* Core Features (below ROI) */}
                <div className="mt-6">
                  <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide flex items-center gap-2">
                    <span className="text-emerald-600">🚀</span> Core Features
                  </h4>
                  <div className="mt-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
                    <ul className="space-y-3 text-sm text-black/80">
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <div>
                          <span className="font-semibold text-emerald-700">All Pro features included</span>
                          <p className="text-xs text-black/60 mt-0.5">Full B2B suite</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <div>
                          <span className="font-semibold text-emerald-700">
                            Integration with NDIS / private insurers via Lumary API
                          </span>
                          <p className="text-xs text-black/60 mt-0.5">Direct billing integration</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <div>
                          <span className="font-semibold text-emerald-700">
                            Advanced analytics & population-health reporting
                          </span>
                          <p className="text-xs text-black/60 mt-0.5">Measure outcomes & ROI</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                        <div>
                          <span className="font-semibold text-emerald-700">
                            Custom branding & white-label with 24/7 support
                          </span>
                          <p className="text-xs text-black/60 mt-0.5">Partner-ready at scale</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-7">
                  <a
                    href="#contactUs"
                    className="block w-full rounded-lg bg-black text-white py-3 font-medium hover:opacity-95 text-center"
                  >
                    Talk to Partnerships
                  </a>
                </div>
              </div>
            </div>

            {/* Investment thesis footer — FRIENDLY DESIGN (all 5 snapshot points) */}
<div className="mt-8 lg:mt-10 rounded-2xl bg-white p-6 lg:p-8 border border-[#E5E7EB]">
  {/* Header */}
  <div className="text-center mb-6">
    <h3 className="mt-3 text-2xl lg:text-3xl font-semibold text-[#0B1B4A]">
      Investment Thesis Snapshot
    </h3>
  </div>

  {/* Points (5 cards) */}
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
    {/* 1 - Outcome-first */}
    <div className="group rounded-2xl bg-[#F8FAFF] border border-blue-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
          <span className="text-lg">🎯</span>
        </div>
        <div className="text-black/80">
          <p className="font-semibold text-[#0B1B4A]">Outcome-first</p>
          <p className="text-sm mt-1">
            AI-guided rehab cuts readmissions by up to 25%.
          </p>
        </div>
      </div>
    </div>

    {/* 2 - Operational lift */}
    <div className="group rounded-2xl bg-[#F8FFF9] border border-emerald-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
          <span className="text-lg">⚙️</span>
        </div>
        <div className="text-black/80">
          <p className="font-semibold text-emerald-900">Operational lift</p>
          <p className="text-sm mt-1">
            60% admin reduction = more patient time.
          </p>
        </div>
      </div>
    </div>

    {/* 3 - Scalable economics */}
    <div className="group rounded-2xl bg-[#FFFBF5] border border-amber-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center">
          <span className="text-lg">📈</span>
        </div>
        <div className="text-black/80">
          <p className="font-semibold text-amber-900">Scalable economics</p>
          <p className="text-sm mt-1">
            B2C + B2B + Enterprise create recurring, defensible revenue.
          </p>
        </div>
      </div>
    </div>

    {/* 4 - Policy-aligned */}
    <div className="group rounded-2xl bg-[#F9FAFF] border border-indigo-100 p-5 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
          <span className="text-lg">📜</span>
        </div>
        <div className="text-black/80">
          <p className="font-semibold text-indigo-900">Policy-aligned</p>
          <p className="text-sm mt-1">
            Supports Australia’s aged-care digital strategy and value-based care shift.
          </p>
        </div>
      </div>
    </div>

    {/* 5 - Regional expansion */}
    <div className="group rounded-2xl bg-[#FFF7FB] border border-pink-100 p-5 shadow-sm hover:shadow-md transition-shadow md:col-span-2 lg:col-span-1">
      <div className="flex items-start gap-3">
        <div className="shrink-0 w-10 h-10 rounded-xl bg-pink-100 flex items-center justify-center">
          <span className="text-lg">🌏</span>
        </div>
        <div className="text-black/80">
          <p className="font-semibold text-pink-900">Regional expansion</p>
          <p className="text-sm mt-1">
            Foundation for Southeast Asia’s USD 100B care economy.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>


          </MaxWidthWrapper>
        </section>
      </MaxWidthWrapper>
    </div>
  );
};

export default Pricing;
