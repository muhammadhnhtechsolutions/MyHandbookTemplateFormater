// /* eslint-disable react-hooks/rules-of-hooks */
// 'use client'
// import Layout from "@/app/componants/Layout/Layout";
// import React from "react";
// import Poster from '../../componants/PosterComponents/Poster'
// const page = () => {

// import { Layout } from "antd"
import React from "react";
import Layout from "@/app/componants/Layout/Layout"
import Poster  from "../../componants/PosterComponents/Poster"
import Footer from "@/app/componants/Layout/Footer";
import Foteer from "@/app/componants/HomeComponants/Foteer";
 
const  page = ()=>{
    return (
        <>  
      
        <Poster/>
        <Foteer/>
    
        
        </>
    )
}
export default page