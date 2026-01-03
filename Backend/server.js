import "dotenv/config";
import express from "express";
import cors from "cors";
import chatRoutes from "./routes/chat.js";
import mongoose from "mongoose";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api",chatRoutes);



app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
  connectDB();
});

const connectDB = async ()=> {
  try{
    await mongoose.connect(process.env.MONGO_URL);
    console.log("db connected succesfully");
  }catch(err){
    console.log("failed to connect with db",err);
  }
}