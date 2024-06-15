const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv").config();
const cors = require('cors');
const app=express();
const boardRouter=require("./routes/board");
const todoRouter=require("./routes/todos");
const userRouter=require("./routes/user")
const isAuthenticated = require("./middleware/auth");

app.use(cors());
app.use(express.json());
app.use("/user",userRouter);

app.use("/board",isAuthenticated,boardRouter);

app.use("/todos",isAuthenticated,todoRouter);

app.get("/",(req,res)=>{
    res.json("server is up")
})

mongoose.connect(process.env.MONGO_URI).then(()=>{
   console.log("connected to database");
})



app.listen(process.env.PORT,()=>{
    console.log("server started")
})


