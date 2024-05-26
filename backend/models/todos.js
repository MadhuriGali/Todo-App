const mongoose=require("mongoose");
const Board= require("./board");

const todoSchema=new mongoose.Schema({
    boardname:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Board,
        required:true
    },
    title:{
        type:String,
        required:true,  
    },
    description:{
        type:String,
        required:true
    },
    todoindex:{
        type:Number,
        require:true
    }
})
module.exports = mongoose.model('Todo', todoSchema);