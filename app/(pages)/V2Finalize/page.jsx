/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Layout from '@/app/componants/Layout/Layout'
import V2Finalize from '@/app/componants/finalizecomponants/V2Finalize'
import React, { useContext, useEffect } from 'react'
import { rootContexts } from '@/app/contexts/rootContexts';
const page = () => {
  const { headerData, setHeaderData } = useContext(rootContexts);
  useEffect(()=>{
  setHeaderData('')
  },[])
  return (
    <Layout>
      <V2Finalize/>
    </Layout>
  )
}

export default page
