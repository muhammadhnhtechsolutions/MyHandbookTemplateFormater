/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import FeedBack from '@/app/componants/FeedbackComponants/FeedBack'
import Layout from '@/app/componants/Layout/Layout'
import React, { useContext, useEffect } from "react";
import { rootContexts } from '@/app/contexts/rootContexts';
const page = () => {
  const { headerData, setHeaderData } = useContext(rootContexts);
  useEffect(()=>{
  setHeaderData('We Value Your Feedback')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <Layout>
         <h1 className='text-[32px] text-center md:py-6 md:px-0 px-4 
pt-6 block md:hidden leading-[38px] text-black font-[700]'>{headerData}</h1>
        <FeedBack/>
    </Layout>
  )
}

export default page
