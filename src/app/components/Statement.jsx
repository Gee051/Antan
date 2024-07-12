"use client"
import React, { useEffect } from 'react'
import { BiWorld } from "react-icons/bi";
import { CiBookmarkCheck } from "react-icons/ci";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from 'next/image';

export default function Statement() {
  const missionControls = useAnimation();
  const visionControls = useAnimation();
  const { ref: missionRef, inView: missionInView } = useInView({ triggerOnce: true });
  const { ref: visionRef, inView: visionInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (missionInView) {
      missionControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      });
    }
  }, [missionControls, missionInView]);

  useEffect(() => {
    if (visionInView) {
      visionControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      });
    }
  }, [visionControls, visionInView]);

  return (
    <main className="items-center justify-center mx-3 md:mx-6 py-5">
      <motion.div
        ref={missionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={missionControls}
        className="flex flex-col md:flex-row h-auto p-3 m-3 rounded-xl w-full md:w-auto bg-white border-b-2 border-green-500"
      >
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={missionControls}
          className="w-full md:w-1/2 p-3"
        >
          <Image 
            src="/assets/miss.png"
            alt='Antan Mission'
            width={300}
            height={200}
            className="rounded-lg object-contain pl-6"
          />
        </motion.div>
        <div className="flex flex-col justify-center w-full md:w-1/2 p-3">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={missionControls}
            className="font-serif font-bold flex p-1 hover:underline underline-offset-2"
          >
            <BiWorld className="w-6 m-1  hover:scale-105 transition-transform rounded-full border border-green-700" />
            MISSION STATEMENT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={missionControls}
            className="text-2xl pt-2  font-extrabold "
          >
            TO CREATE SUSTAINABLE ECONOMIC AND SOCIAL VALUE FOR OUR STAKEHOLDERS THROUGH EFFICIENT EXPLORATION AND PRODUCTION OF <span className='text-green-500'>OIL AND GAS RESOURCES</span>.
          </motion.p>
        </div>
      </motion.div>
      <motion.div
        ref={visionRef}
        initial={{ opacity: 0, y: 50 }}
        animate={visionControls}
        className="flex flex-col md:flex-row h-auto p-3 m-3 rounded-xl w-full md:w-auto "
      >
        <div className="flex flex-col justify-center w-full md:w-1/2 p-3">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={visionControls}
            className="font-serif font-bold flex items-center hover:underline underline-offset-2 "
          >
            <CiBookmarkCheck className="w-6 mr-2 hover:scale-105 transition-transform rounded-full border border-green-700  " />
            VISION STATEMENT
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={visionControls}
            className="text-2xl pt-2 font-extrabold"
          >
            TO BECOME AFRICA`S LEADING INDIGENOUS <span className='text-green-500'>OIL AND GAS COMPANY</span> DRIVEN BY STRONG COMMITMENT TO EXCELLENCE.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={visionControls}
          className="w-full md:w-1/2 p-3 pr-5"
        >
          <Image 
            src="/assets/vision.png"
            alt=' Antan Vision'
            width={300}
            height={200}
            className="rounded-lg object-contain pl-11"
          />
        </motion.div>
      </motion.div>
    </main>
  );
}
