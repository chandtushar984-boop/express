import mongoose from  "mongoose";
//`import User from "user.models"


const todoSchema = new mongoose.Schema({
    taskName:{
        type:String,
        required:true,
    },
    createdBy:{
        type:mongoose.Schem.Types.ObjectId,
        ref:"User"
    }
});



export const User = mongoose.model("user",todoSchema)
