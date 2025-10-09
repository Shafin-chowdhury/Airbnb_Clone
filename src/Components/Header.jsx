import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.png";
import House from "../assets/Icons/house.png";
import Ballon from "../assets/Icons/Baloon.png";
import Bell from "../assets/Icons/bell.png";
import { Globe, Menu, Search, X, HelpCircle } from "lucide-react"; 
import Person from "../assets/Person.png";

const Header = () => {
  const [shrink, setShrink] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null); 

  useEffect(() => {
    const handleScroll = () => setShrink(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-gray-100 transition-all duration-500 ease-in-out shadow-sm flex flex-col items-center ${
        shrink ? "h-[85px]" : "h-[150px]"
      }`}
    >
   
      <div
        className={`hidden md:flex items-center justify-between w-full px-8 transition-all duration-500 ${
          shrink ? "py-2" : "py-6"
        }`}
      >
       
        <div className="flex items-center space-x-1 cursor-pointer">
          <img src={Logo} alt="Airbnb Logo" className="h-9" />
          <span className="text-2xl font-medium text-[#FF385C]">airbnb</span>
        </div>

      
        <div className="flex items-center space-x-12 font-medium text-gray-600">
          <button className="flex items-center space-x-2 border-b-2 border-black pb-1 cursor-pointer hover:text-black transition">
            <img src={House} alt="Homes" className="h-7" />
            <p className="text-black font-semibold">Homes</p>
          </button>
          <button className="relative flex items-center space-x-2 cursor-pointer hover:text-black transition">
            <img src={Ballon} alt="Experiences" className="h-8" />
            <span className="absolute -top-2 left-6 bg-[#3D426B] text-white text-[10px] font-semibold rounded-full px-1.5 py-[1px]">
              NEW
            </span>
            <p>Experiences</p>
          </button>
          <button className="relative flex items-center space-x-2 cursor-pointer hover:text-black transition">
            <img src={Bell} alt="Services" className="h-9" />
            <span className="absolute -top-2 left-6 bg-[#3D426B] text-white text-[10px] font-semibold rounded-full px-1.5 py-[1px]">
              NEW
            </span>
            <p>Services</p>
          </button>
        </div>

        
        <div className="flex items-center space-x-4 text-black">
          <button className="font-medium cursor-pointer">Become a host</button>
          <button className="flex items-center rounded-full p-2 bg-gray-200 hover:shadow-md cursor-pointer">
            <Globe size={17} />
          </button>

          {/* Menu Icon */}
          <div className="relative" ref={menuRef}>
            <button
              className="flex items-center rounded-full p-2 bg-gray-200 hover:shadow-md cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>

            {/* Dropdown */}
            {menuOpen && (
              <div className="absolute top-14 right-0 w-[260px] bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden animate-fadeIn">
                {/* Help Center */}
                <div className="px-5 py-3 border-b border-gray-200 flex items-center space-x-3 cursor-pointer hover:bg-gray-50">
                  <HelpCircle size={18} className="text-gray-600" />
                  <span className="font-medium text-gray-700">Help Center</span>
                </div>

                {/* Become a host */}
                <div className="px-5 py-3 hover:bg-gray-50 cursor-pointer border-b border-gray-200">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-gray-800">Become a host</p>
                      <p className="text-gray-500 text-sm">
                        It's easy to start hosting and earn extra income.
                      </p>
                    </div>
                    <img
                      src={Person}
                      alt="Host"
                      className="w-10 h-10   object-cover "
                    />
                  </div>
                </div>

              
                <div className="px-5 py-2 hover:bg-gray-50 cursor-pointer ">
                  Refer a Host
                </div>
                <div className="px-5 py-2 hover:bg-gray-50 cursor-pointer ">
                  Find a co-host
                </div>
                <div className="px-5 py-2 hover:bg-gray-50 cursor-pointer border-b border-gray-200 ">
                  Gift cards
                </div>

                
                <div className="px-5 py-3 hover:bg-gray-50  cursor-pointer">
                  Log in or sign up
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={`hidden md:flex md:w-[60%] lg:w-[60%] justify-center px-6 transition-all duration-500 ease-in-out ${
          shrink
            ? "opacity-0 -translate-y-6 h-0 pointer-events-none"
            : "opacity-100 translate-y-0 h-auto"
        }`}
      >
        <div className="flex items-center w-full bg-white border border-gray-300 rounded-full shadow-md overflow-hidden mb-3">
          <div className="flex-1 py-2 px-6 hover:bg-gray-100 cursor-pointer">
            <p className="text-xs font-semibold">Where</p>
            <input
              type="text"
              placeholder="Search destinations"
              className="w-full text-sm text-gray-700 outline-none bg-transparent"
            />
          </div>
          <div className="flex-1 py-2 px-6 hover:bg-gray-100 cursor-pointer border-l border-gray-400">
            <p className="text-xs font-semibold">Check in</p>
            <p className="text-sm text-gray-700">Add dates</p>
          </div>
          <div className="flex-1 py-2 px-4 hover:bg-gray-100 cursor-pointer border-l">
            <p className="text-xs font-semibold">Check out</p>
            <p className="text-sm text-gray-700">Add dates</p>
          </div>
          <div className="flex-1 py-2 px-2 hover:bg-gray-100 cursor-pointer border-l flex justify-between items-center">
            <div>
              <p className="text-xs font-semibold">Who</p>
              <p className="text-sm text-gray-700">Add guests</p>
            </div>
            <button className="bg-[#FF385C] text-white p-3 rounded-full mr-1">
              <Search size={22} />
            </button>
          </div>
        </div>
      </div>

     
      <div className="md:hidden w-full flex flex-col items-center justify-between flex-grow px-6 pt-3 pb-2">
        <button className="flex items-center justify-center w-full bg-white border border-gray-300 rounded-full shadow-md px-4 py-2 mb-3 hover:shadow-lg transition">
          <Search size={18} className="text-gray-500 mr-2" />
          <span className="text-gray-600 text-sm font-medium">
            Start your search
          </span>
        </button>

        <div
          className={`flex justify-around items-end w-full font-medium text-gray-700 text-sm transition-all duration-500 absolute bottom-1 left-0 px-6 ${
            shrink ? "pb-1" : "pb-2"
          }`}
        >
          <button className="flex flex-col items-center space-y-1 hover:text-[#FF385C] transition">
            {!shrink && <img src={House} alt="Homes" className="h-5" />}
            <span className={`${shrink ? "text-[15px]" : "text-sm font-medium"}`}>
              Homes
            </span>
          </button>

          <button className="flex flex-col items-center space-y-1 relative hover:text-[#FF385C] transition">
            {!shrink && (
              <>
                <img src={Ballon} alt="Experiences" className="h-6" />
                <span className="absolute -top-1 left-8 bg-[#3D426B] text-white text-[8px] font-semibold rounded-full px-1 py-[1px]">
                  NEW
                </span>
              </>
            )}
            <span className={`${shrink ? "text-[15px]" : "text-sm font-medium"}`}>
              Experiences
            </span>
          </button>

          <button className="flex flex-col items-center space-y-1 relative hover:text-[#FF385C] transition">
            {!shrink && (
              <>
                <img src={Bell} alt="Services" className="h-6" />
                <span className="absolute -top-1 left-8 bg-[#3D426B] text-white text-[8px] font-semibold rounded-full px-1 py-[1px]">
                  NEW
                </span>
              </>
            )}
            <span className={`${shrink ? "text-[15px]" : "text-sm font-medium"}`}>
              Services
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;