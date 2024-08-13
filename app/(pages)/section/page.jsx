'use client'
import React, { Suspense, useContext, useEffect }  from "react";
import { rootContexts } from "@/app/contexts/rootContexts";
import Layout from "@/app/componants/Layout/Layout";
import Loader from "@/app/componants/Layout/Loader";
const Sec2 = React.lazy(() => import('@/app/componants/DashboardComponats/Sec2'));


const Page = () => {
  const { headerData, setHeaderData } = useContext(rootContexts);
  useEffect(()=>{
  setHeaderData('')
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  function SearchBarFallback() {
    return <><Loader /></> 
  }
  return (
    <div>
      <Layout>
      <h1 className='text-[32px] text-center md:py-6  
pt-6 block md:hidden leading-[38px] text-black font-[700]'>{headerData}</h1>
        <Suspense fallback={<SearchBarFallback/>}>
          <Sec2 />
        </Suspense>

      </Layout>
    </div>
  );
};

export default Page;

