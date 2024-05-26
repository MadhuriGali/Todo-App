import axios from "axios";

export const signUp=async (name,email,password)=>{
    try{
        const response=await axios.post("http://localhost:8000/user/signUp",{
        name,
        email,
        password
    });
   // console.log(response);
    return response;
    }catch(error){
        console.log(error.response);
        return error.response;
    }
    

}
export const login=async (email,password)=>{
    try{
        const response=await axios.post("http://localhost:8000/user/login",{
            email,password
        })
       // console.log(response);
        return response;
    }catch(error){
        console.log(error.response);
        return error.response;
    }

   

}