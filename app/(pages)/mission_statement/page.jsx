/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Layout from "@/app/componants/Layout/Layout";
import MainCard from "@/app/componants/MissionStatementComponants/MainCard";
import React, { useContext, useEffect, useState } from "react";
import { rootContexts } from '@/app/contexts/rootContexts';
import { Getimagename } from "@/app/services/MangeService";
const page = () => {
  const [familyName, setFamilyName] = useState("");
  const { headerData, setHeaderData } = useContext(rootContexts);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Getimagename();
        if (result.status) {
          setFamilyName(result.coverpage_name || "");
          
        } else {
          console.error("Failed to fetch family name:", result.message);
        }
      } catch (error) {
        // console.error("An error occurred while fetching the image name:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setHeaderData(`${familyName} Create Your Family Mission Statement`);
  }, [familyName, setHeaderData]);
  return (
    <>
      <Layout>
      <h1 className='text-[32px] text-center md:py-6 md:px-0 px-4
pt-6 block md:hidden leading-[38px] text-black font-[700]'>{headerData}</h1>
        <MainCard />
      </Layout>
    </>
  );
};

export default page;