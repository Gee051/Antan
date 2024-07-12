"use client"
import React, { useState } from "react";
import { Autoplay, Pagination, EffectFade, Scrollbar} from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper/core';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion'
import BannerScrollbar from "./BannerScrollbar";

SwiperCore.use([Pagination, Autoplay, EffectFade ]);

const slides = [
  {
    image: '/assets/antan1.jpg',
    subtext: 'PRODUCING THE WORLD`S ',
    heading: 'Vital oil and natural gas resources',
    text: 'See our commitment to safety and sustainability'
  },
  {
    image: '/assets/antan2.jpg',
    subtext: 'OUR PROJECTS WORLDWIDE',
    heading: 'Discover a few of our projects',
    text: 'To meet the growing worldwide demand for energy while preparing for the future.',
  },
  {
    image: '/assets/antan3.jpg',
    subtext: 'PROVIDING FOR TODAY',
    heading: 'Future technologies and innovations',
    text: 'Discover how Antan produces the oil and gas essential to modern life.'
  },

];

const Banner = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      effect={'fade'}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 5000, 
        disableOnInteraction: false,
      }}
      onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="bg-black font-serif">
            
            <Image
            height={400}
            width={750}
            src={slide.image}
            alt={`Image ${index + 1}`}
            className="opacity-25 bg-center w-full h-[450px] sm:h-[350px] md:[400px] lg:h-[450px] xl:h-[700px]"
            />
           <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center  text-white">
              {currentSlide === index && (
                <>
                  <motion.p
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-xl px-9 md:text-2xl mb-4"
                  >
                    {slide.subtext}
                  </motion.p>
                  <motion.h1
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-5xl md:px-9 px-8 md:text-7xl font-bold mb-4"
                  >
                    {slide.heading}
                  </motion.h1>
                  <motion.p
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="text-xl px-9 md:text-2xl mb-6"
                  >
                    {slide.text}
                  </motion.p>
                </>
              )}
            </div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-10 w-[50%]">
                <BannerScrollbar currentSlide={currentSlide} totalSlides={slides.length} />
              </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;
