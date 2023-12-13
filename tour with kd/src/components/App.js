import React, { useState } from "react";
import Tours from "./Tours";
import data from "./data";

const App = () => {
  const [tours, settours] = useState(data);

  function removeCard(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    settours(newTours);
  }

  if (tours.length === 0) {
    return (
      <div className="w-full max-w-5xl mx-auto h-screen flex flex-col justify-center items-center gap-3">
        <h1 className="text-[22px] font-bold">No Tours Left</h1>
        <button
          className="w-[150px] bg-black text-white p-2 rounded-lg text-lg"
          onClick={() => settours(data)}
        >
          Refresh
        </button>
      </div>
    );
  }

  
  return (
    <div className="w-full max-w-5xl mx-auto h-screen flex flex-col justify-start items-center">
      <h1 className="text-4xl mt-5 rounded-[10px] bg-black text-white p-3 px-10 w-50 ">
        Tour with KD
      </h1>
      <div>
        <Tours tours={tours} removeCard={removeCard} />
      </div>
    </div>
  );
};

export default App;
