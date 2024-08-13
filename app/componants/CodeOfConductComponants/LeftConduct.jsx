/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useEffect, useState, useRef } from "react";
import { Plus, X } from "lucide-react";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';
import { FamilyConductService } from "@/app/services/CodeConnductServices";
import { useAppDispatch, useAppSelector } from "@/app/Redux/lib/hooks";
import {
  setCodeconduct1,
  setInputValue1,
} from "@/app/Redux/lib/features/product/productSlice";
import stepImage1 from "../../assets/imges/image 11.png";
import { IoInformationCircleSharp } from "react-icons/io5";
import Image from "next/image";
const statements = [
  "We honor each other with our words and actions",
  "We treat others with respect",
  "We practice sharing with each other",
  "We keep our home tidy",
  "We obey our parents immediately",
  "We speak words of encouragement to each other",
  "We show respect to those in authority",
  "We practice managing our emotions when in conflict",
  "We work together as a team",
  "We spend quality time together as a family",
  "We don’t raise our voices to each other",
  "We seek to serve our neighbors and community",
  "We respect each other’s personal space",
  "We knock before entering rooms",
  "We ask before borrowing",
  "We respect the rules of our community",
  "We clean up after ourselves",
  "We are polite both at home and away from home",
  "We respond to grownups with “Yes Ma’am” or “No Ma’am” and “Yes Sir” or “No Sir”",
  "We look a person in the eyes when speaking to them",
  "We show up on time",
  "We finish what we start",
  "We say “Please” and “Thank You”",
  "We do what we say we are going to do",
];

const LeftConduct = () => {
  const [clickedButtons, setClickedButtons] = useState(Array(statements.length).fill(false));
  const [showInput, setShowInput] = useState(0);
  const [selectedValues, setSelectedValues] = useState([]);
  const lastInputRef = useRef(null);

  const codeconduct1 = useAppSelector((state) => state.api.codeconduct1);
  const inputValue1 = useAppSelector((state) => state.api.inputValue1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    localStorage.setItem("clickedButtons", JSON.stringify(clickedButtons));
    localStorage.setItem("selectedValues", JSON.stringify(selectedValues));
    localStorage.setItem("showInput", showInput);
  }, [clickedButtons, selectedValues, showInput]);

  useEffect(() => {
    const savedInputValues = JSON.parse(localStorage.getItem("inputValue1") || "[]");
    if (savedInputValues.length > 0) {
      dispatch(setInputValue1(savedInputValues));
    }
  }, [dispatch]);

  const toggleInput = () => {
    const totalSelections = clickedButtons.filter((clicked) => clicked).length + showInput;
    if (totalSelections < 13) {
      setShowInput((prevCount) => prevCount + 1);
    } else {
      showErrorToast("You can select up to 13 statements only.");
    }
  };

  useEffect(() => {
    if (lastInputRef.current) {
      lastInputRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showInput]);

  const handleChange = (index, event) => {
    const { value } = event.target;
  
    if (value.length <= 60) {
      const newNames = [...inputValue1];
      newNames[index] = value;
      dispatch(setInputValue1(newNames));
      localStorage.setItem("inputValue1", JSON.stringify(newNames));
    } else {
      showErrorToast("Input cannot exceed 70 characters.");
    }
  };
  

  const toggleButton = (index) => {
    const newClickedButtons = [...clickedButtons];
    const value = statements[index];
    const selectedCount = newClickedButtons.filter((clicked) => clicked).length + showInput;

    if (newClickedButtons[index]) {
      newClickedButtons[index] = false;
      dispatch(setCodeconduct1(codeconduct1.filter((item) => item !== value)));
      setSelectedValues(selectedValues.filter((item) => item !== value));
    } else {
      if (selectedCount >= 13) {
        showErrorToast("You can select up to 13 statements only.");
        return;
      } else {
        newClickedButtons[index] = true;
        dispatch(setCodeconduct1([...codeconduct1, value]));
        setSelectedValues([...selectedValues, value]);
      }
    }
    setClickedButtons(newClickedButtons);
  };

  const handleClick = () => {
    toastr.options = {
      closeButton: true,
      debug: false,
      newestOnTop: false,
      progressBar: false,
      positionClass: "toast-top-right",
      preventDuplicates: false,
      onclick: null,
      showDuration: "300",
      hideDuration: "1000",
      timeOut: "100000",
      extendedTimeOut: "1000",
      showEasing: "swing",
      hideEasing: "linear",
      showMethod: "fadeIn",
      hideMethod: "fadeOut",
      width: "40%",
      onShown: function() {
        document.querySelectorAll('.toast').forEach(toast => {
          toast.style.backgroundColor = '#023D6D'; // Set the background color
          toast.style.color = 'white'; // Set the text color
          toast.style.opacity = '1'; // Remove the opacity
        });
      }
    };
  
    toastr.info(
      `Below are statements that other families have chosen to put in the Family Code of Conduct. Click on the ones you like and they'll be added for your family. Click the green + button below to create your own. You may add up to thirteen statements.`
    );
  };
  
  const handleEditorData = async () => {
    const result = await FamilyConductService();
    if (result.status) {
      const data = Object.values(result).filter(
        (value) => typeof value === "string" && value !== ""
      );
      let setA = new Set(statements);
      let difference = data.filter((element) => !setA.has(element));
      let updatedData = data.filter((element) => !difference.includes(element));
      setShowInput(difference.length);
      dispatch(setInputValue1(difference));
      setSelectedValues(updatedData);
      dispatch(setCodeconduct1(updatedData));
      setClickedButtons(
        data.map((statement) => updatedData.includes(statement))
      );
    }
  };

  useEffect(() => {
    
      handleEditorData();
   
  }, []);

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
    };
    toastr.error(message);
  };

  const closeInput = (index) => {
    const newInputValues = [...inputValue1];
    newInputValues.splice(index, 1);
    dispatch(setInputValue1(newInputValues));
    localStorage.setItem("inputValue1", JSON.stringify(newInputValues));
    setShowInput((prevCount) => prevCount - 1);
  };

  return (
    <>
      <div>
        <div className="">
          <div className="space-y-4">
          <div className="">
          <div className="bg-primary text-white W-[702px] p-6 rounded-3xl flex flex-col sm:flex-row">
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="pt-10">
              <Image src={stepImage1} alt="Step 1" className="w-[73px] h-[73.52px]" />
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            <h4 className="text-xl font-bold text-[#FDA513]">Instructions</h4>
            <p className="mt-2 text-base leading-relaxed">
            Below are statements that other families have chosen to put in the Family Code of Conduct. Click on the ones you like and they'll be added for your family. Click the + button below to create your own. You may add up to thirteen statement
</p>

          </div>
        </div>

    </div>
          </div>
          <div className="h-[700px] overflow-y-scroll">
          
            <div className="flex w-full montserrat md:flex-row flex-wrap flex-col pt-2">
  {statements.map((statement, index) => (
    <label
      key={index}
      className="flex items-center w-full md:w-[48.666667%] p-1 cursor-pointer"
    >
      <input
        onChange={() => toggleButton(index)}
        checked={codeconduct1.includes(statement)}
        type="checkbox"
        name="statement"
        className="border-[#FDA513] mr-1 rounded-full"
      />
      {statement}
    </label>
  ))}
</div>


            <div className="flex space-x-3 montserrat p-3" >
            <div className="pb-5" onClick={toggleInput}>
  <Plus 
    color="black" 
    className="bg-[#48B22E] text-black md:shadow-none shadow-md shadow-black cursor-pointer text-[5px] h-8 w-8 z font-[500] flex items-center justify-center"
  />
</div>

              <div className="pt-1">Add Your Own:</div>
            </div>
            {showInput > 0 && (
              <div className="container grid grid-cols-1 m-auto gap-2  ">
                {[...Array(showInput)].map((_, index) => (
                  <div className="flex flex-wrap" key={index} ref={index === showInput - 1 ? lastInputRef : null}>
                    <input
                      type="text"
                      onChange={(event) => handleChange(index, event)}
                      placeholder="Enter your statement"
                      className="rounded-sm text-black text-[19px] w-[330px] montserrat md:shadow-none shadow-md shadow-black p-3  placeholder-black"
                      value={inputValue1[index] || ""}
                    />
                    <div onClick={() => closeInput(index)}     className="pt-4 ml-3">
                      <X size={15} color="#505050" strokeWidth={5} />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default LeftConduct;
