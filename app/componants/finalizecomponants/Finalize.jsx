/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image1 from "next/image";
// import {customStyles} '@/app/Utils/styles';
import 'react-loading-skeleton/dist/skeleton.css'
import Loader from "../../assets/loader.gif";
import img from "../../assets/imges/bannerSectionImg.jpg";
import img2 from "../../assets/imges/FHB_Collage-2.png";
import img3 from "../../assets/imges/FHB_Collage-4.png";
import Modal from 'react-modal';
import "./style.css";
import { HexColorPicker } from "react-colorful";
import { X } from 'lucide-react';
import { useRouter } from "next/navigation";
import {customStyles} from '@/app/Utils/styles';
import {finalizeGetPdfService,finalizeGeneratePdfService, Colorchange} from '@/app/services/finalizeServicev2'
import Swal from "sweetalert2";
const Finalize = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [buttonLoader, setButtonLoader] = useState(false);
  const  [viewImages,setViewImages]= useState([])
  const [apiData,setApiData] = useState([])
  const [templateId,setTemplateId] = useState(0)
  const [color, setColor] = useState("#aabbcc");
  const [buttonLoader1, setButtonLoader1] = useState(false);
  const [sendEmailResponse,setSendEmailResponse] = useState("");
  const [link,setLink] = useState("");
  // Loader and
  const router = useRouter();
  // Family Mamber Two Svg Component start


const closeModal = () => {
  setIsModalOpen(false);
  setSendEmailResponse("")
};


// get pdf from server start
const getPdfFromServer= async(tid=3)=>{
  const result =await finalizeGetPdfService(tid)

  const excludedKeys = ['pdf_id', 'created_at', 'updated_at', 'template', 'id','combined_pdf'];
  const filteredData = {};

  if(result.status){
   
    if(result.data){
for (const key in result.data) {
    if (result.data[key] !== null && !excludedKeys.includes(key)) {
        filteredData[key] = result.data[key];
    }
}
    }
     setApiData(filteredData)
   
    setLoading(false)
  }
  else{
    setLoading(false)
    Swal.fire({
      icon: 'warning',
      title: 'PDF ',
      text: "Please Complate Your Pdf First"
    }
  );
  }
}
// get pdf from server end

// generate pdf start
const generatePdfFromServer = async()=>{
  setButtonLoader(true)
  // const result = await finalizeGeneratePdfService(templateId)

  setButtonLoader(false)
//   if(result.status ===true){
    window.open(link, '_blank');
  
//   }
//   else{
//     Swal.fire({
//       icon: 'error',
//       title: 'PDF ',
//       text: result.message

//     }
//   );
  
}
// generate pdf end
// useEffect(()=>{
//   generatePdfFromServer(templateId)
// },[templateId])

  useEffect(() => {

    getPdfFromServer();
 
  },[]);



const changeTemplate=(id)=>{
  setTemplateId(id)
  getPdfFromServer(id)
}

const handleSubmit = async () => {
  setButtonLoader1(true);
  const result = await Colorchange(color);  // Pass the current color to the API function
  setButtonLoader1(false);
  console.log("the response is",result)
  if (result.status) {
    setLink(result.pdf_link)
    finalizeGetPdfService(3)
    Swal.fire({
      icon: 'success',
      title: 'success',
      text: result.message,
    });
  } else {
    Swal.fire({
      icon: 'error',
      title: 'Change',
      text: result.message,
    });
  }
};


  return (
    <>
    {loading ? (
        <div className="grid grid-cols-1 p-2 md:h-[540px]">
          <Image1
            src={Loader}
            alt="Cover Page Image"
            width={"100%"}
            height={500}
            className="md:w-screen w-fit object-none md:h-screen"
          />
        </div>
      ) : (
    <div className="container m-auto p-5 md:pt-12">
    <div className="container m-auto p-5 md:pt-12">
      <div className="App p-4 max-w-md w-full h-[100%] mx-auto justify-center">
        <HexColorPicker color={color} onChange={setColor} className="justify-center" />

        <div className="value my-4 p-2 border-l-4" style={{ borderLeftColor: color }}>
          Current color is {color}
        </div>

        <div className="buttons flex flex-row space-x-2">
          <button
            className="bg-[#c6ad23] text-sm text-white rounded-lg py-2 px-4 hover:bg-gray-700 transition duration-300"
            onClick={() => setColor("#c6ad23")}
          >
            Choose gold
          </button>
          <button
            className="bg-[#556b2f] text-sm text-white rounded-lg py-2 px-4 hover:bg-gray-700 transition duration-300"
            onClick={() => setColor("#556b2f")}
          >
            Choose green
          </button>
          <button
            className="bg-[#207bd7] text-sm text-white rounded-lg py-2 px-4 hover:bg-gray-700 transition duration-300"
            onClick={() => setColor("#207bd7")}
          >
            Choose blue
          </button>

          <button
            className="bg-blue-600 text-sm text-white rounded-lg py-2 px-4 hover:bg-blue-700 transition duration-300"
            onClick={handleSubmit}
          >
            {buttonLoader1 ? "Loading..." : "Submit"}
          </button>
        </div>
      </div>
    </div>
        <div className="flex justify-center md:flex-row md:space-x-2 md:space-y-0 space-y-4 flex-col items-center py-3 w-full">
            <button
                onClick={() => router.push("/section")}
                className="text-[17px] md:w-3/12 hover:bg-[#21A7D0] duration-300 ease-in hover:ease-out leading-[30px] font-[300] text-[white] bg-[#0069D9] py-[5px] px-[10px] rounded-[4px] w-full"
            >
                Go Back Dashboard
            </button>
           
       <button
       type="button"
                //  onClick={sendPDFToServer}
                 onClick={()=>{
                  // setSendEmailResponse("")
                  // setIsModalOpen(true)}
                  generatePdfFromServer()
                }}
                // onClick={()=>router.push("/pdf_paages")}
                className="text-[17px] md:w-3/12 hover:bg-[#21A7D0] duration-300 ease-in hover:ease-out leading-[30px] p-1 font-[300] text-[white] bg-[#0069D9] py-[5px] px-[10px] rounded-[4px] w-full"
            >
                {buttonLoader ? "Loading..." : "Generate PDF"}
            </button>
            
            <div>
    </div>
    
        </div>
  <div className="container px-5 md:px-10 justify-center items-center m-auto">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-5">
    {apiData && Object.keys(apiData)?.map((item, index) => (
      <div key={index} className="border-primary border-[5px] w-full">
        <iframe src={apiData[item]} width="100%" height="600px"/>
      </div>
    ))}

    
  </div>
</div>

    </div>
    )}


{/* <Modal isOpen={isModalOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Help Modal">
        <div className="bg-white border-[2px]">
          <div className="bg-white m-auto overflow-y-hidden md:overflow-y-hidden flex-col justify-center items-center rounded-[10px]">
            <div className="">
              <>
                <div className=" p-4  justify-between flex">
                     <h1 className="text-lg">Sent Pdf File</h1>
                  <p className="text-2xl mr-3 text-end">
                    <X className="cursor-pointer" onClick={closeModal} />
                  </p>
                </div>
                <hr />
                <div className=' py-4 m-auto px-4 md:px-20'>
                  {sendEmailResponse ==="" ?
                <form onSubmit={sendEmailForm} className="flex flex-col space-y-2 ">
                  <div>
                <label
           
           className="block mb-2 text-sm font-medium text-[#494949]"
         >
          Email
         </label>
         <input
           type="text"
           name="email"
         
           
           className="py-4 px-3 bg-[#E4E6E3] w-full border-none  placeholder:text-[#494949] focus:text-[#494949] focus:border-none outline-none focus:outline-none focus:ring-0 font-imprima"
           placeholder="Enter Email"
           required
          
         />
         </div>
         <div className="text-center ">
          <button
          type="submit"
          // onClick={()=>setSendEmailResponse("pdf Sentto your email")}
          
          className="text-[17px] md:w-3/12 hover:bg-[#21A7D0] duration-300 ease-in hover:ease-out leading-[30px] p-1 font-[300] text-[white] bg-[#0069D9] py-[5px] px-[10px] rounded-[4px] w-full">Sent Pdf</button>
         </div>
                </form>
                :
                <h1 className="text-lg text-center font-medium">{sendEmailResponse}</h1>}
                </div>

              </>
            </div>
          </div>
        </div>
      </Modal> */}
    </>
  );
};

export default Finalize;