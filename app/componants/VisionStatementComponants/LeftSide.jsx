'use client'
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Slider from "./Slider";
import "toastr/build/toastr.min.css";

const LeftSide = () => {

  return (
    <div className="w-[100%] md:h-screen rounded ">
 
      <div className="pt-10 w-full ">
      <Slider/>
      </div>

  
      

      

     
    </div>
  );
};

export default LeftSide;
