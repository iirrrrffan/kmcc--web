import React from "react";
import { motion } from "framer-motion";
import { FaEye } from "react-icons/fa";
import { GiBullseye } from "react-icons/gi";

const MissionVision = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center  gap-6  md:px-28 md:pt-10 px-5">
      {/* Mission Section */}
      <motion.div
        className="w-full md:w-1/2 h-72 flex flex-col items-center text-center p-6 bg-gradient-to-r from-orange-700 to-orange-500 text-white rounded-lg shadow-lg border border-gray-200"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex items-center justify-center w-16 h-16 bg-orange-800 text-white rounded-full mb-4">
          <GiBullseye size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
        <p className="text-white">
          We are committed to employ the virtue of organised authority for the
          benefit and prosperity of society's most vulnerable members beyond
          caste, religion, and political ideology through selfless service.
        </p>
      </motion.div>

      {/* Vision Section */}
      <motion.div
        className="w-full md:w-1/2 h-72 flex flex-col items-center text-center p-6 bg-gradient-to-r from-green-700 to-green-500 text-white rounded-lg shadow-lg border border-gray-200"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="flex  items-center justify-center md:w-16 md:h-16 bg-green-500 text-white rounded-full mb-4">
          <FaEye size={32} />
        </div>
        <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
        <p className="text-white">
          We believe that the upliftment of society can only be accomplished
          when the most vulnerable segments of the population are socially,
          economically, culturally, and educationally empowered.
        </p>
      </motion.div>
    </div>
  );
};

export default MissionVision;
