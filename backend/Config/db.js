import mongoose  from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect("mongodb+srv://anand:kandgule@cluster0.1azic.mongodb.net/food-del")
    .then(() =>{
        console.log("Connected to DB")
    })
    .catch((erroe) =>{
        console.log("Error connecting eith the data base" , error)
    })
}
