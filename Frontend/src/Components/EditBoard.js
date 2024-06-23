import SideBar from "./SideBar";
import {motion} from 'framer-motion'
import axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from "react";


const EditBoard=()=>{
    console.log("edit board component is rendering")
    const {boardname}=useParams();
    const [newBoardname,setNewBoardname]=useState(boardname);
    const [errorMessage,setErrorMessage]=useState(null);
    const navigate = useNavigate();
    

    const token=localStorage.getItem("user")
 
    const config = {
     headers: {
       'Authorization': `Bearer ${token}`,
       'Content-Type': 'application/json' // Example of setting a Content-Type header
     }
   };
 
     const updateData=async ()=>{
        if(!newBoardname) setErrorMessage("Board name cannot be empty");
        else{
            await axios.put("https://todo-app-315b.onrender.com/board/editBoard",{
             boardname:newBoardname,
             oldBoardname:boardname
         },config)
        
         navigate("/todos/"+newBoardname)
         

        }
         
        
 
     }
    return(
        <div className="flex  bg-gray-900 text-white">
            <SideBar/>
            <motion.div
             initial={{ opacity: 0, y: 250 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, x: -50 }}
             transition={{ delay: 0.1,type:'spring',stiffness:170 }}
            className="md:w-3/12 mx-auto my-36 ">
            <div className="border border-gray-300 ">
                <div className="flex justify-between p-4">
                    <h1 className="text-lg px-4">Edit Board</h1>
                </div >
              
                    <input 
                    
                    type="text" className="p-4 m-4 border border-gray-800  w-80 rounded-xl text-gray-900" value={newBoardname}  onChange={(e)=>setNewBoardname(e.target.value)}/>

{errorMessage && <p className="px-4 font-semibold text-red-500">{errorMessage}</p>}
                    <button className="p-4  w-80 border border-gray-300 m-4 rounded-xl" onClick={updateData}>Add</button>
                 
            </div>
        </motion.div>

        </div>
    )
}
export default EditBoard;
