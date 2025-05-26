import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type:String
    },
    email:{
        type:String
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export const user = mongoose.model("Users",userSchema)
