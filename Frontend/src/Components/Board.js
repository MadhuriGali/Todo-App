

import { useRef, useState } from "react";
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Board=()=>{


    const navigate = useNavigate();
    const [errorMessage,setErrorMessage]=useState(null);

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

            await axios.post("https://todo-m1cxd9afo-madhus-projects-e4c58fb9.vercel.app/board/addBoard",{
            boardname:boardname.current.value
        },config)
       
        navigate("/todos/"+boardname.current.value)
        
        }
        
       

    }

    return (
        <div className="md:w-3/12 mx-auto my-36 ">
            <div className="border border-gray-300 ">
                <div className="flex justify-between p-4">
                    <h1 className="text-lg px-4">Add Board</h1>
                    
                </div >
              
                    <input 
                    ref={boardname}
                    type="text" className="p-4 m-4 border border-gray-800  w-80 rounded-xl text-gray-900" placeholder="Enter Board name" />
                  
                    {errorMessage && <p className="px-4 font-semibold text-red-500">{errorMessage}</p>}
                    <button className="p-4  w-80 border border-gray-300 m-4 rounded-xl" onClick={updateData}>Add</button>
               
                  
            </div>
        </div>
    )
}

export default Board;
