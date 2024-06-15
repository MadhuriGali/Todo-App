const Board=require("../models/board");

const createBoard=async (req,res)=>{
console.log(req.user)
 const {boardname}=req.body;
 try{
   let board=await Board.findOne({boardname,author:req.user});
   if(!board){
   
    board=await Board.create({author:req.user,boardname});
    console.log(board.author)
    
   }return res.status(200).json({name:board});
 }catch(error){
  console.log("got error in creating board")
    return res.status(400).json({error:error.message});
 }
}

const getBoards=async(req,res)=>{
  const id=req.user;
  try{
      const boards=await Board.find({author:id});
      res.status(200).json({boards:boards})
  }catch(error){
    console.log("got error in getting boards")
    return res.status(400).json({error:error.message});
  }

}



const editBoard=async(req,res)=>{
  const id=req.user;
  const {oldBoardname,boardname}=req.body;
  try{
    const board=await Board.findOne({author:id,boardname:oldBoardname})
    board.boardname=boardname;
    await board.save();
    res.status(200).json({boards:board})
  }
  catch(error){
    console.log("got error in getting boards")
    return res.status(400).json({error:error.message});
  }


}

const deleteBoard=async(req,res)=>{
  const id=req.user;
  const boardname=req.query.boardname
  try{
    const board=await Board.findOne({author:id,boardname:boardname})
    await Board.findOneAndDelete({_id:board._id})
    res.status(200).json({board});
  }
  catch(error){
    console.log("got error in deleting boards")
    return res.status(400).json({error:error.message});
  }

}


const deleteAllBoards=async(req,res)=>{
  const id=req.user;
  try{
    await Board.deleteMany({ author: id });
    res.status(200).json({msg:"all "});

  }catch(error){
    console.log("got error in deleting all boards")
    return res.status(400).json({error:error.message});
  }

}
module.exports={createBoard,editBoard,deleteBoard,getBoards,deleteAllBoards};