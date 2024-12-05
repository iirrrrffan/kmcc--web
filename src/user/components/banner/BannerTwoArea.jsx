import React from "react";
// import "animate.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/zoom";

const BannerTwoArea = () => {
  const slides = [
    "https://assets.bwbx.io/images/users/iqjWHBFdfxIU/ioGs0UO9P6E0/v1/1200x808.jpg",
    "https://i.ytimg.com/vi/C9bdRFLRQO0/maxresdefault.jpg",
    "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/saudi-women-cheer-for-their-football-team-during-a-friendly-news-photo-1052200312-1562874459.jpg",
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade, Zoom]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop
        effect="fade"
        zoom
        zoomMax={3}
        zoomMin={1}
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full">
            <div
              className="absolute inset-0 bg-cover bg-center transition-all duration-1000 animate-zoom-in"
              style={{ backgroundImage: `url(${slide})` }}
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-6">
              <h4
                className="text-xl md:text-3xl font-semibold uppercase tracking-wide mb-4 text-gray-200"
                data-animation="fadeInUp"
                data-delay=".3s"
              >
                Uniting Hearts, Empowering Communities
              </h4>
              <h1
                className="text-4xl md:text-4xl font-extrabold text-center leading-tight mb-8 text-shadow-lg"
                data-animation="fadeInUp"
                data-delay=".5s"
              >
                Fostering Culture, Care, and
                <br />
                Development Worldwide
              </h1>

              <a
                href="cause-single.html"
                className="bg-primary px-10 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:bg-opacity-90 hover:scale-110 transition-transform duration-300 animate-bounce-slow"
              >
                READ MORE
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default BannerTwoArea;
