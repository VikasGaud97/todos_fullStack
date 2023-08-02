//Todo model
import mongoose from "mongoose";
// data query in mongoDB
const TodoSchema = mongoose.Schema({
    data:{
        type:String,
        required:true
    },
    done:{
        type:Boolean,
        default:false
    },
    delite:{
        type:Boolean,
        default:false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const todo = mongoose.model('todo',TodoSchema);
export default todo;