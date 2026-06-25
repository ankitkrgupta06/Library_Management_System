import mongoose from "mongoose";

const fineSettingSchema=new mongoose.Schema({
  amount:{type:Number,default:10},
  interval:{type:String,default:"day"},
},{
  timestamps:true
})

const FineSetting=mongoose.model("FineSetting",fineSettingSchema);

export default FineSetting;