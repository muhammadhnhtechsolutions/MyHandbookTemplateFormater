'use client'
import { X } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import img from '../../assets/imges/upload.jpg'
const ModalOpen = ({onClick}) => {
  return (
    <div className=' container m-auto rounded-lg py-2 flex-col flex  bg-white justify-center items-center'>
        <div className='flex w-full justify-between px-3  '>
<div>
<p className='text-[20px] '>Logo Maker</p>
</div>
<div>
<X className='cursor-pointer' onClick={onClick}/>
</div>

        </div>
<hr />
<div>
  <Image src={img} alt=''  className='w m-auto' />
</div>
      
    </div>
  )
}

export default ModalOpen
