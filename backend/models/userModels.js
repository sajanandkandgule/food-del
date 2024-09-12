import mongoose from "mongoose"


const userScheme = new mongoose.Schema({

    name:{type:String , required:true},
    email:{type:String, required:true , unique:true},
    password:{type:String , require:true},
    cartDate:{type:Object,default:{}}
}, {minimize:false})

const userModel = mongoose.models.user || mongoose.model("user", userScheme)

export default userModel