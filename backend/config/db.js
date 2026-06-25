import mongoose from "mongoose";

export const connectDB=async()=>{
  mongoose.connect("mongodb+srv://ankitguptaodb09_db_user:QyZ9Cym4fjnyJOj3@cluster0.xjsjk1u.mongodb.net/Library").then(()=>{
    console.log("DB Connected");
  })

}