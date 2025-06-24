import mongoose, { mongo } from "mongoose";

const userSchema = mongoose.Schema({
  username: {type:String,required:true},
  email: {type:String,required:true,unique:true},
  password: {type:String,required:true},
  isAdmin: {type:Boolean,required:true,default:false}
},
{timestamps:true}); //timestamps - Gives specific time when we delete or update user

const User = mongoose.model('User',userSchema);

export default User;