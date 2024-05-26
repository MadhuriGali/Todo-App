import Board from "./Board";
import SideBar from "./SideBar";


const AddBoard=()=>{
    
    return (
       <div className="flex bg-gray-900 text-white">
            <SideBar/>
            <Board/>
        </div>

    )
}

export default AddBoard;