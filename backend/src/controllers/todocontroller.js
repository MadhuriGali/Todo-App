const Todo=require("../models/todos")
const Board=require("../models/board");
const { findOneAndDelete } = require("../models/user");
const addTodo=async(req,res)=>{
    const {boardname,title,description,index}=req.body;
    console.log(index)
    const id=req.user;
    const boardId=await Board.find({author:id,boardname:boardname})
    let boardid=0;
    boardId.forEach(board => {
       boardid=board._id
      });  
    try{
     
        if(!title || !description) res.status(400).json({error:error.message});
        const todo=await Todo.create({boardname:boardid,title,description,todoindex:index});
        res.status(200).json({boardname,title,description})
    }catch(error){
        console.log("got error in adding todos")
        res.status(400).json({ error: error.message });
    }
}

const getTodos=async(req,res)=>{
    const boardname = req.query.boardname;
    const id=req.user;

    try{
        const boards=await Board.find({author:id,boardname:boardname})
    let boardid=0;
    boards.forEach(board => {
       boardid=board._id
      }); 
      if (boards.length === 0) {
        return res.status(200).json([]);
    }
        const todos=await Todo.find({boardname:boardid});
     
        res.status(200).json({todos})

    }catch(error){
        console.log("got error in gettodos")
        res.status(400).json({ error: error.message });
    }
}

const editTodos=async(req,res)=>{
    const {boardname,title,description,index}=req.body;
    const id=req.user;
    const boardId=await Board.find({author:id,boardname:boardname})
    let boardid=0;
    boardId.forEach(board => {
       boardid=board._id
      }); 
      try{
         const todos=await Todo.find({boardname:boardId,todoindex:index})   
        todos.forEach(async(todo)=>{
            todo.title=title,
            todo.description=description,
            await todo.save();
            }
            
        )
      
         res.status(200).json({todos});     

      }catch(error){
        console.log("got error in edittodos")
        res.status(400).json({ error: error.message });
    }

}

const deleteTodos=async (req,res)=>{
    const boardname=req.query.boardname;
    const title=req.query.title;
    const description=req.query.description;
    const index=req.query.index;
    const id=req.user;
    const board=await Board.findOne({author:id,boardname:boardname})
      try{
         const todos=await Todo.findOneAndDelete({boardname:board._id,todoindex:index})   
         res.status(200).json({todos});     

      }catch(error){
        console.log("got error in deletetodos")
        res.status(400).json({ error: error.message });
    }

}
module.exports={addTodo,getTodos,editTodos,deleteTodos}