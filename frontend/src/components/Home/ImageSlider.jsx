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
    headline: "Stroke recovery at home, made simpler and stronger.",
    sub: "AI-guided plans, expert-verified routines, real-time dashboards, and step-by-step support.",
    painPoints: [
      "We feel lost after hospital discharge. There's no clear plan.",
      "Rehab is confusing and inconsistent — every provider says something different.",
      "Costs keep piling up with no guarantee of better outcomes."
    ],
    cta: { label: "View Solution", href: "#mission" },
    quote: "Connected Stroke Care. For Patients. For Families. For Life.",
  },
  {
    eyebrow: "Clinicians & Allied Care",
    headline: "Smarter tools. Better care decisions.",
    sub: "Track SMART goals, predict risks, flag missed milestones, share dashboards across teams.",
    painPoints: [
      "I don't have time to track every stroke patient's progress.",
      "Care is fragmented — families don't update me, therapists work in silos.",
      "I want to prevent readmissions, but I don't get the right data at the right time."
    ],
    cta: { label: "View Solution", href: "#mission" },
    quote: "Connected Stroke Care. For Patients. For Families. For Life.",
  },
  {
    eyebrow: "Funders & Partners",
    headline: "Turning healthcare challenges into high-growth opportunities.",
    sub: "SaaS AI platform that cuts referrals, reduces costs, and unlocks recurring revenue in a RM1B+ market.",
    painPoints: [
      "Stroke care is one of the most expensive, least efficient parts of healthcare.",
      "Billions are spent, yet outcomes are inconsistent."
    ],
    cta: { label: "View Solution", href: "#mission" },
    quote: "Connected Stroke Care. For Patients. For Families. For Life.",
  },
];

const ImageSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px]">
      {/* Background image (same for all) */}
      <img
        src="/image.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-20 scale-130"
        style={{ transform: 'scale(1.3)' }}
      />
      {/* Stronger gradient for better readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40 -z-10" />

      {/* Custom Nav Buttons (desktop) */}
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
          nextEl: nextRef.current,
        }}
        loop
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="w-full h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            {/* Content Card */}
            <div className="h-full w-full flex items-center">
              <div className="w-full max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
                <div className="max-w-4xl text-white">
                  {/* Eyebrow */}
                  <div className="inline-block bg-blue-600/90 px-4 py-2 rounded-full mb-6">
                    <p className="text-sm md:text-base font-bold uppercase tracking-wider text-white">
                      {s.eyebrow}
                    </p>
                  </div>

                  {/* Headline */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
                    {s.headline}
                  </h1>

                  {/* Subline */}
                  <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
                    {s.sub}
                  </p>

                  {/* Pain Points Section - THE STAR */}
                  <div className="bg-red-600/95 backdrop-blur-sm border-2 border-red-300 rounded-2xl p-8 md:p-10 mb-10 shadow-2xl">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-8">
                      Current Pain Points:
                    </h3>
                    <div className="space-y-6">
                      {s.painPoints.map((point, idx) => (
                        <div key={idx} className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-3 h-3 bg-yellow-300 rounded-full mt-2 shadow-lg"></div>
                          <p className="text-xl md:text-2xl text-white font-semibold leading-relaxed italic">
                            "{point}"
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mb-8">
                    <a
                      href={s.cta.href}
                      className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-xl font-bold rounded-xl transition-all duration-200 hover:scale-105 shadow-lg"
                    >
                      {s.cta.label}
                    </a>
                  </div>

                  {/* Quote */}
                  <div>
                    <p className="text-lg font-medium text-blue-200 italic">
                      {s.quote}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Enhanced Pagination dots */}
      <style>{`
        html {
          scroll-behavior: smooth;
        }
        .swiper-pagination {
          bottom: 30px !important;
        }
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.5);
          width: 12px; 
          height: 12px; 
          margin: 0 8px !important; 
          opacity: 1;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #ffffff;
          transform: scale(1.2);
        }
        .swiper-pagination-bullet:hover {
          background: rgba(255,255,255,0.8);
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;