import React, { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const CarouselComponent = ({ slides }) => {
  const swiperRef = useRef(null);

  // Autoplay logic using useRef
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.slideNext(); // Move to the next slide
      }
    }, 5000); // 5 seconds delay

    return () => clearInterval(interval); // Clear interval on component unmount
  }, []);

  return (
    <div className="h-[336px] mt-0  overflow-hidden flex md:h-[400px] sm:h-[150px]">
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        loop={true}
        speed={2000}
        effect="fade"
        pagination={{
          el: ".carousel-pagination",
          clickable: true,
        }}
        modules={[Pagination, EffectFade]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {({ isActive }) => (
              <SlideContent
                isActive={isActive}
                image={slide.image}
                heading={slide.heading}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination */}
      {/* <div className="carousel-pagination"></div> */}
    </div>
  );
};

export default CarouselComponent;

const SlideContent = ({ image, heading, isActive }) => {
  return (
    <div className={`relative text-center w-full h-full ${isActive ? "opacity-100" : "opacity-50"}`}>
      <img
        className="h-auto filter brightness-75 block mx-auto rounded-lg"
        src={image}
        alt={heading}
      />
      <h1 className="text-center text-white text-4xl font-sbold absolute bottom-4 left-1/2 transform -translate-x-1/2">
        {heading}
      </h1>
    </div>
  );
};
