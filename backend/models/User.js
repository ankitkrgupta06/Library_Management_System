import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
  name:{type:String,required:true},
  email:{type:String,required:true,unique:true},
  phone:{type:String,required:true},
  password:{type:String,required:true},
  otp:{type:String},
  otpExpiry:{type:Date},
  isVerified:{type:Boolean,default:false},
  department:{type:String},
  stream:{type:String},
  semester:{type:String},
  year:{type:String},
  rollno:{type:String},
  isProfileComplete:{typr:Boolean,default:false},
  studentId:{type:String,required:true,unique:true,sparse:true},
  role:{type:String,enum:['user','admin'],default:'user'},
},{
  timestamps:true
});

module.exports=mongoose.model('User',userSchema);