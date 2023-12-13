import React from "react";
import Card from "./Card";

function Tours({ tours, removeCard }) {
  return (
    <div className="w-full  flex flex-wrap pl-2 mt-5 ">
      {tours.map((tour) => {
        return <Card key={tour.id} {...tour} removeCard={removeCard} />;
      })}
    </div>
  );
}

export default Tours;
