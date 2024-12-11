import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AboutHimaya = () => {
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

    const section = document.getElementById('about-himaya');
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
    <div id="about-himaya" className="bg-gradient-to-b from-green-100 via-blue-50 to-blue-100 py-16 px-8">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-12 relative overflow-hidden">
        {/* Heading */}
        <motion.h1
          className="text-5xl font-extrabold text-blue-700 text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
        >
          About Himaya
        </motion.h1>

        {/* Quote */}
        <motion.p
          className="text-xl text-gray-700 font-medium mb-6 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          <span className="font-semibold text-blue-600">"Standing by families, always."</span>
        </motion.p>

        {/* Content */}
        <motion.p
          className="text-lg text-gray-600 mb-6 leading-relaxed"
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <strong>Himaya @ Thuqbah</strong> is a humanitarian initiative undertaken by Thuqbah KMCC. 
          The program aims to provide member chikhilsa sahayam (assistance). 
          Many expatriate families face immense hardship after the sudden demise of a family member, 
          struggling to meet basic needs such as food, children's education, and medical expenses. 
        </motion.p>

        <motion.p
          className="text-lg text-gray-600 mb-6 leading-relaxed"
          initial={{ opacity: 0, x: 100 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.2, delay: 0.7 }}
        >
          <strong>"Himaya @ Thuqbah"</strong> seeks to alleviate the suffering of these families by providing them 
          with necessary assistance to help them navigate through these difficult times.
        </motion.p>

        {/* Image Section with Zoom Animation */}
        <motion.div
          className="overflow-hidden rounded-2xl bg-black mt-8"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={inView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <img
            src="https://via.placeholder.com/1296x640"
            alt="hero-dashboard"
            className="h-auto w-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHimaya;
