import React from "react";

const ServiceArea = () => {
  return (
    <section className="service-area py-24 bg-gray-100">
      <div className="container mx-auto px-6 w-9/12">
        <div className="flex justify-between ">
          {/* Service 1 */}
          <div
            className="service__item wow fadeInUp bg-gradient-to-r from-[#1d7522] to-[#2e8933] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
          >
            {" "}
            <div
              className="p-6 bg-cover bg-center relative"
              style={{
                backgroundImage: 'url("../../assets/images/shape/service.png")',
              }}
            >
              <div className="service__icon absolute top-0 left-0 p-4 bg-white rounded-full shadow-md transform -translate-y-1/2">
                <img
                  src="assets/images/icon/service1.png"
                  alt="ger icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="service__content mt-16">
                <h3 className="text-white text-2xl font-semibold mb-4">
                  Kids Education
                </h3>
                <p className="text-white">
                  Every child deserves to be welcomed in certain circumstances.
                </p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div
            className="service__item wow fadeInUp bg-gradient-to-r from-[#1d7522] to-[#2e8933] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            data-wow-delay="200ms"
            data-wow-duration="1500ms"
          >
            <div
              className="p-6 bg-cover bg-center relative"
              style={{
                backgroundImage: 'url("../../assets/images/shape/service.png")',
              }}
            >
              <div className="service__icon absolute top-0 left-0 p-4 bg-white rounded-full shadow-md transform -translate-y-1/2">
                <img
                  src="assets/images/icon/service2.png"
                  alt="Healthy Food Icon"
                  className="w-12 h-12"
                />
              </div>
              <div className="service__content mt-16">
                <h3 className="text-white text-2xl font-semibold mb-4">
                  Healthy Food
                </h3>
                <p className="text-white">
                  Nourishing your body with the best food possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceArea;
