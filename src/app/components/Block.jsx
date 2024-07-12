"use client"
import React, { useEffect } from 'react'
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Block() {
  const blockControls = useAnimation();
  const oml123Controls = useAnimation();
  const oml126Controls = useAnimation();
  const oml137Controls = useAnimation();
  const oml124Controls = useAnimation();

  const { ref: blockRef, inView: blockInView } = useInView({ triggerOnce: true });
  const { ref: oml123Ref, inView: oml123InView } = useInView({ triggerOnce: true });
  const { ref: oml126Ref, inView: oml126InView } = useInView({ triggerOnce: true });
  const { ref: oml137Ref, inView: oml137InView } = useInView({ triggerOnce: true });
  const { ref: oml124Ref, inView: oml124InView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (blockInView) {
      blockControls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      });
    }
  }, [blockControls, blockInView]);

  useEffect(() => {
    if (oml123InView) {
      oml123Controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      });
    }
  }, [oml123Controls, oml123InView]);

  useEffect(() => {
    if (oml126InView) {
      oml126Controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      });
    }
  }, [oml126Controls, oml126InView]);

  useEffect(() => {
    if (oml137InView) {
      oml137Controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      });
    }
  }, [oml137Controls, oml137InView]);

  useEffect(() => {
    if (oml124InView) {
      oml124Controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6 }
      });
    }
  }, [oml124Controls, oml124InView]);

  return (
    <main className='m-3 p-4 bg-gray-50 rounded-xl'>
      <motion.div
        ref={blockRef}
        initial={{ opacity: 0, y: 50 }}
        animate={blockControls}
        className="flex flex-col"
      >
        <h1 className='font-bold flex justify-center pt-3 tracking-wider text-base md:text-4xl'>
          OUR <span className='text-green-500 underline tracking-wide '> BLOCK (ASSETS)</span>
        </h1>
        <p className='pt-5 text-red-500 font-bold flex justify-center text-center'>
          The 4 blocks consist of 3 offshore assets (OML-123, OML-126 and OML-137) and 1 onshore asset (OML-124)
        </p>
      </motion.div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 pt-3'>
        <motion.div
          ref={oml123Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={oml123Controls}
          className='relative md:h-64 h-96 flex justify-center items-center text-center p-3 m-3 rounded-2xl bg-green-100 '
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: 'url(/assets/antan.jpg)', opacity: 0.1 }}
          ></div>
          <div className="relative z-10 text-black font-bold">
            <h1 className='pt-2 text-center text-lg'>OML-123</h1>
            <p className='pt-4 text-sm md:text-base pb-2'>
              OML-123 is situated at approx. 60km south of Calabar, covering an area of about 367km square and water depth of approx. 40m. APL operates Antan Terminal at OML-123 with Floating Production Storage and Offloading (FPSO) NUIMS ANTAN (formerly FPSO ADOON). FPSO NUIMS ANTAN has a processing capacity of 60-65bpd and storage capacity of 1.7MMBbls and the offloading system is via a Calm buoy.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={oml126Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={oml126Controls}
          className='relative md:h-64 h-96 flex items-center justify-center text-center p-3 m-3 rounded-2xl bg-green-100 '
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: 'url(/assets/antan4.jpeg)', opacity: 0.3 }}
          ></div>
          <div className="relative z-10 text-black font-bold">
            <h1 className='pt-2 text-center text-lg'>OML-126</h1>
            <p className='pt-4 text-sm md:text-base pb-3 md:pb-0'>
              OML-126 is situated approximately. 30km south of Rivers State, Southern Nigeria, covering an area greater than 300km square and water depth of about 145m. APL operates Okwori Terminal at OML-126 with Floating Production Storage and Offloading (FPSO) Sendje Berge. FPSO Sendje Berge has a processing capacity of 60-70bpd and storage capacity of 1.75MMBbls and the offloading system is via Tandem mooring.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={oml137Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={oml137Controls}
          className='relative md:h-64 h-96 flex items-center justify-center text-center p-3 m-3 rounded-2xl bg-green-100'
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: 'url(/assets/an.jpg)', opacity: 0.3 }}
          ></div>
          <div className="relative z-10 text-black font-bold">
            <h1 className='pt-2 text-center text-lg'>OML-137</h1>
            <p className='pt-4 text-sm md:text-base pb-2'>
              OML-137 is an offshore block located 90km south of Port Harcourt at a water depth ranging from 75m to 190m. The block has 2 major fields of proven hydrocarbon reserve at Ofrima and Udele. There is high gas potential of commercial quantity in this field. The block is not yet developed but it will be game changer for APL when fully harnessed.
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={oml124Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={oml124Controls}
          className='relative md:h-64 h-96 flex items-center justify-center text-center p-3 m-3 rounded-2xl bg-green-100'
        >
          <div
            className="absolute inset-0 bg-cover bg-center rounded-2xl"
            style={{ backgroundImage: 'url(/assets/antan1.jpg)', opacity: 0.2 }}
          ></div>
          <div className="relative z-10 text-black font-bold">
            <h1 className='pt-2 text-center text-lg'>OML-124</h1>
            <p className='pt-4 text-sm md:text-base pb-2'>
              OML-124 is an onshore location situated approx. 28km north of Owerri, Imo State, covering an area of about 300km square. APL has a Flow Station in Izombe with crude processing capacity of 31,000bpd. Processed export quality crude is transported via a 10” main oil line (MOL) to NAOC operated Flow Station at Ebocha and export terminal at Brass.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
