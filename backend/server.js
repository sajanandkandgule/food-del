import express from 'express'
import cors from "cors"
import { connect } from 'mongoose'
import { connectDB } from './Config/db.js'
import foodRouter from './routes/foodRoute.js'
import userRouter from './routes/userRoutes.js'
import "dotenv/config"

//app config

const app = express()
const port = 4000

// middleware

app.use(express.json())
app.use(cors())

// DB connection
connectDB()

//api EndPoint

app.use("/api/food" , foodRouter)
app.use("/images",express.static("uploads"))
app.use("/api/user" , userRouter)

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).send('Something broke!');

//   });
app.get("/" , (req, res) =>{
    res.send("api Is working")
})



app.listen(port , () =>{
    console.log(`server is running on http://localhost:${port}`)
})



// mongodb+srv://anand:kandgule@cluster0.1azic.mongodb.net/?


// mongodb+srv://anand:kandgule@cluster0.1azic.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0