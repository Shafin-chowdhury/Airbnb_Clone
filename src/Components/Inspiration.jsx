
import React, { useState } from "react";

const Inspirational = () => {
  const [activeTab, setActiveTab] = useState("travel");

  const travelTips = [
    {
      title: "Family travel hub",
      subtitle: "Tips and inspiration",
    },
    {
      title: "Family budget travel",
      subtitle: "Get there for less",
    },
    {
      title: "Vacation ideas for any budget",
      subtitle: "Make it special without making it spendy",
    },
    {
      title: "Travel Europe on a budget",
      subtitle: "How to take the kids to Europe for less",
    },
    {
      title: "Outdoor adventure",
      subtitle: "Explore nature with the family",
    },
    {
      title: "Bucket list national parks",
      subtitle: "Must-see parks for family travel",
    },
    {
      title: "Kid-friendly state parks",
      subtitle: "Check out these family-friendly hikes",
    },
  ];

  const airbnbFriendly = [
    {
      title: "Airbnb your home",
      subtitle: "Earn extra income and unlock new opportunities",
    },
    {
      title: "Airbnb-friendly apartments",
      subtitle: "See buildings where hosting is allowed",
    },
    {
      title: "Join a free Hosting class",
      subtitle: "Learn how to get started with hosting",
    },
    {
      title: "Hosting responsibly",
      subtitle: "Be a considerate and informed host",
    },
  ];

  const dataToShow = activeTab === "travel" ? travelTips : airbnbFriendly;

  return (
    <div className="py-4  px-10  bg-gray-100 border-t border-gray-200">
    
      <h2 className="text-2xl font-semibold mb-6">
        Inspiration for future getaways
      </h2>

     
      <div className="flex gap-3 mb-8 border-b text-gray-400">
        <button
          onClick={() => setActiveTab("travel")}
          className={`px-4 py-2 text-sm font-medium transition ${
            activeTab === "travel"
              ? "border-black text-black border-b-2"
              : "border-transparent text-gray-600"
          }`}
        >
          Travel tips & inspiration
        </button>
        <button
          onClick={() => setActiveTab("apartments")}
          className={`px-4 py-2 text-sm font-medium transition ${
            activeTab === "apartments"
              ? "border-black text-black border-b-2"
              : "border-transparent text-gray-600"
          }`}
        >
          Airbnb-friendly apartments
        </button>
      </div>

   
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-y-8">
        {dataToShow.map((item, index) => (
          <div key={index}>
            <h3 className="font-semibold text-sm text-gray-800">{item.title}</h3>
            <p className="text-gray-500 text-xs">{item.subtitle}</p>
          </div>
        ))}
      </div>

  
      <div className=" my-20"></div>

     
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 ">
     
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Support</h3>
          <ul className="space-y-4 text-black text-sm">
            <li>Help Center</li>
            <li>Get help with a safety issue</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            <li>Cancellation options</li>
            <li>Report neighborhood concern</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Hosting</h3>
          <ul className="space-y-4 text-black text-sm">
            <li>Airbnb your home</li>
            <li>Airbnb your experience</li>
            <li>Airbnb your service</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
            <li>Hosting responsibly</li>
            <li>Airbnb-friendly apartments</li>
            <li>Join a free Hosting class</li>
            <li>Find a co-host</li>
          </ul>
        </div>

     
        <div>
          <h3 className="font-semibold text-gray-800 mb-3">Airbnb</h3>
          <ul className="space-y-4 text-black text-sm">
            <li>2025 Summer Release</li>
            <li>Newsroom</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Gift cards</li>
            <li>Airbnb.org emergency stays</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Inspirational;



