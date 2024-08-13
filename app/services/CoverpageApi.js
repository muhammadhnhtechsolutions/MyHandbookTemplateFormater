
import { axiosInstance } from "../Utils/httpAxios";


export const CoverpageSevices = async(data)=>{
  const pdfid = localStorage.getItem("ids")

  
     const formdata = new FormData();
     formdata.append('pdf_id',pdfid)
     formdata.append('image',data)
    return await axiosInstance
    .post("/pdf/coverpage/upload_image/", formdata)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.message;
    });
}

export const CoverSafeServices = async (familyName,selectedValues5,covercon, isChecked, textValue) => {
    
    const pdfid = localStorage.getItem("ids")
    const formData = new FormData();
    formData.append("pdf_id", pdfid);
    formData.append("lastname", familyName ? familyName : "");
    formData.append("lastname_heading", familyName ? familyName : "");
    formData.append("sub_title", selectedValues5 || covercon ? selectedValues5 || covercon : '');
    formData.append("sentence", textValue ? textValue : "");
  
    try {
      const response = await axiosInstance.post("/pdf/coverpage/add_coverpage/",formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
   
      return response.data;
    } catch (error) {
   
      return error.message;
    }
  };



export const FamilyCoverService = async () => {
    const pdfid = localStorage.getItem("ids");
  
    try {
      const response = await axiosInstance.get(
        `/pdf/coverpage/get_coverpage/?pdf_id=${pdfid}`
      );
     
      return response.data;
    } catch (err) {
      console.error("Error:", err);
      return err.response.data;
    }
  };

  // NAME & IMAGE GET API

  export const FamilyCoverNameApiService = async () => {
    const pdfid = localStorage.getItem("ids");
  
    try {
      const response = await axiosInstance.get(
        `/pdf/coverpage//pdf/info/get_name/?pdf_id=${pdfid}`
      );
     
      return response.data;
    } catch (err) {
  
      return err.message;
    }
  };