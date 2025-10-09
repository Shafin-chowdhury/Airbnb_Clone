
import React from "react";
import { FaHeart } from "react-icons/fa";

const Card = ({ image, name, price, rating }) => {
  return (
    <div className="rounded-xl overflow-hidden hover:shadow-md transition bg-white w-full">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="w-full h-45 object-cover rounded-2xl"
        />
        <div className="absolute top-4 left-2 flex items-center justify-between w-[90%]">
          <span className="bg-white text-xs font-semibold px-2 py-1 rounded-full shadow">
            Guest favorite
          </span>
          <button className=" hover:bg-gray-100">
            <FaHeart className="w-5 h-5 text-gray-700 stroke-white stroke-[30px]" />
          </button>
        </div>
      </div>
      <div className="p-3 text-sm">
        <h3 className="font-medium text-gray-800">{name}</h3>
        <div className="flex justify-between items-center text-gray-600">
          <p>{price}</p>
          <p>★ {rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;



