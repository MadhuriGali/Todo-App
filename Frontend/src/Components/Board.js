

import { useRef, useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
import FadeLoader from "react-spinners/FadeLoader";
import {motion} from 'framer-motion'
const Board=()=>{
    const navigate = useNavigate();
    const [errorMessage,setErrorMessage]=useState(null);
    const [loading,setLoading]=useState(false);
   const boardname=useRef();

   const token=localStorage.getItem("user")

   const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json' // Example of setting a Content-Type header
    }
  };

    const updateData=async ()=>{
        if(!boardname.current.value) setErrorMessage("Board name cannot be empty");
        else{
            setLoading(true)
            console.log("before sending"+boardname.current.value)
            const response=await axios.post("https://todo-app-315b.onrender.com/board/addBoard",{
                boardname:boardname.current.value
            },config)
            console.log(response)
            console.log(boardname?.current?.value)
           setLoading(false);
       navigate("/todos/"+response.data.name.boardname)
        
        }
    }

    return (
        <div className="md:w-3/12 mx-auto my-36 ">
            {
                loading?
                <FadeLoader className="ml-32 p-4 mt-48"
                color={'#e9e7db'}
                size={45}       
                />:
                <motion.div
                initial={{ opacity: 0, y: 250 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, x: -50 }}
        transition={{ delay: 0.1,type:'spring',stiffness:170 }}
                className="border border-gray-300 ">
                <div className="flex justify-between p-4">
                    <h1 className="text-lg px-4">Add Board</h1>
                    
                </div >
                    <input 
                    ref={boardname}
                    type="text" className="p-4 m-4 border border-gray-800  w-80 rounded-xl text-gray-900" placeholder="Enter Board name" />
                  
                    {errorMessage && <p className="px-4 font-semibold text-red-500">{errorMessage}</p>}
                    <button className="p-4  w-80 border border-gray-300 m-4 rounded-xl" onClick={updateData}>Add</button>  
            </motion.div>
            }
            
        </div>
    )
}

export default Board;
