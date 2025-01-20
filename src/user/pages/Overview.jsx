import React from 'react';
import { motion } from 'framer-motion'; // Ensure you import `motion` from `framer-motion`
import UNav from '../components/UNav';

const OverView = () => {
  return (
    <div>
      <UNav />
      <section className="py-24 bg-gray-50">
        <div className="global-container">
          {/* Header Section */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Himaya Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover the vision, mission, and activities of the Kerala Muslim Cultural Centre (KMCC), the world’s largest organization for expatriates.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OverView;
