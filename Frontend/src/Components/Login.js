import { useRef, useState } from "react"
import Header from "./Header"
import { checkValidData } from "../utils/validate";
import { useNavigate } from "react-router-dom";
import { signUp,login } from "../services/auth";

const Login=()=>{
    
    const [isSignIn,setIsSignIn]=useState(false);
    const [errorMessage,setErrorMessage]=useState(null);
    const navigate=useNavigate();
    const email=useRef();
    const password=useRef();
    const name=useRef();
    const handleSubmit=async ()=>{
        const message=checkValidData(email.current.value,password.current.value);
         if(message)  setErrorMessage(message);
          else{
            if(!isSignIn){
                const response=await signUp(name.current.value,email.current.value,password.current.value);
                response.status===200?navigate("/home"):setErrorMessage(response.data.error);
                const token=response?.data?.token;
                localStorage.setItem("user",token)

            }else{
                const response=await login(email.current.value,password.current.value);
                response.status===200?navigate("/home"):setErrorMessage(response.data.error);
                const token=response?.data?.token;
                 localStorage.setItem("user",token)

            }
    
    }
    }

    return (
        <div>
            <Header/>
           
            <div className="absolute my-36 p-14 mx-36">
            <h1 className=" text-black text-6xl font-semibold">Plan Your Day</h1>
            <ul >
                <li className="text-xl px-4 py-2 mt-2">Welcome to your new productivity partner. Let’s start checking off that list!</li>
                <li className="text-xl px-4 py-2">Let’s get things done today!</li>
            </ul>
            </div>

            <div >
            <form onSubmit={e=>e.preventDefault()} className="absolute bg-white shadow-2xl  md:w-3/12 w-full  ml-auto mr-56   my-36  left-0 right-0 p-14">
            <div className="flex justify-between pb-2 border-b border-black">
                <span  className=" text-xl pl-7  font-semibold cursor-pointer " onClick={()=>setIsSignIn(true)}>Sign In</span>
                <span  className=" text-xl pr-7  font-semibold cursor-pointer" onClick={()=>setIsSignIn(false)}>Sign Up</span>
            </div>
            {!isSignIn && <input
            ref={name}
             className="p-4 m-4 w-full border border-gray-500 bg-blue-50" type="text" placeholder="Enter Your Name"/>
             
             
             }
            <input 
            ref={email}
            className="p-4 m-4 w-full border border-gray-500 bg-blue-50" 
            type="text" placeholder="example@gmail.com"/>
            <input
            ref={password}
             className="p-4 m-4 w-full border border-gray-500 bg-blue-50"
              type="password" placeholder="Enter password"/>

            <p className="px-4 font-semibold text-red-500">{errorMessage}</p>

            <button onClick={()=>handleSubmit()} className="p-4 m-4 w-full border border-gray-500 bg-gray-800 text-white">{isSignIn?"Sign In":"Sign Up"}</button>
            </form>
            </div>
        </div>
    )
}
export default Login