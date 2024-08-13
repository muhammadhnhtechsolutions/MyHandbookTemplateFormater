'use client'
import React, { useEffect, useState } from "react";
import RightSide from "./RightSide";
import AddEditor from "./AddEditor";
import Loader from "../../assets/loader.gif";
import Image from "next/image";

const MainCard = () => {
  const [loading, setLoading] = useState(false);


  return (
    <>
   
        <div className="container m-auto p-5 md:pt-12">
          <div className="flex flex-col md:flex-row md:space-x-5 space-y-5 md:space-y-0  rounded-lg p-3">
            <div className="md:w-6/12 w-full">
              <AddEditor />
            </div>

            <div className="md:w-6/12 w-full">
              <RightSide />
            </div>
          </div>
        </div>
   
    </>
  );
};

export default MainCard;
