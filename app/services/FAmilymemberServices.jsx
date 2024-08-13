import { axiosInstance } from '../Utils/httpAxios';

export const FAmilymemberServices = async (data) => {
  const pdfId = localStorage.getItem("ids");



  const formdata = {
    pdf_id: pdfId,
    parents_data: data
  };

  try {
    const response = await axiosInstance.post("pdf/familymembers/add_parents/", formdata);
    return response.data;
  } catch (error) {
    return error.response?.data;
  }
};

export const Faimlyparents = async (data) => {
  const pdfid = localStorage.getItem("ids");
  try {
    const response = await axiosInstance.get(
      `/pdf/familymembers/get_parents/?pdf_id=${pdfid}`
    );
    
    return response.data;
  } catch (err) {
    console.error("Error:", err);
    return err.response.data;
  }
  };

  
export const FAmilychildServices = async (data) => {
  const pdfId = localStorage.getItem("ids");

 
  const child = {
    pdf_id: pdfId,
    othermembers_data: data

  };

  try {
    const response = await axiosInstance.post("pdf/familymembers/add_othermembers/", child);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deletemember =async()=>{
  const pdfId = localStorage.getItem("ids");
  return await axiosInstance.delete(`/pdf/familymembers/delete_parent/?parent_id=${pdfId}`)
  .then((res)=>{
      
   return res.data
  })
  .catch((err)=>{
     
   return err.response.data
  })
}


export const deleteChild =async()=>{
  const pdfId = localStorage.getItem("ids");
  return await axiosInstance.delete(`familymembers/delete_othermember/?other_member_id=${pdfId}`)
  .then((res)=>{
      
   return res.data
  })
  .catch((err)=>{
    

   return err.response.data
  })
}

export const Getalldata =async()=>{
  const pdfId = localStorage.getItem("ids");
 
 
  return await axiosInstance.get(`/pdf/familymembers/get_all_familymembers/?pdf_id=${pdfId}`)
  .then((res)=>{
      
   
   return res.data
  })
  .catch((err)=>{
     
   return err.response.data
  })
}


export const UpdateParentsdata =async(data)=>{
  const pdfId = localStorage.getItem("ids");
 


  const formdata = {
    pdf_id: pdfId,
    parents_data: data
  };
  
 
  return await axiosInstance.post(`/pdf/familymembers/add_parents/`,formdata)
  .then((res)=>{
      

   return res.data
  })
  .catch((err)=>{
     
   return err.response.data
  })
}

export const UpdateChildsdata =async(data)=>{
  const pdfId = localStorage.getItem("ids");

  const formdata = {
    pdf_id: pdfId,
    othermembers_data: data
  };
  
 
  return await axiosInstance.post(`/pdf/familymembers/add_othermembers/`,formdata)
  .then((res)=>{
      

   return res.data
  })
  .catch((err)=>{
     
   return err.response.data
  })
}

export const getOtherMemberService =async()=>{
  const pdfId = localStorage.getItem("ids");
 
 
  return await axiosInstance.get(`/pdf/familymembers/get_othermembers/?pdf_id=${pdfId}`)
  .then((res)=>{
      
   return res.data
  })
  .catch((err)=>{
     
   return err.response.data
  })
}


export const deleteParentService =async(id)=>{
  
  return await axiosInstance.delete(`pdf/familymembers/delete_parent/?parent_id=${id}`)
  .then((res)=>{
      
   return res.data
  })
  .catch((err)=>{
     
   return err.response.data
  })
}