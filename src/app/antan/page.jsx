"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const staffData = [
  { id: 1, name: "Engr. Sagiru A Jajere FNSE", position: "Managing Director", image: "/assets/leaders1.jpg" },
  { id: 2, name: "Mustapha Yusufu", position: "Director Technical Services", image: "/assets/leader2.jpg" },
  { id: 3, name: "Bola Adediran", position: "Director Finance and Accounts (CFO)", image: "/assets/leader3.jpg" },
  { id: 4, name: "Moses Tsado", position: "Director Contract and Procurement", image: "/assets/leader4.jpg" },
  { id: 5, name: "Ekereke Ida", position: "Director Planning and Gas development ", image: "/assets/leader5.jpg" },
  { id: 6, name: "Umar Abdullahi", position: "Director Operations", image: "/assets/leader6.jpg" },
  { id: 7, name: "Charles Dike", position: "Director Business Services", image: "/assets/leader7.png" },
];

const slideInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Antan = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center p-4">
      <h1 className="text-6xl font-bold my-8 text-center border-b-green-500 border-b-[4px]">Management Staff</h1>

      <motion.div
        className="flex flex-col items-center mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInVariant}
        transition={{ duration: 0.5 }}
      >
        <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
          <Image
            src={staffData[0].image}
            alt={staffData[0].name}
            width={200}
            height={300}
            className="rounded-lg"
          />
          <h2 className="text-2xl font-semibold mt-4">{staffData[0].name}</h2>
          <p className="text-sm font-medium">{staffData[0].position}</p>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInVariant}
        transition={{ duration: 0.5 }}
      >
        {staffData.slice(1, 4).map((staff) => (
          <div key={staff.id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            <Image
              src={staff.image}
              alt={staff.name}
              width={200}
              height={200}
              className="rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{staff.name}</h2>
            <p className="text-sm font-medium">{staff.position}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={slideInVariant}
        transition={{ duration: 0.5 }}
      >
        {staffData.slice(4).map((staff) => (
          <div key={staff.id} className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
            <Image
              src={staff.image}
              alt={staff.name}
              width={200}
              height={200}
              className="rounded-lg"
            />
            <h2 className="text-xl font-semibold mt-4">{staff.name}</h2>
            <p className="text-sm font-medium">{staff.position}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Antan;
