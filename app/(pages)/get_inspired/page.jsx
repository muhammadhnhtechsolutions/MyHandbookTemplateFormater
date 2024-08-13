/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Inpi from '@/app/componants/GetInspiredComponants/Inpi'
import Layout from '@/app/componants/Layout/Layout'
import React, { useContext, useEffect } from "react";
import { rootContexts } from '@/app/contexts/rootContexts';
const page = () => {
  const { headerData, setHeaderData } = useContext(rootContexts);
  useEffect(()=>{
  setHeaderData('Get Inspired by Phillip Kelley')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <Layout>
         <h1 className='text-[32px] text-center md:py-6  
pt-6 block md:hidden leading-[38px] text-black font-[700]'>{headerData}</h1>
<Inpi/>
    </Layout>
  )
}

export default page
