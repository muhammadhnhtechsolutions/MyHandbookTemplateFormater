/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useEffect } from 'react'
import Header from './Header/Header'
// import Header1 from './Header/Header1'
import Footer from './Footer'
import { useRouter } from 'next/navigation'

const Layout = ({children}) => {
  const router = useRouter();
  useEffect(()=>{
   if( localStorage.getItem('token') !==null){
    const token = localStorage.getItem('token');

  if(!token){
  router.push('/login')
  }
}
else{
  router.push('/login')
}
  },[])
  return (
    <>
    <Header/>
    {children}
    <Footer/>
    {/* <Header1/> */}
    </>
  )
}

export default Layout
