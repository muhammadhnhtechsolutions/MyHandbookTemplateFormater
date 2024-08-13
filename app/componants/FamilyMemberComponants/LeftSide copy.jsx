"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Plus, Trash2 } from "lucide-react";
import Image from "next/image";
import dynamic from "next/dynamic";
import {validateChild, validateParent1} from '@/app/componants/validation/validatons'
import stepImage1 from "../../assets/imges/image 11.png";
import 'react-loading-skeleton/dist/skeleton.css'
import {
  FAmilymemberServices,
  FAmilychildServices,
  Getalldata,
  UpdateParentsdata,
  UpdateChildsdata,
  deleteParentService
} from "@/app/services/FAmilymemberServices";
// import SeachLocation from "@/app/componants/Location/SeachLocation"
const TheCropImage = dynamic(() => import("./TheCropImage"), { ssr: false });
import { useAppDispatch, useAppSelector } from "@/app/Redux/lib/hooks";
import {

   setNewInputValues1,
  setNewInputValues2,
  setNewInputValues3,
  setNewInputValues4,
  setNewInputValues5,
  setParentspreview,
  setParentspreview2,
  setPreviewInputValue1,
  setSelectedName,
  setSelectedName3,
  setisFaimlymember,
  setisFaimlymemberprevious,



} from "@/app/Redux/lib/features/product/productSlice";
import { toast } from "react-toastify";

import InputBySearch from "./InputBySearch";

const textMomDad = [
  "mom",
  "dad",
  "step-mom",
  "step-dad",
  "grandma",
  "grandpa",
  "aunt",
];

const textChild = [

  "son",
  "daughter",
  "niece",
  "nephew",
  "grandson",
  "granddaughter",
];
// <-----------Favourite Food start--------->
const textFood = [
  "Steak",
  "Salmon",
  "Chicken Parmesan",
  "BBQ Ribs",
  "Shrimp Scampi",
  "Chicken Enchiladas",
  "Stir-Fry",
  "Pizza",
  "Burgers",
  "Chocolate",
  "Ice Cream",
  "Chicken Wings",
  "Tacos",
  "Sushi",
  "Grilled Cheese Sandwich",
  "Spaghetti",
];
// <-----------Favourite Food and--------->

// <-----------Favorite Holiday start--------->
const textHoliday = [
  "Thanksgiving",
  "Christmas",
  "Independence Day (July 4th)",
  "Halloween",
  "Easter",
  "New Year's Eve/Day",
  "Memorial Day",
  "Labor Day",
  "Mother's Day and Father's Day",
];
// <-----------Favorite Holiday and--------->

// <-----------Favorite greatest fear start--------->
const textFear = [
  "Spiders (Arachnophobia): Fear of spiders and other arachnids.",
  "Confined Spaces (Claustrophobia): Fear of enclosed or tight spaces.",
  "Flying (Aviophobia): Fear of flying in airplanes.",
  "Failure: Fear of not meeting personal or societal expectations.",
  "Social Rejection: Fear of being socially excluded or not fitting in.",
  "Public Places (Agoraphobia): Fear of crowded or open public spaces.",
  "Snakes (Ophidiophobia): Fear of snakes.",
  "Darkness (Nyctophobia): Fear of the dark or nighttime.",
  "Failure to Meet Expectations: Fear of not meeting personal or societal expectations.",
  "Change: Fear of the unknown or fear of change.",
  "Being Judged: Fear of being criticized or negatively evaluated by others.",
  "Natural Disasters: Fear of natural disasters such as earthquakes, hurricanes, or tornadoes.",
];
// <-----------Favorite greatest fear and--------->

// <-----------Favorite Quote, Saying start--------->
const textQuoteSaying = [
  `Shoot for the moon. Even if you miss, you'll land among the stars.`,
  `"You are braver than you believe, stronger than you seem, and smarter than you think." - A.A. Milne`,
  `"The more that you read, the more things you will know. The more that you learn, the more places you'll go." - Dr. Seuss`,
  `"Life is like riding a bicycle. To keep your balance, you must keep moving." - Albert Einstein`,
  `"Believe you can and you're halfway there." - Theodore Roosevelt`,
  // `Granddaughter`,
  `"In every job that must be done, there is an element of fun." - Mary Poppins`,
  `"You're off to great places! Today is your day! Your mountain is waiting, so... get on your way!" - Dr. Seuss`,
  `"The future belongs to those who believe in the beauty of their dreams." - Eleanor Roosevelt`,
  `"Don't cry because it's over, smile because it happened." - Dr. Seuss`,
  `"The greatest glory in living lies not in never falling, but in rising every time we fall." - Nelson Mandela`,
  `"Be yourself; everyone else is already taken." - Oscar Wilde`,
  `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." - Dr. Seuss`,
  `"It's not what happens to you, but how you react to it that matters." - Epictetus`,
  `"The only way to do great work is to love what you do." - Steve Jobs`,
  `"Life's a journey, not a destination." - Aerosmith`,
];
// <-----------Favorite Quote, Saying and--------->

// <-----------My Bible Verse start--------->
const textBibleVerse = [
  `Proverbs 22:6 - "Train up a child in the way he should go; even when he is old he will not depart from it.`,
  `Ephesians 6:1-3 - "Children, obey your parents in the Lord, for this is right. Honor your father and mother (this is the first commandment with a promise), that it may go well with you and that you may live long in the land.`,
  `Deuteronomy 6:6-7 - "And these words that I command you today shall be on your heart. You shall teach them diligently to your children, and shall talk of them when you sit in your house, and when you walk by the way, and when you lie down, and when you rise.`,
  `Colossians 3:20 - "Children, obey your parents in everything, for this pleases the Lord.`,
  `Proverbs 1:8-9 - "Hear, my son, your father's instruction, and forsake not your mother's teaching, for they are a graceful garland for your head and pendants for your neck.`,
  `Psalm 127:3 - "Behold, children are a heritage from the Lord, the fruit of the womb a reward.`,
  `Proverbs 29:17 - "Discipline your son, and he will give you rest; he will give delight to your heart.`,
  `Psalm 78:4 - "We will not hide them from their children, but tell to the coming generation the glorious deeds of the Lord, and his might, and the wonders that he has done.`,
  `1 Timothy 4:12 - "Let no one despise you for your youth, but set the believers an example in speech, in conduct, in love, in faith, in purity.`,
  `Matthew 19:14 - "But Jesus said, 'Let the little children come to me and do not hinder them, for to such belongs the kingdom of heaven.'`,
  `Proverbs 3:11-12 - "My son, do not despise the Lord's discipline or be weary of his reproof, for the Lord reproves him whom he loves, as a father the son in whom he delights.`,
  `Exodus 20:12 - "Honor your father and your mother, that your days may be long in the land that the Lord your God is giving you.`,
  `Luke 6:31 - "And as you wish that others would do to you, do so to them.`,
  `Proverbs 13:24 - "Whoever spares the rod hates his son, but he who loves him is diligent to discipline him.`,
  `Psalm 139:14 - "I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well.`,
];
// <-----------My Bible Verse and--------->

// <-----------A Favorite Attribute and--------->
const textAttribute = [
  "Resilience",
  "Empathy",
  "Integrity",
  "Work Ethic",
  "Kindness",
  "Independence",
  "Curiosity",
  "Adaptability",
  "Sense of Humor",
  "Self-Confidence",
  "Courage",
  "Leadership Skills",
  "Responsibility",
  // "Assertiveness",
  // "Empowerment",
  "Respect",
  "Communication Skills",
  "Assertiveness",
  "Educational Achievement",
  "Family Values",
  // "Lack of Emotional Expression",
  // "Recklessness",
  // "Dependency",
  // "Overemphasis on Appearance",
];
// <-----------A Favorite Attribute and--------->

const LeftSide = () => {
  const todayDate = new Date().toISOString().split('T')[0];


  const [mainLoader, setMainLoader] = useState(true);
  const [checkQuoteStatus, setCheckQuoteStatus] = useState([]);
  const [loading,setLoading]=useState(false);

 
  const parentspreview2 = useAppSelector((state) => state.api.parentspreview2);
  const parentspreview = useAppSelector((state) => state.api.parentspreview);
  const isFaimlymember = useAppSelector((state) => state.api.isFaimlymember);
  const isFaimlymemberprevious = useAppSelector((state) => state.api.isFaimlymemberprevious)


  const dispatch = useAppDispatch();
 
  const [parentsnextform, setParentsnextform] = useState(false);
  const [parentdatacheck, setParentdatacheck] = useState(false);
  const [childdatacheck, setchilddatacheck] = useState(false);
  const [partent1Errors,setParent1Errors] = useState([])

  const containerRef = useRef(null);


  const [parents, setParents] = useState([{

    relation: "",
    other_relation: "",
    full_name: "",
    birth_city: '',
    city: "",
    email: "",
    dob: "",
    profession: "",
    favourite_food: "",
    favourite_holiday: "",
    other_favourite_holiday: "",
    afraid_of: "",
    other_afraid_of: "",
    other_favourite_quote: "",
    other_favourite_food: "",
    favourite_quote: "",
    image: "",

  }]);


const [otherChild, setOtherChildrens] = useState([{
    relation: "",
    other_relation: "",
    full_name: "",
    birth_city: "",
    city: "",
    email: "",
    dob: "",
    favourite_food: "",
    other_favourite_food: "",
    best_attribute: "",
    other_best_attribute: "",
    favourite_quote: "",
    other_favourite_quote: "",
    image: "#",

  }]);
const [errors,setErros] = useState([])
const [deleteLoading,setDeleteLoading]=useState(null)
  // Gett al data 
  const GETDATA = async () => {
    try {
      const x = Math.random() * 3;
      dispatch(setParentspreview(x)) 
      const result = await Getalldata();
      if (result.status) {
       
        if (result.parent_data.length > 0) {
          const parent_data = updateEmptyKeys(result.parent_data)
          setParents(parent_data)
          setParentdatacheck(true)
          setMainLoader(false)
          dispatch(setisFaimlymember("dashboard"))
         
       
          toast.success(result.message);
        }
        else {
          dispatch(setisFaimlymember("dashboard"))
        }

        if (result.othermember_data.length > 0) {
          setchilddatacheck(true)
          setMainLoader(false)
          // setChild(result.othermember_data[0])
          // setNumberofChilds(Array.isArray(result?.othermember_data) ? result?.othermember_data : []);
          const othermember_data = updateEmptyKeys(result.othermember_data)
          
          setOtherChildrens(othermember_data)




          toast.success(result.message);
        }
        // result.data); // Set the fetched data in state
        // dispatch({ type: 'SET_DATA', payload: result.data }); // Dispatch action if using redux
      }
      else {
        setMainLoader(false)
        dispatch(setisFaimlymember("dashboard"))
      }
    } catch (error) {
      // toast.error("An error occurred while fetching data");
      // console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
  
    GETDATA();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



 


  // hanle bible vs quete start
  const hanldeRemoveQuote = (index) => {
    setCheckQuoteStatus((prevFavoriteQuotes) => 
      prevFavoriteQuotes.filter((item) => item !== index)
    );
   
  };

  const hanldeAddQuote = (index) => {
    if(!checkQuoteStatus.includes(index)){
    setCheckQuoteStatus((prevFavoriteQuotes) => {
      const updatedQuotes = [...prevFavoriteQuotes];
      updatedQuotes.splice(index, 0, index);
      return updatedQuotes;
    });

  }

  };
 
  // hanle bible vs quete end
  const addParent = () => {
   
    setParents((prevChildren) => [
      ...prevChildren,
    {

    relation: "",
    other_relation: "",
    full_name: "",
    birth_city: '',
    city: "",
    email: "",
    dob: "",
    profession: "",
    favourite_food: "",
    favourite_holiday: "",
    other_favourite_holiday: "",
    afraid_of: "",
    other_afraid_of: "",
    other_favourite_quote: "",
    other_favourite_food: "",
    favourite_quote: "",
    image: "",

  },
    ]);

     // Scroll the main document to the top
  window.scrollTo({ top: 100, behavior: 'smooth' });
  // Check if containerRef.current exists
  setTimeout(() => {
    if (containerRef.current) {
      const formHeight = 650; // Assume each form has a height of 200px (adjust this value)
      const currentScrollTop = containerRef.current.scrollTop;
      const secondFormPosition = formHeight; // Adjust according to your requirement

      // Scroll the inner container to the second form position
      containerRef.current.scrollTo({
        top: currentScrollTop + secondFormPosition,
        behavior: 'smooth'
      });
    }
  }, 700); // Delay of 100ms, adjust as needed

    
   
  };

  useEffect(() => {
    if (isFaimlymemberprevious === true) {
      setParentsnextform(false);
    }
  }, [isFaimlymemberprevious])

  const handleChildData = (e) => {
    setLoading(true)
    e.preventDefault();
    
    const errors = validateChild(otherChild);

  // Check if there are any errors
  const hasErrors = errors.some((error) => Object.keys(error).length > 0);
  
  if (hasErrors) {
    
    // Handle errors, e.g., display them to the user
    setErros(errors)
    const result = Array.from(
      new Set(
        errors?.flatMap(item => Object.keys(item).map(i => `${item[i]}`))
      )
    ).join('');
    toast.info(result)
    setLoading(false)
  }
  else{
    setParent1Errors({})
    if (childdatacheck == true) {

      UpdateChildApi()
      const newpreview = {};
      dispatch(setParentspreview2([newpreview, ...parentspreview2]));
      setParentsnextform(true);
      dispatch(setisFaimlymemberprevious(true))
      dispatch(setisFaimlymember("donechildren"))


    } else {
    
      setParent1Errors({})
      const newpreview = {};
      dispatch(setParentspreview2([newpreview, ...parentspreview2]));
      setParentsnextform(true);
      AddChildApi();
      dispatch(setisFaimlymemberprevious(true))
    }
  }
  };



  const handlenextform = (e) => {
    e.preventDefault();
    setLoading(true)
  // validation start
  

  const validationErrors = validateParent1(parents);
  const hasErrors = validationErrors.some((error) => Object.keys(error).length > 0);
  if (hasErrors) {
    setParent1Errors(validationErrors);
    // let show_erros= validationErrors?.map((item)=>`<p>${item[Oboject.]}</p>`)
 
   
     const result = Array.from(
      new Set(
        validationErrors?.flatMap(item => Object.keys(item).map(i => `${item[i]}`))
      )
    ).join('');
    toast.info(result)
      // console.log("result is ",result)

    setLoading(false)
  } else {  
    window.scrollTo({ top: 0, behavior: 'smooth' });
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }

   
  
    
    if (parentdatacheck == true) {
      UpdateParentApi(parents)
      
     
    } else {

      AddParentApi(parents);
   
    }
    


  }
  // validation end

    
  };


  const deleteParent = async (id) => {
    setDeleteLoading(id)
    
    const result = await deleteParentService(id);

    if (result.status) {
    setParents((prevParents) =>
      prevParents.filter((_, idx) => idx !== id)
    );
      GETDATA()
      
      setDeleteLoading(null)

    } else {
    setParents((prevParents) =>
      prevParents.filter((_, idx) => idx !== id)
    );
      setDeleteLoading(null)
    }
   
    toast.success("Parent Deleted Successfully");
  };


  const deleteChild = async (index) => {
     setDeleteLoading(index)
    const dataToSend = otherChild;
    const updatedChild = dataToSend.filter((_, i) => i !== index);
    const result = await UpdateChildsdata(updatedChild);
    if (result.status) {
     
    
      toast.success("Child Deleted Successfully");
      const x = Math.random() * 3;
      dispatch(setParentspreview(x)) 
      setDeleteLoading(null)
      setOtherChildrens(updatedChild)
      
    } else {
      toast.error(result.message);
      setDeleteLoading(null)

    }



  };



  // ---------------------------------------------------


  // ------- parentsnew form && famiy role start -----------
  const handlefullname = (event, index) => {

    dispatch(
      setSelectedName((prevState) => {
        const updatedArray = [...prevState];
        updatedArray[index] = event.target.value;
        return updatedArray;
      })
    );
  };
  // ------- parentsnew form && famiy role and -----------

  // ------- parentsnew form && Date of Birth start -----------
  const handlefullname3 = (event, index) => {
   
    dispatch(
      setSelectedName3((prevState) => {
        const updatedArrayC = [...prevState];
        updatedArrayC[index] = event.target.value;
        return updatedArrayC;
      })
    );
  };


  // ------- parentsnew form && A Favourite Food and -----------


  // Individual state variables for each key
  const [isDoneButtonVisible, setIsDoneButtonVisible] = useState(true);
  
// update array other value start
function updateData(dataArray) {
  return dataArray.map(item => {
    // List of keys to check
    const keysToCheck = [
      "relation",
      "favourite_food",
      "favourite_holiday",
      "afraid_of",
      "favourite_quote"
    ];

    // Create a shallow copy of the item to avoid modifying the original object
    const updatedItem = { ...item };

    keysToCheck.forEach(key => {
      if (updatedItem[key] === "other") {
        updatedItem[key] = "";
      } else {
        updatedItem[`other_${key}`] = "";
      }
    });

    return updatedItem;
  });
}


function updateEmptyKeys(dataArray) {
  return dataArray.map(item => {
      // List of keys and their corresponding "other_" keys
      const keysToCheck = {
          "relation": "other_relation",
          "favourite_food": "other_favourite_food",
          "favourite_holiday": "other_favourite_holiday",
          "afraid_of": "other_afraid_of",
          "favourite_quote": "other_favourite_quote"
      };

      // Update each key if its value is an empty string and the corresponding "other_" key has a value
      Object.keys(keysToCheck).forEach(key => {
          const otherKey = keysToCheck[key];
          if (item[key] === "" || item[key] ===null && item[otherKey]) {
              item[key] = "other";
          }
      });

      return item;
  });
}



  // const parentsData = parent1;
  const AddParentApi = async (parentData) => {
    setLoading(true)
   
    // const cleanData = updateData(parentData)
    // dispatch(setParentspreview(cleanData))
   
    const result = await FAmilymemberServices(parentData);
    if (result.status) {
      toast.success(result.message);
      dispatch(setisFaimlymember("doneparent"))
      const x = Math.random() * 3;
      dispatch(setParentspreview(x))
      setLoading(false)

    } else {
      toast.error(result.message);
      dispatch(setisFaimlymember("dashboard"))
      setLoading(false)

    }
    setParent1Errors({})
  
  };


  const handleOtherChildren = (index, e) => {
    const { name, value } = e.target;
  
    setOtherChildrens((prevState) => {
      const newChildren = [...prevState];
      newChildren[index] = {
        ...newChildren[index],
        [name]: value,
       

      };
      return newChildren;
    });
  };
  const handleParentField = (index, e) => {
    const { name, value } = e.target;
  
    setParents((prevState) => {
      const newChildren = [...prevState];
      newChildren[index] = {
        ...newChildren[index],
        [name]: value,
       

      };
      return newChildren;
    });
  };


  // otherChild
  const AddChildApi = async () => {

    console.log("the add is",otherChild)
    // const cleanedOtherChild = updateData(otherChild);
    
    const result = await FAmilychildServices(otherChild);
    console.log("the add is",result)

    if (result.status) {
      toast.success(result.message);
      dispatch(setisFaimlymember("donechildren"))
      // dispatch(setisFaimlymemberprevious("donechildren"))
      // toast.success("Child Add Successfully");

      const x = Math.random() * 3;
   
      dispatch(setParentspreview(x))
      // dispatch(setParentspreview(["dataToSend", "fd"]))
      setLoading(false)
    } else {
      toast.error(result.message);
      setLoading(false)
    }
        setErros({})
  };


  ///Update Parents
  const UpdateParentApi = async (parentData) => {
  
    
      // const cleanData = updateData(parentData)
      // const cleanedOtherparent = cleanData2(dataToSend);
     

      const result = await UpdateParentsdata(parentData);
      if (result.status) {
        setLoading(false)
        dispatch(setisFaimlymember("doneparent"))
        toast.success("Parent Updated Successfully");
        const x = Math.random() * 3;
    
        dispatch(setParentspreview(x))
        
     

      } else {
        dispatch(setisFaimlymember("dashboard"))
        toast.error(result.message);
      }

      

    
    setParent1Errors({})
   
    setLoading(false)
  };




  ///Update Child
  const UpdateChildApi = async () => {
    // const parentsData = parent1;
    // const dataToSend = otherChild;
    // const cleanedOtherchild = updateData(otherChild);
    const result = await UpdateChildsdata(otherChild);
    console.log("the update is",result)
    if (result.status) {
      toast.success("Child Updated Successfully");
      setLoading(false)
      

      const x = Math.random() * 3;
   
      dispatch(setParentspreview(x))
      // GETDATA()
    } else {
      toast.error(result.message);
      setLoading(false)
    }
    setErros({})
  };

  const hanldeChildrenImage = (image, index) => {
    

    setOtherChildrens((prevState) => {
      const newChildren = [...prevState];
      newChildren[index] = {
        ...newChildren[index],
        "image": image,
      };
      return newChildren;
    });
  }
  const hanldeParentImage = (image, index) => {
    

    setParents((prevState) => {
      const newParent = [...prevState];
      newParent[index] = {
        ...newParent[index],
        "image": image,
      };
      return newParent;
    });
  }

  const handleChildForm = () => {
   
    setParentsnextform(false)
    setOtherChildrens((prevChildren) => [
      ...prevChildren,
      {
        relation: "",
        other_relation: "",
        full_name: "",
        birth_city: "",
        city: "",
        email: "",
        dob: "",
        favourite_food: "",
        other_favourite_food: "",
        best_attribute: "",
        other_best_attribute: "",
        favourite_quote: "",
        other_favourite_quote: "",
        image: "#",
      },
    ]);
    
    window.scrollTo({ top: 100, behavior: 'smooth' });

    setTimeout(() => {
      if (containerRef.current) {
        const formHeight = 595; // Assume each form has a height of 200px (adjust this value)
        const currentScrollTop = containerRef.current.scrollTop;
        const secondFormPosition = formHeight; // Adjust according to your requirement
  
        // Scroll the inner container to the second form position
        containerRef.current.scrollTo({
          top: currentScrollTop + secondFormPosition,
          behavior: 'smooth'
        });
      }
    }, 800); // Delay of 100ms, adjust as needed

  }
  
  const [charStatus,setCharStatus]= useState(false)
 




  useEffect(()=>{
    if(otherChild.length==0) {
      setOtherChildrens((prevChildren) => [
        ...prevChildren,
        {
          relation: "",
          other_relation: "",
          full_name: "",
          birth_city: "",
          city: "",
          email: "",
          dob: "",
          favourite_food: "",
          other_favourite_food: "",
          best_attribute: "",
          other_best_attribute: "",
          favourite_quote: "",
          other_favourite_quote: "",
          image: "#",
        },
      ]);
    }
  },[otherChild])




  return (
    <>
      <div className="bg-primary text-white p-4 rounded-3xl flex flex-col sm:flex-row">
          <div className="flex-shrink-0 mx-auto sm:mx-0">
            <div className="pt-6">
              <Image src={stepImage1} alt="Step 1" className="w-auto h-auto" />
            </div>
          </div>
          <div className="mt-4 sm:mt-0 sm:ml-4">
            {/* <h4 className="text-xl font-bold text-[#FDA513]">Instructions</h4> */}
            <p className="mt-2 text-base leading-relaxed driod">
           <span className="text-[#FDA513]"> Family Roles:</span> Identifying family member roles, strengths, and attributes is a great way to reinforce a team-like culture in a family. Memorializing it in your handbook adds a little bit of fun and personalization. Use the form below to tell a little about each member of your family.
  
</p>

          </div>
        </div>
      <div className="w-full md:pt-14	">
        {/* loader start */}
      
         <div className="w-full p-2 h-full md:h-[600px] rounded overflow-y-auto"   ref={containerRef}>
         {/* Form fields for adding parents */}
         {isFaimlymember == "dashboard" && (
           <>
           <form  onSubmit={handlenextform} id="parent_form">
         {parents && parents.map((_,idx)=>(
               <div key={idx} className="space-y-5">
               <div className={`grid ${parents[idx]?.relation ==="other" ? "grid-cols-2" :"grid-cols-1"} gap-x-3`}>
                 <div>
                   Family Role
                   <div className="">
                     <select
                       name="relation"
                       value={parents[idx]?.relation}
                       onChange={(e)=>handleParentField(idx,e)}
                       className="w-full border-[1px] p-1 capitalize"
                     >
                       <option value="">Role Type</option>
                       <option value="other">Custom</option>
                       {textMomDad.map((buttonText, index) => (
                         <option  className="capitalize" key={index} value={buttonText}>
                           {buttonText}
                         </option>
                       ))}
                     </select>
                   </div>
                   {partent1Errors[idx]?.relation && <p className="text-red-500">{partent1Errors[idx]?.relation}</p>}
                 </div>
                 {(parents[idx]?.relation === "other") && (
                   <div>
                     <div className=" mt-6">
                       <input
                         className="w-full pl-1 h-[33px]"
                         type="text"
                         name="other_relation"
                         value={parents[idx].other_relation}
                         placeholder="Type Your Own"
                         onChange={(e) => {
                           if(e.target.value.length <= 30){

                           
                             handleParentField(idx,e)
                            setCharStatus(false)
                           }
                           else{
                             setCharStatus(`other_relation${idx}`)
                           }
                         }}
                       />
                        {charStatus===`other_relation${idx}` ? 
                       <span className="text-red-500 text-xs">Limit exceeded, only 30 characters allowed</span>
                     :null}
                     </div>
                     {partent1Errors[idx]?.other_relation && <p className="text-red-500">{partent1Errors[idx]?.other_relation}</p>}
                   </div>
                 )}
                
               </div>

               <div className="">
                 Full Name
                 <div className="border">
                   <input
                     className="w-full pl-1 h-8 "
                     type="text"
                     placeholder="Full Name"
                     name="full_name"
                     value={parents[idx]?.full_name}
                     onChange={(e)=>handleParentField(idx,e)}
                   />
                 </div>
                 {partent1Errors[idx]?.full_name && <p className="text-red-500">{partent1Errors[idx]?.full_name}</p>}
              
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2  rounded-md space-y-2 md:space-y-0 md:space-x-2">
                 <div>
                   
                   <InputBySearch
                       label="My Birth City/State"
                       index={idx}
                       name="birth_city"
                       getValue={handleParentField}
                       setValue={parents[idx]?.birth_city}
                               />
                                   {partent1Errors[idx]?.birth_city && <p className="text-red-500">{partent1Errors[idx]?.birth_city}</p>}
                 </div>
                 <div>
               
                   <InputBySearch
                       label="My Current City/State"
                       index={idx}
                       name="city"
                       getValue={handleParentField}
                       setValue={parents[idx]?.city}
                               />

{partent1Errors[idx]?.city && <p className="text-red-500">{partent1Errors[idx]?.city}</p>}
                 </div>
               </div>

               <div className="grid grid-cols-1 rounded-md space-y-2 md:space-y-0 md:space-x-5">
                 <div>
                   Date of Birth
                   <input
                     type="Date"
                     className="w-full border-[1px] p-1   "
                     placeholder=" Date of Birth"
                     name="dob"
                     value={parents[idx]?.dob}
                     onChange={(e)=>handleParentField(idx,e)}
                     max={todayDate}
                   />
                   {partent1Errors[idx]?.dob && <p className="text-red-500">{partent1Errors[idx]?.dob}</p>}
                 </div>
                 {/* <div>
                   Email
                   <input
                     type="email"
                     className="w-full border-[1px] p-1   "
                     placeholder="Email"
                     name="email"
                     value={parents.email}
                     onChange={(e) => {

                       handleParent(e)
                     }
                     }
                   />
                 </div> */}
               </div>

               <div  className={`grid ${parents[idx]?.favourite_food ==="other" ? "grid-cols-2" :"grid-cols-1"} gap-x-3`}>
                
                   <div className="">
                     A Favourite Food
                     <div className="space-y-4">
                       <select
                         name="favourite_food"
                         value={parents[idx]?.favourite_food}
                         id=""
                         onChange={(e)=>handleParentField(idx,e)}
                         className="w-full border-[1px] p-1 capitalize"
                       >
                         <option value="">My Favourite Food</option>
                         <option value="other">Custom</option>
                         {textFood.map((buttonText, index) => (
                           <option key={index} value={buttonText}>
                             {buttonText}
                           </option>
                         ))}
                       </select>
                       {partent1Errors[idx]?.favourite_food && <p className="text-red-500">{partent1Errors[idx]?.favourite_food}</p>}
                     </div>
                   </div>
                 
                 {parents[idx]?.favourite_food === "other" && (
                   <div>
                     <div className=" mt-6">
                       <input
                         className="w-full pl-1 h-[33px]"
                         type="text"
                        
                         name="other_favourite_food"
                         value={parents[idx]?.other_favourite_food}
                         placeholder="Type Your Own"
                         onChange={(e) => {
                           if(e.target.value.length <= 100) {
                           dispatch(setPreviewInputValue1(e.target.value));
                           handleParentField(idx,e)
                           setCharStatus(false)
                           
                         }
                         else{
                           setCharStatus(`other_favourite_food${idx}`)
                        

                           }
                         }}
                       />

                   {charStatus===`other_favourite_food${idx}` ? 
                       <span className="text-red-500 text-xs">Limit exceeded, only 100 characters allowed</span>
                     :null}
                       {partent1Errors[idx]?.other_favourite_food && <p className="text-red-500">{partent1Errors[idx]?.other_favourite_food}</p>}
                    
                       </div>
                   </div>
                 )}
               </div>

               <div  className={`grid ${parents[idx]?.favourite_holiday ==="other" ? "grid-cols-2" :"grid-cols-1"} gap-x-3`}>
                
                   <div className="">
                     A Favorite Holiday
                     <div className="space-y-4">
                       <select
                         name="favourite_holiday"
                         id=""
                         value={parents[idx]?.favourite_holiday}
                         onChange={(e)=>handleParentField(idx,e)}
                         className="w-full p-1 border-[1px]"
                       >
                         <option value="">My Favorite Holiday</option>
                         <option value="other">Custom</option>
                         {textHoliday.map((buttonText, index) => (
                           <option key={index} value={buttonText}>
                             {buttonText}
                           </option>
                         ))}
                       </select>
                       {partent1Errors[idx]?.favourite_holiday && <p className="text-red-500">{partent1Errors[idx]?.favourite_holiday}</p>}
                     </div>
                   </div>
              
                 {parents[idx]?.favourite_holiday == "other" && (
                   <div>
                     <div className="relative mt-6">
                       <input
                         className="w-full pl-1 h-[33px]"
                         type="text"
                         name="other_favourite_holiday"
                         value={parents[idx]?.other_favourite_holiday}
                          placeholder="Type Your Own"
                         
                         onChange={(e) => {
                           if(e.target.value.length <= 100) {
                             handleParentField(idx,e)
                           setCharStatus(false)
                           }
                           else{
                             setCharStatus(`other_favourite_holiday${idx}`)
                           }
                         }}
                       />
                    <div className="absolute -bottom-6">
                     {partent1Errors[idx]?.other_favourite_holiday && <p className="text-red-500">{partent1Errors[idx]?.other_favourite_holiday}</p>}
                     {charStatus===`other_favourite_holiday${idx}` ? 
                       <span className="text-red-500 text-xs">Limit exceeded, only 100 characters allowed</span>
                     :null}
                     </div>
                     </div>
                   </div>
                 )}
               </div>

               <div  className={`grid ${parents[idx]?.afraid_of ==="other" ? "grid-cols-2" :"grid-cols-1"} gap-x-3`}>
                 <div>
                   Fun Fact: What is your greatest fear?
                   <div className="space-y-4">
                     <select
                       name="afraid_of"
                       value={parents[idx]?.afraid_of}
                       id=""
                       onChange={(e)=>handleParentField(idx,e)}
                       className="w-full p-1 border-[1px]"
                     >
                       <option value="">My Fear</option> {/* Placeholder */}
                       <option value="other">Custom</option>
                       {textFear.map((buttonText, index) => (
                         <option key={index} value={buttonText}>
                           {buttonText}
                         </option>
                       ))}
                     </select>
                     {partent1Errors[idx]?.afraid_of && <p className="text-red-500">{partent1Errors[idx]?.afraid_of}</p>}
                   </div>
                 </div>
                 {(parents[idx]?.afraid_of == "other") && (
                   <div>
                     {/* Fun Fact: What is your greatest fear? */}
                     <div className="lg:mt-6 relative">
                       <div className="">
                         <input
                           className="w-full pl-1 h-[33px]"
                           type="text"
                           name="other_afraid_of"
                           value={parents[idx]?.other_afraid_of}
                            placeholder="Type Your Own"
                           onChange={(e) => {
                             if(e.target.value.length <= 100) {
                             handleParentField(idx,e)
                             setCharStatus(false)
                             }
                             else{
                               setCharStatus(`other_afraid_of${idx}`)
                             }
                           }}
                         />
                         <div className="absolute -bottom-6">
                         {partent1Errors[idx]?.other_afraid_of && <p className="text-red-500">{partent1Errors[idx]?.other_afraid_of}</p>}
                         {charStatus===`other_afraid_of${idx}` ? 
                       <span className="text-red-500 text-xs">Limit exceeded, only 100 characters allowed</span>
                     :null}
                     </div>
                       </div>
                     </div>

                   </div>
                 )}
               </div>

               <div className=" w-[100%]">
                 My Profession
                 <div className="border">
                   <input
                     className="w-full h-8 !pr-[22px]  border-[1px]"
                     type="text"
                     placeholder="My Profession"
                     name="profession"

                     value={parents[idx]?.profession}
                     onChange={(e)=>handleParentField(idx,e)}
                   />
                    {partent1Errors[idx]?.profession && <p className="text-red-500">{partent1Errors[idx]?.profession}</p>}
                 </div>
               </div>

               {/* Add more form fields as necessary */}
               {/* --------------- Favorite Quote, Saying start --------------- */}

               <div className="pt-4 space-y-5 md:space-y-0 md:space-x-5">
                     <button
                       type="button"
                       onClick={() => hanldeRemoveQuote(idx)}
                       className={`${!checkQuoteStatus.includes(idx) ? "bg-[#FF9801]" :"bg-[#0069D9]"} text-sm leading-4 font-normal hover:scale-105 text-white py-3 px-4 rounded inline-flex items-center w-full md:w-auto`}
                     >
                       Favorite Quote, Saying
                     </button>
                     {/* --------------- Favorite Quote, Saying and --------------- */}

                     {/* --------------- Bible Verse start -------------- */}

                     <button
                       type="button"
                       onClick={() => hanldeAddQuote(idx)}
                       className={`${checkQuoteStatus.includes(idx) ? "bg-[#FF9801]" :"bg-[#0069D9]"} text-sm leading-4 font-normal hover:scale-105 text-white py-3 px-4 rounded inline-flex items-center w-full md:w-auto`}
                     >
                       Bible Verse
                     </button>
                   </div>

               {/* --------------- Bible Verse and -------------- */}

               {/* --------------- Favorite Quote, Saying start --------------- */}
               {!checkQuoteStatus.includes(idx)  && (
                 <div className="flex-wrap pt-10">
                   <div className="">
                     Favorite Quote, Saying
                     <div className="space-y-4">
                       <select
                         name="favourite_quote"
                         value={parents[idx]?.favourite_quote}
                         id=""
                         onChange={(e)=>handleParentField(idx,e)}
                         className="p-1 w-full border-[1px]"
                       >
                         <option value="">Favorite Quote, Saying</option>{" "}
                         <option value="other">Custom</option>
                         {/* Placeholder */}
                         {textQuoteSaying.map((buttonText, index) => (
                           <option key={index} value={buttonText}>
                             {buttonText}
                           </option>
                         ))}
                       </select>
                       {partent1Errors[idx]?.favourite_quote && <p className="text-red-500">{partent1Errors[idx]?.favourite_quote}</p>}
                     </div>
                   </div>
                   {(parents[idx]?.favourite_quote == "other") && (
                     <div className="pt-10 w-full">
                       <div className="">
                         <input
                           className="w-full pl-1 h-[33px]"
                           type="text"
                           name="other_favourite_quote"
                           placeholder="Type Your Own"
                           value={parents[idx]?.other_favourite_quote}
                           onChange={(e) => {
                             if(e.target.value.length <= 100) {
                               handleParentField(idx,e)
                             setCharStatus(false)
                             }
                             else{
                               setCharStatus(`other_favourite_quote${idx}`)
                             }
                           }}
                           
                         />
                         {partent1Errors[idx]?.other_favourite_quote && <p className="text-red-500">{partent1Errors[idx]?.other_favourite_quote}</p>}
                         {charStatus===`other_favourite_quote${idx}` ? 
                       <span className="text-red-500 text-xs">Limit exceeded, only 100 characters allowed</span>
                     :null}

                       </div>
                     </div>
                   )}
                 </div>
               )}
               {/* --------------- Favorite Quote, Saying and --------------- */}

               {/* --------------- Bible Verse start -------------- */}
               {checkQuoteStatus.includes(idx) && (
                 <div className="flex-wrap pt-10" >
                   <div className="w-full">
                     Bible Verse
                     <div className="space-y-4">
                       <select
                         name="favourite_quote"
                         value={parents[idx]?.favourite_quote}
                         id=""
                         onChange={(e)=>handleParentField(idx,e)}
                         className="w-full  p-1   border-[1px]"
                       >
                         <option value="">My Bible Verse</option>{" "}
                         <option value="other">Custom</option>
                         {/* Placeholder */}
                         {textBibleVerse.map((buttonText, index) => (
                           <option key={index} value={buttonText}>
                             {buttonText}
                           </option>
                         ))}
                       </select>
                       {partent1Errors[idx]?.favourite_quote && <p className="text-red-500">{partent1Errors[idx]?.favourite_quote}</p>}
                     </div>
                   </div>
                   {parents[idx]?.favourite_quote == "other" && (
                     <div className="pt-10 w-full">
                       <div className="border">
                         <input
                           className="w-full pl-1 h-[33px]"
                           type="text"
                           name="other_favourite_quote"
                           value={parents[idx].other_favourite_quote}
                            placeholder="Type Your Own"
                           onChange={(e) => {
                             if(e.target.value.length <= 100) {
                               handleParentField(idx,e)
                             setCharStatus(false)
                           }
                           else{
                             setCharStatus(`other_favourite_bible${idx}`)
                           }
                           }}
                         />
                         {partent1Errors[idx]?.other_favourite_bible && <p className="text-red-500">{partent1Errors[idx]?.other_favourite_bible}</p>}
                         {charStatus===`other_favourite_bible${idx}` ? 
                       <span className="text-red-500 text-xs">Limit exceeded, only 100 characters allowed</span>
                     :null}
                       </div>
                     </div>
                   )}
                 </div>
               )}
               {/* --------------- Bible Verse and -------------- */}

               <div className="pt-5 text-center">
             
                 <button
                   type="button"
                   className="text-center justify-center  md:shadow-none shadow-md shadow-black bg-[#007bff] text-sm leading-4 font-normal hover:bg-[#0062cc] text-white py-3 px-4 rounded inline-flex items-center w-full md:w-auto"
                 >
                   {/* <CropImage /> */}
                   <TheCropImage
                           cropValue={parents[idx]?.image}
                           hanleImage={hanldeParentImage}
                           index={idx}
                         />
                     
                 </button>
                 
                 
               </div>
               {parents[idx]?.image !== "" ? (
                 <div className="w-24">
                   <Image
                     src={parents[idx]?.image}
                     height={500}
                     width={500}

                     alt="cropped"
                   />
                
                 </div>
               ) : null}
               {parents.length >1 &&(
               <div className="pt-5 flex md:justify-end space-x-3">
                  
                    
                   <button
                     type="button"
                     className="h-[40px] md:w-[16%] w-[50%] bg-[#C82333] text-base leading-4 font-normal  text-white py-3 px-4 rounded inline-flex items-center"
                     onClick={() => {
                       setIsDoneButtonVisible(true)
                       deleteParent(parents[idx]?.parent_id ===undefined ? idx : parents[idx]?.parent_id)}}
                   >
                     <Trash2 color="white" />
                    {deleteLoading ===idx ? "Loading...":" Delete"}
                     
                   </button>
             
                
                
                 
               </div>
               )}
             </div>
))}

<div>
<div className="pt-5 flex md:justify-end space-x-3">
             
             {parents.length<2 &&(
               <button
                 
                 type="button"
                 className="bg-[#0069D9] h-[40px] montserrat  md:shadow-none shadow-md shadow-black md:w-[22%] w-[50%] text-base leading-4 font-normal hover:bg-gray-400 text-white py-2 px-4 rounded inline-flex items-center"
                 onClick={() => {
                   addParent();
                 }}
               >
                 <Plus size={30} color="#ffffff" strokeWidth={3} />
                 Add A Parent
               </button>
               )}
                
                 
                 <button
                   type="submit"
                   form="parent_form"
                   className="h-[40px]  md:shadow-none shadow-md shadow-black md:h-[40px] md:w-[28%] w-[50%] bg-[#0069D9] text-base leading-4 font-normal hover:bg-gray-400 text-white py-2 px-4 rounded inline-flex items-center"
                  disabled={loading}
                 >
                   <ArrowRight size={28} color="#ffffff" strokeWidth={3} />
                
                   {loading ? "Loading..." : "Done Adding Parents"}
                 </button>
              
                  
                  
                 
               </div>

</div>
             </form>


           </>
         )}
         {(isFaimlymember == "donechildren" || isFaimlymember === "showprevious" || isFaimlymember === "doneparent") && (

           <>
           <p className="font-[700] leading-8 text-xl md:text-3xl droid text-black w-full ">Add Children Here</p>
           

          

                 <form onSubmit={handleChildData} id="childForm">
                 {otherChild?.map((parent, index) => (

<div key={index} className="space-y-5">
                   <div className={`grid ${otherChild[index]?.relation ==="other" ? "grid-cols-2" :"grid-cols-1"} gap-x-3`}>
                     <div>
                       Family Role
                       <div className="space-y-4">
                         <select
                           name="relation"
                           id=""
                           value={otherChild[index]?.relation}

                           onChange={(e) => {
                            
                             handleOtherChildren(index, e);
                            
                           }}
                           className="w-full border-[1px] p-1 capitalize"
                         >
                           <option value="">Role Type</option>{" "}
                           <option value="other">Custom</option>{" "}
                           {/* Placeholder */}
                           {textChild.map((buttonTexts, index) => (
                             <option  className="capitalize" key={index} value={buttonTexts}>
                               {buttonTexts}
                             </option>
                           ))}
                         
                         </select>
                         {errors[index]?.relation && <p className="text-red-500">{errors[index]?.relation}</p>}
                       </div>
                     </div>
                     {otherChild[index]?.relation ==="other" && (



                       <div>
                         <div className=" mt-6">
                           <input
                             className="w-full pl-1 h-[33px]"
                             type="text"
                             name="other_relation"
                             placeholder="Type Your Own"
                             value={otherChild[index]?.other_relation}

                             onChange={(e) => {
                               if(e.target.value.length <= 100) {
                               handleOtherChildren(index, e)
                               setNewInputValues1(e.target.value)
                               setCharStatus(false)
                             }
                             else{
                               setCharStatus(`other_relation_child_${index}`)

                             }
                           }

                             }
                           />
                            {charStatus===`other_relation_child_${index}` ? 
                       <span className="text-red-500 text-xs">Limit exceeded, only 100 characters allowed</span>
                     :null}
                     {errors[index]?.other_relation && <p className="text-red-500">{errors[index]?.other_relation}</p>}
                         </div>
                       </div>

                     )}
                   </div>

                   <div className="">
                     Full Name
                     <div className="border">
                       <input
                         className="w-full h-8 "
                         type="text"
                         name="full_name"
                         placeholder="Full Name"
                         onChange={(e) => {
                           handleOtherChildren(index, e)
                           handlefullname(e, index)
                         }}
                         value={otherChild[index]?.full_name}
                       />
                     </div>
                     {errors[index]?.full_name && <p className="text-red-500">{errors[index]?.full_name}</p>}
                       
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2  rounded-md space-y-2 md:space-y-0 md:space-x-2">
                     <div>
                       
                        <InputBySearch
                       label="My Birth City/State"
                       index={index}
                       name="birth_city"
                       getValue={handleOtherChildren}
                       setValue={otherChild[index]?.birth_city}
                               />

{errors[index]?.birth_city && <p className="text-red-500">{errors[index]?.birth_city}</p>}
                     </div>
                     <div>
                       <InputBySearch
                       label="My Current City/State"
                       index={index}
                       name="city"
                       getValue={handleOtherChildren}
                       setValue={otherChild[index]?.city}
                               />
                               {errors[index]?.city && <p className="text-red-500">{errors[index]?.city}</p>}
                       
                     </div>
                   </div>

                   <div className="grid grid-cols-1  rounded-md space-y-2 md:space-y-0 md:space-x-5">
                     <div>
                       Date of Birth
                       <input
                         type="Date"
                         className="w-full border-[1px] p-1   "
                         placeholder=" Date of Birth"
                         name="dob"
                         onChange={(e) => {
                           handleOtherChildren(index, e)
                      
                         }}
                         value={otherChild[index]?.dob}
                         max={todayDate}
                       />
                        {errors[index]?.dob && <p className="text-red-500">{errors[index]?.dob}</p>}
                
                     </div>
                   
                   </div>

                   <div className={`grid ${otherChild[index]?.favourite_food ==="other" ? "grid-cols-2" :"grid-cols-1"} gap-x-3`}>
                     <div>
                       A Favourite Food For {otherChild[index]?.full_name}  
                       <div className="space-y-4">
                         <select
                           name="favourite_food"
                           id=""
                           value={otherChild[index]?.favourite_food}
                           onChange={(e) => {
                          
                             handleOtherChildren(index, e)
                           }}
                           className="w-full border-[1px] p-1"
                         >
                           <option value="">My Favourite Food For </option>{" "}
                           <option  value="other">Custom </option>
                           {/* Placeholder */}
                           {textFood.map((buttonText, index) => (
                             <option key={index} value={buttonText}>
                               {buttonText}
                             </option>
                           ))}
                          
                         </select>
                         {errors[index]?.favourite_food && <p className="text-red-500">{errors[index]?.favourite_food}</p>}
                       </div>
                     </div>
                     {otherChild[index]?.favourite_food ==="other" && (
                       <div>
                         <div className=" mt-6">
                           <input
                             className="w-full pl-1 h-[33px]"
                             type="text"
                             name="other_favourite_food"
                             placeholder="Type Your Own"
                             value={otherChild[index]?.other_favourite_food}

                             onChange={(e) => {
                               if(e.target.value.length <= 100) {
                               handleOtherChildren(index, e)
                               setNewInputValues2((prevState2) => {
                                 const updatedArray2 = [...prevState2];
                                 updatedArray2[index] = e.target.value;
                                 return updatedArray2;
                               })
                               setCharStatus(false)
                             }
                             else{
                               setCharStatus(`other_favourite_food_${index}`)

                             }
                             }
                             }
                           />
                            {charStatus===`other_favourite_food_${index}` ? 
                       <span className="text-red-500 text-xs">Limit exceeded, only 100 characters allowed</span>
                     :null}
                      {errors[index]?.other_favourite_food && <p className="text-red-500">{errors[index]?.other_favourite_food}</p>}
                         </div>
                       </div>
                     )}
                   </div>

                   <div className={`grid ${otherChild[index]?.best_attribute ==="other" ? "grid-cols-2" :"grid-cols-1"} gap-x-3`}>
                     <div>
                     Choose A Favouite Attribute For  {otherChild[index]?.full_name}
                       <div className="space-y-4">
                         <select
                           name="best_attribute"
                           id=""
                           value={otherChild[index]?.best_attribute}

                           onChange={(e) => {

                             handleOtherChildren(index, e)

                           }}
                           className="w-full border-[1px] p-1"
                         >
                           <option value="">My Favorite Attribute</option> {/* Placeholder */}
                           <option value="other">Custom</option>
                           {textAttribute.map((buttonText, index) => (
                             <option key={index} value={buttonText}>
                               {buttonText}
                             </option>
                           ))}
                         </select>
                         {errors[index]?.best_attribute && <p className="text-red-500">{errors[index]?.best_attribute}</p>}
                       </div>
                     </div>
                     {otherChild[index]?.best_attribute ==="other" && (
                       <div>
                     
                         <div className="mt-12">
                           <input
                             className="w-full pl-1 h-[33px]"
                             type="text"
                             name="other_best_attribute"
                             placeholder="Type Your Own"
                             value={otherChild[index]?.other_best_attribute}

                             onChange={(e) => {
                               if(e.target.value.length <= 100) {  
                               handleOtherChildren(index, e)
                               setNewInputValues3((prevState2) => {
                                 const updatedArray2 = [...prevState2];
                                 updatedArray2[index] = e.target.value;
                                 return updatedArray2;
                               })
                               setCharStatus(false)
                             }
                             else{
                               setCharStatus(`other_best_attribute_child_${index}`)

                             }
                             }}
                           />
                            {charStatus===`other_best_attribute_child_${index}` ? 
                       <span className="text-red-500 text-xs">Limit exceeded, only 100 characters allowed</span>
                     :null}
                      {errors[index]?.other_best_attribute && <p className="text-red-500">{errors[index]?.other_best_attribute}</p>}
                         </div>
                       </div>
                     )}
                   </div>

                   {/* Add more form fields as necessary */}

                   {/* --------------- Favorite Quote, Saying start --------------- */}

                   <div className="pt-4 space-y-5 md:space-y-0 md:space-x-5">
                     <button
                       type="button"
                       onClick={() => hanldeRemoveQuote(index)}
                       className={`${!checkQuoteStatus.includes(index) ? "bg-[#FF9801]" :"bg-[#0069D9]"} text-sm leading-4 font-normal hover:scale-105 text-white py-3 px-4 rounded inline-flex items-center w-full md:w-auto`}
                     >
                       Favorite Quote, Saying
                     </button>
                     {/* --------------- Favorite Quote, Saying and --------------- */}

                     {/* --------------- Bible Verse start -------------- */}

                     <button
                       type="button"
                       onClick={() => hanldeAddQuote(index)}
                       className={`${checkQuoteStatus.includes(index) ? "bg-[#FF9801]" :"bg-[#0069D9]"} text-sm leading-4 font-normal hover:scale-105 text-white py-3 px-4 rounded inline-flex items-center w-full md:w-auto`}
                     >
                       Bible Verse
                     </button>
                   </div>

                   {/* --------------- Bible Verse and -------------- */}

                   {/* --------------- Favorite Quote, Saying start --------------- */}
                   {!checkQuoteStatus.includes(index) && (
                   <div className="grid grid-cols-1">
                     <div>
                       Favorite Quote, Saying For {otherChild[index]?.full_name}
                       <div className="space-y-4">
                         <select
                           name="favourite_quote"
                           id=""
                           value={otherChild[index]?.favourite_quote}

                           onChange={(e) => {
                            
                             handleOtherChildren(index, e)
                           }}
                           className="w-full  p-1 border-[1px]"
                         >
                           <option value="">
                             My Favorite Quote, Saying
                           </option>{" "}
                           <option value="other">Custom</option>
                           {/* Placeholder */}
                           {textQuoteSaying.map((buttonText, index) => (
                             <option key={index} value={buttonText}>
                               {buttonText}
                             </option>
                           ))}
                         </select>
                         {errors[index]?.favourite_quote && <p className="text-red-500">{errors[index]?.favourite_quote}</p>}
                       </div>
                     </div>
                     {otherChild[index]?.favourite_quote ==="other" && (
                       <div>
                         <div className=" mt-6">
                           <input
                             className="w-full pl-1 h-[33px]"
                             type="text"
                             placeholder="Type Your Own"
                             name="other_favourite_quote"
                             value={otherChild[index]?.other_favourite_quote}

                             onChange={(e) => {
                               if(e.target.value.length <= 100) {
                               handleOtherChildren(index, e)
                               setNewInputValues4((prevState2) => {
                                 const updatedArray2 = [...prevState2];
                                 updatedArray2[index] = e.target.value;
                                 return updatedArray2;
                               })
                               setCharStatus(false)
                             }
                             else{
                               setCharStatus(`other_favourite_quote_child_${index}`)
                             }
                             }}
                           />
                            {charStatus===`other_favourite_quote_child_${index}` ? 
                       <span className="text-red-500 text-xs">Limit exceeded, only 100 characters allowed</span>
                     :null}
                       {errors[index]?.other_favourite_quote && <p className="text-red-500">{errors[index]?.other_favourite_quote}</p>}
                         </div>
                       </div>
                     )}
                   </div>
                   )}

                   {/* --------------- Favorite Quote, Saying and --------------- */}

                   {/* --------------- Bible Verse start -------------- */}
                   {checkQuoteStatus.includes(index) && (
                     <div className="flex-wrap">
                       <div className={`w-full`}>
                         Bible Verse
                         <div className="space-y-4">
                           <select
                            name="favourite_quote"
                             id=""
                             value={otherChild[index]?.favourite_quote}

                             onChange={(e) => {
                           
                               handleOtherChildren(index, e)
                             }}
                             className="w-full border-[1px] p-1   "
                           >
                             <option value="">My Bible Verse</option>{" "}
                             {/* Placeholder */}
                             <option value="other">Custom</option>
                             {textBibleVerse.map((buttonText, index) => (
                               <option key={index} value={buttonText}>
                                 {buttonText}
                               </option>
                             ))}
                           </select>
                           {errors[index]?.favourite_quote && <p className="text-red-500">{errors[index]?.favourite_quote}</p>}
                         </div>
                       </div>
                       {otherChild[index]?.favourite_quote==="other" && (
                         <div className={`w-full`}>
                           <div className="">
                             <input
                               className="w-full pl-1 h-[33px]"
                               type="text"
                               name="other_favourite_quote"
                               placeholder="Type Your Own"
                               value={otherChild[index]?.other_favourite_quote}

                               onChange={(e) => {
                                 if(e.target.value.length <= 100) {
                                 handleOtherChildren(index, e)
                                 setNewInputValues5((prevState2) => {
                                   const updatedArray2 = [...prevState2];
                                   updatedArray2[index] = e.target.value;
                                   return updatedArray2;
                                 })
                                 setCharStatus(false)
                               }
                               else{
                                 
                                 setCharStatus(`other_favourite_quote_child_bible_${index}`)
                               }
                               }
                               }
                             />
                              {charStatus===`other_favourite_quote_child_bible_${index}` ? 
                       <span className="text-red-500 text-xs">Limit exceeded, only 100 characters allowed</span>
                     :null}
                      {errors[index]?.other_favourite_quote && <p className="text-red-500">{errors[index]?.other_favourite_quote}</p>}
                           </div>
                         </div>
                       )}
                     </div>
                   )}
                   {/* --------------- Bible Verse and -------------- */}

                   <div className="pt-5 text-center">

                     {otherChild[index] && (
                     <button
                       type="button"
                       className="bg-[#0069D9] text-center justify-center  text-sm leading-4 font-normal hover:bg-gray-400 text-white py-3 px-4 rounded inline-flex items-center w-full md:w-auto"
                     >
                         <TheCropImage
                           cropValue={otherChild[index]?.image}
                           hanleImage={hanldeChildrenImage}
                           index={index}
                         />
                     
                     
                     </button>
                     
                       )}
                    
                   </div>

                   {otherChild[index] && otherChild[index]?.image && otherChild[index]?.image !== "#" && otherChild[index]?.image !== null && (
                     <div className="w-24" key={index}>
                       <Image
                         src={otherChild[index]?.image}
                         height={500}
                         width={500}
                         alt={`Cropped ${index}`}
                       />
                     </div>
                   )}
                   <div className="pt-5 flex justify-end space-x-3">
                     <button
                       type="button"
                       className="h-[40px] w-[25%] md:w-[16%] bg-[#C82333] text-base leading-4 font-normal  text-white py-3 px-4 rounded inline-flex items-center"
                       onClick={() => deleteChild(index)}
                     >
                       <Trash2 color="white" />
                      {deleteLoading===index ? "Loading..." : "Delete"}
                     </button>
                     {parentspreview && (
                       <button
                         type="submit"
                         form="childForm"
                         className=" h-[60px] w-[28%] md:w-[32%]  montserrat bg-[#0069D9] text-base leading-4 font-normal hover:bg-gray-400 text-white py-3 px-4 rounded inline-flex items-center"
                         disabled={loading}

                       >
                         <ArrowRight
                           size={28}
                           color="#ffffff"
                           strokeWidth={3}
                         />
                          {loading ? "Loading..." : "Done Adding children"}
                       </button>
                     )}
                     {/* {
               parents   && ( */}
                     <button
                       type="button"
                       className="h-[40px] w-[25%] md:w-[27%] montserrat bg-[#0069D9] text-base leading-4 font-normal hover:bg-gray-400 text-white py-3 px-4 rounded inline-flex items-center"
                       onClick={() => handleChildForm()}
                     >
                       <Plus size={30} color="#ffffff" strokeWidth={3} />
                       Add A child
                     </button>
                     {/* )} */}
                   </div>
                   </div>

))}
                 </form>
            
           </>
         )}
       
       </div>
      
        {/* loader end */}
     
      </div>
    </>
  );
};

export default LeftSide;