'use client'
/* eslint-disable react-hooks/rules-of-hooks */
import MainCover from "@/app/componants/CoverPagesComponants/MainCover";
import Layout from "@/app/componants/Layout/Layout";
import React, { Suspense, useContext, useEffect } from "react";
import Image from 'next/image'
import { rootContexts } from "@/app/contexts/rootContexts";
import Loader from "@/app/componants/Layout/Loader";

const CoverPageStatic = () => {
  const { headerData, setHeaderData } = useContext(rootContexts);
  useEffect(() => {
    setHeaderData("Your Family Handbook Cover Page");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function SearchBarFallback() {
    return <><Loader/></>
  }
  return (
    <Layout>
    <Image  src={""} alt=""  />
    <h1 className='md:text-[32px] text-[27px] md:px-0 px-5 flex text-center md:py-6 pt-5  md:hidden leading-[38px] text-black font-[700]'>{headerData}</h1>
    <Suspense fallback={<SearchBarFallback />}>
      <MainCover />
      </Suspense>
    </Layout>
  );
};

export default CoverPageStatic;
