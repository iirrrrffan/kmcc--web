import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS

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

    // Initialize AOS
    AOS.init({ duration: 1000 }); // You can adjust the duration here

    return () => section && observer.unobserve(section);
  }, []);

  return (
    <div id="about-himaya" className="py-16 px-8">
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-white to-blue-50 rounded-3xl shadow-2xl p-12 relative">
        <motion.h1
          className="text-6xl font-extrabold text-blue-700 text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          data-aos="fade-up" // Adding AOS animation here
        >
          About Himaya
        </motion.h1>

        <motion.p
          className="text-2xl text-gray-700 font-medium mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
          data-aos="fade-up" // Adding AOS animation here
        >
          <span className="font-semibold text-blue-600">"Standing by families, always."</span>
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 mb-6"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
          data-aos="fade-left" // Adding AOS animation here
        >
          <strong>Himaya @ Thuqbah</strong> is a humanitarian initiative providing support to expatriate families in distress after a loss, covering basic needs like food, education, and medical expenses.
        </motion.p>

        {/* Image Section with Zoom Animation */}
        <motion.div
          className="overflow-hidden rounded-3xl bg-black mt-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          data-aos="zoom-in" // Adding AOS animation here
        >
          <img
            src="https://via.placeholder.com/800x400"
            alt="hero-dashboard"
            className="h-auto w-full"
          />
        </motion.div>

        {/* Read More Button */}
        <div className="text-center mt-6">
  <a
    href="#"
    className="inline-block px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
    data-aos="fade-up" // Adding AOS animation here
  >
    Read More
  </a>
</div>

      </div>
    </div>
  );
};

export default AboutHimaya;
