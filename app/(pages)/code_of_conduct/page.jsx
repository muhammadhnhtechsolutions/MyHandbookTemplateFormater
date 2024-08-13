'use client';
// import MainConduct from '@/app/componants/CodeOfConductComponants/MainConduct';
import Layout from '@/app/componants/Layout/Layout';
import { useContext, useEffect, useState } from 'react';
import { rootContexts } from '@/app/contexts/rootContexts';
import MainConduct from '@/app/componants/CodeOfConductComponants/MainConduct';
import { Getimagename } from '@/app/services/MangeService';

const Page = () => {
  const { headerData, setHeaderData } = useContext(rootContexts);

  const [familyName, setFamilyName] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await Getimagename();
        if (result.status) {
          setFamilyName(result.coverpage_name || "Sample");
          
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
    setHeaderData(`${familyName} Code Of Conduct`);
  }, [familyName, setHeaderData]);

  return (
    <>
    <Layout>
      <h1 className='text-[32px]  md:py-6 md:px-0 px-4
pt-6 block md:hidden leading-[38px] text-black font-[700]'>
        {headerData}
      </h1>
   
      {/* <MainConduct /> */}
      <MainConduct/>
     </Layout>
    </>
  );
};

export default Page;
