// src/components/CardGrid.jsx
import React from "react";
import Card from "./Card";

const CardGrid = ({ listings }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 ">
      {listings.map((item) => (
        <Card key={item.id} {...item} />
      ))}
    </div>
  );
};

export default CardGrid;
