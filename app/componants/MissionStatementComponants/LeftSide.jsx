/* eslint-disable react/no-unescaped-entities */
'use client'
import React from "react";
import Slider from "./Slider";
import "toastr/build/toastr.min.css";

const LeftSide = () => {

  return (
    <div className="w-[100%] p-2 md:h-screen rounded ">
   
      <div className="p-2 w-full md:py-8 md:my-8">
      <Slider/>
      </div>

  
      

      

     
    </div>
  );
};

export default LeftSide;
