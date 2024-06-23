import Board from "./Board";
import { useState } from "react";
import SideBar from "./SideBar";
import animationData from "./anime.json";
import Lottie from "react-lottie";
import Logout from "./Logout";

const Home=()=>{
const [showBoard,setShowBoard]=useState(false)

    return (
        <div className="flex bg-gray-900 text-white">
            <SideBar/>
            {
                showBoard ?<Board/>:
            <div>
            <div className="flex justify-end">
                <div>
                <h1 className="font-bold text-3xl px-8 mx-4 mt-5">Plan Your Day</h1>
                <p className="text-gray-400 px-8 mx-4 py-2">Empowers you to achieve big things with small steps.</p>
              </div>
              <div  className=" mt-7 left-0 right-0 ml-auto "><Logout/></div>
             
              
           </div>
            <div className="flex">
                 <div>
                <h1 className="mt-36 mx-auto text-4xl font-semibold px-16">Create, <span className="text-blue-600">Complete, </span>Share!</h1>
                <p className="px-16 mt-6">Focus On Planning  Your Day</p>
                <p className="px-16 mt-4">Get things done with plan your day,a list that refreshes everyday
                </p>
                <button className="mx-16 mt-12 border border-blue-500 px-7 py-3 rounded-xl" onClick={()=>setShowBoard(!showBoard)}>Create Board</button>
            </div>
            
            <div className="pt-28 pl-36">
            <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: animationData,
          }}
          isClickToPauseDisabled={true}
          height={400}
          width={400}
        />
            </div>
                </div>
           
            
            </div>
            }
            
            
         
           
        </div>
    )
}
export default Home;