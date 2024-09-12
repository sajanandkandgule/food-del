
import userModel from "../models/userModels.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"
// import { response } from "express";





const createToken = (id) =>{
      return jwt.sign({id},process.env.JWT_SECRET)
}

// registerUser 

const registerUser = async (req ,res) =>{
   const {name , email , password} = req.body
   try {
    // checking for user exists
     const exists =  await userModel.findOne({email})
     if(exists) {
        return res.json({success:false , message : "user Alread exists"})
     }
     // validateing emailformat and storng password
     if(!validator.isEmail(email)){
        return res.json({success:false , message : "Please Enter Valid Email"})
     }

     // password checking
     if(password.length<8){
        return res.json({success:false , message : "Please Enter Stroung Password"})
     }


   // hashing user password

   const salt = await bcrypt.genSalt(10)
   const hashedPassword = await bcrypt.hash(password, salt)

   const newUser =   new userModel({
    name:name,
    email:email,
    password:hashedPassword
   })

   const user = await newUser.save()
   const token = createToken(user._id)
   res.json({success:true , token})

   } catch (error) {
    console.log(error , "catch error")
    res.json({success:false,message:"error in the register"})
   }
}

// loginUser User

const loginUser = async (req ,res) =>{

    const  {email , password} = req.body
    try {
         const user  = await userModel.findOne({email})
         if(!user) {
            return res.json({success:false, message:"User Doesn't exis"} )
         }

        const isMatch = await bcrypt.compare(password , user.password)
        if(!isMatch){
            return res.json({success:false, message:"Invalid credential"})
        }

        const token = createToken(user._id)

        res.json({success:true,token})
    } catch (error) {
        console.log(error)
        res.json({success:false, message:"Error , login"})
    }
}


export {loginUser , registerUser}