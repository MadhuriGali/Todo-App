
import '../custom-scrollbar.css';

const Shimmer=()=>{
    return <div>
                   <h1 className="font-bold text-3xl px-8 mx-4 mt-5">Plan Your Day</h1>
                   <p className="text-gray-400 px-8 mx-4 py-2">Empowers you to achieve big things with small steps.</p>
        <div className="flex flex-wrap ">
       <div className="w-64 h-64 bg-gray-600 rounded-xl mx-2 ml-5   px-6 py-2 mt-7 ">
           <div className="overflow-auto h-40 custom-scrollbar">
           <div className="text-2xl font-bold ml-7 ">   
           </div >
           <div className="ml-7">  
           </div>
           </div>   
           
       </div>
       <div className="w-64 h-64 bg-gray-600  rounded-xl mx-2 ml-5   px-6 py-2 mt-7 ">
           <div className="overflow-auto h-40 custom-scrollbar">
           <div className="text-2xl font-bold ml-7 ">   
           </div >
           <div className="ml-7">  
           </div>
           </div>   
           
       </div>
       <div className="w-64 h-64 bg-gray-600  rounded-xl mx-2 ml-5   px-6 py-2 mt-7 ">
           <div className="overflow-auto h-40 custom-scrollbar">
           <div className="text-2xl font-bold ml-7 ">   
           </div >
           <div className="ml-7">  
           </div>
           </div>   
           
       </div>
       
       
       </div>
    </div>
}
export default Shimmer;