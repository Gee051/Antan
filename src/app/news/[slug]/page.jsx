"use client"
import newsData from '../../components/AntanLinks/newsData';
import Image from 'next/image';
import { motion } from 'framer-motion';

const NewsDetail = ({ params }) => {
  const { slug } = params;
  const newsItem = newsData.find(news => news.id === slug);

  if (!newsItem) {
    return <div>News item not found.</div>;
  }

  // Animation variants
  const slideInFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  const slideInFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  const slideInFromBottom = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="overflow-hidden">
      <motion.div
        className="relative w-full h-80 md:h-96"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        variants={slideInFromLeft}
      >
        <Image
          src={newsItem.image}
          alt={newsItem.heading}
          layout="fill"
          objectFit="cover"
          className="object-cover"
        />
        <motion.h1
          className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 text-xl md:text-2xl lg:text-4xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          variants={slideInFromRight}
        >
          {newsItem.heading}
        </motion.h1>
      </motion.div>
      <div className="p-4">
        <motion.p
          className="text-center my-8 text-base md:text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={slideInFromBottom}
        >
          {newsItem.text}
        </motion.p>
        <div className="flex justify-center space-x-4 my-8">
          {/* Additional content if needed */}
        </div>
        <div className="flex flex-col md:flex-row justify-between">
          <motion.div
            className="w-full md:w-1/2 p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            variants={slideInFromLeft}
          >
            <p className="mt-2 text-base md:text-lg">{newsItem.text1}</p>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 p-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            variants={slideInFromRight}
          >
            <Image
              src={newsItem.image}
              alt={newsItem.heading}
              layout="responsive"
              width={1000}
              height={800}
              className="w-full h-auto object-cover rounded"
            />
          </motion.div>
        </div>
        <motion.p
          className="text-center my-8 text-base md:text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={slideInFromLeft}
        >
          {newsItem.text2}
        </motion.p>
        <div className="flex justify-center space-x-4 my-8">
          {/* Additional content if needed */}
        </div>
        <motion.p
          className="text-center my-8 text-base md:text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          variants={slideInFromBottom}
        >
          {newsItem.text3}
        </motion.p>
      </div>
    </div>
  );
};

export default NewsDetail;
