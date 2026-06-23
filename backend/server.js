import express from 'express';
import cors from 'cors';
import 'dotenv/config';

const PORT=5000;
const app=express();

app.get("/",(req,res)=>{
  res.send("API WORKING");
})

app.listen(PORT,()=>{
  console.log("SERVER RUNNING ON :", PORT);
})