'use client'
import React, { useState } from "react";
import Image from "next/image"; 
import Loader from "../../assets/loader.gif";
import RightSide from "./RightSide";
import LeftSide from "./LeftSide";

const MainCard = () => {



  return (
    <>

      <div className="container m-auto p-5 md:pt-12">
        <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0  rounded-lg p-3">
          <div className="md:w-[60%] w-full">
          <LeftSide/>
          </div>
          <div className="md:w-[40%] w-full">
            <RightSide    />
          </div>
        </div>
      </div>
    
    </>
  );
};

export default MainCard;

