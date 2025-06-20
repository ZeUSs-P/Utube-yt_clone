import mongoose from "mongoose"
import { DB_NAME } from "../src/constants.js"
import express from "express"

const app = express()

app.use(express.json());

app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});
const connectDB = async()=>{
     try{
      const connectionistance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
      console.log(`MONGODB Connected DB HOST : ${connectionistance.connection.host}`)
     app.on('error',(err)=>{
        console.log("APP error",err)
        throw err
     })
     app.listen(process.env.PORT,()=>{
        console.log(`App listening on PORT ${process.env.PORT}`)
     })
     }catch(error){
        console.log("Error", error)
        throw error
     }

}

export default connectDB