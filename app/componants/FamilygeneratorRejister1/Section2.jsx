'use client';
import React from "react";
import Image from "next/image";
import Partner from '../../assets/imges/image 53.png';
import Partner1 from '../../assets/imges/Rectangle 43.png';
import Partner2 from '../../assets/imges/image 54.png';

const Section2 = () => {
  return (
    <div className="py-8">
      <div className='font-bold text-base sm:text-[28px] text-center py-4 px-12 w-[80%] mx-auto montserrat'>
        <p>
          Imagine Having The Best Parenting Tool You’ll Ever Need To Lead Your Families Towards Greatness, Intention, And Purpose
        </p>
      </div>

      <div className="container px-4 sm:px-20 mx-auto pt-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-[18px] text-center py-4 px-10 w-[80%] mx-auto montserrat">
          <div className='relative'>
            <div className="bg-[#023D6D] p-4 rounded-md w-fit mx-auto">
              <div className="flex justify-center mb-4">
                <div className="w-[120px] h-[120px] bg-[#023D6D] p-4 rounded">
                  <Image src={Partner} alt="Icon" className="w-full h-full" />
                </div>
              </div>
            </div>
            <p className="mt-4 text-center">Unlocking the Secret to a Unified Family: How Our Software Can Transform Your Family Life</p>
          </div>

          <div className='relative'>
            <div className="bg-[#023D6D] p-4 rounded-md w-fit mx-auto">
              <div className="flex justify-center mb-4">
                <div className="w-[120px] h-[120px] bg-[#023D6D] p-4 rounded">
                  <Image src={Partner1} alt="Icon" className="w-full h-full" />
                </div>
              </div>
            </div>
            <p className="py-2 text-center">Say Goodbye to Family Chaos: Harnessing the Power of Our Software for a Harmonious Home</p>
          </div>

          <div className='relative'>
            <div className="bg-[#023D6D] p-4 rounded-md w-fit mx-auto">
              <div className="flex justify-center mb-4">
                <div className="w-[120px] h-[120px] bg-[#023D6D] p-4 rounded">
                  <Image src={Partner2} alt="Icon" className="w-full h-full" />
                </div>
              </div>
            </div>
            <p className="py-2 text-center">The Ultimate Tool for Building a Stronger Family: How Our Software Can Help You Achieve a Unified Mission</p>
          </div>
        </div>
      </div>

      <div className='text-center pt-10'>
        <h1 className='text-[#FF9900] text-[30px] font-bold'>Limited Time Special</h1>
        <p className='font-bold'>Experience The First Ever Handbook Generator For Only $̶9̶9̶7̶ $97.00</p>
      </div>

      <div className='text-center pt-10'>
        <h1 className='text-[#6BAEBF] text-[30px] font-bold'>And The BEST Part Of This Revolutionary Tool Is That…</h1>
      </div>

      <div className=' px-4 sm:px-20 w-[80%] mx-auto'>
        <p className='pt-4'>It is the undeniable solution for moms and dads who want to be intentional and create a winning, team-like environment for their families.</p>
        <p className='pt-4'>And you don’t have to become tech-savvy at all, because the truth is…</p>
        <p className='pt-4'>…There is ZERO technical skills needed to use this platform.</p>
        <p className='pt-4'>We designed it in a way that everyone can get to utilize it in all walks of life. When our team started out, we all understood the busy schedules parents have and we vowed to build a product that would be insanely simple to use.</p>
        <p className='pt-4'>We intentionally left out the gobs and gobs of additional content… articles… pop-ups… and all of the things that tend to distract us when navigating online tools.</p>
        <p className='pt-4'>We created simple videos to share the whys and the how’s in each simple process</p>
        <p className='pt-4'>We kept them short but very insightful in order to help you to create the best Family Handbook you can for your family</p>
      </div>
    </div>
  );
};

export default Section2;
