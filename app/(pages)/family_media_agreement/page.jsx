/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import MainFaimtMedia from '@/app/componants/FamilyMediaAgreementComponants/MainFaimtMedia'
import Layout from '@/app/componants/Layout/Layout'
import React, { useContext, useEffect, useState } from "react";
import { rootContexts } from '@/app/contexts/rootContexts';
import { Getimagename } from '@/app/services/MangeService';
const page = () => {
  const { headerData, setHeaderData } = useContext(rootContexts);
  
  const [familyName, setFamilyName] = useState("");
  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Getimagename();
        if (result.status) {
          setFamilyName(result.coverpage_name || "Sample");
          // 
        } else {
          console.error("Failed to fetch family name:", result.message);
        }
      } catch (error) {
        console.error("An error occurred while fetching the image name:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setHeaderData(`${familyName} Media Agreement`);
  }, [familyName, setHeaderData]);


  return (
    <Layout>
         <h1 className='text-[32px] text-center md:py-6 md:px-0 px-4 
pt-6 block md:hidden leading-[38px] text-black font-[700]'>{headerData}</h1>
        <MainFaimtMedia/>
    </Layout>
  )
}

export default page
