/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Header from "../../componants/HomeComponants/Header";
import Footer from "@/app/componants/Layout/Footer";
import BannerSection from "@/app/componants/LoginComponants/BannerSection";
import React, { useContext, useEffect } from "react";
import { rootContexts } from '@/app/contexts/rootContexts';
const page = () => {
  const { headerData, setHeaderData } = useContext(rootContexts);
  useEffect(()=>{
  setHeaderData('Create Your Family Mission Statement')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <>
      {/* <Header /> */}
<BannerSection/>
      <Footer />
    </>
  );
};

export default page;
