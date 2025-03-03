import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = ["/image.png", "/image.png"];

const ImageSlider = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  return (
    <div className="relative w-full min-h-[192px] h-auto lg:h-[600px] bg-[#D9D9D94F]">
      {/* Custom Navigation Buttons */}
      <button
        ref={prevRef}
        className="absolute hidden lg:flex cursor-pointer left-4 top-1/2 transform -translate-y-1/2 bg-[#E7E7E7A3] hover:opacity-50 p-2 rounded-full shadow-lg z-10"
      >
        <ChevronLeft className="lg:w-5 w-3 h-3 lg:h-5 text-gray-700" />
      </button>

      <button
        ref={nextRef}
        className="absolute hidden lg:flex cursor-pointer right-4 top-1/2 transform -translate-y-1/2 bg-[#E7E7E7A3] hover:opacity-50 p-2 rounded-full shadow-lg z-10"
      >
        <ChevronRight className="lg:w-5 w-3 h-3 lg:h-5 text-gray-700" />
      </button>
      <div className="flex flex-col lg:gap-y-4 gap-y-1 items-center justify-center w-[90%] mx-auto max-lg:mb-5 h-full absolute inset-0 z-10 text-center">
        <h2 className="text-white text-6xl lg:flex hidden font-medium">
          Your Trusted Partner <br />
          in Senior Care
        </h2>
        <h2 className="text-white text-base lg:hidden font-medium">
          Your Trusted Partner in Senior Care
        </h2>
        <p className="text-white text-xl lg:flex hidden font-normal">
          Did you know 80% of senior health issues can be managed at the primary
          care level?
        </p>
        <p className="text-white lg:hidden text-[10px] font-normal">
          Did you know 80% of senior health issues can<br/> be managed at the primary
          care level?
        </p>
        <button className="bg-[#D4E6FF] rounded-[2px] lg:rounded-[9px] lg:p-4 px-2 py-1 lg:w-[230px] w-[100px] mt-1 lg:mt-2">
          <span className="text-[#0050C1] lg:text-xl text-xs font-medium">
            Learn More
          </span>
        </button>
      </div>

      {/* Swiper Component */}
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
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
