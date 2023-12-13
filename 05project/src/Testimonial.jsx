import React from "react";
import Card from "./Card";
import Apidata from "./ApiData";
import { useState } from "react";

function Testimonial() {
  const [Data, setData] = useState(Apidata);
  const [index, setIndex] = useState(0);

  function SurpriseHandler() {
    let randomindex = Math.floor(Math.random() * Data.length);
    setIndex(randomindex);
  }
  function LeftHandler() {
    if (index - 1 < 0) {
      setIndex(Data.length - 1);
    } else {
      setIndex(index - 1);
    }
  }
  function RightHandler() {
    if (index + 1 >= Data.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }
  console.log(index);
  console.log(Data[index]);
  return (
    <div className="w-full h-full flex flex-col gap-20">
      <Card
        data={Data[index]}
        SurpriseHandler={SurpriseHandler}
        LeftHandler={LeftHandler}
        RightHandler={RightHandler}
      />
    </div>
  );
}

export default Testimonial;
