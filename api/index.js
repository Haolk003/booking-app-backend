const express = require('express');
const mongoose=require('mongoose');
const dotenv = require('dotenv');
const authRoute=require('./routes/auth');
const RoomRoute=require('./routes/rooms');
const hotelsRoute=require('./routes/hotels');
const UserRoute=require('./routes/user');
const cookieParser=require('cookie-parser');
const cors=require('cors');
const app =express();

dotenv.config();
async function main() {
    try{
         await mongoose.connect(process.env.MONGO);
         console.log('connect to MongoDB');
    }
    catch(err){
        console.log(err);
    }
 
};
app.use(cors());
app.use(express.json());
app.use(cookieParser())
app.use('/api/auth',authRoute);
app.use('/api/hotels',hotelsRoute)
app.use('/api/rooms',RoomRoute);
app.use('/api/user',UserRoute);

app.use((err,req,res,next)=>{
  const errorStatus=err.status || 500;
  const errorMessage=err.message || 'something went wrong';
  return res.status(errorStatus).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack ,
  })
})
app.listen(5000,()=>{
    main()      
    console.log('Connected Sever')});