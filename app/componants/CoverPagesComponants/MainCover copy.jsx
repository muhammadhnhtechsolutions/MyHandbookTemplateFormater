/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect, Suspense,useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import "react-image-crop/dist/ReactCrop.css";
import Modal from "react-modal";
// import Loader from "../../componants/Layout/Loader";

import { X } from "lucide-react";
import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { IoInformationCircleSharp } from "react-icons/io5";
import CropImage from "./CropImage";
import Editor from "./Editor";
import { useAppDispatch, useAppSelector } from "@/app/Redux/lib/hooks";
import stepImage from "../../assets/imges/image 9.png";
import Loader from "../../componants/Layout/Loader";
import {toUrlImageToBase64 } from "@/app/Utils/urlToBase64";

import {
  setClickedButtonIndex,
  setCovercon,
  setEditorEnabled,
  setFamilyName,
  setImgdata,
  setImageCover,
  setSelectedValues5,
} from "@/app/Redux/lib/features/product/productSlice";
import {
  CoverSafeServices,
  CoverpageSevices,
  FamilyCoverService,
} from "@/app/services/CoverpageApi";
import { toast } from "react-toastify";
import { isFirstLetterVowel } from "../../../app/Utils/checkVowel";
import { jsPDF } from "jspdf";

const textusa = (familyName = "") => {

  const placeholder = "<< Last Name >>";
  const nameToUse = String(familyName).trim(); // Ensure familyName is a string and trim whitespace
  const isVowel = isFirstLetterVowel(nameToUse);

  if (!nameToUse) {
    // Handle the case when nameToUse is empty
    return [
      "What we value, What we stand for and Who we are",
      "Things we must always remember",
      "guide to being"  ,
      "All things  Family",
      "Skip for now",
      "Create Your Own",
    ];
  }
  // Check if the first letter of nameToUse is a vowel

  if (!nameToUse) {
    // Handle the case when nameToUse is empty
    return [
      "What we value, What we stand for and Who we are",
      "Things we must always remember",
      "guide to being"  ,
      "All things  Family",
      "Skip for now",
      "Create Your Own",
    ];
  }
  return [
    "What we value, What we stand for and Who we are",
    "Things we must always remember",
    `${isVowel ? "An" : "A"} ${nameToUse}'s guide to being ${
      isVowel ? "an" : "a"
    } ${nameToUse}`,
    `All things ${nameToUse} Family`,
    "Skip for now",
    "Create Your Own",
  ];
};


const MainCover = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [charLimit, setCharLimit] = useState("");
 const [loadingText, setLoadingText] = useState(false);
  useEffect(() => {
    // Function to handle resize
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const helpcustomStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
    content: {
      top: "45%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      background: "transparent",
      overflow: "visible",
      width: isMobile ? "100%" : "50%",
      borderradius: "10px",
    },
  };
  const covercon = useAppSelector((state) => state?.api?.covercon);
  const clickedButtonIndex = useAppSelector(
    (state) => state?.api?.clickedButtonIndex
  );
  const selectedValues5 = useAppSelector(
    (state) => state?.api?.selectedValues5
  );
  // const disable = useAppSelector((state) => state?.api?.disable);

  const dispatch = useAppDispatch();
  const [selectedText, setSelectedText] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const imgdata = useAppSelector((state) => state.api.imgdata);
  const imagecover = useAppSelector((state) => state.api.imagecover);
  const familyName = useAppSelector((state) => state.api.familyName);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  // const [familyName, setFamilyName] = useState("");
  const [apiData, setApiData] = useState([]);
  const [isChecked, setIsChecked] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [showInitialButtons, setShowInitialButtons] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);
  const [helpisModalOpen, sethelpIsModalOpen] = useState(false);
  const [data, setData] = useState([]);

  const helpopenModal = () => {
    sethelpIsModalOpen(true);
  };

  const helpcloseModal = () => {
    sethelpIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  const svgRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };
  const downloadImage = (format) => {
    const svgElement = svgRef.current;
  
    // Define a higher resolution for the canvas
    const scale = 2; // Adjust this scale as needed
    const width = svgElement.clientWidth * scale;
    const height = svgElement.clientHeight * scale;
  
    // Create a canvas element with higher resolution
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
  
    // Convert SVG to data URL
    const svgData = new XMLSerializer().serializeToString(svgElement);
  
    // Create an image element (from the browser's Image object)
    const img = new window.Image();
    img.onload = () => {
      // Draw SVG onto canvas with scale
      ctx.drawImage(img, 0, 0, width, height);
  
      // Convert canvas to data URL based on selected format
      if (format === 'svg') {
        const imageDataURL = 'data:image/svg+xml,' + encodeURIComponent(svgData);
        const link = document.createElement('a');
        link.download = `image.${format}`; // Adjust file name based on format
        link.href = imageDataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else if (format === 'png' || format === 'jpeg') {
        const imageDataURL = canvas.toDataURL(`image/${format}`);
        const link = document.createElement('a');
        link.download = `image.${format}`; // Adjust file name based on format
        link.href = imageDataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } else if (format === 'pdf') {
        // Adjust the PDF dimensions to fit the image
        const pdfWidth = width / 2.83; // Convert from pixels to mm (72 dpi)
        const pdfHeight = height / 2.83; // Convert from pixels to mm (72 dpi)
        const pdf = new jsPDF({
          unit: 'mm', // Use millimeters for PDF units
          format: [pdfWidth, pdfHeight], // Set PDF dimensions in mm
          orientation: width > height ? 'landscape' : 'portrait' // Landscape if width > height
        });
  
        // Add the image to the PDF
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('document.pdf');
      }
    };
  
    // Set the source of the image element to the SVG data
    img.src = 'data:image/svg+xml,' + encodeURIComponent(svgData);
  }
  const handleInputChange = (index, event) => {
    const { value } = event.target;
    const newNames = [familyName];
    newNames[index] = value;
    dispatch(setFamilyName(newNames));
  };


  const handleButtonClick = (buttonText, index) => {
    setSelectedText(buttonText); // Update the selected text state
    setSelectedIndex(index); // Update the selected text state
    if (buttonText === "Create Your Own") {
      dispatch(setClickedButtonIndex("Create Your Own"));
      dispatch(setEditorEnabled(false));
      dispatch(setCovercon(covercon));
      dispatch(setSelectedValues5(null));
    } else if (buttonText === "Skip for now") {
      dispatch(setClickedButtonIndex("Skip for now"));
      dispatch(setSelectedValues5(null));
      dispatch(setEditorEnabled(true));
      dispatch(setCovercon(" "));
    } else {
      dispatch(setSelectedValues5(buttonText));
      dispatch(setClickedButtonIndex(buttonText));
      dispatch(setEditorEnabled(true));
      dispatch(setCovercon(" "));
    }
  };

 

  const [textValue, setTextValue] = useState("");

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    const nameToUse = familyName ? familyName : "Sample";
    const isVowel = isFirstLetterVowel(nameToUse);

    if (e.target.checked) {
      setTextValue(`The Most Important Things ${isVowel ? "An" : "A"}
${nameToUse} Needs To Know About Being ${isVowel ? "an" : "a"} ${nameToUse}`);
    } else {
      setTextValue("");
    }
  };
  const showErrorToast = (message) => {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-top-left",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "3000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
      color: "red",
    };
    toastr.error(message);
  };

  const handlePreviewClick = () => {
    NewNotes();
    if (!imgdata || !imagecover) {
      
      showErrorToast("Image required");
    } else {
      setShowButtons(true);
      setShowInitialButtons(false);
    }
  };

  const handleGoBackToEditClick = () => {
    // Toggle the visibility of initial buttons when Go Back To Edit is clicked
    // dispatch(setDisable(false));
    // dispatch(setDisable(false));
    setShowButtons(false);
    setShowInitialButtons(true); // Show initial buttons
  };

  // const handleFileChange = (event) => {
  //   const selectedFile = event.target.files[0];
  // };

  const NewNote = async () => {
    setLoadingText(true);
    try{
    const reuslt = await CoverSafeServices(
      familyName,
      selectedValues5,
      covercon,
      isChecked,
      textValue,
      ""
    );


    if (reuslt.status) {
      router.push("/section");
      toast.success(reuslt?.message);
    } else {
      toast.error(reuslt?.message);
    }
  } catch (error) {
    console.error('Error fetching note:', error);
    toast.error('Failed to fetch note.');
  } finally {
    setLoadingText(false);
  }
};

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsModalOpen(false);
    }, 600);

    return () => clearTimeout(timeoutId);
  }, []);

  const NewNotes = async () => {
    
   
      const result = await CoverpageSevices(imagecover);
  
      if (result.status) {
        // Uncomment the line below if you want to show a success message
        // toast.success(result?.message);
      } else {
        toast.error(result?.message);
      }
    }
    
    const handleEditorData = async () => {
      try {
        const result = await FamilyCoverService();
        if (result.status) {
          setApiData(result);
        
          dispatch(setImageCover(result.image))
          dispatch(setFamilyName([result.lastname_heading]));
          dispatch(setFamilyName([result.lastname]));
  
          if (result?.sentence) {
            setIsChecked(result.sentence);
            setTextValue(result.sentence);
          }
          setSelectedText(result?.sub_title);
          const texts = textusa(result?.lastname_heading);
          const index = texts.findIndex(text => text == result.sub_title);
         
          dispatch(setSelectedValues5(result?.sub_title));
          dispatch(setClickedButtonIndex(result?.sub_title));
  
          // if (!selectedValues5) {
          //   dispatch(setCovercon(result?.sub_title));
          // }
  
          if (index !== -1) {
            setSelectedIndex(index);
          } else {
            setSelectedIndex(5)
            dispatch(setClickedButtonIndex("Create Your Own"));
            dispatch(setEditorEnabled(false));
            dispatch(setCovercon(result?.sub_title));
            dispatch(setSelectedValues5(null));
          }

          // Check if result.image exists before setting imgdata
          if (result.image) {
            toUrlImageToBase64(result.image, function(myBase64) {
             
              dispatch(
                setImgdata(myBase64)
              );
             
          });
            
          } else {
            console.warn("Image URL not found in API response");
            // Optionally handle the case where image URL is not available
          }
        } else {
          console.error(
            "Failed to fetch data from FamilyCoverService:",
            result.error
          );
          // Optionally handle error case if needed
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        // Handle network or other errors
      }
    };
  
  useEffect(() => {
    dispatch(setFamilyName(""));
    handleEditorData();
  }, []);

  const texts = textusa(familyName);
  const checkCharacterCount = (event) => {
   
    if (familyName[0]?.length>=35 && event.key !== "Backspace") {
        setCharLimit("booktitle")
      event.preventDefault();
    }
    else{
      setCharLimit("")
    }
  };
  return (
    <>{loading? <Loader/>:null}
    <div className="container m-auto p-5 pt-0 md:pt-12 ">
      <div className="w-full flex flex-col items-center  md:flex-row md:space-x-5 md:space-y-0 space-y-5 rounded p-5">
        <div className="w-full overflow-y-scroll overflow-x-hidden md:w-8/12  md:h-[550px]  ">
          <div
        
          >
      <form action="" className="montserrat">
  {/* Step 1 */}
  <div className="flex flex-col md:flex-row items-center py-2">
    <div className="flex flex-col items-center mr-4">
      <Image src={stepImage} alt="Step 1" className="w-16 h-16 rounded-full bg-primary" />
    </div>
    <div className="w-full md:w-auto">
      <p className="font-bold text-[24px] montserrat text-[#FDA513]">Step 1</p>
      <p className="leading-6 text-[18px] font-thin pl-0">Enter your family name in the box below</p>
      <input 
        className="w-full border-black rounded-s h-8 pl-2 border-[2px] mt-2"
        type="text"
        placeholder="Family Name"
        onKeyDown={checkCharacterCount}
        value={familyName[0]}
        onChange={(event) => handleInputChange(0, event)}
      />
      {charLimit === "booktitle" && (
        <span className="text-red-500 text-xs">Limit exceeded, only 35 characters allowed</span>
      )}
    </div>
  </div>

  {/* Step 2 */}
  <div className="flex flex-col md:flex-row items-center py-2">
    <div className="flex flex-col items-center mr-4">
      <Image src={stepImage} alt="Step 2" className="lg:w-[130px] w-16 h-16 rounded-full bg-primary " />
    </div>
    <div className="w-full md:w-auto montserrat">
      <p className="font-bold text-[24px] montserrat text-[#FDA513] pl-2">Step 2</p>
      <p className="leading-6 text-[18px] font-thin pl-2">
        Every great book has a subtitle. Choose one of the 5 below OR click "Create your own" to enter your own subtitle in the editor box.
      </p>
    </div>
  </div>

  {/* Subtitle Options */}
  <div className="w-full items-center py-2 md:ml-[53px]">
    <div className="w-full">
      <div className="flex flex-col space-y-2 py-2 m-auto">
        {texts?.map((text, index) => {
          return(
          <label key={index} className="flex items-center space-x-2">
            <input
              onChange={() => handleButtonClick(text, index)}
              checked={index === selectedIndex}
              id="subtitle-checkbox"
              type="radio"
              name="subtitle"
              className="border-[#FDA513]"
            />
            <span onClick={() => handleButtonClick(text, index)}>{text}</span>
          </label>
        )})}
      </div>
    </div>
    <div>
    <p className="mx-0 font-bold montserrat text-[15px] leading-7 p-3 text-[#505050]">Editor</p>
    <div className="w-full sm:w-[70%] min-h-[100px]   montserrat border-primary border-[4px] rounded mx-0">
      <div>
        <Editor />
      </div>
    </div>
  </div>
  </div>

  {/* Step 3 */}
  <div className="flex flex-col md:flex-row items-center py-2">
    <div className="flex flex-col items-center mr-4">
      <Image src={stepImage} alt="Step 3" className="w-16 h-16 rounded-full bg-primary object-cover" />
    </div>
    <div className="w-full md:w-auto">
      <p className="font-bold text-[24px] montserrat text-[#FDA513]">Step 3</p>
      <p className="leading-6 text-[18px] font-thin pl-0">Do you want to add below statement as your second subtitle.</p>
      <div className="flex items-center py-3 montserrat">
        <input
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={isChecked}
          className="rounded-full border-[#FDA513]"
          id="subtitle-checkbox"
        />
        <p className="mx-2 flex flex-wrap items-center">
  The Most Important Things {isFirstLetterVowel(familyName) ? "An" : "A"}
  <span className="svg-lastname whitespace-nowrap ml-1">
    {familyName ? familyName : "Sample"}
  </span>
  &nbsp;Needs To Know About Being&nbsp;
  <span className="svg-lastname whitespace-nowrap">
    {isFirstLetterVowel(familyName) ? "an" : "a"} {familyName}
  </span>
</p>

      </div>
    </div>
  </div>

  {/* Step 4 */}
  <div className="flex flex-col md:flex-row items-center py-2">
    <div className="flex flex-col items-center mr-4">
      <Image src={stepImage} alt="Step 4" className="w-16 h-16 rounded-full bg-primary object-cover" />
    </div>
    <div className="w-full md:w-auto">
      <p className="font-bold text-[24px] montserrat text-[#FDA513] pl-2">Step 4</p>
      <p className="leading-6 text-[18px] font-thin pl-2">Choose a family picture for your Handbook Cover.</p>
    </div>
  </div>

  {/* File Upload */}
  <div className="space-y-4 text-center w-full">
    <input
      type="file"
      accept="image/*"
      style={{ display: "none" }}
      id="upload-picture"
      // onChange={handleFileChange}
    />
    <label
      htmlFor="upload-picture"
      className="bg-[#FDA513] md:h-[59px] h-[50px] md:w-[180px] w-full md:mx-[15px] md:text-[18px] text-[16px] leading-4 montserrat font-normal text-[#000] py-4 px-7 rounded inline-flex items-center cursor-pointer"
    >
      <CropImage />
    </label>
    <br />
    {imgdata && imagecover && (
      <div className="w-24">
        <Image
          src={imgdata}
          height={600}
          width={500}
          alt="cropped"
        />
      </div>
    )}
  </div>
</form>


 </div>
 </div>

        <div className="w-full md:w-6/12 montserrat">
          <>
            <div className="flex justify-end items-end space-x-5   py-3 mb-7">
              <div className="w-full flex flex-col md:items-end">
                <p className="text-[16px] font-[700] leading-[19px]">
                  Have a question?
                </p>
                <p className="text-[16px] font-[700] leading-[19px]">
                  Watch a help video
                </p>
              </div>
             
                <div
                   onClick={helpopenModal}
                className="cursor-pointer flex justify-center items-center h-[40px] w-[200px] abbbbb bg-[#FDA513]  leading-[23px] font-[400] rounded-3xl  text-black"
              >
                <p className="text-[16px] font-bold montserrat  text-black">Help</p>

                {/* <IoInformationCircleSharp /> */}
              </div>
            </div>
            <div className="w-full lg:h-[550px]  h-full overflow-x-scroll border-primary  border-[6px] rounded">
              {/* <Image src={img1}  alt='' className='' /> */}
              <svg
                ref={svgRef}
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 595.3 841.9"
                style={{
                  enableBackground: "new 0 0 595.3 841.9",
                  userSelect: "none",
                }}
                xmlSpace="preserve"
                // {...props}
              >
                <style type="text/css">
                  {
                    "\n\t.st0{fill:#FFFFFF;color:#FFFFFF;}\n\t.st1{opacity:0.79;fill:#FFFFFF;color:#FFFFFF;}\n\t.st2{fill:none;stroke:#000000;stroke-width:5;stroke-miterlimit:10;}\n\t.st3{fill:#165E86;color:#165E86;}\n\t.st4{font-family:'TimesNewRomanPS-BoldMT';}\n\t.st5{font-size:44.5471px;}\n\t.st6{font-family:'Staatliches-Regular';}\n\t.st7{font-size:25.6123px;}\n\t.st8{font-family:'Kalam-Regular';}\n\t.st9{font-size:24.25px;}\n\t.st10{font-family:'KaushanScript-Regular';}\n\t.st11{font-size:22.6065px;}\n\t.st12{fill:#0B8384;color:#0B8384;}\n\t.st13{fill:none;stroke:#000000;stroke-width:2;stroke-miterlimit:10;}\n\t.st14{fill:#00416C;color:#00416C;}\n\t.st15{fill:#0071BC;color:#0071BC;}\n\t.st16{fill:#000205;color:#000205;}\n\t.st17{fill:none;stroke:#155D85;stroke-width:3;stroke-miterlimit:10;}\n"
                  }
                </style>
                <image
                  style={{ overflow: "visible", position:"absolute", width:"100%"}}
                 
                  id="iStock-911895086_xA0_Image"
                  xlinkHref="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4QBqRXhpZgAASUkqAAgAAAADABIBAwABAAAAAQAAADEBAgARAAAAMgAAAGmHBAABAAAARAAAAAAAAABTaG90d2VsbCAwLjMwLjE0AAACAAKgCQABAAAAIgIAAAOgCQABAAAAPAMAAAAAAAD/4Qn0aHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLwA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA0LjQuMC1FeGl2MiI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIiB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIgZXhpZjpQaXhlbFhEaW1lbnNpb249IjU0NiIgZXhpZjpQaXhlbFlEaW1lbnNpb249IjgyOCIgdGlmZjpJbWFnZVdpZHRoPSI1NDYiIHRpZmY6SW1hZ2VIZWlnaHQ9IjgyOCIgdGlmZjpPcmllbnRhdGlvbj0iMSIvPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDw/eHBhY2tldCBlbmQ9InciPz7/2wBDAAMCAgMCAgMDAwMEAwMEBQgF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"
                  
                />
                <g id="Rectangle_2">
              {/* border */}
  <g id="Rectangle_2">
    <g>
      <path
        className="st0"
        
        d="M466.6,331.9v222.4H142.9V331.9H466.6 M472.6,325.9H136.9v234.4h335.6V325.9L472.6,325.9z"
      />
    </g>
  </g>


                </g>
                <g>
                  <g>
                    <path
                      className="st0"
                      d="M567.1,834.2v-0.6h1.4v-9h-1.6V824h2.3v9.6h1.4v0.6H567.1z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      className="st0"
                      d="M25.8,835.8v-0.6h1.4v-9.8h-3.7v1.8h-0.7v-2.4h9.5v2.4h-0.7v-1.8h-3.7v9.8h1.3v0.6H25.8z"
                    />
                    <path
                      className="st0"
                      d="M33.5,835.8v-0.6h1.3v-10.5h-1.3V824h2v6.7l-0.1,0.7c0.2-0.5,0.6-0.9,1.1-1.2c0.5-0.3,1.1-0.4,1.7-0.5 c0.6,0,1.1,0.2,1.5,0.5c0.4,0.3,0.6,0.7,0.6,1.3v3.6h1.3v0.6h-3.3v-0.6h1.3v-3.5c0-0.3-0.2-0.6-0.4-0.9s-0.6-0.4-1.1-0.4 c-0.4,0-0.7,0.1-1,0.2c-0.3,0.1-0.6,0.3-0.8,0.4c-0.3,0.2-0.4,0.4-0.6,0.7c-0.1,0.3-0.2,0.6-0.2,0.9v2.6h1.3v0.6H33.5z"
                    />
                    <path
                      className="st0"
                      d="M47.4,835.6c-0.4,0.1-0.8,0.2-1.2,0.2c-0.5,0-0.9-0.1-1.3-0.2c-0.4-0.2-0.8-0.4-1.1-0.7 c-0.3-0.3-0.5-0.6-0.7-1c-0.2-0.4-0.3-0.8-0.3-1.2c0-0.4,0.1-0.8,0.3-1.2c0.2-0.4,0.4-0.7,0.7-1c0.3-0.3,0.7-0.5,1.1-0.7 c0.4-0.2,0.8-0.2,1.3-0.2c0.4,0,0.7,0.1,1,0.2s0.6,0.3,0.9,0.5c0.2,0.2,0.5,0.4,0.6,0.7c0.2,0.3,0.3,0.6,0.4,0.9 c-0.9,0.3-1.8,0.6-2.7,1c-0.9,0.3-1.8,0.6-2.7,1c0.2,0.4,0.5,0.7,0.9,1c0.4,0.3,0.9,0.4,1.4,0.4c0.4,0,0.7-0.1,1-0.2 c0.3-0.1,0.6-0.3,0.8-0.5l0.4,0.5C48.1,835.3,47.7,835.5,47.4,835.6z M44.9,830.6c-0.4,0.2-0.7,0.4-0.9,0.7 c-0.2,0.3-0.4,0.6-0.5,0.9c-0.1,0.3-0.1,0.7,0,1c0.8-0.3,1.5-0.6,2.3-0.8c0.8-0.3,1.5-0.6,2.3-0.8c-0.2-0.4-0.5-0.6-0.8-0.9 s-0.8-0.3-1.2-0.3C45.7,830.4,45.3,830.5,44.9,830.6z"
                    />
                    <path
                      className="st0"
                      d="M55.5,835.8v-0.6h1v-9.8h-1v-0.6h3.6c0.4,0,0.7,0.1,1.2,0.2c0.4,0.1,0.8,0.3,1.2,0.5c0.4,0.2,0.7,0.5,0.9,0.9 c0.3,0.4,0.4,0.8,0.4,1.3c0,0.7-0.2,1.4-0.7,1.9c-0.4,0.5-1.1,0.8-1.9,1l2.4,4.6h1.5v0.6h-1.9l-2.7-5.2c-0.1,0-0.3,0-0.4,0 s-0.3,0-0.4,0h-1.4v4.6h1.7v0.6H55.5z M57.2,830H59c0.6,0,1.1-0.1,1.5-0.2s0.7-0.3,0.9-0.6c0.2-0.2,0.4-0.5,0.5-0.7 c0.1-0.3,0.1-0.5,0.1-0.8c0-0.3-0.1-0.6-0.2-0.9c-0.2-0.3-0.4-0.5-0.6-0.7c-0.3-0.2-0.6-0.4-1-0.5s-0.8-0.2-1.2-0.2h-1.8V830z"
                    />
                    <path
                      className="st0"
                      d="M71.4,835.8v-0.6c0-0.1,0-0.2,0-0.4c0-0.1,0-0.2,0-0.4c-0.1,0.2-0.2,0.4-0.4,0.5c-0.2,0.2-0.4,0.3-0.6,0.5 c-0.2,0.1-0.5,0.3-0.8,0.3s-0.6,0.1-1,0.1c-0.5,0-0.9-0.1-1.3-0.2c-0.4-0.2-0.8-0.4-1.1-0.7c-0.3-0.3-0.5-0.6-0.7-1 c-0.2-0.4-0.3-0.8-0.3-1.2c0-0.4,0.1-0.8,0.3-1.2c0.2-0.4,0.4-0.7,0.7-1c0.3-0.3,0.7-0.5,1.1-0.7c0.4-0.2,0.8-0.2,1.3-0.2 c0.7,0,1.2,0.1,1.7,0.4s0.8,0.7,1,1.1c0-0.2,0-0.4,0-0.7c0-0.2,0-0.5,0.1-0.7H72v5.3h1.3v0.6H71.4z M67.5,830.6 c-0.3,0.1-0.6,0.3-0.8,0.5c-0.2,0.2-0.4,0.5-0.6,0.8s-0.2,0.6-0.2,0.9c0,0.4,0.1,0.7,0.2,1c0.1,0.3,0.4,0.6,0.6,0.8 c0.2,0.2,0.5,0.4,0.8,0.5c0.3,0.1,0.6,0.2,1,0.2c0.4,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.8-0.5c0.3-0.2,0.4-0.5,0.6-0.8 c0.1-0.3,0.2-0.6,0.2-1s-0.1-0.7-0.2-1c-0.1-0.3-0.3-0.6-0.6-0.8c-0.3-0.2-0.5-0.4-0.9-0.5c-0.3-0.1-0.7-0.2-1-0.2 C68.2,830.4,67.9,830.4,67.5,830.6z"
                    />
                    <path
                      className="st0"
                      d="M80.6,835.8v-0.6c0-0.1,0-0.2,0-0.4c0-0.1,0-0.2,0-0.4c-0.1,0.2-0.2,0.4-0.4,0.5c-0.2,0.2-0.4,0.3-0.6,0.5 c-0.2,0.1-0.5,0.3-0.8,0.3s-0.6,0.1-1,0.1c-0.5,0-0.9-0.1-1.3-0.2c-0.4-0.2-0.8-0.4-1.1-0.7c-0.3-0.3-0.5-0.6-0.7-1 c-0.2-0.4-0.3-0.8-0.3-1.2c0-0.4,0.1-0.8,0.3-1.2c0.2-0.4,0.4-0.7,0.7-1c0.3-0.3,0.7-0.5,1.1-0.7c0.4-0.2,0.8-0.2,1.3-0.2 c0.3,0,0.6,0,0.9,0.1c0.3,0.1,0.6,0.2,0.8,0.3c0.2,0.1,0.4,0.3,0.6,0.5c0.1,0.2,0.3,0.3,0.4,0.5c0-0.3,0-0.5,0-0.7 c0-0.2,0-0.4,0-0.7v-5.2h-1.2V824h1.9v11.2h1.3v0.6H80.6z M76.8,830.6c-0.3,0.1-0.6,0.3-0.8,0.5c-0.2,0.2-0.4,0.5-0.6,0.8 c-0.1,0.3-0.2,0.6-0.2,0.9c0,0.3,0.1,0.7,0.2,1c0.1,0.3,0.3,0.6,0.6,0.8c0.2,0.2,0.5,0.4,0.8,0.5c0.3,0.1,0.7,0.2,1,0.2 c0.4,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.8-0.5c0.3-0.2,0.4-0.5,0.6-0.8c0.1-0.3,0.2-0.6,0.2-1s-0.1-0.7-0.2-1 c-0.1-0.3-0.3-0.6-0.6-0.8c-0.2-0.2-0.5-0.4-0.8-0.5c-0.3-0.1-0.7-0.2-1-0.2C77.4,830.4,77.1,830.4,76.8,830.6z"
                    />
                    <path
                      className="st0"
                      d="M83.7,835.8v-0.6H85v-4.7h-1.3v-0.6h2v5.3H87v0.6H83.7z M85.7,828.2c-0.1,0.1-0.2,0.1-0.4,0.1 c-0.1,0-0.3,0-0.4-0.1c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.1,0.1-0.3,0.2-0.4c0.1-0.1,0.2-0.1,0.4-0.1c0.1,0,0.3,0,0.4,0.1 c0.1,0.1,0.2,0.2,0.2,0.4C85.9,827.9,85.8,828.1,85.7,828.2z"
                    />
                    <path
                      className="st0"
                      d="M94.3,835.8v-0.6c0-0.1,0-0.2,0-0.4c0-0.1,0-0.2,0-0.4c-0.1,0.2-0.2,0.4-0.4,0.5c-0.2,0.2-0.4,0.3-0.6,0.5 c-0.2,0.1-0.5,0.3-0.8,0.3s-0.6,0.1-1,0.1c-0.5,0-0.9-0.1-1.3-0.2c-0.4-0.2-0.8-0.4-1.1-0.7c-0.3-0.3-0.5-0.6-0.7-1 c-0.2-0.4-0.3-0.8-0.3-1.2c0-0.4,0.1-0.8,0.3-1.2c0.2-0.4,0.4-0.7,0.7-1c0.3-0.3,0.7-0.5,1.1-0.7c0.4-0.2,0.8-0.2,1.3-0.2 c0.7,0,1.2,0.1,1.7,0.4s0.8,0.7,1,1.1c0-0.2,0-0.4,0-0.7c0-0.2,0-0.5,0.1-0.7h0.6v5.3h1.3v0.6H94.3z M90.5,830.6 c-0.3,0.1-0.6,0.3-0.8,0.5c-0.2,0.2-0.4,0.5-0.6,0.8s-0.2,0.6-0.2,0.9c0,0.4,0.1,0.7,0.2,1c0.1,0.3,0.4,0.6,0.6,0.8 c0.2,0.2,0.5,0.4,0.8,0.5c0.3,0.1,0.6,0.2,1,0.2c0.4,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.8-0.5c0.3-0.2,0.4-0.5,0.6-0.8 c0.1-0.3,0.2-0.6,0.2-1s-0.1-0.7-0.2-1c-0.1-0.3-0.3-0.6-0.6-0.8c-0.3-0.2-0.5-0.4-0.9-0.5c-0.3-0.1-0.7-0.2-1-0.2 C91.1,830.4,90.8,830.4,90.5,830.6z"
                    />
                    <path
                      className="st0"
                      d="M97.4,835.8v-0.6h1.3v-4.7h-1.2v-0.6h1.8l0,0.6c0,0.2,0,0.3,0,0.5s0,0.3,0,0.5c0.2-0.5,0.6-0.9,1.1-1.2 c0.5-0.3,1.1-0.5,1.7-0.5c0.6,0,1.1,0.2,1.5,0.5c0.4,0.3,0.6,0.7,0.6,1.3v3.6h1.3v0.6h-3.3v-0.6h1.3v-3.5c0-0.3-0.2-0.6-0.4-0.9 s-0.6-0.4-1.1-0.4c-0.4,0-0.7,0.1-1,0.2c-0.3,0.1-0.6,0.3-0.8,0.4c-0.3,0.2-0.4,0.4-0.6,0.7c-0.1,0.3-0.2,0.6-0.2,0.9v2.6h1.3v0.6 H97.4z"
                    />
                    <path
                      className="st0"
                      d="M108.2,835.8v-5.3h-1.5v-0.6h1.5V826h0.7v3.8h2v0.6h-2v4.6h1.4v0.6H108.2z"
                    />
                    <path
                      className="st0"
                      d="M117.2,835.8v-0.6h1.2v-9.8h-1.2v-0.6h8.3v2.4h-0.7v-1.8h-5.7v4.5h5.7v0.6h-5.7v4.6h1.5v0.6H117.2z"
                    />
                    <path
                      className="st0"
                      d="M132.8,835.8v-0.6c0-0.1,0-0.2,0-0.4c0-0.1,0-0.2,0-0.4c-0.1,0.2-0.2,0.4-0.4,0.5c-0.2,0.2-0.4,0.3-0.6,0.5 c-0.2,0.1-0.5,0.3-0.8,0.3s-0.6,0.1-1,0.1c-0.5,0-0.9-0.1-1.3-0.2c-0.4-0.2-0.8-0.4-1.1-0.7c-0.3-0.3-0.5-0.6-0.7-1 c-0.2-0.4-0.3-0.8-0.3-1.2c0-0.4,0.1-0.8,0.3-1.2c0.2-0.4,0.4-0.7,0.7-1c0.3-0.3,0.7-0.5,1.1-0.7c0.4-0.2,0.8-0.2,1.3-0.2 c0.7,0,1.2,0.1,1.7,0.4s0.8,0.7,1,1.1c0-0.2,0-0.4,0-0.7c0-0.2,0-0.5,0.1-0.7h0.6v5.3h1.3v0.6H132.8z M129,830.6 c-0.3,0.1-0.6,0.3-0.8,0.5c-0.2,0.2-0.4,0.5-0.6,0.8s-0.2,0.6-0.2,0.9c0,0.4,0.1,0.7,0.2,1c0.1,0.3,0.4,0.6,0.6,0.8 c0.2,0.2,0.5,0.4,0.8,0.5c0.3,0.1,0.6,0.2,1,0.2c0.4,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.8-0.5c0.3-0.2,0.4-0.5,0.6-0.8 c0.1-0.3,0.2-0.6,0.2-1s-0.1-0.7-0.2-1c-0.1-0.3-0.3-0.6-0.6-0.8c-0.3-0.2-0.5-0.4-0.9-0.5c-0.3-0.1-0.7-0.2-1-0.2 C129.7,830.4,129.4,830.4,129,830.6z"
                    />
                    <path
                      className="st0"
                      d="M135.9,835.8v-0.6h1.3v-4.7H136v-0.6h1.8l0,0.6c0,0.2,0,0.3,0,0.5s0,0.3,0,0.5c0.2-0.5,0.6-0.9,1.1-1.2 c0.5-0.3,1.1-0.5,1.7-0.5c0.6,0,1.1,0.1,1.4,0.4c0.4,0.3,0.6,0.7,0.6,1.1c0.3-0.5,0.6-0.8,1.1-1.1c0.5-0.3,1-0.4,1.7-0.4 c0.6,0,1.1,0.2,1.5,0.5c0.4,0.3,0.6,0.7,0.6,1.3v3.6h1.3v0.6h-3.3v-0.6h1.3v-3.5c0-0.3-0.2-0.6-0.4-0.9s-0.6-0.4-1.1-0.4 c-0.3,0-0.7,0.1-1,0.2c-0.3,0.1-0.6,0.3-0.8,0.4c-0.2,0.2-0.4,0.4-0.6,0.7s-0.2,0.5-0.2,0.8v2.7h1.3v0.6h-3.3v-0.6h1.3v-3.5 c0-0.3-0.2-0.6-0.4-0.9s-0.6-0.4-1.1-0.4c-0.4,0-0.7,0.1-1,0.2c-0.3,0.1-0.6,0.3-0.8,0.4c-0.3,0.2-0.4,0.4-0.6,0.7 c-0.1,0.3-0.2,0.6-0.2,0.9v2.6h1.3v0.6H135.9z"
                    />
                    <path
                      className="st0"
                      d="M150.1,835.8v-0.6h1.3v-4.7h-1.3v-0.6h2v5.3h1.3v0.6H150.1z M152.2,828.2c-0.1,0.1-0.2,0.1-0.4,0.1 c-0.1,0-0.3,0-0.4-0.1c-0.1-0.1-0.2-0.2-0.2-0.4c0-0.1,0.1-0.3,0.2-0.4c0.1-0.1,0.2-0.1,0.4-0.1c0.1,0,0.3,0,0.4,0.1 c0.1,0.1,0.2,0.2,0.2,0.4C152.3,827.9,152.3,828.1,152.2,828.2z"
                    />
                    <path
                      className="st0"
                      d="M154.6,835.8v-0.6h1.3v-10.5h-1.2V824h1.9v11.2h1.3v0.6H154.6z"
                    />
                    <path
                      className="st0"
                      d="M160.1,839.7v-0.6h1.5c0.3-0.6,0.6-1.1,0.9-1.6c0.3-0.5,0.6-1.1,0.9-1.6c-0.5-0.9-1-1.8-1.5-2.6 c-0.5-0.9-1-1.8-1.4-2.7h-1.3v-0.6h3.2v0.6h-1.1c0.4,0.8,0.8,1.6,1.3,2.4c0.4,0.8,0.8,1.6,1.2,2.3c0.4-0.8,0.8-1.5,1.2-2.3 c0.4-0.8,0.9-1.6,1.3-2.4h-1v-0.6h3v0.6h-1.2c-0.8,1.4-1.6,2.9-2.3,4.3s-1.6,2.8-2.3,4.3h1.1v0.6H160.1z"
                    />
                    <path
                      className="st0"
                      d="M174.5,835.8v-0.6h1.3v-9.8h-1.3v-0.6h3.4v0.6h-1.4v4.5h7.4v-4.5h-1.4v-0.6h3.4v0.6h-1.3v9.8h1.3v0.6h-3.4 v-0.6h1.4v-4.6h-7.4v4.6h1.4v0.6H174.5z"
                    />
                    <path
                      className="st0"
                      d="M193.2,835.8v-0.6c0-0.1,0-0.2,0-0.4c0-0.1,0-0.2,0-0.4c-0.1,0.2-0.2,0.4-0.4,0.5c-0.2,0.2-0.4,0.3-0.6,0.5 c-0.2,0.1-0.5,0.3-0.8,0.3s-0.6,0.1-1,0.1c-0.5,0-0.9-0.1-1.3-0.2c-0.4-0.2-0.8-0.4-1.1-0.7c-0.3-0.3-0.5-0.6-0.7-1 c-0.2-0.4-0.3-0.8-0.3-1.2c0-0.4,0.1-0.8,0.3-1.2c0.2-0.4,0.4-0.7,0.7-1c0.3-0.3,0.7-0.5,1.1-0.7c0.4-0.2,0.8-0.2,1.3-0.2 c0.7,0,1.2,0.1,1.7,0.4s0.8,0.7,1,1.1c0-0.2,0-0.4,0-0.7c0-0.2,0-0.5,0.1-0.7h0.6v5.3h1.3v0.6H193.2z M189.4,830.6 c-0.3,0.1-0.6,0.3-0.8,0.5c-0.2,0.2-0.4,0.5-0.6,0.8s-0.2,0.6-0.2,0.9c0,0.4,0.1,0.7,0.2,1c0.1,0.3,0.4,0.6,0.6,0.8 c0.2,0.2,0.5,0.4,0.8,0.5c0.3,0.1,0.6,0.2,1,0.2c0.4,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.8-0.5c0.3-0.2,0.4-0.5,0.6-0.8 c0.1-0.3,0.2-0.6,0.2-1s-0.1-0.7-0.2-1c-0.1-0.3-0.3-0.6-0.6-0.8c-0.3-0.2-0.5-0.4-0.9-0.5c-0.3-0.1-0.7-0.2-1-0.2 C190.1,830.4,189.8,830.4,189.4,830.6z"
                    />
                    <path
                      className="st0"
                      d="M196.3,835.8v-0.6h1.3v-4.7h-1.2v-0.6h1.8l0,0.6c0,0.2,0,0.3,0,0.5s0,0.3,0,0.5c0.2-0.5,0.6-0.9,1.1-1.2 c0.5-0.3,1.1-0.5,1.7-0.5c0.6,0,1.1,0.2,1.5,0.5c0.4,0.3,0.6,0.7,0.6,1.3v3.6h1.3v0.6h-3.3v-0.6h1.3v-3.5c0-0.3-0.2-0.6-0.4-0.9 s-0.6-0.4-1.1-0.4c-0.4,0-0.7,0.1-1,0.2c-0.3,0.1-0.6,0.3-0.8,0.4c-0.3,0.2-0.4,0.4-0.6,0.7c-0.1,0.3-0.2,0.6-0.2,0.9v2.6h1.3v0.6 H196.3z"
                    />
                    <path
                      className="st0"
                      d="M211.8,835.8v-0.6c0-0.1,0-0.2,0-0.4c0-0.1,0-0.2,0-0.4c-0.1,0.2-0.2,0.4-0.4,0.5c-0.2,0.2-0.4,0.3-0.6,0.5 c-0.2,0.1-0.5,0.3-0.8,0.3s-0.6,0.1-1,0.1c-0.5,0-0.9-0.1-1.3-0.2c-0.4-0.2-0.8-0.4-1.1-0.7c-0.3-0.3-0.5-0.6-0.7-1 c-0.2-0.4-0.3-0.8-0.3-1.2c0-0.4,0.1-0.8,0.3-1.2c0.2-0.4,0.4-0.7,0.7-1c0.3-0.3,0.7-0.5,1.1-0.7c0.4-0.2,0.8-0.2,1.3-0.2 c0.3,0,0.6,0,0.9,0.1c0.3,0.1,0.6,0.2,0.8,0.3c0.2,0.1,0.4,0.3,0.6,0.5c0.1,0.2,0.3,0.3,0.4,0.5c0-0.3,0-0.5,0-0.7 c0-0.2,0-0.4,0-0.7v-5.2h-1.2V824h1.9v11.2h1.3v0.6H211.8z M208,830.6c-0.3,0.1-0.6,0.3-0.8,0.5c-0.2,0.2-0.4,0.5-0.6,0.8 c-0.1,0.3-0.2,0.6-0.2,0.9c0,0.3,0.1,0.7,0.2,1c0.1,0.3,0.3,0.6,0.6,0.8c0.2,0.2,0.5,0.4,0.8,0.5c0.3,0.1,0.7,0.2,1,0.2 c0.4,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.8-0.5c0.3-0.2,0.4-0.5,0.6-0.8c0.1-0.3,0.2-0.6,0.2-1s-0.1-0.7-0.2-1 c-0.1-0.3-0.3-0.6-0.6-0.8c-0.2-0.2-0.5-0.4-0.8-0.5c-0.3-0.1-0.7-0.2-1-0.2C208.6,830.4,208.3,830.4,208,830.6z"
                    />
                    <path
                      className="st0"
                      d="M214.9,835.1h1.3v-10.5h-1.2V824h1.9v6.5c0,0.2,0,0.3,0,0.4c0,0.1,0,0.2,0,0.4c0.1-0.2,0.2-0.4,0.3-0.5 c0.2-0.2,0.4-0.3,0.6-0.5c0.2-0.1,0.5-0.2,0.8-0.3c0.3-0.1,0.6-0.1,0.9-0.1c0.5,0,0.9,0.1,1.3,0.2c0.4,0.2,0.8,0.4,1.1,0.7 c0.3,0.3,0.5,0.6,0.7,1c0.2,0.4,0.3,0.8,0.3,1.2c0,0.4-0.1,0.8-0.3,1.2c-0.2,0.4-0.4,0.7-0.7,1c-0.3,0.3-0.7,0.5-1.1,0.7 c-0.4,0.2-0.8,0.2-1.3,0.2c-0.3,0-0.7,0-1-0.1s-0.6-0.2-0.8-0.3c-0.2-0.1-0.4-0.3-0.6-0.5c-0.2-0.2-0.3-0.4-0.4-0.5 c0,0.1,0,0.3,0,0.4c0,0.1,0,0.2,0,0.4v0.6h-1.9V835.1z M218.4,830.6c-0.3,0.1-0.6,0.3-0.8,0.5c-0.2,0.2-0.4,0.5-0.6,0.8 c-0.1,0.3-0.2,0.6-0.2,0.9c0,0.3,0.1,0.7,0.2,1s0.3,0.6,0.6,0.8c0.2,0.2,0.5,0.4,0.8,0.5c0.3,0.1,0.7,0.2,1,0.2 c0.4,0,0.7-0.1,1-0.2c0.3-0.1,0.6-0.3,0.9-0.5c0.2-0.2,0.4-0.5,0.5-0.8s0.2-0.6,0.2-1s-0.1-0.7-0.2-1s-0.3-0.6-0.6-0.8 c-0.2-0.2-0.5-0.4-0.8-0.5c-0.3-0.1-0.7-0.2-1-0.2C219.1,830.4,218.8,830.4,218.4,830.6z"
                    />
                    <path
                      className="st0"
                      d="M228.8,835.6c-0.4,0.2-0.9,0.2-1.3,0.2c-0.5,0-0.9-0.1-1.3-0.2c-0.4-0.2-0.8-0.4-1.1-0.7 c-0.3-0.3-0.5-0.6-0.7-1c-0.2-0.4-0.3-0.8-0.3-1.2c0-0.4,0.1-0.8,0.3-1.2c0.2-0.4,0.4-0.7,0.7-1c0.3-0.3,0.7-0.5,1.1-0.7 c0.4-0.2,0.8-0.2,1.3-0.2c0.5,0,0.9,0.1,1.3,0.2c0.4,0.2,0.8,0.4,1.1,0.7c0.3,0.3,0.5,0.6,0.7,1c0.2,0.4,0.3,0.8,0.3,1.2 c0,0.4-0.1,0.8-0.3,1.2c-0.2,0.4-0.4,0.7-0.7,1C229.5,835.3,229.2,835.5,228.8,835.6z M226.4,835.1c0.3,0.1,0.7,0.2,1,0.2 c0.4,0,0.7-0.1,1-0.2s0.6-0.3,0.9-0.5c0.2-0.2,0.4-0.5,0.6-0.8s0.2-0.6,0.2-1c0-0.3-0.1-0.6-0.2-0.9s-0.3-0.6-0.6-0.8 c-0.2-0.2-0.5-0.4-0.8-0.5c-0.3-0.1-0.7-0.2-1-0.2c-0.4,0-0.7,0.1-1,0.2c-0.3,0.1-0.6,0.3-0.8,0.5c-0.2,0.2-0.4,0.5-0.6,0.8 c-0.1,0.3-0.2,0.6-0.2,0.9c0,0.3,0.1,0.7,0.2,1c0.1,0.3,0.3,0.5,0.6,0.8C225.8,834.7,226.1,834.9,226.4,835.1z"
                    />
                    <path
                      className="st0"
                      d="M236.7,835.6c-0.4,0.2-0.9,0.2-1.3,0.2c-0.5,0-0.9-0.1-1.3-0.2c-0.4-0.2-0.8-0.4-1.1-0.7 c-0.3-0.3-0.5-0.6-0.7-1c-0.2-0.4-0.3-0.8-0.3-1.2c0-0.4,0.1-0.8,0.3-1.2c0.2-0.4,0.4-0.7,0.7-1c0.3-0.3,0.7-0.5,1.1-0.7 c0.4-0.2,0.8-0.2,1.3-0.2c0.5,0,0.9,0.1,1.3,0.2c0.4,0.2,0.8,0.4,1.1,0.7c0.3,0.3,0.5,0.6,0.7,1c0.2,0.4,0.3,0.8,0.3,1.2 c0,0.4-0.1,0.8-0.3,1.2c-0.2,0.4-0.4,0.7-0.7,1C237.5,835.3,237.1,835.5,236.7,835.6z M234.4,835.1c0.3,0.1,0.7,0.2,1,0.2 c0.4,0,0.7-0.1,1-0.2s0.6-0.3,0.9-0.5c0.2-0.2,0.4-0.5,0.6-0.8s0.2-0.6,0.2-1c0-0.3-0.1-0.6-0.2-0.9s-0.3-0.6-0.6-0.8 c-0.2-0.2-0.5-0.4-0.8-0.5c-0.3-0.1-0.7-0.2-1-0.2c-0.4,0-0.7,0.1-1,0.2c-0.3,0.1-0.6,0.3-0.8,0.5c-0.2,0.2-0.4,0.5-0.6,0.8 c-0.1,0.3-0.2,0.6-0.2,0.9c0,0.3,0.1,0.7,0.2,1c0.1,0.3,0.3,0.5,0.6,0.8C233.8,834.7,234,834.9,234.4,835.1z"
                    />
                    <path
                      className="st0"
                      d="M240,835.1h1.3v-10.5H240V824h1.9v8.8l2.7-2.3h-1v-0.6h3.2v0.6h-1.2c-0.3,0.3-0.7,0.6-0.9,0.9 c-0.3,0.3-0.6,0.5-1,0.9c0.4,0.5,0.8,1,1.2,1.5c0.4,0.5,0.8,1,1.2,1.5h1.5v0.6h-3.2v-0.6h0.8c-0.3-0.4-0.7-0.9-1-1.3 c-0.3-0.4-0.7-0.8-1-1.3l-1.1,1v1.6h1.3v0.6H240V835.1z"
                    />
                  </g>
                </g>
               
                <image
    style={{ overflow: "visible" }}
    width={1341}
    height={914}
    id="iStock-1082467846_xA0_Image"
    className="svg-family-img"
    xlinkHref={imgdata}
    transform="matrix(0.24 0 0 0.24 143.82 333.3862)"
  />
                {/* // Name // */}
                <foreignObject
                  xmlns="http://www.w3.org/2000/svg"
                  x={0}
                  y={11.6163}
                  width={595}
                  className="st4 st5"
                  height={"100%"}
                >
                  <p
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      textAlign: "center",
                      color: "white",
                      marginTop: 0,
                      textTransform: "uppercase",
                    }}
                  >
                    <p
                       style={{textAlign:"center",color:"#ffffff",padding:0,margin:0}}
                    >{"The"}</p>
                    
                    <p 
                     style={{textAlign:"center",color:"#ffffff",padding:0,margin:0}}>
                      {familyName ? familyName : ""}
                    </p>
                    
                    <p
                       style={{textAlign:"center",color:"#ffffff" ,padding:0,margin:0}}
                    >{"Family Handbook  "}</p>
                  </p>
                </foreignObject>
                <foreignObject
                  xmlns="http://www.w3.org/2000/svg"
                  x={0}
                  y={600}
                  width={595}
                  className="st10 st11 secondSubtitle"
                  height={100}
                >
                  <p
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      textAlign: "center",
                      color: "white",
                      marginTop: 0,
                    }}
                    dangerouslySetInnerHTML={{ __html: textValue }}
                  ></p>
                </foreignObject>
                <foreignObject
                  xmlns="http://www.w3.org/2000/svg"
                 
                  y={696}
                  width={"100%"}
                  className="st6 st7 svg-sentence"
                  height={200}
                  style={{backgroundColor:"#223eb081" }}
                >
                  <div style={{width:"70%", margin:"auto"}}>
                  <p
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      textAlign: "center",
                      color: "white",
                      marginTop: "5px",
                      overflowWrap: "break-word",
                    }}
                    dangerouslySetInnerHTML={{
                      __html:
                        selectedValues5 !== null ? selectedValues5 : covercon,
                    }}
                  ></p>
                  </div>
                </foreignObject>
                <foreignObject
                  xmlns="http://www.w3.org/2000/svg"
                  x={0}
                  y={815}
                  width={"100%"}
                  className="st10"
                  style={{ backgroundColor: "black" }}
                  height={50}
                >
                  <p
                    xmlns="http://www.w3.org/1999/xhtml"
                    style={{
                      textAlign: "left",
                      color: "white",
                      marginTop: 5,
                      fontSize: 15,
                      marginBottom: 0,
                      // lineHeight: 25,
                      marginLeft: 7,
                    }}
                  >
                    {"\n\t\t\tThe "}
                    <span className="svg-lastname">
                      {familyName ? familyName : ""}
                    </span>
                    {" Family Handbook\n\t\t"}
                  </p>
                </foreignObject>
            
              </svg>
            </div>
            <div className="flex flex-col items-center w-[78%] mx-auto py-3 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
  {showInitialButtons && (
    <>
      <button
        onClick={() => router.push("/section")}
        className="text-sm md:text-base lg:text-[16px] hover:text-white hover:bg-primary duration-300 ease-in hover:ease-out py-1 px-4 text-black bg-[#FDA513] flex justify-center items-center h-12 w-full max-w-xs md:w-[280px] rounded-3xl"
      >
        Go Back To Dashboard
      </button>
      <button
        onClick={handlePreviewClick}
        className="text-sm md:text-base lg:text-lg hover:text-white hover:bg-primary duration-300 ease-in hover:ease-out py-1 px-4 text-black bg-[#FDA513] flex justify-center items-center h-12 w-full max-w-xs md:w-[280px] rounded-3xl"
      >
        Preview
      </button>
    </>
  )}
</div>

{showButtons && imgdata && imagecover && (
  <div className="flex flex-col items-center w-full py-3 space-y-4 md:flex-row md:space-x-4 md:space-y-0">
    <button
      onClick={handleGoBackToEditClick}
      className="text-sm md:text-base lg:text-lg hover:text-white hover:bg-primary duration-300 ease-in hover:ease-out py-1 px-4 text-black bg-[#FDA513] flex justify-center items-center h-12 w-full max-w-xs md:w-[280px] rounded-3xl"
    >
      Go Back To Edit
    </button>

    <div className="relative group w-full max-w-xs md:w-[280px]">
      <button
        className="text-base md:text-lg lg:text-xl hover:text-white hover:bg-primary duration-300 ease-in hover:ease-out py-1 px-4 text-black bg-[#FDA513] flex justify-center items-center h-12 w-full rounded-3xl"
        onClick={toggleDropdown}
      >
        Download
      </button>
      <div className="absolute w-48 bg-white rounded-md shadow-lg invisible group-hover:visible group-hover:translate-y-1 duration-300 ease-in-out">
        <div className="py-1">
          <button
            onClick={() => {
              downloadImage('jpeg');
              toggleDropdown();
            }}
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Download JPEG
          </button>
          <button
            onClick={() => {
              downloadImage('pdf');
              toggleDropdown();
            }}
            className="block px-4 py-2 text-sm  text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>

    <button
      onClick={() => NewNote()}
      className="text-sm md:text-base lg:text-lg hover:bg-primary duration-300 ease-in hover:ease-out py-1 px-4 text-black bg-[#FDA513] flex justify-center hover:text-white items-center h-12 w-full max-w-xs md:w-[280px] rounded-3xl"
    >
      {loadingText ? "Loading..." : "Save & Next"}
    </button>
  </div>
)}


              
            
          </>
        </div>
      </div>

      {/* Help modal */}
      <Modal
        isOpen={helpisModalOpen}
        onRequestClose={helpcloseModal}
        style={helpcustomStyles}
        contentLabel="Help Modal"
      >
        <div className="bg-white border-[2px]">
          <div className="bg-white m-auto overflow-y-hidden md:overflow-y-hidden flex-col justify-center items-center rounded-[10px]">
            <div className="">
              <>
                <div className=" p-4  justify-end flex">
                  <p className="text-2xl mr-3 text-end">
                    <X className="cursor-pointer" onClick={helpcloseModal} />
                  </p>
                </div>
                <hr />
                <div className=" my-2">
                  <iframe
                    width="630"
                    height="415"
                    src="https://www.youtube.com/embed/0rfBzbtVGms?si=HsOx7P3AQMHwL9Mx"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  ></iframe>
                </div>
              </>
            </div>
          </div>
        </div>
      </Modal>
    </div>
    </>
  );
};

export default MainCover;
