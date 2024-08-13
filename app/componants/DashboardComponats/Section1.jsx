'use client'
import React, { useState } from 'react';
import Sec1 from './Sec1';

import img12 from '../../assets/imges/12.png';
import img13 from '../../assets/imges/13.png';
import img14 from '../../assets/imges/14.png';
import img15 from '../../assets/imges/15.png';
import img16 from '../../assets/imges/16.png';
import img17 from '../../assets/imges/17.png';
import img18 from '../../assets/imges/18.png';
import img19 from '../../assets/imges/19.png';
import Image from 'next/image';
// import CodeofConduct from './dashbaordmodals/CodeofConduct';
// import CorevalueSatement from './dashbaordmodals/CorevalueSatement';
// import Coverpage from './dashbaordmodals/Coverpage';
// import FamilyConstitution from './dashbaordmodals/FamilyConstitution';
// import FamilyMediaAgreement from './dashbaordmodals/FamilyMediaAgreement';
// import Familymemberpage from './dashbaordmodals/Familymemberpage';
// import Intropage from './dashbaordmodals/Intropage';
// import Missionsatement from './dashbaordmodals/Missionsatement';
// import Summary from './dashbaordmodals/Summary';
// import Visionsatement from './dashbaordmodals/Visionsatement';
import { useRouter } from 'next/navigation';
// Styles for the modal
const customStyles = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)'
  },
  content: {
    top: '73%',
    left: '50%',
    with:'110%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none',
    background: 'transparent',
    overflow: 'visible'
  }
};
const Section1 = () => {
const [selectedImage, setSelectedImage] = useState(false);
let router = useRouter()
const DataObj = [{

//   title: 'Cover page',
//   image: img1,
// },
// {
//   id: 2,
//   title: 'Introduction',
//   image: img2,
// },
// {
//   id: 3,
//   title: 'Family Members',
//   image: img3,
// },
// {
//   id: 4,
//   title: 'Core Value Statement',
//   image: img4,
// },
// {
//   id: 5,
//   title: 'Vision Statement',
//   image: img5,
// },
// {
//   id: 6,
//   title: 'Mission Satement',
//   image: img6,
// },
// {
//   id: 7,
//   title: 'Code Of Conduct',
//   image: img7,
// },
// {
//   id: 8,
//   title: 'Introduction',
//   image: img8,
// },
// {
//   id: 9,
//   title: 'Family Media Agreement',
//   image: img9,
// },
// {
//   id: 10,
//   title: 'Summary',
//   image: img10,
// },{
//   id: 11,
//   title: 'Family Handbook',
//   image: img11,
// },{
  id: 12,
  title: 'Logo maker / Mission Statement',
  image: img12,
},{
  id: 13,
  title: 'Family Hub',
  image: img13,
},{
  id: 14,
  title: 'Parenting Workshops',
  image: img14,
},{
  id: 15,
  title: 'Personalized Coaching Sessions',
  image: img15,
},{
  id: 16,
  title: 'Inspiring Workshops & Webinars',
  image: img16,
},{
  id: 17,
  title: 'Expert-led Seminars',
  image: img17,
},{
  id: 18,
  title: 'Online Courses',
  image: img18,
},{
  id: 19,
  title: 'My Book',
  image: img19,
},

]
const openModal = (index) => {
    if(index == 0){
   
      router.push('/section')
   
    }
  };


  return (
    <div>
      <Sec1 />
      <div className='container m-auto pt-10 p-6 flex justify-center items-center'>
        <div className='flex flex-wrap justify-center gap-16 w-full'>
          {DataObj.map((e, index) => (
            <div onClick={() => openModal(index)} className='w-full p-1 space-y-3 flex flex-col items-center  justify-center md:w-[200px] border-t-[3px] hover:border-primary cursor-pointer border-b-[3px] rounded-3xl' key={index}>
            <Image  src={e.image} alt={`Image ${index + 1}`} className=''  />
            <p className='font-[500] text-center text-[25px] leading-[36px]'>{e.title}</p>
            </div>
          ))}
        </div>
      </div>

   
    </div>
  );
};

export default Section1;