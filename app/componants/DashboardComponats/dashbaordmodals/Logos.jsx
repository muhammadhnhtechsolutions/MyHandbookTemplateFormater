'use client'
import React, { useState } from 'react'
// import CodeofConduct from '../dashbaordmodals/CodeofConduct';
// import CorevalueSatement from '../dashbaordmodals/CorevalueSatement';
// import Coverpage from '../dashbaordmodals/Coverpage';
// import FamilyConstitution from '../dashbaordmodals/FamilyConstitution';
// import FamilyMediaAgreement from '../dashbaordmodals/FamilyMediaAgreement';
// import Familymemberpage from '../dashbaordmodals/Familymemberpage';
// import Intropage from '../dashbaordmodals/Intropage';
// import Missionsatement from '../dashbaordmodals/Missionsatement';
// import Summary from '../dashbaordmodals/Summary';
// import Visionsatement from '../dashbaordmodals/Visionsatement';
import { useRouter } from 'next/navigation';
import img1 from '../../../assets/imges/01.png';
import img2 from '../../../assets/imges/02.png';
import img3 from '../../../assets/imges/03.png';
import img4 from '../../../assets/imges/04.png';
import img5 from '../../../assets/imges/05.png';
import img6 from '../../../assets/imges/06.png';
import img7 from '../../../assets/imges/07.png';
import img8 from '../../../assets/imges/008.png';
import img9 from '../../../assets/imges/009.png';
import img10 from '../../../assets/imges/010.png';
import img11 from '../../../assets/imges/0011.png';
// import Modal from 'react-modal';
import Sec1 from '../Sec1';
import Image from 'next/image';
const customStyles = {
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    }
}

const Logos = () => {
    
    const [selectedImage, setSelectedImage] = useState(false);
let router = useRouter()
    const DataObj = [{
          id: 1,
          title: 'Cover page',
          image: img1,
        },
        {
          id: 2,
          title: 'Introduction',
          image: img2,
        },
        {
          id: 3,
          title: 'Family Members',
          image: img3,
        },
        {
          id: 4,
          title: 'Core Value Statement',
          image: img4,
        },
        {
          id: 5,
          title: 'Vision Statement',
          image: img5,
        },
        {
          id: 6,
          title: 'Mission Satement',
          image: img6,
        },
        {
          id: 7,
          title: 'Code Of Conduct',
          image: img7,
        },
        {
          id: 8,
          title: 'Introduction',
          image: img8,
        },
        {
          id: 9,
          title: 'Family Media Agreement',
          image: img9,
        },
        {
          id: 10,
          title: 'Summary',
          image: img10,
        },{
          id: 11,
          title: 'Family Handbook',
          image: img11,
        }
    ]
    const openModal = (index) => {
        if(index == 0){
        //   setSelectedImage
        //   (<Coverpage  onClick={()=>setSelectedImage(false)}/>);
        // }else if(index == 1){
        //   setSelectedImage(<Intropage  onClick={()=>setSelectedImage(false)}/>);
        // }else if(index == 2){
        //   setSelectedImage
        // (<Familymemberpage  onClick={()=>setSelectedImage(false)}/>);
        // }else if(index == 3){
        //   setSelectedImage(<CorevalueSatement  onClick={()=>setSelectedImage(false)}/>);
        // }else if(index == 4){
        //   setSelectedImage(<Visionsatement  onClick={()=>setSelectedImage(false)}/>);
        // }else if(index == 5){
        //   setSelectedImage(<Missionsatement  onClick={()=>setSelectedImage(false)}/>);
        // }else if(index == 6){
        //   setSelectedImage(<CodeofConduct  onClick={()=>setSelectedImage(false)}/>);
        // }else if(index == 7){
        //   setSelectedImage(<FamilyMediaAgreement  onClick={()=>setSelectedImage(false)}/>);
        // }else if(index == 8){
        //   setSelectedImage(<FamilyConstitution  onClick={()=>setSelectedImage(false)}/>);
        // }else if(index == 9){
        //   setSelectedImage(<Summary  onClick={()=>setSelectedImage(false)}/>);
        // }else if(index == 10){
          router.push('/section')
        }else if(index == 1){
          router.push('/section')
        }else if(index == 2){
          router.push('/section')
        }else if(index == 3){
          router.push('/section')
        }else if(index == 4){
          router.push('/section')
        }else if(index == 5){
          router.push('/section')
        }else if(index == 6){
          router.push('/section')
        }else if(index == 7){
          router.push('/section')
        }else if(index == 8){
          router.push('/section')
        }else if(index == 9){
          router.push('/section')   
      }else if(index == 10){
        router.push('/section')
      }else if(index == 11){
        router.push('/section')
      }
    };
  return (
    <div>
       <div>
      <Sec1 />
      <div className='container m-auto pt-10 p-6 flex justify-center items-center'>
        <div className='flex flex-wrap justify-center gap-16 w-full'>
          {DataObj.map((e, index) => (
            <div onClick={() => openModal(index)} className='w-full p-1 space-y-3 flex flex-col items-center  justify-center md:w-[200px] border-t-[3px] hover:border-primary cursor-pointer border-b-[3px] rounded-3xl' key={index}>
            <Image cover src={e.image} alt={`Image ${index + 1}`} className=''  />
            <p className='font-[500] text-center text-[25px] leading-[36px]'>{e.title}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <Modal
        isOpen={selectedImage !== false}
        style={customStyles}
        contentLabel="Selected Image"
      >
        {selectedImage}
      </Modal> */}
    </div>
    </div>
  )
}

export default Logos
