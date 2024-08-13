import axios from "axios";

export const axiosInstance=axios.create({
    // baseURL: 'http://192.168.100.16:8001/webapi/'
    // baseURL: 'http://167.114.96.66:5005/webapi/'
    baseURL: 'https://familyhandbookapi.devssh.xyz/webapi/'
})


axiosInstance.interceptors.request.use((res)=>{
    
    if(res){

        res.headers.Authorization="Bearer " + localStorage.getItem('token');
    }
    
    return res;
},(err)=>{
    if(err.response.data.message==="Unauthenticated"){
    
       
      localStorage.removeItem('token');
     

    }
    throw err
})