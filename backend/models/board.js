const mongoose=require("mongoose");
const User = require("./user");

const boardSchema=new mongoose.Schema({
   author:{
    type:mongoose.Schema.Types.ObjectId,
    ref:User,
    require:true
   },
   boardname:{
    type:String,
    require:true,
   }
})

module.exports=mongoose.model("Board",boardSchema);