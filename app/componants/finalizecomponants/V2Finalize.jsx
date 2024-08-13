/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import React, { useCallback, useEffect, useRef, useState } from "react";
import HTMLFlipBook from 'react-pageflip';
import jsPDF from "jspdf";
import Image1 from "next/image";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Loader from "../../assets/loader.gif";
import img from "../../assets/imges/bannerSectionImg.jpg";
import img2 from "../../assets/imges/FHB_Collage-2.png";
import img3 from "../../assets/imges/FHB_Collage-4.png";
import bgImage from "../../assets/NewImages/constitution-bg.png";
import "./style.css";
import { useRouter } from "next/navigation";
import IntrodutionSvg, { ItrodutionsvgToDataUrl } from "./IntrodutionSvg";
import FamilyMamberSvg, { FamilyMamberSvgToDataUrl } from "./FamilyMamberSvg";
import MapFamilyMamberSvg, { MapFamilyMamberSvgToDataUrl } from "./MapFamilyMamberSvg";
import FamilyMamberTwoSvg, { FamilyMamberTwoSvgToDataUrl } from "./FamilyMamberTwoSvg";
import MapFamilyMamberTwoSvg, { MapFamilyMamberTwoSvgToDataUrl } from "./MapFamilyMamberTwoSvg";
import ThirdFamilyMamberSvg, { ThirdFamilyMamberSvgToDataUrl } from "./ThirdFamilyMamberSvg";
import MapThirdFamilyMamberSvg, { MapThirdFamilyMamberSvgToDataUrl } from "./MapThirdFamilyMamberSvg";
import IntrodutionTwoSvg, {
  IntrodutionTwoSvgToDataUrl,
} from "./IntrodutionTwoSvg";
import ThridIntrodutionSvg, {
  ThridIntrodutionSvgToDataUrl,
} from "./ThridIntrodutionSvg";
import VissionSvg, { vissionSvgToDataUrl } from "./VissionSvg";
import VissionTwoSvg, { vissionTwoSvgToDataUrl } from "./VissionTwoSvg";
import ThirdVisionSvg, { ThirdVisionSvgToDataUrl } from "./ThirdVisionSvg";
import CoverPageSvg, { CoverPageSvgToDataUrl } from "./CoverPageSvg";
import CoverPageTwoSvg, { CoverPageTwoSvgToDataUrl } from "./CoverPageTwo";
import ThirdCoverPageSvg, {
  ThirdCoverPageSvgToDataUrl,
} from "./ThirdCoverPageSvg";
import MissionSvg, { MissionSvgToDataUrl } from "./MissionSvg";
import MissionTwoSvg, { MissionTwoSvgToDataUrl } from "./MissionTwoSvg";
import ThirdMissionSvg, { ThirdMissionSvgToDataUrl } from "./ThirdMissionSvg";
import CoreValueSvg, { CoreValueSvgToDataUrl } from "./CoreValueSvg";
import CoreValueTwoSvg, { CoreValueTwoSvgToDataUrl } from "./CoreValueTwoSvg";
import ThirdCoreValueSvg, {
  ThirdCoreValueSvgToDataUrl,
} from "./ThirdCoreValueSvg";
import SummarySvg, { SummarySvgToDataUrl } from "./SummarySvg";
import SummaryTwoSvg, { SummaryTwoSvgToDataUrl } from "./SummaryTwoSvg";
import ThridSummarySvg, { ThridSummarySvgToDataUrl } from "./ThridSummarySvg";
import FamilyConsSvg, { FamilyConsToDataUrl } from "./FamilyConsSvg";
import FamilyConsTwoSvg, {
  FamilyConsTwoSvgToDataUrl,
} from "./FamilyConsTwoSvg";
import ThridFamilyConsSvg, {
  ThridFamilyConsSvgToDataUrl,
} from "./ThridFamilyConsSvg";
import { useAppDispatch, useAppSelector } from "@/app/Redux/lib/hooks";
import { toast } from "react-toastify";
import {
  setClickedButtonIndex,
  setCodeconduct1,
  setCorenote,
  setCovercon,
  setData2,
  setFamilyMed,
  setFamilyName,
  setFamilycon,
  setGetIntro,
  setImageCover,
  setImgdata,
  setInputValue1,
  setIntroduction,
  setMissionstate,
  setMissionstate1,
  setNotes,
  setSelectedValues5,
  setSummarycomp,
  setValue,
  setValue1,
  setisFaimlymember,
} from "@/app/Redux/lib/features/product/productSlice";
import CodeOfConductSvg, {
  CodeOfConductSvgToDataUrl,
} from "./CodeOfConductSvg";
import CodeOfConductTwoSvg, {
  CodeOfConductTwoSvgToDataUrl,
} from "./CodeOfConductTwoSvg";
import ThirdCodeOfConductSvg, {
  ThirdCodeOfConductSvgToDataUrl,
} from "./ThirdCodeOfConductSvg";
import FamilyMediaSvg, { FamilyMediaSvgToDataUrl } from "./FamilyMediaSvg";
import FamilyMediaTwoSvg, {
  FamilyMediaTwoSvgToDataUrl,
} from "./FamilyMediaTwoSvg";
import ThirdFamilyMediaSvg, {
  ThirdFamilyMediaSvgToDataUrl,
} from "./ThirdFamilyMediaSvg";
import { CompaletePDF } from "@/app/services/CompaletePDF";
import axios from "axios";
import useFamilyMember from "@/app/hooks/useFamilyMember";

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
const resultSvg = { status: false, book: {} };

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};


const V2Finalize = () => {
  // usama qazi
  // Loader start
  const [loading, setLoading] = useState(true);
  const [loadingG, setLoadingG] = useState(false);
  // Loader and
  const router = useRouter();
  const [border, setBorder] = useState(1);
  const [images, setImages] = useState([]);
  const [svgImage, setSvgImage] = useState([]);
  const [svgImage2, setSvgImage2] = useState("");
  const [svgImage3, setSvgImage3] = useState("");
 const changeOnData=useRef(null)
  const dispatch = useAppDispatch();
  const familyName = useAppSelector((state) => state?.api?.familyName);
  const data = useAppSelector((state) => state?.api?.notes);
  const dataVal = useAppSelector((state) => state?.api);
  const introduction = useAppSelector((state) => state?.api?.introduction);
  const familymed = useAppSelector((state) => state?.api?.familymed);
  const familycon = useAppSelector((state) => state?.api?.familycon);
  const value = useAppSelector((state) => state?.api?.value);
  const value1 = useAppSelector((state) => state?.api?.value1);
  const codeconduct = useAppSelector((state) => state?.api?.codeconduct);
  const codeconduct1 = useAppSelector((state) => state?.api?.codeconduct1);
  const inputValue1 = useAppSelector((state) => state?.api?.inputValue1);
  const summarycomp = useAppSelector((state) => state?.api?.summarycomp);
  const imagecover = useAppSelector((state) => state?.api?.imagecover);
// family mamber svg state start
// const { familyMembers, familyOtherMembers, setFamilyMembers, fetchFamily } = useFamilyMember();
const parentspreview2 = useAppSelector((state) => state.api.parentspreview2);
const parentspreview1 = useAppSelector((state) => state.api.parentspreview1);
const parentspreview = useAppSelector((state) => state.api.parentspreview);
const [parent1, setParent1] = useState({

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

});
const [parentdatacheck, setParentdatacheck] = useState(false);
const [parents, setParents] = useState(false); 
const [previewClicked, setPreviewClicked] = useState(false);
const [isDoneButtonVisible, setIsDoneButtonVisible] = useState(true);
const cropData3 = useAppSelector((state) => state.api.cropData3);
const cropData2 = useAppSelector((state) => state.api.cropData2);
const cropData1 = useAppSelector((state) => state.api.cropData1);
const cropData = useAppSelector((state) => state.api.cropData);
const [otherParents, setOtherParents] = useState({
  relation: "",
  other_relation: "",
  full_name: "",
  birth_city: "",
  city: "",
  email: "",
  dob: "",
  profession: "",
  favourite_food: "",
  other_favourite_food: "",
  favourite_holiday: "",
  other_favourite_holiday: "",
  afraid_of: "",
  other_afraid_of: "",
  favourite_quote: "",
  other_favourite_quote: "",
  image: cropData1,
});
const [childdatacheck, setchilddatacheck] = useState(false);
const [Child, setChild] = useState([{
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
const [numberOfChilds, setNumberofChilds] = useState([0])

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

const addParent = () => {

  setParents(true);
  setPreviewClicked(true);
  setIsDoneButtonVisible(false);
};
// family mamber svg state start

  const svgRef = useRef(null);
  const [clickedButtons, setClickedButtons] = useState(
    Array(statements.length).fill(false)
  );
  const [showInput, setShowInput] = useState(0);
  const [selectedValues, setSelectedValues] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [filePath, setFilePath] = useState("");

  // Family Mamber Svg Component start
  const [familyMembers, setFamilyMembers] = useState([]);
    const FamilyMamberImageData = FamilyMamberSvgToDataUrl(
      <FamilyMamberSvg
      familyName={familyName}
      familyMembers={familyMembers}
      />
    );
  // Family Mamber Svg Component start

    // Family Mamber Svg Component start
    // const chunkArray = (arr, size) => {
    //   return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
    //     arr.slice(i * size, i * size + size)
    //   );
    // };
  
    // // Divide parentspreview3 into chunks of 3
    // const chunks = chunkArray(familyMembers?.book?.family_bios?.other_members.length + familyMembers?.book?.family_bios?.parent_members, 3);

    const [chunks, setChunks] = useState([]);

    useEffect(() => {
      if (familyMembers?.book?.family_bios?.other_members) {
        setChunks(chunkArray(familyMembers?.book?.family_bios?.other_members, 3));
      }
    }, [familyMembers?.book?.family_bios?.other_members]);

    const MapFamilyMamberImageData = MapFamilyMamberSvgToDataUrl(
      <MapFamilyMamberSvg
      chunks={chunks}
      familyName={familyName}
      familyMembers={familyMembers}
      />
    );
  // Family Mamber Svg Component start

    // Family Mamber Two Svg Component start
    const FamilyMamberTwoImageData = FamilyMamberTwoSvgToDataUrl(
      <FamilyMamberTwoSvg
      familyName={familyName}
      familyMembers={familyMembers}
      />
    );

    const MapFamilyMamberTwoImageData = MapFamilyMamberTwoSvgToDataUrl(
      <MapFamilyMamberTwoSvg
      familyName={familyName}
      familyMembers={familyMembers}
      />
    );
  // Family Mamber Two Svg Component start

    // Family Mamber Third Svg Component start
    const ThirdFamilyMamberImageData = ThirdFamilyMamberSvgToDataUrl(
      <ThirdFamilyMamberSvg
      familyName={familyName}
      familyMembers={familyMembers}
      />
    );
  // Family Mamber Third Svg Component start

      // Family Mamber Map Third Svg Component start
      const MapThirdFamilyMamberImageData = MapThirdFamilyMamberSvgToDataUrl(
        <MapThirdFamilyMamberSvg
        familyName={familyName}
        familyMembers={familyMembers}
        />
      );
    // Family Mamber Map Third Svg Component start

  // Core Values Svg Api start
  const [familyName1, setFamilyName1] = useState("");
  const CoreValueImageData = CoreValueSvgToDataUrl(
    <CoreValueSvg
      familyName1={familyName}
      data2={dataVal?.data2}
      corevalues={dataVal?.setCorenote}
    />
  );
  // Core Values Svg Api and

  // Core Values Svg Api start
  const CoreValueTwoSvgImageData = CoreValueTwoSvgToDataUrl(
    <CoreValueTwoSvg
      familyName1={familyName}
      data2={dataVal?.data2}
      corevalues={dataVal?.setCorenote}
    />
  );
  // Core Values Svg Api and
  // Core Values Svg Api start
  const ThirdCoreValueSvgImageData = ThirdCoreValueSvgToDataUrl(
    <ThirdCoreValueSvg
      familyName1={familyName}
      data2={dataVal?.data2}
      corevalues={dataVal?.setCorenote}
    />
  );
  // Core Values Svg Api and

  // Cover PAGE svg api start
  const [isChecked, setIsChecked] = useState(false);
  const [textValue, setTextValue] = useState("");

  const CoverPageSvgImageData = CoverPageSvgToDataUrl(
    <CoverPageSvg
      familyName={familyName}
      textValue={textValue}
      imagecover={imagecover}
      selectedValues5={dataVal?.selectedValues5}
      covercon={dataVal?.covercon}
    />
  );
  // Cover PAGE svg api and

  // Cover PAGE Two svg api start
  const CoverPageTwoSvgImageData = CoverPageTwoSvgToDataUrl(
    <CoverPageTwoSvg
      familyName={familyName}
      textValue={textValue}
      imagecover={imagecover}
      selectedValues5={dataVal?.selectedValues5}
      covercon={dataVal?.covercon}
    />
  );
  // Cover PAGE Two svg api and

  // Cover PAGE Third svg api start
  const ThirdCoverPageImageData = ThirdCoverPageSvgToDataUrl(
    <ThirdCoverPageSvg
      familyName={familyName}
      textValue={textValue}
      imagecover={imagecover}
      selectedValues5={dataVal?.selectedValues5}
      covercon={dataVal?.covercon}
    />
  );
  // Cover PAGE Third svg api and
  // Family Constitution SVG API start
  const ConsImage = FamilyConsToDataUrl(
    <FamilyConsSvg familycon={familycon} familyName={familyName} />
  );
  // Family Constitution SVG API and

  // Family Constitution Two SVG API start
  const ConsTwoImage = FamilyConsTwoSvgToDataUrl(
    <FamilyConsTwoSvg familycon={familycon} familyName={familyName} />
  );
  // Family Constitution Two SVG API and

  // Family Constitution Two SVG API start
  const ThridFamilyConsImage = ThridFamilyConsSvgToDataUrl(
    <ThridFamilyConsSvg
      familycon={familycon}
      familyName={familyName}
      bgImage={bgImage}
    />
  );
  // Family Constitution Two SVG API and

  // Summary Svg Api start
  const [signatureImage, setSignatureImage] = useState([]);
  const SummaryImageData = SummarySvgToDataUrl(
    <SummarySvg familyName={familyName} summarycomp={summarycomp} signatureImage={signatureImage} />
  );
  // Summary Svg Api AND

  // Summary Two Svg Api start
  const SummaryTwoImageData = SummaryTwoSvgToDataUrl(
    <SummaryTwoSvg familyName={familyName} summarycomp={summarycomp} signatureImage={signatureImage} />
  );
  // Summary Two Svg Api AND
  // Summary Thrid Svg Api start
  const ThridSummarySvgImageData = ThridSummarySvgToDataUrl(
    <ThridSummarySvg familyName={familyName} summarycomp={summarycomp} signatureImage={signatureImage} />
  );
  // Summary Thrid Svg Api AND

  // vission Svg Api start
  const vissionImageData = vissionSvgToDataUrl(
    <VissionSvg value={value} value1={value1} />
  );
  // vission Svg Api and

  // vission Svg Api start
  const vissionThirdImageData = ThirdVisionSvgToDataUrl(
    <ThirdVisionSvg value={value} value1={value1} />
  );
  // vission Svg Api and

  // vission Svg Api start
  const VissionTwoSvgImageData = vissionTwoSvgToDataUrl(
    <VissionTwoSvg value={value} value1={value1} />
  );
  // vission Svg Api and
  //introduction svg api
  const IntrodutionSvgImageData = ItrodutionsvgToDataUrl(
    <IntrodutionSvg familyName={familyName} introduction={introduction} />
  );
  //introduction svg api

  //introduction Two svg api
  const IntrodutionTwoSvgImageData = IntrodutionTwoSvgToDataUrl(
    <IntrodutionTwoSvg familyName={familyName} introduction={introduction} />
  );
  //introduction Two svg api

  //introduction Third svg api
  const ThridIntrodutionImageData = ThridIntrodutionSvgToDataUrl(
    <ThridIntrodutionSvg familyName={familyName} introduction={introduction} />
  );
  //introduction Third svg api

  // Mission Svg Api start
  const missionImageData = MissionSvgToDataUrl(
    <MissionSvg
      missionstate={dataVal?.missionstate}
      missionstate1={dataVal?.missionstate1}
    />
  );
  // Mission Svg Api AND

  // Mission Two Svg Api start
  const MissionTwoSvgImageData = MissionTwoSvgToDataUrl(
    <MissionTwoSvg
      missionstate={dataVal?.missionstate}
      missionstate1={dataVal?.missionstate1}
    />
  );
  // Mission Svg Two Api AND

  // Mission Third Svg Api start
  const ThirdMissionSvgImageData = ThirdMissionSvgToDataUrl(
    <ThirdMissionSvg
      missionstate={dataVal?.missionstate}
      missionstate1={dataVal?.missionstate1}
    />
  );
  // Mission Svg Third Api AND

  // Family Media SVG API start
  const MediaImageData = FamilyMediaSvgToDataUrl(
    <FamilyMediaSvg
      familymed={familymed}
      inputValue={inputValue}
      imagecover={imagecover}
      // familyName={familyName}
    />
  );
  // Family Media SVG API and

  // Family Media Two SVG API start
  const FamilyMediaTwoSvgImageData = FamilyMediaTwoSvgToDataUrl(
    <FamilyMediaTwoSvg
      familymed={familymed}
      inputValue={inputValue}
      imagecover={imagecover}
      familyName={familyName}
    />
  );
  // Family Media Two SVG API and

  // Family Media Third SVG API start
  const ThirdFamilyMediaImageData = ThirdFamilyMediaSvgToDataUrl(
    <ThirdFamilyMediaSvg
      familymed={familymed}
      inputValue={inputValue}
      imagecover={imagecover}
      familyName={familyName}
    />
  );
  // Family Media Third SVG API and

  // Code Of Conduct SVG API start
  const CodeOfConductImageData = CodeOfConductSvgToDataUrl(
    <CodeOfConductSvg
      codeconduct={codeconduct}
      codeconduct1={codeconduct1}
      inputValue1={inputValue1}
      imagecover={imagecover}
      familyName={familyName}
    />
  );
  // Code Of Conduct SVG API and

  // Code Of Conduct Two SVG API start
  const CodeOfConductTwoSvgImageData = CodeOfConductTwoSvgToDataUrl(
    <CodeOfConductTwoSvg
      codeconduct={codeconduct}
      codeconduct1={codeconduct1}
      inputValue1={inputValue1}
      imagecover={imagecover}
      familyName={familyName}
    />
  );
  // Code Of Conduct Two SVG API and

  // Code Of Conduct Two SVG API start
  const ThirdCodeOfConductImageData = ThirdCodeOfConductSvgToDataUrl(
    <ThirdCodeOfConductSvg
      codeconduct={codeconduct}
      codeconduct1={codeconduct1}
      inputValue1={inputValue1}
      imagecover={imagecover}
      familyName={familyName}
    />
  );
  // Code Of Conduct Two SVG API and
 const [isStatusChange,setIsStatusChange]= useState(false)
//  const sigCanvasRef = useRef(null);
  const SaveCompaletePDF = async () => {
    try {
      await new Promise(async (resolve) => {
        // setLoading(true);
        const result = await CompaletePDF();

        resultSvg.status = result?.status;
        resultSvg.book = result?.book;
    
        if (result?.status) {
          // setLoading(false);
          dispatch(setIntroduction(result?.book?.introduction_page?.note));
          dispatch(setNotes(result?.book?.introduction_page?.note));
          //  vission svg api start
          dispatch(setValue(result?.book?.vision_statements?.heading));
          dispatch(setValue1(result?.book?.vision_statements?.note));
          //  vission svg api and
          // Summary Svg Api start
          dispatch(setSummarycomp(result?.book?.summary?.note));

          if (result?.book?.summary?.signature) {
            setSignatureImage(result);
          } else {
            console.error(result?.error);
          }

          // setSignatureImage(result?.book?.summary?.signature);
          setFamilyName(result?.book?.name || "Sample");
          // Summary Svg Api and
          // Family Constitution SVG API start
          dispatch(setFamilycon(result?.book?.family_constitutions?.note));
          // Family Constitution SVG API and
          // Cover page svg api start
          dispatch(setFamilyName([result?.book?.cover_page?.lastname_heading]));
          dispatch(setFamilyName([result?.book?.cover_page?.lastname]));
          if (result?.book?.cover_page?.sentence) {
            setIsChecked(result?.book?.cover_page?.sentence);
            setTextValue(result?.book?.cover_page?.sentence);
          }
          if (result?.book?.cover_page?.sentence) {
            setIsChecked(result?.book?.cover_page?.sentence);
            setTextValue(result?.book?.cover_page?.sentence);
          }
  
          dispatch(setSelectedValues5(result?.book?.cover_page?.sub_title));
          dispatch(setClickedButtonIndex(result?.book?.cover_page?.sub_title));
          if (dataVal?.selectedValues5) {
          } else {
            dispatch(setCovercon(result?.book?.cover_page?.sub_title));
          }
          if (result?.book?.cover_page?.image) {
            try {
              const response 
              = await axios.get(
                // "https://familyhandbookapi.devssh.xyz" +
                  result?.book?.cover_page?.image,
                {
                  responseType: "arraybuffer",
                }
              );
  
              const arrBuffer = response.data;
  
              const base64Image = Buffer.from(arrBuffer, "binary").toString(
                "base64"
              );
              dispatch(setImageCover(base64Image));
              setIsStatusChange(true)
            
            } catch (error) {
              dispatch(setImageCover(null));
            }
          }
          // Cover page svg api and
          // core value api svg start
          if (result?.book?.core_values?.values_list) {
            const datausa = Object.values(result?.book?.core_values?.values_list).filter(
              (value) => typeof value === "string" && value !== null
            );
            dispatch(setData2(datausa));
            dispatch(setCorenote(result?.book?.core_values?.note));
          }
          setFamilyName1(result?.book?.name || "Sample");
          // core value api svg and
          // Mission api svg start
          dispatch(setMissionstate(result?.book?.mission_statements?.heading));
          dispatch(setMissionstate1(result?.book?.mission_statements?.note));
          // Mission api svg and
          // family media agreement start
          if (result?.book?.family_media_agreements?.statements) {
            const data = Object.values(
              result?.book?.family_media_agreements?.statements
            ).filter(
              (value) =>
                typeof value === "string" && value !== null && value !== ""
            );
            let setA = new Set(statements);
            let difference = data.filter((element) => !setA.has(element));
            let updatedData = data.filter(
              (element) => !difference.includes(element)
            );
            // selectedValues
            setShowInput(difference.length);
            setInputValue(difference);
  
            setSelectedValues(updatedData);
            dispatch(setFamilyMed(updatedData));
  
            setClickedButtons(data);
          }
          // family media agreement and
          //code of conduct svg api start
          if (result?.book?.code_of_conducts?.statements) {
            const dataConduct = Object.values(
              result?.book?.code_of_conducts?.statements
            ).filter((value) => typeof value === "string" && value !== "");
            let setAConduct = new Set(statements);
            let differenceConduct = dataConduct.filter(
              (element) => !setAConduct.has(element)
            );
            let updatedDataConduct = dataConduct.filter(
              (element) => !differenceConduct.includes(element)
            );
            setShowInput(differenceConduct.length);
            dispatch(setInputValue1(differenceConduct));
            setSelectedValues(updatedDataConduct);
            dispatch(setCodeconduct1(updatedDataConduct));
            setClickedButtons(
              dataConduct.map((statement) =>
                updatedDataConduct.includes(statement)
              )
            );
          }
  
          // setFamilyImage("https://familyhandbookapi.devssh.xyz" + result?.book?.cover_page?.image);
  
          //code of conduct svg api and

          // Family Mamber start
          setFamilyMembers(result)
         
          toast.success(result?.message);
          resolve(result);
        } else {
          dispatch(setisFaimlymember("dashboard"))
          // setLoading(true);
          toast.error(result?.message);
        }
  
      });
      
    } catch (error) {
      // setLoading(true);
      toast.error("Error sending PDF:", error)
    }
  };

  useEffect(() => {
    SaveCompaletePDF();
   
    // setLoading(true);
    // (async () => {
    //   // setLoading(false);
    //   // if (resultSvg.book?.id) handleImageClick([], 1);
    //   // else await SaveCompaletePDF();
    // })();
  },[]);
useEffect(()=>{
  handleImageClick([], 1)
  // setLoading(false)
  
},[isStatusChange])

useEffect(()=>{
  // setLoading(false)
  if (changeOnData && images) {
    setLoading(false);
    // alert("Images loaded");
  } 
  // alert("hello")
},[changeOnData,images])
  // const imageRef = useRef(null);

  // const downloadImage = (image) => {
  //     const canvas = document.createElement("canvas");
  //     const ctx = canvas.getContext("2d");

  //     const imgElement = new Image();
  //     imgElement.src = image;
  //     imgElement.onload = () => {
  //         canvas.width = imgElement.width*20;
  //         canvas.height = imgElement.height*20;

  //         ctx.drawImage(imgElement, 0, 0);

  //         const imageDataURL = canvas.toDataURL("image/png");

  //         const link = document.createElement("a");
  //         link.download = "image.png";
  //         link.href = imageDataURL;
  //         document.body.appendChild(link);
  //         link.click();
  //         document.body.removeChild(link);
  //     };
  // };

  const downloadImage = (image) => {
    const svgElement = svgRef.current;

  const scaleFactor = 2;

  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  const checkImg = new Image();
  checkImg.onload = () => {
    const img = new Image();
    const orientation = checkImg.height > checkImg.width ? 'p' : 'l'; 
    let width = 610 * 2.5;
    let height = 840 * 2.5;
    
    // let width = 6100
    // let height = 8400
    
    if (orientation == 'p') {
      img.width = width;
      img.height = height;
    }
    else {
      img.width = height;
      img.height = width;
    }
    img.onload = () => {
      // Get the width and height of the loaded image
      const svgWidth = img.width;
      const svgHeight = img.height;
      // Set canvas dimensions
      // canvas.width = svgWidth * scaleFactor;
      // canvas.height = svgHeight * scaleFactor;
      canvas.width = svgWidth;
      canvas.height = svgHeight;
  
      // Clear the canvas before scaling
      // ctx.clearRect(0, 0, canvas.width, canvas.height);
      // ctx.clearRect(0, 0, img.width, img.height);
  
      // Scale up the canvas context for higher resolution rendering
      // ctx.scale(scaleFactor, scaleFactor);
  
      // Draw SVG onto canvas
      ctx.drawImage(img, 0, 0, svgWidth, svgHeight);
  
      // Convert canvas to data URL
      const imageDataURL = canvas.toDataURL('image/png'); // We use 'image/png' for better quality
  
      // Create a new jsPDF instance
      const pdf = new jsPDF({
        orientation: orientation,
        unit: 'pt',
        format: "a4"
      });
  
      // Add the image to the PDF at the original dimensions
      pdf.addImage(imageDataURL, 'PNG', 0, 0, svgWidth / 2.5, svgHeight / 2.5);
  
      // Save the PDF
      pdf.save('image.pdf');
    };
    img.src = image;
  }
  checkImg.src = image;
};

const book = useRef();
 
const [isdisable, setIsDisable] = useState(true)

  const generatePDF = async () => {
    let width = 610 * 2.5;
    let height = 840 * 2.5;
    const imagePromises = images.map(async (image, index) => {
      return new Promise((resolve, reject) => {
        const checkImg = new Image();
        checkImg.onload = () => {
          const img = new Image();
          const orientation = checkImg.height > checkImg.width ? "p" : "l";
                
          let width = 610 * 2.4411;
          let height = 840 * 2.5;
          // let width = 6100
          // let height = 8400
          
          if (orientation == 'p') {
            img.width = width;
            img.height = height;
          }
          else {
            img.width = height;
            img.height = width;
          }
          img.onload = () => {
            const canvas = document.createElement("canvas");
            canvas.width = img.width;
            canvas.height = img.height;
            // canvas.width = 500;
            // canvas.height = (img.width / img.height) * canvas.width;
            const ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            const imgData = canvas.toDataURL("image/png");
            resolve({ imgData, img, orientation });
          };
          img.onerror = reject;
          img.src = image;
        };
        checkImg.src = image;
      });
    });

    const imageDataArray = await Promise.all(imagePromises);
    if (imageDataArray.length > 0) {
      // let o = imageDataArray[0].orientation
      const pdf = new jsPDF({
        unit: 'pt',
        format: "a4"
        // format: [width, height]
      });
      imageDataArray.forEach(({ imgData, img, orientation }, index) => {
        if (index !== 0) pdf.addPage("a4", orientation);
        // const imgWidth = 595.28;
        // const imgHeight = 800;
        // pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.addImage(imgData, "PNG", 0, 0, img.width / 2.5, img.height / 2.5);
      });
      // return
      pdf.save("document.pdf");
      return pdf.output("blob");
    }
  };

  const sendPDFToServer = async () => {
    setLoadingG(true);
    toast.success('please wait')
    try {
      const pdf = await generatePDF();
      const file = new File([pdf], `document-${Date.now()}.pdf`);
      setLoadingG(false);
      setIsDisable(false)
      const formData = new FormData();
      formData.append("pdf", file);
      const response = await axios.post(
        "https://familyhandbookapi.devssh.xyz/webapi/savepdf",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFilePath(response.data.pdf_file);
      toast.success("PDF sent to the server successfully!");
      setLoadingG(false)
    } catch (error) {
      // toast.error("Error sending PDF to the server.");
      console.error("Error sending PDF:", error);
    }
  };




const handleImageClick = (imageSet, index) => {
  imageSet = [];
  let result = resultSvg
 
  if (index == 1) {
    if(result?.book?.cover_page?.image) imageSet.push(CoverPageSvgImageData);
    if(result?.book?.introduction_page?.note) imageSet.push(IntrodutionSvgImageData);
    if(result?.book?.family_bios?.parent_members) imageSet.push(FamilyMamberImageData);
    if(familyMembers?.book?.family_bios?.other_members.length + familyMembers?.book?.family_bios?.parent_members.length > 3) imageSet.push(MapFamilyMamberImageData);
    if(result?.book?.core_values) imageSet.push(CoreValueImageData);
    if(result?.book?.vision_statements) imageSet.push(vissionImageData);
    if(result?.book?.mission_statements) imageSet.push(missionImageData);
    if(result?.book?.code_of_conducts) imageSet.push(CodeOfConductImageData);
    if(result?.book?.family_media_agreements) imageSet.push(MediaImageData);
    if(result?.book?.family_constitutions?.note) imageSet.push(ConsImage);
    if(result?.book?.summary?.note) imageSet.push(SummaryImageData);
  }
  else if (index == 2) {
    if(result?.book?.cover_page?.image) imageSet.push(CoverPageTwoSvgImageData);
    if(result?.book?.introduction_page?.note) imageSet.push(IntrodutionTwoSvgImageData);
    if(result?.book?.family_bios) imageSet.push(FamilyMamberTwoImageData);
    if(familyMembers?.book?.family_bios?.other_members.length + familyMembers?.book?.family_bios?.parent_members.length > 5) imageSet.push(MapFamilyMamberTwoImageData);
    if(result?.book?.core_values) imageSet.push(CoreValueTwoSvgImageData);
    if(result?.book?.vision_statements) imageSet.push(VissionTwoSvgImageData);
    if(result?.book?.mission_statements) imageSet.push(MissionTwoSvgImageData);
    if(result?.book?.code_of_conducts) imageSet.push(CodeOfConductTwoSvgImageData);
    if(result?.book?.family_media_agreements) imageSet.push(FamilyMediaTwoSvgImageData);
    if(result?.book?.family_constitutions?.note) imageSet.push(ConsTwoImage);
    if(result?.book?.summary?.note) imageSet.push(SummaryTwoImageData);
  }
  else if (index == 3) {
    if(result?.book?.cover_page?.image) imageSet.push(ThirdCoverPageImageData);
    if(result?.book?.introduction_page?.note) imageSet.push(ThridIntrodutionImageData);
    if(result?.book?.family_bios) imageSet.push(ThirdFamilyMamberImageData);
    if(familyMembers?.book?.family_bios?.other_members.length + familyMembers?.book?.family_bios?.parent_members.length > 2) imageSet.push(MapThirdFamilyMamberImageData);
    if(result?.book?.core_values) imageSet.push(ThirdCoreValueSvgImageData);
    if(result?.book?.vision_statements) imageSet.push(vissionThirdImageData);
    if(result?.book?.mission_statements) imageSet.push(ThirdMissionSvgImageData);
    if(result?.book?.code_of_conducts) imageSet.push(ThirdCodeOfConductImageData);
    if(result?.book?.family_media_agreements) imageSet.push(ThirdFamilyMediaImageData);
    if(result?.book?.family_constitutions?.note) imageSet.push(ThridFamilyConsImage);
    if(result?.book?.summary?.note) imageSet.push(ThridSummarySvgImageData);
  }
    setImages(imageSet ?? []);
    setBorder(index);
  };
const [isnumber, setNumber] = useState()
  const onFlip = useCallback((e) => {
    setNumber(e.data)
}, []);
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
        <div className="flex justify-center items-center flex-col md:flex-row md:space-x-10 md:space-y-0 space-y-5">
            <button type="button" onClick={() => handleImageClick([], 1)}
                className={`rounded-md border-[4px] w-[200px] ${border === 1 ? "border-primary border-[6px]" : "border-black"}`}
            >
                <Image1 src={img} className="cursor-pointer" alt="" cover="true" width={500} height={500} />
            </button>
            <button type="button"
                onClick={() => handleImageClick([], 2)}
                className={`rounded-lg border-[4px] w-[200px] ${border === 2 ? "border-primary border-[6px]" : "border-black"}`}
            >
                <Image1 src={img2} className="cursor-pointer" alt="" cover="true" width={500} height={500} />
            </button>
            <button type="button"
                onClick={() => handleImageClick([], 3)}
                className={`rounded-lg border-[4px] w-[200px] ${border === 3 ? "border-primary border-[6px]" : "border-black"}`}
            >

                <Image1 src={img3} alt="" className="cursor-pointer" cover="true" width={500} height={500} />
            </button>
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
                 onClick={sendPDFToServer}
                // onClick={()=>router.push("/pdf_paages")}
                className="text-[17px] md:w-3/12 hover:bg-[#21A7D0] duration-300 ease-in hover:ease-out leading-[30px] p-1 font-[300] text-[white] bg-[#0069D9] py-[5px] px-[10px] rounded-[4px] w-full"
            >
                {loadingG ? "Loading..." : "Generate PDF"}
            </button>
            
            <div>
    </div>
    
        </div>
      <div className="w-[100%]">
       {isStatusChange && images.length>0 &&(
          <div className="mx-auto bg-primary w-full border border-primary border-solid overflow-hidden">
          
          <HTMLFlipBook onFlip={onFlip}  ref={book} className="mx-auto overflow-hidden" width={350} height={500}  >
            {images.map((item,index)=>(
        
              <div className="demoPage h-full w-full flex items-center justify-center" key={index}>
          <Image1 src={item} width={500} height={500} />
            </div>
      
            ))}
        </HTMLFlipBook>
        {book.current &&(
      <div className="py-3 m-auto flex flex-wrap justify-center items-center space-x-10">
      <button className="py-2 px-10 text-white rounded-md bg-[#FF9900] color-[#ffff]" onClick={() =>
          book.current?.pageFlip().flipPrev()}>Previous</button>
          <p className="text-white">{book.current?.pageFlip()?.pages?.currentPageIndex+1}:{book.current?.pageFlip()?.pages?.currentPageIndex+2}</p>
           <button className="py-2 px-10 text-white rounded-md bg-[#FF9900] color-[#ffff]" onClick={() =>
                    book.current?.pageFlip().flipNext()}>Next</button>
      </div>
      )}
          </div>
       )}
      </div>
        <div className="flex w-full flex-wrap">
          {isStatusChange && images.length > 0 ?
           <>
            {images.map((image, index) => (
                <div
                ref={changeOnData}
                    key={index}
                    className="flex m-auto items-center my-2 w-full border-primary border-[5px] md:w-[400px] image-container"
                >
               
                    <Image1 
                    //  ref={(el) => (changeOnData.current[index] = el)}
                    src={image} width={500} height={500} alt="" cover="true" />
                    <div onClick={() => downloadImage(image)} className="hidden hover:block button-overlay">
                        <button className="bg-[#0069D9] rounded px-5 p-2">Download</button>
                    </div>
                </div>
            ))}
            </>
            : 
          
            <>
            {!isStatusChange && Array.from({ length: 9 }).map((_,index)=>(
              <div
             
                  key={index}
                  className="flex m-auto items-center my-2 w-full border-primary border-[5px] overflow-hidden h-[400px] md:w-[400px] image-container "
              >
                 <Skeleton className="h-[100%]" containerClassName="h-full w-full" count={10}/>
              </div>
            ))}
            </>}
        </div>
    </div>
    )}
    </>
  );
};

export default V2Finalize;