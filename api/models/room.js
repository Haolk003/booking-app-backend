const mongoose=require('mongoose');
const {Schema}=mongoose;
const RoomSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
      
    },
    price:{
        type:Number,
        required:true,
        
    },
    maxPeople:{
        type:Number,
        required:true,
        
    },
    roomNumbles:[{number:Number,unavailableDates:{type:[Date]},},{timestamps:true}],
    desc:{
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    },
   
},{timestamps:true})
module.exports=mongoose.model('Room',RoomSchema);
