import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name : {
        type : String,
        unique : true,
        required : true
    },
    email : {
        type : String,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    role : {
        type : String,
        required : true
    },
    img : {
        type : String, 
    },
    fromGoogle : {
        type : Boolean,
        default : false
    }
}, {timestamps : true});

export default mongoose.model('User', UserSchema);