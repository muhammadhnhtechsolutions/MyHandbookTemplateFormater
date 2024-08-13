'use client'
import React, { useState } from "react";

import RightSide from "./RightSide";
import Addpage from "../IntroductionsvgComponants/Addpage";
import Image from "next/image"; 
import Loader from "../../assets/loader.gif";
const MainCard = () => {
  const [loading, setLoading] = useState(false); 
  return (
    <>
 
    <div className="container m-auto p-5 md:pt-12">
        <div className="w-full flex flex-col  md:flex-row md:space-x-5 md:space-y-0 space-y-5  rounded lg:p-5">

        <div className="md:w-7/12 w-full ">
      
        <Addpage/>
        </div>

        <div className="md:w-5/12 w-full">
        <RightSide />
        </div>
      </div>
    </div>
   
    </>
  );
};

export default MainCard;
