import mongoose from "mongoose"

const userSchema=new mongoose.Schema({
    username:{
        type:"string",
        required:[true,"please provide a username"],
        unique:true,
    },
    email:{
        type:"string",
        required:[true,"please provide a email"],
        unique:true,
    },
    password:{
        type:"string",
        required:[true,"please provide a password"],
        unique:true,
    },
    isVerified:{
        type:Boolean,
        default:false
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
    forgotenPasswordToken:String,
    forgotenPasswordExpiry:Date,
    verifyToken:String,
    verifyTokenExpiry:Date,
})

const User=mongoose.models.users || mongoose.model("users",userSchema);
export default User;