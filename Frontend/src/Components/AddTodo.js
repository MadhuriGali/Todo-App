import { useRef, useState } from "react";
import SideBar from "./SideBar";

import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const AddTodo=()=>{
    
    const {boardname}=useParams();
    const [index, setIndex] = useState(() => {
        // Retrieve index from local storage, default to 0 if not present
        const savedIndex = localStorage.getItem(boardname);
        return savedIndex ? parseInt(savedIndex) : 0;
    });
    const [errorMessage,setErrorMessage]=useState(null);
    const title=useRef();
    const description=useRef();
    const navigate = useNavigate();
    const token=localStorage.getItem("user")



   const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json' // Example of setting a Content-Type header
    }
  };
    const updateData=async()=>{
        setIndex(prevIndex => prevIndex + 1);
        localStorage.setItem(boardname, index + 1);
        if(!title.current.value) setErrorMessage("Title cannot be empty");
        else if(!description.current.value) setErrorMessage("description cannot be empty");
        else{
            await axios.post("https://vercel.com/madhus-projects-e4c58fb9/todo-app/todos/addTodo",{
            boardname:boardname,
            title:title.current.value,
            description:description.current.value,
            index:index
        },config);

        navigate("/todos/"+boardname);
        }
        
    }
    console.log("Current index:", index);
    return (
        <div  className="flex bg-gray-900 text-white">
            <SideBar/>
            <div className="md:w-3/12 mx-auto my-36 ">
            <div className="border border-gray-300 ">
                <div className="flex justify-between p-4">
                    <h1 className="text-lg px-4">Add Todo</h1>
                   
                </div >

                    <input 
                    ref={title}
                    type="text" className="p-4 m-3 border border-gray-800  w-80 rounded-xl text-gray-900" placeholder="Enter title" />
                  
                  

                  <input 
                    ref={description}
                    type="text" className="p-4 m-3 border border-gray-800  w-80 rounded-xl text-gray-900" placeholder="Enter description" />
                  
                  {errorMessage && <p className="px-4 font-semibold text-red-500">{errorMessage}</p>}
                    
                    <button className="p-4  w-80 border border-gray-300 m-3 rounded-xl" onClick={updateData}>Add</button>
               
                  
            </div>
        </div>

        </div>
    )
}
export default AddTodo;
