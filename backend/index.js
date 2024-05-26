const express=require("express");
const mongoose=require("mongoose");
const dotenv=require("dotenv").config();
const userRouter=require("./routes/user")
const cors = require('cors');
const app=express();
const boardRouter=require("./routes/board");
const todoRouter=require("./routes/todos");
const isAuthenticated = require("./middleware/auth");

app.use(cors(
    {
        origin:["https://todo-app-zkaj-45hdjk199-madhus-projects-e4c58fb9.vercel.app"],
        methods: ["POST", "PUT", "GET", "DELETE"],
        credentials:true
    }
));
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


