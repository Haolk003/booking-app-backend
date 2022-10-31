const mongoose=require('mongoose');
const {Schema}=mongoose;
const UserSchema=new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true
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
    city:{
        type:String,
        require:true
    },

    isAdmin:{
        type:Boolean,
        default:false
    },
    img:{
        type:String,
    },
    phone:{
        type:String,
        require:true
    },
    country:{
        type:String,
        require:true
    }
   
},{timestamps:true})
module.exports=mongoose.model('User',UserSchema);
