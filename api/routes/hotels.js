const express=require('express');
const {createHotel,FindAllHotel,FindHotel,DelHotel,UpdateHotel,countByCity,countByType,findRoomHotel}=require('../controller/hotel');
const {verifyUser,verifyAdmin} =require('../util/vertify')
const router=express.Router();
router.post('/',verifyAdmin,createHotel);
//Update
router.put('/:id',verifyAdmin,UpdateHotel);
//Delete
router.delete('/:id',verifyAdmin,DelHotel);
//get
router.get('/find/:id',FindHotel);
// get All
router.get('/',FindAllHotel);
router.get('/countByCity',countByCity);
router.get('/countByType',countByType);
router.get('/find/RoomHotel/:id',findRoomHotel);
module.exports=router;  