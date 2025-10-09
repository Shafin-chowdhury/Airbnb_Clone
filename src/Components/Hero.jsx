import React from "react";
import { IoMdSearch, IoMdHeartEmpty } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="fixed bottom-0 left-0  w-full bg-white border-t border-gray-200 shadow-md md:hidden z-50">
      <div className="flex justify-center items-center gap-16 py-2">
       
        <button className="flex flex-col items-center text-red-800  hover:text-[#FF385C] ">
          <IoMdSearch className="w-6 h-6 mb-1  " />
          <span className="text-xs">Explore</span>
        </button>

       
        <button className="flex flex-col items-center text-gray-600 hover:text-[#FF385C]">
          <IoMdHeartEmpty className="w-6 h-6 mb-1" />
          <span className="text-xs ">Wishlist</span>
        </button>

      
        <button className="flex flex-col items-center text-gray-600 hover:text-[#FF385C]">
          <FaRegUserCircle className="w-6 h-6 mb-1" />
          <span className="text-xs">Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Hero;
