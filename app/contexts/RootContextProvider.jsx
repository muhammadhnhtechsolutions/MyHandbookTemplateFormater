'use client'
import React, {  useState } from 'react'
import {rootContexts} from './rootContexts'

export default function RootContextProvider({children}) {
  
  
    const [headerData,setHeaderData]= useState('');
    const [data,setData]=useState([]);
    const [data2,setData2]=useState([]);
    const [data3,setData3]=useState([]);
    const [imgdata,setImgdata]=useState(null);
    const [value, setValue] = React.useState('The Sample Family');
    const [value1, setValue1] = React.useState('To be a close knit family cultivating genuine relationships and living a healthy & active lifestyle while also choosing to be debt free.');
    const [value2, setValue2] = React.useState('');
    const [missionstate, setMissionstate] = React.useState('The Sample Family');
    const [missionstate1, setMissionstate1] = React.useState('We choose daily to be respectful to  others, to nurture relationships, to practice gratefulness and to serve and community with purpose and intention.');
    const [familymed, setFamilyMed] = useState([
      "Use devices only during the times agreed to.",
      "I agree to respect other people’s privacy.",
      "I will not take or post pictures or videos of others without their permission.",
      "I agree to listen calmly and openly when discussing media rules",
      "I will not give out personal information to any people or sites I don’t know.",
      "I will keep passwords between my parents and I.",
      "I am responsible to manage my device use and will not rely on others to remind me.",
      "I agree to hand over my devices without arguing if I happen to violate this agreement.",
    ]);
    const [familycon, setFamilycon] = React.useState('');
    const [introduction, setIntroduction] = React.useState(`
    \n
    Dear Family,\n
    \n</br>
    \n</br>

    I am pleased to present to you our family handbook, a guide for our future. As a parent, it has been my utmost desire to create a strong and united family; one that upholds core values, shares a common vision, and works towards a shared mission. This handbook is an essential tool that will help us achieve these goals.\n
    \n</br>
    \n</br>
    
    The aim of this handbook is to provide a clear understanding of our family's values, codes of conduct, and expectations. It serves as a reference guide for all family members, and it is designed to promote communication and unity among us. This handbook is not just a set of rules, but it is a reflection of the love and care we have for each other.\n
    \n</br>
    \n</br>
    
    Our family handbook outlines our mission to create a harmonious and loving environment where each member can thrive and reach their full potential. It also highlights our vision of building a strong and resilient family that can overcome any challenges that come our way.\n
    \n</br>
    \n</br>
    
    I believe that by following the guidelines outlined in this handbook, we can strengthen our family bonds and create lasting memories. It is my hope that this handbook will serve as a reminder of our collective goals and values, and guide us towards creating a happy and fulfilling family life`);

    const [ summarycomp , setSummarycomp ] = useState(`
    \n            Dear Family\n            
    <br />
    <br />
    \n            I am honored to have the opportunity to be a dad to three amazing kiddos.\n            I can\u2019t think of a greater task to be charged with on this earth than to be able to be your dad and to have you kiddos as my children.\n            I look forward to continuing to parent you kids and lead you and directyou in the ways that grampy and mimi lead me.\n            I hope you bring me lots of grandchildren and that we all stay close as we continue to navigate the waters of this life.\n            And some day we will all get to meet again in the arms of Jesus.\n            If I die before you (which is likely) and you finally make it to heaven, you will find me fishing with Grampy in a boat somewhere.\n            

    <br />
    <br />
    \n            I love you crazy little miracles.\n            
    <br />
    <br />
    \n           <Strong>Dad\n </Strong>         `); 
   
    const [covercon , setCovercon] = useState('');

    const [ codeconduct, setCodeconduct ] = useState('');
    const [ codeconduct1, setCodeconduct1 ] = useState('');
    const [ inputValue1, setInputValue1 ] = useState('');
    const [coverinput, setCoverinput] = useState("");

    const [clickedButtonIndex, setClickedButtonIndex] = useState(-1);
    const [selectedValues5, setSelectedValues5] = useState(`\n        What We Value. What We Stand For. Who We Serve.\n`);
    const [editorEnabled, setEditorEnabled] = useState(false);

    const [parentspreview, setParentspreview] = useState([]);
    const [parentspreview1, setParentspreview1] = useState([]);
    const [parentspreview2, setParentspreview2] = useState([]);
    const [parentspreview3, setParentspreview3] = useState([]);

    const [image, setImage] = useState("");

    const [showImage, setShowImage] = useState("");

    const [cropData, setCropData] = useState("#");
    const [cropData1, setCropData1] = useState("#");
    const [cropData2, setCropData2] = useState("#");
    const [cropData3, setCropData3] = useState("#");

    const [selectedVal, setSelectedVal] = useState('');

    const [clickedButtonfamily, setClickedButtonFamily] = useState(-1);
  const [previewInputValue, setPreviewInputValue] = useState('');
  const [birthName, setBirthName] = useState("Khan");
  const [birthName1, setBirthName1] = useState("Khan");
  const [birthName2, setBirthName2] = useState("Khan");
  const [nextName3, setNextName3] = useState("Khan");
  const [nextName2, setNextName2] = useState("Khan");
  const [nextName1, setNextName1] = useState("Khan");

  const [nextbirthName2, setNextBirthName2] = useState("Khan");
  const [nextbirthName3, setNextBirthName3] = useState("Khan");
  const [birthName3, setBirthName3] = useState("Khan");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate1, setSelectedDate1] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);
  const [clickedButtonfamily1, setClickedButtonFamily1] = useState(-1);
  const [previewInputValue1, setPreviewInputValue1] = useState('');
  const [clickedButtonfamily2, setClickedButtonFamily2] = useState(-1);
  const [previewInputValue2, setPreviewInputValue2] = useState('');
  const [clickedButtonfamily3, setClickedButtonFamily3] = useState(-1);
  const [clickedButtonfamily4, setClickedButtonFamily4] = useState(-1);
  const [ clickedButtonfamily5, setClickedButtonFamily5 ] = useState(-1);
  const [ clickedButtonfamily6, setClickedButtonFamily6 ] = useState(-1);
  const [ clickedButtonfamily7, setClickedButtonFamily7 ] = useState(-1);
  const [ clickedButtonfamily8, setClickedButtonFamily8 ] = useState(-1);
  const [ clickedButtonfamily9, setClickedButtonFamily9 ] = useState(-1);
  const [ clickedButtonfamily10, setClickedButtonFamily10 ] = useState(-1);
  const [ clickednextButtonfamily1, setNextClickedButtonFamily1 ] = useState(-1);
  const [ clickednextButtonfamily2, setNextClickedButtonFamily2 ] = useState(-1);
  const [ clickednextButtonfamily3, setNextClickedButtonFamily3 ] = useState(-1);
  const [ clickednextButtonfamily4, setNextClickedButtonFamily4 ] = useState(-1);
  const [ clickedButtonfamilys, setClickedButtonFamilys ] = useState(-1);
  const [ clickedButtonfamilys1, setClickedButtonFamilys1 ] = useState(-1);
  const [previewInputValue3, setPreviewInputValue3] = useState('');
  const [previewInputValue4, setPreviewInputValue4] = useState('');
  const [previewInputValue5, setPreviewInputValue5] = useState('');
  const [previewInputValue6, setPreviewInputValue6] = useState('');
  const [previewInputValue7, setPreviewInputValue7] = useState('');
  const [previewInputValue8, setPreviewInputValue8] = useState('');
  const [previewInputValue9, setPreviewInputValue9] = useState('');
  const [previewInputValue10, setPreviewInputValue10] = useState('');
  const [previewInputValue11, setPreviewInputValue11] = useState('');
  const [previewInputValues, setPreviewInputValues] = useState('');
  const [previewInputValues1, setPreviewInputValues1] = useState('');
  const [nextInputValues1, setnextInputValue1] = useState('');
  const [nextInputValues2, setnextInputValue2] = useState('');
  const [nextInputValues3, setnextInputValue3] = useState('');
  const [nextInputValues4, setnextInputValue4] = useState('');
  const [ myprofession2, setMyProfession2 ] = useState('');
  const [ myprofession3, setMyProfession3 ] = useState('');

  const [selectedname, setSelectedName] = useState([]);
  const [selectedname1, setSelectedName1] = useState([]);
  const [selectedname2, setSelectedName2] = useState([]);
  const [selectedname3, setSelectedName3] = useState([]);
  const [ clickedNewButtonfamilys1, setClickedNewButtonFamilys1 ] = useState([]);
  const [ clickedNewButtonfamilys2, setClickedNewButtonFamilys2 ] = useState([]);
  const [ clickedNewButtonfamilys3, setClickedNewButtonFamilys3 ] = useState([]);
  const [ clickedNewButtonfamilys4, setClickedNewButtonFamilys4 ] = useState([]);
  const [ clickedNewButtonfamilys5, setClickedNewButtonFamilys5 ] = useState([]);
  const [newInputValues1, setNewInputValues1] = useState([]);
  const [newInputValues2, setNewInputValues2] = useState([]);
  const [newInputValues3, setNewInputValues3] = useState([]);
  const [newInputValues4, setNewInputValues4] = useState([]);
  const [newInputValues5, setNewInputValues5] = useState([]);
  const [emailotp, setEmailotp] = useState([]);
  const [allmoduledata, setAllmoduledata] = useState([]);
  const [notes, setNotes] = useState({ note: '' });




  

    
  return (
    <rootContexts.Provider value={{headerData,setHeaderData,data,setData,data2,setData2,data3,setData3, imgdata,setImgdata, value, setValue, value1, setValue1, value2, setValue2, missionstate, setMissionstate, missionstate1, setMissionstate1, familymed, setFamilyMed, familycon, setFamilycon, introduction, setIntroduction, codeconduct, setCodeconduct, codeconduct1, setCodeconduct1, inputValue1, setInputValue1, summarycomp , setSummarycomp, coverinput, setCoverinput, covercon , setCovercon, editorEnabled, setEditorEnabled, clickedButtonIndex, setClickedButtonIndex, selectedValues5, setSelectedValues5, parentspreview, setParentspreview,parentspreview1, setParentspreview1,parentspreview2, setParentspreview2,parentspreview3, setParentspreview3, image, setImage, showImage, setShowImage, cropData, setCropData, cropData1, setCropData1, cropData2, setCropData2, cropData3, setCropData3, selectedVal, setSelectedVal, clickedButtonfamily, setClickedButtonFamily, previewInputValue, setPreviewInputValue, birthName, setBirthName, birthName1, setBirthName1, birthName2, setBirthName2, birthName3, setBirthName3, selectedDate, setSelectedDate, setSelectedDate1, selectedDate1, selectedDate2, setSelectedDate2, clickedButtonfamily1, setClickedButtonFamily1, previewInputValue1, setPreviewInputValue1,clickedButtonfamily2, setClickedButtonFamily2, previewInputValue2, setPreviewInputValue2, clickedButtonfamily3, setClickedButtonFamily3, clickedButtonfamily4, setClickedButtonFamily4, clickedButtonfamily5, setClickedButtonFamily5, clickedButtonfamily6, setClickedButtonFamily6, clickedButtonfamily7, setClickedButtonFamily7, clickedButtonfamily8, setClickedButtonFamily8, clickedButtonfamily9, setClickedButtonFamily9, clickedButtonfamily10, setClickedButtonFamily10,
      clickedButtonfamilys, setClickedButtonFamilys, clickedButtonfamilys1, setClickedButtonFamilys1, previewInputValue3, setPreviewInputValue3, previewInputValue4, setPreviewInputValue4, previewInputValue5, setPreviewInputValue5, previewInputValue6, setPreviewInputValue6, previewInputValue7, setPreviewInputValue7, previewInputValue8, setPreviewInputValue8, previewInputValue9, setPreviewInputValue9,
      previewInputValue10, setPreviewInputValue10, clickednextButtonfamily1, setNextClickedButtonFamily1, clickednextButtonfamily2, setNextClickedButtonFamily2, clickednextButtonfamily3, setNextClickedButtonFamily3, clickednextButtonfamily4, setNextClickedButtonFamily4, previewInputValue11, setPreviewInputValue11, myprofession2, setMyProfession2, myprofession3, setMyProfession3, previewInputValues, setPreviewInputValues, previewInputValues1, setPreviewInputValues1, nextInputValues1, setnextInputValue1, nextInputValues2, setnextInputValue2, nextInputValues3, setnextInputValue3, nextInputValues4, setnextInputValue4, nextbirthName2, setNextBirthName2, nextbirthName3, setNextBirthName3, selectedname, setSelectedName, clickedNewButtonfamilys1, setClickedNewButtonFamilys1, clickedNewButtonfamilys2, setClickedNewButtonFamilys2, clickedNewButtonfamilys3, setClickedNewButtonFamilys3, clickedNewButtonfamilys4, setClickedNewButtonFamilys4, clickedNewButtonfamilys5, setClickedNewButtonFamilys5, newInputValues1, setNewInputValues1, newInputValues2, setNewInputValues2, newInputValues3, setNewInputValues3, newInputValues4, setNewInputValues4, newInputValues5, setNewInputValues5, selectedname1, setSelectedName1, selectedname2, setSelectedName2, selectedname3, setSelectedName3, nextName3, setNextName3, nextName2, setNextName2, nextName1, setNextName1 ,allmoduledata, setAllmoduledata,notes, setNotes,emailotp, setEmailotp}}>
        {children}
    </rootContexts.Provider>
  );
}
