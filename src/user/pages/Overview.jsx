import React from 'react';
import { motion } from 'framer-motion';
import UNav from '../components/UNav';
import Footer from '../components/Footer';

const Overview = () => {
  return (
    <div>
        <UNav/>
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

        {/* Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Section 1: History */}
          <motion.div
            className="space-y-6 bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h3 className="text-2xl font-semibold text-green-600">Our History</h3>
            <p className="text-lg text-gray-700">
              Established in 1981, KMCC has been a pioneer in addressing the needs of the expatriate community from Kerala. From modest beginnings, it has grown into a global organization with a presence across the Middle East and beyond.
            </p>
          </motion.div>

          {/* Section 2: Mission and Vision */}
          <motion.div
            className="space-y-6 bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-green-600">Mission & Vision</h3>
            <p className="text-lg text-gray-700">
              KMCC aims to enhance the welfare of expatriates through community programs, educational initiatives, and cultural preservation. Our vision is to empower communities and create a strong global network of support.
            </p>
          </motion.div>

          {/* Section 3: Key Activities */}
          <motion.div
            className="space-y-6 bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold text-green-600">Key Activities</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>Organizing cultural and social events</li>
              <li>Providing educational scholarships and aid</li>
              <li>Healthcare support and welfare programs</li>
              <li>Disaster relief and community support</li>
            </ul>
          </motion.div>

          {/* Section 4: Global Impact */}
          <motion.div
            className="space-y-6 bg-white p-8 rounded-xl shadow-md"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold text-green-600">Global Impact</h3>
            <p className="text-lg text-gray-700">
              KMCC’s global presence has positively influenced the lives of millions of expatriates, offering them a sense of community and security in foreign lands.
            </p>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <a href="https://kmcccare.com/scheme-registration">
          <button className="px-6 py-2 bg-green-500 text-white font-semibold rounded-full shadow-md hover:bg-green-600 transition-colors">
            Join KMCC Today
          </button>
          </a>
        </motion.div>
      </div>
    </section>
    <Footer/>
    </div>
  );
};

export default Overview;
