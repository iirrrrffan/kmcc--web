import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import { Link } from "react-router-dom";
import dotImage from "../../assets/about-dot2.png";
import { FaHistory } from "react-icons/fa";
import { SiTransmission } from "react-icons/si";
const AboutHimaya = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById("about-himaya");
    if (section) observer.observe(section);

    AOS.init({ duration: 1000 });

    return () => section && observer.unobserve(section);
  }, []);

  return (
    <div
      id="about-himaya"
      className="relative py-16 bg-gradient-to-b md:flex justify-center md:pr-16 mb-3"
    >
      <div className="md:w-1/2  w-full">
        <div
          className="lg:w-1/2 w-full wow fadeInLeft relative"
          data-wow-delay="200ms"
          data-wow-duration="1500ms"
        >
          <div className="relative ">
            {/* Dots Decoration */}
            <div className="absolute right-16 top-0 animate-bobble md:flex hidden">
              <img src={dotImage} alt="dots" className="h-full" />
            </div>
            {/* Small Image */}
            <div className="absolute -right-44 -bottom-10 z-20 border hidden md:flex border-green-800 border-t-2 border-b-0 border-r-0 border-l-2">
              <img
                src="https://sun1-90.userapi.com/impg/i3W08NyVVPCNa-cdJTBljr-n1vwc2nA_X_gVUQ/oeJR22RKLa0.jpg?size=1024x576&quality=95&sign=458628c1fe0adbdfb5b4f5b036931fbb&c_uniq_tag=Kulci29K5wPRyLnP7IY5wxXReXaUqFboolNrQZB0grQ&type=album"
                alt="Small image"
                className="w-48"
              />
            </div>
            {/* Main Image */}
            <div className="relative md:top-2 md:left-36  aspect-[16/9] lg:aspect-[2/3]  md:flex overflow-hidden  shadow-xl z-10 ">
              <img
                src="https://www.transindus.co.uk/media/7924/tailormade-and-group-tour-india-highlight-wayanad-1.jpg"
                alt="Main image"
                className="w-full h-full object-cover object-center scale-110"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Content Section */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-1 gap-12 items-center relative z-20 w-full md:w-1/2 ">
        {/* Content Section */}
        <motion.div
          className="bg-white/20 backdrop-blur-lg p-8 text-center lg:text-left flex flex-col justify-center h-full"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-bold text-black mb-4">About Himaya</h1>
          <p className="text-lg text-gray-300 mb-4">
            <span className="font-semibold text-green-600">
              "Standing by families, always."
            </span>
          </p>
          <p className="text-sm text-gray-900 mb-4">
            <strong>Himaya @ Thuqbah</strong> is a humanitarian initiative by
            Thuqbah KMCC, supporting expatriate families during tough times. It
            provides essential financial and emotional aid to families facing
            the untimely loss of a breadwinner, ensuring they can cover
            necessities like food, healthcare, and education.
          </p>
          <div className="about-two__content">
            <div className="item flex items-center gap-5 mb-6">
              <div className="icon w-20 h-20 flex items-center justify-center md:rounded-none sm:rounded-full md:p-0 sm:p-5 p-2  bg-light">
              <SiTransmission color="white" size={25}/>
              </div>
              <div className="content">
                <h6 className="mb-2 text-lg font-semibold">Mission & Vision</h6>
                <p className="text-gray-500">
                KMCC aims to enhance the welfare of expatriates through community programs, educational initiatives
                </p>
              </div>
            </div>

            <div className="item flex items-center gap-5">
              <div className="icon w-20 h-20 flex items-center justify-center md:rounded-none sm:rounded-full md:p-0 sm:p-5 p-2  bg-light">
                <FaHistory color="white" size={30} />
              </div>
              <div className="content">
                <h6 className="mb-2 text-lg font-semibold">
                Our History
                </h6>
                <p className="text-gray-500">
                Established in 1981, KMCC has been a pioneer in addressing the needs of the expatriate community from Kerala
                </p>
              </div>
            </div>
          </div>

          {/* Read More Button */}
          <div className="text-center mt-6">
            <Link to={"himaya"}>
              <button className="inline-block px-6 py-3 bg-green-800 text-white font-medium rounded-lg shadow-md hover:bg-green-700 transition-transform transform duration-300 hover:scale-105">
                Read More
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
      {/* secoundPart */}
    </div>
  );
};

export default AboutHimaya;
