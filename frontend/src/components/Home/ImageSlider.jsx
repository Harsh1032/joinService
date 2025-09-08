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
    headline: "Stroke recovery at home — simpler, stronger, safer.",
    sub: "AI-guided plans, expert-verified routines, real-time dashboards, and step-by-step support.",
    chips: ["No clear plan after discharge", "Confusing/contradicting rehab", "Costs keep piling up"],
    cta: { label: "Learn More", href: "/#aboutUs", variant: "light" },
  },
  {
    eyebrow: "Clinicians & Allied Care",
    headline: "Smarter tools. Better care decisions.",
    sub: "Track SMART goals, predict risks, flag missed milestones, share dashboards across teams.",
    chips: ["No time to track progress", "Fragmented family updates", "Prevent readmissions"],
    cta: { label: "See How It Works", href: "/#pricing", variant: "light" },
  },
  {
    eyebrow: "Funders & Partners",
    headline: "Turn healthcare inefficiency into scalable impact.",
    sub: "SaaS AI platform that cuts referrals, reduces costs, and unlocks recurring revenue in a RM1B+ market.",
    chips: ["Expensive, inefficient stroke care", "Inconsistent outcomes", "Fragmented digital solutions"],
    cta: { label: "Access Pitch Deck", href: "/#contactUs", variant: "solid" },
  },
];

const ImageSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full h-[460px] md:h-[560px] lg:h-[640px]">
      {/* Background image (same for all) */}
      <img
        src="/image.png"
        alt="background"
        className="absolute inset-0 w-full h-full object-cover -z-20"
      />
      {/* Soft gradient for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/30 -z-10" />

      {/* Custom Nav Buttons (desktop) */}
      <button
        ref={prevRef}
        aria-label="Previous slide"
        className="absolute hidden lg:flex left-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/80 hover:bg-white rounded-full shadow transition"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        ref={nextRef}
        aria-label="Next slide"
        className="absolute hidden lg:flex right-6 top-1/2 -translate-y-1/2 z-30 p-3 bg-white/80 hover:bg-white rounded-full shadow transition"
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
        autoplay={{ delay: 6000, disableOnInteraction: false }}
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
              <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
                <div className="max-w-[720px] text-white">
                  {/* Eyebrow */}
                  <p className="text-[11px] md:text-xs font-semibold uppercase tracking-wider text-blue-200">
                    {s.eyebrow}
                  </p>

                  {/* Headline */}
                  <h2 className="mt-2 text-2xl md:text-4xl lg:text-5xl font-semibold leading-tight">
                    {s.headline}
                  </h2>

                  {/* Subline */}
                  <p className="mt-3 text-sm md:text-base text-white/90">
                    {s.sub}
                  </p>

                  {/* Chips (compact pain points) */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {s.chips.map((c, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] md:text-xs text-white/90 bg-white/10 border border-white/15 rounded-full px-3 py-1 backdrop-blur"
                      >
                        {c}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6">
                    <a
                      href={s.cta.href}
                      className={
                        s.cta.variant === "solid"
                          ? "inline-flex items-center rounded-md bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 text-sm md:text-base font-medium transition"
                          : "inline-flex items-center rounded-md bg-[#D4E6FF] hover:bg-[#c7dbff] text-[#0050C1] px-5 py-2.5 text-sm md:text-base font-medium transition"
                      }
                    >
                      {s.cta.label}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination dots */}
      <style>{`
        .swiper-pagination-bullet {
          background: rgba(255,255,255,0.7);
          width: 8px; height: 8px; margin: 0 6px !important; opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #ffffff;
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
