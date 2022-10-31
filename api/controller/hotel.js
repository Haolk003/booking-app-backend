const Hotel=require('../models/hotel');
const Room =require('../models/room');
const createHotel=async(req,res,next)=>{
const newHotel=new Hotel(req.body);
try{
    const savedHotel=await newHotel.save();
    res.status(200).json(savedHotel)
}catch(err){
    next(err);
}
};
const UpdateHotel=async(req,res,next)=>{
    try{
        const UpdateHotel=await Hotel.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true});
        res.status(200).json(UpdateHotel);
    }
    catch(err){
       next(err);
    }
}
const DelHotel=async(req,res,next)=>{
    try{
        await Hotel.findByIdAndDelete(req.params.id);
        res.status(200).json('Deleted');
    }
    catch(err){
        next(err);
    }
}
const FindHotel=async(req,res,next)=>{
    try{
        const hotel=await Hotel.findById(req.params.id);
        res.status(200).json(hotel);
    }
    catch(err){
        next(err);
    }
}
const FindAllHotel=async(req,res,next)=>{
    const {min,max,...others}=req.query
    try{
        const hotel=await Hotel.find({...others,cheapestPrice:{$gt:min || 1 , $lt:max || 999}}).limit(req.query.limit);
        res.status(200).json(hotel);
    }
    catch (err){
        next(err);
  
    }
}
const countByCity=async (req,res,next)=>{
    const cities=await req.query.cities.split(',');
    try{
        const List=await Promise.all(
            cities.map((item)=> { 
               return Hotel.countDocuments({city:item})})
        );
        res.status(200).json(List);
    }
    catch(err){
        next(err)
    }
}
const countByType=async (req,res,next)=>{
    try{
        const hotel=await Hotel.countDocuments({type:'hotel'});
        const apartments=await Hotel.countDocuments({type:'apartment'});
        const resorts=await Hotel.countDocuments({type:'resort'});
        const villas=await Hotel.countDocuments({type:'villa'});
        const cabins=await Hotel.countDocuments({type:'cabin'});
        res.status(200).json([
            {type:"hotel",count:hotel},
            {type:'apartments',count:apartments},
            {type:"resorts",count:resorts},
            {type:"villas",count:villas},
            {type:"cabins",count:cabins},
        ])
    }catch(err){
        next(err);
    }
}
const findRoomHotel=async(req,res,next)=>{
    const id=req.params.id;
    
    try{
        const hotel=await Hotel.findById(id);
        const rooms=await Promise.all(
            hotel.rooms.map((item)=>{
                return Room.findById(item);
            })
        )
        res.status(200).json(rooms);
    }catch(err){
        next(err)
    }
}
module.exports={createHotel,UpdateHotel,DelHotel,FindHotel,FindAllHotel,countByCity,countByType,findRoomHotel};