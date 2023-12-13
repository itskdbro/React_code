import React, { useState } from "react";

function Card({ id, name, info, price, image, removeCard }) {
  const [readmore, setReadmore] = useState(false);
  const [desc, setDesc] = useState(true);
  const [cardHeight, setcardHeight] = useState(true);

  function readmoreHandler() {
    setReadmore(!readmore);
    setcardHeight(!cardHeight);
    setDesc(!desc);
  }

  return (
    <div
      className={` w-[280px] ${
        cardHeight ? `h-[500px]` : `h-full`
      } bg-white rounded-lg px-2 m-7 mt-5 border-black drop-shadow-lg`}
    >
      <img src={image} alt="" className="py-3 rounded-lg w-full h-[250px]" />
      <p className="text-green-600 px-1 font-bold">{String(price)}</p>
      <p className="px-1 font-extrabold text-lg">{name}</p>
      <p className="px-1 text-sm">
        {desc ? `${info.substring(0, 180)}...` : `${info.substring(0)}`}
        <span
          className="text-blue-500 font-semibold cursor-pointer"
          onClick={readmoreHandler}
        >
          {readmore ? `Show less` : `Read more`}
        </span>
      </p>
      <button
        className="w-[200px] ml-8 mt-5 mb-10 rounded-lg p-2 bg-red-200 text-sm font-bold border-red-600 hover:bg-red-600 hover:text-white"
        onClick={() => removeCard(id)}
      >
        Not interested
      </button>
    </div>
  );
}

export default Card;
