import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";

function Card({ data, SurpriseHandler, LeftHandler, RightHandler }) {
  return (
    <div className="bg-white w-[30rem] h-[23rem] rounded-md px-7 pt-12 pb-4 flex flex-col justify-start items-center relative z-10 ">
      <img
        className="absolute w-28 h-28 rounded-full top-[-50px] left-8 z[5]"
        src={data.image}
        alt=""
      />
      <div className="bg-sky-400 w-[112px] h-[112px] rounded-full absolute top-[-55px] left-10 -z-10"></div>
      <h6 className="font-bold text-lg">{data.name}</h6>
      <h6 className=" uppercase  text-xs  font-semibold text-sky-500 opacity-50">
        {data.job}
      </h6>
      <FaQuoteLeft className="text-sky-400 text-sm mt-5 mb-3" />
      <p className=" text-xs text-center font-medium opacity-80 ">{data.text}</p>
      <FaQuoteRight className="text-sky-400 text-sm mt-3 mb-10" />

      <div className="flex gap-3">
        <IoIosArrowBack
          onClick={LeftHandler}
          className="text-sky-400 text-xl cursor-pointer"
        />
        <IoIosArrowForward
          onClick={RightHandler}
          className="text-sky-400 text-xl cursor-pointer"
        />
      </div>
      <button
        onClick={SurpriseHandler}
        className="px-6 py-1.5 rounded-md mt-4 bg-sky-400 text-white font-semibold text-sm"
      >
        Surprise Me
      </button>
    </div>
  );
}

export default Card;
