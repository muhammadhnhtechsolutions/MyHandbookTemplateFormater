'use client'
import Layout from "@/app/componants/Layout/Layout";
import React, { useContext, useEffect } from "react";
import { rootContexts } from "@/app/contexts/rootContexts";
import Flipsnack from "@/app/componants/flipsnackComponants/Flipsnack";

const Page = () => {
  const { headerData, setHeaderData } = useContext(rootContexts);

  useEffect(() => {
    setHeaderData('A mission statement becomes the DNA for every other decision we make.');
  }, [setHeaderData]);

  return (
    <Layout>
     <h1 className="text-[32px] text-center md:py-6 pt-6 block md:hidden leading-[38px] md:px-0 px-4 text-black font-[700]">
        {headerData}
      </h1>
      <Flipsnack />
    </Layout>
  );
};

export default Page;
