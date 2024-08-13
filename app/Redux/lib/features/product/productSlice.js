import { createSlice } from "@reduxjs/toolkit";

// const defaultSrc =
//   // "https://raw.githubusercontent.com/roadmanfong/react-cropper/master/example/img/child.jpg";

const apiReducer = createSlice({
  name: "api",
  initialState: {
    // drivers: [],
    familyName: "",
    showInitialButtons: true,
    disable: false,
    editorEnabled: true,
    headerData: "",
    data: [],
    data2: [],
    data3: [],
    imgdata: "",
    value: "The Sample Family",
    value1:
      "To be a close-knit family cultivating genuine relationships and living a healthy & active lifestyle while also choosing to be debt-free.",
    value2: "",
    missionstate: "The Sample Family",
    missionstate1:
      "We choose daily to be respectful to others, to nurture relationships, to practice gratefulness and to serve and community with purpose and intention.",
    familymed: [
      "Use devices only during the times agreed to.",
      "I agree to respect other people’s privacy.",
      "I will not take or post pictures or videos of others without their permission.",
      "I agree to listen calmly and openly when discussing media rules.",
      "I will not give out personal information to any people or sites I don’t know.",
      "I will keep passwords between my parents and I.",
      "I am responsible to manage my device use and will not rely on others to remind me.",
      "I agree to hand over my devices without arguing if I happen to violate this agreement.",
      "I agree to hand over my devices without arguing if I happen to violate this agreementdjiovjios.",
    ],
    familycon: ``,
    familyconBackup: `<strong>So that we may continue to grow together to become all that God has created us to be, <br>We hereby pledge to do the following:</strong><br>
          • Conduct ourselves both individually and as a family in a way that is in line with our stated Core Values:<br>
          <strong> [value_one], [value_two], [value_three], [value_four] and [value_five]</strong><br>
          • Accept responsibility for our written <strong>Mission Statement</strong><br>
          • Commit to be an encouragement to each other as we move forward in life together.<br>
          • Obey God and those in authority<br>
          • Daily seek communion with Christ<br>
          • Love Unconditionally<br>
          • Respect the individuality and property of others<br>
          • Wisely steward my personal property<br>
          • Honor our parents both in how we communicate and how we engage in family activities together.<br>.`,
    introduction: `
    Dear Family,
    I am pleased to present to you our family handbook, a guide for our future. As a parent, it has been my utmost desire to create a strong and united family; one that upholds core values, shares a common vision, and works towards a shared mission. This handbook is an essential tool that will help us achieve these goals.
    The aim of this handbook is to provide a clear understanding of our family's values, codes of conduct, and expectations. It serves as a reference guide for all family members, and it is designed to promote communication and unity among us. This handbook is not just a set of rules, but it is a reflection of the love and care we have for each other.
    Our family handbook outlines our mission to create a harmonious and loving environment where each member can thrive and reach their full potential. It also highlights our vision of building a strong and resilient family that can overcome any challenges that come our way.
    I believe that by following the guidelines outlined in this handbook, we can strengthen our family bonds and create lasting memories. It is my hope that this handbook will serve as a reminder of our collective goals and values, and guide us towards creating a happy and fulfilling family life.`,
    allmoduledata: "",
    notes: "",
    pdfid: "",
    getIntrosave: null,
    setCorenote: [],
    setContaition: "",
    vission: "",
    edit1: "",
    summarycomp: `

    Dear Family</span><br><br>I am honored to have the opportunity to be a dad to three amazing kiddos. I can’t think of a greater task to be charged with on this earth than to be able to be your dad and to have you kiddos as my children. I look forward to continuing to parent you kids and lead you and direct you in the ways that grampy and mimi lead me. I hope you bring me lots of grandchildren and that we all stay close as we continue to navigate the waters of this life. And some day we will all get to meet again in the arms of Jesus. If I die before you (which is likely) and you finally make it to heaven, you will find me fishing with Grampy in a boat somewhere. I love you crazy little miracles. <br><br><br>
    Dad`,
    summarycompBackup: `

    Dear Family</span><br><br>I am honored to have the opportunity to be a dad to three amazing kiddos. I can’t think of a greater task to be charged with on this earth than to be able to be your dad and to have you kiddos as my children. I look forward to continuing to parent you kids and lead you and direct you in the ways that grampy and mimi lead me. I hope you bring me lots of grandchildren and that we all stay close as we continue to navigate the waters of this life. And some day we will all get to meet again in the arms of Jesus. If I die before you (which is likely) and you finally make it to heaven, you will find me fishing with Grampy in a boat somewhere. I love you crazy little miracles. <br><br><br>
    Dad`,
    covercon: "",
    clickedButtonIndex: -1,
    selectedValues5: "",
    skipForNow: -1,
    codeconduct: "",
    codeconduct1: [],
    inputValue1: [],
    parentspreview: [],
    parentspreview1: [],
    parentspreview2: [],
    parentspreview3: [],
    parentData:[],
    childData:[],
    image: "",
    showImage: "",
    cropData: "#",
    cropData1: "#",
    cropData2: "#",
    cropData3: "#",
    clickedButtonfamily: null,
    previewInputValue: "",
    previewInputValue1: "",
    previewInputValue2: "",
    previewInputValue3: "",
    previewInputValue4: "",
    previewInputValue5: "",
    previewInputValue6: "",
    previewInputValue7: "",
    previewInputValue8: "",
    previewInputValue9: "",
    previewInputValue10: "",
    previewInputValue11: "",
    birthName: "",
    birthName1: "",
    birthName2: "",
    nextName3: "",
    nextName2: "",
    nextName1: "",
    nextbirthName2: "",
    nextbirthName3: "",
    birthName3: "",
    selectedDate: null,
    selectedDate1: null,
    selectedDate2: null,
    clickedButtonfamily1: null,
    clickedButtonfamily2: null,
    clickedButtonfamily3: null,
    clickedButtonfamily4: null,
    clickedButtonfamily5: null,
    clickedButtonfamily6: null,
    clickedButtonfamily7: null,
    clickedButtonfamily8: null,
    clickedButtonfamily9: null,
    clickedButtonfamily10: null,
    clickednextButtonfamily1: null,
    clickednextButtonfamily2: null,
    clickednextButtonfamily3: null,
    clickednextButtonfamily4: null,
    clickedButtonfamilys: null,
    clickedButtonfamilys1: null,
    previewInputValues: "",
    previewInputValues1: "",
    nextInputValues1: "",
    nextInputValues2: "",
    nextInputValues3: "",
    nextInputValues4: "",
    nextInputValues5: "",
    myprofession2: "",
    myprofession3: "",
    selectedname: [],
    selectedname1: [],
    selectedname2: [],
    selectedname3: [],
    clickedNewButtonfamilys1: [],
    clickedNewButtonfamilys2: [],
    clickedNewButtonfamilys3: [],
    clickedNewButtonfamilys4: [],
    clickedNewButtonfamilys5: [],
    newInputValues1: [],
    newInputValues2: [],
    newInputValues3: [],
    newInputValues4: [],
    newInputValues5: [],
    imagecover: "",
    selected: [],
    isFaimlymember: "",
    isFaimlymemberprevious: false,
    FaimlymemberParentsData: [],
    FaimlymemberParentsother: [],
  },

  reducers: {
    setFamilyName: (state, action) => {
      state.familyName = action.payload;
    },
    setisFaimlymember: (state, action) => {
      state.isFaimlymember = action.payload;
    },
    // setFaimlymemberParentsData: (state, action) => {
    //   state.isFaimlymember = action.payload;
    // },
    setisFaimlymemberprevious: (state, action) => {
      state.isFaimlymemberprevious = action.payload;
    },
    setFaimlymemberParentsother: (state, action) => {
      state.FaimlymemberParentsother = action.payload;
    },

    setShowInitialButtons: (state, action) => {
      state.showInitialButtons = action.payload;
    },
    setDisable: (state, action) => {
      state.disable = action.payload;
    },
    setData: (state, action) => {
      state.data = action.payload;
    },
    setData2: (state, action) => {
      state.data2 = action.payload;
    },
    setData3: (state, action) => {
      state.data3 = action.payload;
    },
    setImgdata: (state, action) => {
      state.imgdata = action.payload;
    },
    setValue: (state, action) => {
      state.value = action.payload;
    },
    setValue1: (state, action) => {
      state.value1 = action.payload;
    },
    setValue2: (state, action) => {
      state.value2 = action.payload;
    },
    setMissionstate: (state, action) => {
      state.missionstate = action.payload;
    },
    setMissionstate1: (state, action) => {
      state.missionstate1 = action.payload;
    },
    setFamilyMed: (state, action) => {
      state.familymed = action.payload;
    },
    setFamilycon: (state, action) => {
      state.familycon = action.payload;
    },
    setSummarycomp: (state, action) => {
      state.summarycomp = action.payload;
    },
    setCovercon: (state, action) => {
      state.covercon = action.payload;
    },
    setEditorEnabled: (state, action) => {
      state.editorEnabled = action.payload;
    },
    setClickedButtonIndex: (state, action) => {
      state.clickedButtonIndex = action.payload;
    },
    setSelectedValues5: (state, action) => {
      state.selectedValues5 = action.payload;
    },
    setSkipForNow: (state, action) => {
      state.skipForNow = action.payload;
    },
    setCodeconduct: (state, action) => {
      state.codeconduct = action.payload;
    },
    setCodeconduct1: (state, action) => {
      state.codeconduct1 = action.payload;
    },
    setInputValue1: (state, action) => {
      state.inputValue1 = action.payload;
    },
    setParentspreview: (state, action) => {
      state.parentspreview = action.payload;
    },
    setParentspreview1: (state, action) => {
      state.parentspreview1 = action.payload;
    },
    setParentspreview2: (state, action) => {
      state.parentspreview2 = action.payload;
    },
    setParentspreview3: (state, action) => {
      state.parentspreview3.push(action.payload);
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setShowImage: (state, action) => {
      state.showImage = action.payload;
    },
    setCropData: (state, action) => {
      state.cropData = action.payload;
    },
    setCropData1: (state, action) => {
      state.cropData1 = action.payload;
    },
    setCropData2: (state, action) => {
      state.cropData2 = action.payload;
    },
    setCropData3: (state, action) => {
      state.cropData3 = action.payload;
    },
    setClickedButtonFamily: (state, action) => {
      state.clickedButtonfamily = action.payload;
    },
    setPreviewInputValue: (state, action) => {
      state.previewInputValue = action.payload;
    },
    setPreviewInputValue1: (state, action) => {
      state.previewInputValue1 = action.payload;
    },
    setPreviewInputValue2: (state, action) => {
      state.previewInputValue2 = action.payload;
    },
    setPreviewInputValue3: (state, action) => {
      state.previewInputValue3 = action.payload;
    },
    setPreviewInputValue4: (state, action) => {
      state.previewInputValue4 = action.payload;
    },
    setPreviewInputValue5: (state, action) => {
      state.previewInputValue5 = action.payload;
    },
    setPreviewInputValue6: (state, action) => {
      state.previewInputValue6 = action.payload;
    },
    setPreviewInputValue7: (state, action) => {
      state.previewInputValue7 = action.payload;
    },
    setPreviewInputValue8: (state, action) => {
      state.previewInputValue8 = action.payload;
    },
    setPreviewInputValue9: (state, action) => {
      state.previewInputValue9 = action.payload;
    },
    setPreviewInputValue10: (state, action) => {
      state.previewInputValue10 = action.payload;
    },
    setPreviewInputValue11: (state, action) => {
      state.previewInputValue11 = action.payload;
    },
    setBirthName: (state, action) => {
      state.birthName = action.payload;
    },
    setBirthName1: (state, action) => {
      state.birthName1 = action.payload;
    },
    setBirthName2: (state, action) => {
      state.birthName2 = action.payload;
    },
    setNextName3: (state, action) => {
      state.nextName3 = action.payload;
    },
    setNextName2: (state, action) => {
      state.nextName2 = action.payload;
    },
    setNextName1: (state, action) => {
      state.nextName1 = action.payload;
    },
    setNextBirthName2: (state, action) => {
      state.nextbirthName2 = action.payload;
    },
    setNextBirthName3: (state, action) => {
      state.nextbirthName3 = action.payload;
    },
    setBirthName3: (state, action) => {
      state.birthName3 = action.payload;
    },
    setSelectedDate: (state, action) => {
      state.selectedDate = action.payload;
    },
    setSelectedDate1: (state, action) => {
      state.selectedDate1 = action.payload;
    },
    setSelectedDate2: (state, action) => {
      state.selectedDate2 = action.payload;
    },
    setClickedButtonFamily1: (state, action) => {
      state.clickedButtonfamily1 = action.payload;
    },
    setClickedButtonFamily2: (state, action) => {
      state.clickedButtonfamily2 = action.payload;
    },
    setClickedButtonFamily3: (state, action) => {
      state.clickedButtonfamily3 = action.payload;
    },
    setClickedButtonFamily4: (state, action) => {
      state.clickedButtonfamily4 = action.payload;
    },
    setClickedButtonFamily5: (state, action) => {
      state.clickedButtonfamily5 = action.payload;
    },
    setClickedButtonFamily6: (state, action) => {
      state.clickedButtonfamily6 = action.payload;
    },
    setClickedButtonFamily7: (state, action) => {
      state.clickedButtonfamily7 = action.payload;
    },
    setClickedButtonFamily8: (state, action) => {
      state.clickedButtonfamily8 = action.payload;
    },
    setClickedButtonFamily9: (state, action) => {
      state.clickedButtonfamily9 = action.payload;
    },
    setClickedButtonFamily10: (state, action) => {
      state.clickedButtonfamily10 = action.payload;
    },
    setNextClickedButtonFamily1: (state, action) => {
      state.clickednextButtonfamily1 = action.payload;
    },
    setNextClickedButtonFamily2: (state, action) => {
      state.clickednextButtonfamily2 = action.payload;
    },
    setNextClickedButtonFamily3: (state, action) => {
      state.clickednextButtonfamily3 = action.payload;
    },
    setNextClickedButtonFamily4: (state, action) => {
      state.clickednextButtonfamily4 = action.payload;
    },
    setClickedButtonFamilys: (state, action) => {
      state.clickedButtonfamilys = action.payload;
    },
    setClickedButtonFamilys1: (state, action) => {
      state.clickedButtonfamilys1 = action.payload;
    },
    setPreviewInputValues: (state, action) => {
      state.previewInputValues = action.payload;
    },
    setPreviewInputValues1: (state, action) => {
      state.previewInputValues1 = action.payload;
    },
    setnextInputValue1: (state, action) => {
      state.nextInputValues1 = action.payload;
    },
    setnextInputValue2: (state, action) => {
      state.nextInputValues2 = action.payload;
    },
    setnextInputValue3: (state, action) => {
      state.nextInputValues3 = action.payload;
    },
    setnextInputValue4: (state, action) => {
      state.nextInputValues4 = action.payload;
    },
    setnextInputValue5: (state, action) => {
      state.nextInputValues5 = action.payload;
    },
    setMyProfession2: (state, action) => {
      state.myprofession2 = action.payload;
    },
    setMyProfession3: (state, action) => {
      state.myprofession3 = action.payload;
    },
    setSelectedName: (state, action) => {
      state.selectedname = action.payload;
    },
    setSelectedName1: (state, action) => {
      state.selectedname1 = action.payload;
    },
    setSelectedName2: (state, action) => {
      state.selectedname2 = action.payload;
    },
    setSelectedName3: (state, action) => {
      state.selectedname3 = action.payload;
    },
    setClickedNewButtonFamilys1: (state, action) => {
      state.clickedNewButtonfamilys1 = action.payload;
    },
    setClickedNewButtonFamilys2: (state, action) => {
      state.clickedNewButtonfamilys2 = action.payload;
    },
    setClickedNewButtonFamilys3: (state, action) => {
      state.clickedNewButtonfamilys3 = action.payload;
    },
    setClickedNewButtonFamilys4: (state, action) => {
      state.clickedNewButtonfamilys4 = action.payload;
    },
    setClickedNewButtonFamilys5: (state, action) => {
      state.clickedNewButtonfamilys5 = action.payload;
    },
    setNewInputValues1: (state, action) => {
      state.newInputValues1 = action.payload;
    },
    setNewInputValues2: (state, action) => {
      state.newInputValues2 = action.payload;
    },
    setNewInputValues3: (state, action) => {
      state.newInputValues3 = action.payload;
    },
    setNewInputValues4: (state, action) => {
      state.newInputValues4 = action.payload;
    },
    setNewInputValues5: (state, action) => {
      state.newInputValues5 = action.payload;
    },
    setAllmoduledata: (state, action) => {
      state.allmoduledata = action.payload;
    },
    setNotes: (state, action) => {
      state.notes = action.payload;
    },
    setPdfid: (state, action) => {
      state.pdfid = action.payload;
    },
    setGetIntro: (state, action) => {
      state.getIntrosave = action.payload;
    },
    setIntroduction: (state, action) => {
      state.introduction = action.payload;
    },
    setCorenote: (state, action) => {
      state.setCorenote = action.payload;
    },
    setContaition: (state, action) => {
      state.setContaition = action.payload;
    },
    setVission: (state, action) => {
      state.vission = action.payload;
    },
    setValueedit: (state, action) => {
      state.edit1 = action.payload;
    },
    setImageCover: (state, action) => {
      state.imagecover = action.payload;
    },
    setSelected: (state, action) => {
      state.selected = action.payload;
    },
    setParentData: (state, action) => {
      state.parentData = action.payload;
    },
    setChildData: (state, action) => {
      state.childData = action.payload;
    },
  },
});

export const {
  setChildData,
  setParentData,
  setFamilyName,
  setShowInitialButtons,
  setDisable,
  setVission,
  setValueedit,
  setImageCover,
  setSelected,
  setHeaderData,
  setData,
  setData2,
  setData3,
  setImgdata,
  setValue,
  setValue1,
  setValue2,
  setMissionstate,
  setMissionstate1,
  setFamilyMed,
  setFamilycon,
  setIntroduction,
  setAllmoduledata,
  setNotes,
  setPdfid,
  setGetIntro,
  setSummarycomp,
  setCovercon,
  setEditorEnabled,
  setClickedButtonIndex,
  setSelectedValues5,
  setSkipForNow,
  setCodeconduct,
  setCodeconduct1,
  setInputValue1,
  setParentspreview,
  setParentspreview1,
  setParentspreview2,
  setParentspreview3,
  setImage,
  setShowImage,
  setCropData,
  setCropData1,
  setCropData2,
  setCropData3,
  setClickedButtonFamily,
  setPreviewInputValue,
  setPreviewInputValue1,
  setPreviewInputValue2,
  setPreviewInputValue3,
  setPreviewInputValue4,
  setPreviewInputValue5,
  setPreviewInputValue6,
  setPreviewInputValue7,
  setisFaimlymember,
  setPreviewInputValue8,
  setPreviewInputValue9,
  setPreviewInputValue10,
  setPreviewInputValue11,
  setBirthName,
  setBirthName1,
  setBirthName2,
  setNextName3,
  setNextName2,
  setNextName1,
  setNextBirthName2,
  setNextBirthName3,
  setBirthName3,
  setSelectedDate,
  setSelectedDate1,
  setSelectedDate2,
  setClickedButtonFamily1,
  setClickedButtonFamily2,
  setClickedButtonFamily3,
  setClickedButtonFamily4,
  setClickedButtonFamily5,
  setClickedButtonFamily6,
  setClickedButtonFamily7,
  setClickedButtonFamily8,
  setClickedButtonFamily9,
  setClickedButtonFamily10,
  setNextClickedButtonFamily1,
  setNextClickedButtonFamily2,
  setNextClickedButtonFamily3,
  setNextClickedButtonFamily4,
  setClickedButtonFamilys,
  setClickedButtonFamilys1,
  setPreviewInputValues,
  setPreviewInputValues1,
  setnextInputValue1,
  setnextInputValue2,
  setisFaimlymemberprevious,
  setnextInputValue3,
  setnextInputValue4,
  setnextInputValue5,
  setMyProfession2,
  setMyProfession3,
  setSelectedName,
  setSelectedName1,
  setSelectedName2,
  setSelectedName3,
  setClickedNewButtonFamilys1,
  setClickedNewButtonFamilys2,
  setClickedNewButtonFamilys3,
  setClickedNewButtonFamilys4,
  setClickedNewButtonFamilys5,
  setNewInputValues1,
  setNewInputValues2,
  setNewInputValues3,
  setNewInputValues4,
  setNewInputValues5,
  setCorenote,
  setContaition,
  setFaimlymemberParentsData,
  setFaimlymemberParentsother,
} = apiReducer.actions;

export default apiReducer.reducer;
