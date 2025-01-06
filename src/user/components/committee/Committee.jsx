import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import image1 from "../../../assets/empty.jfif";
import image2 from "../../../assets/empty.jfif";
import image3 from "../../../assets/empty.jfif";
import image4 from "../../../assets/empty.jfif";

const Committee = () => {
  const committeeMembers = [
    {
      name: "John Doe",
      role: "President",
      image: image1,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Jane Smith",
      role: "Vice President",
      image: image2,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Michael Johnson",
      role: "Treasurer",
      image: image3,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      name: "Emily Davis",
      role: "Chairman",
      image: image4,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <div className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-green-500 mb-12 uppercase tracking-wider">
          Our Committee
        </h2>
        <Swiper
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          loop
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {committeeMembers.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out transform hover:scale-105">
                <div className="overflow-hidden rounded-t-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-56 object-cover hover:scale-110 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <div className="pt-4">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {member.name}
                  </h3>
                  <p className="text-md text-green-600 font-medium">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 mt-2">
                    {member.description}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Committee;
