import React from "react";
// import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect styles
import "swiper/css/zoom"; // Import zoom effect styles
import { motion } from "framer-motion"; // Add framer-motion for additional text animations

const BannerTwoArea = () => {
  const slides = [
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioGs0UO9P6E0/v1/1200x808.jpg",
    "https://i.ytimg.com/vi/C9bdRFLRQO0/maxresdefault.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/saudi-women-cheer-for-their-football-team-during-a-friendly-news-photo-1052200312-1562874459.jpg",
  ];

  return (
    <section className="relative h-[70vh] sm:h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Zoom]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true,color:'red' }}
        loop
        effect="fade"
        zoom
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 animate-zoom-in"
              style={{ backgroundImage: `url(${slide})` }}
            />
            <motion.div
              className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.7 },
                y: { duration: 0.7 },
              }}
            >
              <motion.h4
                className="text-2xl md:text-4xl hidden lg:block font-bold mb-4 animate__animated animate__fadeInUp"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Change The World Together
              </motion.h4>
              <motion.h1
                className="text-3xl md:text-6xl font-extrabold mb-8 text-center animate__animated animate__fadeInUp"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Support Kids & Elders <br /> Give Generously
              </motion.h1>
              <motion.a
                href="cause-single.html"
                className="bg-[#1d7522] px-8 py-4 rounded-lg text-white font-semibold text-lg shadow-lg hover:bg-opacity-90 transition transform hover:scale-105"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Check Status
              </motion.a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerTwoArea;
