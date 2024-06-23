import axios from "axios";

export const signUp=async (name,email,password)=>{
    try{
        const response=await axios.post("https://todo-app-315b.onrender.com/user/signUp",{
        name,
        email,
        password
    });
   localStorage.setItem("username",name);
    return response;
    }catch(error){
        console.log(error.response);
        return error.response;
    }
    

}
export const login=async (email,password)=>{
    try{
        const response=await axios.post("https://todo-app-315b.onrender.com/user/login",{
            email,password
        })
       // console.log(response);
        return response;
    }catch(error){
        console.log(error.response);
        return error.response;
    }

   

}
