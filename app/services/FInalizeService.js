import { axiosInstance } from "../Utils/httpAxios";
export const FInalizeService = async (data) => {
    const pdfid = localStorage.getItem("ids");
    try {
      const response = await axiosInstance.get(
        `completepdf=${pdfid}`
      );
   
      return response.data;
    } catch (err) {
      console.error("Error:", err);
      return err.response.data;
    }
    };


  export const sendPdfToServerService = async (data,userEmail)=>{
   
    const pdfid = localStorage.getItem("ids");
    
    const formdata = new FormData();
    formdata.append('pdf_id', pdfid);
    formdata.append('pdf', data);
    formdata.append('email',userEmail);

    return await axiosInstance
    .post("/sendmailpdf",formdata,{
      headers: {
        "Content-Type": "multipart/form-data",
      }
    })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
  }


  export const getPdfService = async (pdfid) => {
  
    return await axiosInstance
    .get(`generate_pdf?template_id=${0}&pdf_id=${pdfid}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response?.data;
    });
    };
