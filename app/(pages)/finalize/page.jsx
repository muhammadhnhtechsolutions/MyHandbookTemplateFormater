/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Layout from '@/app/componants/Layout/Layout'
import Finalize from '@/app/componants/finalizecomponants/Finalize'
import React, { useContext, useEffect } from 'react'
import { rootContexts } from '@/app/contexts/rootContexts';
const page = () => {
  const { headerData, setHeaderData } = useContext(rootContexts);
  useEffect(()=>{
  setHeaderData('')
  },[])
  return (
    <Layout>
      <Finalize/>
    </Layout>
  )
}

export default page
