const jwt=require("jsonwebtoken")
const isAuthenticated=(req,res,next)=>{
  try{

   
    const token=req?.headers?.authorization?.split(" ")[1];
   const result= verifyToken(token);
   req.user=result.decoded?._id;
   console.log(result.valid)
   if(result.valid)  next();
   
   else res.json({msg:"please login to the application"})
   
  }
  catch(error){
    console.log(req?.headers)


  }
    
}

function verifyToken(token) {
    try {
      const decoded = jwt.verify(token,process.env.SECRET);
      // Token is valid
      return { valid: true, decoded };
    } catch (error) {
    // console.log(error)
      // Token verification failed
      return { valid: false, reason: 'Invalid token' };
    }
  }

  module.exports=isAuthenticated;