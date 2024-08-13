"use client"
import React, { Fragment, useState, useRef } from "react";
import { Dialog, Transition } from '@headlessui/react'
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";

import { useAppDispatch, useAppSelector} from "@/app/Redux/lib/hooks";


import { X } from "lucide-react";
import { setImageCover, setImgdata } from "@/app/Redux/lib/features/product/productSlice";

const defaultSrc =
  "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";
const CropImage = () => {
  const [image, setImage] = useState();
  const [cropper, setCropper] = useState();
  const [isModalOpen, setIsModalOpen] = useState(false); // Define isModalOpen state
  const inputRef = useRef(null);

  
  const imgdata = useAppSelector((state) => state.api); 
  // Use the selector to get data from the state
  const dispatch = useAppDispatch();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    if (typeof cropper !== "undefined") {
      setImgdata(cropper.getCroppedCanvas().toDataURL());
    }
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onUpload = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const onChange = (e) => {
    dispatch(setImageCover(e.target.files[0]))
    showModal()
    e.preventDefault();
    let files;
    if (e.dataTransfer) {
      files = e.dataTransfer.files;
    } else if (e.target) {
      files = e.target.files;
    }
    const reader = new FileReader();
    reader.onload = () => {
    setImage(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  const onLoadImage = (event) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      showModal()
    }
    event.target.value = "";
  };

  const getimgdata = () => {
    if (typeof cropper !== "undefined") {
      dispatch(setImgdata(cropper.getCroppedCanvas().toDataURL()));
    }
    setIsModalOpen(false);
  };

 

 

  return (
    <>
      <button type="button" className="text-black " onClick={()=>onUpload()}>
        Upload picture
      </button>
      <input
        ref={inputRef}
        id="uploadimg"
        type="file"
        accept="image/*"
        style={{ display: "none" }}
        onChange={onChange}
      />

<Transition appear show={isModalOpen} as={Fragment}  onCancel={handleCancel}
        onOk={handleOk}
        cancelButtonProps={{
          children: "Custom cancel", 
        }}  width={1341}
        okButtonProps={{
          children: "Custom OK",
        }}  
        cancelText="Crop" className="w-full h-16 flex-wrap bg-[#03517e]"
        okText="Close" >
        <Dialog as="div" className=" relative z-10 " onClose={handleCancel}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed  inset-0 overflow-y-auto">
            <div className="flex min-h-full items-start mt-10 justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full md:max-w-[90%]  transform overflow-hidden rounded-2xl bg-[#03517e] text-white pb-5 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="md:flex  block gap-x-10 md:flex-row w-full py-4 pb-1 px-6"
                  >
                    <h3 className="text-xl font-bold">
                    Image Crop
                    </h3>
                    <p className="w-2/3 text-lg font-semibold">Use the highlighted square below to size the picture the way you like. When finished click crop button below.
</p>
{/* <i className="font-bold -end- size-[7px]">X</i> */}
<button type="button" className="absolute right-2 top-2" onClick={handleCancel}>
<X size={20} color="#222020" strokeWidth={3}  />
</button>
                 
                  </Dialog.Title>
                  <div className="border-b border-white relative bottom-0 w-full"></div>
                  <div className="mt-2 overflow-y-scroll">
                   <div className="md:flex md:flex-row p-10">
                    <div className="md:md:md:w-9/12 h-full">
                    <Cropper
              style={{ height: 350, width: "100%" ,float: "left" }}
              zoomTo={0}
              initialAspectRatio={1}
              preview=".img-preview"
              src={image}
              viewMode={1}
              minCropBoxHeight={10}
              minCropBoxWidth={10}
              background={false}
              responsive={true}
              autoCropArea={1}
              checkOrientation={false}
              onInitialized={(instance) => {
                setCropper(instance);
              }}
              guides={true}
            />
                    </div>
                    <div className=" md:w-3/12">
                  
       {/* crop start */}
       <div className="box"  style={{ width: "90%" ,float: "right" }}>
           
              <div
                className="img-preview border border-[red]"
                style={{ width: "90%", float: "right", height: "200px" }}
              />
            </div>
       {/* crop end */}
        </div>
         
                   </div>
                  </div>
                  <hr />

                  <div className="mt-4 justify-end flex pr-4 space-x-3 flex-wrap" style={{ width: "20%" ,float: "right" }} >
                
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-[#6c757d] hover:border-[#545b62] bg-[#6c757d] px-4 py-2 text-sm font-medium text-[#fff] hover:bg-[#5a6268] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={handleCancel}
                    >
                     Cancel
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border hover:border-[#1e7e34] border-[#28a745] bg-[#28a745] px-4 py-2 text-sm font-medium text-[#fff] hover:bg-[#218838] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={getimgdata}
                    >
                      Crop
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>   
      
      
    </>
  );
};

export default CropImage;
