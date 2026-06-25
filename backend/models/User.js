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
  rollNo:{type:String},
  isProfileComplete:{type:Boolean,default:false},
  studentId:{type:String,unique:true,sparse:true},
  role:{type:String,enum:['user','admin'],default:'user'},
},{
  timestamps:true
});

const User = mongoose.model('User', userSchema);

export default User;