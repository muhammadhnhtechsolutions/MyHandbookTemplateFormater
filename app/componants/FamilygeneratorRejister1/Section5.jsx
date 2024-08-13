/* eslint-disable react/no-unescaped-entities */
'use client'
import React from "react";
import Image from 'next/image'
import Partner5 from '../../assets/imges/icons-24.png';
import Partner6 from '../../assets/imges/icons-21.png';

export const Section5 = () => {
  return (
    <>
      <div className="">
        <p className="text-[#FF9900] justify-center text-center font-bold text-[24px] md:text-[32px] px-4">
          HERE ARE YOUR 2 SECRET HACKS OF MODERN PARENTING...
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 mx-auto w-full md:w-[80%]">
        <div className="bg-[#023D6D] rounded-3xl text-white p-6 flex flex-col items-center">
          <Image src={Partner6} alt="Partner6" width={100} height={100} className="mb-4" />
          <h1 className="text-[20px] md:text-[22px] font-bold text-center">
            Building a Team: A Handbook for Parents to Create a Strong and United Family Unit
          </h1>
          <p className="text-[16px] md:text-[18px] font-semibold text-center">
            <br />If you want your child to grow up with a set of values that will lead them through life, you need to instill the values they will follow and make decisions from as they move forward in life.... It Allows Me To Help More Parents Lead Their Homes Sustainably.
          </p>
        </div>
        <div className="bg-[#023D6D] rounded-3xl text-white p-6 flex flex-col items-center">
          <Image src={Partner5} alt="Partner5" width={100} height={100} className="mb-4" />
          <h1 className="text-[20px] md:text-[22px] font-bold text-center">
            Shaping Core Values: How Parents Can Instill Important Beliefs in Their Children
          </h1>
          <p className="text-[16px] md:text-[18px] font-semibold text-center">
            <br />Modern parents don't just want their children to behave—they want them to grow up into adults who have core values that guide them in every aspect of life.
          </p>
        </div>
      </div>

      <div className="pt-5 w-full">
        <div className="bg-[#6BAEBF] text-white justify-center shadow-2xl rounded-md mx-auto p-6">
          <div className="text-center">
            <h1 className="text-[32px] md:text-[50px] pt-5 font-bold leading-tight md:leading-[65px]">
              The Power of Shared Vision:
            </h1>
            <p className="pt-5 font-bold text-[16px] md:text-[19px]">
              A Guide for Parents to Redirect Their Family's Path Towards Success
            </p>
          </div>
          <div className="text-center py-5 text-[16px] md:text-[18px] font-bold Montserrat space-y-2">
            <h1>FAMILY MEDIA AGREEMENTS,</h1>
            <h1>A CORE VALUES STATEMENT,</h1>
            <h1>A FAMILY MISSION STATEMENT,</h1>
            <h1>A FAMILY CONSTITUTION,</h1>
            <h1>A FAMILY CODE OF CONDUCT</h1>
          </div>
          <div className="font-normal leading-8 text-center mx-auto w-full md:w-[80%]">
            <h1>and other valuable tools to reinforce that which you believe to be most important to your family.</h1>
          </div>
          <div className="font-normal justify-items-center leading-8 text-center text-[16px] md:text-[20px]">
            <h1 className="py-8">So if you are:</h1>
            <p>✅ Not sure your spouse or children have a clear vision for the future?</p>
            <p>✅ Feel frustrated with parenting and often find more joy in being at work than being at home?</p>
            <p>✅ Don’t feel your children and/or spouse see you as a leader in your home?</p>
            <p>✅ Feel your home life lacks intention and direction?</p>
            <p>✅ Often fear you are hurting at home more than helping?</p>
            <p>✅ Often think everyone else must know something you don’t when it comes to family?</p>
            <p>✅ Fear you will put in all of this work and still have children who grow into adulthood unprepared and needy?</p>
            <p className="py-5 text-[18px] md:text-[22px] text-[#FF9900]">
              FAMILY HANDBOOK GENERATOR IS THE SOLUTION
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
