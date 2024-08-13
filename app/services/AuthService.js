

import { toast } from "react-toastify";
import { axiosInstance } from "../Utils/httpAxios";


export const authLogin = async(data)=>{
    const response = await axiosInstance.post('auth/login/',data)
    .then((res)=>{
        toast.success(res?.data?.message)
        return res.data

    })
    .catch((err)=>{
        toast.error(err.response.data.message)
        return err.response.data
    })

    return response;
}


export const authSignin = async(data)=>{
    const response = await axiosInstance.post('coupon_signup/signup/',data)
    .then((res)=>{
        toast.success(res?.data?.message)
        return res.data

    })
    .catch((err)=>{
        toast.error(err.response.data.message)
        return err.response.data
    })

    return response;
}

export const getprofile = async(data)=>{
    const response = await axiosInstance.get('auth/get_profile/',data)
    .then((res)=>{
        // toast.success(res?.data?.message)
        return res.data

    })
    .catch((err)=>{
        // toast.error(err.response.data.message)
        return err.response.data
    })

    return response;
}


export const putprofile = async(data)=>{
    const response = await axiosInstance.put('auth/update_profile/',data)
    .then((res)=>{
        // toast.success(res?.data?.message)
        return res.data

    })
    .catch((err)=>{
        // toast.error(err.response.data.message)
        return err.response.data
    })

    return response;
}



