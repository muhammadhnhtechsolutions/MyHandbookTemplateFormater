'use client'
import Adds from "./componants/HomeComponants/Adds";
import BannerSection from "./componants/HomeComponants/BannerSection";
import Header from "./componants/HomeComponants/Header";
import HowItWorks from "./componants/HomeComponants/HowItWorks";
import WhatIsAFamily from "./componants/HomeComponants/WhatIsAFamily";
import WhatsIncluded from "./componants/HomeComponants/WhatsIncluded";
import Handbookprocess from "./componants/HomeComponants/Handbookprocess";
import Corevalues from "./componants/HomeComponants/Corevalues";
import Foteer from "./componants/HomeComponants/Foteer";
import Header1 from "./componants/HomeComponants/Header1";
import Footer from "./componants/Layout/Footer";
// import Header1 from "./Header1";

export default function Home() {
  return (
  <>
  {/* <Header/>x */}
  <Header1/>
  <BannerSection/>
  <HowItWorks/>
  <Handbookprocess/>
  <WhatIsAFamily/>
  <WhatsIncluded/>
  <Corevalues/>
  <Adds/>
  <Foteer/>
  
  {/* <Footer/> */}

  </>
    );
}
