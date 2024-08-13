'use client'
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
import Section1 from '@/app/componants/DashboardComponats/Section1'
import Layout from '@/app/componants/Layout/Layout'
import { rootContexts } from '@/app/contexts/rootContexts';
import { useContext, useEffect } from 'react';

const page = () => {
  const { headerData, setHeaderData } = useContext(rootContexts);
  useEffect(()=>{
  setHeaderData('')
  },[])
  return (
    <>
    <div id='largeScreen'>
    <Layout>
        <Section1/>
    </Layout>
    </div>
    <div id='smallScreen'>
        <Section1/>
    </div>
    </>
  )
}

export default page
