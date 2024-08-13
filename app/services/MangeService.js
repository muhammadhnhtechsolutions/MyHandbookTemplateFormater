import { toast } from "react-toastify";
import { axiosInstance } from "../Utils/httpAxios";

export const GetToDo = async (currentPage) => {
  
  try {
    const response = await axiosInstance.get('pdf'  , {
      params : {
        page : currentPage
      }
    });
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const deleteTodo = async (id) => {
  try {
    const response = await axiosInstance.delete(`pdf?pdf_id=${id}`);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const Addtodo = async (name) => {
  const data = {
    name,
    ip_address: "192.168.11.0",
    font_style: "3"
  };

  try {
    const response = await axiosInstance.post('/pdf', data);
    return response.data;
  } catch (err) {
    toast.error(err?.response?.data?.message);
    return err.response.data;
  }
};

export const AllModules = async (id) => {
  try {
    const response = await axiosInstance.get(`pdfinfo?pdf_id=${id}`);
    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const MangeeditServices = async (id, name) => {
  const value = {
    pdf_id: `${id}`,
    name
  };

  try {
    const response = await axiosInstance.put('pdf', value);
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const Getimagename = async () => {
  const pdfId = localStorage.getItem("ids");

  try {
    const response = await axiosInstance.get(`/pdf/info/get_name?pdf_id=${pdfId}`);
    return response.data;
  } catch (err) {
    toast.error(err?.response?.data?.message);
    return err.response.data;
  }
};
