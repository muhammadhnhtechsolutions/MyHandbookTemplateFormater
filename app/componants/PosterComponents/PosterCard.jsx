import React from 'react'
// import image from 'next/image'
export default function PosterCard(icon) {
  return (
    <>
        <div className="bg-primary gap-x-4 rounded-lg p-4  flex">
       
       <div className='w-1/4 h-full'>
       <div className=" w-[80px] h-[80px] flex items-center justify-center rounded-full bg-white">
  
       <img src={icon} alt="Family Handbook Compass" className="relative left-1 bottom-1" width={50} height={50} />
       </div>
       </div>
        <div  className='w-3/ h-full space-y-2'>
          <h2 className="font-bold text-lg text-white">Memorializes Family Purpose & Direction</h2>
          <p className="text-sm text-white">Provides clarity on family values, goals, and expectations, guiding daily decisions and actions.</p>
        </div>
        </div>
    </>
  )
}
