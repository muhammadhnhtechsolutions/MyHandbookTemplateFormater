/* eslint-disable react/no-unescaped-entities */
'use client'

import familyImage from '../../assets/imges/banner-DaSFEonb (1).webp';
import icons1 from '../../assets/imges/image_16__1_-removebg-preview.png';
import icons2 from '../../assets/imges/image_15-removebg-preview.png';
import icons3 from '../../assets/imges/image_17-removebg-preview.png';
import icons4 from '../../assets/imges/image_18-removebg-preview (1).png';
import icons5 from '../../assets/imges/image_19-removebg-preview.png';
import icons6 from '../../assets/imges/image_20-removebg-preview.png';
import familyImage1 from '../../assets/imges/Family Handbook Generator 2.webp';
import familyImage2 from '../../assets/imges/image 13.png';
import ReactPlayer from "react-player";

import { Check } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import img1 from '../../assets/imges/bannerSectionImg.jpg';
import image2 from '../../assets/imges/mohmmad.png';
import image1 from '../../assets/imges/image 5.png';
import image3 from '../../assets/imges/banner-DaSFEonb (1).3ba965b4 1.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Loader from '../Layout/Loader';
import { useRouter } from 'next/navigation';

 const School = () => {
    
  const router = useRouter();
  const handleRoute = () => {
    router.push('/learnMoreChurch');
  };
 
  return (
    <>
     <div className="h-full relative">
        <Image
          src={image3}
          alt="Family Handbook Compass"
          className="absolute inset-0 w-full h-full "
          width={800}
          height={500}
        />
        <div className="relative inset-0 flex items-center justify-center bg-white/5">
          <div className="text-center text-[#023D6D] p-4 md:p-8 w-full md:w-3/4 lg:w-1/2 sm:31px pt-0">
            <Image
              src={image1}
              alt="Family Handbook"
              className="mx-auto mb-6"
              width={200}
              height={100}
            />
             <h2 className="text-2xl montserrat md:text-4xl droid lg:text-5xl font-bold mb-4">
            Family Vision Initiative
            <p className="text-lg md:text-xl lg:text-2xl mb-6 montserrat"> Planting Seeds with Family Creeds</p>
            </h2>
            <p className="text-lg md:text-xl  font-boldlg:text-2xl mb-6 montserrat">
           
              <br />
              Where there is no vision, the people will perish.
              <br />
              <span className="font-semibold">Proverbs 29:18</span>
            </p>
            <div className="px-1 md:px-16">
  
<div className="bg-white/60 rounded-lg text-cetener p-4 montserrat flex flex-row justify-center items-center">
  <div className="">
    <div className=''>
    
    <h1 className="text-lg md:text-xl font-bold lg:text-2xl mb-2">
      Administrators,
      </h1>
<div className='px-2 md:px-14'>
<p className="text-sm md:text-base lg:text-lg mb-4">
      How would it impact your school’s culture if all parents and children knew their <span className='text-lg font-semibold'> family mission statement, </span> could readily identify their  <span className='text-lg font-semibold'>core values</span> and could communicate the {""}
      <span className='text-lg font-semibold'>vision</span>  for their families?
      </p>
      <p className="text-sm md:text-base lg:text-lg mb-4">
      Inspire your parents today to lead with a Family Handbook
      </p>
      <button
        type="button"
        className="bg-[#FF9900] text-white py-2 px-4 rounded hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9900]"
        onClick={handleRoute}
      >
        LEARN MORE
      </button>
    </div>
    </div>
  </div>
</div>
</div>
<p className='text-[18px] montserrat  font-bold mt-4'>“Where Family Identity is strong, peer pressure is weak.”
</p>
<p className='montserrat'>
  Greg Gunn,
  <a href='https://family-id.com/' className='cursor-pointer'  target='_blank'> Family ID Founder</a>
</p>

          </div>
        </div>
      </div>

    
      {/* <div className="relative h-screen md:h-screen lg:h-[120vh] overflow-hidden">
        <Image
          src={image3}
          alt="Family Handbook Compass"
          className="absolute inset-0 w-full h-full "
          width={800}
          height={500}
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-center text-white p-4 md:p-8 w-full md:w-3/4 lg:w-1/2 sm:31px pt-0">
            <Image
              src={image1}
              alt="Family Handbook"
              className="mx-auto mb-6"
              width={200}
              height={100}
            />
            <h2 className="text-2xl montserrat md:text-4xl droid lg:text-5xl font-bold mb-4">
            Family Vision Initiative
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6 montserrat">
            Planting Seeds with Family Creeds
              <br />
              Where there is no vision, the people will perish.
              <br />
              <span className="font-semibold">Proverbs 29:18</span>
            </p>
            <div className="relative flex justify-center items-center max-w-full h-64 mx-auto overflow-hidden montserrat">
  
  <div className="absolute inset-0 flex items-center justify-center p-4">
  <div className="bg-[#D9D9D9]/30 bg-opacity-95 text-[#023D6D] text-center p-4 rounded- max-w-xs md:max-w-md lg:max-w-lg h-200 montserrat" >
  
      <h1 className="text-lg md:text-xl font-bold lg:text-2xl mb-2">
      Administrators,
      </h1>
      <p className="text-sm md:text-base lg:text-lg mb-4">
      How would it impact your school’s culture if all parents and children knew their <span className='text-lg font-semibold'> family mission statement, </span> could readily identify their  <span className='text-lg font-semibold'>core values</span> and could communicate the {""}
      <span className='text-lg font-semibold'>vision</span>  for their families?
      </p>
      <p className="text-sm md:text-base lg:text-lg mb-4">
      Inspire your parents today to lead with a Family Handbook
      </p>
      <button
        type="button"
        className="bg-[#FF9900] text-white py-2 px-4 rounded hover:bg-opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF9900]"
        onClick={handleRoute}
      >
        LEARN MORE
      </button>
    </div>
  </div>
</div>
<p className='text-[18px] montserrat  font-bold mb-4'>“Where Family Identity is strong, peer pressure is weak.”
</p>
<p className='montserrat cu'>Greg Gunn, 
       
     <span href='https://family-id.com/' className='cursor-pointer'>  Family ID Founder</span></p>
          </div>
        </div>
      </div> */}

<div className="py-8 md:py-16 bg-[#023D6D] p-4 md:p-8 text-center rounded-lg">
  <h2 className="text-3xl md:text-6xl font-bold text-[#FF9900] mb-4 droid">The Family Handbook Process</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto pt-5">
    <div>
      <p className="text-white montserrat text-justify text-base md:text-lg font-normal  md:mx-24 mb-8">
      Our simple step-by-step process allows your church families to create their own customized Family Mission, Vision & Values Statements along with Family Media Agreements, Family Constitution, Code of Conduct and more. 

      </p>
      <p className="text-white text-justify text-base md:text-lg font-normal  md:mx-24 mb-8">Instantly available for immediate download, use and display for your church families. See how it works...</p>
    </div>
    <div className="flex justify-center">
      <ReactPlayer
        className="react-player w-full md:w-3/4"
        url="https://familyhandbook.s3.amazonaws.com/clientsidevideo/banner-_nawXNvK.mp4"
        width="80%"
        height="auto"
        controls={true}
      />
    </div>
  </div>
</div>

<div className="container mx-auto px-4 py-8">
  <div className="flex justify-center mb-8">
    <Image src={familyImage1} alt="Family" className="mx-auto" width={500} height={200} />
  </div>

  <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-8 text-[#6BAEBF] droid text-center">
    What is a Family Handbook?
  </h1>

  <p className="mx-auto w-[70%] text-center text-base md:text-xl mb-8 montserrat">
    A <span className="text-[#6BAEBF]">Family Handbook</span> is a set of custom documents designed by parents to establish and memorialize the <span className="text-[#6BAEBF]">purpose and direction</span> of their <span className="text-[#6BAEBF]">family.</span> It serves to <span className="text-[#6BAEBF]">guide</span> the family towards that which parents have identified to be most important to their family.
  </p>

  <h1 className="text-2xl md:text-3xl droid font-bold mb-4 md:mb-8 text-[#FF9900] py-3 text-center">
    Family Documents such as:
  </h1>

  <div className="flex justify-center mt-16">
    <ul className="list-none flex flex-col  mt-4 text-2xl md:text-3xl font-bold">
      <li className="flex items-center mb-4">
        <Check color="#6BAEBF" width={70} />
        <label htmlFor="mission-statement" className="text-lg">Mission Statement</label>
      </li>
      <li className="flex items-center mb-4">
        <Check color="#6BAEBF" width={70} />
        <label htmlFor="vision-statement" className="text-lg">Vision Statement</label>
      </li>
      <li className="flex items-center mb-4">
        <Check color="#6BAEBF" width={70} />
        <label htmlFor="core-values-statement" className="text-lg">Core Values Statement</label>
      </li>
      <li className="flex items-center mb-4">
        <Check color="#6BAEBF" width={70} />
        <label htmlFor="code-of-conduct" className="text-lg">Code of Conduct</label>
      </li>
      <li className="flex items-center mb-4">
        <Check color="#6BAEBF" width={70} />
        <label htmlFor="media-statement" className="text-lg">Media Statement</label>
      </li>
      <li className="flex items-center mb-4">
        <Check color="#6BAEBF" width={70} />
        <label htmlFor="constitution" className="text-lg">Constitution</label>
      </li>
    </ul>
  </div>
</div>


<div className="relative h-screen overflow-hidden">
  <Image
    src={familyImage2}
    alt="Family Handbook Compass"
    className="absolute inset-0 w-full h-full object-cover"
    width={800}
    height={500}
  />
  {/* Overlay Start */}
  <div className="absolute inset-0 bg-black opacity-50"></div>
  {/* Overlay End */}
  <div className='absolute inset-0 flex items-center justify-center z-40 px-4 md:px-10 lg:px-20'>
    <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full h-full ">
    <div className="w-full md:w-1/2 px-4">
              {/* Card Start */}
              <div className="bg-opacity-70 text-[#023D6D] p-4 montserrat rounded-lg">
  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold droid pb-4 ">
  Why is it essential?
  </h2>
  <p className="text-base md:text-lg lg:text-xl ">
    <span>The Family Handbook serves as a compass for parents;</span> {""}
    Cultivating their family&apos;s distinct identity and collective vision. Drawing parallels with how successful business owners
    <span> cast vision and set the culture</span> for their teams, the <span>Family Handbook is a family&apos;s unique tool</span> to
    foster all that they&apos;ve identified to be most important in their family.
  </p>
</div>

              {/* Card End */}
            </div>
            <div className="w-full md:w-1/2 px-4">
              <ReactPlayer
                className="w-full h-auto"
                url="https://familyhandbook.s3.amazonaws.com/clientsidevideo/com-vW9-6qsG.mp4"
                controls
                width="100%"
                height="auto"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen">
  <div className="flex flex-col md:flex-row justify-between items-start mx-auto w-full max-w-6xl px-4">
    
    {/* Benefits for Families Section */}
    <div className="w-full md:w-1/2 px-4 md:px-10">
      <h1 className="font-bold text-[#FF9900] text-center text-2xl md:text-4xl mb-6 droid">Benefits for Families</h1>
      <div className="space-y-4">
        {/* Benefit Item */}
        <div className="bg-primary rounded-3xl p-4 flex items-start montserrat min-h-[150px]">
          <div className='w-1/4 md:w-1/6 flex items-center justify-center'>
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center rounded-full bg-white">
              <Image src={icons1} alt="Family Handbook Compass" className="w-10 h-10 md:w-12 md:h-12" width={50} height={50} />
            </div>
          </div>
          <div className='w-3/4 md:w-5/6 flex flex-col justify-center space-y-2'>
            <h2 className="font-bold text-lg md:text-xl text-white">Memorializes Family Purpose & Direction</h2>
            <p className="text-sm md:text-base text-white">Provides clarity on family values, goals, and expectations, guiding daily decisions and actions.</p>
          </div>
        </div>

        {/* Repeat for other benefits */}
        <div className="bg-primary rounded-3xl p-4 flex items-start montserrat min-h-[150px]">
          <div className='w-1/4 md:w-1/6 flex items-center justify-center'>
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center rounded-full bg-white">
              <Image src={icons2} alt="Family Handbook Compass" className="w-10 h-10 md:w-12 md:h-12" width={50} height={50} />
            </div>
          </div>
          <div className='w-3/4 md:w-5/6 flex flex-col justify-center space-y-2'>
            <h2 className="font-bold text-lg md:text-xl text-white">Inspires Teamwork</h2>
            <p className="text-sm md:text-base text-white">Strengthens family bonds by fostering open communication and shared understanding.</p>
          </div>
        </div>
        
        <div className="bg-primary rounded-3xl p-4 flex items-start montserrat min-h-[150px]">
          <div className='w-1/4 md:w-1/6 flex items-center justify-center'>
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center rounded-full bg-white">
              <Image src={icons3} alt="Family Handbook Compass" className="w-10 h-10 md:w-12 md:h-12" width={50} height={50} />
            </div>
          </div>
          <div className='w-3/4 md:w-5/6 flex flex-col justify-center space-y-2'>
            <h2 className="font-bold text-lg md:text-xl text-white">A Visual Constant Anchor For Parents</h2>
            <p className="text-sm md:text-base text-white">Enables families to preserve and pass down their values, traditions, and aspirations to future generations.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Benefits for Churches Section */}
    <div className="w-full md:w-1/2 px-4 md:px-10">
      <h1 className="font-bold text-[#FF9900] text-center text-2xl md:text-4xl mb-6 droid">Benefits for Churches</h1>
      <div className="space-y-4">
        {/* Benefit Item */}
        <div className="bg-primary rounded-3xl p-4 flex items-start montserrat min-h-[150px]">
          <div className='w-1/4 md:w-1/6 flex items-center justify-center'>
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center rounded-full bg-white">
              <Image src={icons4} alt="Family Handbook Compass" className="w-10 h-10 md:w-12 md:h-12" width={50} height={50} />
            </div>
          </div>
          <div className='w-3/4 md:w-5/6 flex flex-col justify-center space-y-2'>
            <h2 className="font-bold text-lg md:text-xl text-white">Strengthened Church/Family Bonds</h2>
            <p className="text-sm md:text-base text-white">Empowers families within the congregation, fostering a sense of belonging and unity.</p>
          </div>
        </div>

        {/* Repeat for other benefits */}
        <div className="bg-primary rounded-3xl p-4 flex items-start montserrat min-h-[150px]">
          <div className='w-1/4 md:w-1/6 flex items-center justify-center'>
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center rounded-full bg-white">
              <Image src={icons5} alt="Family Handbook Compass" className="w-10 h-10 md:w-12 md:h-12" width={50} height={50} />
            </div>
          </div>
          <div className='w-3/4 md:w-5/6 flex flex-col justify-center space-y-2'>
            <h2 className="font-bold text-lg md:text-xl text-white">Enhanced Family Engagement</h2>
            <p className="text-sm md:text-base text-white">Provides churches with a valuable resource to support families in their spiritual journey and community involvement.</p>
          </div>
        </div>

        <div className="bg-primary rounded-3xl p-4 flex items-start montserrat min-h-[150px]">
          <div className='w-1/4 md:w-1/6 flex items-center justify-center'>
            <div className="w-[60px] h-[60px] md:w-[80px] md:h-[80px] flex items-center justify-center rounded-full bg-white">
              <Image src={icons6} alt="Family Handbook Compass" className="w-10 h-10 md:w-12 md:h-12" width={50} height={50} />
            </div>
          </div>
          <div className='w-3/4 md:w-5/6 flex flex-col justify-center space-y-2'>
            <h2 className="font-bold text-lg md:text-xl text-white">Long-Term Impact</h2>
            <p className="text-sm md:text-base text-white">Facilitates the development of strong, resilient families, who are the foundation of thriving church communities.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div className='flex flex-col md:flex-row justify-between items-center mx-auto md:mx-14'>
  <div className='flex flex-col items-center md:items-start text-center md:text-left'>
    <div className='text-[#6BAEBF] font-bold text-[32px] montserrat'>
      RETAIL SINGLE FAMILY LICENSE
    </div>
    <div className='mt-6'>
      <p className='text-[#FDA513] font-extrabold md:ml-32 text-[54px]'>
        $69.97
      </p>
    </div>
  </div>
  <div className='mt-6 md:mt-0'>
    <Image src={familyImage1} alt="Family Handbook Compass" className="rounded mb-4" width={500} height={600} />
  </div>
</div>

<div className="mx-4 sm:mx-16 bg-[#023D6D] p-4 md:p-6 text-center rounded-[50px]">
  <div className="grid grid-cols-1 md:grid-cols-2 items-center sm:mx-4 md:mx-8 pt-5 h-auto">
    <div className="text-white text-left md:text-center montserrat">
      <h1 className='leading-8 text-[24px] sm:text-[28px] md:text-[32px] font-bold mb-6'>
        FAMILY VISION INITIATIVE FOR SCHOOLS
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-center font-normal mb-6">
        In Partnership with Creed Culture Inc.
      </p>
      <p className="text-[#F6931D] text-center font-bold mb-2">
        Group Discounts For SCHOOLS!
      </p>
      <p className="leading-8 text-lg sm:text-xl text-center font-normal mb-6">
        Pay as little as<br className="hidden md:block" />$9.99 per family
      </p>
    </div>
    <div className="flex justify-center">
      <Image src={familyImage1} alt="Family Handbook Compass" className="rounded mb-4" width={400} height={500} />
    </div>
  </div>
</div>

<div className="container mx-auto px-4 py-8 text-center">
 
  <div className=" gap-4 mt-8">
  
    <div className="mx-4 md:mx-36 montserrat">
      <h2 className="text-2xl leading-6 font-bold mb-2  text-[#6BAEBF] ">
        Partner with your members to use the very first online platform to create Family Mission, Vision & Values Today!
      </h2>
      <button className="w-auto px-4 py-2 text-base md:text-base bg-[#FF9900] text-white"  onClick={handleRoute}>
        Learn More
      </button>
    </div>
  </div>
</div>


    </>
  )
}
export default School;