import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import axios from "axios";
const BoardCard=(props)=>{
    const {board,deleteCard}=props;
    const [isHovered,setIsHovered]=useState(false)
    const navigate = useNavigate();
    const handleBoardClick=(boardname)=>{
        navigate("/todos/"+boardname);
    }

    const handleEdit=(event,boardname)=>{
      event.stopPropagation();
      navigate("/editBoard/"+boardname)

    }
    const token=localStorage.getItem("user")
 
    const config = {
     headers: {
       'Authorization': `Bearer ${token}`,
       'Content-Type': 'application/json' // Example of setting a Content-Type header
     },
     params:{
      boardname:board.boardname
     }
   };
    const handleDelete=async(event)=>{
      event.stopPropagation();
      await axios.delete("https://todo-m1cxd9afo-madhus-projects-e4c58fb9.vercel.app/board/deleteBoard",config)   
      deleteCard();
      navigate("/home")
  }


    return (
      <div 
      className="flex  justify-between bg-gray-500 py-2 my-2 rounded-xl mx-2 text-white cursor-pointer  "
      onClick={() => handleBoardClick(board.boardname)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
  >
      <div className="whitespace-nowrap overflow-hidden text-ellipsis pl-4 pr-2 w-3/4">
          {board.boardname}
      </div>
      {isHovered &&
          <div className="flex">
            <div  onClick={(event)=>handleEdit(event,board.boardname)}>
              <FiEdit className="mx-2 w-5 h-5"/>
              </div>
              <MdDelete className="w-5 h-5" onClick={(event)=>handleDelete(event,board.boardname)}/>
          </div>
      }
  </div>
    )
}

export default BoardCard;
