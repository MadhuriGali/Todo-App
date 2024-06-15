
const express=require("express");
const { addTodo ,getTodos,editTodos,deleteTodos} = require("../controllers/todocontroller");

const router=express.Router();


router.post("/addTodo",addTodo)
router.get("/getTodos",getTodos)
router.put("/editTodos",editTodos)
router.delete("/deleteTodos",deleteTodos);

module.exports=router;