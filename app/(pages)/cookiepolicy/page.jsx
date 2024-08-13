/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Layout from "@/app/componants/Layout/Layout";

import { Policy } from "@/app/componants/CookieComponants/Policy";
const page = () => {

  // eslint-disable-next-line react-hooks/exhaustive-deps
 
  return (
    <>
      <Layout>
        <Policy/>
      </Layout>
    </>
  );
};

export default page;
