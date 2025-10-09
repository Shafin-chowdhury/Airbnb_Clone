import React from "react";
import { Globe } from "lucide-react";
import { FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-6 px-6 text-gray-700 border-t border-gray-200 md:pb-6 pb-20">
      <div className="hidden md:flex border-t-gray-600 pt-6 text-sm font-semibold justify-between items-center text-gray-900">
        <p>
          © 2025 Airbnb, Inc.
          <a href="#"> . Terms</a>
          <a href="#"> . Sitemap</a>
          <a href="#"> . Privacy</a>
          <a href="#"> . Your Privacy Choices.</a>
        </p>

        <div className="flex gap-4 text-sm items-center">
          <div className="flex items-center space-x-2 hover:shadow-md cursor-pointer">
            <Globe size={17} />
            <span>English (US)</span>
          </div>
          <a href="#">$ USD</a>
          <FaFacebook className="cursor-pointer hover:text-[#1877F2]" />
          <FaXTwitter className="cursor-pointer hover:text-black" />
          <FaInstagram className="cursor-pointer hover:text-[#E4405F]" />
        </div>
      </div>

 
      <div className="flex flex-col  items-center text-gray-900 text-sm font-medium md:hidden space-y-3 mt-2">
        <div className="flex items-center justify-center gap-4 ">
          <div className="flex items-center space-x-1">
            <Globe size={17} />
            <span>English (US)</span>
          </div>
          <span>$ USD</span>
        </div>

     
        <div className="flex items-center justify-center gap-6">
          <FaFacebook className="cursor-pointer hover:text-[#1877F2]" />
          <FaXTwitter className="cursor-pointer hover:text-black" />
          <FaInstagram className="cursor-pointer hover:text-[#E4405F]" />
        </div>

       
        <p className="text-xs">© 2025 Airbnb, Inc.</p>

    
        <div className="flex flex-wrap justify-center gap-2 text-xs">
          <a href="#" className="hover:underline">Terms</a>
          <span>·</span>
          <a href="#" className="hover:underline">Sitemap</a>
          <span>·</span>
          <a href="#" className="hover:underline">Privacy</a>
          <span>·</span>
          <a href="#" className="hover:underline">Your Privacy Choices</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
