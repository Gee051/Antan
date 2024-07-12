"use client"

import Link from 'next/link';
import Image from 'next/image';
import { FiTwitter, FiInstagram } from 'react-icons/fi';
import { FaTiktok } from "react-icons/fa";
import { useState } from 'react';

const Footer = () => {

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const isSuccessful = message.includes('Thanks for subscribing');

  
  const messageClass = isSuccessful
    ? 'text-green-500 font-bold text-center pt-2 text-lg px-3'
    : 'text-red-600 font-semibold text-center pt-2 text-lg px-3';

  const handleSubscribe = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      setMessage('Thanks for subscribing');
      setEmail(''); 
    } else {
      setMessage('Invalid email');
    }
  };

  return (
    <footer className="bg-[#0b1a0bf3] text-white">
      <div className="max-w-screen-2xl mx-auto py-8 px-4 sm:px-8 md:flex md:justify-between md:items-center z-30">
        <div className="mb-4 md:w-1/2 lg:w-1/3">
          <Image src="/assets/Alogo.png" alt="Niggiwears" width={200} height={50} className='h-full' />
          <p>
          Everyday is a new day for us and we work really hard to satisfy our customers everywhere.
          </p>
        </div>
        <div className="mb-4 md:w-1/2 lg:w-2/3 md:flex md:flex-col md:items-end">
          <div className="p-3">
            <p className="font-bold flex items-center justify-end">NEWSLETTER</p>
            <p className='text-right flex items-center justify-end'>Subscribe to our newsletter to get updates on our latest news!</p>
          </div>
          <div className="flex items-center gap-2 justify-end">
            <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-700 text-white px-4 py-2 rounded-lg input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button className=" px-4 py-2 bg-green-500 text-white rounded-lg hover:scale-105 hover:transition cursor-pointer " onClick={handleSubscribe}>Subscribe</button>
          </div>
          {message && <div className={messageClass}>{message}</div>}
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto py-8 px-4 sm:px-8 md:flex ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <p className='mb-2'>HEAD OFFICE : Sinoki House (2nd Floor), Plot 770Samuel Ademulegun Avenue, Cadastral Zone, Central Business District, Abuja-FCT.</p>
            <p className="text-base mb-2">Email: info.apn@antanproducing.com</p>
            <p className="text-base">Have a Question Call Now : 01-2794300</p>
          </div>
          <div className="mb-4 md:flex md:flex-col md:items-center">
            <div className='border-b-2 mb-2 md:flex md:flex-col md:items-center'>
            <h3 className='text-xl font-bold mb-2'> Recent Post</h3>
            <ul>
            <li className='text-base hover:text-green-500 underline mb-2'>
              <Link href='/'> The Nigerian National Petroleum Company (NNPC) Limited takes over the assets of Addax Petroleum Development (Nigeria) Limited -- 2023</Link>
            </li>
            <li className='text-base hover:text-green-500 underline mb-2'>
              <Link href='/'> Antan Producing appoints Engr. Sagiru A. Jajere FNSE. as new Managing Director -- 2023</Link>
            </li>
            </ul>
            </div>
            <h3 className="text-xl font-bold mb-2">Working Hours</h3>
         <p>Monday - Friday  7:30am - 4:30pm</p>
          
          </div>
          <div className="mb-4 md:flex md:flex-col md:items-center">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li className='hover:scale-105 hover:transition cursor-pointer hover:text-green-500 hover:underline'><Link href="/">HOME</Link></li>
              <li  className='hover:scale-105 hover:transition cursor-pointer hover:text-green-500 hover:underline' ><Link  href="/about">ABOUT US</Link></li>
              <li  className='hover:scale-105 hover:transition cursor-pointer hover:text-green-500 hover:underline'><Link href="/antan">THE ANTAN</Link></li>
              <li  className='hover:scale-105 hover:transition cursor-pointer hover:text-green-500 hover:underline'><Link href="/dept">DEPARTMENTS</Link></li>
              <li  className='hover:scale-105 hover:transition cursor-pointer hover:text-green-500 hover:underline'><Link href="/news">NEWS</Link></li>
              <li  className='hover:scale-105 hover:transition cursor-pointer hover:text-green-500 hover:underline'><Link href="/contact">CONTACT US</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-[#0b1a0b] py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} ANTAN PRODUCING LIMITED Created by OTUAGHA GRACE..All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
