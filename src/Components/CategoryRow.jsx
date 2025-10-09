import React, { useRef } from "react";
import Card from "./Card";

const CategoryRow = ({ title, listings }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === "left") {
      current.scrollBy({ left: -500, behavior: "smooth" });
    } else {
      current.scrollBy({ left: 500, behavior: "smooth" });
    }
  };

  return (
    <div className="mb-12 ml-4 md:ml-10">
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg md:text-xl font-semibold flex items-center">
          {title}
          <button className="ml-1 text-base md:text-2xl">›</button>
        </h2>

      
        <div className="hidden md:flex space-x-2">
          <button
            onClick={() => scroll("left")}
            className="text-gray-800 hover:text-gray-600 text-2xl bg-gray-100 w-9 h-9 rounded-full flex justify-center items-center shadow-sm"
          >
            ‹
          </button>
          <button
            onClick={() => scroll("right")}
            className="text-gray-800 hover:text-gray-600 text-2xl bg-gray-100 w-9 h-9 rounded-full flex justify-center items-center shadow-sm"
          >
            ›
          </button>
        </div>
      </div>

 
      <div
  ref={scrollRef}
  className="flex overflow-x-auto space-x-4 pr-4 md:pr-10 hide-scrollbar"
>
        {listings.map((item) => (
          <div
            key={item.id}
            className="flex-shrink-0 w-[50%] sm:w-[80%] md:w-[185px]"
          >
            <Card {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryRow;
