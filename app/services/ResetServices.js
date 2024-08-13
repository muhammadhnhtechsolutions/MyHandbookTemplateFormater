import { axiosInstance } from "../Utils/httpAxios";
export const ResetServices = async (data) => {
    const formdata = new FormData()
    formdata.append('newpassword', data.newpassword)
    formdata.append('email',data.email)
    
  return await axiosInstance
    .post("auth/reset_password/", formdata)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response.data;
    });
};

