import React from 'react';
import { LuAlignCenter } from "react-icons/lu";
import { FaUserCheck } from "react-icons/fa";
import img1 from '../assets/imgs/1.png'

const Navbar = () => {
  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-5">
      {/* Top navbar */}
      <div className="flex flex-wrap justify-between items-center border-b border-gray-300 py-3">
        {/* Logo and title */}
        <div className="flex items-center space-x-2 mb-2 sm:mb-0">
          <span className="text-white text-xl"><LuAlignCenter /></span>
          <h3 className="text-white text-lg font-semibold">Mzigo Track</h3>
        </div>

        {/* Nav links */}
        <ul className="flex flex-wrap items-center space-x-4 text-white text-sm">
          <li><FaUserCheck /></li>
          <li className="hover:underline cursor-pointer">Register ..coming soon</li>
          <li className="hover:underline cursor-pointer">TrackNow..coming soon</li>
        </ul>
      </div>

      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between min-h-[60vh] py-10">
        <div className="text-white max-w-xl text-center lg:text-left space-y-4">
          <div>
            <h1 className="text-3xl sm:text-7xl font-bold">
                We're Always Available for Your Parcels
            </h1>
            <p className="text-sm sm:text-base text-gray-300">
                Track and manage your packages with ease anytime, anywhere.
            </p>
          </div>
          <div className='flex space-x-5'>
            <button className='bg-white text-black rounded-lg py-3 px-3'>Contact Us</button>
            <button className='text-white rounded-lg py-3 px-3 border border-white cursor-auto'>Read More</button>
          </div>
        </div>
        <div className="w-full max-w-max mb-8 lg:mb-0">
          <img
            src={img1}
            alt="Parcel Tracking"
            className="w-full h-auto "
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
