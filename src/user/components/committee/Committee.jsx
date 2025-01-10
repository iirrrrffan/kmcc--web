import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import image1 from "../../../assets/empty.jfif";
import image2 from "../../../assets/empty.jfif";
import image3 from "../../../assets/empty.jfif";
import image4 from "../../../assets/empty.jfif";

import bgImage from "../../../assets/hands.jfif";

const CommitteeMemberCard = ({ name, role, image, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105">
    {/* Image Section */}
    <div className="overflow-hidden rounded-t-lg">
      <img
        src={image}
        alt={`Portrait of ${name}`}
        className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300"
      />
    </div>
    {/* Details Section */}
    <div className="pt-4 text-center">
      <h3 className="text-2xl font-bold text-gray-800">{name}</h3>
      <p className="text-lg text-green-600 font-medium">{role}</p>
      <p className="text-sm text-gray-600 mt-3 leading-relaxed">{description}</p>
    </div>
  </div>
);

const Committee = () => {
  // Committee Members Data
  const committeeMembers = [
    {
      name: "John Doe",
      role: "President",
      image: image1,
      description: "John leads with passion and ensures the team's success.",
    },
    {
      name: "Jane Smith",
      role: "Vice President",
      image: image2,
      description: "Jane excels in strategy and organizational growth.",
    },
    {
      name: "Michael Johnson",
      role: "Treasurer",
      image: image3,
      description: "Michael manages finances with precision and care.",
    },
    {
      name: "Emily Davis",
      role: "Chairman",
      image: image4,
      description: "Emily oversees operations and maintains team morale.",
    },
  ];

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay for Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/80 via-green-800/50 to-green-900/80"></div>

      <div className="relative container mx-auto px-4 text-center">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-wider">
          Meet Our Committee
        </h2>
        <p className="text-lg text-gray-200 mb-16 max-w-3xl mx-auto">
          Our committee is dedicated to ensuring the success and smooth
          operations of our organization. Get to know the people who make it
          all happen.
        </p>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {committeeMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <CommitteeMemberCard
                name={member.name}
                role={member.role}
                image={member.image}
                description={member.description}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Committee;
