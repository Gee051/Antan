"use client"
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const imageVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const headingVariant = {
  hidden: { opacity: 0, y: -50 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div className="container mx-auto p-4">
      <motion.h1
        className="text-5xl text-center border-b-[3px] border-green-500 p-2 font-bold"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headingVariant}
        transition={{ duration: 0.5 }}
      >
        About Us
      </motion.h1>
      <div className="mt-4 text-center md:text-left md:flex md:justify-between">
        <motion.div
          className="md:w-1/2 md:mr-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariant}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-black text-lg md:text-xl">
            <span className="text-xl md:text-2xl font-bold">Antan Producing Limited (APL),</span> is an Exploration and Production Company with offices in Abuja and Lagos, the company`s operations are based in Izombe, Port Harcourt and Onne. Effective February 1, 2023, APL took over the Operatorship of the asset (4 blocks) formerly operated by Addax Petroleum Development Nigeria Ltd (APDNL) and Addax Petroleum Exploration Nigeria Ltd (APENL) respectively following the exit of the latter from Nigeria. The 4 blocks consist of 3 offshore assets <span className="font-bold text-green-500">(OML-123, OML-126 ad OML-137) and 1 onshore asset (OML-124)</span>.
          </h4>
          <div className="mt-4">
            <Link className="text-xl font-bold hover-underline-animation" href="/news">More about Antan</Link>
          </div>
        </motion.div>
        <motion.div
          className="mt-4 md:w-1/2 md:ml-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariant}
          transition={{ duration: 0.5 }}
        >
          <Image src="/assets/antan.jpg" alt="About Us" width={600} height={800} />
        </motion.div>
      </div>
    </div>
  );
}
