import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import image from "../../assets/frds.jpg";

const AboutHimaya = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('about-himaya');
    if (section) observer.observe(section);

    AOS.init({ duration: 1000 });

    return () => section && observer.unobserve(section);
  }, []);

  return (
    <div id="about-himaya" className="relative py-16 px-6 sm:px-12 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 to-black overflow-hidden">
        {/* Subtle Glowing Circles */}
        <div className="absolute top-10 left-10 w-64 h-64 bg-gray-800 opacity-40 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gray-700 opacity-40 blur-3xl rounded-full animate-pulse"></div>

        {/* Additional Floating Blurred Elements */}
        <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gray-600 opacity-25 blur-2xl rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-gray-700 opacity-15 blur-3xl rounded-full animate-pulse"></div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-20">
        {/* Image Section */}
        <motion.div
          className="overflow-hidden rounded-lg shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          data-aos="zoom-in"
        >
          <img
            src={image}
            alt="Himaya"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Content Section */}
        <div className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center lg:text-left">
          <motion.h1
            className="text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            data-aos="fade-up"
          >
            About Himaya
          </motion.h1>

          <motion.p
            className="text-lg text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1.2 }}
            data-aos="fade-up"
          >
            <span className="font-semibold text-green-400">
              "Standing by families, always."
            </span>
          </motion.p>

          <motion.p
            className="text-sm text-gray-400"
            initial={{ opacity: 0, x: -100 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            data-aos="fade-left"
          >
            <strong>Himaya @ Thuqbah</strong> is a humanitarian initiative providing support to expatriate families in distress, covering essentials like food, education, and medical aid.
          </motion.p>

          {/* Read More Button */}
          <div className="text-center mt-6">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-green-500 text-white font-medium rounded-lg shadow-md hover:bg-green-600 transition-transform transform duration-300 hover:scale-105"
              data-aos="fade-up"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHimaya;
