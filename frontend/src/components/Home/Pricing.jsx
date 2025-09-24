import React, { useState } from "react";
import MaxWidthWrapper from "../MaxWidthWrapper";
import { ChevronDown, ChevronUp } from 'lucide-react';

const Pricing = () => {
  const [selectedButton, setSelectedButton] = useState("explorePlans");
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <div id="pricing" className="w-full bg-[#D9D9D94F] pt-5">
      
      <MaxWidthWrapper>
        {/* REPLACED SECTION (EXPLORE PLANS) */}
        <div className="flex flex-col items-center py-5 gap-y-5 w-[90%] lg:w-full max-lg:mx-auto text-center">
          <h1 className="font-medium lg:text-6xl text-xl mx-auto max-lg:w-[90%]">
            Features & Benefits
          </h1>
          <span className="text-center font-normal lg:text-2xl text-sm text-[#000000AD] max-lg:w-[80%]">
            Learn how StrokeSMART supports patients & families, clinicians, and partners with
            AI-guided recovery, coordinated care, and scalable impact.
          </span>

          <div className="w-full mt-4 flex lg:justify-center gap-x-3 overflow-x-auto">
            {/* Card 1 */}
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
                  <ul className="mt-3 space-y-1 text-sm lg:text-base text-white/90">
                    <li>• AI-personalised recovery plans tailored to progress.</li>
                    <li>• Real-time family dashboard powered by StrokeSMART.</li>
                    <li>• Reduced long-term costs by avoiding unnecessary visits.</li>
                  </ul>
                  
                  <button
                    onClick={() => setExpandedCard(expandedCard === 0 ? null : 0)}
                    className="mt-4 flex items-center gap-2 text-sm lg:text-base font-medium text-blue-200 hover:text-blue-100 transition-colors group"
                  >
                    {expandedCard === 0 ? 'Show Less' : 'View Features'}
                    {expandedCard === 0 ? (
                      <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    ) : (
                      <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    )}
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCard === 0 ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-white/20 pt-4">
                      <h4 className="text-base lg:text-lg font-semibold mb-3 text-blue-200">Key Features:</h4>
                      <div className="space-y-3">
                        <div className="text-white/90">
                          <h5 className="font-medium text-sm lg:text-base text-white mb-1">Personalised Recovery That Adapts to You</h5>
                          <p className="text-xs lg:text-sm text-white/80 leading-relaxed">AI tracks progress and setbacks in real time, adjusting the plan to speed independence and reduce frustration.</p>
                        </div>
                        <div className="text-white/90">
                          <h5 className="font-medium text-sm lg:text-base text-white mb-1">A Window Into Your Loved One's Care</h5>
                          <p className="text-xs lg:text-sm text-white/80 leading-relaxed">A real-time family dashboard shows exercises, milestones, and clinician updates — keeping you informed and confident.</p>
                        </div>
                        <div className="text-white/90">
                          <h5 className="font-medium text-sm lg:text-base text-white mb-1">Smarter Care, Lower Costs Over Time</h5>
                          <p className="text-xs lg:text-sm text-white/80 leading-relaxed">By cutting unnecessary visits and focusing on what matters, StrokeSMART reduces expenses while improving quality of care.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className={`relative lg:w-[423.5px] max-lg:min-w-full rounded-2xl overflow-hidden transition-all duration-500 ease-in-out ${
              expandedCard === 1 ? 'lg:h-auto' : 'lg:h-[550px] h-[389px]'
            }`}>
              <img
                src="/image4.png"
                alt="Clinicians & Allied Care"
                className="w-full h-[550px] max-lg:h-[389px] object-cover rounded-2xl transform scale-[1.14]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent rounded-2xl" />
              <div className="absolute inset-0 flex flex-col justify-end text-white">
                <div className="px-6 py-6">
                  <span className="inline-block text-[12px] lg:text-sm font-semibold uppercase tracking-wider text-green-200">
                    For Clinicians & Allied Care
                  </span>
                  <h3 className="mt-2 font-semibold lg:text-2xl text-lg">
                    Smarter tools. Better decisions. Less admin.
                  </h3>
                  <ul className="mt-3 space-y-1 text-sm lg:text-base text-white/90">
                    <li>• AI decision support & predictive alerts for interventions.</li>
                    <li>• Shared dashboards to coordinate with families & teams.</li>
                    <li>• Tech-enabled workflows that reduce admin burden.</li>
                  </ul>
                  
                  <button
                    onClick={() => setExpandedCard(expandedCard === 1 ? null : 1)}
                    className="mt-4 flex items-center gap-2 text-sm lg:text-base font-medium text-green-200 hover:text-green-100 transition-colors group"
                  >
                    {expandedCard === 1 ? 'Show Less' : 'View Features'}
                    {expandedCard === 1 ? (
                      <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    ) : (
                      <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    )}
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCard === 1 ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-white/20 pt-4">
                      <h4 className="text-base lg:text-lg font-semibold mb-3 text-green-200">Key Features:</h4>
                      <div className="space-y-3">
                        <div className="text-white/90">
                          <h5 className="font-medium text-sm lg:text-base text-white mb-1">Less Admin, More Patient Care</h5>
                          <p className="text-xs lg:text-sm text-white/80 leading-relaxed">Automated dashboards cut paperwork, giving back precious time for treatment and outcomes.</p>
                        </div>
                        <div className="text-white/90">
                          <h5 className="font-medium text-sm lg:text-base text-white mb-1">Smarter Decisions Backed by AI</h5>
                          <p className="text-xs lg:text-sm text-white/80 leading-relaxed">Predictive insights flag risks like falls, readmissions, or non-adherence — helping you intervene earlier with confidence.</p>
                        </div>
                        <div className="text-white/90">
                          <h5 className="font-medium text-sm lg:text-base text-white mb-1">Stronger Trust With Families</h5>
                          <p className="text-xs lg:text-sm text-white/80 leading-relaxed">Transparent progress reports build credibility, reduce complaints, and keep families aligned in the recovery journey.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className={`relative lg:w-[423.5px] max-lg:min-w-full rounded-2xl overflow-hidden transition-all duration-500 ease-in-out ${
              expandedCard === 2 ? 'lg:h-auto' : 'lg:h-[550px] h-[389px]'
            }`}>
              <img
                src="/image4.png"
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
                  <ul className="mt-3 space-y-1 text-sm lg:text-base text-white/90">
                    <li>• Subscriptions, SaaS, and partnership-led monetisation.</li>
                    <li>• Direct access to RM 1B+ stroke rehab/homecare segment.</li>
                    <li>• StrokeSMART IP moat; expansion to chronic & aged care.</li>
                  </ul>
                  
                  <button
                    onClick={() => setExpandedCard(expandedCard === 2 ? null : 2)}
                    className="mt-4 flex items-center gap-2 text-sm lg:text-base font-medium text-yellow-200 hover:text-yellow-100 transition-colors group"
                  >
                    {expandedCard === 2 ? 'Show Less' : 'View Features'}
                    {expandedCard === 2 ? (
                      <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                    ) : (
                      <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                    )}
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCard === 2 ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="border-t border-white/20 pt-4">
                      <h4 className="text-base lg:text-lg font-semibold mb-3 text-yellow-200">Key Features:</h4>
                      <div className="space-y-3">
                        <div className="text-white/90">
                          <h5 className="font-medium text-sm lg:text-base text-white mb-1">Early Access to a High-Growth Market</h5>
                          <p className="text-xs lg:text-sm text-white/80 leading-relaxed">Stroke care is a $9B+ challenge in Australia, and StrokeSMART is built for rapid adoption.</p>
                        </div>
                        <div className="text-white/90">
                          <h5 className="font-medium text-sm lg:text-base text-white mb-1">Clear ROI Through Cost Savings</h5>
                          <p className="text-xs lg:text-sm text-white/80 leading-relaxed">Reducing readmissions and unnecessary visits creates measurable system-wide savings and investor returns.</p>
                        </div>
                        <div className="text-white/90">
                          <h5 className="font-medium text-sm lg:text-base text-white mb-1">Scalable, Data-Driven Model</h5>
                          <p className="text-xs lg:text-sm text-white/80 leading-relaxed">Every interaction builds anonymised datasets that power AI insights, creating defensible IP and recurring revenue streams.</p>
                        </div>
                        <div className="text-white/90">
                          <h5 className="font-medium text-sm lg:text-base text-white mb-1">Aligned With Policy & Demographics</h5>
                          <p className="text-xs lg:text-sm text-white/80 leading-relaxed">The solution leverages two unstoppable forces: ageing population and digital-health priorities.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            {/* END REPLACED SECTION */}
       {/* INVESTOR-FOCUSED PLANS */}
<section id="investor-plans" className="w-full bg-white py-12 lg:py-16">
  <MaxWidthWrapper>
    {/* Investor-focused header */}
    <div className="text-center mb-8 lg:mb-12">
      <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 rounded-full px-4 py-2 mb-4">
        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
        <span className="text-emerald-700 text-sm font-semibold">Scalable Revenue Model</span>
      </div>
      
      <h1 className="font-semibold text-3xl lg:text-6xl leading-tight mb-4">Revenue Tiers That Scale</h1>
      <p className="mt-3 text-sm lg:text-xl text-black/70 max-w-3xl mx-auto">
        Clear value at every level, designed to scale outcomes, reduce system cost, and prove ROI.
      </p>

      {/* Market positioning metrics */}
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
      {/* Starter - B2C Entry */}
      <div className="relative rounded-2xl border border-[#E5E7EB] bg-[#F8FAFF] p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="absolute -top-3 left-6">
          <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-blue-100 text-blue-700 border border-blue-200">
            B2C Entry Point
          </span>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center">
            <span className="text-blue-600 font-bold">🏠</span>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold">Starter</h3>
            <p className="text-black/60 text-sm">Families starting post-stroke recovery</p>
          </div>
        </div>

        <div className="mt-5 p-4 rounded-xl bg-blue-50 border border-blue-100">
          <p className="text-2xl lg:text-3xl font-bold text-blue-700">AUD $29<span className="text-base font-medium text-black/60"> / month</span></p>
          <p className="text-xs text-black/50">Family use</p>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide">💡 Value Promise</h4>
          <p className="mt-2 text-sm text-black/80">
            Perfect for families just beginning their recovery journey, with clear guidance and connection.
          </p>
        </div>

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
                  <p className="text-xs text-black/60 mt-0.5">Adaptive algorithms drive personalized care pathways</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <div>
                  <span className="font-semibold text-blue-700">Real-time family dashboard</span>
                  <p className="text-xs text-black/60 mt-0.5">Live progress tracking increases engagement</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <div>
                  <span className="font-semibold text-blue-700">Basic clinician sharing</span>
                  <p className="text-xs text-black/60 mt-0.5">Seamless care coordination across providers</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide">ROI Impact</h4>
          <ul className="mt-2 space-y-2 text-sm text-black/80">
            <li>• Faster independence</li>
            <li>• Peace of mind for families</li>
          </ul>
        </div>

        <div className="mt-7">
          <a href="#contactUs" className="block w-full rounded-lg bg-[#1E63F0] text-white py-3 font-medium hover:opacity-95 text-center">
            Start Family Plan
          </a>
        </div>
      </div>

      {/* Pro - B2B Growth Engine */}
      <div className="relative rounded-2xl border-2 border-[#1E63F0] bg-[#E9F2FF] p-6 lg:p-8 shadow-lg transform scale-105">
        <div className="absolute -top-3 left-6">
          <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-indigo-100 text-indigo-700 border border-indigo-200">
            B2B Growth Engine
          </span>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center">
            <span className="text-indigo-600 font-bold">🏥</span>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold">Pro</h3>
            <p className="text-black/60 text-sm">Clinicians & care teams</p>
          </div>
        </div>

        <div className="mt-5 p-4 rounded-xl bg-indigo-50 border border-indigo-200">
          <p className="text-2xl lg:text-3xl font-bold text-indigo-700">AUD $149<span className="text-base font-medium text-black/60"> / month</span></p>
          <p className="text-xs text-black/50">Per clinician license</p>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide">💡 Value Promise</h4>
          <p className="mt-2 text-sm text-black/80">
            Designed for busy clinicians and care teams who need smarter tools with less admin burden.
          </p>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide flex items-center gap-2">
            <span className="text-indigo-600">🚀</span> Core Features
          </h4>
          <div className="mt-3 p-4 rounded-xl bg-indigo-50 border border-indigo-100">
            <ul className="space-y-3 text-sm text-black/80">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <div>
                  <span className="font-semibold text-indigo-700">All Starter features</span>
                  <p className="text-xs text-black/60 mt-0.5">Complete B2C foundation included</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <div>
                  <span className="font-semibold text-indigo-700">Predictive AI alerts for risks</span>
                  <p className="text-xs text-black/60 mt-0.5">Machine learning identifies intervention opportunities</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <div>
                  <span className="font-semibold text-indigo-700">Shared dashboards for team & family</span>
                  <p className="text-xs text-black/60 mt-0.5">Unified view across all stakeholders</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <div>
                  <span className="font-semibold text-indigo-700">Admin-lite workflows</span>
                  <p className="text-xs text-black/60 mt-0.5">Reduces administrative burden by 60%</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide">ROI Impact</h4>
          <ul className="mt-2 space-y-2 text-sm text-black/80">
            <li>• Earlier interventions with confidence</li>
            <li>• Less admin, more patient time</li>
          </ul>
        </div>

        <div className="mt-7">
          <a href="#contactUs" className="block w-full rounded-lg bg-[#0B1B4A] text-white py-3 font-medium hover:opacity-95 text-center">
            Book Clinical Demo
          </a>
        </div>
      </div>

      {/* Enterprise - Revenue Multiplier */}
      <div className="relative rounded-2xl border border-[#E5E7EB] bg-white p-6 lg:p-8 shadow-sm hover:shadow-md transition-shadow">
        <div className="absolute -top-3 left-6">
          <span className="px-3 py-1 text-[11px] font-semibold rounded-full bg-emerald-100 text-emerald-700 border border-emerald-200">
            Revenue Multiplier
          </span>
        </div>

        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <span className="text-emerald-600 font-bold">🏢</span>
          </div>
          <div>
            <h3 className="text-xl lg:text-2xl font-semibold">Enterprise</h3>
            <p className="text-black/60 text-sm">Health networks, insurers, Lumary partnerships</p>
          </div>
        </div>

        <div className="mt-5 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
          <p className="text-2xl lg:text-3xl font-bold text-emerald-700">Custom Pricing</p>
          <p className="text-xs text-black/50">Per organisation</p>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide">💡 Value Promise</h4>
          <p className="mt-2 text-sm text-black/80">
            Built for organisations seeking integration, compliance, and measurable ROI at scale.
          </p>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide flex items-center gap-2">
            <span className="text-emerald-600">🚀</span> Core Features
          </h4>
          <div className="mt-3 p-4 rounded-xl bg-emerald-50 border border-emerald-100">
            <ul className="space-y-3 text-sm text-black/80">
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <div>
                  <span className="font-semibold text-emerald-700">All Pro features</span>
                  <p className="text-xs text-black/60 mt-0.5">Complete B2B functionality suite</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <div>
                  <span className="font-semibold text-emerald-700">Integration with NDIS / private insurers via Lumary</span>
                  <p className="text-xs text-black/60 mt-0.5">Direct billing integration reduces friction</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <div>
                  <span className="font-semibold text-emerald-700">Advanced analytics & reporting</span>
                  <p className="text-xs text-black/60 mt-0.5">Population health insights drive strategic decisions</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-500 font-bold mt-0.5">✓</span>
                <div>
                  <span className="font-semibold text-emerald-700">Custom branding & dedicated support</span>
                  <p className="text-xs text-black/60 mt-0.5">White-label ready with 24/7 support</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-sm font-semibold text-[#0B1B4A] uppercase tracking-wide">ROI Impact</h4>
          <ul className="mt-2 space-y-2 text-sm text-black/80">
            <li>• System-wide cost savings</li>
            <li>• Scalable model aligned to policy</li>
            <li>• Strong ROI</li>
          </ul>
        </div>

        <div className="mt-7">
          <a href="#contactUs" className="block w-full rounded-lg bg-black text-white py-3 font-medium hover:opacity-95 text-center">
            Talk to Partnerships
          </a>
        </div>
      </div>
    </div>

    {/* Investment thesis footer */}
    <div className="mt-8 lg:mt-10 rounded-xl border border-[#E5E7EB] bg-[#F8F8F8] p-5 lg:p-6">
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-[#0B1B4A] mb-2">🎯 Investment Thesis</h3>
        <p className="text-black/70 text-sm">Multi-tier SaaS model with proven market validation</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 text-sm lg:text-base">
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[#1E63F0]" />
          <p className="text-black/80"><span className="font-semibold">Outcomes-first:</span> earlier interventions reduce readmissions.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-[#0B1B4A]" />
          <p className="text-black/80"><span className="font-semibold">Operational lift:</span> admin-lite workflows free clinical time.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2.5 w-2.5 rounded-full bg-black" />
          <p className="text-black/80"><span className="font-semibold">Scalable economics:</span> subscriptions + partnerships drive ROI.</p>
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