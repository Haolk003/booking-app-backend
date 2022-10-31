const User=require('../models/User');

const UpdateUser=async(req,res,next)=>{
    try{
        const updateUser=await User.findByIdAndUpdate(
            req.params.id,
            {$set:req.body},
            {new:true}
        );
        res.status(200).json(updateUser);
    }
    catch(err){
        next(err);
    }
}
const DeleteUser=async(req,res,next)=>{
    try{
        const DeleteUser=await User.findByIdAndDelete(req.params.id);
        res.status(200).json(DeleteUser);
    }
    catch(err){
        next(err);
    }
}
const GetUser=async(req,res,next)=>{
    try{
        const findUser=await User.findById(req.params.id);
        res.status(200).json(findUser);
    }
    catch(err){
        next(err);
    }
}
const GetUserAll=async(req,res,next)=>{
    try{
        const users=await User.find();
        res.status(200).json(users)
    }
    catch(err){
        next(err);
    }
}
module.exports={UpdateUser,DeleteUser,GetUser,GetUserAll};