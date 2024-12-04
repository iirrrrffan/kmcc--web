import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Zoom } from "swiper/modules"; // Import Zoom module
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect styles
import "swiper/css/zoom"; // Import zoom effect styles

const BannerTwoArea = () => {
  const slides = [
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioGs0UO9P6E0/v1/1200x808.jpg",
    "https://i.ytimg.com/vi/C9bdRFLRQO0/maxresdefault.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/saudi-women-cheer-for-their-football-team-during-a-friendly-news-photo-1052200312-1562874459.jpg",
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Zoom]} // Added Zoom module
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        effect="fade" // Enable fade effect
        zoom
        zoomMax={3} // Maximum zoom scale
        zoomMin={1} // Minimum zoom scale
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 animate-zoom-in"
              style={{ backgroundImage: `url(${slide})` }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <h4 className="text-2xl md:text-4xl font-bold mb-4">
                Change The World Together
              </h4>
              <h1 className="text-3xl md:text-6xl font-extrabold mb-8 text-center">
                Support Kids & Elders <br /> Give Generously
              </h1>
              <a
                href="cause-single.html"
                className="bg-primary px-8 py-4 rounded-lg text-white font-semibold text-lg shadow-lg hover:bg-opacity-90 transition"
              >
                DONATE NOW
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerTwoArea;
