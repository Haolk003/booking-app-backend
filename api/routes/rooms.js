const express=require('express');
const {DeleteRoom,FindAllRoom,FindRoom,UpdateRoom,createRoom,UpdateRoomAvailability} =require('../controller/room');
const {verifyAdmin}=require('../util/vertify');
const router=express.Router();
router.post('/:hotelid',verifyAdmin,createRoom);
router.get('/:id',FindRoom);
router.put('/update/:id/:hotelid',verifyAdmin,UpdateRoom);
router.get('/',FindAllRoom);
router.delete('/:id/:hotelid',verifyAdmin,DeleteRoom);
router.put('/availability/:id',UpdateRoomAvailability);
module.exports=router;