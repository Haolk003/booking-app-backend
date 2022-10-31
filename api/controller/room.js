const Room =require('../models/room');
const Hotel=require('../models/hotel');
const {createError} = require('../util/error');
const createRoom= async (req,res,next)=>{
     const hotelId=req.params.hotelid;
     const newRoom=new Room(req.body)
try{
    const saveRoom=await newRoom.save();
    try{
        await Hotel.findOneAndUpdate(hotelId,{$push:{rooms:saveRoom._id}},)
    }
    catch(err){
        next(err);
    }
    res.status(200).json(saveRoom);
}
catch(err){
    next(err);
}
}
const UpdateRoom =async(req,res,next)=>{
  
    try{
        const UpdateRoom=await Room.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.status(200).json(UpdateRoom);
       
    }
    catch(err){
        next(err);
    }
}

const UpdateRoomAvailability=async(req,res,next)=>{
try{
   await Room.updateOne({"roomNumbles._id":req.params.id},{$push:{
        "roomNumbles.$.unavailableDates":req.body.dates
    }});
    res.status(200).json('hello');
}
catch(err){
    next(err);
}
 }
const DeleteRoom=async(req,res,next)=>{
    const hotelId=req.params.hotelid;
    try{
    await Room.findByIdAndDelete(req.params.id);
        try{
            await Hotel.findByIdAndUpdate(hotelId,{
                $pull:{rooms:req.params.id}
            })
        }catch(err){
            next(err);
        }
    }catch(err){
        next(err);
    }
}
const FindRoom=async(req,res,next)=>{
    try{
        const room=await Room.findById(req.params.id);
        res.status(200).json(room);
    }
    catch(err){
        next(err);
    }
}
const FindAllRoom=async(req,res,next)=>{
    try{
        const room=await Room.find();
        res.status(200).json(room);
    }
    catch (err){
        next(err);
  
    }
}
module.exports={createRoom,UpdateRoom,DeleteRoom,FindAllRoom,FindRoom,UpdateRoomAvailability}