'use client'
import { FaQuoteLeft } from "react-icons/fa6";

export default function QuoteCard({index,quote}) {
  return (
    <>

            <div className=" relative px-3  card-box pb-10">
            <div className="quote flex items-center  justify-center" key={index}>
            <FaQuoteLeft className="text-white" size={25} />
            </div>
            <div className="pl-8 text-[15px]  leading-6 font-bold    z-3 relative !h-[150px] bg-primary text-white p-6">
              <p>{quote}</p>

           
            </div>
            </div>
 
    </>
  )
}
