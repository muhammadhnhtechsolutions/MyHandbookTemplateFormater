/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import Footer from "@/app/componants/Layout/Footer";
import { ChangePassword } from "@/app/componants/LoginComponants/ChangePassword";

import { Otp } from "@/app/componants/LoginComponants/Otp";


const page = () => {
  


  return (
    <>
     
    <ChangePassword/>
      <Footer />
    </>
  );
};

export default page;
