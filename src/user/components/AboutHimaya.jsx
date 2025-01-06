import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS CSS
import image from "../../assets/frds.jpg";
import { Link } from "react-router-dom";

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
      className="relative py-16 px-6 sm:px-12 bg-gradient-to-b from-black to-gray-900 overflow-hidden"
    >
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
          className="overflow-hidden rounded-lg shadow-lg flex items-center justify-center aspect-square lg:aspect-auto lg:h-full"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          data-aos="zoom-in"
        >
          <img
            src={image}
            alt="Himaya"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>

        {/* Content Section */}
        <motion.div
          className="bg-white/20 backdrop-blur-lg p-8 rounded-2xl shadow-xl text-center lg:text-left flex flex-col justify-center h-full"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2 }}
          data-aos="fade-up"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            About Himaya
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            <span className="font-semibold text-green-400">
              "Standing by families, always."
            </span>
          </p>
          <p className="text-sm text-gray-400">
            <strong>Himaya @ Thuqbah</strong> is a humanitarian initiative undertaken by Thuqbah KMCC, . The
program aims to provide member chikhilsa sahayam. Many expatriate families face
immense hardship after the sudden demise of a family member, struggling to meet basic
needs such as food, children's education, and medical expenses. "Himaya @ Tukhbah"
seeks to alleviate the suffering of these families by providing them with necessary
assistance."
          </p>
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
    </div>
  );
};

export default AboutHimaya;
