//it wll contain yhe schema for mongoes
import mongoose from "mongoose";
const  todoSchema = new mongoose.Schema({
    taskName: {
        type:String,
        required:true
    },
    taskDesc: {
        type:String,
        required:true
    }

},{
    timestamps:true
})

export default mongoose.model("todo",todoSchema)