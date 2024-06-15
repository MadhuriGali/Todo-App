const User=require("../models/user")
const jwt=require("jsonwebtoken")

const createToken=(_id)=>{
    return jwt.sign({_id},process.env.SECRET)
}

const signUp=async (req,res)=>{
    const {name,email,password}=req.body;

   
    try{
        const user=await User.signUp(name,email,password);
        const token=createToken(user._id)

        if(user){
            res.status(200).json({token})
        }else{
            res.status(404).json({ error: "User not found" });
        }
    }catch(error){
        res.status(400).json({ error: error.message });

    }
    
    
}

const login=async (req,res)=>{
    const {email,password}=req.body;
    
    try {
        const user = await User.login(email, password); 
        const token = createToken(user._id); 
        return res.status(200).json({token});
    } catch (error) {
        
        return res.status(400).json({error: error.message});
    }
   
}

module.exports={signUp,login}