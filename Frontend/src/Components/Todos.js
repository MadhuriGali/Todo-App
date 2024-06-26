import SideBar from "./SideBar"
import TodoCards from "./TodoCards";
import { useParams } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import {motion} from 'framer-motion'
import Logout from "./Logout";
const Todos=()=>{
    const [isDeleted,setIsDeleted]=useState(false);
    const [todos,setTodos]=useState([])
    const navigate = useNavigate();
    const {boardname}=useParams()
    useEffect(()=>{
        fetchData();
    },[boardname,isDeleted])
    const handleAdd=()=>{
        navigate("/addtodo/"+boardname)
    }

    const token=localStorage.getItem("user")

   const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json' // Example of setting a Content-Type header
    },
    params:{boardname}
  };                            
    const fetchData=async()=>{
        const response=await axios.get("https://todo-app-315b.onrender.com/todos/getTodos",config);
        console.log(response?.data?.todos);
        if(response?.data?.todos)setTodos(response?.data?.todos)
  
    }
    return (
        <div  className="flex bg-gray-900 text-white">
           <SideBar/>
           <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ delay: 0.1 }}
           >
            <div className="flex justify-end">
                <div>
                <h1 className="font-bold text-3xl px-8 mx-4 mt-5">Plan Your Day</h1>
                <p className="text-gray-400 px-8 mx-4 py-2">Empowers you to achieve big things with small steps.</p>
              </div>
              <div  className="mt-7 pl-96"><Logout/></div>
             
              
           </div>
            <h1 className="font-semibold text-3xl px-8 mx-4 mt-5">{boardname}</h1>
            <div className="flex flex-wrap">
            {
                todos.map((todo)=>{
                    return(
                       
                        <TodoCards key={todo._id} className="flex flex-wrap" boardname={boardname} todos={todo} deleteCard={()=>{
                            setIsDeleted(!isDeleted)
                        }}/>
                    )
                    
                })
                
            }
            <div className="w-64 h-64 bg-gray-600 border-4 border-pink-600 rounded-xl  p-28 mt-7 cursor-pointer mx-2 ml-8" onClick={handleAdd}>
            <FaPlus/>
            </div>

            </div>
            
            </motion.div>
           
            
        </div>
    )
}
 export default Todos;
