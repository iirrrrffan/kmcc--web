import React from "react";
import img from "../../../assets/empty.jfif"
import UNav from "../UNav";
import HeadOne from "../Head/HeadOne";
import Footer from "../Footer";

const Committee = () => {
  const committeeMembers = [
    {
      role: "President",
      name: "Abdullah Khan",
      image: img, // Replace with actual image URL
      description:
        "Provides visionary leadership and ensures the smooth functioning of KMCC.",
    },
    {
      role: "General Secretary",
      name: "Ibrahim Sheikh",
      image: img, // Replace with actual image URL
      description:
        "Manages communication and coordinates activities across all departments.",
    },
    {
      role: "Treasurer",
      name: "Mohammed Ali",
      image: img, // Replace with actual image URL
      description: "Responsible for financial planning, budgeting, and reports.",
    },
  ];

  return (
    <div>
      <HeadOne/>
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-green-700 py-12 px-6">
      
    <UNav/>
      <div className="max-w-7xl mx-auto text-center text-white">
        {/* Section Title */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 via-green-600 to-green-800 drop-shadow-lg">
  KMCC Committee
</h1>

        <p className="text-lg mb-12">
          Meet the dedicated leaders who ensure the success of KMCC and its initiatives.
        </p>
        {/* Committee Members Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {committeeMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 rounded-xl shadow-lg p-8 transform hover:scale-105 transition-transform duration-300"
            >
              {/* Profile Image */}
              <img
                src={member.image}
                alt={member.role}
                className="w-36 h-36 mx-auto rounded-full mb-6 shadow-lg border-4 border-green-700"
              />
              {/* Role and Name */}
              <h2 className="text-2xl font-bold text-green-900">{member.role}</h2>
              <h3 className="text-lg text-gray-700 mb-4">{member.name}</h3>
              {/* Description */}
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
        </div>
        
      </div>
      <Footer/>
    </div>
  );
};

export default Committee;
