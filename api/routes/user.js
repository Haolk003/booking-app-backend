const {DeleteUser,GetUser,GetUserAll,UpdateUser} =require('../controller/user');
const express=require('express');
const {verifyToken,verifyUser,verifyAdmin} =require('../util/vertify')
const router=express.Router();
// router.get('/checkauthentication',verifyToken,(req,res,next)=>{
//     res.send("hello user, you are logged in")
// });
// router.get('/checkuser/:id',verifyUser,(req,res,next)=>{
//     res.send('hello user,you are logged in and you can delete you account')
// })
// router.get('/checkadmin',verifyAdmin,(req,res,next)=>{
//     res.send('hello user,you are admin and you can delete all account');
// })
//Update
router.put('/:id',verifyUser,UpdateUser);
//Delete
router.delete('/:id',verifyUser,DeleteUser);
//get
router.get('/:id',verifyUser,GetUser);
// get All
router.get('/',verifyAdmin,GetUserAll);
module.exports=router;  