import { IoMdCheckboxOutline } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { FiMinusSquare } from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../custom-scrollbar.css';
import {motion} from 'framer-motion'
const TodoCards=(props)=>{
    console.log("todocard is rendering")
    const {boardname,todos,deleteCard}=props;
    const index=todos.todoindex;
    const [done,setDone]=useState(false);
    const navigate=useNavigate()

    const handleEdit=(title,description)=>{
        const url=`/editTodo/?index=${index}&title=${title}&description=${description}&boardname=${boardname}`;
        navigate(url);
    }

    const token=localStorage.getItem("user")

   const config = {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json' // Example of setting a Content-Type header
    },
    params:{
        boardname,
        title:todos.title,
        description:todos.description,
        index:index
    }
  };
    const handleDelete=async()=>{
        
        await axios.delete("https://todo-app-315b.onrender.com/todos/deleteTodos",config)   
        deleteCard();
    }

    return(
        <div>
            {
                done?
                <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ delay: 0.1 }}
                
                className="flex flex-wrap ">
       
        <div className="w-64 h-64 bg-gray-600  rounded-xl mx-2 ml-5   px-6 py-2 mt-7 ">
        <div className="overflow-auto h-40 custom-scrollbar">
            <div className="ml-24 mr-7">✅</div>
             <div className="text-2xl font-bold ml-7 ">
                {todos.title}
            </div >
            <div className="ml-7">
                {todos.description}
            </div>
            </div>
            <div className="flex mt-10  ml-9 ">
            <FiMinusSquare className="w-12 h-8  cursor-pointer" onClick={()=>setDone(!done)}/>
            <FiEdit className="w-12 h-8 cursor-pointer" onClick={()=>handleEdit(todos.title,todos.description)}/>
            <MdDelete className="w-12 h-8 cursor-pointer" onClick={handleDelete}/>
            </div>

           
        </div>
       
      
        </motion.div>:

<motion.div
 initial={{ opacity: 0, x: -50 }}
 animate={{ opacity: 1, x: 0 }}
 exit={{ opacity: 0, x: -50 }}
 transition={{ delay: 0.1 }}
className="flex flex-wrap ">
       
<div className="w-64 h-64 bg-gray-600 border-4 border-pink-600 rounded-xl mx-2 ml-5   px-6 py-2 mt-7 ">
    <div className="overflow-auto h-40 custom-scrollbar">
    <div className="text-2xl font-bold ml-7 ">
        {todos.title}
    </div >
    <div className="ml-7">
        {todos.description}
    </div>

    </div>
         
    <div className="flex mt-10  ml-9 ">
    <IoMdCheckboxOutline className="w-12 h-8  cursor-pointer" onClick={()=>setDone(!done)}/>
    <FiEdit className="w-12 h-8  cursor-pointer" onClick={()=>handleEdit(todos.title,todos.description)}/>
    <MdDelete className="w-12 h-8 cursor-pointer" onClick={handleDelete}/>
    </div>

   
</div>


</motion.div>
            }
        </div>

        
    )
}

export default TodoCards;
