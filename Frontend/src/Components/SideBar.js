import { BsXSquare } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { BsFillGridFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import axios from "axios";
import '../custom-scrollbar.css';


import { useNavigate } from 'react-router-dom';
import BoardCard from "./BoardCard";
const SideBar=()=>{
    //console.log("sidebar is rendering")
    const [isDeleted,setIsDeleted]=useState(false);
    const [showSideBar,setShowSidebar]=useState(false);
    const [boards,setBoards]=useState([])
  
    const navigate = useNavigate();

    const handleClick=()=>{
        setShowSidebar(!showSideBar)
    }
    const handleAdd=()=>{
        navigate("/addBoard")
    }
   
   useEffect(()=>{
        updateSidebar();
   },[isDeleted])

   const token=localStorage.getItem("user")

   const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json' // Example of setting a Content-Type header
    }
  };
//console.log(config.headers.Authorization.split(" ")[1]);
   const updateSidebar=async ()=>{
        const response=await axios.get("https://todo-cdl1xuda2-madhus-projects-e4c58fb9.vercel.app/board/getBoards",config);
        setBoards(response?.data?.boards);
         //console.log(response);
   }

   const deleteAllBoards=async()=>{

    await axios.delete("https://todo-cdl1xuda2-madhus-projects-e4c58fb9.vercel.app/board/deleteAllBoards",config) ;
 
    navigate("/home")
   }

    return (
        <div>
            {
            
                <div className="bg-black bg-opacity-80  ">
            {
                showSideBar?
                <div className="bg-black bg-opacity-85  w-16 h-screen rounded-xl text-gray-300 cursor-pointer p-4" onClick={handleClick}>
                <BsFillGridFill />
                </div>:
                <div className="bg-black bg-opacity-85  w-64 h-screen rounded-xl">
                <div className="flex justify-between px-4 pt-4 pb-2 text-gray-300 border-b border-gray-400">
                    <div className="py-2 cursor-pointer" onClick={handleClick}><BsXSquare /></div>
                    <h1 className="font-semibold text-2xl px-14">Menu</h1>
                </div>
                <div className="flex justify-between p-4  text-gray-300">
                    <h1 className="text-xl">Your Boards</h1>
                    <div className="pt-2 cursor-pointer" onClick={()=>deleteAllBoards()}><FaRegTrashCan /></div>
                </div>
                <div className="h-96 overflow-auto custom-scrollbar">
                            {boards.map((board) => (
                                <BoardCard key={board.id} board={board} deleteCard={() => setIsDeleted(!isDeleted)} />
                            ))}
                        </div>
                <div className="bg-gray-500 pl-28 py-3 rounded-xl mt-3  mx-2 cursor-pointer " onClick={handleAdd}><FaPlus /></div>    
            </div>
            } 
        </div>
            }
        </div>
        
    )
}

export default SideBar
