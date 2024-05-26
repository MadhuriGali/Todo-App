import SideBar from "./SideBar";


import { useSearchParams,useNavigate } from 'react-router-dom';
import { useState } from "react";
import axios from "axios";

const EditTodo=()=>{
    const [params]=useSearchParams();
    const navigate = useNavigate();
    const [errorMessage,setErrorMessage]=useState(null);
    const index=params.get("index");
    const title=params.get("title");
    const description=params.get("description");
    const boardname=params.get("boardname")

    const [newTitle,setNewTitle]=useState(title);
    const [newDescription,setNewDescription]=useState(description);
    const token=localStorage.getItem("user")

   const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json' // Example of setting a Content-Type header
    }
  };

    const updateTodo=async()=>{
      if(!newTitle) setErrorMessage("titile cannot be empty");
      else if(!newDescription) setErrorMessage("description cannot be empty");
      else{
        await axios.put("https://todo-cdl1xuda2-madhus-projects-e4c58fb9.vercel.app/todos/editTodos",{
            boardname,
            title:newTitle,
            description:newDescription,
            index
        },config)   
        navigate("/todos/"+boardname)

      }
        
    }

    return (
        <div className="flex  bg-gray-900 text-white">
            <SideBar/>
            <div className="md:w-3/12 mx-auto my-36 ">
            <div className="border border-gray-300 ">
                <div className="flex justify-between p-4">
                    <h1 className="text-lg px-4">Edit Board</h1>
                </div >
              
                    <input 
                  onChange={(e)=>setNewTitle(e.target.value)}
                    type="text" className="p-4 m-3 border border-gray-800  w-80 rounded-xl text-gray-900" value={newTitle} />
                  

                  <input 
               onChange={(e)=>setNewDescription(e.target.value)}
                 type="text" className="p-4 m-3 border border-gray-800  w-80 rounded-xl text-gray-900" value={newDescription} />
               
               {errorMessage && <p className="px-4 font-semibold text-red-500">{errorMessage}</p>}
                    <button className="p-4  w-80 border border-gray-300 m-3 rounded-xl" onClick={updateTodo}>Add</button>
               
                  
            </div>
        </div>

        </div>

    )
}
export default EditTodo;
