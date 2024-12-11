import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
              The Kerala Muslim Cultural Centre (KMCC) is a non-profit organization committed to serving the expatriate community.
            </p>
          </motion.div>

          {/* Image and Text Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Section: Image */}
            <motion.div
  className="overflow-hidden rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 hidden md:block" // Hidden on mobile, visible on medium screens and larger
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: inView ? 1 : 0, scale: inView ? 1 : 0.9 }}
  transition={{ duration: 1.5, ease: 'easeOut' }}
>
  <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJGNyZfdDUazyaauvplXjRZnqaL6urSN5zA&s"
    alt="KMCC Image"
    className="w-full h-auto rounded-lg shadow-lg"
  />
</motion.div>

            {/* Right Section: Text Content */}
            <motion.div
              className="space-y-6 text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
            >
              <p className="text-lg font-medium text-green-600">
                KMCC: The world's largest organization for expats.
              </p>
              <p className="text-lg leading-relaxed">
                KMCC, formed in 1981, is a global non-profit organization working to improve the welfare of expatriates from Kerala. The center has had a significant impact, providing community support and cultural enrichment to expatriates.
              </p>
              <p className="text-lg leading-relaxed">
                With branches across the Middle East, KMCC continues to provide services ranging from education and healthcare to social and cultural programs. It is driven by a commitment to uplift the lives of the expatriate community.
              </p>
              <p className="text-lg leading-relaxed">
                KMCC's global reach and volunteer-driven initiatives make it a beacon of hope and solidarity for many.
              </p>
            </motion.div>
          </div>

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
