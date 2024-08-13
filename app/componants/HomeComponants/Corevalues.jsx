import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import icons4 from '../../assets/imges/corevalues.jpg';

const Corevalues = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push('/login');
  };

  return (
    <div className="py-8 md:py-16 bg-[#023D6D] p-4 md:p-8 text-center rounded-lg">
      <h2 className="text-base font-medium montserrat w-full md:w-[50%] lg:w-[30%] text-white mb-4 mx-auto">
        Successful CEOs and winning coaches lead their teams by displaying identified core values.
      </h2>
      <p className="text-2xl font-medium montserrat text-white mb-4 w-full mx-auto">
        Winning parents lead by displaying their <span className="text-2xl  font-extrabold montserrat text-white mb-4">Family Core Values</span> 
      </p>
      <div className="flex justify-center">
        <Image src={icons4} alt="Family Handbook Compass" className="relative left-1 bottom-1" />
      </div>
      <p className="text-base font-medium montserrat text-white mb-4 w-full  mx-auto">
      Does your family have a set of  <span  className='text-xl font-bold'>CORE VALUES?</span> Get one {""}
      <span className='text-xl  font-bold'>
      FREE,
      </span>  today!
      </p>
      <div className="flex justify-center items-center py-5 w-full" data-aos="fade-right">
        <button
          onClick={handleRoute}
          className="text-[23px] w-[50%] md:w-[20%] hover:bg-primary hover:brightness-[1.5] bg-[#FF9900] duration-300 ease-in leading-[38px] font-[400] text-white py-[8px] px-[30px] rounded-[10px] m-auto"
        >
          GET STARTED
        </button>
      </div>
    </div>
  );
};

export default Corevalues;
