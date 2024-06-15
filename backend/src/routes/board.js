const { createBoard, editBoard, deleteBoard,getBoards,deleteAllBoards } = require("../controllers/boardcontroller");

const  express=require("express");
const isAuthenticated = require("../middleware/auth");
const router=express.Router();

router.post("/addBoard",createBoard)

router.put("/editBoard",editBoard)

router.delete("/deleteBoard",deleteBoard)

router.get("/getBoards",getBoards)

router.delete("/deleteAllBoards",deleteAllBoards)

module.exports=router;
