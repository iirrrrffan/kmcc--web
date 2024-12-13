import React from 'react';
import { FaHandsHelping, FaUsers, FaLightbulb, FaGlobe } from 'react-icons/fa';

const Content1 = () => {
  const contentData = [
    {
      title: 'Power of Unity',
      description: 'Like minded brothers and sisters join hands under the Riyadh KMCC umbrella to display a praiseworthy range of social services.',
      icon: <FaHandsHelping className="text-red-500 text-6xl transform hover:scale-110 transition-all duration-300" />,
    },
    {
      title: 'Selfless Volunteers',
      description: 'The success of KMCC lies in the generous and kind volunteers who spend their valuable time for the needy.',
      icon: <FaUsers className="text-blue-500 text-6xl transform hover:scale-110 transition-all duration-300" />,
    },
    {
      title: 'Catalyst to Upliftment',
      description: 'Riyadh KMCC takes special care to promote the talents of its members and spread the light of motivation and confidence.',
      icon: <FaLightbulb className="text-yellow-500 text-6xl transform hover:scale-110 transition-all duration-300" />,
    },
    {
      title: 'Global Impact',
      description: 'KMCC’s global presence has positively influenced the lives of millions of expatriates, offering them a sense of community and security in foreign lands.',
      icon: <FaGlobe className="text-green-500 text-6xl transform hover:scale-110 transition-all duration-300" />,
    },
  ];

  return (
    <div className="p-10 bg-green-800 rounded-xl shadow-lg flex space-x-8 overflow-x-auto">
      {contentData.map((content, index) => (
        <div
          key={index}
          className="flex flex-col items-center bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 min-w-[300px] border border-gray-200"
        >
          <div className="mb-4">{content.icon}</div>
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-2">{content.title}</h3>
          <p className="text-gray-600 text-center text-sm">{content.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Content1;
