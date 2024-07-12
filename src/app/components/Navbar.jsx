"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import navbarList from "./List/navbarList";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  const [sidenav, setSidenav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 120) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    let ResponsiveMenu = () => {
      if (window.innerWidth < 768) {
        setShowMenu(false);
      } else {
        setShowMenu(true);
        setSidenav(false);
      }
    };
    ResponsiveMenu();
    window.addEventListener("resize", ResponsiveMenu);
  }, []);

  return (
    <main
      className={`w-full h-20 border-b-[1px]  sticky top-0 border-b-gray-300 gap-2 px-4  shadow-lg z-50 ${
        scrolling ? "bg-white text-black" : "bg-[#0b1a0bde] text-white"
      }`}
    >
      <nav className="h-full px-4 max-w-container mx-auto relative">
        <div className="flex items-center justify-between h-full">
          <Link href="/">
            <div>
              <Image
                className=" object-cover"
                src="/assets/Alogo.png"
                width={120}
                height={90}
                alt="Antan"
              />
            </div>
          </Link>
          <div>
            {showMenu && (
              <motion.ul
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex  w-auto z-50 p-0 gap-2"
              >
        <ul className="flex space-x-6">
  {navbarList.map(({ _id, title, link }) => (
    <Link
      key={_id}
      href={link}
      className="font-normal font-serif text-base hover:font-bold hover:text-green-500 border-green-500"
    >
      <li className="hover-underline-animation">{title}</li>
    </Link>
  ))}
</ul>

              </motion.ul>
            )}
            <FiMenu
              onClick={() => setSidenav(!sidenav)}
              className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4 hover:text-green-500"
            />
            {sidenav && (
              <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                <motion.div
                  initial={{ y: -300, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="w-[80%] h-full relative"
                >
                  <div className="w-full h-full bg-primeColor p-6">
                    <Link href="/" onClick={() => setSidenav(false)}>
                      <Image
                        className="object-cover"
                        width={180}
                        height={70}
                        src="/assets/Alogo.png"
                        alt="Antan"
                      />
                    </Link>
                    <ul className="text-gray-200 flex flex-col gap-2">
                      {navbarList.map(({ _id, title, link }) => (
                        <li
                          className="font-normal hover:font-bold font-serif items-center text-2xl text-gray-300 hover:underline underline-offset-[4px] decoration-[1px] hover:text-green-500 md:border-r-[2px] border-green-500 hoverEffect last:border-r-0"
                          key={_id}
                        >
                          <Link href={link} onClick={() => setSidenav(false)}>
                            {title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span
                    onClick={() => setSidenav(false)}
                    className="w-8 h-8 border-[1px] border-gray-300 absolute top-24 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                  >
                    <MdClose />
                  </span>
                </motion.div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;
