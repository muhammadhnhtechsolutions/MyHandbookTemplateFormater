import { axiosInstance } from "../Utils/httpAxios";
export const finalizeGetPdfService = async (tid) => {
    const pdfid = localStorage.getItem("ids");
    return await axiosInstance
    .get(`/get_pdf_links?template_id=${tid}&pdf_id=${pdfid}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
    };

    export const Colorchange = async (color) => {
      const pdfid = localStorage.getItem("ids");
    
      const formdata = new FormData();
      formdata.append('pdf_id', pdfid);
      formdata.append('color_code', color);
    
      try {
        const response = await axiosInstance.post('/change_color_pdf', formdata);
        return response.data;
      } catch (err) {
        return err.response.data;
      }
    };
    
  
    export const finalizeGeneratePdfService = async (tid) => {
    const pdfid = localStorage.getItem("ids");
    return await axiosInstance
    .get(`generate_pdf?template_id=${tid}&pdf_id=${pdfid}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response?.data;
    });
    };


//   export const sendPdfToServerService = async (data,userEmail)=>{
   
//     const pdfid = localStorage.getItem("ids");
    
//     const formdata = new FormData();
//     formdata.append('pdf_id', pdfid);
//     formdata.append('pdf', data);
//     formdata.append('email',userEmail);

//     return await axiosInstance
//     .post("/sendmailpdf",formdata,{
//       headers: {
//         "Content-Type": "multipart/form-data",
//       }
//     })
//     .then((res) => {
//       return res.data;
//     })
//     .catch((err) => {
//       return err.response.data;
//     });
//   }


//   export const getPdfService = async (pdfid) => {
//     // const pdfid = localStorage.getItem("ids");
//     try {
//       const response = await axiosInstance.get(
//         `/sendmailpdf?pdf_id=${pdfid}`
//       );
   
//       return response.data;
//     } catch (err) {
//       console.error("Error:", err);
//       return err.response.data;
//     }
//     };
