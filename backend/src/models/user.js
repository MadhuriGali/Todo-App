const mongoose=require("mongoose");
const bcrypt=require("bcrypt")
const validator=require("validator")

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true

    }
},{
    timestamps:true
}
)

userSchema.statics.signUp=async function(name,email,password){
    if(!email || !password){
        throw new Error("All fields must be filled")
    }

    if(!validator.isEmail(email)) throw new Error("Email is not valid")

        //if(validator.isStrongPassword(password)) throw new Error("password is not strong enough")

    const isEmailExist=await this.findOne({email});
    if(isEmailExist){
        throw new  Error("Email already exists")
    }
    const salt=await bcrypt.genSalt();
    const hashedPassword=await bcrypt.hash(password,salt)

    const user=await this.create({name,email,password:hashedPassword})
    return user;
}


userSchema.statics.login=async function(email,password){
   
        if(!email || !password){
            throw new  Error("All fields must be filled");
        }
        const user=await this.findOne({email});
        if(!user){
            throw new Error("Email not exists please signup..")
        }
        const passwordMatch=await bcrypt.compare(password,user.password);
        if(!passwordMatch)  throw new  Error("Incorrect password");
        return user;
   

}

module.exports = mongoose.model('User', userSchema);