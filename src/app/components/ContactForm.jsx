import React from 'react';

const ContactForm = () => {
  return (
    <div className="max-w-4xl mx-auto py-8 px-4">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-gray-700">Your Name</label>
          <input type="text" id="name" placeholder='Enter your name' name="name" className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-bold text-gray-700">Subject</label>
          <input type="text" id="subject" name="subject" placeholder='Reason' className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-bold text-gray-700">Phone Number</label>
          <input type="text" id="phone" name="phone" placeholder='Enter your phone number' className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
          <input type="email" id="email" name="email" placeholder='Enter your email' className="mt-1 p-2 w-full border border-gray-300 rounded-md" />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="message" className="block text-xs md:text-sm font-bold text-gray-700">Message</label>
        <textarea id="message" name="message" rows="4" className="mt-1 p-2 w-full border border-gray-300 rounded-md"></textarea>
      </div>

      <button className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors duration-300">Submit</button>
    </div>
  );
};

export default ContactForm;
