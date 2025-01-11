import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/zoom";
import { motion } from "framer-motion";
  
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
        pagination={{ clickable: true }}
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
              className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 md:px-12 bg-gradient-to-t from-black/60 via-black/30 to-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                opacity: { duration: 0.7 },
                y: { duration: 0.7 },
              }}
            >
              <motion.h4
                className="text-2xl md:text-4xl hidden lg:block font-semibold mb-4 tracking-wide uppercase drop-shadow-lg animate_animated animate_fadeInUp"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Welcome to KMCC Thuqbah
              </motion.h4>
              <motion.h1
                className="text-3xl md:text-6xl font-light italic mb-6 text-center tracking-wide leading-snug animate_animated animate_fadeInUp drop-shadow-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Connecting Malayali Hearts <br /> With Culture and Care
              </motion.h1>
              <motion.a
                href="/himaya"
                className="bg-gradient-to-r from-green-700 to-green-900 px-8 py-3 rounded-full text-white font-medium text-base shadow-lg hover:opacity-90 hover:scale-105 transition-all tracking-wide uppercase"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
              >
                Read More
              </motion.a>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerTwoArea;
