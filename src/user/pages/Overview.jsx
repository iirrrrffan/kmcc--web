import React from 'react';
import { motion } from 'framer-motion'; // Ensure you import `motion` from `framer-motion`
import UNav from '../components/UNav';
import Banner from '../components/common/Banner';
import Content from '../components/about/Content';
import MissionVision from '../components/about/MissionVision';
import Footer from '../components/Footer';

const OverView = () => {
  return (
    <div>
      <UNav />
      <Banner titile="About"  Image='https://blog.se.com/wp-content/uploads/2024/01/generic_life-at-schneider-electric_GettyImages-888343166-2048x1367.jpg'/>
      <section className="py-24 bg-gray-50">
        <div className="global-container">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Himaya Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the vision, mission, and activities of the Kerala Muslim Cultural Centre (KMCC), the world’s largest organization for expatriates.
            </p> */}
            <Content/>
          </motion.div>
          <MissionVision/>
        </div>
      </section>
          <Footer />
    </div>
  );
};

export default OverView;
