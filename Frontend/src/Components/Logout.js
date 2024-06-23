import { MdLogout } from "react-icons/md";
import {useState} from 'react';
import { useNavigate } from "react-router-dom";
const Logout=()=>{
    const [isHovered,setIsHovered]=useState(false)
    const username=localStorage.getItem("username");
    const navigate = useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("token")
        navigate("/")
    }
    return <div className="flex "
    onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
    >
        <div className="border border-white font-bold rounded-full pl-3 pt-2  w-10 h-10  bg-slate-600 text-white">
       {username.charAt(0).toUpperCase() }
        </div>
        {
            isHovered && <div className="flex pl-2" >
                  <MdLogout className=" pt-2  w-10 h-10 bg-gray-700 cursor-pointer" />
                  <div className=" pt-2  pr-3 h-10 bg-gray-700 cursor-pointer" onClick={handleLogout}>Logout</div>
                  </div>
        }
        
    </div>
}
export default Logout;