import React, { useEffect, useState } from 'react';
import UNav from '../components/UNav';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import ThuqbaScheme from '../components/ThuqbaScheme';
import KmccScheme from '../components/KmccScheme';
import BannerTwoArea from '../components/banner/BannerTwoArea';
import ServiceArea from '../components/service/ServiceArea';
import HeadOne from '../components/Head/HeadOne';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="relative">
      {/* Navigation */}
        <HeadOne/>
        <div
        className={`top-0 w-full z-50 fixed transition-all duration-300 sm:mt-0 ${
          isScrolled ? "mt-0" : "lg:mt-14"
        }`}
      >
        <UNav />
      </div>
      
      {/* Banner */}
      <div>
        {/* <Banner /> */}
        <BannerTwoArea/>
      </div>

      <div>
        {/* <ThuqbaScheme/> */}
        <ServiceArea/>
      </div>

      <div>
        <KmccScheme/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
