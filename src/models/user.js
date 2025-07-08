import mongoose from "mongoose";
import { Schema } from "mongoose";

export const userschema = new Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    }

})

export const user =mongoose.model("user",userschema)