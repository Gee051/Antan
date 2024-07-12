"use client";
import React from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import newsData from "../components/AntanLinks/newsData";

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return text.split(" ").slice(0, maxLength).join(" ") + "...";
};

const slideUpVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const NewsSection = () => {
  return (
    <main className="bg-gray-50 m-3 p-3 rounded-xl">
      <motion.div
        className="flex flex-col"
        initial="hidden"
        animate="visible"
        variants={slideUpVariant}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl px-3 font-bold">News from the world of Antan</h1>
        <div className="flex items-end justify-end m-3">
          <h2 className="text-2xl font-bold text-green-500">Read all news</h2>
          <button className="flex justify-center items-center border-[3px] border-green-500 w-28 h-12 rounded-full mx-3 transition-transform hover:scale-105">
            <FaArrowRight className="text-lg" />
          </button>
        </div>
      </motion.div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {newsData.map((news) => (
          <SwiperSlide key={news.id}>
            <motion.div
              className="bg-white border rounded-lg transition-transform duration-300 hover:-translate-y-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={slideUpVariant}
              transition={{ duration: 0.5 }}
            >
              <div className="relative h-40">
                <Image
                  src={news.image}
                  alt={news.heading}
                  layout="fill"
                  objectFit="cover"
                  className="object-cover"
                />
              </div>
              <div className="p-3">
                <div className="flex gap-8">
                  <h1 className="px-3 text-xl font-bold">News</h1>
                  <p className="text-gray-700 text-base">{news.date}</p>
                </div>
                <p className="text-base pt-6">{truncateText(news.text, 20)}</p>
              </div>
              <div className="flex gap-3 text-end items-end justify-end mb-3">
                <h4 className="text-lg font-bold">Read more </h4>
                <button className="flex justify-center items-center border-[3px] border-green-500 w-10 h-6 rounded-full mx-3 transition-transform hover:scale-105">
                  <FaArrowRight className="text-base font-medium" />
                </button>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
};

export default NewsSection;
