import axios from "axios";

export const signUp=async (name,email,password)=>{
    try{
        const response=await axios.post("https://todo-app-eight-sage-93.vercel.app/user/signUp",{
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
        const response=await axios.post("https://todo-app-eight-sage-93.vercel.app/user/login",{
            email,password
        })
       // console.log(response);
        return response;
    }catch(error){
        console.log(error.response);
        return error.response;
    }

   

}
