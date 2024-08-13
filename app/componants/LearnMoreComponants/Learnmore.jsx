/* eslint-disable react/no-unescaped-entities */
'use client';
import React from "react";
import Image from 'next/image';
import ReactPlayer from "react-player";
import familyImage2 from '../../assets/imges/bg2.jpg';
import school from '../../assets/imges/image 64.png';
import Partner from '../../assets/imges/logo.png';
import img1 from '../../assets/imges/image 34.png';
import ic1 from '../../assets/imges/image 58.png';
import ic2 from '../../assets/imges/image 59.png';
import ic3 from '../../assets/imges/image 60.png';
import ic4 from '../../assets/imges/image 61.png';
import ic5 from '../../assets/imges/image 62.png';
import familyImage from '../../assets/imges/image 63.png';
import img2 from '../../assets/imges/image_35-removebg-preview.png';
import img3 from '../../assets/imges/Vector-removebg-preview.png';
import img4 from '../../assets/imges/image_36__1_-removebg-preview.png';
import Images from '../../assets/imges/f58a3d_d5719893599b4cf2b6756f9c9c525d64~mv2.webp';
import Link from 'next/link'
import icons1 from '../../assets/imges/image_16__1_-removebg-preview.png';
import icons2 from '../../assets/imges/image_15-removebg-preview.png';
import icons3 from '../../assets/imges/image_17-removebg-preview.png';
import icons4 from '../../assets/imges/image_18-removebg-preview (1).png';
import icons5 from '../../assets/imges/image_19-removebg-preview.png';
import icons6 from '../../assets/imges/image_20-removebg-preview.png';
import group from '../../assets/imges/Group 35591.png';
import group3 from '../../assets/imges/Group 35589 (3).png';
import group1 from '../../assets/imges/Group 35590.png';
import fam1 from '../../assets/imges/fam 1.png';
const Learnmore = () => {
  return (
    <>
      <div className="relative h-screen overflow-hidden">
        <Image
          src={familyImage2}
          alt="Family Handbook Compass"
          className="absolute inset-0 w-full h-full object-cover"
          width={800}
          height={500}
        />
        {/* Overlay Start */}
        <div className="absolute w-full  h-full bg-white opacity-70"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Overlay End */}
        <div className='absolute inset-0 flex items-center justify-center z-40 px-4 md:px-10 lg:px-20'>
          <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full h-full text-center">
            <div className="relative w-full md:w-1/2 px-4">
              {/* Card Start */}
              <div className="bg-opacity-70 text-white p-4 montserrat rounded-lg relative">
                <Image
                  src={Partner}
                  alt="Partner"
                  className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  width={200}
                  height={100}
                />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold montserrat pb-4 mt-16 text-primary">Partner with us</h2>
                <p className="montserrat text-base md:text-lg font-normal w-[90%] text-center md:pl-24 lg:text-xl text-primary">
                  Get a  <span className="underline">  done-for-you </span> setup specific for your organization's family members.
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
      <div></div>
      {/* <div className="py-10">
        <div className="text-center montserrat py-5 text-[18px] font-medium ">
          <p className="text-[#FF9900] text-[28px] droid">How it works</p>
          <p>Each process will be tailor made for your organization</p>
        </div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="max-w-sm mx-auto bg-[#023D6D] text-white rounded-3xl p-6">
              <div className="flex justify-center mb-4">
                <div className="w-[120px] h-[120px] bg-white p-4 rounded">
                  <Image src={img1} alt="Icon" className="w-full h-full" />
                </div>
              </div>
              <div className="text-center montserrat text-[20px] font-semibold">
                <p className="mb-2 py-2">Send us your logo, color palette and font styles.</p>
                <p>We’ll send you our media package</p>
              </div>
            </div>
            <div className="max-w-sm mx-auto bg-[#FF9900] text-white rounded-3xl p-6">
              <div className="flex justify-center mb-4">
                <div className="w-[120px] h-[120px] bg-white p-4 rounded">
                  <Image src={img2} alt="Icon" className="w-full h-full" />
                </div>
              </div>
              <div  className="text-center montserrat text-[20px] font-semibold">
              <div   className="mb-2  cursor-pointer py-2">We'll create a customized landing page with links for your members to signup</div>
              </div>
            </div>
          

           
            <a href='https://www.creed-culture.org/churchpromo'  target='_blank' className="max-w-sm cursor-pointer mx-auto bg-[#023D6D] text-white rounded-3xl p-6">
              <div className="flex justify-center mb-4">
                <div className="w-[120px] h-[120px] bg-white p-4 rounded">
                  <Image src={img3} alt="Icon" className="w-full h-full" />
                </div>
              </div>
              <div className="text-center montserrat text-[20px] font-semibold">
                <p className="mb-2 py-2">We'll create Email templates for your organization to plugin to your existing email system</p>
              </div>
            </a>
           
            <div className="max-w-sm mx-auto bg-[#FF9900] text-white rounded-3xl p-6">
              <div className="flex justify-center mb-4">
                <div className="w-[120px] h-[120px] bg-white p-4 rounded">
                  <Image src={img4} alt="Icon" className="w-full h-full" />
                </div>
              </div>
              <div className="text-center montserrat text-[20px] font-semibold">
                <p className="text-[#023D6D]">OPTIONAL</p>
                <p className="mb-2 py-2">Have a dynamic Family Handbook speaker come on location and speak about the value of Family Handbook</p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container justify-center py-6">
      <div className="text-center montserrat text-[32px] font-bold text-[#6BAEBF]">
      <p className="text">Make an Impact in your school's culture: </p>
      <p>It all starts within the family</p>
      </div>
      <div className="flex items-center justify-center min-h-screen">
  <div className="flex flex-col md:flex-row justify-between items-start mx-auto w-full max-w-6xl px-4">
    
    {/* Benefits for Families Section */}
    <div className="w-full md:w-1/2 px-4 md:px-10">
      {/* <h1 className="font-bold text-[#FF9900] text-center text-2xl md:text-4xl mb-6 droid">Benefits for Families</h1> */}
      <Image src={school} alt="Family Handbook Compass" />
    </div>

    {/* Benefits for Churches Section */}
    <div className="w-full md:w-1/2 px-4 md:px-10">
      {/* <h1 className="font-bold text-[#FF9900] text-center text-2xl md:text-4xl mb-6 droid">Benefits for Churches</h1> */}
<p className="text-[18px] font-normal montserrat space-x-2 leading-[21.94px]">Of all the institutions in our world today the one institution most crucial to the fabric of our society is the family.  Yet the family is becoming less and less valued in our current culture.  And moms and dads are losing their vision
<br />
<br />
So how would it impact your school culture if moms and dads led with their own customized Family Mission Statement, Core Values Statement, Family Media Agreement, and/or a family constitution?
<br />
<br />
With Family Handbook you can help your church families create their own customized family documents in just a fraction of the time and cost that other successful leaders spend for these important leadership tools.
</p>
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
<div className="relative h-screen overflow-hidden">
        <Image
          src={Images}
          alt="Family Handbook Compass"
          className="absolute inset-0 w-full h-full object-cover"
          width={800}
          height={500}
        />
        {/* Overlay Start */}
        <div className="absolute w-full  h-full bg-primary opacity-70"></div>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Overlay End */}
        <div className='absolute inset-0 flex items-center justify-center z-40 px-4 md:px-10 lg:px-20'>
          <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full h-full text-center">
            <div className="relative w-full md:w-2/3 px-4">
<p className="text-secondary">Great for</p>
            <div className="flex flex-col md:flex-row gap-x-20  justify-center w-full h-full text-center">
          {/* box start */}
            <div className="w-1/3 ">
            <div className="p-5">
            <div className="bg-white p-2 rounded ">
                  <Image src={ic1} alt="Icon" className="w-full h-full" />
                  
                </div>
                </div>
                <p className="text-white">Title should be here</p>
                </div>
                {/* box end */}
          {/* box start */}
            <div className="w-1/3 ">
            <div className="p-5">
            <div className="bg-white p-2 rounded ">
                  <Image src={ic5} alt="Icon" className="w-full h-full" />
                  
                </div>
                </div>
                <p className="text-white">Title should be here</p>
                </div>
                {/* box end */}
          {/* box start */}
            <div className="w-1/3 ">
            <div className="p-5">
            <div className="bg-white p-2 rounded ">
                  <Image src={ic2} alt="Icon" className="w-full h-full" />
                  
                </div>
                </div>
                <p className="text-white">Title should be here</p>
                </div>
                {/* box end */}
          
                </div>
            <div className="flex flex-col md:flex-row gap-x-20  justify-center w-full h-full text-center">
          {/* box start */}
            <div className="w-1/3 p-6 ">
            <div className="p-5">
            <div className="bg-white p-2 rounded ">
                  <Image src={ic3} alt="Icon" className="w-full h-full" />
                  
                </div>
                </div>
                <p className="text-white">Title should be here</p>
                </div>
                {/* box end */}
          {/* box start */}
            <div className="w-1/3 p-6">
            <div className="p-5">
            <div className="bg-white p-2 rounded ">
                  <Image src={ic4} alt="Icon" className="w-full h-full" />
                  
                </div>
                </div>
                <p className="text-white">Title should be here</p>
                </div>
                {/* box end */}
       
          
                </div>
             
            </div>
            
          </div>
        </div>

        
      </div>
      <div className="container mx-auto py-10">
  <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#6BAEBF] text-center">
  School Partner Discount 
  </p>
  <div className="flex flex-col md:flex-row gap-4 justify-center">
    {/* First Image Block */}
    <div className="flex flex-col items-center w-1/3">
      <Image src={group1} alt="Icon" className="w-full h-auto object-cover" />
      <p className="text-2xl md:text-3xl lg:text-[30px] font-bold text-secondary">
        Single Family License
      </p>
      <p className="text-2xl md:text-3xl lg:text-[29px] font-normal">$67 per license</p>
    </div>
    {/* Second Image Block with Multiple Images */}
    <div className="flex flex-col items-center w-1/3">
      <Image src={group3} alt="Icon" className="w-full h-auto object-cover" />
      <p className="text-2xl md:text-3xl lg:text-[30px] font-bold text-secondary">
        Up to 200 Licenses
      </p>
      <p className="text-2xl md:text-3xl lg:text-[29px] font-normal">$20 per family minimum of 50</p>
    </div>
    {/* Third Image Block */}
    <div className="flex flex-col items-center w-1/3">
      <Image src={group} alt="Icon" className="w-full h-auto object-cover" />
      <p className="text-2xl md:text-3xl lg:text-[30px] font-bold text-secondary">
        More than 201 Licenses
      </p>
      <p className="text-2xl md:text-3xl lg:text-[29px] font-normal">$9.99 per family</p>
    </div>
  </div>
  <p className="text-2xl md:text-3xl lg:text-[24px] font-bold text-primary text-center mx-48">Pass the savings on to your families or keep it and fund a new ministry.</p>
</div>
 <div className="relative h-[487px] overflow-hidden">
        <Image
          src={familyImage}
          alt="Family Handbook Compass"
          className="absolute inset-0 w-full h-[487px] object-cover"
          width={800}
          height={500}
        />
        {/* Overlay Start */}
        {/* <div className="absolute w-full  h-full bg-white opacity-70"></div> */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
        {/* Overlay End */}
        <div className='absolute inset-0 flex items-center justify-center z-40 px-4 md:px-10 lg:px-20'>
          <div className="flex flex-col md:flex-row gap-5 items-center justify-center w-full h-full text-center">
            <div className="relative w-full  px-4">
              {/* Card Start */}
              <div className="bg-opacity-70 text-white p-4 montserrat rounded-lg relative">
               
                <h2 className="text-2xl md:text-[24px] lg:text-[24px] font-bold montserrat pb-4 mt-16 text-primary">Unlock substantial savings per family when you order now</h2>
               
              </div>
              <div className="flex justify-center items-center py-5 w-full" data-aos="fade-right">
        <button
          // onClick={handleRoute}
          className="text-[23px] w-[50%] md:w-[35%] hover:bg-primary hover:brightness-[1.5] bg-[#FF9900] duration-300 ease-in leading-[38px] font-[400] text-white py-[8px] px-[30px] rounded-[10px] m-auto"
        >
          BECOME A <br />
          FAMILY HANDBOOK SCHOOL
        </button>
      </div>
              {/* Card End */}
            </div>
           
          </div>
        </div>
       
      </div>


  

    </>
  );
}

export default Learnmore;
