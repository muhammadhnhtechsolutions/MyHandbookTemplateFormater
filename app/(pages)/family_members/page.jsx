'use client';

import MainCard from '@/app/componants/FamilyMemberComponants/Maincard';
import Layout from '@/app/componants/Layout/Layout';
import React, { useContext, useEffect, useState } from 'react';
import { rootContexts } from '@/app/contexts/rootContexts';
import { Getimagename } from '@/app/services/MangeService';
import { useAppDispatch } from "@/app/Redux/lib/hooks";
import { setFamilyName } from '@/app/Redux/lib/features/product/productSlice';
const Page = () => {
  const { headerData, setHeaderData } = useContext(rootContexts);
  const [familyName, setFamilyNames] = useState("");
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Getimagename();
        if (result.status) {
          setFamilyNames(result.coverpage_name || "Sample");
          // dispatch(setFamilyName(result.coverpage_name || ""))
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
    setHeaderData(`${familyName} Family Members`);
  }, [familyName, setHeaderData]);

  return (
    <Layout>
      <h1 className="text-[32px] text-center md:py-6 pt-6 block md:hidden leading-[38px] md:px-0 px-4 text-black font-[700]">
        {headerData}
      </h1>
      <MainCard />
    </Layout>
  );
};

export default Page;
