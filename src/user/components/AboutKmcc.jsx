import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutKmcc = () => {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const section = document.getElementById('about-kmcc');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <>
      {/* Section Start */}
      <section id="about-kmcc" className="relative py-24 bg-white">
        <div className="global-container">

          {/* Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <h2 className="text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
              About KMCC
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The Kerala Muslim Cultural Centre (KMCC) is a global organization serving expatriates.
            </p>
          </motion.div>

          {/* Text Section with Read More Button */}
          <motion.div
            className="space-y-6 text-gray-700 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          >
            <p className="text-lg font-medium text-green-600">
              KMCC: The world's largest organization for expats.
            </p>
            <p className="text-lg leading-relaxed">
              Established in 1981, KMCC has made a significant impact on the welfare of expatriates from Kerala.
            </p>
            <Link to={"/overview"}>
            <button
              className="mt-6 px-6 py-2 bg-green-500 text-white font-semibold rounded-full shadow-lg hover:bg-green-600 transition-colors"
            >
              Read More
            </button>
            </Link>
          </motion.div>

          {/* Decorative Background Circles */}
          <motion.div
            className="absolute top-0 left-0 w-24 h-24 bg-green-500 rounded-full opacity-20 blur-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-24 h-24 bg-green-500 rounded-full opacity-20 blur-xl"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1.2 }}
            transition={{ duration: 3, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut', delay: 0.5 }}
          />
        </div>
      </section>
      {/* Section End */}
    </>
  );
};

export default AboutKmcc;
