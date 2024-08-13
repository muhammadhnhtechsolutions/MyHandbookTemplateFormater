import { axiosInstance } from "../Utils/httpAxios";


export const CoreValuesServices  = async (data) => {
   

  const values = {
    value_one: data[0],
    value_two: data[1],
    value_three: data[2],
    value_four: data[3],
    value_five: data[4],
};

    return await axiosInstance
    .post("pdf/core_value/writting_assistant/", values)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};
export const CoreSafeServices = async (selectedvalues,id,corevalues) => {
  const value = {
    pdf_id: id,
    value_one: selectedvalues[0] || '',
    value_two: selectedvalues[1] || '',
    value_three: selectedvalues[2] || '',
    value_four: selectedvalues[3] || '',
    value_five: selectedvalues[4] || '',
    note: corevalues, // Assuming 'note' is a property of the 'data' object
  };

  try {
    const response = await axiosInstance.post("pdf/core_value/add_corevalue/", value);
   
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const FamilyCoreValueService = async () => {
  const pdfid = localStorage.getItem("ids");

  try {
    const response = await axiosInstance.get(
      `/pdf/core_value/get_core_val/?pdf_id=${pdfid}`
    );
 
    return response.data;
  } catch (err) {
   
    return err.data;
  }
};