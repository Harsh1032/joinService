import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    eyebrow: "Patients & Families",
    painPointHeadline: "Why Recovery Feels Impossible (for Most Families)",
    headline: "Stroke recovery, made simpler and stronger.",
    sub: "AI-guided plans, expert-verified routines, real-time dashboards, and step-by-step support that restore confidence to survivors and families.",
    painPoints: [
      "We felt lost after leaving the hospital there was no clear plan.",
      "Rehab was confusing every provider said something different.",
      "Costs kept piling up, but outcomes didn't improve."
    ],
    cta: { label: "Solution", href: "#mission" },
    quote: "Designed with stroke survivors, families, and clinicians powered by explainable AI.",
    image: "/image.png"
  },
  {
    eyebrow: "Care Teams & Clinicians",
    painPointHeadline: "When Care Teams Can't Connect, Patients Pay the Price",
    headline: "Smarter tools. Better care decisions. Connected.",
    sub: "StrokeSMART helps clinicians and allied teams track SMART goals, predict risks, and flag missed milestones while sharing dashboards that unify patients, families, and care partners in one view.",
    painPoints: [
      "I don't have time to track every stroke patient's progress.",
      "Care is fragmented families don't update me, therapists work in silos.",
      "I want to prevent readmissions, but I don't get the right data at the right time."
    ],
    cta: { label: "Solution", href: "#mission" },
    quote: "Co-designed with clinicians, therapists, and caregivers built to make recovery smarter and more connected.",
    image: "/imagee.png"
  },
  {
    eyebrow: "Funders & Partners",
    painPointHeadline: "The Billion-Dollar Problem in Stroke Care",
    headline: "Turning healthcare challenges into high-growth opportunities.",
    sub: "StrokeSMART is a scalable SaaS AI platform that cuts referrals, lowers costs, and turns home recovery into measurable outcomes and recurring revenue starting in Australia's A$9B stroke market and expanding across Southeast Asia's USD100B ageing economy.",
    painPoints: [
      "Stroke care remains one of the most expensive and least efficient areas of healthcare.",
      "Billions are spent, yet outcomes remain inconsistent and difficult to measure."
    ],
    cta: { label: "Solution", href: "#mission" },
    quote: "Driving better care, stronger economics, and sustainable health impact.",
    image: "/imageee.png"
  }
];

const ImageSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full min-h-[620px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
      {/* Desktop nav buttons stay */}
      <button
        ref={prevRef}
        aria-label="Previous slide"
        className="absolute hidden lg:flex left-8 top-1/2 -translate-y-1/2 z-30 p-4 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        ref={nextRef}
        aria-label="Next slide"
        className="absolute hidden lg:flex right-8 top-1/2 -translate-y-1/2 z-30 p-4 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all duration-200 hover:scale-105"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>

      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTimeout(() => {
            if (swiper.params.navigation) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={0}
        centeredSlides
        autoplay={false}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current
        }}
        loop
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="w-full h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            {/* background */}
            <div className="absolute inset-0 -z-20">
              <img
                src={s.image}
                alt={`Background for ${s.eyebrow}`}
                className="w-full h-full object-cover md:scale-y-[1.09]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/75 to-black/45" />
            </div>

            {/* content */}
            <div className="w-full h-full flex md:items-center">
              <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-14 sm:py-16 md:py-0">
                <div className="max-w-4xl text-white">
                  <div className="inline-block bg-blue-600/90 px-4 py-2 rounded-full mb-5 sm:mb-6">
                    <p className="text-sm md:text-base font-bold tracking-wider text-white uppercase">
                      {s.eyebrow}
                    </p>
                  </div>

                  <div className="mb-6 sm:mb-8">
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-yellow-400 leading-tight drop-shadow-lg">
                      {s.painPointHeadline}
                    </h2>
                  </div>

                  <div className="relative bg-gradient-to-r from-red-600/95 to-red-700/95 backdrop-blur-sm border-2 border-red-300/50 rounded-2xl p-6 sm:p-8 md:p-10 mb-8 md:mb-10 shadow-2xl overflow-hidden max-h-[260px] sm:max-h-[320px] md:max-h-none md:overflow-visible">
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent" />
                    </div>
                    <div className="relative z-10">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-4 md:mb-6 flex items-center gap-3">
                        <span className="w-2 h-8 bg-yellow-400 rounded-full" />
                        Current Pain Points:
                      </h3>
                      <div className="space-y-4 sm:space-y-5 overflow-y-auto md:overflow-visible">
                        {s.painPoints.map((point, idx) => (
                          <p
                            key={idx}
                            className="text-base sm:text-lg md:text-xl text-white font-semibold leading-relaxed italic pr-2"
                          >
                            "{point}"
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>

                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4 md:mb-6 text-white">
                    {s.headline}
                  </h1>

                  <p className="text-base sm:text-lg md:text-xl text-white/90 mb-7 md:mb-10 leading-relaxed">
                    {s.sub}
                  </p>

                  <div className="mb-6 md:mb-8">
                    <a
                      href={s.cta.href}
                      className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg md:text-xl font-bold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                      {s.cta.label}
                    </a>
                  </div>

                  <div>
                    <p className="text-base sm:text-lg font-medium text-blue-200 italic">
                      {s.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>{`
        html { scroll-behavior: smooth; }
        .swiper-pagination { bottom: 30px !important; }
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.5);
          width: 12px; height: 12px;
          margin: 0 8px !important; opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #ffffff; transform: scale(1.2);
        }
        .swiper-pagination-bullet:hover {
          background: rgba(255,255,255,0.8); transform: scale(1.1);
        }
        @media (max-width: 767px) {
          .swiper-pagination {
            bottom: 16px !important;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
