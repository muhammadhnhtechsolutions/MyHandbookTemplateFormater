'use client';
import { Check } from 'lucide-react';
import "../../globals.css";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Loader from "../Layout/Loader";
import familyImage1 from '../../assets/imges/Family Handbook Generator 2.webp';
import Image from 'next/image';
import check from '../../assets/imges/image 12.png';

const HowItWorks = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  
  const handleRoute = () => {
    setIsLoading(true);
    router.push('/login');
  };

  return (
    <>
      {isLoading && <Loader />}
      <div className="container mx-auto px-4 py-8">
        <div className="  justify-center mb-8 space-y-4 md:space-y-0 md:space-x-8">
        
          <div className='text-base md:text-lg montserrat text-center w-full md:w-1/2 m-auto'>
            <p>Leaders of successful organizations and many winning coaches have taken the time to clearly identify and memorialize their Mission, Vision & Values for use in leading their teams.  </p>
            <br />
            <p>The need for great leadership is not exclusive only to business or growing corporations.  Moms and dads have a far more significant role in leadership than the average business owner or winning sports franchize.  </p>
            <br />
            <p>Today, moms and dads are recognizing the value of creating forward thinking statements to memorialize and display in their own little organizations, their homes.  And today moms and dads are leading and creating inspiring family culture within their families by creating their very own Family Handbook.</p>
          
          </div>
          <p className='py-4 text-center text-secondary montserrat text-[28px] font-bold 
'>Become a Family Handbook Parent today!</p>
          <div className="!mx-auto w-full md:w-1/2 py-3" >
            <Image
              src={familyImage1}
              alt="Family"
              className="object-cover w-full h-auto "
              width={200}
              height={200}
              layout="responsive"
            />
          </div>
        </div>

        <h1 className="text-[32px] md:text-[32px] montserrat font-bold mb-4 md:mb-8 text-[#6BAEBF] text-center">
          What is a Family Handbook?
        </h1>

        <p className="montserrat mx-auto w-full md:w-3/4 text-center text-base md:text-xl mb-8">
          A <span className="">Family Handbook</span> is a set of custom documents designed by parents to establish and memorialize the <span className="">purpose and direction</span> of their <span className="">family.</span> It serves to <span className="">guide</span> the family towards that which parents have identified to be most important to their family.
        </p>

        <h1 className="text-2xl md:text-3xl italic montserrat font-bold mb-4 md:mb-8 text-[#FF9900] py-3 text-center">
          Family Documents such as:
        </h1>

        <div className="flex flex-col items-center mt-12">
          <ul className="list-none space-y-4 montserrat text-lg md:text-xl font-bold">
            <li className="flex items-center">
              {/* <Check color="#6BAEBF" width={30} size={30} />
               */}
               <Image
              src={check}
              alt="Family"
              // className="object-cover w-full h-auto "
              />
              <span className="ml-2">Mission Statement</span>
            </li>
            <li className="flex items-center">
            <Image
              src={check}
              alt="Family"
              // className="object-cover w-full h-auto "
              />
              <span className="ml-2">Vision Statement</span>
            </li>
            <li className="flex items-center">
            <Image
              src={check}
              alt="Family"
              // className="object-cover w-full h-auto "
              />
              <span className="ml-2">Core Values Statement</span>
            </li>
            <li className="flex items-center">
            <Image
              src={check}
              alt="Family"
              // className="object-cover w-full h-auto "
              />
              <span className="ml-2">Code of Conduct</span>
            </li>
            <li className="flex items-center">
            <Image
              src={check}
              alt="Family"
              // className="object-cover w-full h-auto "
              />
              <span className="ml-2">Media Statement</span>
            </li>
            <li className="flex items-center">
            <Image
              src={check}
              alt="Family"
              // className="object-cover w-full h-auto "
              />
              <span className="ml-2">Constitution</span>
            </li>
            <li className="flex items-center text-center pl-4">
              {/* <Check color="#6BAEBF" width={30} size={30} /> */}
              <span className="ml-2">...And more!</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
