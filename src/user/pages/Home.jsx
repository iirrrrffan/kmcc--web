import React, { useEffect, useRef, useState } from 'react';
import UNav from '../components/UNav';
import Footer from '../components/Footer';
import KmccScheme from '../components/KmccScheme';
import BannerTwoArea from '../components/banner/BannerTwoArea';
import ServiceArea from '../components/service/ServiceArea';
import HeadOne from '../components/Head/HeadOne';
import AboutKmcc from '../components/AboutKmcc';
import AboutHimaya from '../components/AboutHimaya';
import Content1 from '../contents/Content1';
import Content2 from '../contents/Content2';
import Content3 from '../contents/Content3';
import logo from "../../assets/WhatsApp Image 2024-12-27 at 7.23.10 PM.jpeg";
import Committee from '../components/committee/Committee';

const Home = () => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const footerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      // Determine scroll direction
      if (currentScrollPosition > lastScrollPosition && currentScrollPosition > 100) {
        setIsScrollingUp(false); // Scrolling down
      } else {
        setIsScrollingUp(true); // Scrolling up
      }

      setLastScrollPosition(currentScrollPosition);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  return (
    <div className="relative" >
      {/* Top Bar and Navbar */}
      <HeadOne />
      <div
        className={`top-0 w-full z-50 fixed transition-transform duration-300 pt-[54px] ${
          isScrollingUp ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <UNav scrollToFooter={() => footerRef.current.scrollIntoView({ behavior: 'smooth' })} />
      </div>

      {/* Content */}
      <div>
        <BannerTwoArea />
      </div>
      <div>
        <ServiceArea />
      </div>
      <div>
        <AboutHimaya />
      </div>
      <div>
        <AboutKmcc />
      </div>
      <div>
        <KmccScheme />
      </div>
      <div>
        <Content1 />
      </div>
      
      {/* <div>
        <Committee />
      </div> */}
      <div>
        <Content2 />
      </div>
      <div>
        <Content3 />
      </div>
      <div>
        {/* Footer with ref */}
        <Footer ref={footerRef} />
      </div>

      {/* Logo in the top right corner */}
      <div className="absolute xl:top-4 xl:right-4 top-1 right-4 z-50">
        <img
          src={logo}
          alt="Logo"
          className="xl:w-24 xl:h-24 w-12 h-12 rounded-full shadow-lg transition-transform transform hover:scale-110 hover:rotate-6"
        />
      </div>
    </div>
  );
};

export default Home;
